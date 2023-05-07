---
title: Telesales Hierarchy
slug: /Canada-Location/Telesales-Hierarchy
tags:
    - Location
    - POC
---
# Telesales Hierarchy

Telesales Hierarchy helps us to assign POCs into different territories which are used for telesales reps.
This table contains all the details about telesales hierarchy.


Table Name : [CSDI_NJ_T.DIM_TS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_TS_HIER)<br/>
View Name : [CSDI.DIM_TS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_TS_HIER)<br/>
EDW View Name :[EDW.CSDI_DIM_TS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_TS_HIER)<br/>


Field Name	|	Data Type	|	Comment
-	|	-	|	-
TS_TERR_SK	|	NUMBER(38,0)	|	Telesales Territory Surrogate Key
TS_TERR_CODE	|	VARCHAR(10)	|	Telesales Territory Code
TS_TERR_NAME	|	VARCHAR(50)	|	Telesales Territory Name
TS_TERR_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Telesales Territory
TS_AREA_SK	|	NUMBER(38,0)	|	Telesales Area Surrogate Key
TS_AREA_CODE	|	VARCHAR(10)	|	Telesales Area Code
TS_AREA_NAME	|	VARCHAR(50)	|	Telesales Area Name
TS_AREA_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Telesales Area
TS_PROV_SK	|	NUMBER(38,0)	|	Telesales Province Surrogate Key
TS_PROV_CODE	|	VARCHAR(10)	|	Telesales Province Code
TS_PROV_NAME	|	VARCHAR(50)	|	Telesales Province Name
TS_PROV_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Telesales Province
TS_REGN_SK	|	NUMBER(38,0)	|	Telesales Region Surrogate Key
TS_REGN_CODE	|	VARCHAR(10)	|	Telesales Region Code
TS_REGN_NAME	|	VARCHAR(50)	|	Telesales Region Name
TS_REGN_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Telesales Region
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Telesales Territory

Telesales Territory is the lowest level in Telesales Hierarchy. All the POCs are mapped to Telesales Territory only in MDM.

Table Name : [CSDI_T.REF_TS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_TS_TERR)<br/>
View Name : [CSDI.REF_TS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_TS_TERR)<br/>
EDW View Name :[EDW.CSDI_REF_TS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_TS_TERR)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
TS_TERR_SK|NUMBER|Surrogate Key on Telesales Territory
TS_TERR_CODE|VARCHAR|Telesales Territory Code
TS_TERR_NAME|VARCHAR|Telesales Territory Name
TS_AREA_SK|NUMBER|Telesales Area Surrogate Key
TS_TERR_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Telesales Territory
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Telesales Area

Telesales Area is the second lowest level in Telesales Hierarchy. All the Telesales Territories are grouped into Telesales Area.

Table Name : [CSDI_T.REF_TS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_TS_AREA)<br/>
View Name : [CSDI.REF_TS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_TS_AREA)<br/>
EDW View Name :[EDW.CSDI_REF_TS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_TS_AREA)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
TS_AREA_SK|NUMBER|Surrogate Key on Telesales Area
TS_AREA_CODE|VARCHAR|Telesales Area Code
TS_AREA_NAME|VARCHAR|Telesales Area Name
TS_PROV_SK|NUMBER|Telesales Province Surrogate Key
TS_AREA_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Telesales Area
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Telesales Province

Telesales Province is the second highest level in Telesales Hierarchy. All the Telesales Areas are grouped into Telesales Province.

Table Name : [CSDI_T.REF_TS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_TS_PROV)<br/>
View Name : [CSDI.REF_TS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_TS_PROV)<br/>
EDW View Name :[EDW.CSDI_REF_TS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_TS_PROV)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
TS_PROV_SK|NUMBER|Surrogate Key on Telesales Province
TS_PROV_CODE|VARCHAR|Telesales Province Code
TS_PROV_NAME|VARCHAR|Telesales Province Name
TS_REGN_SK|NUMBER|Telesales Region Surrogate Key
TS_PROV_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Telesales Province
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
 

## Telesales Region

Telesales Region is the highest level in Telesales Hierarchy. All the Telesales Provinces are grouped into Telesales Region.

Table Name : [CSDI_T.REF_TS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_TS_REGN)<br/>
View Name : [CSDI.REF_TS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_TS_REGN)<br/>
EDW View Name :[EDW.CSDI_REF_TS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_TS_REGN)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
TS_REGN_SK|NUMBER|Surrogate Key on Telesales Region
TS_REGN_CODE|VARCHAR|Telesales Region Code
TS_REGN_NAME|VARCHAR|Telesales Region Name
TS_REGN_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Telesales Region
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp