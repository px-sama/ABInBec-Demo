---
title: Scan Hierarchy
slug: /Canada-Location/scan-hierarchy
tags:
    - Sales
---

# Scan Hierarchy

This Sales Org Hierarchy is created to manage separate various Scan (Grocery) banners.

This sales org will allow us to report data at grocery banner level without impacting the existing structure.
This will also allow for more flexibility in defining grocery vs convenience and adapt to new reporting requirements of the catman team.


Table Name : [CSDI_NJ_T.DIM_SCN_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_SCN_HIER)<br/>
View Name : [CSDI.DIM_SCN_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SCN_HIER)<br/>



This table/View has the all levels of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_BNR_SK| Number | Surrogate Key for Scan Banner
SCN_BNR_CODE| VARCHAR(10)| Scan Banner Code
SCN_BNR_NAME|  VARCHAR(50)| Scan Banner Name
SCN_CHN_SK| Number | Surrogate Key for Scan Chain
SCN_CHN_CODE| VARCHAR(10)| Scan Chain Code
SCN_CHN_NAME|  VARCHAR(50)| Scan Chain Name
SCN_TYP_SK| Number | Surrogate Key for Scan Type
SCN_TYP_CODE| VARCHAR(10)| Scan Type Code
SCN_TYP_NAME|  VARCHAR(50)| Scan Type Name
SCN_OWNR_SK| Number | Surrogate Key for Scan Owner
SCN_OWNR_CODE| VARCHAR(10)| Scan Owner Code
SCN_OWNR_NAME|  VARCHAR(50)| Scan Owner Name
SCN_ORG_TYP_SK| Number | Surrogate Key for Scan Organization Type
SCN_ORG_TYP_CODE| VARCHAR(10)| Scan Owner Organization Type
SCN_ORG_TYP_NAME|  VARCHAR(50)| Scan Owner Organization Type


## Scan Banner

Table Name : [CSDI_T.REF_SCN_BNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SCN_BNR)<br/>
View Name : [CSDI.REF_SCN_BNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SCN_BNR)<br/>



This table/View has the all the Scan banners. This is the **lowest** level in Scan Hierarchy and POCs are assigned to Scan Banners. This should be defined at **level 5** of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_BNR_SK| Number | Surrogate Key for Scan Banner
SCN_BNR_CODE| VARCHAR(10)| Scan Banner Code
SCN_BNR_NAME|  VARCHAR(50)| Scan Banner Name
SCN_CHN_SK | Number | Surrogate Key for Scan Chain
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update



## Scan Chain

Table Name : [CSDI_T.REF_SCN_CHN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SCN_CHN)<br/>
View Name : [CSDI.REF_SCN_CHN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SCN_CHN)<br/>


This table/View has the all the Scan Channel. This is the parent sales org of Scan Banner in Scan Hierarchy.
This should be defined at **level 4** of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_CHN_SK| Number | Surrogate Key for Scan Chain
SCN_CHN_CODE| VARCHAR(10)| Scan Chain Code
SCN_CHN_NAME|  VARCHAR(50)| Scan Chain Name
SCN_TYP_SK | Number | Surrogate Key for Scan Type
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update

## Scan Type

Table Name : [CSDI_T.REF_SCN_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SCN_TYP)<br/>
View Name : [CSDI.REF_SCN_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SCN_TYP)<br/>


This table/View has the all the Scan Type. This is the parent sales org of Scan Chain in Scan Hierarchy.
This should be defined at **level 3** of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_TYP_SK| Number | Surrogate Key for Scan Type
SCN_TYP_CODE| VARCHAR(10)| Scan Type Code
SCN_TYP_NAME|  VARCHAR(50)| Scan Type Name
SCN_OWNR_SK | Number | Surrogate Key for Scan Owner
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update


## Scan Owner

Table Name : [CSDI_T.REF_SCN_OWNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SCN_OWNR)<br/>
View Name : [CSDI.REF_SCN_OWNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SCN_OWNR)<br/>


This table/View has the all the Scan Type. This is the parent sales org of Scan Chain in Scan Hierarchy.
This should be defined at **level 2** of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_OWNR_SK| Number | Surrogate Key for Scan Owner
SCN_OWNR_CODE| VARCHAR(10)| Scan Owner Code
SCN_OWNR_NAME|  VARCHAR(50)| Scan Owner Name
SCN_ORG_TYP_SK | Number | Surrogate Key for Scan Organization type
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update



## Scan Org Type

Table Name : [CSDI_T.REF_SCN_ORG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SCN_ORG_TYP)<br/>
View Name : [CSDI.REF_SCN_ORG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SCN_ORG_TYP)<br/>

This table/View has the all the Scan Org type. This is the parent sales org of Scan Owner in Scan Hierarchy.
This should be defined at **level 1** of Scan Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SCN_ORG_TYP_SK| Number | Surrogate Key for Scan Organization type
SCN_ORG_TYP_CODE| VARCHAR(10)| Scan Organization type Code
SCN_ORG_TYP_NAME|  VARCHAR(50)| Scan Organization type Name
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update