---
title: IRI Non-Projected Data
tags:
    - Consumer Data 
    - Sales
    - Product
    - Location
description: IRI store-level sales to consumer data by retail product
---
# IRI Non-Projected Data  

This data set is comprised of views that contain the store-level sales to consumer data by retail product provided by IRI directly from their Data Mart. Unlike the data in IRI Unify which contains a projection to account for a given geography, the data in these views come directly from scanned sales made at the retailer's register. There are views in this data set for Beer, Wine and Spirits sales each. Those three views can all be joined to the CALENDAR and STORES views to define the week and store selling. However, each of the three beverage types have their PRODUCTS view because beer, wine and spirits all have unique segmentation specific to that beverage type. This data is refreshed once a week on Friday afternoons.

**Restatement Policy:** The data received from IRI may not mirror Unify exactly due to timing of delivery vs Unify model update or due to restatements. To keep the the non-projected data closely aligned with Unify there is a restatement schedule:  
  
-Every 4 weeks, IRI provides an additional 17 weeks in addition to the latest week, to account for the quad update  
-Twice a year, IRI provides 2+ years of historical sales data in addition to the latest week, to account for major restatements  

  

### **[EDW.IRI\_DDM\_SALES](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_SALES)**
This is the primary view that contains the store level, non-projected selling metrics (Units, Volume, and Dollars) for beer products provided by IRI. Each record represents the sale of a single product in a specific store for a specific IRI week . The store, product and time components are expressed as codes that correspond back to descriptive values in the CALENDAR, PRODUCTS and STORES views. This data is refreshed once a week with the most recently completed week’s data. It is also refreshed from time to time for a full 18 week window when deemed necessary by IRI.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| GEOGRAPHY_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific store. Can be joined to STORES view for description |
| TIME_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific week. Can be joined to CALENDAR view for description |
| UNIT_SALES | FLOAT | Total unit sales for the product in the store for the given week. Unit size defined on PRODUCTS view. |
| DOLLAR_SALES | FLOAT | Total dollar sales for the product in the store for the given week. |
| VOLUME_SALES | FLOAT | Total volume sales expressed in 288oz case equivalents for the product in the stores for the given week |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### **[EDW.IRI\_DDM\_PRODUCTS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_PRODUCTS)**
This is the master beer product view from IRI that defines all beer products expected to be found in the IRI\_DDM\_SALES data. This view contains both Anheuser-Busch and competitive products and segments them using a series of AB-defined and IRI-define attributes including Style, Segment, Subsegment, Brewer, Brand Family and more.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| PRODUCT_DESCRIPTION | VARCHAR(159) | Descriptive name of brand and package including number of units per item and total ounces per item |
| UPC\_13\_DIGIT | VARCHAR(20) | 13 Digit UPC for item |
| AB\_CATEGORY\_STYLE_VALUE | VARCHAR(16) | AB defined Category Style |
| AB\_CATEGORY\_SUB\_STYLE\_VALUE | VARCHAR(18) | AB defined Sub Style |
| AB\_CATEGORY\_WAMP_VALUE | VARCHAR(13) | AB defined Category specific Weigted Average Market Price partition |
| AB\_MEGASEGMENT\_VALUE | VARCHAR(12) | AB defined Megasegments (Core/Value, Above Core, Non-Alc) |
| AB\_SEGMENT\_VALUE | VARCHAR(9) | AB defined Segment |
| AB\_SUBSEGMENT\_VALUE | VARCHAR(15) | AB defined Sub Segment |
| AB\_UPC\_VALUE | VARCHAR(30) | AB UPC value |
| AB\_WAMP\_VALUE | VARCHAR(13) | AB defined industrw Weighted Averaged Market Price partition |
| ALCOHOL\_BY\_VOLUME_VALUE | VARCHAR(26) | Alcohol by Volume expressed as a descriptive value |
| BEER\_STYLE\_VALUE | VARCHAR(20) | IRI defined Style |
| BRAND\_FAMILY\_VALUE | VARCHAR(43) | IRI defined Brand Family |
| BRAND_VALUE | VARCHAR(67) | IRI defined Brand Name |
| BREWER_VALUE | VARCHAR(40) | IRI defined Brewer Name |
| CATEGORY_VALUE | VARCHAR(4) | IRI defined Category |
| COUNTRY\_OF\_ORIGIN_VALUE | VARCHAR(18) | Country of Origin |
| DOM\_VS\_IMP_VALUE | VARCHAR(26) | Domestic/Import Flag |
| LIGHT\_VS\_REGULAR_VALUE | VARCHAR(26) | IRI defined beer type |
| PACKAGE_VALUE | VARCHAR(29) | Sellable package description |
| SEGMENT_VALUE | VARCHAR(16) | IRI defined Segment |
| SERVINGS\_VOL\_EQUIVALENCY_VAL | FLOAT | IRI defined servings volume equivalents |
| SUB\_SEGMENT\_VALUE | VARCHAR(20) | IRI defined Sub Segment |
| TYPE_VALUE | VARCHAR(14) | IRI defined beverage type |
| TOTAL_OUNCES | VARCHAR(10) | Total ounces per package |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### **[EDW.IRI\_DDM\_SPIRITS_SALES](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_SPIRITS_SALES)**
This is the primary view that contains the store level, non-projected selling metrics (Units, Volume, and Dollars) for spirits products provided by IRI. Each record represents the sale of a single product in a specific store for a specific IRI week . The store, product and time components are expressed as codes that correspond back to descriptive values in the CALENDAR, PRODUCTS and STORES views. This data is refreshed once a week with the most recently completed week’s data. It is also refreshed from time to time for a full 18 week window when deemed necessary by IRI.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| GEOGRAPHY_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific store. Can be joined to STORES view for description |
| TIME_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific week. Can be joined to CALENDAR view for description |
| UNIT_SALES | FLOAT | Total unit sales for the product in the store for the given week. Unit size defined on PRODUCTS view. |
| DOLLAR_SALES | FLOAT | Total dollar sales for the product in the store for the given week. |
| VOLUME_SALES | FLOAT | Total volume sales expressed as 304oz case equivalents for the product in the stores for the given week |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### [**EDW.IRI\_DDM\_SPIRITS_PRODUCTS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_SPIRITS_PRODUCTS)
This is the master spirits product view from IRI that defines all spirits products expected to be found in the IRI\_DDM\_SPIRITS_SALES data. This view contains both Anheuser-Busch and competitive products and segments them using a series of IRI-defined attributes including Proof, Bottle Size, Category, Segment, Supplier and more.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| PRODUCT_DESCRIPTION | VARCHAR(149) | Descriptive name of brand and package including number of units per item and total ounces per item |
| UPC\_13\_DIGIT | VARCHAR(13) | 13 Digit UPC for item |
| PROOF_VALUE | VARCHAR(13) | Alcohol Proof of product expressed as description |
| SIZE_VALUE | VARCHAR(12) | Size of sellable package |
| SPIRITS\_BRAND\_VALUE | VARCHAR(52) | IRI defined Brand |
| SPIRITS\_CATEGORY\_VALUE | VARCHAR(20) | IRI defined Category |
| SPIRITS\_MEGACATEGORY\_VALUE | VARCHAR(7) | IRI defined Mega Category |
| SPIRITS\_PARENT\_UPC_VALUE | VARCHAR(13) | Parent UPC value |
| SPIRITS\_SEGMENT\_VALUE | VARCHAR(25) | IRI defied Segment |
| SPIRITS\_SUBBRAND\_VALUE | VARCHAR(36) | IRI defined Sub Brand |
| SPIRITS\_SUBCATEGORY\_VALUE | VARCHAR(27) | IRI defined Sub Category |
| SPIRITS\_SUPPLIER\_VALUE | VARCHAR(40) | IRI defined Supplier |
| SPIRITS\_TYPE\_VALUE | VARCHAR(8) | IRI defined type of spirit (Regular, Flavored, Assorted) |
| SERVINGS\_VOL\_EQUIVALENCY_VALUE | VARCHAR(6) | IRI defined servings volume equivalents |
| EDW\_START\_TSP | TIMESTAMP_NTZ(0) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### **[EDW.IRI\_DDM\_WINE_SALES](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_WINE_SALES)** 
This is the primary view that contains the store level, non-projected selling metrics (Units, Volume, and Dollars) for wine products provided by IRI. Each record represents the sale of a single product in a specific store for a specific IRI week . The store, product and time components are expressed as codes that correspond back to descriptive values in the CALENDAR, PRODUCTS and STORES views. This data is refreshed once a week with the most recently completed week’s data. It is also refreshed from time to time for a full 18 week window when deemed necessary by IRI

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| GEOGRAPHY_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific store. Can be joined to STORES view for description |
| TIME_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific week. Can be joined to CALENDAR view for description |
| UNIT_SALES | FLOAT | Total unit sales for the product in the store for the given week. Unit size defined on PRODUCTS view. |
| DOLLAR_SALES | FLOAT | Total dollar sales for the product in the store for the given week. |
| VOLUME_SALES | FLOAT | Total volume sales expressed as 304oz case equivalents for the product in the stores for the given week |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### [**EDW.IRI\_DDM\_WINE_PRODUCTS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_WINE_PRODUCTS)
This is the master wine product view from IRI that defines all wine products expected to be found in the IRI\_DDM\_\_WINE\_SALES data. This view contains both Anheuser-Busch and competitive products and segments them using a series of IRI-defined attributes including Flavor, Place of Origin, Domestic/Import Flag, Bottle Size, Category, Segment, Supplier and more.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRODUCT_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific item. Can be joined to PRODUCTS view for description |
| PRODUCT_DESCRIPTION | VARCHAR(110) | Descriptive name of brand and package including number of units per item and total ounces per item |
| UPC\_13\_DIGIT | VARCHAR(13) | 13 Digit UPC for item |
| FLAVOR_VALUE | VARCHAR(47) | Flavor/Style of product |
| PLACES\_OF\_ORIGIN_VALUE | VARCHAR(30) | IRI defined place of origin |
| PRICE\_SEGMENT\_VALUE | VARCHAR(34) | IRI defined Price Segment |
| SIZE\_PACKAGE\_VALUE | VARCHAR(7) | Size of sellable package |
| TOTAL\_WINE\_VALUE | VARCHAR(10) | IRI flag for whether product is part of "Total Wine" category |
| WINE\_BRAND\_VALUE | VARCHAR(64) | IRI defined Brand |
| WINE\_CATEGORY\_VALUE | VARCHAR(24) | IRI defined Category |
| WINE\_DOM\_VS\_IMP\_VALUE | VARCHAR(19) | Domestic vs Import designation |
| WINE\_MEGACATEGORY\_VALUE | VARCHAR(14) | IRI defined Mega Category |
| WINE\_PARENT\_UPC_VALUE | VARCHAR(13) | Product Parent UPC |
| WINE\_SUPPLIER\_VALUE | VARCHAR(39) | IRI defined Supplier |
| WINE\_TYPE\_VALUE | VARCHAR(31) | IRI defined Type of Wine |
| SERVINGS\_VOL\_EQUIVALENCY_VALUE | VARCHAR(6) | IRI defined servings volume equivalents |
| EDW\_START\_TSP | TIMESTAMP_NTZ(0) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  
  

### **[EDW.IRI\_DDM\_STORES](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_STORES)**
This is the master view of accounts for which IRI has store level scan sales data. Each store is matched to their primary AB wholesaler and assigned a Corporate Parent and Channel to go along with their identifying information such as store number and address.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| GEOGRAPHY_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific store. Can be joined to STORES view for description |
| GEOGRAPHY_DESCRIPTION | VARCHAR(88) | Full description of the store including Name, Store Number and Address |
| TDLINX | NUMBER(38,0) | TDLinx Number for store |
| WHOLESALER\_ID\_VALUE | NUMBER(38,0) | Wholeslaer Number of Primary AB Wholesaler for accout |
| WHOLESALER_NAME | VARCHAR(30) | Name of Primary AB Wholesler for account |
| RETAILER\_CORPORATE\_PARENT_NAME | VARCHAR(30) | Name of Corporate Parent for which Banner is a part of within the IRI Hierarchy |
| RETAILER_NAME | VARCHAR(61) | Chain Banner under which the store operates as defined by IRI Hierarchy |
| RETAILER\_STORE\_NUMBER | NUMBER(38,0) | Chain Store Number |
| STREET_ADDRESS | VARCHAR(37) | Address of Store |
| CITY | VARCHAR(25) | City of Store |
| STATE_CODE | VARCHAR(2) | State of Store |
| ZIP_CODE | NUMBER(38,0) | Zipcode of Store |
| OUTLET_NAME | VARCHAR(18) | IRI defined Channel |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Time Stamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  
  

### [**EDW.IRI\_DDM\_CALENDAR**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_DDM_CALENDAR)
This is a reference view that can be joined to from the SALES views using the TIME_KEY field to retrieve the descriptive name of the time period. IRI uses weeks as defined by the International Organization for Standardization (ISO) which begin with a Monday and end on Sunday. The time descriptions follow the following format “Week Ending MM-DD-YYYY”

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| TIME_KEY | NUMBER(38,0) | Numeric key from IRI to identify a specific week. Can be joined to CALENDAR view for description |
| TIME_DESCRIPTION | VARCHAR(20) | Description of the IRI Week that corresponds to the TIME_KEY value |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

Published on 3/19/21 by A. Stites
