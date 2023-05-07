---
title: IRI Brand Model Extract
tags:
    - Volume
    - Distribution
    - Sales
    - Prices
description: IRI’s Brand Model Extract projected data model 
---
# IRI Brand Model Extract  

This data set contains tables included in an extract of data from IRI’s projected data model called the Brand Model Extract. These tables provide projected measure data (Volume, Dollars, Distribution, Merchandising, Displays) across a limited number of IRI defined geographies at varying levels of product hierarchy starting with SKU and progressing up to Brewer in addition to aggregates custom to AB for Sub Segment, Mega Segment and Weighted Average Market Price (WAMP). Each level of hierarchy has its own table with projected measures in that table specific to that level of that hierarchy. The data is refreshed once a week for the last 6 weeks of sales every Tuesday afternoon and receives a full restatement of historical data twice a year.  
  

### [**EDW.IRI\_BME\_BRAND\_DIM**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_BRAND_DIM)
This table is the master UPC level table of products found within the IRI data model. Each record contains descriptive attributes about the item as defined either by IRI or by AB to be used for reporting segmentation.  This table provides the mapping for how UPCs roll up to the different levels of hierarchal reporting found in this data set.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| PRODUCT | VARCHAR | IRI description of the Brand/Package represented by the record |
| AB\_CATEGORY\_STYLE_VALUE | VARCHAR | AB defined brand Style value |
| AB\_CATEGORY\_SUB\_STYLE\_VALUE | VARCHAR | AB defined brand Sub Style value |
| AB\_CATEGORY\_WAMP_VALUE | VARCHAR | AB defined Category Weighted Average Market Price |
| AB\_MEGASEGMENT\_VALUE | VARCHAR | AB defined Mega Segment value |
| AB\_PRIORITY\_SEGMENTATION\_VALUE | VARCHAR | AB defined Segment value |
| AB\_SUBSEGMENT\_VALUE | VARCHAR | AB defined Sub Segment value |
| AB\_UPC\_VALUE | VARCHAR | AB UPC value |
| AB\_WAMP\_VALUE | VARCHAR | AB defined value of item's Weighted Average Market Price |
| ALCOHOL\_BY\_VOLUME_VALUE | VARCHAR | ABV value |
| BEER\_STYLE\_VALUE | VARCHAR | IRI defined Style |
| BRAND\_FAMILY\_VALUE | VARCHAR | IRI defined Brand Family |
| BRAND_VALUE | VARCHAR | IRI defined Brand Name |
| BREWER_VALUE | VARCHAR | IRI defined Brewer Name |
| CATEGORY_VALUE | VARCHAR | IRI defined Category |
| COUNTRY\_OF\_ORIGIN_VALUE | VARCHAR | Country of Origin |
| DOM\_VS\_IMP_VALUE | VARCHAR | Domestic/Import Flag |
| LIGHT\_VS\_REGULAR_VALUE | VARCHAR | IRI defined beer type |
| PACKAGE\_TYPE\_VALUE | VARCHAR | IRI description of the package size |
| SEGMENT_VALUE | VARCHAR | IRI defined Segment value |
| SUB\_SEGMENT\_VALUE | VARCHAR | IRI defined Sub Segment value |
| TYPE_VALUE | VARCHAR | IRI definition based on ABV |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  

### [**EDW.IRI\_BME\_AB_SKU**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_SKU)
This table contains the lowest level and product granularity from IRI’s data model for sales by SKU level item by geography for AB and competitive products. Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the SKUs within the geographies.  

    
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | UPC level product for which the sales measures are relevant |
| VOLUME\_SALES | FLOAT | Total volume sales for the product in the geography for the given week |
| DOLLAR\_SALES| FLOAT | Total dollar sales for the product in the geography for the given week |
| PRICE\_PER\_VOLUME | FLOAT | Defined as Dollar Sales divided by Volume Sales for the product in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the product in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports a product’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION | FLOAT | This measure reports the distribution of a product aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION| FLOAT | This measure reports the distribution of a product when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the product within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the product within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING | FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING| FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME| FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS| FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  
  

  

### [**EDW.IRI_BME_AB_BRAND**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_BRAND)
This table contains the brand level sales by geography from IRI’s data model for AB and competitive products. Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the Brands within the geographies.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | Name of the brand for which the sales measures are relevant |
| VOLUME\_SALES | FLOAT | Total volume sales for the Brand in the geography for the given week |
| DOLLAR\_SALES | FLOAT | Total dollar sales for the Brand in the geography for the given week |
| PRICE\_PER\_VOLUME | FLOAT | Defined as Dollar Sales divided by Volume Sales for the Brand in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the Brand in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports a Brand’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION | FLOAT | This measure reports the distribution of a Brand aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports the distribution of a Brand when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the Brand within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the Brand within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING | FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING | FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME| FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS | FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  

  

### [**EDW.IRI\_BME_AB_BREWER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_BREWER)
This table contains the Brewer level sales by geography from IRI’s data model for AB and competitive products. Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the Brewers within the geographies.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | Name of the Brewer for which the sales measures are relevant |
| VOLUME\_SALES | FLOAT | Total volume sales for the Brewer in the geography for the given week |
| DOLLAR\_SALES | FLOAT | Total dollar sales for the Brewer in the geography for the given week |
| PRICE\_PER\_VOLUME | FLOAT | Defined as Dollar Sales divided by Volume Sales for the Brewer in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the Brewer in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports a Brewer’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION| FLOAT | This measure reports the distribution of a Brewer aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports the distribution of a Brewer when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the Brewer within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the Brewer within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING | FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING | FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME | FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS | FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  


### [**EDW.IRI\_BME_AB\_MEGA\_SEGMENT**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_MEGA_SEGMENT)
This table contains the sales measures aggregated by the five largest brewers (AB, MillerCoors, Constellation, Boston Beer, Mark Anthony) plus total beer and then categorized by AB defined Mega Segments by geography from IRI’s data model. The valid Mega Segment values are CORE & VALUE, ABOVE CORE, NON ALC, Total All Products . Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the Mega Segments within the geographies.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | Name of Brewer for which sales measures are relevant |
| AB_MEGASEGMENT | VARCHAR(255) | Name of the AB Mega Segment for which the sales measures are relevant |
| VOLUME\_SALES | FLOAT | Total volume sales for the AB Mega Segment in the geography for the given week |
| DOLLAR\_SALES| FLOAT | Total dollar sales for the AB Mega Segment in the geography for the given week |
| PRICE\_PER\_VOLUME| FLOAT | Defined as Dollar Sales divided by Volume Sales for the AB Mega Segment in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the AB Mega Segment in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION| FLOAT | This measure reports a AB Mega Segment’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION | FLOAT | This measure reports the distribution of a AB Mega Segment aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports the distribution of a AB Mega Segment when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the AB Mega Segment within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the AB Mega Segment within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING | FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING | FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME | FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS | FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  


### [**EDW.IRI\_BME_AB\_SUB\_SEGMENT**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_SUB_SEGMENT)
This table contains the sales measures aggregated by the five largest brewers (AB, MillerCoors, Constellation, Boston Beer, Mark Anthony) plus total beer and then categorized by AB defined Sub Segments by geography from IRI’s data model. There are 15 valid Sub Segment values that are a part of this data set. Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the Sub Segments within the geographies.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | Name of Brewer for which sales measures are relevant |
| AB\_SUB\_SEGMENT | VARCHAR(255) | Name of the AB Sub Segment for which the sales measures are relevant |
| VOLUME\_SALES| FLOAT | Total volume sales for the AB Sub Segment in the geography for the given week |
| DOLLAR\_SALES | FLOAT | Total dollar sales for the AB Sub Segment in the geography for the given week |
| PRICE\_PER\_VOLUME | FLOAT | Defined as Dollar Sales divided by Volume Sales for the AB Sub Segment in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the AB Sub Segment in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports a AB Sub Segment’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION | FLOAT | This measure reports the distribution of a AB Sub Segment aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports the distribution of a AB Sub Segment when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the AB Sub Segment within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the AB Sub Segment within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING| FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING | FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME | FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS | FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  

  

### [**EDW.IRI\_BME_AB_WAMP**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/IRI_BME_AB_WAMP)
This table contains the sales measures aggregated by the five largest brewers (AB, MillerCoors, Constellation, Boston Beer, Mark Anthony) plus total beer and then categorized by AB defined Weighted Average Market Price partitions by geography from IRI’s data model. There are 7 valid WAMP values (VALUE, CORE, CORE PLUS, PREMIUM, SUPER PREMIUM, BEYOND BEER, NABLAB) plus Total All Products that are a part of this data set. Included in this table are various Sales, Distribution and Execution measures tracking volume sales, dollar sales, distribution, and display information about the WAMPs within the geographies.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| TIME | DATE | Monday date of the beginning of the IRI week for which the sales measures are relevant |
| GEOGRAPHY | VARCHAR(255) | IRI Geography for which the sales measures are relevant |
| PRODUCT | VARCHAR(255) | Name of Brewer for which sales measures are relevant |
| AB_WAMP | VARCHAR(255) | Name of the AB WAMP for which the sales measures are relevant |
| VOLUME\_SALES | FLOAT | Total volume sales for the AB WAMP in the geography for the given week |
| DOLLAR\_SALES| FLOAT | Total dollar sales for the AB WAMP in the geography for the given week |
| PRICE\_PER\_VOLUME | FLOAT | Defined as Dollar Sales divided by Volume Sales for the AB WAMP in the geography for the given week |
| PRICE\_PER\_UNIT | FLOAT | Defined as Dollar Sales divided by Unit Sales for the AB WAMP in the geography for the given week |
| ACV\_WEIGHTED\_DISTRIBUTION | FLOAT | This measure reports a AB WAMP’s distribution or distribution on promotion weighted by the store size |
| TOTAL\_POINTS\_OF\_DISTRIBUTION | FLOAT | This measure reports the distribution of a AB WAMP aggregate while taking into account the number of UPCs selling within that aggregate |
| CATEGORY\_WEIGHTED\_DISTRIBUTION| FLOAT | This measure reports the distribution of a AB WAMP when taking in to account all UPCs in the category within the geography |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_FEATURE | FLOAT | This measure counts the number of features for the AB WAMP within the geography for the given week |
| NUMBER\_OF\_MERCHANDISE\_OCCURRENCES\_ANY_DISPLAY | FLOAT | This measure counts the number of displays for the AB WAMP within the geography for the given week |
| AVG\_WEEKLY\_VOLUME\_PER\_STORE\_SELLING | FLOAT | This measure counts the average volume for each store selling within the given week |
| AVG\_ITEMS\_PER\_STORE\_SELLING | FLOAT | This measure counts the average items for each store selling within the given week |
| D\_AUD\_DISPLAY\_INVENTORY\_VOLUME | FLOAT | This measure counts the audited total volume on display in the geography for the given week |
| D\_AUD\_NUMBER\_OF\_DISPLAYS | FLOAT | This measure counts the audited number of displays in the geography for the given week |
| EDW_START_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  

Published on 6/4/21 by A. Stites, Updated on 01/10/23 by Rohan Bohra.
