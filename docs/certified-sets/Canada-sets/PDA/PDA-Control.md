---
title: PDA Control Tables/Views
slug: /PDA/pda-control
tags:
    - PDA
    - Canada
    - Contract
    - Quebec
---


## PDA Control Tables and Views

These tables are used for configuration for of PDA data load which is used for PDA reporting.
Below are the list of tables/Views

Tables:

- CSDI_S.PDA_STG_CNTRL
- CSDI_S.PDA_STG_COL_MAP

Views:

- CSDI.PDA_STG_CNTRL
- CSDI.PDA_STG_COL_MAP


### PDA Staging Control
This table manages list of Tables to be Landed and Persisted along with Load Rules and Load Frequency.
This tables is used daily in Mulesoft Code ( abi-ca-pda ) to control the load of data from PDA (Salesforce)

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.PDA_STG_CNTRL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/PDA_STG_CNTRL)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.PDA_STG_CNTRL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/PDA_STG_CNTRL)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PDA_OBJECT|	VARCHAR(128)	|	PDA Object Name
|CSDI_LANDING_TABLE|	VARCHAR(32)|	Landing table name for PDA Objects in Snowflake
|CSDI_PERSISTED_TABLE|	VARCHAR(32)|	Base table name for PDA Objects in Snowflake
|CSDI_LANDING_TYPE|	VARCHAR(32)|	Landing Method (Full, Incremental, None)
|CSDI_STAGING_TYPE|	VARCHAR(32)|	Staging Method (Replace, Full, Incremental, Incremental with Delete, None)
|CSDI_LOAD_FREQUENCY|	VARCHAR(32)|	Load frequency (Daily, Monthly, Hourly)
|CSDI_LOAD_START|	VARCHAR(10)|	Start range for the load frequency. Null for Daily. For Monthly, it is 2-digit indicating day of month (e.g. 28 for 28thof the month). For Hourly, it is 4-digit indicating time of day (e.g. 1000 for 10am of the day).
|CSDI_LOAD_END|	VARCHAR(10) |	End range for the load frequency. Null for Daily. For Monthly, it is 2-digit indicating day of month (e.g. 03 for 3rd of the month). For Hourly, it is 4-digit indicating time of day (e.g. 1800 for 6pm of the day).
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last update

### PDA Staging Column Map
This table manages list of Sales Force field names that have to be renamed as part of Landing and Staging dues to length or naming conflicts.
This tables is used daily in Mulesoft Code ( abi-ca-pda ) to control the load of data from PDA (Salesforce)

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.PDA_STG_COL_MAP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/PDA_STG_COL_MAP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.PDA_STG_COL_MAP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/PDA_STG_COL_MAP)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PDA_OBJECT|	VARCHAR(128)	|	PDA Object Name
|PDA_FIELD|	VARCHAR(128)|	Field name in the PDA object which need to be renamed
|CSDI_COLUMN|	VARCHAR(32)|	Renamed Column in Snowflake(CSDI)
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last update