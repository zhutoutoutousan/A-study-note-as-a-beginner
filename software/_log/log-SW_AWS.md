# Table of Contents
- [Table of Contents](#table-of-contents)
- [Buffer to permanent note](#buffer-to-permanent-note)
  - [Context](#context)
  - [Cramming](#cramming)
  - [Guided Video](#guided-video)
  - [Extensive materials ONLY TO LOOK AT](#extensive-materials-only-to-look-at)
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
	- Bookmark: 41-46/11-58-36



## Extensive materials ONLY TO LOOK AT 
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
- Compute Services
  - AWS Lamda
  - AWS Lightsail
  - AWS Outposts
  - AWS EC2
    - Instance Type
      - RDS instance
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
          - AAAA
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
#awsattestation
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
- Up-tight risk control
  - Manage all parts of your time to ensure a full commitment with minimum risk
#### Resources
- OneNote --> Please migrate to this temp space as resource pool for reference

#### Current risk
- INTJ
  - HIGH RISK: *Good job! All the effort for nothing*: OMG!!! I overslept!!!
    - Solved by creating this whateveritis
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
      - [ ] Install `brainscape` into your mobile
      - [ ] Group it with workout session
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
- Downloaded Questions Set
  - [Question Set 1](https://drive.google.com/file/d/1eKeV3bnD_fseIvTG_b0EKCAUym7PmlKN/view?usp=sharing)
    - 22% Deployment 14.3Q
    - 26% Security 17Q
      - Q225 P75
    - 30% Development with AWS Services 19.5Q
    - 10% Refactoring 6.5Q
    - 12% Monitoring and Troubleshooting 7.8Q
  - [Question Set 2](https://drive.google.com/file/d/1hCuEzoq7lV51DRsM5qIu1-XKyWFFGJzL/view?usp=sharing)
  - [Question Set 3](https://drive.google.com/file/d/1Ty6kX67MDxB_BGhKIlr9R4H3FnuA5CKT/view?usp=sharing)
  - [Question Set 4](https://d1.awsstatic.com/training-and-certification/docs-dev-associate/AWS-Certified-Developer-Associate_Sample-Questions.pdf)

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
    - Starting to take down those questions you've got wrong 
      - Intuition: This may not be a good idea
  - Trend
    - Linearly speaking: With 4 days you scored 16 more, it is estimated that you will pass the test with current effort level, but more data needs to be collected
- Next Test: 2021/10/4