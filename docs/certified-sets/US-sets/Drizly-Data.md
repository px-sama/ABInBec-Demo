---
title: Drizly Data
tags:
    - Application Data 
    - Retail
    - Transactions
description: Transactional and product inventory data from Drizly
---
# Drizly Data

Drizly is a mobile/web application that allows users to order alcohol for delivery. Orders are paired with retail stores based on which stores have the purchased products in stock. Delivery driver(s) then deliver the purchased products to the consumer.

The Drizly data set is comprised of two tables and two views. The first contains transactional sales data about products purchased by consumers for delivery via Drizly by retail location. The second is product inventory data at the store level. This data is shared directly from Drizly to AB via Snowflake and is updated daily at 7a EST. There are two Snowflake tasks that run at 9:30a EST, which update the underlying base tables that populate views made available to users in EDW.  
  

### [**EDW.DRIZLY\_STORE\_ORDER_ITEMS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/DRIZLY_STORE_ORDER_ITEMS)
This view contains transaction-level data for consumer purchases made through the Drizly application. Each record represents the line items of a specific Drizly order with information about the retailer fulfilling the order and the amount of product purchased along with price paid by the consumer and if the product was purchased using a discount code.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| STORE\_ORDER\_ID | NUMBER(38,0) | Store Order ID (distinct per order) |
| STORE_ID | NUMBER(38,0) | Drizly Store ID (distinct per store) |
| STORE_ZIPCODE | VARCHAR(7) | Store zip code |
| STORE_DMA | VARCHAR(300) | Store DMA (Designated Marketing Area) |
| STORE_MARKET | VARCHAR(255) | Store market (greater city area) |
| DELIVERY_CITY | VARCHAR(255) | Delivery city, multiple delivery cities can be a part of one STORE_MARKET |
| DELIVERY_STATE | VARCHAR(765) | State where the delivery occurred |
| DELIVERY_ZIPCODE | VARCHAR(255) | Zip code where the delivery occurred |
| IS_GIFT | BOOLEAN | Was this purchase made with a gift card? |
| DEVICE | VARCHAR(255) | Type of device on which the order was made |
| IS\_CORPORATE\_USER | BOOLEAN | Is the order classified as corporate? |
| IS_FRADULENT | BOOLEAN | Is the order classified as fraudulent? |
| PLACED\_BY\_ADMIN_USER | BOOLEAN | Was the order placed by a Drizly admin user? |
| UNIT_PRICE | NUMBER(10,2) | Price per unit |
| QUANTITY | NUMBER(38,0) | Total units |
| CASE\_VOLUME\_9_LITER | NUMBER(38,12) | Order volume as measured per 9L case volume |
| CASE\_VOLUME\_288_OZ | NUMBER(38,12) | Order volume as measured per 288oz case volume |
| GMV | NUMBER(38,2) | Total sale (UNIT_PRICE * QUANTITY) |
| MASTER\_ITEM\_ID | NUMBER(38,0) | Drizly Master Item ID (distinct per master item) |
| MASTER\_ITEM\_NAME | VARCHAR(16777216) | Master item name (RAW_ITEM + quantity and container count) |
| RAW\_ITEM\_NAME | VARCHAR(256) | Master item name minus quantity and container count |
| VERIFIED_UPC | VARCHAR(255) | UPC code |
| ITEM_ID | NUMBER(38,0) | Drizly Item ID (distinct per item) |
| CONTAINER_QTY | NUMBER(38,0) | Number of containers per package |
| CONTAINER_TYPE | VARCHAR(255) | Type of container (can, bottle…etc.) |
| VOLUME | NUMBER(6,2) | Volume per container |
| VOLUME_UNITS | VARCHAR(255) | Units of volume |
| VINTAGE | NUMBER(38,0) | Year the product was received |
| CATALOG\_ITEM\_ID | NUMBER(38,0) | Distinct ID from Drizly’s internal catalog |
| CATALOG\_ITEM\_NAME | VARCHAR(255) | Item name from Drizly’s internal catalog |
| TOP\_LEVEL\_CATEGORY | VARCHAR(255) | Greater category (beer, wine, liquor, extras) |
| SUBCATEGORY | VARCHAR(255) | Subcategory (Lite Beer, lager, Stout…etc.) |
| TOP_SUBCATEGORY | VARCHAR(255) | Greater subcategory (wine, rum, tequila, beer, cider…etc.) |
| VARIETAL | VARCHAR(16777216) | Wine grape variety (applies only to wine) |
| WINE_BLEND | VARCHAR(16777216) | Provides information on blend if type is wine |
| BRAND_ID | NUMBER(38,0) | Drizly Brand ID (distinct per brand) |
| BRAND_NAME | VARCHAR(255) | Brand name |
| COMPANY_ID | NUMBER(38,0) | Drizly Company ID (distinct per company) |
| COMPANY_NAME | VARCHAR(255) | Company name |
| PROMO_CODE | VARCHAR(255) | Drizly promo code used for transaction |
| PROMO\_CODE\_DESCRIPTION | VARCHAR(255) | Text description of promo code used |
| DELIVERED\_AT\_UTC | TIMESTAMP_NTZ(9) | Delivery time (UTC) |
| DELIVERED\_DATE\_UTC | DATE | Delivery date (UTC) |
| DELIVERED\_AT\_LOCAL | TIMESTAMP_NTZ(9) | Delivery time (Local) |
| DELIVERED\_DATE\_LOCAL | DATE | Delivery date (Local) |
| FULFILMENT_TYPE | VARCHAR(16777216) | Fulfilment type (on demand delivery, scheduled, shipping…etc.) |
| NEW\_VS\_RETURNING | VARCHAR(9) | Is the customer new or returning? |

  

  

### [**EDW.DRIZLY\_PRODUCT\_AVAILABILITY _REPORT**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/DRIZLY_PRODUCT_AVAILABILITY_REPORT)
This view contains product inventory data at the store level directly from Drizly. Each record represents a unique item at each retailer fulfilling Drizly orders and provides detail on if the product is currently in stock and if so how many units remain.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| STORE_ID | NUMBER(38,0) | Drizly Store ID (distinct per store) |
| STORE_NAME | VARCHAR(16777216) | Store name |
| STORE\_TDLINX\_ID | VARCHAR(16777216) | TDLinx number assigned to the store |
| STORE_DMA | VARCHAR(300) | Store DMA (Designated Marketing Area) |
| STORE_MARKET | VARCHAR(255) | Store market (greater city area) |
| STORE_ZIPCODE | VARCHAR(7) | Store Zip Code |
| STORE_CITY | VARCHAR(256) | Store City Name |
| STORE_STATE | VARCHAR(6) | Store State |
| STORE_ADDRESS | VARCHAR(256) | Store Address |
| MASTER\_ITEM\_ID | NUMBER(38,0) | Drizly master ID |
| VERIFIED_UPC | VARCHAR(255) | Product ID, verified by Drizly |
| MASTER\_ITEM\_NAME | VARCHAR(16777216) | Item name (CATALOG\_ITEM\_NAME \+ quantity and container count) |
| CATALOG\_ITEM\_ID | NUMBER(38,0) | Distinct ID from Drizly’s internal catalog |
| CATALOG\_ITEM\_NAME | VARCHAR(255) | Item name from Drizly’s internal catalog |
| COMPANY_NAME | VARCHAR(255) | Company name |
| COMPANY_ID | NUMBER(38,0) | Drizly Company ID (distinct per company) |
| BRAND_ID | NUMBER(38,0) | Drizly Brand ID (distinct per brand) |
| BRAND_NAME | VARCHAR(255) | Brand name |
| TOP\_LEVEL\_CATEGORY | VARCHAR(255) | Item category (beer, wine, liquor, extras) |
| CONTAINER_QTY | NUMBER(38,0) | Number of containers |
| CONTAINER_TYPE | VARCHAR(255) | Container type (bottle, can…etc.) |
| VOLUME | NUMBER(6,2) | Volume |
| VOLUME_UNITS | VARCHAR(255) | Volume units |
| VINTAGE | NUMBER(38,0) | Year the product was received |
| QUANTITY_LEFT | NUMBER(38,0) | Sellable units left at the retailer |
| SHOW\_IN\_CATALOG | BOOLEAN | Flag to indicate if product should be displayed to users while browsing the catalog |
| STOCK_STATUS | VARCHAR(16777216) | Value to indicate if product is in stock or not |
| FEED_TYPE | VARCHAR(255) | How is the inventory taken? (auto, manual, partial) |
| INVENTORY_TYPE | VARCHAR(18) | TOP_CATEGORY products carried (beer, wine, liquor) |
| IS\_SHIPPING\_STORE | BOOLEAN | Does the store ship products? |
| MASTER\_ITEM\_STATE\_GMV\_L30D | NUMBER(38,2) | Total item sales per state over the past 30 days |
| STORE\_SESSIONS\_L30D | NUMBER(18,0) | Number of app sessions per store over the past 30 days |

  

  

  

Published on 6/11/21 by A. Stites with content by J. Yurcho
