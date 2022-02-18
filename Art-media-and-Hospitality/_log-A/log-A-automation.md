# 2021/10/25
## Batch change .srt file text according to existing dictionary - subtitling
### Solution 1
```python
# https://www.irongu.cn/2020/06/25/%E6%A0%B9%E6%8D%AE%E5%AD%97%E5%85%B8%E6%89%B9%E9%87%8F%E6%9B%BF%E6%8D%A2%E6%96%87%E5%AD%97/
with open('2.txt','r',encoding='utf-8') as f:
    data=f.read()

with open('1.txt','r',encoding='utf-8') as f:

    match_lines=f.readlines()
    match_str={}
    for line in match_lines:
        line=line.split()
        match_str[line[0]]=line[1]
    print(match_str)

for o_str in match_str:
    data=data.replace(o_str,match_str[o_str])


with open('new.txt','w',encoding='utf-8') as f:
    f.write(data)
```
### Solution 2
```python
#https://www.bbsmax.com/A/Gkz1oy6Q5R/
#encoding: utf-8
a_dict = {1:'你好',2:'我好',3:'大家好'}
 
input_file = open(r'C:\Users\xxxx\Desktop\shuju\shuju.txt','r')   #read源文件
output_file = open(r'C:\Users\xxxx\Desktop\shuju\result.txt','a+')  #追加写入结果文件
line = input_file.readline()
 
while line:  #逐行读取源文件
    a = line.split()  #每一行转换为一个列表-list
    res = []  #建立结果列表
    for item in a:
        res.append(a_dict[int(item)])  #将结果写入结果列表
    output_file.write(str(res)+ '\n')  #将结果列表追加写入结果文件
    line = input_file.readline()
 
input_file.close()     #关闭文件
output_file.close()

```