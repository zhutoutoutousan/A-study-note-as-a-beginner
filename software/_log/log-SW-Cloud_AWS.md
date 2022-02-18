# Table of Contents
- [Table of Contents](#table-of-contents)
- [Temp Documentation Memoization Space](#temp-documentation-memoization-space)
- [AWS踩坑树](#aws踩坑树)
- [Erudition](#erudition)
- [_resource track](#_resource-track)
- [Recursive Ransack Effort Track](#recursive-ransack-effort-track)
- [Distributed Random Hands-on Effort Track](#distributed-random-hands-on-effort-track)
- [Concentrated Effort track](#concentrated-effort-track)
  - [AWS SAM](#aws-sam)
    - [Documentation Internalization](#documentation-internalization)
  - [AWS Kinesis](#aws-kinesis)
- [2022/2/14](#2022214)
- [2022/2/15](#2022215)
- [_ARCHIVED_ contents](#archived-contents)

# Temp Documentation Memoization Space
- AWS Lambda function handler in Node.js
- Amazon API Gateway REST API tutorials
  - _Handsonmark: Build an API Gateway REST API with Lambda integration
  - Tutorial: Build a REST API with HTTP non-proxy integration
# AWS踩坑树
- AWS Cloudwatch
  - API Gateway/Lambda出错, Cloudwatch不报错
    - callback如果500,400,403,404,500,503,504,请求失败等不触发Cloudwatch?
      - throw可以触发报错
      - 见下文日志代码部分
- AWS VPC
  - aws中创建一个公有子网放负载均衡，然后创建一个私有子网放服务器，那么如何可以使负载均衡可以访问服务器呢
  - Create Subnet
    - CIDR Address is not within CIDR Address from VPC
    - CIDR Address overlaps with existing Subnet CIDR: 10.0.0.0/24
      - [AWS VPC Create Subnet in with different zone](https://stackoverflow.com/questions/23044317/aws-vpc-create-subnet-in-with-different-zone)
      - [CIDR Address overlaps with existing Subnet CIDR: 192.168.0.0/16](https://forums.aws.amazon.com/thread.jspa?messageID=954284)
        - Maybe it clashed with another subnet
- AWS CLI
  - <span style="color:green">aws sts get-caller-identity simply freezes</span>
    - `Failed to connect to proxy URL`
      - [How to Troubleshoot 'Cannot Connect to Proxy' Error - AWS S3](https://stackoverflow.com/questions/52937886/how-to-troubleshoot-cannot-connect-to-proxy-error-aws-s3)
      - Set PAC
        - _meta
          - **It works**
        - You get caught
          - Treat it like a free hotel
        - Blocked by the BELOVED firewall
- AWS Lambda
  - Add trigger
    - `An error occurred when creating the trigger: The log group provided is reserved for the function logs of the destination function. (Service: AWSLogs; Status Code: 400; Error Code: InvalidParameterException; Request ID:; Proxy: null)`
  - Integration with VPC
    - `The provided execution role does not have permissions to call CreateNetworkInterface on EC2`
    - `We recommend that you choose at least 2 subnets for Lambda to run your functions in high availability mode.`
- AWS API Gateway
  - Overview CONFUSED
    - [A Detailed Overview of AWS API Gateway](https://www.alexdebrie.com/posts/api-gateway-elements/)
  - Create Model
    - ` Invalid model specified: Validation Result: warnings : [], errors : [Invalid model schema specified. Unsupported keyword(s): [...]`
      - [json-schema.org](http://json-schema.org/learn/getting-started-step-by-step.html)
  - Hardcode response
# Erudition
- [Cloud Services For Dummies, IBM Limited Edition](https://www.ibm.com/cloud-computing/files/cloud-for-dummies.pdf)

# _resource track
- 2021/12/30-2021/3/30
  - Lightsail Free-Tier Termination Cycle


# Recursive Ransack Effort Track
- Tagging
  - https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags
- **Free-tier**
  - [link](https://aws.amazon.com/free-tier-pricing/)
# Distributed Random Hands-on Effort Track
- [ ] Amazon Lightsail - console entry tutorial

# Concentrated Effort track
## AWS SAM
### Documentation Internalization
## AWS Kinesis

# 2022/2/14
- Win10环境, 黑客如何拿到用户环境变量中的key, 并且找到对应的IAM用户?
- 我想优雅地在IAM(CLI, Console), root之间切换, 如何做到？
  - Set command

# 2022/2/15
```javascript
// Q: 这段代码放哪里?
// trigger CloudWatch Alarm
const cloudwatch = new AWS.CloudWatch();
const params = {
    MetricData: [
        {
            MetricName: 'ImageProcessingError',
            Dimensions: [
                {
                    Name: 'ImageProcessingError',
                    Value: 'ImageProcessingError'
                }
            ],
            Unit: 'Count',
            Value: 1
        }
    ],
    Namespace: 'ImageProcessing'
};
cloudwatch.putMetricData(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
```


# _ARCHIVED_ contents
- The previous contents has been archived for its inconsistency with the current pursuit but yet still reserves reference values

