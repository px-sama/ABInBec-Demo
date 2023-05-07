---
title: Canada Variable Compensation
tags:
    - Volume
    - Distribution
    - Execution
    - Volume
---
# Canada Variable Compensation

This application gets the Volume, Distribution and Execution Actuals and Target from Snowflake views.
These views are created as per VC requirement to handle different type of volume as per rep classification.

Variable Compensation Application helps Sales OPS teams  and Reps to track the target for each rep  and pay the compensation a per their performance in territory.

## Variable Compensation - Volume

These views helps to track Variable compensation target for volume component.

### Volume Actuals

This view provides Sales volume for each POC at monthly level. There are various logic implemented as per Sales OPS team and depends on Rep classification.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_POC_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_POC_SLS) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_POC_SLS

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
SLS_SRC_SK	|	NUMBER	|	Surrogate Key For Sales Source
POC_SK	|	NUMBER	|	Surrogate Key created for VC Geography Dimension at POC level
BI_ITEM_SK	|	NUMBER	|	Surrogate Key created for VC Product Dimension
SLS_SUB_CH_SK	|	NUMBER	|	Sales Sub Channel Surrogate key
START_DT	|	DATE	|	Sales Reporting Date
TM_DMN	|	VARCHAR(1)	|	Time domain ( Daily/ Weekly/ Monthly/Quarterly)
SLS_HL	|	NUMBER	|	Sales Volume in HL
SLS_VC_TOTAL_SLS_HL	|	NUMBER	|	Total Sales Volume for Core Hierarchy
SLS_VC_BB_SLS_HL	|	NUMBER	|	Beyond Beer Sales Volume for Core Hierarchy
SLS_VC_HE_SLS_HL	|	NUMBER	|	High End/Craft Volume for Core Hierarchy
SLS_VC_DIST_SLS_HL	|	NUMBER	|	District Volume for Core Hierarchy only where it is required.
MBC_VC_TOTAL_SLS_HL	|	NUMBER	|	Total Sales Volume for MBC Hierarchy
MBC_VC_DIST_SLS_HL	|	NUMBER	|	District Volume for MBC Hierarchy only where it is required.
CRFT_VC_TOTAL_SLS_HL	|	NUMBER	|	Total Sales Volume for Craft Hierarchy
CRFT_VC_DIST_SLS_HL	|	NUMBER	|	District Volume for Craft Hierarchy only where it is required.


### Volume Target

This view provides Sales volume for each Territory at monthly level. There are various logic implemented as per Sales OPS team and depends on Rep classification.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_VOL_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_VOL_TGT) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_VOL_TGT

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
START_DT	|	DATE	|	Target Date
POC_SK	|	NUMBER	|	Surrogate Key created for VC Geography Dimension at Territory Level
BI_ITEM_SK	|	NUMBER	|	Surrogate Key created for VC Product Dimension
PLNG_SCEN_SK	|	NUMBER	|	Surrogate Key for Planning Scenario
SRC	|	VARCHAR(17)	|	Source of Target
TGT_SLS_HL	|	NUMBER	|	Target Sales in HL
SLS_TOTAL_TGT_HL	|	NUMBER	|	Total Target Sales in HL for Core Hierarchy
SLS_BB_TGT_HL	|	NUMBER	|	Beyond Beer Target Sales in HL for Core Hierarchy
SLS_HE_TGT_HL	|	NUMBER	|	High End/Craft Target Sales in HL for Core Hierarchy
SLS_DIST_TGT_HL	|	NUMBER	|	District Target Sales in HL for Core Hierarchy where it is required.
MBC_TOTAL_TGT_HL	|	NUMBER	|	Total Target Sales in HL for MBC Hierarchy
MBC_DIST_TGT_HL	|	NUMBER	|	District Target Sales in HL for MBC Hierarchy where it is required.
CRFT_TOTAL_TGT_HL	|	NUMBER	|	Total Target Sales in HL for CRAFT Hierarchy
CRFT_DIST_TGT_HL	|	NUMBER	|	District Target Sales in HL for CRAFT Hierarchy where it is required.


## Variable Compensation - Distribution

These views helps to track Variable compensation target for Distribution component.
The Distribution is calculated based on sales in the POC of targeted SKU.

### Distribution Actuals

This view provides Distribution for each POC at monthly level for the targeted SKU.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_POC_PROD_DIST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_POC_PROD_DIST) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_POC_PROD_DIST

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
START_DT	|	DATE	|	Start Date for Targeted Quarter
POC_SK	|	NUMBER	|	Surrogate Key for VC Geography Dimension at POC level
BI_ITEM_SK	|	NUMBER	|	Surrogate Key created for VC Product Dimension
DIST_IND	|	NUMBER	|	Distribution Indicator
SLS_ACTV_DIST	|	NUMBER	|	Active Distribution Target for Core Hierarchy
CRFT_ACTV_DIST	|	NUMBER	|	Active Distribution Target for Craft Hierarchy
MBC_ACTV_DIST	|	NUMBER	|	Active Distribution Target for MBC Hierarchy



### Distribution Target

This view provides Distribution Target for each Territory at monthly level. 
Target is the number of POCs for each targeted SKU in the Territory.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_DIST_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_DIST_TGT) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_DIST_TGT

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
QTR_STRT_DT	|	DATE	|	Start Date for Targeted Quarter
POC_SK	|	NUMBER	|	Surrogate Key for VC Geography Dimension at Territory Level.
BI_ITEM_SK	|	NUMBER	|	Surrogate Key created for VC Product Dimension
TGT_DIST_CNT	|	NUMBER	|	Target Distribution Count


## Variable Compensation - Geography

This view contains contained the Geography dimension used for Variable compensation. It contains all the POCs. It contains data at Province level for PPS reporting and Territory level for Volume and Distribution Target.

EDW View Name : [EDW.CSDI_APP_AAS_REF_GEOGRAPHY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_REF_GEOGRAPHY) <br/>
CSDI View Name : CSDI.APP_AAS_REF_GEOGRAPHY

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
POC_SK	|	NUMBER	|	Surrogate Key For POC
POC_CODE	|	VARCHAR(10)	|	POC CODE
POC_NAME	|	VARCHAR(256)	|	POC Name
POC_REPORTING_NAME	|	VARCHAR(269)	|	Reporting Name for POC
POC_ADDR_1	|	VARCHAR(256)	|	Address Line 1 for POC
POC_ADDR_2	|	VARCHAR(256)	|	Address Line 2 for POC
POC_CITY_MCPLTY	|	VARCHAR(256)	|	City Municipality for POC
CALC_CITY	|	VARCHAR(256)	|	Calculated City 
CALC_PROVINCE	|	VARCHAR(256)	|	Calculated Province 
CALC_COUNTRY	|	VARCHAR(256)	|	Calculated Country
POC_POSTL_CODE	|	VARCHAR(20)	|	Postal Code for POC
POC_PRMT_NBR	|	VARCHAR(15)	|	Permit Number of POC
SLS_SUB_CH_SK	|	NUMBER	|	Surrogate Key For POC Sub Channel
SLS_CH_SK	|	NUMBER	|	Surrogate Key for POC Channel
SLS_CH_CODE	|	VARCHAR(14)	|	POC Channel Code
SLS_CH_NAME	|	VARCHAR(50)	|	POC Channel Name
SLS_SUB_CH_CODE	|	VARCHAR(14)	|	POC SUB Channel CODE
SLS_SUB_CH_NAME	|	VARCHAR(50)	|	POC SUB Channel NAME
PREM_SK	|	NUMBER	|	Surrogate Key for Premise
PREM_CODE	|	VARCHAR(14)	|	Premise Code
PREM_NAME	|	VARCHAR(14)	|	Premise Name
POC_CALLD_ON_CTGY_CODE	|	VARCHAR(255)	|	Called On Category Code for POC
POC_SEG_SK	|	NUMBER	|	Surrogate Key for POC Segment
POC_SEG_CODE	|	VARCHAR(255)	|	POC Segment Code
POC_SEG_NAME	|	VARCHAR(255)	|	POC Segment Name
POC_SUB_SEG_SK	|	NUMBER	|	Surrogate Key for POC SUB Segment
POC_SUB_SEG_CODE	|	VARCHAR(255)	|	POC Sub Segment Code
POC_SUB_SEG_NAME	|	VARCHAR(255)	|	POC Sub Segment Name
SLS_TERR_SK	|	VARCHAR(10)	|	Surrogate Key for Sales Territory
SLS_TERR_CODE	|	VARCHAR(10)	|	Sales Territory Code
SLS_TERR_NAME	|	VARCHAR(50)	|	Sales Territory Name
SLS_DST_CODE	|	VARCHAR(10)	|	Sales District Code
SLS_DST_NAME	|	VARCHAR(50)	|	Sales District Name
SLS_AREA_CODE	|	VARCHAR(10)	|	Sales Area Code
SLS_AREA_NAME	|	VARCHAR(50)	|	Sales Area Name
SLS_PROV_CODE	|	VARCHAR(10)	|	Sales Province Code
SLS_PROV_NAME	|	VARCHAR(50)	|	Sales Province Name
SLS_REGN_CODE	|	VARCHAR(10)	|	Sales Region Code
SLS_REGN_NAME	|	VARCHAR(50)	|	Sales Region Name
SLS_REP_CLSFCN	|	VARCHAR(100)	|	Sales Rep Classification
SLS_TERR_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for Sales Territory
SLS_DST_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for Sales District
SLS_TERR_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for Sales Territory
SLS_DST_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for Sales District
KEY_ACCT_BNR_CODE	|	VARCHAR(10)	|	Key Account Banner Code
KEY_ACCT_BNR_NAME	|	VARCHAR(50)	|	Key Account Banner Name
KEY_ACCT_CODE	|	VARCHAR(10)	|	Key Account Code
KEY_ACCT_NAME	|	VARCHAR(50)	|	Key Account Name
KEY_ACCT_MGR_CODE	|	VARCHAR(10)	|	Key Account Manager Code
KEY_ACCT_MGR_NAME	|	VARCHAR(50)	|	Key Account Manager Name
KEY_ACCT_ORG_TYP_CODE	|	VARCHAR(10)	|	Key Account Organization Type Code
KEY_ACCT_ORG_TYP_NAME	|	VARCHAR(50)	|	Key Account Organization Type Name
MBC_TERR_SK	|	VARCHAR(10)	|	Surrogate Key for MBC Territory
MBC_TERR_CODE	|	VARCHAR(10)	|	MBC Territory Code
MBC_TERR_NAME	|	VARCHAR(50)	|	MBC Territory Name
MBC_DST_CODE	|	VARCHAR(10)	|	MBC District Code
MBC_DST_NAME	|	VARCHAR(50)	|	MBC District Name
MBC_AREA_CODE	|	VARCHAR(10)	|	MBC Area Code
MBC_AREA_NAME	|	VARCHAR(50)	|	MBC Area Name
MBC_PROV_CODE	|	VARCHAR(10)	|	MBC Province Code
MBC_PROV_NAME	|	VARCHAR(50)	|	MBC Province Name
MBC_REGN_CODE	|	VARCHAR(10)	|	MBC Region Code
MBC_REGN_NAME	|	VARCHAR(50)	|	MBC Region Name
MBC_REP_CLSFCN	|	VARCHAR(100)	|	MBC Rep Classification
MBC_TERR_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for MBC Territory
MBC_DST_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for MBC District
MBC_TERR_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for MBC Territory
MBC_DST_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for MBC District
CRFT_TERR_SK	|	VARCHAR(10)	|	Surrogate Key for CRAFT Territory
CRFT_TERR_CODE	|	VARCHAR(10)	|	CRAFT Territory Code
CRFT_TERR_NAME	|	VARCHAR(50)	|	CRAFT Territory Name
CRFT_DST_CODE	|	VARCHAR(10)	|	CRAFT District Code
CRFT_DST_NAME	|	VARCHAR(50)	|	CRAFT District Name
CRFT_AREA_CODE	|	VARCHAR(10)	|	CRAFT Area Code
CRFT_AREA_NAME	|	VARCHAR(50)	|	CRAFT Area Name
CRFT_PROV_CODE	|	VARCHAR(10)	|	CRAFT Province Code
CRFT_PROV_NAME	|	VARCHAR(50)	|	CRAFT Province Name
CRFT_REGN_CODE	|	VARCHAR(10)	|	CRAFT Region Code
CRFT_REGN_NAME	|	VARCHAR(50)	|	CRAFT Region Name
CRFT_REP_CLSFCN	|	VARCHAR(100)	|	CRAFT Rep Classification
CRFT_TERR_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for CRAFT Territory
CRFT_DST_PRSN_NAME	|	VARCHAR(302)	|	Person Responsible Name for CRAFT District
CRFT_TERR_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for CRAFT Territory
CRFT_DST_PRSN_ID	|	VARCHAR(6)	|	Person Responsible ID for CRAFT District
TS_TERR_CODE	|	VARCHAR(10)	|	TELESALES Territory Code
TS_TERR_NAME	|	VARCHAR(50)	|	TELESALES Territory Name
TS_AREA_CODE	|	VARCHAR(10)	|	TELESALES Area Code
TS_AREA_NAME	|	VARCHAR(50)	|	TELESALES Area Name
TS_PROV_CODE	|	VARCHAR(10)	|	TELESALES Province Code
TS_PROV_NAME	|	VARCHAR(50)	|	TELESALES Province Name
TS_REGN_CODE	|	VARCHAR(10)	|	TELESALES Region Code
TS_REGN_NAME	|	VARCHAR(50)	|	TELESALES Region Name
POC_LATTD	|	NUMBER	|	Lattitude for POC
POC_LNGTD	|	NUMBER	|	Longitude for POC



