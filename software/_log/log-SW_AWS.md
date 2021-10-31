# Table of Contents
- [Table of Contents](#table-of-contents)
- [Buffer to permanent note](#buffer-to-permanent-note)
  - [Context](#context)
  - [Cramming](#cramming)
  - [Guided Video](#guided-video)
  - [Extensive materials not for associate](#extensive-materials-not-for-associate)
- [Log](#log)
  - [2021/8/27- General Learning - Phase 1: Osmosis, Image construction, Initial intuition establishment](#2021827--general-learning---phase-1-osmosis-image-construction-initial-intuition-establishment)
    - [Toddler learning to speak](#toddler-learning-to-speak)
    - [Toddler learning to walk](#toddler-learning-to-walk)
  - [2021/9/27-2021/10/17 AWS Developer Associate Attestation](#2021927-20211017-aws-developer-associate-attestation)
    - [Paradigm 1: 2021/9/27-2021/10/7](#paradigm-1-2021927-2021107)
      - [Kickstart](#kickstart)
      - [Mindset adjustment](#mindset-adjustment)
      - [Resources](#resources)
      - [Current risk](#current-risk)
      - [Planning phase](#planning-phase)
      - [**Imperative feedback-supported deliverables imminent**](#imperative-feedback-supported-deliverables-imminent)
  - [Attestation logistics](#attestation-logistics)
    - [Quick info retain](#quick-info-retain)
    - [Main resource](#main-resource)
  - [Current Strategy](#current-strategy)
  - [Temporary Question-oriented connection store](#temporary-question-oriented-connection-store)
- [Test records and adjustments](#test-records-and-adjustments)
- [2021/10/17](#20211017)
- [2021/10/24-](#20211024-)
- [经验总结(draft)](#经验总结draft)

# Buffer to permanent note

## Context
- [DevOps Engineering Course for Beginners](https://www.youtube.com/watch?v=j5Zsa_eOXeY)
  - Progress: 12-19/2-18-18

## Cramming
https://www.brainscape.com/subjects/aws-certified-developer-associate
https://www.brainscape.com/subjects/aws-certified-solutions-architect
https://quizlet.com/199965651/aws-certified-solutions-architect-flashcards/
##  Guided Video
- [AWS Certified Developer - Associate 2020 (PASS THE EXAM!)](https://www.youtube.com/watch?v=RrKRN9zRBWs&t=515s)
	- Bookmark: 42-36/11-58-36



## Extensive materials not for associate
- Architecting for the cloud aws best practices whitepaper 2020
- Practicing Continuous Integration and Continuous Delivery on AWS Accelerating Software Delivery with DevOps
  - https://d1.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf
- Microservices on AWS
- Serverless Architectures with AWS Lambda
- Optimizing Enterprise Economics with Serverless Architectures
- Running Containerized Microservices on AWS
- Blue/Green Deployments on AWS


# Log

## 2021/8/27- General Learning - Phase 1: Osmosis, Image construction, Initial intuition establishment
- This is context-oriented way to learn. If used for attestations, only allocate 20% of your time and energy, and can be only triggered by exam needs
### Toddler learning to speak
- Building blocks
  - AWS Lamda Function
  - AWS Lightsail
  - AWS Outposts
  - AWS EC2
    - Instance Type
      - RDS instance
- App Service
  - AWS EB
- Database
  - AWS Simple Query Service
  - AWS DynamoDB
    - Data Type: "Table", a collection of Items; "Items", with Keys and one or more Attribute; and "Attribute", with Name and Value.
    - Properties
      - SSD
        - CONS
          - I/O performance of WebApp
    - Parameters
      - Throughtput level
        - Change latency: Take anywhere from a few minutes to a few hours.
  - AWS RDS
    - Encryption
      - Encryption can be enabled on RDS instances to encrypt the underlying storage, and this will by default also encrypt snapshots as they are created. However, some additional configuration needs to be made on the client side for this to work.
    - Deployment
      - Multi-AZ
  - AWS S3: Cloud Object Storage
- Server side
  - AWS CLI
- Authentication
  - AWS IAM
    - [AWS IAM Tutorial](https://www.youtube.com/watch?v=3y596T1eH_8)
    - Policy simulator/generator
    - Alias
      - https://\[ID\].signin.aws.amazon.com/...
    - AWS account - IAM
      - It is not possible to have the same IAM account login URL for separate AWS accounts
    - Scope: Global
  - Methods
    - Access Key
    - MFA
    - Certificate
      - X.509
- Networking
  - Protocols
    - Application layer
      - HTTP
        - Header
          - x-forward-for
    - Transport layer
      - TCP
  - Route 53
    - Resources
      - [AWS Route 53 Introduction](https://www.youtube.com/watch?v=10JKpg-eqZU)
        - 1-53
    - Concepts
      - DNS
        - AWS common record
          - A: URL to IP
          - AAAA: Domain Name to IP
            - [AAAA Records](https://support.dnsimple.com/articles/aaaa-record/)
          - CNAME
          - Alias
            - It is not possible to have capital letters as a part of the alias name
  - Direct Connect Partner
  - Storage Gateway
- Monitoring
- Log
- Infrastructure as Code
  - AWS Cloudformation
- Message queue
  - AWS SQS
    - 60s ~ 2 wks msg-->queue 
- AWS Cognito
  - [AWS Cognito | Amazon Cognito | AWS Tutorial for Beginners | AWS Training | Edureka](https://www.youtube.com/watch?v=jTu--LpjA18&t=27s)
    - Video mark: 11-36

**Below are what you know what you don't know a bit and can't categorize**
- GetQueueAttributes
- Hash-and-range key
- KMS
- AWS Simple Workflow
- RRS
- sns topics
- EB 
  - EBS volume
- opsworks
- Cw logs
- host level metrics
- redshift
- elasticache nodes
- **rolling with additional batch**
- immutable 
- Elastic Beanstalk
  - AWS SNS
  - Health status
    - ?grey --> Not ready?
  - Deployment
    - In-Place Deployment
- Deployment methods
  - All at once
  - Rolling
  - Rolling with additional batch
  - Immutable
  - Blue/Green
- ASG
  - [AWS Auto Scaling Groups Introduction](https://www.youtube.com/watch?v=jvMoWjsP7Pk)
- AMI
- RDS Read Replica
- User ARN
- CloudFormation
- VPC
- Single zone implementation
- Deployment types
  - Blue/Green Deployment
- AWS EMR
### Toddler learning to walk
- *Talk the talk, but walk carefully*: Walking takes time, effort and your youth, tred very carefully if you really want to test your walk
## 2021/9/27-2021/10/17 AWS Developer Associate Attestation
#attestationcontrol
### Paradigm 1: 2021/9/27-2021/10/7
#### Kickstart
- The power has been decided that you shall take your attestation on 2021/10/17
- Know what you're facing
  - 22% Deployment 14.3Q
  - 26% Security 17Q
  - 30% Development with AWS Services 19.5Q
  - 10% Refactoring 6.5Q
  - 12% Monitoring and Troubleshooting 7.8Q
#### Mindset adjustment
#distributedmindsetmanagement
- Texas Poker: Commit yourself 切断后路全身投入
  - Enough composure
  - Enough alignment with self and pre-vision of growth path
  - If you can't even adopt and internalize the ability to use this mindset to empower yourself and clear out a path, then you really have no business working as a consultant
  - 2021/10/9: Create a second-line sophistication to this mind-set to prevent core damage and encapsulate this neural change
- Up-tight risk control
  - Manage all parts of your time to ensure a full commitment with minimum risk
#### Resources
- OneNote --> Please migrate to this temp space as resource pool for reference

#### Current risk
- INTJ
  - HIGH RISK: *Good job! All the effort for nothing*: OMG!!! I overslept!!!
    - Solved by creating this whateveritis
    - Triggered: 2021/10/9
      - Second-line sophistication triggered
        - Callousness applied
        - Stoicism applied
  - MEDIUM RISK: *Why should I need help from others?*
  - LOW RISK: *What date should I take the test again?*
- Schedule clashing
  - May clash with projects
  - No clash with TestDaf 11/9
  - No clash with CATTI 11/9
  - Pending project schedule
- Mindset
  - LOW RISK: Legacy personal idiosyncracy as blockages
    - *Scholar's Arrogance*: *老夫以修身为己任, 安得以证书为逐物乎?*
      - Solved by creating migratable knowledge store to shun this quirk
      - Through years' working experience, the mindset is deprecated, but some behavioural patterns might stick around
  - LOW RISK: *Numb*: *I always eat deadlines for breakfast, before it arrives*
- Exam readiness: *Mexico is way up there, and you're down here*
  - HIGH RISK: Shock therapy test reveals estimated failure if no effort is exerted
  - Requires efforts that you might need to clear up more time for the exam
#### Planning phase 
- Shock therapy: Take the test first: 2021/9/28
  - Platform
    - Knowledgehut
  - Results
    - Scored 4/60
    - Estimated failure if you don't do anything
  - Action
    - Enrichment of knowledge structure for `toddler` section
      - Partial review
      - Partial memory by force
      - Partial internalization
    - Daily test
      - See attestation logistics
- Learn from others
  - [AWS Certified Developer Associate考试经验分享](https://www.douban.com/note/769295318/)
    - This dude took 2 months, so you only have 20 days, so scale up the effort but don't overexert
- INTJ personality triggered
  - Prevision of daily allocated time
  - Prevision of daily study style
    - Context-oriented way 20%
      - Only triggered by any operation when doing the Result-oriented way
    - Result-oriented way 80%
      - Cramming
      - Ways derived

- Daily action items
  - 2hr+ plan
    1. **Flashcard**
      - [x] Install `brainscape` into your mobile
      - [x] Group it with workout session
        - Currently, during workout, in normal circumstances you must not leave the gym
      - [ ] 
    2. Video
  - More plan
    - Use it when you sense risk, consult your coach
#### **Imperative feedback-supported deliverables imminent**
- Scheduled Mock Tests
  - 2021/9/30
  - Next Mock Test
  - 6-8 Mock Tests pending

## Attestation logistics
### Quick info retain
- Linux Academy
- AWS Learning Library
### Main resource
- Input queue
  - [AWS Certified Developer Associate Exam Study Guide [DVA-C01]](https://ravikirans.com/aws-certified-developer-associate-exam-study-guide/)
  - [备战 AWS Certification 考试](https://aws.amazon.com/cn/certification/certification-prep/?src=certification-faqs)
- Mock tests
  - Knowledgehut
    - [link](https://www.knowledgehut.com/practice-tests/)
  - [Examtopics](https://www.examtopics.com/)
    - 404 as of 2021/9/28
- Card decks
  - Cram
    - [Basics card deck](https://www.cram.com/flashcards/aws-certified-developer-associate-course-7634708)
  - Quizlet
    - [AWS Certified Developer Associate 2021 Study Guide - Quizlet](https://quizlet.com/570090385/aws-certified-developer-associate-2021-study-guide-flash-cards/)
  - Brainscape
    - 

## Current Strategy
- 抓大头
  - 目标: Flashcard以可控可量化的形式迅速构建知识框架和试题认知, 击破80%的考试基础
  - Brainscape
    - **Exam Pro Flashcard**
    - **2019 Test**
  - Quizlet
    - **2021 AWS Developer Associate Study Guide**
- 构建框架
  - 在Mock Test和Flashcard学习过程中以markdown bullet形式梳理知识结构
- 两天一考, 实时反馈
  - Knowledgehut
  - 官方模考
- 方向矫正, 查漏补缺
  - [2021考点](https://d1.awsstatic.com/zh_CN/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Exam-Guide.pdf)
  - [备战 AWS Certification 考试 - 查找考试指南、样题和其他备考资源](https://aws.amazon.com/cn/certification/certification-prep/?src=certification-faqs)
    - 考试指南和样题
    - AWS相关培训
    - 白皮书相关问题(Flashcard master之后速读)
    - **学习提示: 重点查看以下常见问题**
      - **Amazon Simple Queue Service || Amazon DynamoDB || Amazon ElastiCache || Amazon Kinesis || AWS Lambda || Amazon API Gateway || AWS Elastic Beanstalk || AWS Identity and Access Management || AWS Key Management Service**
    - 官方模考
- 追踪动向
  - Examtopics 2021题库
    - Examtopics AWS被清空问题解决方案
      - Waybackmachine
        1. 登入[waybackmachine](https://archive.org/web/)
        2. 在搜索框输入https://www.examtopics.com/exams/amazon/
        3. 可见不同
## Temporary Question-oriented connection store
- Requirements - Hybrid
  - Low Latency
  - Highly consistent traffic
  - Low cost
  - Willing to accept slow traffic in the event of primary failure
- Hybrid - Solution
  - Low Latency, Highly consistent traffic, Low cost, Willing to accept slow traffic in the event of primary failure
  - Provision a Direct Connect connection to an AWS region using a Direct Connect partner. Provision a VPN connection as a backup in the event of Direct Connect connection failure.




- [How I Passed the AWS Certified Developer Associate Exam](https://www.freecodecamp.org/news/how-i-passed-the-aws-certified-developer-associate-exam/)


# Test records and adjustments
- Shock therapy test 2021/9/28
  - Scored 4 out of 60
- Test done on 2021/10/2
  - Scored 20 our of 60
    - Goal: 45+
  - Current preparation effort
    - Just flashcards and mock tests, sometimes accompanied with YouTube videos for context
  - Improvements achieved
    - Increased familiarity with Abbr.
    - Increased sense of architecture
    - Basic feeling of those questions
    - Having enough time to finish the test
  - Action
    - More effort allocated to flashcards to solidify the notion
      - Desired state
        - 100% Mastery level of flashcards
          - 6% per day --> Possible heavy workload
            - **2021/10/7**: ENTJ/INTJ - Dude, your current mastery level is 12.7%, which is subpar, do it better to catch up with the number or GET DEMOLISHED
            - **2021/10/11**: Dude, your current mastery level is 38.7%, which is subpar, do it better to catch up with the number or GET DEMOLISHED
              - Shun ENTJ part for mental contingency maneuver
              - Contingency plan imminent
              - Mock test imminent
              - Underlying manifestation of current illness imminent
              - Evidence shows that you can complete 30% a day with insane schedule and more coffee applied
              - 尝试降低大脑内强制自动运行的网络仿真重建系统和计划系统的运行overhead
        - Video knowledge enrichment w1=0.3 , knowledge structure internalization w2=0.4, exam state internalization w3=0.3
    - Starting to take down those questions you've got wrong 
      - Intuition: This may not be a good idea
  - Trend
    - Linearly speaking: With 4 days you scored 16 more, it is estimated that you will pass the test with current effort level, but more data needs to be collected
- Next Test: 2021/10/12 Mastery Level: 60%
  - Studying over normal schedule imminent
- **Gradually-shorter INTERVAL MOCK TESTS**: As mastery level and fill-the-gaps video learning goes, the interval between two mock test will become shorter and shorter until the efficiency of the feedback loop reaches the singularity as the internalization level peaks, then try to calculate the maintenance interval 
- **Failsafe mechanism**: If you fail, you will get the valuable data gained for future adjustments
- Contingency plan

# 2021/10/17
- 基本认知
  - Ted: 考试分数基本与模考readiness成正比
- Mock test on 2021/10/17
  - Scored 23 out of 60
  - Flashcard readiness: 62.3%
    - Plateau on the first card deck
- Actions
  - According to the blindpoints, and perform diff algorithm between two card sets, fill the blindpoints first
- Blindpoints
  - EC2 instance specifications and provisions
    - T2 burstable performance instance
    - t2.nano instance + spot instance
    - ...
  - DynamoDB
    - Commands and docs
      - DescribeTable
      - BatchGetItem
  - ASG
  - AZ
    - EC2+EBS
  - EMR

  - NAT, MAC, IP, Public IP, Private IP, VPC, Subnet, Elastic IP, ASG all firing together
- Structured Video track
  - EC2
  - SNS
  - ...
- 状态总结
  - 目前通过Flashcard的学习接近Plateau, 但是还没有接近, 还是有些小片知识盲点(一个Card deck本身的盲点导致), 所以第二个Card deck目前就可以开始了
    - 对标考试中的事实题, 争取做到事实题不掉分
  - 目前对于概念的架构认知和实操的需求逐渐增大
    - 架构实操题, 争最多分
    - 连点成面, 基于考试题所涉及重要结点阅读官方文档
      - 官方文档: 连点成面
      - 在Flashcard,题库, 官方考纲中养成的知识点敏感度内化用于官方文档的注意力分配
  - 模考频率开始增大, 现在不能是一周一考了, 在知识盲点补齐和内化进行的过程中要逐渐减小反馈周期

# 2021/10/24- 
- 2021/10/25
  - Flashcard readiness
    - Associate 2019: 85%
    - Exam Pro: 5.3%
- Polyfill
  - Metadata
    - Don't shadow its operation in the video in the webpage, the familarity of clicking buttons and switching tabs is not the limiting factor of improvement
    - If a newly encountered question is already at the spaced repetition level 5 in your brain, poitner move to the next and don't apend it at all
  - EC2
    - [AWS EC2 Tutorial For Beginners | What Is AWS EC2? | AWS EC2 Tutorial | AWS Training | Simplilearn](https://www.youtube.com/watch?v=8TlukLu11Yo)
      - Videomark: 12-54/22-16
      - Engagement boost: German subtitle, simultaneous interpretation
  - SNS
    - [documentation](https://docs.aws.amazon.com/sns/latest/dg/welcome-features.html)
      - Docmark: Features and capabilities
  - SES
  - IAM
  - CF
  - Security
  - X-Ray
  - SQS
    - [SNS And SQS Deep Dive | SNS Vs SQS | Standard Vs FIFO | Use Cases](https://www.youtube.com/watch?v=LzFuXvhA5xk)
      - Videomark: 2-22/15-04
  - Lamda function
  - Database(RDS, DynamoDB)
  - VPC
    - [AWS DOC - VPC FAQ](https://aws.amazon.com/vpc/faqs/)
  - Route 53
  - EBS
  - CW
  - Storage(S3, EBS, EFS, Cloudfront...)

- 2021/10/29
  - WARNING: entering insanity state due to prolonged sleep deprivation, sapio-masochism trait
    - Set a hard re-set
  - 2021/10/31 Insanity state end
-  2021/10/30
   - Status report
     - Watering system established
     - Question set re-discovered
   - Downloaded Questions Set
     - [Question Set 1](https://drive.google.com/file/d/1eKeV3bnD_fseIvTG_b0EKCAUym7PmlKN/view?usp=sharing)
       - Navigation
         - Sweepmark: Q10/260
         - Search mark: QX - Ctrl+F--> Question X
       - Weight system
         - 22% Deployment 14.3Q
         - 26% Security 17Q
           - Q225 P75
         - 30% Development with AWS Services 19.5Q
           - 10% Refactoring 6.5Q
           - 12% Monitoring and Troubleshooting 7.8Q
       - Question Overview
         - Spaced Repetition Level 1
           - App
             - EBS
               - **Q110**
                 - [Amazon EBS volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html)
                   - Furthuer reading
                     - AEC2 doc whole reading - Docmark: *ersistent storage volumes for your data using Amazon Elastic Block Store (Amazon EBS), known as Amazon EBS volumes*
             - CF
               - Q258
                 - [Pseudo parameters reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter-reference.html)
           - Database
             -  DB
                -  Q1 P4
             -  Dynamo DB
                -  Q4
           -  Storage
              -  S3
                 -  Q2
           -  Notification
              -  SNS
              -  SQS
                 -  Q3
                 -  Q5
                 -  Q10
                    - Queue names are limited to 80 characters and queue names must be unique within an AWS account
           -  Authentication
              -  IAM
                 -  Q260
                    -  IAM resources are all global; there is no regional constraint
           -  Networking
              -  VPS
                 -  **Q9**
                    -  [CIDR](https://whatismyipaddress.com/cidr#:~:text=Classless%20inter%2Ddomain%20routing%20(CIDR)%20is%20a%20set%20of,be%20sent%20to%20specific%20computers.&text=That%20system%20is%20known%20as%20CIDR%20notation.)
           -  Instance
              -  EC2
                 -  **Q6**
                    -  [Multiple IP addresses](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/MultipleIP.html)
                       -  Docmark: Install LAMP on Amazon Linux 2
                 -  Q202
                    - [Monitor the status of your volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html)
        - Spaced Repetition Level 2
        - Spaced Repetition Level 3
          - SNS
             - Q251
               - [What is Amazon SNS?](https://docs.aws.amazon.com/sns/latest/dg/welcome.html)
     - [Question Set 2](https://drive.google.com/file/d/1hCuEzoq7lV51DRsM5qIu1-XKyWFFGJzL/view?usp=sharing) - Might as well treat it like a test?
       - Sweepmark: Q1/60
         - S1
           - S3
             - Q1
     - [Question Set 3](https://drive.google.com/file/d/1Ty6kX67MDxB_BGhKIlr9R4H3FnuA5CKT/view?usp=sharing) - Might as well treat it like a test?
       - Sweepmark: Q1/10
     - [Question Set 4](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Sample-Questions.pdf) - Might as well treat it like a test?
       - Sweepmark: Q1/10
       - ASM
         - Q1

# 经验总结(draft)
- 阶段一
  - 游戏化
  - Context Coverage高
- 阶段二
  - 集中复习
- 阶段三
  - 保持状态
  - 针对性
- 阶段四
  - Engagement state terminated