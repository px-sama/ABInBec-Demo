---
title: Brand Hierarchy
slug: /Canada-Product/Brand-Hierarchy
tags:
    - Product
    - Brand Hierarchy
    - Canada Masterdata
---

# **Brand Hierarchy**

The tables are related to Brand Hierarchy and stores data related to Brands.

The brand hierarchy is defined to support analysis against the products based on the component brand For non mix products the component brand is the same as the brand, but for mix packs the component brands and their relative volumes are exposed for analysis. This allows for total brand level analysis regardless of whether the brand is sold in a mix pack or not. The bottom level is the component brand which is similar to a component although only the contents of the specific brand is reflected for mix packs. The top level of the hierarchy is the brand family which supports the merge of similar brands together. Where brand families are not defined or assigned, as is typical for competitive brands, the brewer will be exposed as a family. The brand itself is managed in MDM over time. This means that historic states may exist reflecting different attributes (such as the name) or associations (such as price class and family) at different points in time. 

## **Brand Dimension** 

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_BRD_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_BRD_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_BRD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_BRD_HIER)<br/>


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



## **Brand**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRD)<br/>

Brand Table contains all the brands present in our system. It Also contains other Surrogate keys to join different tables like brand Family/ Brewer etc.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRD_SK|NUMBER|Surrogate Key on Brand
|BRD_CODE|VARCHAR(10)|Brand Code
|BRD_NAME|VARCHAR(64)|Brand Name
|BRD_NAME_FR|VARCHAR(64)|Brand French Name
|BRD_ABBR|VARCHAR(10)|Brand Abbreviation
|BRD_TYP_CODE|VARCHAR(1)|Brand Type: D:Dummy, B:Brand, F:Family - Brewer
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|BRWR_ID|VARCHAR(10)|Brewer ID from source
|BRD_FMLY_SK|NUMBER|Foreign key to Brand Family
|PRC_CLS_SK|NUMBER|Foreign key to Price Class as defined at the National Level
|START_DT|DATE|Effective start date
|END_DT|DATE|Effective end date
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Brand Attribute**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRD_ATTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRD_ATTR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRD_ATTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRD_ATTR)<br/>

Brand Attribute table contains all the additional Attribute related to Brands which are not present in Brand Table.



| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRD_CODE|VARCHAR(16777216)|Brand Code Generated in MDM
|BRD_SUB_TST_SEG|VARCHAR(16777216)|Sub Taste segment for a Brand in MDM
|LIQ_BASE_NAME|VARCHAR(16777216)|Base Liquid type for a Brand in MDM
|SUB_BRD_GROUP|VARCHAR(16777216)|Brand Groups to groups multiple sub brands in one like Bud light Core , Bud light seltzer 
|LIQ_STYLE|VARCHAR(16777216)|Liquid Style like IPA, STOUT etc 
|LIQ_SUB_STYLE|VARCHAR(16777216)|Liquid Sub Style like IPA, STOUT etc 
|LIQ_FLAVOR|VARCHAR(16777216)|Flavour for Flavoured liquid 
|BRD_FOCUS_IND|VARCHAR(16777216)|Indicator to show if the Brand is in Focus by Sales Intelligence team 
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Brand Family**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRD_FMLY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRD_FMLY_BRD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRD_FMLY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRD_FMLY)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRD_FMLY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRD_FMLY)<br/>

Brand Family tables contains all the Brand Families in our system. This helps in grouping similar brand in one Family.
Brand Family Brand families as defined in MDM plus brewers reflected as brand family where no family is defined


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRD_FMLY_SK|NUMBER|Surrogate Key on Brand Family
|BRD_FMLY_CODE|VARCHAR(10)|Brand Family Code
|BRD_FMLY_NAME|VARCHAR(64)|Brand Family Name
|BRD_FMLY_NAME_FR|VARCHAR(64)|Brand Family French Name
|BRD_FMLY_ABBR|VARCHAR(10)|Brand Family Abbreviation
|BRD_FMLY_TYP_CODE|VARCHAR(1)|Brand Family Type: D: Dummy, F: Brand Family, B:Brewer
|BRD_FMLY_ID|VARCHAR(4)|Brand Family ID from source
|BRWR_ID|VARCHAR(10)|Brewer ID from source
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Consumer Component Brand**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CNSMR_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CNSMR_CMPNT_BRD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CNSMR_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CNSMR_CMPNT_BRD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CNSMR_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CNSMR_CMPNT_BRD)<br/>