## Variable Compensation - LOLA Execution

These views helps to track Variable compensation target for LOLA execution component.
The LOLA execution is calculated based on execution feedback 

### LOLA Execution Actuals

This view provides LOLA Execution for each POC at monthly level for the targeted SKU.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_POC_LOLA_EXEC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_POC_LOLA_EXEC) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_POC_LOLA_EXEC

Field Name	|	Data Type	|	COMMENT
-	        |	-	        |	-
MO_START_DT	|	DATE	        |	Month of Lola recommendation execution
POC_SK	        |	NUMBER	        |	Surrogate Key for VC Geography Dimension at POC level
BI_ITEM_SK	|	NUMBER	        |	Surrogate Key created for VC Product Dimension
LOLA_EXEC_STATUS|	VARCHAR         |	Lola Execution Status Completed/Not Completed /Denied etc.
KEY             |	VARCHAR         |	Unique key column to calculate the execution count in VC report.




### LOLA Execution Target

This view provides LOLA Execution Target for each Territory at monthly level. 
Target is the number of targeted executions in the Territory.

EDW View Name : [EDW.CSDI_APP_AAS_FCT_VC_LOLA_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_FCT_VC_LOLA_TGT) <br/>
CSDI View Name : CSDI.APP_AAS_FCT_VC_LOLA_TGT

Field Name	|	Data Type	|	COMMENT
-	        |	-	        |	-
MO_START_DT	|	DATE	        |	Month of Lola recommendation execution
POC_SK	        |	NUMBER	        |	Surrogate Key for VC Geography Dimension at POC level
LOLA_TGT_CNT    |	NUMBER	        |	Lola Execution Target Count





## Variable Compensation - Product

This view list all the products with its attributes. It also contains the products at Consumer Generic Product and Sellable product level to join with Distribution tables.

EDW View Name : [EDW.CSDI_APP_AAS_REF_PRODUCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_REF_PRODUCT) <br/>
CSDI View Name : CSDI.APP_AAS_REF_PRODUCT

