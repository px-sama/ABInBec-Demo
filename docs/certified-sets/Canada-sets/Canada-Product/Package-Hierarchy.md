---
title: Package Hierarchy
slug: /Canada-Product/Package-Hierarchy
tags:
    - Product
    - Package Hierarchy
    - Canada Masterdata
---

# **Package Hierarchy**

Package Hierarchy contains the data related to Packaging information of the SKU.

## **Package Dimension**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/table/DIM_PKG_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_PKG_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_PKG_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_PKG_HIER)<br/>

Package Dimension contains all the information related to Packaging information of the product.
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


## **Package**
 
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PKG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PKG)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PKG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PKG)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PKG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PKG)<br/>

Packages are defined to represent the unique combinations of core package attributes on finished goods. The base definition is driven from the SAP product hierarchy and includes container type, size, inner and outer counts, returnability and material. 

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|PKG_SK|NUMBER|Surrogate Key on Package
|PKG_CODE|VARCHAR(6)|Package Code
|PKG_NAME|VARCHAR(50)|Package Name
|PKG_NAME_FR|VARCHAR(50)|Package French Name
|PKG_TYP_CODE|VARCHAR(1)|Package Type: <br/>D: Dummy <br/>P: Package <br/> C: Container Type<br/> L: Package Class
|PKG_CLS_ID|VARCHAR(4)|Package Class ID from source
|CONT_TYP_ID|VARCHAR(4)|Container Type ID from source
|PKG_ID|VARCHAR(4)|Package ID from source
|CONT_TYP_INR_CNT_SK|NUMBER|Foreign key to Container Type and Inner Count
|CONT_SZ_SK|NUMBER|Foreign key to Container Size
|INR_PKG_CONT_CNT_SK|NUMBER|Foreign key to Inner Package Container Count
|OTR_PKG_CONT_CNT_SK|NUMBER|Foreign key to Outer Package Container Count
|CONT_RTRN_SK|NUMBER|Foreign key to Container Returnability
|CONT_MATL_SK|NUMBER|Foreign key to Container Material
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Package Class**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PKG_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PKG_CLS)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PKG_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PKG_CLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PKG_CLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PKG_CLS)<br/>

Package Classes are a short and static list of values managed by commercial to classify different container types into packaged and draught.



| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|PKG_CLS_SK|NUMBER|Surrogate Key on Package Class
|PKG_CLS_CODE|VARCHAR(4)|Package Class Code
|PKG_CLS_NAME|VARCHAR(50)|Package Class Name
|PKG_CLS_NAME_FR|VARCHAR(50)|Package Class French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Container Material**
 
Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CONT_MATL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CONT_MATL)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CONT_MATL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CONT_MATL)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CONT_MATL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CONT_MATL)<br/>


Container Material types are managed in SAP to characterize the actual material used for the container of a finished good. The list is short and static, comprised of values such a glass, aluminum and steel. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CONT_MATL_SK|NUMBER|Surrogate Key on Container Material
|CONT_MATL_CODE|VARCHAR(4)|Container Material Code
|CONT_MATL_NAME|VARCHAR(50)|Container Material Name
|CONT_MATL_NAME_FR|VARCHAR(50)|Container Material French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Container Returnability**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CONT_RTRN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CONT_RTRN)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CONT_RTRN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CONT_RTRN)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CONT_RTRN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CONT_RTRN)<br/>

Container Returnability types are managed in SAP to characterize whether a finished good may be returned for refund. In SAP this typically means to the plant and may imply the product may be refilled. The list is short and static, comprised of one way and returnable although it may be extended as required based on operational requirements.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CONT_RTRN_SK|NUMBER|Surrogate Key on Container Returnability
|CONT_RTRN_CODE|VARCHAR(4)|Container Returnability Code
|CONT_RTRN_NAME|VARCHAR(50)|Container Returnability Name
|CONT_RTRN_NAME_FR|VARCHAR(50)|Container Returnability French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Container Type**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CONT_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CONT_TYP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CONT_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CONT_TYP)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CONT_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CONT_TYP)<br/>

Container types are managed in SAP to characterize the container of a finished good. The list is short and static, comprised of values such as bottle, can and keg. 

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CONT_TYP_SK|NUMBER|Surrogate Key on Container Type
|CONT_TYP_CODE|VARCHAR(6)|Container Type Code
|CONT_TYP_NAME|VARCHAR(50)|Container Type Name
|CONT_TYP_NAME_FR|VARCHAR(50)|Container Type French Name
|CONT_TYP_TYP_CODE|VARCHAR(1)|Container Type Type: <br/>D : Dummy<br/> C : Container Type<br/> P : Package Class
|PKG_CLS_ID|VARCHAR(4)|Package Class ID from source
|CONT_TYP_ID|VARCHAR(4)|Container Type ID from source
|PKG_CLS_SK|NUMBER|Foreign key to Package Class
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Container Size**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CONT_SZ](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CONT_SZ)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CONT_SZ](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CONT_SZ)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CONT_SZ](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CONT_SZ)<br/>

Container sizes are managed in SAP to characterize the actual size of a finished good container. Because the size is set at the product hierarchy level the size may be an average size for odd mix packs. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CONT_SZ_SK|NUMBER|Surrogate Key on Container Size
|CONT_SZ_CODE|VARCHAR(4)|Container Size Code
|CONT_SZ_NAME|VARCHAR(50)|Container Size Name
|CONT_SZ_NAME_FR|VARCHAR(50)|Container Size French Name
|CONT_SZ_HL|NUMBER|Container Size in Hectolitres
|CONT_SZ_LIT|NUMBER|Container Size in Litres
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Container Type and Inner Count**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_CONT_TYP_INR_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CONT_TYP_INR_CNT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_CONT_TYP_INR_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CONT_TYP_INR_CNT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_CONT_TYP_INR_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CONT_TYP_INR_CNT)<br/>

Container Type and Inner Count contains all the combination of Inner package count and container types.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CONT_TYP_INR_CNT_SK|NUMBER|Surrogate Key on Container Type and Inner Count
|CONT_TYP_INR_CNT_NAME|VARCHAR(64)|Container Type and Inner Count Name
|CONT_TYP_INR_CNT_NAME_FR|VARCHAR(64)|Container Type and Inner Count French Name
|CONT_TYP_INR_CNT_TYP_CODE|VARCHAR(1)|Container Type and Inner Count Type: <br/>D : Dummy, <br/>I : Container with Inner Count, <br/>C : Container Type, <br/>P : Package Class
|PKG_CLS_ID|VARCHAR(4)|Package Class ID from source
|CONT_TYP_ID|VARCHAR(4)|Container Type ID from source
|INR_PKG_CONT_CNT_NBR|NUMBER|Inner Package Container Count from source
|CONT_TYP_SK|NUMBER|Foreign key to Container Type
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Inner Package Container Count**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_INR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_INR_PKG_CONT_CNT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_INR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_INR_PKG_CONT_CNT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_INR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_INR_PKG_CONT_CNT)<br/>

Inner Package Container Counts are managed in SAP to reflect the count of containers in a finished good. The inner count applies to the count of the containers as seen by an end consumer. For example, a 6 pack has an inner count of 6 even if it is produced and handled by supply chain as 4 six packs on a tray. In this case the 4 is the outer package count. 

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|INR_PKG_CONT_CNT_SK|NUMBER|Surrogate Key on Inner Package Container Count
|INR_PKG_CONT_CNT_CODE|VARCHAR(4)|Inner Package Container Count Code
|INR_PKG_CONT_CNT_NBR|NUMBER|Inner Package Container Count Number
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Outer Package Type**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_OTR_PKG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_OTR_PKG_TYP)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_OTR_PKG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_OTR_PKG_TYP)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_OTR_PKG_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_OTR_PKG_TYP)<br/>

Outer Package Types are managed in SAP to characterize the exterior packaging of a finished good. The list is short and static, comprised of values such as non-decorated package, shrink wrap or decorated box. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|OTR_PKG_TYP_SK|NUMBER|Surrogate Key on Outer Package Type
|OTR_PKG_TYP_CODE|VARCHAR(4)|Outer Package Type Code
|OTR_PKG_TYP_NAME|VARCHAR(50)|Outer Package Type Name
|OTR_PKG_TYP_NAME_FR|VARCHAR(50)|Outer Package Type French Name
|OTR_PKG_TYP_DECOR_CODE|VARCHAR(1)|Decorated Indicator Code
|OTR_PKG_TYP_DECOR_NAME|VARCHAR(16)|Decorated Indicator Name
|OTR_PKG_TYP_DECOR_NAME_FR|VARCHAR(16)|Decorated Indicator French Name
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## **Outer Package Container count**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_OTR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_OTR_PKG_CONT_CNT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_OTR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_OTR_PKG_CONT_CNT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_OTR_PKG_CONT_CNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_OTR_PKG_CONT_CNT)<br/>

Outer Package Container Counts are managed in SAP to reflect the count of containers in a finished good when they are produced and handled in groups, normally on a tray or wrapped. For example, a 6 pack has an inner count of 6. The outer package count would be 4 if the material is produced and handled by supply chain as 4 six packs on a tray. For most materials the outer count is 1. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|OTR_PKG_CONT_CNT_SK|NUMBER|Surrogate Key on Outer Package Container Count
|OTR_PKG_CONT_CNT_CODE|VARCHAR(4)|Outer Package Container Count Code
|OTR_PKG_CONT_CNT_NBR|NUMBER|Outer Package Container Count Number
|DEL_IND|NUMBER|Deleted indicator
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## **Full Pack Mapping**

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_S.MAP_FULL_PACK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_S/table/MAP_FULL_PACK)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_FULL_PACK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_FULL_PACK)<br/>

Table to map Full pack based on Inner Package Container Count and Container Size to calculate pricing. 


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|INR_PKG_CONT_CNT_NBR|NUMBER|Inner Package Container Count
|CONT_SZ_LIT|NUMBER|Container Size in Litres
|FULL_PACK_NBR|NUMBER|Full Pack Count
|LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
