echo "Plz, your username(Default: zttts)"
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
    commitMessage="Aktualisierung"
else
    echo "Using $tmp"
    commitMessage=$tmp
fi


echo Uploading to $username

git add .
git commit -am "$commitMessage"
git push git@github.com:$username/A-study-note-as-a-beginner.git