Field Name	|	Data Type	|	COMMENT
-	|	-	|	-
BI_ITEM_SK	|	NUMBER	|	Surrogate Key For Product Dimension
BI_ITEM_NAME	|	VARCHAR(256)	|	Product Name
CMRCL_PROD_KEY	|	VARCHAR(30)	|	Commercial Product Key Material , virtual and Other products
ANAL_ITEM_ID	|	VARCHAR(14)	|	Analytical Item ID present only for Brand Analytical Items
MATL_NBR	|	VARCHAR(18)	|	Material Number
MATL_NAME	|	VARCHAR(40)	|	Material Name
BRD_CODE	|	VARCHAR(10)	|	Brand Code
BRD_NAME	|	VARCHAR(64)	|	Brand Name
BRD_FMLY_CODE	|	VARCHAR(10)	|	Brand Family Code
BRD_FMLY_NAME	|	VARCHAR(64)	|	Brand Family Name
SLBL_PROD_CODE	|	VARCHAR(16777216)	|	Sellable Product Code
SLBL_PROD_NAME	|	VARCHAR(768)	|	Sellable Product Name
SLBL_BRD_SK	|	NUMBER	|	Surrogate Key For Sellable Brand
SLBL_BRD_CODE	|	VARCHAR(6)	|	Sellable Brand Code
SLBL_BRD_NAME	|	VARCHAR(50)	|	Sellable Brand Name
MIX_IND_CODE	|	VARCHAR(1)	|	Mix Indicator Code
MIX_IND_NAME	|	VARCHAR(16)	|	Mix Indicator Name
GENR_PROD_CODE	|	VARCHAR(16777216)	|	Generic Product Code
GENR_PROD_NAME	|	VARCHAR(768)	|	Generic Product Name
CNSMR_PROD_SK	|	NUMBER	|	Surrogate Key for Consumer Generic Product
CNSMR_PROD_CODE	|	VARCHAR(16777216)	|	Consumer Product Key
CNSMR_PROD_NAME	|	VARCHAR(768)	|	Consumer Product Name
PKG_CODE	|	VARCHAR(6)	|	Package Code
PKG_NAME	|	VARCHAR(50)	|	Package Name
CONT_TYP_CODE	|	VARCHAR(6)	|	Container Type Code
CONT_TYP_NAME	|	VARCHAR(50)	|	Container Type Name
PKG_CLS_SK	|	NUMBER	|	Surrogate Key for Package Class 
PKG_CLS_CODE	|	VARCHAR(4)	|	Package Class Code
PKG_CLS_NAME	|	VARCHAR(50)	|	Package Class Name
CONT_RTRN_CODE	|	VARCHAR(4)	|	Container Returnability Code
CONT_RTRN_NAME	|	VARCHAR(50)	|	Container Returnability Name
CONT_MATL_CODE	|	VARCHAR(4)	|	Container Material Code
CONT_MATL_NAME	|	VARCHAR(50)	|	Container Material Name
BRWR_CODE	|	VARCHAR(10)	|	Brewer Code
BRWR_NAME	|	VARCHAR(50)	|	Brewer Name
BRWR_PRNT_CODE	|	VARCHAR(10)	|	Parent Brewer Code
BRWR_PRNT_NAME	|	VARCHAR(50)	|	Parent Brewer Name
BRWR_TYP_CODE	|	VARCHAR(1)	|	Brewer Type Code
BRWR_TYP_NAME	|	VARCHAR(16)	|	Brewer Type Code
LIQ_CLS_CODE	|	VARCHAR(6)	|	Liquid Class Code
LIQ_CLS_NAME	|	VARCHAR(64)	|	Liquid Class Name
LIQ_SEG_CODE	|	VARCHAR(4)	|	Liquid Segment Code
LIQ_SEG_NAME	|	VARCHAR(50)	|	Liquid Segment Name
CNTRY_PROD_IMP_CODE	|	VARCHAR(3)	|	Import Code based on Country of Production
CNTRY_PROD_IMP_NAME	|	VARCHAR(14)	|	Import Name based on Country of Production
CNTRY_PROD_CODE	|	VARCHAR(4)	|	Country of Production Code
CNTRY_PROD_NAME	|	VARCHAR(50)	|	Country of Production Name
BRWR_TYPE_TOP_CODE	|	VARCHAR(6)	|	Brewer Type Code at Top of Hierarchy
BRWR_TYPE_TOP_NAME	|	VARCHAR(8)	|	Brewer Type Name at Top of Hierarchy
PRC_SEG_CODE	|	VARCHAR(10)	|	Price Segment Code
PRC_SEG_NAME	|	VARCHAR(50)	|	Price Segment Name
PRC_CLS_CODE	|	VARCHAR(10)	|	Price Class Code
PRC_CLS_NAME	|	VARCHAR(50)	|	Price Class Name
CMPNT_BRD_CODE	|	VARCHAR(16777216)	|	Component Brand Code
CMPNT_BRD_NAME	|	VARCHAR(768)	|	Component Brand Name
CNSMR_CMPNT_BRD_CODE	|	VARCHAR(16777216)	|	Component Brand Code For Consumer Generic Product
CNSMR_CMPNT_BRD_NAME	|	VARCHAR(768)	|	Component Brand Name For Consumer Generic Product
BRD_TST_SEG_CODE	|	VARCHAR(4)	|	Brand Taste Segment Code
BRD_TST_SEG_NAME	|	VARCHAR(50)	|	Brand Taste Segment Name
CONT_SZ_CODE	|	VARCHAR(4)	|	Container Size Code
CONT_SZ_NAME	|	VARCHAR(50)	|	Container Size Name
CONT_SZ_HL	|	NUMBER	|	Container Size in HL
CONT_TYP_INR_CNT_SK	|	NUMBER	|	Surrogate Key from Container Type Inner Count
CONT_TYP_INR_CNT_NAME	|	VARCHAR(64)	|	Container Type Inner Count Name
INR_PKG_CONT_CNT_CODE	|	VARCHAR(4)	|	Inner Package Container Count Code
INR_PKG_CONT_CNT_NBR	|	NUMBER	|	Inner Package Container Count Number
RTD_REPORTING_FILTER	|	VARCHAR(3)	|	Filter user for RTD Reporting
BEER_REPORTING_FILTER	|	VARCHAR(4)	|	Filter user for BEER Reporting
BRWR_LAB_INCL_MSB_FILTER	|	VARCHAR(3)	|	Filter used for Labatt Brewer including MSB
BRWR_LAB_EXCL_MSB_FILTER	|	VARCHAR(3)	|	Filter used for Labatt Brewer excluding MSB
BRD_CLASSIFICATION	|	VARCHAR(50)	|	Brand Classification used for Variable compensation