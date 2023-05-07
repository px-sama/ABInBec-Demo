---
title: Canada Product
slug: /Canada-Product
tags:
    - Product
    - Canada Masterdata 
---
# **Canada Product**  

This data set is comprised of views that house the latest Canada Master data for Products, which is maintained in Kalido MDM. These views are used to join with all the fact tables to map products to their identifying attributes and segmentations.

  


### **BI ITEM**
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BI_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BI_ITEM)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BI_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BI_ITEM)<br/>
EDW View Name &emsp;:  [EDW.CSDI_REF_BI_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BI_ITEM)<br/>

This is the base view for the Product dimension and contains a record of all products stored in MDM - both Labatt and competitive. Each time a new product is either produced or reported by a 3rd party source it will receive a record in the this view to be tracked across the different fact tables.
-	`Commercial <P>roduct`
-	`<L>ocal Product`
-	`<B>rand Analytical Item`
-	`<N>on Brand Analytical Item`
-	`<M>aterial`
-	`Brand <C>omponent`
  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BI\_ITEM\_SK | NUMBER(38,0) | Surrogate Key on BI Item |
| BI\_ITEM\_NAME | VARCHAR(256) | BI Item Name |
| BI\_ITEM\_TYP_CODE | VARCHAR(1) | BI Item Type:<br/> &lt;D&gt;ummy, <br/>Commercial &lt;P&gt;roduct, <br/>&lt;L&gt;ocal Product, <br/>&lt;B&gt;rand Analytical Item, <br/>&lt;N&gt;on Brand Analytical Item, <br/>&lt;M&gt;aterial, <br/>Brand &lt;C&gt;omponent |
| BI\_ITEM\_IND\_TYP\_CODE | VARCHAR(1) | Industry Type: <br/>&lt;I&gt;ndustry, <br/>&lt;C&gt;ompetitive, <br/>&lt;L&gt;abatt |
| BI\_ITEM\_UNIT_CONV | NUMBER(9,6) | Conversion rate from HL to units |
| BI\_ITEM\_CNSMR\_UNIT\_CONV | NUMBER(9,6) | Conversion rate from HL to units at the consumer level |
| CMRCL\_PROD\_KEY | VARCHAR(30) | Commercial Product Key from source |
| LCL\_CMRCL\_PROD_ID | VARCHAR(6) | Local Commercial Product ID from source |
| ANAL\_ITEM\_ID | VARCHAR(6) | Analytical Item ID from source |
| MATL_NBR | VARCHAR(18) | Material Number from source |
| MATL_NAME | VARCHAR(40) | Material Name from source |
| SUB\_BRD\_ID | VARCHAR(6) | Source Sub Brand ID for mix pack components |
| CONT\_SZ\_ID | VARCHAR(4) | Source Container Size ID for mix pack components |
| CONT\_TYP\_ID | VARCHAR(4) | Source Container Type ID for mix pack components |
| CMRCL\_PROD\_CMPNT_CNT | NUMBER(38,0) | Source count of components for mix pack components |
| MIX\_BI\_ITEM_SK | NUMBER(38,0) | Surrogate Key on BI Item for the mix pack parent of a component |
| BRWR_SK | NUMBER(38,0) | Brewer Surrogate Key |
| SLBL\_PROD\_SK | NUMBER(38,0) | Sellable Product Surrogate Key |
| CMPNT\_BRD\_SK | NUMBER(38,0) | Component Brand Surrogate Key |
| PKG_SK | NUMBER(38,0) | Package Surrogate Key |
| BRD\_TST\_SEG_SK | NUMBER(38,0) | Brand Taste Segment Surrogate Key |
| CNTRY\_PROD\_SK | NUMBER(38,0) | Country of Production Surrogate Key |
| PRC\_CLS\_SK | NUMBER(38,0) | Price Class Surrogate Key |
| ALCHL\_CNTN\_SK | NUMBER(38,0) | Alcohol Content Surrogate Key |
| LIQ\_CLS\_SK | NUMBER(38,0) | Liquid Class Surrogate Key |
| OTR\_PKG\_TYP_SK | NUMBER(38,0) | Package Type Surrogate Key |
| PROD\_REFILL\_IND_SK | NUMBER(38,0) | Refillable Indicator Surrogate Key |
| BEV\_TYP\_SK | NUMBER(38,0) | Beverage Type Surrogate Key |
| MATL\_TYP\_SK | NUMBER(38,0) | Material Type Surrogate Key |
| MATL\_STAT\_SK | NUMBER(38,0) | Material Status Surrogate Key |
| START_DT | DATE | Effective start date |
| END_DT | DATE | Effective end date |
| DEL_IND | NUMBER(38,0) | Deleted indicator |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |
| BI\_ITEM\_ALCHL_PCT | NUMBER(5,2) | BI Item Alcohol Percentage |

  

  

  

### **Brand Dimension Hierarchy** 

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_BRD_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_BRD_HIER)<br/>
EDW View Name &emsp;:  [EDW.CSDI_DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_BRD_HIER)<br/>


Brand Dimension Table/Views contains all the attributes related to Brand Hierarchy for each of the Product (BI ITEM).This view contains the Brand hierarchy information for each Product including the Brand Family, Price Class and Price Segment assignments.



| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|CMPNT_BRD_SK	|	NUMBER(38,0)	|	Surrogate Key on Component Brand
|CMPNT_BRD_CODE	|	VARCHAR(40)	|	Component Brand Code
|CMPNT_BRD_NAME	|	VARCHAR(128)	|	Component Brand Name
|CMPNT_BRD_NAME_FR	|	VARCHAR(128)	|	Component Brand French Name
|CNSMR_CMPNT_BRD_SK	|	NUMBER(38,0)	|	Surrogate Key on Consumer Component Brand
|CNSMR_CMPNT_BRD_CODE	|	VARCHAR(40)	|	Consumer Component Brand Code
|CNSMR_CMPNT_BRD_NAME	|	VARCHAR(128)	|	Consumer Component Brand Name
|CNSMR_CMPNT_BRD_NAME_FR	|	VARCHAR(128)	|	Consumer Component Brand French Name
|BRD_SK	|	NUMBER(38,0)	|	Surrogate Key on Brand
|BRD_CODE	|	VARCHAR(10)	|	Brand Code
|BRD_NAME	|	VARCHAR(64)	|	Brand Name
|BRD_NAME_FR	|	VARCHAR(64)	|	Brand French Name
|BRD_ABBR	|	VARCHAR(10)	|	Brand Abbreviation
|BRD_FMLY_SK	|	NUMBER(38,0)	|	Surrogate Key on Brand Family
|BRD_FMLY_CODE	|	VARCHAR(10)	|	Brand Family Code
|BRD_FMLY_NAME	|	VARCHAR(64)	|	Brand Family Name
|BRD_FMLY_NAME_FR	|	VARCHAR(64)	|	Brand Family French Name
|BRD_FMLY_ABBR	|	VARCHAR(10)	|	Brand Family Abbreviation
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


  

  

  

### **Brewer Dimension Hierarchy**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_BRWR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_BRWR_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_BRWR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_BRWR_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_BRWR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_BRWR_HIER)<br/>


Brewer Dimension contains all the attributes related to Brewer Hierarchy.
This view contains the hierarchy of Product to Brewer within the MDM/CSDI environment. Each product is assigned a Brewer which in turn is assigned a Parent Brewer to be used for reference for any product level analysis.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|BRWR_SK	        |	NUMBER(38,0)	|	Surrogate Key on Brewer
|BRWR_CODE	|	VARCHAR(10)	|	Brewer Code
|BRWR_NAME	|	VARCHAR(50)	|	Brewer Name
|BRWR_NAME_FR	|	VARCHAR(50)	|	Brewer French Name
|BRWR_ABBR	|	VARCHAR(10)	|	Brewer Abbreviation
|BRWR_PRNT_SK	|	NUMBER(38,0)	|	Surrogate Key on Brewer Parent
|BRWR_PRNT_CODE	|	VARCHAR(10)	|	Brewer Parent Code
|BRWR_PRNT_NAME	|	VARCHAR(50)	|	Brewer Parent Name
|BRWR_PRNT_NAME_FR	|	VARCHAR(50)	|	Brewer Parent French Name
|BRWR_PRNT_ABBR	|	VARCHAR(10)	|	Brewer Parent Abbreviation
|BRWR_TYP_SK	|	NUMBER(38,0)	|	Surrogate Key on Brewer Type
|BRWR_TYP_CODE	|	VARCHAR(1) 	|	Brewer Type Code
|BRWR_TYP_NAME	|	VARCHAR(16) 	|	Brewer Type Name
|BRWR_TYP_NAME_FR	|	VARCHAR(16) 	|	Brewer Type French Name
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update

  

  

  

### **Liquid Class Dimension Hierarchy**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_LIQ_CLS_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_LIQ_CLS_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_LIQ_CLS_HIER)<br/>

