---
title: Shelf Data
tags:
    - Retail
    - Sales
description: All Shelf information collected by AB
---
# Shelf Data  

This data set is comprised of the views that contain all Shelf information collected by AB. The Shelf data is collected via Planograms which are used to define the layout of product in a retailer's cooler or warm shelf. Planograms in this data set are submitted by wholesalers to AB. Planograms are unique to a single outlet which can be identified on the monthly snapshot view using the WSLR\_CUST\_PARTY_ID value. The Shelf data view is refreshed monthly at the beginning of each month for the recently completed month. 

  

### **[EDW.SHLF\_PROD\_FACG\_EOM\_SS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_PROD_FACG_EOM_SS)**
This view contains the locked monthly snapshot of item data submitted on Planograms to AB. Each record represents a SKU level item at a retailer for a given month along with the number of facings and units for that item on the shelf at the retailer. The data is refreshed monthly at the beginning of a month for the recently completed month.  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_PROD\_ID | NUMBER(11,0) | A sequence generated number that uniquely identifies a Product with the Product Library Management system. |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | Calendar Year Month value expressed as YYYYMM |
| SELLNG\_LOC\_ID | NUMBER(3,0) | A unique number identifying the actual physical location of a shelf at a Retail Outlet. |
| WSLR\_CUST\_PARTY_ID | NUMBER(15,0) | BudNET generated value to ID a retail outlet |
| PLANGRM_ID | NUMBER(38,0) | A sequence generated number that uniquely identifies a planogram at a selling location for a Wholesaler Customer. |
| FACG_CNT | NUMBER(5,0) | The number of facings a wholesaler customer has at a selling location for a shelf product during a given month. |
| TMPTR\_TYP\_NM | VARCHAR(10) | The temperature type of the selling location where the planogram is located. Valid values are CAVE, COLD, WARM. |
| SHLF\_CPCTY\_QTY | NUMBER(5,0) | The total number of units of the product in the planogram. Used in determination of days-of-supply and out-of-stock predictions. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### [**EDW.SHLF_PROD**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_PROD)
This view contains master records for all possible items that may be found in the shelf/planogram data. Each item is identified by a unique SHLF\_PROD\_ID value that can then be joined to the monthly snapshot view for planograms in which the item exists. The view also contains physical characteristics of the item (height/weight/size dimensions) and unique IDs for Brand, Package and Product Type that can be joined to accompanying tables to retrieve identifying attributes about the item.  

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_PROD\_ID | NUMBER(11,0) | A sequence generated number that uniquely identifies a Product with the Product Library Management system. |
| SHLF\_PKG\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a package. |
| SHLF\_BRND\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Brand in Product Library Management. |
| SHLF\_PROD\_TYP_CD | VARCHAR(20) | An alphanumeric code that uniquely identifies a Product Type. |
| UPC_CD | VARCHAR(20) | The Universal Product Code (UPC) of a packaged product that can be purchased by consumers. |
| PROD\_PKG\_HGT_NBR | NUMBER(9,2) | A number that expresses the height of the packaged product in inches. |
| PROD\_PKG\_WIDTH_NBR | NUMBER(9,2) | A number that expresses the width of the packaged product in inches. |
| PROD\_PKG\_DEPTH_NBR | NUMBER(9,2) | A number that expresses the depth of the packaged product in inches. |
| PROD\_PKG\_UNIT_QTY | NUMBER(5,0) | The number of smallest packaged units found within the packaged product. For example, a 24 case of individual bottles the value is 24. |
| DUP\_PROD\_TYP_CD | VARCHAR(1) | Indicates the type of duplicate product. Valid values are: S - Single broken out of a larger pack, D - UPC on the product is used by another product, C - Comptetitor case pack when UPC on inner pack is the same, Null - not a duplicate. |
| PROD\_PKG\_WGT_NBR | NUMBER(9,2) | The total weight of the packaged product in ounces that is placed on the retailer's shelf. The total weight includes the weight of the contents in the container, the weight of the container, etc. |
| STAT_CD | VARCHAR(1) | Y/N code that indicates if the product is active or inactive. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| ACCRCY\_RPT\_INCLD_FLG | VARCHAR(1) | This indicates whether or not the product is to be included in Planogram Accuracy report used for shelf accuracy metrics |
| SHLF\_PROD\_DSC | VARCHAR(250) | Describes the Shelf Product using the Brand Name and Package components - Container Count, Size Amount, and Container Code. Examples: Bud Ice 12/32B. |

  

### **[EDW.SHLF_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND)**
This view defines the brand associated with the records in SHLF\_PROD. If the brand is an AB brand it will have the 3 character BRND\_CD and BRND\_CTGY\_ID value found on the EDW.BRND view populated. This view contains unique IDs to define the brand’s Category, Flavor, Style, Segment, and Brand Family in the accompanying views.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| SHLF\_BRND\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Brand in Product Library Management. |
| BRND_NM | VARCHAR(32) | Actual Brand Name |
| BRND_CD | VARCHAR(3) | 3 character AB Brand Code, can be joined to EDW.BRND |
| WEA\_BRND\_ID | NUMBER(9,0) | N/A |
| BRND\_CTGY\_ID | NUMBER(15,0) | Enterprise sequence number that IDs each brand, can be joined to EDW.BRND for AB produced brands |
| SHLF\_BRND\_CTGY_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies the Brand Category |
| SHLF\_BRND\_FLVR_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies the Brand Flavor |
| SHLF\_BRND\_STYLE_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies the Brand Style |
| SHLF\_BRND\_SEG_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies the Brand Segment |
| SHLF\_BRND\_FAMLY_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies the Brand Category |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| BRAND\_TYP\_NM | VARCHAR(30) | Flag to indicate if the brand is AB or Competition |
| INDUS\_TYP\_NM | VARCHAR(30) | Describes the industry product type |
| SUBCTGY_NM | VARCHAR(30) | Describes the subcategory within the Industry |
| WAMP\_SEG\_NM | VARCHAR(50) | AB WAMP segment name of particular brand |
| BRAND\_SEG\_FUT_1 | VARCHAR(50) | Column 1 will be used for storing any brand category/attribute value in future |
| BRAND\_SEG\_FUT_2 | VARCHAR(50) | Column 2 will be used for storing any brand category/attribute value in future |
| BRAND\_SEG\_FUT_3 | VARCHAR(50) | Column 3 will be used for storing any brand category/attribute value in future |
| BRAND\_SEG\_FUT_4 | VARCHAR(50) | Column 4 will be used for storing any brand category/attribute value in future |

  

  

  

### [**EDW.SHLF\_BRND\_FAMLY**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND_FAMLY)
This view defines the Brand Family description for each record in the SHLF\_BRND view and provides the ability to join the SHLF\_BRWR and SHLF\_MFGR views (where applicable).

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| SHLF\_BRND\_FAMLY_ID | NUMBER(7,0) | A unique number that identifies Brand Familes defined in the Retail Shelf Merchandising system. |
| BRND\_FAMLY\_NM | VARCHAR(50) | The complete name given to a brand family. |
| SHLF\_MFGR\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a manufacturer. |
| SHLF\_BRWR\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Brewer. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| CNTRY_CD | VARCHAR(3) | This is a code that represents a country~ Canada (CA), Mexico (MX), USA (US) |

  

### [**EDW.SHLF_BRWR**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRWR)
This view defines the Brewer description for all Brand Families. It can be joined to using the SHLF\_BRWR\_ID from the SHLF\_BRND\_FAMLY view.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| SHLF\_BRWR\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Brewer. |
| BRWR_NM | VARCHAR(32) | The complete name of a Brewer. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### [**EDW.SHLF\_BRND\_CTGY**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND_CTGY)
This view defines the type of product (Beer, Pre-Mixed Cocktail, Malt Liquor, Wine, etc) for each Brand. The look up can be accomplished by joining to the SHLF\_BRND using the SHLF\_BRND\_CTGY\_ID value.  

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_BRND\_CTGY_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Category to which a Brand can belong. |
| BRND\_CTGY\_NM | VARCHAR(20) | The complete name of a Brand Category. Examples - FAB, Budget, Premium, Wine. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### **[EDW.SHLF\_FLVR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND_FLVR)**
This view defines all the valid Flavor types (where applicable) for Brands on the SHLF\_BRND view. The look up can be accomplished by joining to the SHLF\_BRND using the SHLF\_BRND\_FLVR_ID value.

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_BRND\_FLVR_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Brand's Flavor. |
| BRND\_FLVR\_NM | VARCHAR(20) | The complete name of a Brand Flavor. Examples - Ale~ Pilsner~ Lager~ Blue Ice. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### **[EDW.SHLF\_BRND\_STYLE](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND_STYLE)**
This view defines the Style of the brand for Brand on the SHLF\_BRND view. The look up can be accomplished by joining to the SHLF\_BRND view using the SHLF\_BRND\_STYLE\_ID value.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_BRND\_STYLE_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Style to which a Brand can belong. |
| BRND\_STYLE\_NM | VARCHAR(30) | The complete name of a Brand Style. (Ex: 'Dry', 'Lager', etc.) |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### **[EDW.SHLF\_BRND\_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_BRND_SEG)**
This view defines the Industry Segment of the brand for Brand on the SHLF\_BRND view. The look up can be accomplished by joining to the SHLF\_BRND view using the SHLF\_BRND\_SEG_ID value.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_BRND\_SEG_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a Segment to which a Brand can belong. |
| BRND\_SEG\_NM | VARCHAR(20) | The complete name of a Brand Segment. For example a Brand might be classified as Caffeinated or Light, etc. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### **[EDW.SHLF_PKG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_PKG)**
This view defines all attributes about the Package that the Product is sold in such as units and quantity in each package as well as how many packages can be facing when stacked vertically, on its top, front and side


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_PKG\_ID | NUMBER(7,0) | A sequence generated number that uniquely identifies a package. |
| SHLF\_PKG\_TYP_CD | VARCHAR(20) | A alphanumeric code that uniquely identifies a package type in the PLM system. |
| SHLF\_PKG\_SHAPE_CD | VARCHAR(20) | A alphanumeric code that uniquely identifies a Package Shape |
| SHLF\_CONT\_TYP_CD | VARCHAR(5) | A code that uniquely identifies a container. |
| UNIT\_CONT\_QTY | NUMBER(3,0) | The number of containers in the smallest packaged unit. For example, for a case of 24 bottles where the bottles are sold individually the number here will be 1. For a case of 24 bottles packaged as six packs the number stored here will be 6. |
| PKG\_UNIT\_QTY | NUMBER(5,0) | The number of smallest packaged units found within the package. For example, a 24 case of individual bottles (where the bottles are sold individually) the number here will be 24. For a case of 24 bottles grouped in six packs the number stored here will be |
| MAX\_VERTICAL\_PKG_NBR | NUMBER(3,0) | The maximum number of packages that can be stacked vertically on a retailer's shelf. |
| FRONT\_FACG\_NBR | NUMBER(2,0) | The number of facings visible when the package is viewed from the front. |
| TOP\_FACG\_NBR | NUMBER(2,0) | The number of facings visible when the package is viewed from the top. |
| SIDE\_FACG\_NBR | NUMBER(2,0) | The number of facings visible when the package is viewed from the side. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| SZ_AMT | NUMBER(8,3) | The amount of liquid in the specified container. For example, 12 indicates the container holds 12 units of liquid. |
| UOM_CD | VARCHAR(5) | A code indicating the type of Unit of measure. Valid values are OZ, L, ML, etc. |
| SHLF\_PKG\_DSC | VARCHAR(115) | The description of the Shelf Package derived according to a formula combining Container Count, Size Amount, Container Code, Package Special Code, and Unit of Measure Code. |

  

  

### **[EDW.SHLF\_CONT\_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHLF_CONT_TYP)**
This views defines the description of the container type the Product is sold in at retail. The look to retrieve the description can be accomplished by joining to the SHLF\_PKG view using the SHLF\_CONT\_TYP\_CD.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SHLF\_CONT\_TYP_CD | VARCHAR(5) | A code that uniquely identifies a container. |
| CONT\_TYP\_NM | VARCHAR(20) | The complete descriptive name of a container. |
| DEL_FLG | VARCHAR(1) | Y/N flag to Identifies a Physical delete from the Source. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

Published on 4/12/21 by A. Stites
