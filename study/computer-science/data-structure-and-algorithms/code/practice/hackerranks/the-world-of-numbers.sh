# https://www.hackerrank.com/challenges/bash-tutorials---the-world-of-numbers/problem
while IFS= read -r line;
do
    count=0
    c=$((a+b))
    echo $a
    echo $b
    echo $((a + b))
    echo $a-$b
    echo $a*$b
    echo $a/$b
done
