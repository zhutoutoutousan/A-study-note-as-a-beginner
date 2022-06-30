# Table of Contents
- [Table of Contents](#table-of-contents)
- [Temp Documentation Memoization Space](#temp-documentation-memoization-space)
- [Utility](#utility)
- [AWS Hands-on Tree for World Record Set](#aws-hands-on-tree-for-world-record-set)
- [AWS Troubleshooting Tree](#aws-troubleshooting-tree)
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

# Utility
- [TEST-CORS](https://www.test-cors.org/)


# AWS Hands-on Tree for World Record Set
- _alias
  - PASS THE EXAM: PTE
  - UDM: Udemy course
- EC2
  - EC2 Scheduled Event
    - [ ] EC2::ScheduledTerminate
      - [AWS Instance Scheduler (Start/Stop EC2 & RDS instances automatically) - Full Real-time Demo.](https://www.youtube.com/watch?v=6d9gBn2Xv8s)
      - [How do I stop and start my instances using the AWS Instance Scheduler?](https://www.youtube.com/watch?v=nTLEyo2NzUs)
      - [AWS Instance Scheduler | Step by Step tutorial to Start and Stop EC2 and RDS Instances](https://www.youtube.com/watch?v=oooxZsz0hS4)
  - EC2 Placement Groups 
    - UDM - 80%
  - EC2 Instances Launch Types
    - UDM - 80%
- SSM Parameter Store
  - UDM - 80%
- RDS
  - RDS: Create an RDS Instance - 80%
    - PTE | 9-45-37/9-34-26~9-45-37
  - RDS: View performance Insights
    - PTE | 9-46-39/9-45-51~ 
- CW
  - CloudWatch Logs
    - UDM - 70%
  - CloudWatch Alarms
    - UDM - 100%
  - EventBridge
    - UDM - 50%
- CF
  - Create a CF
    - PTE
- VPC
  - VPC Hands On
    - UDM - 80%
  - Bastion Hosts
    - UDM
  - NAT Gateway
    - UDM
  - Subnet Hands On
- [AWS SysOps Administrator Associate 2020 (PASS THE EXAM!) - Shallow Hands-On Only](https://www.youtube.com/watch?v=KX_AfyrhlgQ&t=13s)
- Ultimate AWS Certified SysOps Administrator Associate 2022
# AWS Troubleshooting Tree
- AWS Amplify
  - Next.js + Cloud9 + Appsync
    - `Unhandled Runtime Error TypeError: require.e is not a function`
      - sxxt still work, archive it
    - `ReferenceError: navigator is not defined`
      - sxxt still work, archive it
  - AWS Cloud9
    - `node:internal/buffer:959 \ super(bufferOrLength, byteOffset, length);^ \ RangeError: Array buffer allocation failed`
      - [Does anyone know why I'am getting error during amplify init ? I checked the memory is not full?](https://stackoverflow.com/questions/71984811/does-anyone-know-why-iam-getting-error-during-amplify-init-i-checked-the-memo)
        - 2022/6/8: It fxxkin' worked！
    - `amplify init`
      - `UnrecognizedClientException: The security token included in the request is invalid.`
      - `Failed to get profile: Profile configuration for 'udemy-amplify-courseuser' is invalid: missing aws_access_key_id, aws_secret_access_key`
        - Run `amplify configure`
      - `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`
        - Try again pal
      - `npm ERR! nospc There appears to be insufficient space on your system to finish.`
        - *Consult your brain*
          - EC2 Modify EC2 Volume Storage
            - Context
              - [Amazon EBS pricing](https://aws.amazon.com/ebs/pricing/?nc1=h_ls)
              - [Amazon EBS Elastic Volumes RTFM](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modify-volume.html)
            - _next
              - `df -h`木有更新?
                - Reboot EC2 instance
        - *Consult other brains*
          - *该充钱了*
            - [npm ERR! nospc ENOSPC: no space left on device | Stack Overflow](https://stackoverflow.com/questions/57121690/npm-err-nospc-enospc-no-space-left-on-device)
    - *起飞!*
      - `AWS Amplify, "Error: No credentials" when getting items from AppSync graphql API`
        - `Module not found: Can't resolve 'aws-crt'`
          - [NextJS: Build fails with Module not found (webpack) - Github](https://github.com/aws-amplify/amplify-hosting/issues/2427)
          - `/node_modules/aws-crt/dist/native/binding.js Critical dependency: the request of a dependency is an expression`
            - Check Browser Console to get more insight on the error
              - [AuthError - Error: Amplify has not been configured correctly](https://stackoverflow.com/questions/63605779/autherror-error-amplify-has-not-been-configured-correctly)
                - *重来一遍终于好了*
                  - Lesson learned:
                    - Amplify Next.js前后端不分离玩具项目最好不要分client文件夹, 不然各种报错
                      - There must be some node_modules config that points to the Amplify SDK in the upper directory
                      - 
      - `Unchecked runtime.lastError: The message port closed before a response was received.`
        - [How to fix 'Unchecked runtime.lastError: The message port closed before a response was received' chrome issue?](https://codehunter.cc/a/vue.js/how-to-fix-unchecked-runtime-lasterror-the-message-port-closed-before-a-response-was-received-chrome-issue)
    - *一觉醒来系列*
      - `Provider from pack: TypeError: Cannot read properties of undefined (reading 'length')`
        - [<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Unable to snapshot resolve dependencies](https://github.com/vercel/next.js/issues/35872)
          - *Code works, just find a way to silence it*
    - Next.js
      - `TypeError: Cannot convert undefined or null to object`
        - [TypeError: Cannot convert undefined or null to object - Typescript & Next.js](https://stackoverflow.com/questions/71054540/typeerror-cannot-convert-undefined-or-null-to-object-typescript-next-js)
          - For next.js, some router configs like `paths` varaible in `getStaticPaths` actually returns a closure, not a real object :)))
- AWS S3
  - AWS S3 vs AWS DynamoDB?
    - [Amazon S3 vs DynamoDB: 5 Critical Differences](https://hevodata.com/learn/amazon-s3-vs-dynamodb/)
  - `aws s3 ls` runs forever
    - [After performing a large deletion operation in Amazon S3, the list command is unresponsive. How do I troubleshoot this?](https://aws.amazon.com/premiumsupport/knowledge-center/s3-troubleshoot-unresponsive-list/)
      - `aws s3api list-objects-v2 --bucket awsexamplebucket` runs forever
        - `Failed to connect to proxy URL: "https://127.0.0.1:{FXXKING_PORT}/": getaddrinfo ENOTFOUND}"`
          - [How to Troubleshoot 'Cannot Connect to Proxy' Error - AWS S3](https://stackoverflow.com/questions/52937886/how-to-troubleshoot-cannot-connect-to-proxy-error-aws-s3)
            - [Using an HTTP proxy](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-proxy.html)
              - USE PAC
- AWS Elastic Beanstalk
  - `Cannot setup CodeCommit because there is no Source Control setup, continuing with initialization`
- AWS IAM
  - _best-practices
    - How do you manage AWS Lambda and AWS IAM roles
    - Batch CLI user management
      - Profile name management and switching
      - Tools for batch management?
      - Where to store the credentials?
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
- AWS EKS
  - www.ecsworkshop.com
  - BOOK Cloud Native infrastructure pdf
  - BOOK Building microservices pdf
  - The Twelve-factor App
    - 12factor.net
  - Open container initiative
  - Amazon EKS workshop
- AWS ECS
  - www.eksworkshop.com
- AWS Lambda
  - _how-to
    - Third Party API --> Lambda --> S3
      - [How to Pull Data from an API, Using AWS Lambda](https://www.youtube.com/watch?v=iiIcS4FlX0M)
        - Process 1
          - Style: Hands-on
          - Videomark: 6:13
      - [How to Pull Data from an API, Using AWS Lambda](https://www.startdataengineering.com/post/pull-data-from-api-using-lambda-s3/)
  - _best-practices
    - naming tradition for hundreds of functions
  - Inner Code
    - Node.js 
      - Allow multiple CORS origins
      - `The 'Access-Control-Allow-Origin' header has a value 'https://www.test-cors.org/' that is not equal to the supplied origin`
        - 多加了个`/`
  - Add trigger
    - `An error occurred when creating the trigger: The log group provided is reserved for the function logs of the destination function. (Service: AWSLogs; Status Code: 400; Error Code: InvalidParameterException; Request ID:; Proxy: null)`
  - Integration with VPC
    - `The provided execution role does not have permissions to call CreateNetworkInterface on EC2`
    - `We recommend that you choose at least 2 subnets for Lambda to run your functions in high availability mode.`
  - I need to change the name of test event, and I couldn't fxxking do it
- AWS API Gateway
  - Overview CONFUSED
    - [A Detailed Overview of AWS API Gateway](https://www.alexdebrie.com/posts/api-gateway-elements/)
  - Create Model
    - ` Invalid model specified: Validation Result: warnings : [], errors : [Invalid model schema specified. Unsupported keyword(s): [...]`
      - [json-schema.org](http://json-schema.org/learn/getting-started-step-by-step.html)
  - Hardcode response
  - Lambda
    - 总觉得API Gateway的调用有点滞后, 经常lambda更新时报event.body为空
    - Lambda URL - event.queryStringParameter is null
      - [Cannot access event.queryStringParameters[ ... ][ ... ]](https://github.com/serverless-heaven/serverless-webpack/issues/362)
      - [Event and queryStringParameters are both empty, when calling a lambda function using API Gateway's Get Request](https://stackoverflow.com/questions/69097546/event-and-querystringparameters-are-both-empty-when-calling-a-lambda-function-u)
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




