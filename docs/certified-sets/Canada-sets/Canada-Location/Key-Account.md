---
title: Key Account Hierarchy
slug: /Canada-Location/Key-Account-Hierarchy
tags:
    - Location
    - POC
    - Sales
---

# Key Account Hierarchy
Key Account Hierarchy helps us to assign POCs into different territories which are used for Various Big Chains. This helps to classify different chains like Sobeys, Loblaws etc into groups.
This table contains all the details about MBC Sales Org hierarchy.

Table Name : [CSDI_NJ_T.DIM_KEY_ACCT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_KEY_ACCT_HIER)<br/>
View Name : [CSDI.DIM_KEY_ACCT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_KEY_ACCT_HIER)<br/>
EDW View Name :[EDW.CSDI_DIM_KEY_ACCT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_KEY_ACCT_HIER)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
KEY_ACCT_BNR_SK	|	NUMBER(38,0)	|	Surrogate Key on Key Account Banner
KEY_ACCT_BNR_CODE	|	VARCHAR(10)	|	Key Account Banner Code
KEY_ACCT_BNR_NAME	|	VARCHAR(50)	|	Key Account Banner Name
KEY_ACCT_SK	|	NUMBER(38,0)	|	Key Account Surrogate Key
KEY_ACCT_CODE	|	VARCHAR(10)	|	Key Account Code
KEY_ACCT_NAME	|	VARCHAR(50)	|	Key Account Name
KEY_ACCT_MGR_SK	|	NUMBER(38,0)	|	Surrogate Key on Key Account Manager
KEY_ACCT_MGR_CODE	|	VARCHAR(10)	|	Key Account Manager Code
KEY_ACCT_MGR_NAME	|	VARCHAR(50)	|	Key Account Manager Name
KEY_ACCT_ORG_TYP_SK	|	NUMBER(38,0)	|	Surrogate Key on Key Account Organization Type
KEY_ACCT_ORG_TYP_CODE	|	VARCHAR(10)	|	Key Account Organization Type Code
KEY_ACCT_ORG_TYP_NAME	|	VARCHAR(50)	|	Key Account Organization Type Name
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update




## Key Account Banner

Key Account Banner is the lowest level in Key Account Hierarchy. All the POCs are mapped to Key Account Banner only in MDM.

Table Name : [CSDI_T.REF_KEY_ACCT_BNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_KEY_ACCT_BNR)<br/>
View Name : [CSDI.REF_KEY_ACCT_BNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_KEY_ACCT_BNR)<br/>
EDW View Name :[EDW.CSDI_REF_KEY_ACCT_BNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_KEY_ACCT_BNR)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
KEY_ACCT_BNR_SK|NUMBER|Surrogate Key on Key Account Banner
KEY_ACCT_BNR_CODE|VARCHAR|Key Account Banner Code
KEY_ACCT_BNR_NAME|VARCHAR|Key Account Banner Name
KEY_ACCT_SK|NUMBER|Key Account Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp




## Key Account

Key Account is the second lowest level in Key Account Hierarchy. All the Key Account Banners are grouped into Key Account.

Table Name : [CSDI_T.REF_KEY_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_KEY_ACCT)<br/>
View Name : [CSDI.REF_KEY_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_KEY_ACCT)<br/>
EDW View Name :[EDW.CSDI_REF_KEY_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_KEY_ACCT)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
KEY_ACCT_SK|NUMBER|Surrogate Key on Key Account
KEY_ACCT_CODE|VARCHAR|Key Account Code
KEY_ACCT_NAME|VARCHAR|Key Account Name
KEY_ACCT_MGR_SK|NUMBER|Key Account Manager Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp





## Key Account Manager

Key Account Manager is the second highest level in Key Account Hierarchy. All the Key Account are grouped into Key Account Manager.

Table Name : [CSDI_T.REF_KEY_ACCT_MGR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_KEY_ACCT_MGR)<br/>
View Name : [CSDI.REF_KEY_ACCT_MGR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_KEY_ACCT_MGR)<br/>
EDW View Name :[EDW.CSDI_REF_KEY_ACCT_MGR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_KEY_ACCT_MGR)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
KEY_ACCT_MGR_SK|NUMBER|Surrogate Key on Key Account Manager
KEY_ACCT_MGR_CODE|VARCHAR|Key Account Manager Code
KEY_ACCT_MGR_NAME|VARCHAR|Key Account Manager Name
KEY_ACCT_ORG_TYP_SK|NUMBER|Key Account Organization Type Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



 

## Key Account Org Type

Key Account Org Type is the highest level in Key Account Hierarchy. All the Key Account Manager are grouped into Key Account Org Type.

Table Name : [CSDI_T.REF_KEY_ACCT_ORG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_KEY_ACCT_ORG_TYP)<br/>
View Name : [CSDI.REF_KEY_ACCT_ORG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_KEY_ACCT_ORG_TYP)<br/>
EDW View Name :[EDW.CSDI_REF_KEY_ACCT_ORG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_KEY_ACCT_ORG_TYP)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
KEY_ACCT_ORG_TYP_SK|NUMBER|Surrogate Key on Key Account Organization Type
KEY_ACCT_ORG_TYP_CODE|VARCHAR|Key Account Organization Type Code
KEY_ACCT_ORG_TYP_NAME|VARCHAR|Key Account Organization Type Name
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp