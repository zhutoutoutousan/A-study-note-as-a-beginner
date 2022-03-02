echo "Plz, your username(Default: Current Git Username)"
read tmp
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