Consumer Component Brand Brand as seen at the container level as seen by a consumer. This is similar to a generic brand and pack assuming no outer package count other than 1, and only looking at the components
of mix packs.. A 4x6 material is reflected as a 6 pack at this level.



| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CNSMR_CMPNT_BRD_SK|NUMBER|Surrogate Key on Consumer Component Brand
|CNSMR_CMPNT_BRD_CODE|VARCHAR(40)|Consumer Component Brand Code
|CNSMR_CMPNT_BRD_NAME|VARCHAR(128)|Consumer Component Brand Name
|CNSMR_CMPNT_BRD_NAME_FR|VARCHAR(128)|Consumer Component Brand French Name
|CNSMR_CMPNT_BRD_TYP_CODE|VARCHAR(1)|Consumer Component Brand Type:  D:Dummy, P: Generic Product, B: Brand, F: Family - Brewer
|GENR_PROD_KEY|VARCHAR(32)|Generic Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|BRWR_ID|VARCHAR(10)|Brewer ID from source
|BRD_SK|NUMBER|Foreign key to Brand
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## Component Brand

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CMPNT_BRD)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CMPNT_BRD)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CMPNT_BRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CMPNT_BRD)<br/>


Component Brand Generic brand and pack at the container level as seen by a consumer, but keeping the out package where it is defined. A 4x6 would remain a 4x6.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CMPNT_BRD_SK|NUMBER|Surrogate Key on Component Brand
|CMPNT_BRD_CODE|VARCHAR(40)|Component Brand Code
|CMPNT_BRD_NAME|VARCHAR(128)|Component Brand Name
|CMPNT_BRD_NAME_FR|VARCHAR(128)|Component Brand French Name
|CMPNT_BRD_TYP_CODE|VARCHAR(1)|Component Brand Type: D:Dummy, P: Generic Product, B: Brand, F: Family - Brewer
|GENR_PROD_KEY|VARCHAR(32)|Generic Product Key from source
|SUB_BRD_ID|VARCHAR(6)|Sub Brand ID from source
|BRWR_ID|VARCHAR(10)|Brewer ID from source
|CNSMR_CMPNT_BRD_SK|NUMBER|Foreign key to Consumer Component Brand
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

## Brand Classification

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_S.REF_VC_BRD_CLASSIFICATION](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_S/table/REF_VC_BRD_CLASSIFICATION)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_VC_BRD_CLASSIFICATION](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_VC_BRD_CLASSIFICATION)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_VC_BRD_CLASSIFICATION](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_VC_BRD_CLASSIFICATION)<br/>

This Table is used for Variable compensation to classify brands in 4 groups Mainstream , Beyond Beer , Craft , High End


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRD_CODE|VARCHAR(10)|Brand Code
|BRD_CLASSIFICATION|VARCHAR(50)|Brand Classification
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Brand Taste Segment

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRD_TST_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRD_TST_SEG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRD_TST_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRD_TST_SEG)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRD_TST_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRD_TST_SEG)<br/>

This Table contains the taste segments associated to each brands.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRD_TST_SEG_SK|NUMBER|Surrogate Key on Brand Taste Segment
|BRD_TST_SEG_CODE|VARCHAR(4)|Brand Taste Segment Code
|BRD_TST_SEG_NAME|VARCHAR(50)|Brand Taste Segment Name
|BRD_TST_SEG_NAME_FR|VARCHAR(50)|Brand Taste Segment French Name
|BRD_TST_SEG_ABBR|VARCHAR(10)|Brand Taste Segment Abbreviation
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
