---
title: Sprinklr
tags:
    - Consumer Data
    - Application Data
    - CCI
description: Consumer social messages data provided by Sprinklr
---

# Sprinklr Data
This data set is comprised of Sprinklr Social Message data. Sprinklr is a unified customer experience management platform. The data is used by the CCI team to analyze consumer data across ABI's social media channels. 

### [**CCI.SPRINKLR.SOCIAL_MESSAGES**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/CCI/schemas/SPRINKLR/view/SOCIAL_MESSAGES) 
This view contains ABI social network messages with all conversations received per brand. An Account refers to a social network account that has been added and authorized within Sprinklr. Each of the accounts added in Sprinklr has a unique account Id. Each message is given a sentiment value (neutral, negative, positive) as well as 2 classification categories (Subject 1 CF and Subject 2 CF). 

| **Field Name** | **Data Type** | **Comment** |
|--|--|--|
|CONVERSATION_IDS|string|Unique idenitfier of message recieved on platform|
|ACCOUNTS|string|ABI social media account that the customer is messaging with e.g. Anheuser-Busch|
|TEXTMESSAGES|string|Text of the message that the user sent|
|SN_CREATED_TIMES|timestamp|Time the message was sent|
|SN_TYPES|string|Social network e.g. Facebook|
|ASSOCIATED_CASES|int|Salesforce case number (if there is one)|
|SENTIMENTS|string|Message sentiment: Neutral, Negative, Positive|
|SUBJECT_1_CFS|string|Category assigned by Sprinklr e.g. Product|
|SUBJECT_2_CFS|string|Category assigned by Sprinklr e.g. Taste|
|MESSAGE_COUNTS|int|Total number of messages in the conversation| 
|EDW_START_TSP|timestamp|Data load time|

Published on 11/28/22 by Nik Shingari


