---
title: Sellable Product Hierarchy
slug: /Canada-Product/Sellable-Product-Hierarchy
tags:
    - Product
    - Sellable Product Hierarchy
    - Canada Masterdata
---

# **Sellable Product Hierarchy**

Sellable product data is defined to support analysis against SKU and SKU definitions.

## **Sellable Product Dimension**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_SLBL_PROD_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SLBL_PROD_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_SLBL_PROD_HIER)<br/>

Sellable Product Dimension contains the data related to SKU details including promos for all the BI Items.


|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|SLBL_PROD_SK	|	NUMBER(38,0)	|	Surrogate Key on Sellable Product
|SLBL_PROD_CODE	|	VARCHAR(32)	|	Sellable Product Code
|SLBL_PROD_NAME	|	VARCHAR(100)	|	Sellable Product Name
|SLBL_PROD_NAME_FR	|	VARCHAR(100)	|	Sellable Product French Name
|SLBL_BASE_PROD_SK	|	NUMBER(38,0)	|	Surrogate Key on Sellable Base Product
|SLBL_BASE_PROD_CODE	|	VARCHAR(32)	|	Sellable Base Product Code
|SLBL_BASE_PROD_NAME	|	VARCHAR(100)	|	Sellable Base Product Name
|SLBL_BASE_PROD_NAME_FR	|	VARCHAR(100)	|	Sellable Base Product French Name
|GENR_PROD_SK	|	NUMBER(38,0)	|	Surrogate Key on Generic Product
|GENR_PROD_CODE	|	VARCHAR(32)	|	Generic Product Code
|GENR_PROD_NAME	|	VARCHAR(80)	|	Generic Product Name
|GENR_PROD_NAME_FR	|	VARCHAR(80)	|	Generic Product French Name
|CNSMR_PROD_SK	|	NUMBER(38,0)	|	Surrogate Key on Consumer Generic Product
|CNSMR_PROD_CODE	|	VARCHAR(32)	|	Generic Consumer Product Code
|CNSMR_PROD_NAME	|	VARCHAR(80)	|	Generic Consumer Product Name
|CNSMR_PROD_NAME_FR	|	VARCHAR(80)	|	Generic Consumer Product French Name
|SLBL_BRD_SK	|	NUMBER(38,0)	|	Surrogate Key on Sellable Brand
|SLBL_BRD_CODE	|	VARCHAR(6)	|	Sellable Brand Code
|SLBL_BRD_NAME	|	VARCHAR(50)	|	Sellable Brand Name
|SLBL_BRD_NAME_FR	|	VARCHAR(50)	|	Sellable Brand French Name
|SLBL_BRD_ABBR	|	VARCHAR(10)	|	Sellable Brand Abbreviation
|MIX_IND_SK	|	NUMBER(38,0)	|	Surrogate Key on Mix Indicator
|MIX_IND_CODE	|	VARCHAR(1)	|	Mix Indicator Code
|MIX_IND_NAME	|	VARCHAR(16) 	|	Mix Indicator Name
|MIX_IND_NAME_FR	|	VARCHAR(16) 	|	Mix Indicator French Name
|PRC_CLS_SK	|	NUMBER(38,0)	|	Surrogate Key on Price Class as defined at the National Level
|PRC_CLS_CODE	|	VARCHAR(10)	|	Price Class Code as defined at the National Level
|PRC_CLS_NAME	|	VARCHAR(50)	|	Price Class Name as defined at the National Level
|PRC_CLS_NAME_FR	|	VARCHAR(50)	|	Price Class French Name as defined at the National Level
|PRC_CLS_ABBR	|	VARCHAR(10)	|	Price Class Abbreviation as defined at the National Level
|PRC_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key on Price Segment as defined at the National Level
|PRC_SEG_CODE	|	VARCHAR(10)	|	Price Segment Code as defined at the National Level
|PRC_SEG_NAME	|	VARCHAR(50)	|	Price Segment Name as defined at the National Level
|PRC_SEG_NAME_FR	|	VARCHAR(50)	|	Price Segment French Name as defined at the National Level
|PRC_SEG_ABBR	|	VARCHAR(10)	|	Price Segment Abbreviation as defined at the National Level
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


##  **Sellable Product**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLBL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLBL_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLBL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLBL_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLBL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLBL_PROD)<br/>

Material or lowest level competitive commercial product defined including promos where they exist.



|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|SLBL_PROD_SK|NUMBER|Surrogate Key on Sellable Product
|SLBL_PROD_CODE|VARCHAR(32)|Sellable Product Code
|SLBL_PROD_NAME|VARCHAR(100)|Sellable Product Name
|SLBL_PROD_NAME_FR|VARCHAR(100)|Sellable Product French Name
|SLBL_PROD_TYP_CODE|VARCHAR(1)|Sellable Product Type: <br/>D: Dummy <br/>P: Commercial Product <br/>B: Brand
|CMRCL_PROD_KEY|VARCHAR(32)|Commercial Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|SLBL_BASE_PROD_SK|NUMBER|Foreign key to Sellable Base Product
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



