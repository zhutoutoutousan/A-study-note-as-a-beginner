echo "Please, your username"
read tmp
echo """Are you sure that your current git config username and
email or those in local ./git/config are the same as the repo in question?(yY/nN)"""
read consistency
# If user type "y" or "Y" or "n" or "N", then continue, if not, keep asking user to type
while [ "$consistency" != "y" ] && [ "$consistency" != "Y" ] && [ "$consistency" != "n" ] && [ "$consistency" != "N" ]
do
    echo "Please type yY or nY"
    read consistency
done

# If $consistency is not y, Y, then ask user for username and email
if [ "$consistency" != "y" ] && [ "$consistency" != "Y" ]
then
    echo "Sorry to hear that, plz, your temp username, your global settings will be restored on exit"
    read username
    echo "Sorry to hear that, plz, your temp email, your global settings will be restored on exit"
    read email

    # Ask user "Do you want to save your settings in .git/config?" If user type yY, then write .git/config file and store the username and email in $username and $email in [user]
    echo "Do you want to save your settings in .git/config?(yY/nN)"
    read save
    while [ "$save" != "y" ] && [ "$save" != "Y" ] && [ "$save" != "n" ] && [ "$save" != "N" ]
    do
        echo "Please type yY or nN"
        read save
    done
    if [ "$save" = "y" ] || [ "$save" = "Y" ]
    then
        # If there is no [user] section in .git/config, then create it
        if ! grep -q "^\[user\]" .git/config
        then
            echo "[user]" >> .git/config
        fi
        echo
        echo "username = $username" >> .git/config
        echo "email = $email" >> .git/config
    fi
    # previous git username variable
    prevUsername=$(git config --global user.name)
    # previous git email variable
    prevEmail=$(git config --global user.email)
    git config --global user.name $username
    git config --global user.email $email
fi


if [ -z "$tmp"]
then
    echo "Using current git username as default"
    username=$(git config user.name)
else
    echo "Using $tmp"
    username=$tmp
fi

unset tmp

# Read if there is commit message
echo "Plz, your commit message(Default: Aktualisierung)"
read tmp
if [ -z "$tmp"]
then
    echo "Using default message"
    # Append current time to commit message
    commitMessage="Aktualisierung $(date +%Y-%m-%d-%H-%M-%S)"
else
    echo "Using $tmp"
    commitMessage=$tmp
fi

# get the current git repository name and save it to a variable
repoUrl=$(git config remote.origin.url | sed 's/.*:\/\/github.com\///' | sed 's/\.git//')
repoName=$(echo $repoUrl | sed 's/.*\///')
echo Uploading to $username

git add .
git commit -am "$commitMessage"

# if $username is not empty, then upload to github
if [ -n "$username" ]
then
    git push git@github.com:$username/$repoName.git
else
    # Use $repoUrl
    echo "Using current repoUrl: $repoUrl"
    git push $repoUrl
fi

# restore previous git username and email if needed
if [ "$consistency" != "y" ] && [ "$consistency" != "Y" ]
then
    git config --global user.name $prevUsername
    git config --global user.email $prevEmail
fi

# Unset 
unset username
unset email
unset commitMessage
unset repoUrl
unset repoName
unset prevUsername
unset prevEmail
unset consistency