Liquid Class Hierarchy contains all the liquid class attributes which are used for identifying different types of Liquids.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|LIQ_CLS_SK	|	NUMBER(38,0)	|	Surrogate Key on Liquid Class
|LIQ_CLS_CODE	|	VARCHAR(6)	|	Liquid Class Code
|LIQ_CLS_NAME	|	VARCHAR(64)	|	Liquid Class Name
|LIQ_CLS_NAME_FR	|	VARCHAR(64)	|	Liquid Class French Name
|LIQ_CLS_ABBR	|	VARCHAR(10)	|	Liquid Class Abbreviation
|LIQ_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key on Liquid Segment
|LIQ_SEG_CODE	|	VARCHAR(4)	|	Liquid Segment Code
|LIQ_SEG_NAME	|	VARCHAR(50)	|	Liquid Segment Name
|LIQ_SEG_NAME_FR	|	VARCHAR(50)	|	Liquid Segment French Name
|LIQ_SEG_ABBR	|	VARCHAR(10)	|	Liquid Segment Abbreviation
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update

  

### **Package Dimension Hierarchy**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_PKG_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_PKG_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_PKG_HIER)<br/>

Package Hierarchy contains all the information related to Packaging information of the product.
This view is used to define the all attributes and segmentation of the packaging of the product including the Inner/Outer Packing, Container Size/Type, Packaging Material and all associated groupings.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|PKG_SK	|	NUMBER(38,0)	|	Surrogate Key on Package
|PKG_CODE	|	VARCHAR(6)	|	Package Code
|PKG_NAME	|	VARCHAR(50)	|	Package Name
|PKG_NAME_FR	|	VARCHAR(50)	|	Package French Name
|CONT_TYP_INR_CNT_SK	|	NUMBER(38,0)	|	Surrogate Key on Container Type and Inner Count
|CONT_TYP_INR_CNT_NAME	|	VARCHAR(64)	|	Container Type and Inner Count Name
|CONT_TYP_INR_CNT_NAME_FR	|	VARCHAR(64)	|	Container Type and Inner Count French Name
|CONT_TYP_SK	|	NUMBER(38,0)	|	Surrogate Key on Container Type
|CONT_TYP_CODE	|	VARCHAR(6)	|	Container Type Code
|CONT_TYP_NAME	|	VARCHAR(50)	|	Container Type Name
|CONT_TYP_NAME_FR	|	VARCHAR(50)	|	Container Type French Name
|PKG_CLS_SK	|	NUMBER(38,0)	|	Surrogate Key on Package Class
|PKG_CLS_CODE	|	VARCHAR(4) 	|	Package Class Code
|PKG_CLS_NAME	|	VARCHAR(50) 	|	Package Class Name
|PKG_CLS_NAME_FR	|	VARCHAR(50) 	|	Package Class French Name
|CONT_SZ_SK	|	NUMBER(38,0)	|	Surrogate Key on Container Size
|CONT_SZ_CODE	|	VARCHAR(4) 	|	Container Size Code
|CONT_SZ_NAME	|	VARCHAR(50) 	|	Container Size Name
|CONT_SZ_NAME_FR	|	VARCHAR(50) 	|	Container Size French Name
|CONT_SZ_HL	|	NUMBER(9,6)	|	Container Size in Hectolitres
|CONT_SZ_LIT	|	NUMBER(9,6)	|	Container Size in Litres
|INR_PKG_CONT_CNT_SK	|	NUMBER(38,0)	|	Surrogate Key on Inner Package Container Count
|INR_PKG_CONT_CNT_CODE	|	VARCHAR(4) 	|	Inner Package Container Count Code
|INR_PKG_CONT_CNT_NBR	|	NUMBER(38,0)	|	Inner Package Container Count Number
|OTR_PKG_CONT_CNT_SK	|	NUMBER(38,0)	|	Surrogate Key on Outer Package Container Count
|OTR_PKG_CONT_CNT_CODE	|	VARCHAR(4) 	|	Outer Package Container Count Code
|OTR_PKG_CONT_CNT_NBR	|	NUMBER(38,0)	|	Outer Package Container Count Number
|CONT_RTRN_SK	|	NUMBER(38,0)	|	Surrogate Key on Container Returnability
|CONT_RTRN_CODE	|	VARCHAR(4) 	|	Container Returnability Code
|CONT_RTRN_NAME	|	VARCHAR(50) 	|	Container Returnability Name
|CONT_RTRN_NAME_FR	|	VARCHAR(50)	|	Container Returnability French Name
|CONT_MATL_SK	|	NUMBER(38,0)	|	Surrogate Key on Container Material
|CONT_MATL_CODE	|	VARCHAR(4) 	|	Container Material Code
|CONT_MATL_NAME	|	VARCHAR(50) 	|	Container Material Name
|CONT_MATL_NAME_FR	|	VARCHAR(50) 	|	Container Material French Name
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update

  

### **Price Class Dimention Hierarchy**
 
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_PRC_CLS_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_PRC_CLS_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_PRC_CLS_HIER)<br/>

Price Class Dimention contains the data related to price class for all the BI items. This view is used to define the Pricing segmentation of the product for both the Price Class and Price Segment.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|BI_ITEM_NAME	|	VARCHAR(256)	|	BI Item Name
|PRC_CLS_SK	|	NUMBER(38,0)	|	Surrogate Key on Price Class
|PRC_CLS_CODE	|	VARCHAR(10)	|	Price Class Code
|PRC_CLS_NAME	|	VARCHAR(50)	|	Price Class Name
|PRC_CLS_NAME_FR	|	VARCHAR(50)	|	Price Class French Name
|PRC_CLS_ABBR	|	VARCHAR(10)	|	Price Class Abbreviation
|PRC_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key on Price Segment
|PRC_SEG_CODE	|	VARCHAR(10)	|	Price Segment Code
|PRC_SEG_NAME	|	VARCHAR(50)	|	Price Segment Name
|PRC_SEG_NAME_FR	|	VARCHAR(50)	|	Price Segment French Name
|PRC_SEG_ABBR	|	VARCHAR(10)	|	Price Segment Abbreviation
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update
  

### **Sellable Product Hierarchy**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_SLBL_PROD_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SLBL_PROD_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_SLBL_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_SLBL_PROD_HIER)<br/>

Sellable Product Hierarchy contains the data related to SKU details including promos for all the BI Items.

| **Field Name** | **Data Type** | **Comment** |
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

  

### **External Product Mapping**
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_EXT_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_EXT_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_EXT_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_EXT_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_EXT_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_EXT_PROD)<br/>


This tables contains all the mappings from external product codes from various sources like BDL,TBS,LCBO etc  to out Commercial product.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|XREF_OWNR_SK	|	NUMBER(38,0)	|	Surrogate Key on Cross Reference Owner( owner details in Table REF_XREF_OWNR)
|EXT_PROD_XREF_CODE_1	|	VARCHAR(20)	|	Product Cross Reference Code 1
|EXT_PROD_XREF_CODE_2	|	VARCHAR(20)	|	Product Cross Reference Code 2
|EXT_PROD_XREF_CODE_3	|	VARCHAR(20)	|	Product Cross Reference Code 3
|EXT_PROD_XREF_CONV_RT	|	NUMBER(14,6)	|	Product Cross Reference Factor
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on BI Item
|START_DT	|	DATE	|	External Product to BI Item Association Start Date
|END_DT	|	DATE	|	External Product to BI Item Association End Date
|MAP_IND	|	NUMBER(38,0)	|	Mapping Indicator
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update/load

  

  
  

### **Local Commercial Product Mapping**
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_LCL_CMRCL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_LCL_CMRCL_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_LCL_CMRCL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_LCL_CMRCL_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_LCL_CMRCL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_LCL_CMRCL_PROD)<br/>

This tables contains all the mappings of Commercial product to Local Commercial product based on Customer Sales Group.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on original BI Item
|CUST_SLS_GRP_SK	|	NUMBER(38,0)	|	Surrogate Key on Customer Sales Group
|LCL_BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on final BI Item as defined locally for the Customer Sales Group
|MAP_IND	|	NUMBER(38,0)	|	Indicator reflecting if the mapping value should be used or not
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update
|ORGNC_BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on final BI Item as defined for Organic Growth Reporting and Analysis
  

  
  
  
### **Production Country**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CNTRY_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CNTRY_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CNTRY_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CNTRY_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CNTRY_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CNTRY_PROD)<br/>


This view provides the definition of Domestic/Import and information about the Country where the product was produced. 


 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CNTRY\_PROD\_SK | NUMBER(38,0) | Surrogate Key on Country of Production |
| CNTRY\_PROD\_CODE | VARCHAR(4) | Country of Production Code |
| CNTRY\_PROD\_ISO_CODE | VARCHAR(4) | Country of Production ISO Code |
| CNTRY\_PROD\_NAME | VARCHAR(50) | Country of Production Name |
| CNTRY\_PROD\_IMP_CODE | VARCHAR(1) | Import / Domestic Indicator Code: &lt;D&gt;omestic, &lt;I&gt;mport, &lt;U&gt;nknown |
| CNTRY\_PROD\_IMP_NAME | VARCHAR(10) | Import / Domestic Indicator Name |
| CNTRY\_PROD\_IMP\_NAME\_FR | VARCHAR(10) | Import / Domestic Indicator French Name |
| DEL_IND | NUMBER(38,0) | Deleted indicator |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  
### **Production Country Category**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CNTRY_PROD_CTGY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CNTRY_PROD_CTGY)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CNTRY_PROD_CTGY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CNTRY_PROD_CTGY)<br/>

This tables contains list of all the country along with categories to identify what type of tax is applied on them.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CNTRY_PROD_CTGRY_NAME|VARCHAR(64)|Production Country Category 
|CNTRY_PROD_SK|NUMBER|Surrogate Key on Production Country
|CNTRY_PROD_ISO_CODE|VARCHAR(64)|Production Country ISO CODE
|CNTRY_PROD_NAME|VARCHAR(64)|Production Country ISO CODE
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp 
  
  
### **Alcohol Content**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_ALCHL_CNTN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_ALCHL_CNTN)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_ALCHL_CNTN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_ALCHL_CNTN)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_ALCHL_CNTN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_ALCHL_CNTN)<br/>


This tables contains list of all the alcohol content group with range of alcohol percentages for each group. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|ALCHL_CNTN_SK|NUMBER|Surrogate Key on Alcohol Content
|ALCHL_CNTN_CODE|VARCHAR(4)|Alcohol Content Code
|ALCHL_CNTN_NAME|VARCHAR(50)|Alcohol Content Name
|ALCHL_CNTN_NAME_FR|VARCHAR(50)|Alcohol Content French Name
|ALCHL_CNTN_ABBR|VARCHAR(10)|Alcohol Content Abbreviation
|ALCHL_CNTN_PCT_MIN|NUMBER|Minimum Alcohol Content Percentage for the range
|ALCHL_CNTN_PCT_MAX|NUMBER|Maximum Alcohol Content Percentage for the range (exclusive of the value itself
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp 


### **Material Type**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_MATL_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MATL_TYP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_MATL_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MATL_TYP)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_MATL_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MATL_TYP)<br/>


This tables contains list of all type of Materials.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|MATL_TYP_SK|NUMBER|Surrogate Key on Material Type
|MATL_TYP_CODE|VARCHAR(4)|Material Type Code
|MATL_TYP_NAME|VARCHAR(50)|Material Type Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### **Material Status**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_MATL_STAT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_MATL_STAT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_MATL_STAT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MATL_STAT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_MATL_STAT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MATL_STAT)<br/>


This tables contains list of different statuses of Material defined in SAP.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|MATL_STAT_SK|NUMBER|Surrogate Key on Material Status
|MATL_STAT_CODE|VARCHAR(10)|Material Status Code
|MATL_STAT_NAME|VARCHAR(50)|Material Status Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### **Beverage Type**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BEV_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BEV_TYP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BEV_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BEV_TYP)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BEV_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BEV_TYP)<br/>


This tables contains list of different type of Beverages defined in SAP.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BEV_TYP_SK|NUMBER|Surrogate Key on Beverage Type
|BEV_TYP_CODE|VARCHAR(2)|Beverage Type Code
|BEV_TYP_NAME|VARCHAR(50)|Beverage Type Name
|BEV_TYP_NAME_FR|VARCHAR(50)|Beverage Type French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



### **Refillable Indicator**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PROD_REFILL_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PROD_REFILL_IND)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PROD_REFILL_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PROD_REFILL_IND)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PROD_REFILL_IND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PROD_REFILL_IND)<br/>


This tables contains indicator to represent if the product id refillable or not.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|PROD_REFILL_IND_SK|NUMBER|Surrogate Key on Refillable Indicator
|PROD_REFILL_IND_CODE|VARCHAR(1)|Refillable Indicator Code
|PROD_REFILL_IND_NAME|VARCHAR(50)|Refillable Indicator Name
|PROD_REFILL_IND_NAME_FR|VARCHAR(50)|Refillable Indicator French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

### **MDM Virtual Product Mapping**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_MDM_VRTL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_MDM_VRTL_PROD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_MDM_VRTL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_MDM_VRTL_PROD)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_MDM_VRTL_PROD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_MDM_VRTL_PROD)<br/>

This tables contains all the mappings of Base BI Item to BI Item that reflects the base material if the original was an MDM virtual

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK	|	NUMBER(38,0)	|	Surrogate Key on original BI Item
|MATL_BI_ITEM_SK|	NUMBER(38,0)	|	Surrogate Key on BI Item that reflects the base material if the original was an MDM virtual
|MAP_IND	|	NUMBER(38,0)	|	Indicator reflecting if the mapping value should be used or not
|LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update

Published on 8/16/22 by Manish Kumar