##  **Sellable Base Product**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLBL_BASE_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLBL_BASE_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLBL_BASE_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLBL_BASE_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLBL_BASE_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLBL_BASE_PROD)<br/>

Material including and BOM differentiations such as packaging or layout with any promos mapped to the base. An example promo mapping to a base would be an NFL promo mapped back to the normal material at the time which the promo replaces. If there is no mapping back to base defined in MDM the promo will appear at this level also.


|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|SLBL_BASE_PROD_SK|NUMBER|Surrogate Key on Sellable Base Product
|SLBL_BASE_PROD_CODE|VARCHAR(32)|Sellable Base Product Code
|SLBL_BASE_PROD_NAME|VARCHAR(100)|Sellable Base Product French Name
|SLBL_BASE_PROD_NAME_FR|VARCHAR(100)|Sellable Base Product Name
|SLBL_BASE_PROD_TYP_CODE|VARCHAR(1)|Sellable Base Product Type: <br/>D: Dummy <br/>P: Commercial Product <br/>B: Brand
|CMRCL_PROD_KEY|VARCHAR(32)|Commercial Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|GENR_PROD_SK|NUMBER|Foreign key to Generic Product
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


##  **Generic Product**


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_GENR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_GENR_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_GENR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_GENR_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_GENR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_GENR_PROD)<br/>

Generic brand and pack but keeping the out package where it is defined. A 4x6 would remain a 4x6.


|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|GENR_PROD_SK|NUMBER|Surrogate Key on Generic Product
|GENR_PROD_CODE|VARCHAR(32)|Generic Product Code
|GENR_PROD_NAME|VARCHAR(80)|Generic Product Name
|GENR_PROD_NAME_FR|VARCHAR(80)|Generic Product French Name
|GENR_PROD_TYP_CODE|VARCHAR(1)|Consumer Generic Product Type: <br/>D: Dummy <br/>P: Commercial Product <br/>B: Brand
|GENR_PROD_KEY|VARCHAR(32)|Generic Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|CNSMR_PROD_SK|NUMBER|Foreign key to Consumer Generic Product
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Consumer Generic Product**	

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CNSMR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CNSMR_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CNSMR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CNSMR_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CNSMR_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CNSMR_PROD)<br/>

Product as ordered by a consumer. This is basically the generic brand and pack assuming no outer package count other than 1. A 4x6 material is reflected as a 6 pack at this level


|**Field Name**	|	**Data Type**	|	**Comment**
-	|	-	|	-
|CNSMR_PROD_SK|NUMBER|Surrogate Key on Consumer Generic Product
|CNSMR_PROD_CODE|VARCHAR(32)|Consumer Generic Product Code
|CNSMR_PROD_NAME|VARCHAR(80)|Consumer Generic Product Name
|CNSMR_PROD_NAME_FR|VARCHAR(80)|Consumer Generic Product French Name
|CNSMR_PROD_TYP_CODE|VARCHAR(1)|Consumer Generic Product Type: <br/>D: Dummy <br/>P: Commercial Product <br/>B: Brand
|GENR_PROD_KEY|VARCHAR(32)|Generic Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|SLBL_BRD_SK|NUMBER|Foreign key to Sellable Brand
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Sellable Brand**	

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLBL_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLBL_BRD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLBL_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLBL_BRD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLBL_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLBL_BRD)<br/>

Brand (sub brand in SAP) as seen by the consumer. This includes mix pack brands such as Double Blue or Team Bud. Also included at this level in the hierarchy is an association to the price class as defined at the national level. Local or SKU level exceptions are not reflected.



|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|SLBL_BRD_SK|NUMBER|Surrogate Key on Sellable Brand
|SLBL_BRD_CODE|VARCHAR(6)|Sellable Brand Code
|SLBL_BRD_NAME|VARCHAR(50)|Sellable Brand Name
|SLBL_BRD_NAME_FR|VARCHAR(50)|Sellable Brand French Name
|SLBL_BRD_ABBR|VARCHAR(10)|Sellable Brand Abbreviation
|MIX_IND_SK|NUMBER|Foreign key to Mix Indicator
|PRC_CLS_SK|NUMBER|Foreign key to Price Class as defined at the National Level
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Mix Indicator**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_MIX_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MIX_IND)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_MIX_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MIX_IND)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_MIX_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MIX_IND)<br/>

Static data of Mix, Non Mix and Unknown to represent whether the brand has mixed product.


|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|MIX_IND_SK|NUMBER|Surrogate Key on Mix Indicator
|MIX_IND_CODE|VARCHAR(1)|Mix Indicator Code
|MIX_IND_NAME|VARCHAR(16)|Mix Indicator Name
|MIX_IND_NAME_FR|VARCHAR(16)|Mix Indicator French Name
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp