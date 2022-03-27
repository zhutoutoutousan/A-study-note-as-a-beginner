echo "Plz, your username(Default: zttts)"
read tmp
if [ -z "$tmp"]
then
    echo "Using default name"
    username="zhutoutoutousan"
else
    echo "Using $tmp"
    username=$tmp
fi

unset tmp

echo Uploading to $username

# Generate random string


git add .
git commit -am "Aktualisierung"
git push git@github.com:$username/A-study-note-as-a-beginner.git
