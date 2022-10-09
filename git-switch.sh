# If git-info.txt doesn't exist, then create it with current git username and email
if [ ! -f "git-info.txt" ]
then
    echo "Creating git-info.txt"
    echo "username = $(git config user.name)" >> git-info.txt
    echo "email = $(git config user.email)" >> git-info.txt
fi

# Ask user for username and email for this particular git repo
echo "Please, your username"
read tmp
git config user.name $tmp