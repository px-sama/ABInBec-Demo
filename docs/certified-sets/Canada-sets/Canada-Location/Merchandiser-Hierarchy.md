---
title: Merchandiser(SMR) Hierarchy
slug: /Canada-Location/merchandiser
tags:
    - Location
    - POC
---

# Merchandiser(SMR) Hierarchy

This Sales Org Hierarchy is created to manage separate various SMR POC allocations.

This sales org will allow us to report data at according to different SMRs without impacting the existing structure.

After the recent restructuring, multiple regions will begin relying on merchandisers to own POCs and calling on them as if they were regular reps. This will support rep coverage, but still require some overlap with the Sales Hierarchy as well. The SMR hierarchy is very similar to the MBC/Craft hierarchy, in the sense that the SMRs should be on the level 5 hierarchy so they get full district access. This is hierarchy work is required so the Darwin team can begin on the Salesforce work.


Table Name : [CSDI_NJ_T.DIM_SMR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_SMR_HIER)<br/>
View Name : [CSDI.DIM_SMR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SMR_HIER)<br/>

This table/View has the all levels of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_TERR_SK| Number | Surrogate Key for SMR Territory
SMR_TERR_CODE| VARCHAR(10)| SMR Territory Code
SMR_TERR_NAME|  VARCHAR(50)| SMR Territory Name
SMR_DIST_SK| Number | Surrogate Key for SMR District
SMR_DIST_CODE| VARCHAR(10)| SMR District Code
SMR_DIST_NAME|  VARCHAR(50)| SMR District Name
SMR_AREA_SK| Number | Surrogate Key for SMR Area
SMR_AREA_CODE| VARCHAR(10)| SMR Area Code
SMR_AREA_NAME|  VARCHAR(50)| SMR Area Name
SMR_PROV_SK| Number | Surrogate Key for SMR Province
SMR_PROV_CODE| VARCHAR(10)| SMR Province Code
SMR_PROV_NAME|  VARCHAR(50)| SMR Province Name
SMR_REGN_SK| Number | Surrogate Key for SMR Region
SMR_REGN_CODE| VARCHAR(10)| SMR Region Code
SMR_REGN_NAME|  VARCHAR(50)| SMR Region Name



## SMR Territory

Table Name : [CSDI_T.REF_SMR_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SMR_TERR)<br/>
View Name : [CSDI.REF_SMR_TERR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SMR_TERR)<br/>

This table/View has the all the SMR territories. This is the **lowest** level in SMR Hierarchy and POCs are assigned to SMR territories. This should be defined at **level 5** of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_TERR_SK| Number | Surrogate Key for SMR Territory
SMR_TERR_CODE| VARCHAR(10)| SMR Territory Code
SMR_TERR_NAME|  VARCHAR(50)| SMR Territory Name
SMR_DIST_SK | Number | Surrogate Key for SMR District
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update



## SMR District

Table Name : [CSDI_T.REF_SMR_DIST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SMR_DIST)<br/>
View Name : [CSDI.REF_SMR_DIST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SMR_DIST)<br/>

This table/View has the all the SMR Districts. This is the parent sales org of SMR Territory in SMR Hierarchy.
This should be defined at **level 4** of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_DIST_SK| Number | Surrogate Key for SMR District
SMR_DIST_CODE| VARCHAR(10)| SMR District Code
SMR_DIST_NAME|  VARCHAR(50)| SMR District Name
SMR_AREA_SK | Number | Surrogate Key for SMR Area
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update

## SMR Area
Table Name : [CSDI_T.REF_SMR_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SMR_AREA)<br/>
View Name : [CSDI.REF_SMR_AREA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SMR_AREA)<br/>

This table/View has the all the SMR Areas. This is the parent sales org of SMR District in SMR Hierarchy.
This should be defined at **level 3** of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_AREA_SK| Number | Surrogate Key for SMR Area
SMR_AREA_CODE| VARCHAR(10)| SMR Area Code
SMR_AREA_NAME|  VARCHAR(50)| SMR Area Name
SMR_PROV_SK | Number | Surrogate Key for SMR Province
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update


## SMR Province
Table Name : [CSDI_T.REF_SMR_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SMR_PROV)<br/>
View Name : [CSDI.REF_SMR_PROV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SMR_PROV)<br/>

This table/View has the all the SMR Provinces. This is the parent sales org of SMR Area in SMR Hierarchy.
This should be defined at **level 2** of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_PROV_SK| Number | Surrogate Key for SMR Province
SMR_PROV_CODE| VARCHAR(10)| SMR Province Code
SMR_PROV_NAME|  VARCHAR(50)|SMR Province Name
SMR_REGN_SK | Number | Surrogate Key for SMR Region
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update



## SMR Region
Table Name : [CSDI_T.REF_SMR_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SMR_REGN)<br/>
View Name : [CSDI.REF_SMR_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SMR_REGN)<br/>

This table/View has the all the SMR Region. This is the parent sales org of SMR Province in SMR Hierarchy.
This should be defined at **level 1** of SMR Hierarchy.

COLUMN_NAME	|	DATA_TYPE	|	COMMENT
-	|	-	|	-
SMR_REGN_SK| Number | Surrogate Key for SMR Region
SMR_REGN_CODE| VARCHAR(10)| SMR Region Code
SMR_REGN_NAME|  VARCHAR(50)| SMR Region Name
DEL_IND | Number | Delete Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ(9)| Date and time of Last update
