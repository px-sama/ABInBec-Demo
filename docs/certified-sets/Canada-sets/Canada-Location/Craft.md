---
title: Craft Hierarchy
slug: /Canada-Location/craft
tags:
    - Location
    - Consumer Data
    - Craft
---
# Craft Hierarchy
Craft Hierarchy helps us to assign POCs into different territories which are used for Craft reps.
This table contains all the details about Craft Sales Org hierarchy.

Table Name : [CSDI_NJ_T.DIM_CRFT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_CRFT_HIER)<br/>
View Name : [CSDI.DIM_CRFT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_CRFT_HIER)<br/>
EDW View Name :[EDW.CSDI_DIM_CRFT_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_CRFT_HIER)<br/>


Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_TERR_SK	|	NUMBER(38,0)	|	Craft Territory Surrogate Key
CRFT_TERR_CODE	|	VARCHAR(10)	|	Craft Territory Code
CRFT_TERR_NAME	|	VARCHAR(50)	|	Craft Territory Name
CRFT_TERR_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Craft Territory
CRFT_DST_SK	|	NUMBER(38,0)	|	Craft District Surrogate Key
CRFT_DST_CODE	|	VARCHAR(10)	|	Craft District Code
CRFT_DST_NAME	|	VARCHAR(50)	|	Craft District Name
CRFT_DST_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Craft District
CRFT_AREA_SK	|	NUMBER(38,0)	|	Craft Area Surrogate Key
CRFT_AREA_CODE	|	VARCHAR(10)	|	Craft Area Code
CRFT_AREA_NAME	|	VARCHAR(50)	|	Craft Area Name
CRFT_AREA_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Craft Area
CRFT_PROV_SK	|	NUMBER(38,0)	|	Craft Province Surrogate Key
CRFT_PROV_CODE	|	VARCHAR(10)	|	Craft Province Code
CRFT_PROV_NAME	|	VARCHAR(50)	|	Craft Province Name
CRFT_PROV_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Craft Province
CRFT_REGN_SK	|	NUMBER(38,0)	|	Craft Region Surrogate Key
CRFT_REGN_CODE	|	VARCHAR(10)	|	Craft Region Code
CRFT_REGN_NAME	|	VARCHAR(50)	|	Craft Region Name
CRFT_REGN_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for Craft Region


## Craft Territory

Craft Territory is the lowest level in Craft Hierarchy. All the POCs are mapped to Craft Territory only in MDM.

Table Name : [CSDI_T.REF_CRFT_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CRFT_TERR)<br/>
View Name : [CSDI.REF_CRFT_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CRFT_TERR)<br/>
EDW View Name :[EDW.CSDI_REF_CRFT_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CRFT_TERR)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_TERR_SK|NUMBER|Surrogate Key on Craft Territory
CRFT_TERR_CODE|VARCHAR|Craft Territory Code
CRFT_TERR_NAME|VARCHAR|Craft Territory Name
CRFT_DST_SK|NUMBER|Craft District Surrogate Key
CRFT_TERR_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for Craft Territory
DEL_IND|NUMBER|Deleted Indicator



## Craft District

Craft District is the second lowest level in Craft Hierarchy. All the Craft Territories are grouped into Craft District.

Table Name : [CSDI_T.REF_CRFT_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CRFT_DST)<br/>
View Name : [CSDI.REF_CRFT_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CRFT_DST)<br/>
EDW View Name :[EDW.CSDI_REF_CRFT_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CRFT_DST)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_DST_SK|NUMBER|Surrogate Key on Craft District
CRFT_DST_CODE|VARCHAR|Craft District Code
CRFT_DST_NAME|VARCHAR|Craft District Name
CRFT_AREA_SK|NUMBER|Craft Area Surrogate Key
CRFT_DST_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Craft District
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp




## Craft Area

Craft Area is the third highest level in Craft Hierarchy. All the Craft districts are grouped into Craft  Area.

Table Name : [CSDI_T.REF_CRFT_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CRFT_AREA)<br/>
View Name : [CSDI.REF_CRFT_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CRFT_AREA)<br/>
EDW View Name :[EDW.CSDI_REF_CRFT_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CRFT_AREA)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_AREA_SK|NUMBER|Surrogate Key on Craft Area
CRFT_AREA_CODE|VARCHAR|Craft Area Code
CRFT_AREA_NAME|VARCHAR|Craft Area Name
CRFT_PROV_SK|NUMBER|Craft Province Surrogate Key
CRFT_AREA_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Craft Area
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## Craft Province

Craft Province is the second highest level in Craft Hierarchy. All the Craft Areas are grouped into Craft Province.

Table Name : [CSDI_T.REF_CRFT_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CRFT_PROV)<br/>
View Name : [CSDI.REF_CRFT_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CRFT_PROV)<br/>
EDW View Name :[EDW.CSDI_REF_CRFT_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CRFT_PROV)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_PROV_SK|NUMBER|Surrogate Key on Craft Province
CRFT_PROV_CODE|VARCHAR|Craft Province Code
CRFT_PROV_NAME|VARCHAR|Craft Province Name
CRFT_REGN_SK|NUMBER|Craft Region Surrogate Key
CRFT_PROV_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Craft Province
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

 

## Craft Region

Craft Region is the highest level in Craft Hierarchy. All the Craft Provinces are grouped into Craft Region.

Table Name : [CSDI_T.REF_CRFT_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CRFT_REGN)<br/>
View Name : [CSDI.REF_CRFT_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CRFT_REGN)<br/>
EDW View Name :[EDW.CSDI_REF_CRFT_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CRFT_REGN)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CRFT_REGN_SK|NUMBER|Surrogate Key on Craft Region
CRFT_REGN_CODE|VARCHAR|Craft Region Code
CRFT_REGN_NAME|VARCHAR|Craft Region Name
CRFT_REGN_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for Craft Region
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp