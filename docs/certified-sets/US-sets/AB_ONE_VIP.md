---
title: AB ONE VIP Share
tags:
    - Distribution 
    - Sales
    - Transportation
description: AB ONE VIP route accounting system (RAS) data
---

# VIP Share Data  

This data set is comprised of data shared directly with AB from the Anheuser-Busch Sales & Distribution Company (ABSD) route accounting system (RAS) at VIP. Included in this data set is the accounts, products, routes, employees and invoice level sales information for all ABSD warehouses dating back to 2017. The data is fully refreshed every morning at 8:30AM CST from a database shared by VIP. Data in these views is not limited to AB-only products and will include information about any non-AB products if they are sold by any ABSD location. 

  

### [**EDW.ABSD\_SALES\_COMPANY_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_SALES_COMPANY_DIMENSION) 
This view contains the definition and mapping of the Source Codes (1st tier) and the ABSD Company/Warehouse locations (2nd tier) within the hierarchy of the ABSD RAS environment. At the highest tier is the Source Codes which typically represent the “company” (ex: AB Sales of Oklahoma). Each Source Code then has one or more Sales Company Codes nested under it that represent the individual ABSD warehouses.    


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SALES\_COMPANY\_CODE | VARCHAR | Wholesaler assigned unique code an ABSD Company/Warehouse |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| SALES\_COMPANY\_NAME | VARCHAR | Name of ABSD Company/Warehouse |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timestamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timestamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

### [**EDW.ABSD\_WAREHOUSE\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_WAREHOUSE_DIMENSION)  
This view contains the definition and mapping of the Source Codes (1st tier) and the ABSD Warehouse locations (2nd tier) within the hierarchy of the ABSD RAS environment. At the highest tier is the Source Codes which typically represent the “company” (ex: AB Sales of Oklahoma). Each Source Code then has one or more Warehouse Codes nested under it that represent the individual ABSD warehouses.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WAREHOUSE_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD Entity in the RAS hierarchy |
| WAREHOUSE_NAME | VARCHAR | Name of the ABSD Warehouse associted with the Warehouse Code |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

### [**EDW.ABSD\_ACCOUNT\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_ACCOUNT_DIMENSION)  
This view contains the master list of accounts by warehouse. Account data includes primarily retail outlets (grocery stores, restaurants) but may include other companies such as distributors, suppliers or employees. Other information in this view include the assigned Class of Trade, Seasonal Open/Close date (when applicable) and assigned Route information. The combination of SOURCE\_CODE and SALES\_COMPANY_CODE should be used to retrieve accounts for a specific ABSD warehouse location.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| ACCOUNT_CODE | VARCHAR | Wholesaler Assigned Customer Number for an Account as it pertains to the SOURCE_CODE value |
| VIP\_OUTLET\_ID | NUMBER(38,0) | VIPID matched to Account Code value (can be joined back to EDW.VIP_OUTLT) |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| WAREHOUSE_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse |
| SALES\_COMPANY\_CODE | VARCHAR | Wholesaler assigned unique code an ABSD Company/Warehouse |
| ACCOUNT\_TYPE\_CODE | VARCHAR | Wholesaler assigned unique code for ACCOUNT_TYPE |
| ACCOUNT_TYPE | VARCHAR | Name associated with ACCOUNT\_TYPE\_CODE |
| DBA | VARCHAR | Account “Doing Business As” name or “Banner” name |
| LICENSEE_NAME | VARCHAR | Licensee or owner name. |
| STREET\_ADDRESS\_1 | VARCHAR | Account street address (Line 1 |
| STREET\_ADDRESS\_2 | VARCHAR | Account street address (Line 2 |
| CITY | VARCHAR | Name of the city |
| STATE_ABBR | VARCHAR | Account state |
| POSTAL_CODE | VARCHAR | Account postal code |
| COUNTRY_CODE | VARCHAR | Wholesaler assigned unique code for country |
| COUNTRY_NAME | VARCHAR | Name associated with COUNTRY_CODE |
| ACCOUNT\_OPEN\_DATE | DATE | Date this account opened for the first time |
| ACCOUNT\_CLOSE\_DATE | DATE | Date this account closed for good |
| ACCOUNT_STATUS | VARCHAR | VIP-defined identifier to indicate current account status (A = Active, I = Inactive, O =Out of Business) |
| SEASONAL | VARCHAR | Indicator that this account opens and closes at different times of the year |
| SEASONAL\_OPEN\_MONTH | NUMBER(38,0) | Month that this account typically opens for the season (Valid values include 0 - 12) |
| SEASONAL\_CLOSE\_MONTH | NUMBER(38,0) | Month that this account typically closes for the season (Valid values include 0 - 12) |
| STORE_NUM | VARCHAR | Retailer-assigned identifier for this store location |
| CHAIN_CODE | VARCHAR | Wholesaler assigned identifier for this chain |
| CHAIN | VARCHAR | Name associated with CHAIN_CODE |
| CHAIN_FLAG | VARCHAR | VIP-assigned identifier to indicate whether this account is part of a chain or not |
| PREMISE_CODE | VARCHAR | Wholesaler assigned identifier to indicate what premise type this account belongs to |
| PREMISE | VARCHAR | Name associated with PREMISE_CODE |
| COT_CODE | VARCHAR | Wholesler assigned Class of Trade Code |
| COT | VARCHAR | Class of Trade Description |
| SUB\_COT\_CODE | VARCHAR | Wholesaler assigned Sub Class of Trade Code |
| SUB_COT | VARCHAR | Sub Class of Trade description |
| SELLABLE\_PACKAGE\_TYPE_CODE | VARCHAR | internal code that identifies the package types allowed to be sold in account |
| SELLABLE\_PACKAGE\_TYPE | VARCHAR | Name associated with SELLABLE\_PACKAGE\_TYPE_CODE |
| PLANOGRAM_FLAG | VARCHAR | Indicator that this account is Planogrammable (Ex. Y=Planogrammable, N=Not Planogrammable, Blank=Planogrammable) |
| DELIVERY_DAYS | VARCHAR | Indicator for days accounts receives delivers (ex: Tuesday, Thursday delivery would be represented as (.T.T…) or (.2.4…)) |
| ACCOUNT\_ROUTE\_CODE | VARCHAR | Wholesaler assigned unique code for Account Route |
| ACCOUNT_ROUTE | VARCHAR | Name associated with ACCOUNT\_ROUTE\_CODE |
| BUYER | VARCHAR | Label associated with buyer for this account |
| DISPLAY_FLAG | VARCHAR | Identifies whether the account allows displays |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

### [**EDW.ABSD\_INVOICE\_MEASURE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_INVOICE_MEASURE) 
This view contains all Sales data with transactions associated with retail sales including quantity, price, and cost for all ABSD warehouses. It describes the date, product, customer, and quantity/dollars/discounts/taxes in aggregate related to the sale to a retailer. The combination of Source Code and Sales Company Code should be used to retrieve invoices for a specific ABSD warehouse location.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| INVOICE_CODE | VARCHAR | Wholesaler assigned unique code for DIST_INVOICE |
| INVOICE\_LINE\_NUMBER | NUMBER(7,0) | Invoice line number |
| INVOICE\_DATE\_ID | DATE | Surrogate key for VIP_DATE as it pertains to this invoice |
| ACCOUNT_CODE | VARCHAR | Wholesaler assigned unique code for ACCOUNT |
| ITEM_CODE | VARCHAR | Wholesaler assigned unique code associated with this Item |
| VIP\_ITEM\_ID | NUMBER(38,0) | Surrogate key for VIP_ITEM |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| SELL\_WAREHOUSE\_ITEM_CODE | VARCHAR | Wholesaler assigned unique code for Item as it pertains to Selling Warehouse |
| PICK\_WAREHOUSE\_ITEM_CODE | VARCHAR | Wholesaler assigned unique code for Item as it pertains to Selling Warehouse |
| SELL\_WAREHOUSE\_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse as it pertains to where item is sold from |
| PICK\_WAREHOUSE\_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse as it pertains to where item is picked from |
| SALES\_COMPANY\_CODE | VARCHAR | Wholesaler assigned unique code an ABSD Company/Warehouse |
| SALES\_PERSON\_CODE | VARCHAR | Wholesaler assigned unique code for Sales Person |
| DEPLETION\_YEAR\_MONTH | NUMBER(38,0) | Depletion Year/ Month |
| VIP\_ORDER\_SYSTEM_ID | NUMBER(38,0) | Surrogate key for VIP\_ORDER\_SYSTEM |
| INVOICE\_TRANS\_TYPE_CODE | VARCHAR | Wholesaler assigned unique code for Invoice Transaction Type |
| INVOICE\_VIP\_UNIT_ID | NUMBER(38,0) | This is the unit of measure as it pertains to INVOICE_QTY |
| REFERENCE\_INVOICE\_CODE | VARCHAR | Reference invoice code |
| COMBO_FLAG | VARCHAR | Combo flag |
| FREE_FLAG | VARCHAR | Free flag |
| DUTY_FLAG | VARCHAR | Duty flag |
| INVOICE_QTY | NUMBER(38,0) | Invoice quantity |
| PRODUCT_SALES | NUMBER(13,4) | Product sales |
| INVOICE_DISCOUNT | NUMBER(13,4) | Invoice discount |
| SPLIT_CASE | NUMBER(13,4) | Split case charge |
| CRV_LIABILITY | NUMBER(13,4) | CRV liability |
| HANDLING_LIABILITY | NUMBER(13,4) | Handling liability |
| TAX_LIABILITY | NUMBER(13,4) | Tax liability |
| ADDITIONAL_CHARGE | NUMBER(13,4) | Additional charge |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

### [**EDW.ABSD\_ITEM\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_ITEM_DIMENSION)
This view contains the master list of items within the ABSD RAS environment including identifiers, descriptions, and attributes of all sellable products. The ITEM\_CODE represents a unique package within the entire ABSD RAS environment so this value will be duplicated across Source Codes if more than one ABSD location sells the same package. The Source Code and Source Label are used to identify which high level ABSD Entity sells the product. Warehouse level detail can be found on the ABSD\_WAREHOUSE\_ITEM\_DIMENSION view.

  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ITEM_CODE | VARCHAR | Unique code associated with an Item sold by ABSD |
| VIP\_ITEM\_ID | NUMBER(38,0) | Surrogate key for VIP_ITEM |
| SUPPLIER\_ITEM\_CODE | VARCHAR | Supplier item code (ex: for AB products the PDCN code) |
| ITEM\_CODE\_GROUP | VARCHAR | Wholesaler assigned label to group this Item |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy that carries the Item |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity that carries the item |
| TERRITORY_CODE | VARCHAR | Wholesaler assigned unique code for Territory |
| TERRITORY | VARCHAR | Name associated with Territory Code |
| SALES\_POINTER\_CODE | VARCHAR | Wholesaler assigned unique code for Sales Pointer |
| SALES_POINTER | VARCHAR | Name associated with Sales Pointer Code |
| SUPPLIER_CODE | VARCHAR | Wholesaler assigned unique code for Supplier |
| SUPPLIER_NAME | VARCHAR | Name associated with this Supplier Code |
| BRAND_CODE | VARCHAR | Source-defined unique code for BRAND |
| BRAND_NAME | VARCHAR | Name associated with BRAND_CODE |
| PRODUCT_CODE | VARCHAR | Wholesaler assigned unique code for this Product |
| PRODUCT_NAME | VARCHAR | Name associated with Product Code |
| PRODUCT\_TYPE\_CODE | VARCHAR | Wholesaler assigned unique code for this Product Type |
| PRODUCT_TYPE | VARCHAR | Name associated with this Product Type |
| ITEM_DESCRIPTION | VARCHAR | Item description |
| ITEM\_STATUS\_NAME | VARCHAR | Name associated with Item Status Code |
| PRODUCER_CODE | VARCHAR | Wholesaler assigned unique code for Producer |
| PRODUCER_NAME | VARCHAR | Name associated with Producer Code |
| VARIETY_PACK | VARCHAR | Variety Pack Flag |
| COUNTRY\_OF\_ORIGIN_CODE | VARCHAR | Wholesaler assigned unique code for Country of Origin |
| COUNTRY\_OF\_ORIGIN | VARCHAR | Name associated with Country of Origin Code |
| NON_ALCOHOLIC | VARCHAR | Non-Alc Flag |
| ABV | NUMBER(5,2) | ABV Flag |
| AGED_YEARS | NUMBER(38,0) | Years Aged |
| SEGMENT_CODE | VARCHAR | Segment Code based on Price Tier |
| SEGMENT | VARCHAR | Name of Segment |
| STYLE\_TYPE\_CODE | VARCHAR | Sytle Code for type of product |
| STYLE_TYPE | VARCHAR | Name of Style |
| SUB\_STYLE\_TYPE_CODE | VARCHAR | Sub Style Code for type of product |
| SUB\_STYLE\_TYPE | VARCHAR | Name of Sub Style |
| COLOR_CODE | VARCHAR | Color Code for color of product |
| COLOR | VARCHAR | Name of Color |
| VARIETAL_CODE | VARCHAR | Varietal Code for type of product |
| VARIETAL | VARCHAR | Name of Variety |
| REGION_CODE | VARCHAR | Region Code |
| REGION | VARCHAR | Name of Region |
| APPELLATION_CODE | VARCHAR | Code for geographic location of winemaker |
| APPELLATION | VARCHAR | Name of Appellation |
| FLAVOR_CODE | VARCHAR | Flavor Code for flavor of product |
| FLAVOR | VARCHAR | Name of Flavor |
| ACTIVE_DATE | DATE | Active date associated with this entity |
| INACTIVE_DATE | DATE | Inactive date associated with this entity |
| UNITS_CASE | NUMBER(38,0) | Units per case (ex: 4/6/12 OZ BTL = 24 units per case) |
| BATF\_UNITS\_PER_CASE | NUMBER(38,0) | Standard Units Per Case per ATF standards |
| RETAIL\_SELL\_UNITS_CASE | NUMBER(38,0) | Retail selling units per case (ex:4/6/12 OZ BTL = 4) |
| UNITS\_RETAIL\_PACKAGE | NUMBER(38,0) | Units per retail sellable package (ex: 4/6/12 OZ BTL = 6) |
| VOLUME\_OF\_UNIT | NUMBER(9,3) | Volume of unit (ex: 4/6/12 OZ BTL = 12 (ounces)) |
| UNIT\_OF\_MEASURE | VARCHAR | Name associated with Unit of Measure Code |
| OZ_CASE | NUMBER(12,5) | Ounces per case |
| ML_CASE | NUMBER(12,5) | Mililiters per case |
| CONTAINER_TYPE | VARCHAR | Name associated wtih Container Type Code |
| CONTAINER_MATERIAL | VARCHAR | Container material |
| PACKAGE\_TYPE\_CODE | VARCHAR | Package type code |
| PACKAGE_TYPE | VARCHAR | Name associated with Package Type Code |
| PACKAGE_SIZE | VARCHAR | Package size |
| CASE\_GTIN\_UPC | VARCHAR | Primary case GTIN or UPC |
| RETAIL\_GTIN\_UPC | VARCHAR | Primary retail GTIN or UPC |
| UNIT\_GTIN\_UPC | VARCHAR | Primary unit GTIN or UPC |
| SELLABLE\_BY\_UNIT | VARCHAR | Sellable by unit flag |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

### [**EDW.ABSD\_WAREHOUSE\_ITEM_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_WAREHOUSE_ITEM_DIMENSION) 
This view contains the master list of items carried by each warehouse within the ABSD RAS environment. The ITEM_CODE represents a unique package within the entire ABSD RAS environment so this value will be duplicated across Source Codes and Warehouse Codes if more than one ABSD warehouse sells the same package. The combination of Item Code, Source Code and Warehouse Code should be used to identify which Item/ABSD Warehouse is represented by a record.

  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WAREHOUSE\_ITEM\_CODE | VARCHAR | Unique code associated with an Item sold by ABSD |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy that sells the item |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity that sells the item |
| ITEM_CODE | VARCHAR | Unique code associated with an Item sold by ABSD |
| WAREHOUSE_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse |
| WAREHOUSE\_ITEM\_STATUS_NAME | VARCHAR | Name associated with Warehouse Item Status Code |
| SUPPLIER\_ITEM\_CODE | VARCHAR | Supplier item code (ex: for AB products the PDCN code) |
| VINTAGE | VARCHAR | Vintage |
| SELL\_UNITS\_PER_CASE | NUMBER(38,0) | Selling Units per Case |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

### [**EDW.ABSD\_ROUTE\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_ROUTE_DIMENSION) 
This view contains a master list of all routes run by an ABSD warehouse. Each Route Code is unique to a specific warehouse and begins with the Warehouse Code value. Also included are codes and descriptors to define the route type.

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| ROUTE_CODE | VARCHAR | Wholesaler assigned code for Route as it pertains to the SOURCE_CODE value |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| WAREHOUSE_CODE | VARCHAR | Wholesaler assigned unique code for ABSD Warehouse |
| ROUTE\_TYPE\_CODE | VARCHAR | Wholesaler assigned unique code for Route Type |
| ROUTE_TYPE | VARCHAR | Name associated with Route Type Code |
| ROUTE_NAME | VARCHAR | Name associated with Route Code |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TIMESTAMP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_ROUTE\_SCHEDULE_MEASURE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_ROUTE_SCHEDULE_MEASURE) 
This view contains the mapping of Accounts to Routes and at Source Code level for a given day. Each account is given a Sequence Number that indicates where resides within the order the route is serviced  

  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ROUTE_CODE | VARCHAR | Wholesaler assigned code for Route as it pertains to the SOURCE_CODE value |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| ACCOUNT_CODE | VARCHAR | Wholesaler assigned unique code for an Account as it pertains to the SOURCE_CODE value |
| ROUTE\_DATE\_ID | DATE | Surrogate key for VIP_DATE as it pertains to Route Date |
| SEQUENCE_NUMBER | NUMBER(38,0) | Order in which the account is serviced |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_ROUTE\_ACTIVITY_MEASURE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_ROUTE_ACTIVITY_MEASURE)
This view describes the activity that occurred on a specific route on a given day. The purpose of this entity is to provide a list of customer visits by type. Details include the timestamp, latitude/longitude, and outcome of a customer visit.



| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ROUTE_CODE | VARCHAR | Wholesaler assigned code for Route as it pertains to the SOURCE_CODE value |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| ACCOUNT_CODE | VARCHAR | Wholesaler assigned unique code for an Account as it pertains to the SOURCE_CODE value |
| ROUTE\_DATE\_ID | DATE | Surrogate key for VIP_DATE as it pertains to Route Date |
| ROUTE_TIMESTAMP | TIMESTAMP_NTZ(9) | Route timestamp |
| ROUTE\_OUTCOME\_CODE | VARCHAR | Wholesaler assigned unique code for Route Outcome |
| ROUTE_OUTCOME | VARCHAR | Name associated with Route Outcome |
| ROUTE\_SERVICED\_FLAG | VARCHAR | Route Serviced Flag |
| EMPLOYEE_CODE | VARCHAR | Code for Employee assigned to the Route |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_EMPLOYEE\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_EMPLOYEE_DIMENSION) 
This view is the master list of Employees and attributes associated to them for all ABSD warehouses.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| EMPLOYEE_CODE | VARCHAR | Wholesaler assigned code for this Employee |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for Highest Level ABSD Entity in RAS hierarchy |
| SOURCE_LABEL | VARCHAR | Name of the highest level ABSD entity |
| MANAGER\_EMPLOYEE\_CODE | VARCHAR | Wholesaler assigned unique code for Employee Code as it pertains to the |
| DEPARTMENT_CODE | VARCHAR | Wholesaler assigned unique code for Department |
| DEPARTMENT_NAME | VARCHAR | Wholesaler assigned name associated with Department |
| EMPLOYEE_STATUS | VARCHAR | Name associated with EMPLOYEE\_STATUS\_CODE |
| EMPLOYEE_TYPE | VARCHAR | Name associated with EMPLOYEE\_TYPE\_CODE |
| EMPLOYEE_TITLE | VARCHAR | Wholesaler assigned Employee Title |
| MANAGER_FLAG | VARCHAR | Flag that defines the Employee as a Manager |
| FIRST_NAME | VARCHAR | First name |
| MIDDLE_NAME | VARCHAR | Middle name |
| LAST_NAME | VARCHAR | Last name |
| EMAIL | VARCHAR | Email address |
| OFFICE_PHONE | VARCHAR | Office phone number |
| OFFICE\_PHONE\_EXTENSION | VARCHAR | Office phone number extension |
| MOBILE_PHONE | VARCHAR | Mobile phone number |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  
  
  

### [**EDW.ABSD\_SALES\_PERSON_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_SALES_PERSON_DIMENSION)  
This view contains the master list of all Sales Persons names and codes within the ABSD RAS environment

  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SALES\_PERSON\_CODE | VARCHAR | Wholesaler assigned unique code for Sales Person |
| SOURCE_CODE | VARCHAR | Wholesaler assigned unique code for SOURCE |
| SOURCE_LABEL | VARCHAR | Name associated with Source Code |
| EMPLOYEE_CODE | VARCHAR | Wholesaler assigned code for this Employee |
| SALES\_PERSON\_NAME | VARCHAR | Name associated with Sales Person Code |
| ROW\_EFFECTIVE\_DATE | DATE | Start date for slowly changing dimension |
| ROW\_EXPIRATION\_DATE | DATE | End date for slowly changing dimension |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_VIP\_INVOICE\_TRANS\_TYPE_ DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_VIP_INVOICE_TRANS_TYPE_DIMENSION)
This view contains the master list of invoice transaction type identifiers and names. Invoice Transaction Types are used to define the different types of sales transactions in the Distributor Gross Profit Base file. This is typically only Retail Sales but may include other types of transactions that are not retail sales. The majority of transaction types are retail sales, but others may include samples or breakage *depending how they are handled by the distributor.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VIP\_INVOICE\_TRANS\_TYPE\_ID | NUMBER(38,0) | Surrogate key for VIP\_INVOICE\_TRANS_TYPE |
| VIP\_INVOICE\_TRANS_FLAG | VARCHAR | VIP-assigned identifier for indicating transaction type |
| VIP\_INVOICE\_TRANS_TYPE | VARCHAR | Name associated with Invoice Transaction Type |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_VIP\_ORDER\_SYSTEM\_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_VIP_ORDER_SYSTEM_DIMENSION)
This view defines the master list of acceptable Order Systems Codes and descriptions within the ABSD RAS environment. Order systems are used to generate and submit retailer orders. Examples include Mobility, Retailer Portal and Route Accounting Systems.  

  
  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VIP\_ORDER\_SYSTEM_ID | NUMBER(38,0) | Surrogate key for VIP\_ORDER\_SYSTEM |
| VIP\_ORDER\_SYSTEM_CODE | VARCHAR | Wholesaler assigned code associated with Order System |
| VIP\_ORDER\_SYSTEM | VARCHAR | Name associated with the VIP\_ORDER\_SYSTEM |
| VIP\_ORDER\_SYSTEM_TYPE | VARCHAR | Order System Type |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |

  

  

  

### [**EDW.ABSD\_VIP\_UNIT_DIMENSION**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ABSD_VIP_UNIT_DIMENSION) 
This view contains the master list of unit identifiers which qualify quantity values in transaction files. Valid values include C for full “case” transactions and B for bottle/unit level transactions.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VIP\_UNIT\_ID | NUMBER(38,0) | Surrogate key for VIP_UNIT |
| VIP\_UNIT\_FLAG | VARCHAR | VIP-assigned indicator used to qualify quantity in transaction entities (ex: C - Case, B - Bottle) |
| VIP\_UNIT\_TYPE | VARCHAR | VIP unit type name |
| RECORD_STATUS | VARCHAR | Database audit column |
| CREATE\_USER\_ID | NUMBER(38,0) | VIP User ID who created Account |
| CREATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of when the Account was created |
| UPDATE\_USER\_ID | NUMBER(38,0) | VIP User ID who last updated the Account |
| UPDATE_TIMESTAMP | TIMESTAMP_NTZ(9) | VIP Timesamp of the last update to the Account |
| ETL\_JOB\_ID | NUMBER(38,0) | ID of the VIP ETL Job that loaded the data |
| ETL\_BATCH\_NUM | NUMBER(38,0) | Batch Number from the VIP ETL job |
| ETL_TIMESTAMP | TIMESTAMP_NTZ(9) | Timestamp from VIP ETL job |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of when the record was last updated |




Published on 4/14/21 by A. Stites
