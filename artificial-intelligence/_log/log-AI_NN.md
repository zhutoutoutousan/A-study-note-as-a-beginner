
# 2021/11/23 - Learn from others' mistakes
## Tensorflow - JSON Parse error: Invalid value. at offset: 0"
- `curl: "JSON Parse error: Invalid value. at offset: 0"`
  - Solution set
    - [TensorFlow服务无法通过预测](https://mlog.club/article/3876817)

- Bad Request 400
  - Solution Set
    - High confidence
      - https://pretagteam.com/question/http-error-400-bad-request-calling-api-with-python
    - Low confidence
      - https://stackoverflow.com/questions/65574746/tensorflow-serving-returns-400-bad-request-error
  - Material
    - [Tensorflow - api-rest](https://www.tensorflow.org/tfx/serving/api_rest)
  - Tools
    - Fidder Everywhere
  - Context
    - [json.dump()](https://www.geeksforgeeks.org/json-dumps-in-python/#:~:text=dumps()-,json.,object%20into%20a%20json%20string.&text=skipkeys%3AIf%20skipkeys%20is%20true,instead%20of%20raising%20a%20TypeError.)

```
~话术库 嗯嗯,如果我给出的solution集和您最终解决问题所用的solution集类似的话, 麻烦您给个反馈哈, 谢谢~!@黄帅傅 
```