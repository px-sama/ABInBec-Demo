---
title: PDA Mapping Tables/Views
slug: /PDA/pda-mapping
tags:
    - PDA
    - Canada
    - Contract
    - Quebec
---

## PDA Mapping Tables and Views

These tables are used for mapping of PDA data with other data or values which is used for PDA reporting.
Below are the list of tables/Views

Tables:

- CSDI_T.MAP_PDA_ACCT
- CSDI_T.MAP_PDA_SLS_ORG
- CSDI_T.MAP_PDA_PROD
- CSDI_S.PDA_MAP_PSTN_CHNG
- CSDI_S.PDA_MAP_PSTN_ORDR
- CSDI_S.PDA_MAP_DIST_REGN_DV

Views:

- CSDI_V.MAP_PDA_ACCT
- CSDI_V.MAP_PDA_SLS_ORG
- CSDI_V.MAP_PDA_PROD
- CSDI.MAP_PDA_ACCT
- CSDI.MAP_PDA_SLS_ORG
- CSDI.MAP_PDA_PROD
- CSDI.PDA_MAP_PSTN_CHNG
- CSDI.PDA_MAP_PSTN_ORDR
- CSDI.PDA_MAP_DIST_REGN_DV


### PDA Account Map
This table manages the PDA accounts mapped to physical Locations in MDM/Snowflake for Canada. It stores other details like POC, Customer , Account type etc.
This tables gets loaded daily via Mulesoft Code ( abi-ca-pda ) from the view CSDI_V.MAP_PDA_ACCT. All the logic to populate table is in this view. 

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_PDA_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_PDA_ACCT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_PDA_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_PDA_ACCT)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_PDA_ACCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_PDA_ACCT)<br/>  


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PDA_ACCT_SK	|	VARCHAR(18)	|	PDA Account Key provided by PDA
|PHF_LOC_SK	|	NUMBER	|	Surrogate Key for Physical Location 
|POC_SK	|	NUMBER	|	Surrogate Key for POC(Point Of Connection)
|CUST_SK	|	NUMBER	|	Surrogate Key for Customer
|CUST_ACCT_GRP_CODE	|	VARCHAR(4) 	|	Customer Account Group Code
|ACCT_TYP_CODE	|	VARCHAR(255) 	|	Account type Code
|CUST_SHIP_TO_SK	|	NUMBER	|	Surrogate Key for Ship To customer
|CUST_PAY_TO_SK	|	NUMBER	|	Surrogate Key for Payer
|MAP_IND	|	NUMBER	|	Mapping indicator
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last update



### PDA Sales Organization Map
This table manages the PDA Sales Organizations mapped to Sales Organizations in MDM/Snowflake for Canada. 
This tables gets loaded daily via Mulesoft Code ( abi-ca-pda ) from the view CSDI_V.MAP_PDA_SLS_ORG. All the logic to populate table is in this view. 

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_PDA_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_PDA_SLS_ORG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_PDA_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_PDA_SLS_ORG)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_PDA_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_PDA_SLS_ORG)<br/>  


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PDA_SLS_ORG_SK	|	VARCHAR(18)	|	Sales Org Key Provided by PDA
|SLS_ORG_SK	|	NUMBER	|	Surrogate key for Sales Organization in MDM
|PDA_SLS_ORG_NAME	|	VARCHAR(255)	|	Sales Org Name  Provided by PDA
|PDA_SLS_ORG_OWNR_SK	|	VARCHAR(18)	|	Sales Org  Owner Key Provided by PDA
|MAP_IND	|	NUMBER	|	Mapping Indicator
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last Update



### PDA Product Map
This table manages the PDA Products mapped to Products in MDM/Snowflake for Canada. 
This tables gets loaded daily via Mulesoft Code ( abi-ca-pda ) from the view CSDI_V.MAP_PDA_PROD. All the logic to populate table is in this view. 

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_PDA_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_PDA_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_PDA_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_PDA_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_PDA_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_PDA_PROD)<br/>  

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PDA_PROD_SK|	VARCHAR(18)	|	Product Key Provided by PDA
|BI_ITEM_SK	|	NUMBER	|	Surrogate key for BI Item in MDM
|MAP_IND	|	NUMBER	|	Mapping Indicator
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last Update


### PDA Position Change Map
This table manages the PDA position change code (Gain/Perte/Neutre) mapping based on change in positions(Before and After Position). This is a static table and will be manually changed once requested by business.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.PDA_MAP_PSTN_CHNG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/PDA_MAP_PSTN_CHNG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.PDA_MAP_PSTN_CHNG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/PDA_MAP_PSTN_CHNG)<br/>
EDW View Name &emsp;: [EDW.CSDI_PDA_MAP_PSTN_CHNG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_PDA_MAP_PSTN_CHNG)<br/>  


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|POSN_CHNG_FROM_TO|	VARCHAR(18)	|	Concatenation for Position Before and Postion After
|POSN_CHNG|	NUMBER	|	position change code (Gain/Perte/Neutre)
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last Update


### PDA Position Order Map
This table manages the PDA position Order mapping based on PDA positions. This is a static table and will be manually changed once requested by business.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.PDA_MAP_PSTN_ORDR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/PDA_MAP_PSTN_ORDR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.PDA_MAP_PSTN_ORDR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/PDA_MAP_PSTN_ORDR)<br/>
EDW View Name &emsp;: [EDW.CSDI_PDA_MAP_PSTN_ORDR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_PDA_MAP_PSTN_ORDR)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|POSITIONNAME|	VARCHAR(50)	|	PDA Position Name
|POSITIONORDER|	NUMBER	|	Position Order
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last Update


### PDA District Regional division Map
This table manages the PDA district mapping to Regional Division Mapping. This is a static table and will be manually changed once requested by business.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.PDA_MAP_DIST_REGN_DV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/PDA_MAP_DIST_REGN_DV)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.PDA_MAP_DIST_REGN_DV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/PDA_MAP_DIST_REGN_DV)<br/>
EDW View Name &emsp;: [EDW.CSDI_PDA_MAP_DIST_REGN_DV](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_PDA_MAP_DIST_REGN_DV)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|DIST_NAME|	VARCHAR(50)	|	District Name
|REGN_DV|	NUMBER	|	Regional Division Name for PDA
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last Update