---
title: Alchemer
tags:
    - Application Data 
    - Consumer Data
    - CCI
description: Customer satisfaction survey data collected by the CCI team
---

# Alchemer Data
This dataset is comprised of views provided by Alchemer. The views contain customer satisfaction survey data collected by the CCI team.  Data is refreshed daily. 


### [**ALCHEMER.BRIDGE_SURVEY_RESPONSE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/CCI/schemas/ALCHEMER/view/BRIDGE_SURVEY_RESPONSE)
This view contains all survey responses and their associated IDs.

| Field Name        | Data Type        | Comment                                                     |
|-------------------|------------------|-------------------------------------------------------------|
| SURVEY_ID         | varchar          | ID for a specific survey - survey_id + response_id creates a unique record  |
| ANSWER_ID         | varchar          | ID for a specific response of a specific survey - survey_id + response_id creates a unique record|
| QUESTION_ID       | number(38,0)     | ID for a specific question being asked on the survey                    |
| ANSWER_VALUE      | varchar          | Long value of the survey participants response     |
| ANSWER_TEXT       | varchar          | Short value of the survey participants response     |
| EDW_START_TSP     | timestamp_ntz(9) | Last Datetime table was updated|


### [**ALCHEMER.DIM_SURVEY_QUESTIONS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/CCI/schemas/ALCHEMER/view/DIM_SURVEY_QUESTIONS)
This view contains all survey questions and their associated IDs. 

| Field Name        | Data Type        | Comment                                                     |
|-------------------|------------------|-------------------------------------------------------------|
| SURVEY_ID         | varchar          | Survey ID for the survey where the given question is asked  |
| ID                | number(38,0)     | ID for a specific question being asked on the survey|
| SHORTNAME         | varchar          | Short name for the survey question                          |
| QUESTION_TEXT     | varchar          | Question text that the question_id refers to      |
| EDW_START_TSP     | timestamp_ntz(9) | Last Datetime table was updated|

### [**ALCHEMER.FCT_SURVEY**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/CCI/schemas/ALCHEMER/view/FCT_SURVEY)
This view contains information about the status of a survey. Each record has a unique response ID. 

| Field Name        | Data Type        | Comment                                                     |
|-------------------|------------------|-------------------------------------------------------------|
| SURVEY_ID         | varchar          | ID for a specific survey - survey_id + response_id creates a unique record  |
| RESPONSE_ID       | varchar          | ID for a specific response of a specific survey - survey_id + response_id creates a unique record |
| CONTACT_ID        | varchar          | ID for a specific person                 |
| SUPPORT_TICKET_NUMBER  | varchar     | AB support ticket number that survey relates to                |
| DATE_STARTED      | timestamp_ntz(9) | Datetime the survey was started     |
| DATE_SUBMITTED    | timestamp_ntz(9) | Datetime the survey was submitted     |
| COMPLETION_STATUS | varchar          | Indicates if the survey has been completed, partially completed, or not started    |
| SURVEY_QUALIFIER  | varchar          | Indicates if the survey is based on a phone interaction with a support professional  |
| INVITE_LINK       | varchar          | Survey invite link |
| EDW_START_TSP     | timestamp_ntz(9) | Last Datetime table was updated|


Published on 3/16/2023 by Coco Torres
