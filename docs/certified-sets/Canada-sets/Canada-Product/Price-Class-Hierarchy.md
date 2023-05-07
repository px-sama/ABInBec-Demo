---
title: Price Class
slug: /Canada-Product/Price-Class-Hierarchy
tags:
    - Product
    - Price Class Hierarchy
    - Canada Masterdata
---

# **Price Class Hierarchy**
Price Classes are groupings of products managed by commercial to group and classify items based on their perceived value. These are used to allow for segment and competitive landscape analysis within the market. Although a grouping of products, Price Classes are normally assigned at the brand level and applied to all products defined for the brand.


## **Price Class Dimension**
 
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_PRC_CLS_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_PRC_CLS_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_PRC_CLS_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_PRC_CLS_HIER)<br/>

Price Class Dimension contains the data related to price class for all the BI items. This view is used to define the Pricing segmentation of the product for both the Price Class and Price Segment.


|**Field Name**	|	**Data Type**	|	**Comment**
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


## **Price Class**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PRC_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PRC_CLS)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PRC_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRC_CLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PRC_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRC_CLS)<br/>

Price Classes are groupings of products managed by commercial to group and classify items based on their perceived value. These are used to allow for segment and competitive landscape analysis within the market. Although a grouping of products, Price Classes are normally assigned at the brand level and applied to all products defined for the brand.


|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|PRC_CLS_SK|NUMBER|Surrogate Key on Price Class
|PRC_CLS_CODE|VARCHAR(10)|Price Class Code
|PRC_CLS_NAME|VARCHAR(50)|Price Class Name
|PRC_CLS_NAME_FR|VARCHAR(50)|Price Class French Name
|PRC_CLS_ABBR|VARCHAR(10)|Price Class Abbreviation
|PRC_SEG_SK|NUMBER|Foreign key to Price Segment
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Price Segment**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PRC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PRC_SEG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PRC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRC_SEG)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PRC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRC_SEG)<br/>


Price Segments are groupings of Price Classes managed by commercial to allow for higher level analysis. Price classes are used to analyze groupings of brands based on their perceived value within the market and evaluate the competitive landscape.

|**Field Name**	|	**Data Type**	|	**Comment**
|-	|	-	|	-
|PRC_SEG_SK|NUMBER|Surrogate Key on Price Segment
|PRC_SEG_CODE|VARCHAR(10)|Price Segment Code
|PRC_SEG_NAME|VARCHAR(50)|Price Segment Name
|PRC_SEG_NAME_FR|VARCHAR(50)|Price Segment French Name
|PRC_SEG_ABBR|VARCHAR(10)|Price Segment Abbreviation
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

