---
title: Sales Hierarchy
slug: /Canada-Location/Sales-Hierarchy
tags:
    - Location
    - Consumer Data
    - Sales
---
# Sales Hierarchy
Sales Hierarchy helps us to assign POCs into different territories which are used for Beer reps.
This table contains all the details about Sales hierarchy.

Table Name : [CSDI_NJ_T.DIM_SLS_ORG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_SLS_ORG_HIER)<br/>
View Name : [CSDI.DIM_SLS_ORG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SLS_ORG_HIER)<br/>
EDW View Name :[EDW.CSDI_DIM_SLS_ORG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_SLS_ORG_HIER)<br/>


Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_TERR_SK	|	NUMBER(38,0)	|	Sales Territory Surrogate Key
SLS_TERR_CODE	|	VARCHAR(10)	|	Sales Territory Code
SLS_TERR_NAME	|	VARCHAR(50)	|	Sales Territory Name
TERR_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Territory
SLS_DST_SK	|	NUMBER(38,0)	|	Sales District Surrogate Key
SLS_DST_CODE	|	VARCHAR(10)	|	Sales District Code
SLS_DST_NAME	|	VARCHAR(50)	|	Sales District Name
DST_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for District
SLS_AREA_SK	|	NUMBER(38,0)	|	Sales Area Surrogate Key
SLS_AREA_CODE	|	VARCHAR(10)	|	Sales Area Code
SLS_AREA_NAME	|	VARCHAR(50)	|	Sales Area Name
AREA_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Area
SLS_PROV_SK	|	NUMBER(38,0)	|	Sales Province Surrogate Key
SLS_PROV_CODE	|	VARCHAR(10)	|	Sales Province Code
SLS_PROV_NAME	|	VARCHAR(50)	|	Sales Province Name
PROV_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Province
SLS_REGN_SK	|	NUMBER(38,0)	|	Sales Region Surrogate Key
SLS_REGN_CODE	|	VARCHAR(10)	|	Sales Region Code
SLS_REGN_NAME	|	VARCHAR(50)	|	Sales Region Name
REGN_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Region
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Sales Territory

Sales Territory is the lowest level in Sales Hierarchy. All the POCs are mapped to Sales Territory only in MDM.

Table Name : [CSDI_T.REF_SLS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_TERR)<br/>
View Name : [CSDI.REF_SLS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_TERR)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_TERR)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_TERR_SK|NUMBER|Surrogate Key on Sales Territory
SLS_TERR_CODE|VARCHAR|Sales Territory Code
SLS_TERR_NAME|VARCHAR|Sales Territory Name
SLS_DST_SK|NUMBER|Sales District Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
TERR_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Territory




## Sales District

Sales District is the second lowest level in Sales Hierarchy. All the Sales Territories are grouped into Sales District.

Table Name : [CSDI_T.REF_SLS_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_DST)<br/>
View Name : [CSDI.REF_SLS_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_DST)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_DST)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_DST_SK|NUMBER|Surrogate Key on Sales District
SLS_DST_CODE|VARCHAR|Sales District Code
SLS_DST_NAME|VARCHAR|Sales District Name
SLS_AREA_SK|NUMBER|Sales Area Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
DST_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for District





## Sales Area

Sales Area is the third highest level in Sales Hierarchy. All the Sales districts are grouped into Sales  Area.

Table Name : [CSDI_T.REF_SLS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_AREA)<br/>
View Name : [CSDI.REF_SLS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_AREA)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_AREA)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_AREA_SK|NUMBER|Surrogate Key on Sales Area
SLS_AREA_CODE|VARCHAR|Sales Area Code
SLS_AREA_NAME|VARCHAR|Sales Area Name
SLS_PROV_SK|NUMBER|Sales Province Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
AREA_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Area




## Sales Province

Sales Province is the second highest level in Sales Hierarchy. All the Sales Areas are grouped into Sales Province.

Table Name : [CSDI_T.REF_SLS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_PROV)<br/>
View Name : [CSDI.REF_SLS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_PROV)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_PROV)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_PROV_SK|NUMBER|Surrogate Key on Sales Province
SLS_PROV_CODE|VARCHAR|Sales Province Code
SLS_PROV_NAME|VARCHAR|Sales Province Name
SLS_REGN_SK|NUMBER|Sales Region Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
PROV_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Province


 

## Sales Region

Sales Region is the highest level in Sales Hierarchy. All the Sales Provinces are grouped into Sales Region.

Table Name : [CSDI_T.REF_SLS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_REGN)<br/>
View Name : [CSDI.REF_SLS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_REGN)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_REGN)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_REGN_SK|NUMBER|Surrogate Key on Sales Region
SLS_REGN_CODE|VARCHAR|Sales Region Code
SLS_REGN_NAME|VARCHAR|Sales Region Name
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
REGN_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Region
