---
title: Canada Go Spot Check
tags:
    - Employee
    - Consumer Data
    - Missions
---
# Canada Go Spot Check 
## Introduction
Go Spot check is an external tool to get the survey information for tasks and mission responses for each reps.
We pull the details from Go Spot check API.

Details about API can be found at below path.
https://gsc.docs.apiary.io/#


## ETL Details

The details for ETL is documented at below path.
https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/7183/NAZ-Go-Spot-Check-load


## Go Spot Check Tables

### Catalogs

The Catalogs endpoint allows you to add, update and list catalogs and their items for your company.
- Catalogs hold Catalog Items
- Catalogs are assigned to a searchable list task in the webapp
- Catalogs display items as a searchable list in the mobile apps

#### Table/View Details
Table : `CSDI_T.GSC_CATALOGS` <br/>
View  : [`EDW.CSD_GSC_CATALOGS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_CATALOGS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
NAME                          |TEXT                           | Name of Catalogs, must be unique
CREATED_AT                    |TIMESTAMP_NTZ                  | When Catalogs was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When Catalogs was last updated in GSC
DISABLED_AT                   |TIMESTAMP_NTZ                  | If catalog is disabled, field will display when it was disabled
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### Missions

The Missions endpoint allows you to list Missions for your company.
- Missions are synonymous with campaigns throughout the API
- Missions are the surveys/audits that go to the mobile apps for reps to complete
- Missions contain sections, which contain tasks

#### Table/View Details
Table : `CSDI_T.GSC_MISSIONS`  <br/>
View  : [`EDW.CSD_GSC_MISSIONS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_MISSIONS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
NAME                          |TEXT                           | Name of mission, not unique
INSTRUCTIONS                  |TEXT                           | Open text field for displaying instructions to users in the mobile app
CREATED_AT                    |TIMESTAMP_NTZ                  | When this version of the mission was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When this version of the mission was last updated in GSC
MAXIMUM_RESPONSES_PER_USER    |NUMBER                         | Optional setting to limit the number of times an individual user can respond to a mission
MAXIMUM_RESPONSES_PER_LOCATION|NUMBER                         | Optional setting to limit the number of times a mission can be completed at one place
STATE                         |TEXT                           | Missions can either be in draft, published (started), stopped, completed, archived or versioned
IMAGE_URL                     |TEXT                           | Customizable image that appears atop the mission in the mobile app
COMPLETED_AT                  |TIMESTAMP_NTZ                  | When this version of the mission was stopped (same as stopped_at) in GSC
ENABLE_USER_ASSIGNED_PLACES   |TEXT                           | Mission is only available to users at their assigned places
ARCHIVED_AT                   |TIMESTAMP_NTZ                  | When this version of the mission was archived in GSC
VERSION_IDENTIFIER            |NUMBER                         | Unique identifier to link multiple versions of a mission together
VERSION_NUMBER                |NUMBER                         | Version of the mission, always 1 unless mission has been versioned
UPDATED_BY_ID                 |NUMBER                         | ID of GSC user who last updated this version of the mission
CREATED_BY_ID                 |NUMBER                         | ID of GSC user who created this version of the mission
STARTED_BY_ID                 |NUMBER                         | ID of GSC user who last started this version of the mission
STARTED_AT                    |TIMESTAMP_NTZ                  | When this version of the mission was started (published) in GSC
STOPPED_BY_ID                 |NUMBER                         | ID of GSC user who last stopped this version of the mission
STOPPED_AT                    |TIMESTAMP_NTZ                  | When this version of the mission was stopped (same as completed_at) in GSC
ARCHIVED_BY_ID                |NUMBER                         | ID of GSC user who archived this version of the mission
SIGNATURE_RELEASE             |TEXT                           | Mission Release Signature
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded


### Mission Responses

The MissionResponses endpoint allows you to list MissionResponses for your company.
- MissionResponses contain TaskResponses.
- MissionResponses are completed by users on the mobile device.


#### Table/View Details
Table : `CSDI_T.GSC_MISSION_RESPONSES` <br/>
View  : [`EDW.CSD_GSC_MISSION_RESPONSES`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_MISSION_RESPONSES)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
CAMPAIGN_ID                   |NUMBER                         | Campaign/mission id to which the MissionResponse has been submitted
PLACE_ID                      |NUMBER                         | Unique GSC id of the place where the MissionResponse was completed
USER_ID                       |NUMBER                         | Unique GSC id of the user who submitted the MissionResponse
STATE                         |TEXT                           | An in-progress MissionResponse will appear as null; a submitted MissionResponse is completed
CREATED_AT                    |TIMESTAMP_NTZ                  | When MissionResponse was created on the server - will be the same as started_at if the user is online. Will be after started_at if the user is working offline.
UPDATED_AT                    |TIMESTAMP_NTZ                  | Last time the MissionResponse was updated on the server
EXPIRES_AT                    |TIMESTAMP_NTZ                  | The time at which the MissionResponse will expire on the mobile app.
COMPLETED_AT                  |TIMESTAMP_NTZ                  | The time at which the MissionResponse was submitted from the mobile app, regardless of whether the user was working offline.
COORDINATES                   |TEXT                           | Lat/Long of the user’s device when they started the MissionResponse on the device
STARTED_AT                    |TIMESTAMP_NTZ                  | The time at which the MissionResponse was started on the mobile app, regardless of whether the user was working offline
LOCATION_TIMESTAMP            |TIMESTAMP_NTZ                  | Timestamp of coordinates
LOCATION_ACCURACY             |NUMBER                         | Accuracy of coordinates - in meters
COMPLETED_COORDINATES         |TEXT                           | Lat/Long of the user’s device when they submitted the MissionResponse from the device.
MY_GSC_COMPLETED              |TEXT                           | Whether the MissionResponse was completed on the webapp My GSC true or the mobile app false
DISTANCE_TO_PLACE             |NUMBER                         | Distance to the place
SIGNATURE_RELEASE             |TEXT                           | Mission response Release Signature
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded


### Places

Places are your accounts or locations where mission responses are completed

#### Table/View Details
Table : `CSDI_T.GSC_PLACES` <br/>
View  : [`EDW.CSD_GSC_PLACES`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_PLACES)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
NAME                          |TEXT                           | Name of place, not unique
ADDRESS                       |TEXT                           | Street number and name - e.g. 123 Main St
CITY                          |TEXT                           | City in which the place exists - e.g. Denver
STATE                         |TEXT                           | State in which the place exists - e.g. CO or Colorado
POSTAL_CODE                   |TEXT                           | Zip or postal code in which the place exists - e.g. 80202
COUNTRY                       |TEXT                           | Country in which the place exists, formatted according to the ISO3166-1 alpha-2 standard - e.g. US
CREATED_AT                    |TIMESTAMP_NTZ                  | When place was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When place was last updated in GSC
CUSTOM_PLACE_ID               |TEXT                           | Your unique place identifier - e.g. TDLinx or Salesforce Account ID
STATUS                        |TEXT                           | Enabled places will appear in the mobile app, disabled places will not. Enabled places have a null status; disabled places have a status of 'disabled'.
DISABLED_AT                   |TIMESTAMP_NTZ                  | If place is disabled (or has ever been disabled), field will display when it was last disabled
GEOCODING_DISABLED            |TEXT                           | Indicates whether the place will be re-geocoded the next time it is updated - defaults to false
PLACE_TERRITORY               |TEXT                           | Territory  name of the Place
REGION                        |TEXT                           | Region Name of the place
DISTRICT                      |TEXT                           | District Of the Place
SEGMENT                       |TEXT                           | Segment of the Place
SUB_SEGMENT                   |TEXT                           | Sub Segment of the Place
CALLED_ON_STATUS              |TEXT                           | Called on Status of the Place
LICENSE_NUMBER                |TEXT                           | License Number of the Place
ROUTE_NUMBER                  |TEXT                           | Route Number of the Place
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded




### Place Groups

Placegroups are groups of places to which a mission is deployed. Places are added to the “All” Placegroup by default.

#### Table/View Details
Table : `CSDI_T.GSC_PLACE_GROUPS` <br/>
View  : [`EDW.CSD_GSC_PLACE_GROUPS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_PLACE_GROUPS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
NAME                          |TEXT                           | Name of placegroup, must be unique
CREATED_AT                    |TIMESTAMP_NTZ                  | When placegroup was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When placegroup was last updated in GSC
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### Tasks

Tasks are created for the Reps to execute.
Tasks exist in Sections, which exist in Missions. TaskResponses are the answer for a task from a user in the mobile app. TaskResponses sit inside MissionResponses

#### Table/View Details
Table : `CSDI_T.GSC_TASKS` <br/>
View  : [`EDW.CSD_GSC_TASKS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_TASKS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
TYPE                          |TEXT                           | Task type - e.g. Yes/No
TITLE                         |TEXT                           | Name of task, not unique
DESCRIPTION                   |TEXT                           | Open text field for displaying instructions to users in the mobile app for the task
OPTIONAL                      |TEXT                           | Whether or not a task is required in the mobile app to submit mission response
POSITION                      |NUMBER                         | Task Position
CONFIGURATION                 |TEXT                           | Array of values that a user in the mobile app could select for the task - only applies to yes/no, multiple select and multiple choice
CAMPAIGN_ID                   |NUMBER                         | Campaign/mission id to which the task belongs
PARENT_TASK_ID                |NUMBER                         | Only applicable to a child/conditional task with a parent task
PARENT_TASK_VALUE             |TEXT                           | Indicates the value that must be selected to result in the child task
SECTION_ID                    |NUMBER                         | Section (grouping of tasks) id to which the task belongs
VERSION_IDENTIFIER            |NUMBER                         | Unique identifier to link tasks between multiple versions of a mission together
VERSION_NUMBER                |NUMBER                         | Version of the task, always 1 unless mission in which the tasks exists has been versioned
CREATED_AT                    |TIMESTAMP_NTZ                  | When task was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When task was last updated in GSC
DISTRIBUTION_PERCENTAGE       |TEXT                           | How often, as a percentage, the task will appear in the mission
PARENT_TASK_CONDITION         |TEXT                           | parent Task Condition
COUNT_VALUE                   |TEXT                           | Count Value
TASK_TYPE                     |TEXT                           | Task Type
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### Task Responses

TaskRepsonses are the response submitted by reps for each Tasks. Task Responses are in Mission Responses

#### Table/View Details
Table : `CSDI_T.GSC_TASK_RESPONSES` <br/>
View  : [`EDW.CSD_GSC_TASK_RESPONSES`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_TASK_RESPONSES)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
MISSION_RESPONSE_ID           |NUMBER                         | GSC MissionResponse id to which the task response belongs, there are typically many Task Responses in a single Mission Response
TASK_ID                       |NUMBER                         | The GSC task this response was the answer to
VALUE                         |TEXT                           | Selected or entered text/numeric value entered by the rep on the mobile device
CREATED_AT                    |TIMESTAMP_NTZ                  | The time at which the TaskResponse was created on the server
UPDATED_AT                    |TIMESTAMP_NTZ                  | The time at which the TaskResponse was last updated on the server
TYPE                          |TEXT                           | Task type - e.g. Yes/No
CONTEXT                       |TEXT                           | Searchable list (aka catalog item) that was selected in the parent task response
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### Teams

Teams are groups of people to which you deploy missions. Users are added to the “All” Team by default.

#### Table/View Details
Table : `CSDI_T.GSC_TEAMS` <br/>
View  : [`EDW.CSD_GSC_TEAMS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_TEAMS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
NAME                          |TEXT                           | Name of teams, must be unique
CREATED_AT                    |TIMESTAMP_NTZ                  | When teams was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When teams was last updated in GSC
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### Users

Users are the people at your company with access to the GoSpotCheck mobile and/or web apps. Users can be assigned to one or more Teams after they are created. Users can have multiple company memberships in GoSpotCheck

#### Table/View Details
Table : `CSDI_T.GSC_USERS` <br/>
View  : [`EDW.CSD_GSC_USERS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_USERS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
EMAIL                         |TEXT                           | User email, must be unique
CREATED_AT                    |TIMESTAMP_NTZ                  | When User are created
UPDATED_AT                    |TIMESTAMP_NTZ                  | When user was last updated
FIRST_NAME                    |TEXT                           | First name of the user
LAST_NAME                     |TEXT                           | Last name of the user
PHONE                         |TEXT                           | Phone number for the user
USER_TERRITORY                |TEXT                           | User Territory
USER                          |TEXT                           | User Name
ROUTE_NUMBER                  |TEXT                           | Route Number
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded



### User Place Assignments

User Place Assignments are also known as User Assigned Places or UAPs for short. UAPs allow you to distribute msisions to users only at their assigned accounts/places

#### Table/View Details
Table : `CSDI_T.GSC_USER_PLACE_ASSIGNMENTS` <br/>
View  : [`EDW.CSD_GSC_USER_PLACE_ASSIGNMENTS`](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_GSC_USER_PLACE_ASSIGNMENTS)

Column_Name                   | DataType                      | Comment
-                             | -                             | -
ID                            |NUMBER                         | Unique GSC id
USER_ID                       |NUMBER                         | Unique GSC id of user that is assigned to the place
PLACE_ID                      |NUMBER                         | Unique GSC id of the place assigned to the user
CREATED_AT                    |TIMESTAMP_NTZ                  | When UAP was created in GSC
UPDATED_AT                    |TIMESTAMP_NTZ                  | When UAP was last updated in GSC
LAST_UPDATED_TSP              |TIMESTAMP_NTZ                  | Timestamp of Record loaded