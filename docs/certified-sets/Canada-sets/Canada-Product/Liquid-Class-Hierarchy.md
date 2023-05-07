---
title: Liquid Class Hierarchy
slug: /Canada-Product/Liquid-Class-Hierarchy
tags:
    - Product
    - Liquid Class Hierarchy
    - Canada Masterdata
---

#  **Liquid Class Hierarchy**

## **Liquid Class Dimension**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_LIQ_CLS_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_LIQ_CLS_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_LIQ_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_LIQ_CLS_HIER)<br/>

Liquid Class Dimension contains all the liquid class attributes which are used for identifying different types of Liquids.


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





## **Liquid Class**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_LIQ_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_LIQ_CLS)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_LIQ_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_LIQ_CLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_LIQ_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_LIQ_CLS)<br/>

Liquid classes are a short and generally static list of values managed by commercial to classify different brands based on the base liquid content. The classification is at a high level but defined within a segment. Classes will include more detail that a segment. For example, while a segment may be spirit, the class may separate spirits into spirits versus spirit based flavored beverages.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|LIQ_CLS_SK|NUMBER|Surrogate Key on Liquid Class
|LIQ_CLS_CODE|VARCHAR(6)|Liquid Class Code
|LIQ_CLS_NAME|VARCHAR(64)|Liquid Class Name
|LIQ_CLS_NAME_FR|VARCHAR(65)|Liquid Class French Name
|LIQ_CLS_ABBR|VARCHAR(10)|Liquid Class Abbreviation
|LIQ_CLS_TYP_CODE|VARCHAR(1)|Liquid Class Type: D: Dummy, C: Liquid  Class, S :Liquid Segment
|LIQ_SEG_ID|VARCHAR(4)|Liquid Segment ID from source
|LIQ_CLS_ID|VARCHAR(4)|Liquid Class ID from source
|LIQ_SEG_SK|NUMBER|Foreign key to Liquid Segment
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Liquid Segment**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_LIQ_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_LIQ_SEG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_LIQ_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_LIQ_SEG)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_LIQ_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_LIQ_SEG)<br/>

Liquid segments are a short and generally static list of values managed by commercial to classify different brand based on the base liquid content. The classification is at a very high level - for example beer, wine and spirit.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|LIQ_SEG_SK|NUMBER|Surrogate Key on Liquid Segment
|LIQ_SEG_CODE|VARCHAR(4)|Liquid Segment Code
|LIQ_SEG_NAME|VARCHAR(50)|Liquid Segment Name
|LIQ_SEG_NAME_FR|VARCHAR(50)|Liquid Segment French Name
|LIQ_SEG_ABBR|VARCHAR(10)|Liquid Segment Abbreviation
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

