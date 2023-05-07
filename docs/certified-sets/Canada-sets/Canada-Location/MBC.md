---
title: MBC Hierarchy
slug: /Canada-Location/MBC-Hierarchy
tags:
    - Location
    - Consumer Data
    - Application
---
# MBC Hierarchy
MBC Hierarchy helps us to assign POCs into different territories which are used for Beyond Beer reps.
This table contains all the details about MBC Sales Org hierarchy.

Table Name : [CSDI_NJ_T.DIM_MBC_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_MBC_HIER)<br/>
View Name : [CSDI.DIM_MBC_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_MBC_HIER)<br/>
EDW View Name :[EDW.CSDI_DIM_MBC_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_MBC_HIER)<br/>


Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_TERR_SK	|	NUMBER(38,0)	|	MBC Territory Surrogate Key
MBC_TERR_CODE	|	VARCHAR(10)	|	MBC Territory Code
MBC_TERR_NAME	|	VARCHAR(50)	|	MBC Territory Name
MBC_TERR_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for MBC Territory
MBC_DST_SK	|	NUMBER(38,0)	|	MBC District Surrogate Key
MBC_DST_CODE	|	VARCHAR(10)	|	MBC District Code
MBC_DST_NAME	|	VARCHAR(50)	|	MBC District Name
MBC_DST_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for MBC District
MBC_AREA_SK	|	NUMBER(38,0)	|	MBC Area Surrogate Key
MBC_AREA_CODE	|	VARCHAR(10)	|	MBC Area Code
MBC_AREA_NAME	|	VARCHAR(50)	|	MBC Area Name
MBC_AREA_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for MBC Area
MBC_PROV_SK	|	NUMBER(38,0)	|	MBC Province Surrogate Key
MBC_PROV_CODE	|	VARCHAR(10)	|	MBC Province Code
MBC_PROV_NAME	|	VARCHAR(50)	|	MBC Province Name
MBC_PROV_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for MBC Province
MBC_REGN_SK	|	NUMBER(38,0)	|	MBC Region Surrogate Key
MBC_REGN_CODE	|	VARCHAR(10)	|	MBC Region Code
MBC_REGN_NAME	|	VARCHAR(50)	|	MBC Region Name
MBC_REGN_PRSN_RESP_SK	|	NUMBER(38,0)	|	Surrogate Key on Person Responsible for MBC Region
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## MBC Territory

MBC Territory is the lowest level in MBC Hierarchy. All the POCs are mapped to MBC Territory only in MDM.

Table Name : [CSDI_T.REF_MBC_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MBC_TERR)<br/>
View Name : [CSDI.REF_MBC_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MBC_TERR)<br/>
EDW View Name :[EDW.CSDI_REF_MBC_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MBC_TERR)<br/>
Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_TERR_SK|NUMBER|Surrogate Key on MBC Territory
MBC_TERR_CODE|VARCHAR|MBC Territory Code
MBC_TERR_NAME|VARCHAR|MBC Territory Name
MBC_DST_SK|NUMBER|MBC District Surrogate Key
MBC_TERR_PRSN_RESP_SK|NUMBER|Surrogate Key for Person Responsible for MBC Territory
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## MBC District

MBC District is the second lowest level in MBC Hierarchy. All the MBC Territories are grouped into MBC District.

Table Name : [CSDI_T.REF_MBC_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MBC_DST)<br/>
View Name : [CSDI.REF_MBC_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MBC_DST)<br/>
EDW View Name :[EDW.CSDI_REF_MBC_DST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MBC_DST)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_DST_SK|NUMBER|Surrogate Key on MBC District
MBC_DST_CODE|VARCHAR|MBC District Code
MBC_DST_NAME|VARCHAR|MBC District Name
MBC_AREA_SK|NUMBER|MBC Area Surrogate Key
MBC_DST_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for MBC District
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp




## MBC Area

MBC Area is the third highest level in MBC Hierarchy. All the MBC districts are grouped into MBC  Area.

Table Name : [CSDI_T.REF_MBC_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MBC_AREA)<br/>
View Name : [CSDI.REF_MBC_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MBC_AREA)<br/>
EDW View Name :[EDW.CSDI_REF_MBC_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MBC_AREA)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_AREA_SK|NUMBER|Surrogate Key on MBC Area
MBC_AREA_CODE|VARCHAR|MBC Area Code
MBC_AREA_NAME|VARCHAR|MBC Area Name
MBC_PROV_SK|NUMBER|MBC Province Surrogate Key
MBC_AREA_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for MBC Area
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp




## MBC Province

MBC Province is the second highest level in MBC Hierarchy. All the MBC Areas are grouped into MBC Province.

Table Name : [CSDI_T.REF_MBC_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MBC_PROV)<br/>
View Name : [CSDI.REF_MBC_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MBC_PROV)<br/>
EDW View Name :[EDW.CSDI_REF_MBC_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MBC_PROV)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_PROV_SK|NUMBER|Surrogate Key on MBC Province
MBC_PROV_CODE|VARCHAR|MBC Province Code
MBC_PROV_NAME|VARCHAR|MBC Province Name
MBC_REGN_SK|NUMBER|MBC Region Surrogate Key
MBC_PROV_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for MBC Province
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


 

## MBC Region

MBC Region is the highest level in MBC Hierarchy. All the MBC Provinces are grouped into MBC Region.

Table Name : [CSDI_T.REF_MBC_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MBC_REGN)<br/>
View Name : [CSDI.REF_MBC_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MBC_REGN)<br/>
EDW View Name :[EDW.CSDI_REF_MBC_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MBC_REGN)<br/>

Field Name	|	Data Type	|	Comment
-	|	-	|	-
MBC_REGN_SK|NUMBER|Surrogate Key on MBC Region
MBC_REGN_CODE|VARCHAR|MBC Region Code
MBC_REGN_NAME|VARCHAR|MBC Region Name
MBC_REGN_PRSN_RESP_SK|NUMBER|Surrogate Key on Person Responsible for MBC Region
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
