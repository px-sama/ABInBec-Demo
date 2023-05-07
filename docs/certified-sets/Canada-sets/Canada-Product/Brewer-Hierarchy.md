---
title: Brewer Hierarchy
slug: /Canada-Product/Brewer-Hierarchy
tags:
    - Product
    - Brewer Hierarchy
    - Canada Masterdata
---

# **Brewer Hierarchy**

Brewers are defined to characterize the company that is marketing a specific brand or product. Most brewers are competitive, but brewers may be defined as ABI. Brewers are managed over time including their ownership or control of other brewers. This means that the name may also change at different points in time. Also managed is the country of production normally associated with the brewer. This is the typical country associated with the brewer, and is used as a default value for identifying the country of production for a brand or product.


## **Brewer Dimension**

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


## **Brewer**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRWR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRWR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRWR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRWR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRWR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRWR)<br/>

Brewers are defined to characterize the company that is marketing a specific brand or product. Most brewers are competitive, but brewers may be defined as ABI. Brewers are managed over time including their ownership or control of other brewers. This means that the name may also change at different points in time. Also managed is the country of production normally associated with the brewer. This is the typical country associated with the brewer, and is used as a default value for identifying the country of production for a brand or product.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRWR_SK|NUMBER|Surrogate Key on Brewer
|BRWR_CODE|VARCHAR(10)|Brewer Code
|BRWR_NAME|VARCHAR(50)|Brewer Name
|BRWR_NAME_FR|VARCHAR(50)|Brewer French Name
|BRWR_ABBR|VARCHAR(10)|Brewer Abbreviation
|BRWR_PRNT_SK|NUMBER|Surrogate key to Brewer Parent
|START_DT|DATE|Effective start date
|END_DT|DATE|Effective end date
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Brewer Parent**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRWR_PRNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRWR_PRNT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRWR_PRNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRWR_PRNT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRWR_PRNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRWR_PRNT)<br/>

Brewers that are the direct owner of a brewer at the bottom level. Where a brewer at the bottom level has no owner it is carried forward as its own parent.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRWR_PRNT_SK|NUMBER|Surrogate Key on Brewer Parent
|BRWR_PRNT_CODE|VARCHAR(10)|Brewer Parent Code
|BRWR_PRNT_NAME|VARCHAR(50)|Brewer Parent Name
|BRWR_PRNT_NAME_FR|VARCHAR(50)|Brewer Parent French Name
|BRWR_PRNT_ABBR|VARCHAR(10)|Brewer Parent Abbreviation
|BRWR_TYP_SK|NUMBER|Foreign key to Brewer Type
|START_DT|DATE|Effective start date
|END_DT|DATE|Effective end date
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Brewer Type**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_BRWR_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_BRWR_TYP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_BRWR_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_BRWR_TYP)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_BRWR_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BRWR_TYP)<br/>

Static data of Labatt, Competitive and Industry. Note that some data may not be associated with either Labatt or Competitive but may reflect industry totals.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BRWR_TYP_SK|NUMBER|Surrogate Key on Brewer Type
|BRWR_TYP_CODE|VARCHAR(1)|Brewer Type Code
|BRWR_TYP_NAME|VARCHAR(16)|Brewer Type Name
|BRWR_TYP_NAME_FR|VARCHAR(16)|Brewer Type French Name
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
