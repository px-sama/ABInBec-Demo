---
title: BCBU Toast POS Data
tags:
    - Stores 
    - Sales
    - Prices
    - Employee
description:  Point-Of-Sales data for our BCBU retail brewpub locations
---
# BCBU Toast POS Data

This data set is comprised of tables that contain Point-Of-Sales (POS) information for our Brewers Collective Business Unit (BCBU) retail brewpub locations. The data details both order and store information, such as checks, employees, and taxes that apply to each store. Toast, the provider for the point-of-sale hardware and software at these stores, does not allow outside companies access to their databases directly, so the data must be consumed through their API. The API call is made through Databricks through Python files, which push the data directly to ABI\_WH.TOAST\_T. The TOAST schema is where the views reside that users use to query the data.

For more information about the TOAST API call please read the [accompanying documentation](http://beertech-certified-datasets.azurewebsites.net/docs/toast_technical_documentation.docx).  

  

### **TOAST_T.ORDERS**  
This is a a dimension table that displays high-level information about orders placed from each BCBU brewpub.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | A primary key for an order |
| SOURCE | VARCHAR | Source |
| VOID_DATE | VARCHAR | Date if voided; else ‘None’ |
| DURATION | NUMBER(38,0) | Duration |
| BUSINESS_DATE | VARCHAR | Date of order in YYYYMMDD format |
| PAID_DATE | VARCHAR | Paid date |
| NUMBER\_OF\_GUESTS | NUMBER(38,0) | Number of guests |
| DELETED | BOOLEAN | Boolean; if order was voided |
| CREATED_DATE | VARCHAR | Created date |
| CLOSED_DATE | VARCHAR | Closed date |
| DELETED_DATE | VARCHAR | Deleted date; ‘1970-01-01’ if ‘None’ |
| MODIFIED_DATE | VARCHAR | Modified date |
| REVENUE\_CENTER\_GUID | VARCHAR | Used to map to a revenue center in TOAST\_T.REVENUE\_CENTERS |
| SERVER | VARCHAR | Used to map to an employee in TOAST_T.EMPLOYEES |
| DINING\_OPTION\_GUID | VARCHAR | Used to map to a dining option in TOAST\_T.DINING\_OPTIONS |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  

### **TOAST_T.CHECKS** 
A fact table that displays information on checks for each order.[](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/PROMO_PMT_LFCYC)


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | A primary key for a check |
| ENTITY_TYPE | VARCHAR | Always ‘Check’ |
| DISPLAY_NUMBER | VARCHAR | An incrementing number for the check number for that day (the 215th check would have display_number 215) |
| CHECK\_VOID\_DATE | VARCHAR | Date the check was voided; ‘None’ if not voided |
| APPLIED\_LOYALTY\_INFO | VARCHAR | Loyalty data if applied, ‘None’ if not applied |
| VOIDED | BOOLEAN | Boolean; shows if check was voided |
| AMOUNT | FLOAT | The total amount charged for the check |
| TAX_EXEMPT | BOOLEAN | Boolean; shows if check was exempt from tax |
| VOID\_BUSINESS\_DATE | VARCHAR | The business date of the check being voided; ‘None’ if not voided |
| CHECK\_CREATED\_DATE | VARCHAR | Date check was created |
| CHECK_DELETED | BOOLEAN | Boolean; shows if check was deleted |
| CHECK\_CLOSED\_DATE | VARCHAR | Date check was closed |
| CHECK\_DELETED\_DATE | VARCHAR | Date check was deleted; ‘1970-01-01’ if not |
| CHECK\_MODIFIED\_DATE | VARCHAR | Date check was last modified |
| TAX_AMOUNT | FLOAT | Tax amount applied to check |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  

### **TOAST_T.SELECTIONS** 
A fact table that displays information on selections within a menu check


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| SELECTION_GUID | VARCHAR | A primary key for selections |
| MENU\_ITEM\_GUID | VARCHAR | Used to map to a menu item in TOAST\_T.MENU\_ITEMS |
| DEFERRED | BOOLEAN | Deferred |
| PRE\_DISCOUNT\_PRICE | FLOAT | Pre-discount price |
| VOID_REASON | VARCHAR | Void reason |
| DISPLAY_NAME | VARCHAR | Display name |
| TAX_INCLUSION | VARCHAR | Tax inclusion |
| QUANTITY | FLOAT | Number of selections ordered |
| UNIT\_OF\_MEASURE | VARCHAR | Unit of measure |
| SELECTION\_CREATED\_DATE | VARCHAR | Selection created date |
| PRE_MODIFIER | VARCHAR | Pre-modifier |
| SELECTION\_MODIFIED\_DATE | VARCHAR | Selection modified date |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |

### **TOAST\_T.APPLIED\_TAXES ** 
A fact table that shows the taxes applied to an order
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| SELECTION_GUID | VARCHAR | Used to map to a selection in TOAST_T.SELECTIONS |
| APPLIED\_TAXES\_GUID | VARCHAR | A primary key for applied taxes |
| APPLIED\_TAXES\_RATE | FLOAT | The percentage value used to determine the tax amount |
| APPLIED\_TAXES\_NAME | VARCHAR | The name of the tax applied |
| APPLIED\_TAXES\_TAX_AMOUNT | FLOAT | The amount of the tax applied |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

### **TOAST_T.MODIFIERS**  
A fact table that displays information on modifiers added to selection items.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| SELECTION_GUID | VARCHAR | Used to map to a selection in TOAST_T.SELECTIONS |
| MODIFIER_GUID | VARCHAR | A primary key for a modifier |
| PRE\_DISCOUNT\_PRICE | FLOAT | Pre-discount price |
| DISPLAY_NAME | VARCHAR | Display name |
| QUANTITY | FLOAT | Quantity |
| FULFILLMENT_STATUS | VARCHAR | Fulfillment status |
| PRICE | FLOAT | Price |
| TAX | FLOAT | Tax |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

### **TOAST_T.PAYMENTS** 
Fact table that displays information about payments made towards each check.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| PAYMENT_GUID | VARCHAR | Used to map to a payment in TOAST_T.PAYMENTS |
| ENTITY_TYPE | VARCJAR | Always ‘OrderPayment’ |
| EXTERNAL_ID | VARCHAR | Always ‘None’ |
| ORIGINAL\_PROCESSING\_FEE | FLOAT | Original Processing Fee, ‘NULL’ if paid in cash |
| AMOUNT | FLOAT | Amount |
| TIP_AMOUNT | FLOAT | Tip amount |
| AMOUNT_TENDERED | FLOAT | Amount tendered, 0 if not paid in cash |
| CASH\_DRAWER\_GUID | VARCHAR | Cash drawer GUID |
| CARD_TYPE | VARCHAR | Card type |
| LAST\_MODIFIED\_DEVICE | VARHCAR | Last modified device |
| REFUND_STATUS | VARCHAR | Refund status; (‘NONE’, ‘PARTIAL’, ‘FULL’) |
| HOUSE_ACCOUNT | VARHCAR | House Account |
| TYPE | VARCHAR | Payment type |
| VOID_INFO | VARCHAR | Void info |
| OTHER_PAYMENT | VARCHAR | Other payment |
| MCA\_REPAYMENT\_AMOUNT | FLOAT | 0 or ‘NULL’ |
| CREATED_DEVICE | VARCHAR | Created Device |
| PAID_DATE | VARHCAR | Paid date |
| CARD\_ENTRY\_MODE | VARHCAR | Card Entry mode |
| PAID\_BUSINESS\_DATE | NUMBER(38,0) | Paid business date; in YYYYMMDD format |
| LAST\_4\_DIGITS | VARCHAR | Last 4 digits of credit card; ‘NULL’ if paid in cash |
| REFUND | VARCHAR | Refund |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the rows into the table |

  

### **TOAST\_T.APPLIED\_DISCOUNTS** 
A fact table that displays information about any discounts that were applied to an order.
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| APPLIED\_DISCOUNT\_GUID | VARCHAR | A primary key for applied discounts |
| APPROVER_GUID | VARCHAR | Used to map to an employee in TOAST_T.EMPLOYEES |
| ENTITY_TYPE | VARCHAR | Is always ‘AppliedCustomDiscount’ |
| NAME | VARCHAR | Name of the discount type |
| DISCOUNT_AMOUNT | FLOAT | Amount of the discount |
| APPLIED\_PROMO\_CODE | VARCHAR | Code that the approver inputs for the corresponding discount |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCAHR | Corresponds to the user that inserted the row into the table |

  

### **TOAST\_T.APPLIED\_SERVICE_CHARGES** 
A fact table that displays information about any service charges that were applied to an order.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ORDER_GUID | VARCHAR | Used to map to an order in TOAST_T.ORDERS |
| CHECK_GUID | VARCHAR | Used to map to a check in TOAST_T.CHECKS |
| APPLIED\_SERVICE\_CHARGE_GUID | VARCHAR | A primary key for applied service charges |
| CHARGE_TYPE | VARCHAR | Type of calculation that is used to determine the service charge |
| NAME | VARCHAR | Name of the service charge |
| GRATUITY | BOOLEAN | Boolean; shows if gratuity was applied to service charge |
| CHARGE_AMOUNT | FLOAT | Amount of the service charge |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

### **TOAST_T.RESTAURANTS**
This is a dimension table that contains information on each BCBU brewpub set up as a restaurants within Toast.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Primary key for restaurants |
| NAME | VARCHAR | Restaurant name |
| LOCATION_NAME | VARCHAR | Restaurant location |
| LOCATION_CODE | VARCHAR | Location code |
| DESCRIPTION | VARCHAR | Description |
| TIME_ZONE | VARCHAR | Time zone |
| CLOSEOUT_HOUR | VARCHAR | Closeout hour |
| MANAGEMENT\_GROUP\_GUID | VARCHAR | Management group GUID |
| WEBSITE_LINK | VARCHAR | Website link |
| FACEBOOK_LINK | VARCHAR | Facebook link |
| TWITTER_LINK | VARCHAR | Twitter link |
| ORDER\_ONLINE\_LINK | VARCHAR | Order online link |
| PURCHASE\_GIFT\_CARD_LINK | VARCHAR | Purchase gift card link |
| CHECK\_GIFT\_CARD_LINK | VARCHAR | Check gift card link |
| ADDRESS1 | VARCHAR | Address1 |
| ADDRESS2 | VARCHAR | Adress2 |
| CITY | VARCHAR | City |
| STATE | VARCHAR | State |
| ZIP | VARCHAR | Zip |
| COUNTRY | VARCHAR | Country |
| PHONE | VARCHAR | Phone |
| LATITUDE | FLOAT | Latitude |
| LONGITUDE | FLOAT | Longitude |
| DELIVERY_ENABLED | BOOLEAN | Delivery enabled |
| DELIVERY_MINIMUM | VARHCAR | Delivery minimum |
| DELIVERY_AREA | VARCHAR | Delivery area |
| ONLINE\_ORDERING\_ENABLED | BOOLEAN | Online ordering enabled |
| ONLINE\_ORDERING\_SCHEDULING | BOOLEAN | Online ordering scheduling |
| ONLINE\_ORDERING\_SPECIAL_REQUESTS | BOOLEAN | Online ordering special requests |
| ONLINE\_ORDERING\_SPECIAL\_REQUESTS\_MESSAGE | VARCHAR | Online ordering special requests message |
| ONLINE\_ORDERING\_PAYMENT\_DELIVERY\_CASH | BOOLEAN | Online ordering payment delivery cash |
| ONLINE\_ORDERING\_PAYMENT\_DELIVERY\_CC\_SAME\_DAY | BOOLEAN | Online ordering payment delivery credit card same day |
| ONLINE\_ORDERING\_PAYEMNT\_DELIVERY\_CC_FUTURE | BOOLEAN | Online ordering payment delivery credit card future |
| ONLINE\_ORDERING\_PAYMENT\_TAKEOUT\_CASH | BOOLEAN | Online ordering payment takeout cash |
| ONLINE\_ORDERING\_PAYMENT\_TAKEOUT\_CC\_SAME\_DAY | BOOLEAN | Online ordering payment takeout credit card same day |
| ONLINE\_ORDERING\_PAYMENT\_TAKEOUT\_CC_FUTURE | BOOLEAN | Online ordering payment takeout credit card future |
| ONLINE\_ORDERING\_PAYMENT\_TAKEOUT\_CC\_IN\_STORE | BOOLEAN | Online ordering payment takeout credit card in-store |
| ONLINE\_ORDERING\_PAYMENT\_CC\_TIP | BOOLEAN | Online ordering payment credit card tip |
| PREP\_TIMES\_DELIVERY\_PREP\_TIME | NUMBER(38,0) | Prep times delivery prep time |
| PREP\_TIMES\_DELIVERY\_TIME\_AFTER_OPEN | NUMBER(38,0) | Prep times delivery time after open |
| PREP\_TIMES\_DELIVERY\_TIME\_BEFORE_CLOSE | NUMBER(38,0) | Prep times delivery time before close |
| PREP\_TIMES\_TAKEOUT\_PREP\_TIME | NUMBER(38,0) | Prep times takeout prep time |
| PREP\_TIMES\_TAKEOUT\_TIME\_AFTER_OPEN | NUMBER(38,0) | Prep times takeout time after open |
| PREP\_TIMES\_TAKEOUT\_TIME\_BEFORE_CLOSE | NUMBER(38,0) | Prep times takeout time before close |
| PREP\_TIMES\_TAKEOUT\_THROTTLING\_TIME | NUMBER(38,0) | Prep times takeout throttling time |
| PREP\_TIMES\_DELIVERY\_THROTTLING\_TIME | NUMBER(38,0) | Prep times delivery throttling time |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponding with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponding with the user that inserted the row into the table |

  
  
### **TOAST\_T.RESTAURANTS\_SCHEDULES** 
A dimension table that displays information on the schedules each brewpub operates under.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| SCHEDULE_NAME | VARCHAR | Schedule name |
| SERVICE_NAME | VARCHAR | Service name |
| SERVICE\_START\_TIME | VARCHAR | Service start time |
| SERVICE\_END\_TIME | VARCHAR | Service end time |
| SERVICE_OVERNIGHT | BOOLEAN | Service overnight |
| SCHEDULE\_OPEN\_TIME | VARCHAR | Schedule open time |
| SCHEDULE\_CLOSE\_TIME | VARCHAR | Schedule close time |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time that the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |

  
  
### **TOAST_T.EMPLOYEES** 
This is a dimension table that contains information on employees at each BCBU brewpub represented by an entry on the RESTAURANTS table  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| EMPLOYEE_GUID | VARCHAR | A primary key for an employee |
| ENTITY_TYPE | VARCHAR | Always ‘RestaurantUser’ |
| EXTERNAL_ID | VARCHAR | Always ‘None’ |
| LAST_NAME | VARCHAR | Last name |
| FIRST_NAME | VARCHAR | First name |
| CREATED_DATE | VARCHAR | Date row was created |
| DELETED | BOOLEAN | Boolean; shows if employee is no longer employed |
| DELETED_DATE | VARCHAR | Date DELETED changed to TRUE; ‘1970-01-01’ if FALSE |
| MODIFIED_DATE | VARCHAR | Last date row was modified |
| DISABLED | BOOLEAN | Boolean; |
| EXTERNAL\_EMPLOYEE\_ID | VARCHAR | ID for external employees |
| EMAIL | VARCHAR | Email |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.TIME\_ENTRIES** 
This is a fact table that displays information on clock-in and clock-out times for each employee at each brewpub.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| TIME_GUID | VARCHAR | A primary key for time entries |
| EMPLOYEE_GUID | VARCHAR | Used to map to an employee in TOAST_T.EMPLOYEES |
| ENTITY_TYPE | VARCHAR | Always ‘TimeEntry’ |
| EXTERNAL_ID | VARCHAR | Always ‘None’ |
| NON\_CASH\_SALES | FLOAT | Non-cash sales |
| OUT_DATE | VARCHAR | Out date |
| OVERTIME_HOURS | FLOAT | Overtime hours worked |
| BREAKS | VARCHAR | Breaks |
| SHIFT_REFERENCE | VARCHAR | Shift reference |
| NON\_CASH\_GRATUITY\_SERVICE\_CHARGES | FLOAT | Non-cash gratuity service charges |
| IN_DATE | VARCHAR | In date |
| REGULAR_HOURS | FLOAT | Regular Hours worked |
| TIPS_WITHHELD | FLOAT | Tips withheld |
| BUSINESS_DATE | VARCHAR | Business date in format ‘YYYYMMDD’ |
| CASH\_GRATUITY\_SERVICE_CHARGES | FLOAT | Cash gratuity service charges |
| CREATED_DATE | VARCHAR | Created date |
| DELETED | BOOLEAN | Deleted |
| CASH_SALES | FLOAT | Cash sales |
| HOURLY_WAGE | FLOAT | Hourly wage |
| NON\_CASH\_TIPS | FLOAT | Non-cash tips |
| MODIFIED_DATE | VARCHAR | Modified date |
| DECLARED\_CASH\_TIPS | FLOAT | Declared cash tips |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |

  
  
  
### **TOAST\_T.CASH\_MANAGEMENT** 
This is a fact table that contains information on cash transactions for each brewpub.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| CASH_GUID | VARCHAR | A primary key for cash transaction |
| ENTITY_TYPE | VARCHAR | Always ‘CashEntry’ |
| DATE | VARCHAR | Date of the transaction |
| REASON | VARCHAR | User input for why the transaction has occurred |
| AMOUNT | FLOAT | Amount of the transaction |
| EMPLOYEE1_GUID | VARCHAR | Used to map to an employee in TOAST_T.EMPLOYEES |
| TYPE | VARCHAR | Category of transaction |
| EMPLOYEE2_GUID | VARCHAR | Used to map to an employee in TOAST_T.EMPLOYEES |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST_T.MENUS** 
This is a dimension table that contains information on individual menus at each of the BCBU brewpubs.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| NAME | VARCHAR | Menu name |
| MENU_GUID | VARCHAR | A primary key for a menu |
| MASTER_ID | NUMBER(38,0) | Master ID |
| DESCRIPTION | VARCHAR | Description |
| HIGH\_RES\_IMAGE | VARCHAR | Always ‘None’ |
| IMAGE | VARCHAR | Web address for the menu image; ‘None’ if no image |
| VISIBILITY | VARIANT | Where the menu can be seen |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.MENUS\_META** 
A dimension table that displays when each brewpub last updated a menu.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| LAST_UPDATED | VARCHAR | Most recent date a menu was modified |
| RESTAURANT\_TIME\_ZONE | VARCHAR | Restaurant time zone |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.MENU\_GROUPS** 
A dimension table that maps menu groups to menus for each.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| MENU_GUID | VARCHAR | Used to map to a menu in TOAST_T.MENUS |
| NAME | VARCHAR | Menu group name |
| MENU\_GROUP\_GUID | VARCHAR | A primary key for a menu group |
| DESCRIPTION | VARCHAR | Description |
| IMAGE | VARCHAR | Web address for the menu group image; ‘None’ if no image |
| VISIBILITY | VARIANT | Where the menu group can be seen |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.MENU\_GROUP_TAGS** 
A dimension table that displays what tags are associated with each menu group.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| MENU_GUID | VARCHAR | Used to map to a menu in TOAST_T.MENUS |
| MENU\_GROUP\_GUID | VARCHAR | Used to map to a menu group in TOAST\_T.MENU\_GROUPS |
| MENUG\_GROUP\_TAG_GUID | VARCHAR | A primary key for a menu group tag |
| MENU\_GROUP\_TAG_NAME | VARCHAR | Menu group tag name |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.MENU\_ITEMS** 
A dimension table that contains information about each menu item  
   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| MENU_GUID | VARCHAR | Used to map to a menu in TOAST_T.MENUS |
| MENU\_GROUP\_GUID | VARCHAR | Used to map to a menu group in TOAST\_T.MENU\_GROUPS |
| MENU\_ITEM\_GUID | VARCHAR | A primary key for a menu item |
| NAME | VARCHAR | Name |
| MASTER_ID | NUMBER(38,0) | Master ID |
| DESCRIPTION | VARCHAR | Description |
| IMAGE | VARCHAR | Web address for the menu image; ‘None’ if no image |
| VISIBILITY | VARIANT | Where the menu can be seen |
| PRICE | FLOAT | Price |
| PRICING_STRATEGY | VARCHAR | Pricing strategy |
| PRICING_RULES | VARCHAR | Pricing rules |
| IS_DISCOUNTABLE | BOOLEAN | Boolean; if discounts can be applied |
| PLU | VARCHAR | PLU |
| SKU | VARCHAR | SKU |
| CALORIES | VARCHAR | Calories |
| UNIT\_OF\_MEASURE | VARCHAR | Always ‘ NONE’ |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.MENU\_ITEM_TAGS** 
A dimension table that shows the tags available to each menu item.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| MENU_GUID | VARCHAR | Used to map to a menu in TOAST_T.MENUS |
| MENU\_GROUP\_GUID | VARCHAR | Used to map to a menu group in TOAST\_T.MENU\_GROUPS |
| MENU\_ITEM\_GUID | VARCHAR | Used to map to a menu item in TOAST\_T.MENU\_ITEMS |
| MENU\_ITEM\_TAG_GUID | VARCHAR | A primary key for a menu item tag |
| MENU\_ITEM\_TAG_NAME | VARHCAR | Menu item tag name |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
### **TOAST\_T.RESTAURANT\_GROUPS** 
This is a dimension table that provides the mapping of each restaurant (brewpub) to its applicable group (brewery). Each brewery group is defined by a 4 character value in the RESTAURANT_GROUP field.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| RESTAURANT_GROUP | VARCHAR | Restaurant group |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |

  
  
### **TOAST\_T.ALTERNATE\_PAYMENTS**
A dimension table to map alternate\_payment\_guid to a word-based payment method.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| ALTERNATE\_PAYEMNT\_GUID | VARCHAR | A primary key for alternate payments |
| NAME | VARCHAR | Name of the alternate payment type |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.DINING\_OPTIONS**
A dimension table that shows the available seating for each restaurant.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| DINING_GUID | VARCHAR | A primary key for a dining option |
| NAME | VARCHAR | The name of the dining option |
| CURBSIDE | BOOLEAN | Boolean; shows if curbside is available for the dining option; always ‘FALSE’ |
| BAHAVIOR | VARCHAR | ‘DELIVERY’, ‘DINE\_IN’, ‘TAKE\_OUT’, or ‘NULL’ |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST_T.DISCOUNTS**
A dimension table that displays information on the discounts available at each brewpub.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| DISCOUNTS_GUID | VARCHAR | A primary key for a discount |
| AMOUNT | FLOAT | Amount of discount if amount is fixed; else ‘NULL’ |
| SELECTION_TYPE | VARCHAR | The hierarchy level at which the discount will be applied |
| NON_EXCLUSIVE | BOOLEAN | Boolean; shows if discount is non-exclusive |
| PERCENTAGE | FLOAT | Percentage of amount that the selection_type is reduced by if the discount is a percentage-type |
| NAME | VARCHAR | Name of the discount |
| ACTIVE | BOOLEAN | Boolean; shows if discount is active |
| ITEM\_PICKING\_PRIORITY | VARCHAR | The selection that will have the discount applied |
| TYPE | VARCHAR | Categorical description of discount |
| FIXED_TOTAL | VARCHAR | Fixed total |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST_T.INVENTORY** 
A fact table that displays inventories at each restaurant  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| INVENTORY_GUID | VARCHAR | A primary key for each row in TOAST_T.INVENTORY |
| STATUS | VARCHAR | Status of the item |
| QUANTITY | FLOAT | Amount of the item if in stock |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST_T.JOBS** 
A dimension table that displays information on positions at each brewpub.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| JOBS_GUID | VARCHAR | A primary key for each job |
| ENTITY_TYPE | VARCHAR | Always ‘RestaurantJob’ |
| EXTERNAL_ID | VARCHAR | Always ‘None’ |
| CREATED_DATE | VARCHAR | Date job was created |
| DELETED | BOOLEAN | Boolean; if job was deleted |
| CODE | VARCHAR | Job code |
| DELETED_DATE | VARCHAR | Date job was deleted; ‘1970-01-01’ if FALSE |
| MODIFIED_DATE | VARCHAR | Last date job information was modified |
| TIPPED | BOOLEAN | Boolean; if job received tips |
| TITLE | VARCHAR | Title of job |
| DEFAULT_WAGE | FLOAT | Default wage |
| WAGE_FREQUENCY | VARCHAR | Rate at which wage is paid |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.NO\_SALE_REASONS**
A dimension table that displays information on voided sales

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| NO\_SALE\_GUID | VARHCAR | A primary key for a no-sale transaction |
| NAME | VARCHAR | Name |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
  
### **TOAST\_T.PAYOUT\_REASONS** 
A dimension table that displays information on payouts for each restaurant.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| PAYOUT_GUID | VARCHAR | A primary key for payouts |
| NAME | VARCHAR | Name |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds to the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds to the user that inserted the row into the table |

  
  
### **TOAST\_T.PRE\_MODIFIERS**
A fact table that displays information on pre-modifiers to menu selections. A pre-modified could be items such as extra pickles on a sandwich, no bun option, etc.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| PRE\_MODIFIER\_GUID | VARCHAR | A primary key for pre-modifiers |
| PARENT_GUID | VARCHAR | Parent guid |
| SCALE_PRICE | BOOLEAN | Scale price |
| SCALE_FACTOR | FLOAT | Scale factor |
| NAME | VARCHAR | Name |
| DISPLAY_MODE | VARCHAR | Display mode |
| BASE_PRICE | FLOAT | Base price |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted rows into the table |

  
  
### **TOAST\_T.REVENUE\_CENTERS**
A dimension table that displays information for each revenue centers.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| REVENUE\_CENTER\_GUID | VARCHAR | A primary key for a revenue center |
| NAME | VARCHAR | Name |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |

  
  
  
### **TOAST\_T.SERVICE\_CHARGES**
A dimension table that displays information on service charges for each brewpub.
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to arestaurant in TOAST_T.RESTAURANTS |
| SERVICE\_CHARGES\_GUID | VARCHAR | A primary key for service charges |
| AMOUNT_TYPE | VARCHAR | Amount type |
| AMOUNT | VARCHAR | Amount |
| TAXABLE | BOOLEAN | Taxable |
| SERVICE\_CHARGE\_CALCULATION | VARCHAR | Service charge calculation |
| MIN\_CHECK\_AMOUNT | FLOAT | Min check amount |
| DELIVERY | BOOLEAN | Delivery |
| MAX\_CHECK\_AMOUNT | VARCHAR | Max check amount |
| MIN\_DELIVERY\_DISTANCE | VARCHAR | Min delivery distance |
| TAKEOUT | BOOLEAN | Takeout |
| APPLICABLE\_TAXES\_GUID | VARCHAR | Used to map to an applicable tax in TOAST\_T.APPLICABLE\_TAXES |
| NAME | VARCHAR | Name |
| GRATUITY | BOOLEAN | Gratuity |
| PERCENT | FLOAT | Percent |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted rows into the table |

  
  
  
### **TOAST_T.TAXES**
A dimension table that displays information about taxes charged at each brewpub.
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RESTAURANT_GUID | VARCHAR | Used to map to a restaurant in TOAST_T.RESTAURANTS |
| TAX\_RATES\_GUID | VARCHAR | A primary key for taxes |
| IS_DEFAULT | BOOLEAN | Is default |
| CONDITIONAL\_TAX\_RATES | VARCHAR | Conditional tax rates |
| TAX_TABLE | VARCHAR | Tax table |
| RATE | FLOAT | Rate |
| ROUNDING_TYPE | VARCHAR | Rounding type |
| NAME | VARCHAR | Tax name |
| TYPE | VARCHAR | Type |
| MOD_TSP | TIMESTAMP_NTZ(9) | Corresponds with the time that the row was inserted into the table |
| MOD_USER | VARCHAR | Corresponds with the user that inserted the row into the table |




Published on 05/12/21 by A. Stites, content by J. Camacho
