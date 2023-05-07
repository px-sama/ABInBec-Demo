---
title: Wholesaler
tags:
    - Wholesaler
    - Product
description: Defines valid wholesalers within our enterprise data warehouse
---
# Wholesaler  

This data set is comprised of the views that define valid wholesalers within our enterprise data warehouse. The most well known records in these views represent the independent 3rd party and company owned wholesalers that distribute Anheuser-Busch product in the United States. However, the wholesaler views define a large number of other entities including Military locations, Breweries, International Export locations and others warehouses that receive and sell our product. These views are vital to identifying and tying any data related to AB product (Sales, Distribution, Shipments, Inventory, etc) back to the wholesaler warehouse from which it was shipped, sold or reported. These will be your primary views to identify wholesalers for any reporting purposes.

  

### **[EDW.WSLR_DM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/WSLR_DM)**
This view is known as Wholesaler Dimension because it brings many of the descriptive attributes (or dimensions) of a wholesaler from many different tables in to a single view _making this the primary view to used when creating any reports involving wholesaler_. In this view you'll find general information about a wholesaler such as name, address, and contact info and ownership details but also Sales and Logistics specific attributes. For the Sales team attributes of interest are the Region assignment, Sales employee assignments for the Commercial Director and Commercial Manager and the MCA assignment. For the Logistics team the primary Source Brewery,  primary delivery transportation type and Inventory Coordinator assignments would be of interest.  

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for a wholesaler. |
| WSLR_NBR | VARCHAR(5) | Unique 5 digit code for a wholesaler using for most reporting systems |
| WSLR_NM | VARCHAR(100) | Name of the wholesaler |
| WSLR\_TYP\_CD | VARCHAR(2) | Identifies the type of wholesaler |
| WSLR\_TYP\_DSC | VARCHAR(250) | A description for the wholesaler type. |
| MCA_CD | VARCHAR(3) | Unique identifier for a Media Coverage Area. |
| MCA_NM | VARCHAR(100) | Name of a Media Coverage Area. Usually the name of a metropolitan area. |
| SRCE\_BRWY\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that ships to the wholesaler |
| SRCE\_BRWY\_CD | VARCHAR(4) | Code to ID the primary brewery that ships to the wholesaler. |
| SRCE\_BRWY\_NM | VARCHAR(100) | Name of the primary brewery that ships to the wholesaler. |
| FOB\_BRWY\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that prices product for wholesaler. FOB (freight on board) is the frontline price to the wholesaler. |
| FOB\_BRWY\_CD | VARCHAR(4) | Code to ID the primary brewery that prices products for the wholesaler. FOB (freight on board) is the frontline price to the wholesaler. |
| FOB\_BRWY\_NM | VARCHAR(100) | Name of the primary brewery that prices products for the wholesaler. FOB (freight-on-board) is the frontline price to the wholesaler. |
| INVTY\_PLAN\_BRWY\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that plans the inventory for a wholesaler |
| INVTY\_PLAN\_BRWY_CD | VARCHAR(4) | Code to ID the primary brewery that plans the inventory for the wholesaler. |
| INVTY\_PLAN\_BRWY_NM | VARCHAR(100) | Name of the primary brewery that plans the inventory for the wholesaler. |
| WSLR\_INVTY\_COORD_CD | VARCHAR(2) | A code that represents the Inventory Coordinator for the wholesaler. |
| WSLR\_INVTY\_COORD_NM | VARCHAR(100) | A name for the Inventory Coordinator for the wholesaler. |
| MH\_WSLR\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for a wholesaler (mainhouse) or parent wholesaler. |
| MH\_WSLR\_NBR | VARCHAR(5) | Unique 5 digit code for a wholesaler also known as the mainhouse number. |
| PRI\_TRNSPRT\_MODE_CD | VARCHAR(1) | Code for transportation type |
| PRI\_TRNSPRT\_MODE_NM | VARCHAR(100) | Descriptive name for transportation type |
| EAST\_REGN\_RR_FLG | VARCHAR(1) | A flag indicating that the brewery customer uses the East Region Railroad. |
| AB\_PROD\_EXCL_FLG | VARCHAR(1) | Field formally used to track wholesaler exclusivity which AB no longer tracks. |
| PPD\_SHPMT\_CD | VARCHAR(1) | Pre-paid shipment code |
| MIL\_BRKOUT\_CD | VARCHAR(1) | Provides military sales reporting broken into appropriate groups. The following codes are used: N = North, S = South, E = Europe/Atlantic, A = Asia/Pacific, O = Other Overseas. |
| MIL\_BRKOUT\_NM | VARCHAR(100) | Military Breakout group name (e.g., North, South, Europe/Atlantic, Asia/Pacific, Other Overseas) |
| ALPHA\_ADMIN\_CD | VARCHAR(3) | A one to three digit alphabetic code that represents the region roster position. |
| SLS\_REGN\_CD | VARCHAR(2) | The two-digit numeric code representing the Sales Region (VP level). |
| SLS\_REGN\_NM | VARCHAR(100) | The name of the wholesaler's Sales Region |
| SLS\_DIRCTR\_CD | VARCHAR(2) | The two-digit numeric code representing the Commercial Director |
| SLS\_DIRCTR\_NM | VARCHAR(100) | The name of the Commercial Director |
| RTL\_SLS\_MGR_CD | VARCHAR(2) | The two-digit numeric code representing the Commercial Manager. |
| RTL\_SLS\_MGR_NM | VARCHAR(100) | The name of the Commercial Manager. |
| SERV\_CNTR\_BRWY\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that services the wholesaler for lower volume products |
| SERV\_CNTR\_BRWY_CD | VARCHAR(4) | Code to ID the primary brewery that services the wholesaler for lower volume products. |
| SERV\_CNTR\_BRWY_NM | VARCHAR(100) | Name of the primary brewery that services the wholesaler for lower volume products. |
| BUDNET\_ACTV\_FLG | VARCHAR(1) | Identifies whether this wholesaler receives sales through BudNET |
| WSLR\_ACTV\_FLG | VARCHAR(1) | Identifies whether the wholesaler is active or not. |
| SLS\_START\_TSP | TIMESTAMP_NTZ(9) | The date and time that the brewery customer started making sales. |
| REGN\_VICE\_PRES_NM | VARCHAR(100) | The name of the Sales Region VP. |
| WSLR\_PRNCPL\_1\_CNTCT\_ID | NUMBER(15,0) | Uniquely identifies the Wholesaler contact for the first principal on the wholesaler account. |
| WSLR\_PRNCPL\_1\_CNTCT\_NM | VARCHAR(100) | Name of the person listed as the first principal on the wholesaler account. |
| WSLR\_PRNCPL\_1\_CNTCT\_TITLE_TXT | VARCHAR(100) | Title of the person listed as the first principal on the wholesaler account. |
| WSLR\_PRNCPL\_2\_CNTCT\_ID | NUMBER(15,0) | Uniquely identifies the Wholesaler contact for the second principal on the wholesaler account. |
| WSLR\_PRNCPL\_2\_CNTCT\_NM | VARCHAR(100) | Name of the person listed as the second principal on the wholesaler account. |
| WSLR\_PRNCPL\_2\_CNTCT\_TITLE_TXT | VARCHAR(100) | Title of the person listed as the second principal on the wholesaler account. |
| WSLR\_PRNCPL\_3\_CNTCT\_ID | NUMBER(15,0) | Uniquely identifies the Wholesaler contact for the thrid principal on the wholesaler account. |
| WSLR\_PRNCPL\_3\_CNTCT\_NM | VARCHAR(100) | Name of the person listed as the third principal on the wholesaler account. |
| WSLR\_PRNCPL\_3\_CNTCT\_TITLE_TXT | VARCHAR(100) | Title of the person listed as the thrid principal on the wholesaler account. |
| TEL_NBR | VARCHAR(10) | Wholesaler Telephone number |
| FAX_NBR | VARCHAR(10) | Wholesaler Fax number |
| SHP\_TO\_WSLR_NM | VARCHAR(100) | Name of wholesaler listed as the ship-to address. |
| SHP\_TO\_WSLR\_ADDR\_1_TXT | VARCHAR(100) | Address line 1 for wholesaler ship-to address. |
| SHP\_TO\_WSLR\_ADDR\_2_TXT | VARCHAR(100) | Address line 2 for wholesaler ship-to address. |
| SHP\_TO\_WSLR\_ADDR\_3_TXT | VARCHAR(100) | Address line 3 for wholesaler ship-to address. |
| SHP\_TO\_WSLR\_CITY\_NM | VARCHAR(100) | City for wholesaler ship-to address. |
| SHP\_TO\_WSLR\_ST\_CD | VARCHAR(2) | State for wholesaler ship-to address. |
| SHP\_TO\_WSLR\_POSTAL\_CD | VARCHAR(5) | Postal code for wholesaler ship-to address. |
| MAIL\_TO\_WSLR_NM | VARCHAR(100) | Name of wholesaler listed as the mail-to address. |
| MAIL\_TO\_WSLR\_ADDR\_1_TXT | VARCHAR(100) | Address line 1 for wholesaler mail-to address. |
| MAIL\_TO\_WSLR\_ADDR\_2_TXT | VARCHAR(100) | Address line 2 for wholesaler mail-to address. |
| MAIL\_TO\_WSLR\_ADDR\_3_TXT | VARCHAR(100) | Address line 3 for wholesaler mail-to address. |
| MAIL\_TO\_WSLR\_CITY\_NM | VARCHAR(100) | City for wholesaler mail-to address. |
| MAIL\_TO\_WSLR\_ST\_CD | VARCHAR(2) | State for wholesaler mail-to address. |
| MAIL\_TO\_WSLR\_POSTAL\_CD | VARCHAR(5) | Postal code for wholesaler mail-to address. |
| BILL\_TO\_WSLR_NM | VARCHAR(100) | Name of wholesaler listed as the bill-to address. |
| BILL\_TO\_WSLR\_ADDR\_1_TXT | VARCHAR(100) | Address line 1 for wholesaler bill-to address. |
| BILL\_TO\_WSLR\_ADDR\_2_TXT | VARCHAR(100) | Address line 2 for wholesaler bill-to address. |
| BILL\_TO\_WSLR\_ADDR\_3_TXT | VARCHAR(100) | Address line 3 for wholesaler bill-to address. |
| BILL\_TO\_WSLR\_CITY\_NM | VARCHAR(100) | City for wholesaler bill-to address. |
| BILL\_TO\_WSLR\_ST\_CD | VARCHAR(2) | State for wholesaler bill-to address. |
| BILL\_TO\_WSLR\_POSTAL\_CD | VARCHAR(5) | Postal code for wholesaler bill-to address. |
| DQST_CD | VARCHAR(8) | The unique code that represents the data quality support team person assigned to a set of wholesalers. |
| DQST\_CNTCT\_NM | VARCHAR(30) | The unique code that represents the data quality support team person assigned to a set of wholesalers. |
| DQST\_CNTCT\_PHONE_NBR | VARCHAR(15) | Phone number for data quality support team person assigned to a set of wholesalers. |
| EXCLSVTY\_LVL\_CD | VARCHAR(1) | Field previously used to track wholesaler exclusivity. This is no longer tracked and values are invalid. **DO NOT USE**. |
| EXCLSVTY\_LVL\_DSC | VARCHAR(100) | Field previously used to track wholesaler exclusivity. This is no longer tracked and values are invalid. **DO NOT USE**. |

  

  

### **[EDW.WSLR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/WSLR)**
This is the base view of wholesaler. It contains many of the same identifying attributes found in WSLR\_DM but unlike WSLR\_DM it doesn't have the descriptive names for the Logistics driven attributes. If using this view you will need to join to EDW.BRWY to retrieve the Name associated with the Brewery code. However, unlike WSLR_DM, this view does contain key characteristics about a warehouse's draft and package capacity.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for a wholesaler. |
| WSLR_NBR | VARCHAR(5) | Unique 5 digit code for a wholesaler using for most reporting systems |
| WSLR\_TYP\_CD | VARCHAR(2) | Identifies the type of wholesaler. |
| WSLR_NM | VARCHAR(100) | Name of the wholesaler |
| WSLR\_ADDR\_TXT | VARCHAR(100) | Wholesaler's mailing address |
| WSLR\_CITY\_ST_TXT | VARCHAR(100) | Wholesaler's City/State |
| WSLR\_CITY\_NM | VARCHAR(100) | Wholeslaer's City Name |
| WSLR\_ST\_CD | VARCHAR(2) | Wholesaler's State Code |
| WSLR\_POSTL\_CD | VARCHAR(5) | Wholesaler's Zip Code |
| MKTNG\_ST\_CD | VARCHAR(2) | Wholesaler's Marketing State Code |
| TEL_NBR | VARCHAR(10) | Wholesaler's Telephone Number |
| FAX_NBR | VARCHAR(10) | Wholesaler's Fax Number |
| BUDNET\_ACTV\_FLG | VARCHAR(1) | Identifies whether this wholesaler receives sales through BudNET. |
| WSLR\_ACTV\_FLG | VARCHAR(1) | Identifies whether the wholesaler is active or not. |
| SRCE\_BRWY\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that ships to the wholesaler |
| SRCE\_BRWY\_CD | VARCHAR(4) | Code to ID the primary brewery that ships to the wholesaler |
| FOB\_BRWY\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for primary brewery that prices products for the wholesaler. FOB (freight on board) is the frontline price to the wholesaler. |
| FOB\_BRWY\_CD | VARCHAR(4) | Code to ID the the primary brewery that prices products for the wholesaler. FOB (freight-on-board price) is the frontline price to the wholesaler. |
| INVTY\_PLAN\_BRWY\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID  Identifies the primary brewery that plans the inventory for the wholesaler. |
| INVTY\_PLAN\_BRWY_CD | VARCHAR(4) | Code to ID the primary brewery that plans the inventory for the wholesaler. The majority of this is done in STL Corporate. |
| WSLR\_INVTY\_COORD_CD | VARCHAR(2) | A code that represents the Inventory Coordinator for the wholesaler. |
| MH\_WSLR\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for a wholesaler (mainhouse) or parent wholesaler. |
| MH\_WSLR\_NBR | VARCHAR(5) | Unique 5 digit code for a wholesaler also known as the mainhouse number. |
| SERV\_CNTR\_BRWY\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for the primary brewery that services the wholesaler for lower volume products |
| SERV\_CNTR\_BRWY_CD | VARCHAR(4) | Code to ID the primary brewery that services the wholesaler for lower volume products. |
| PRI\_TRNSPRT\_MODE_CD | VARCHAR(1) | Type for a transportation. In Budnet the codes are T=truck, R=rail, P=intermodal/piggyback. |
| EAST\_REGN\_RR_FLG | VARCHAR(1) | A flag indicating that the brewery customer uses the East Region Railroad. |
| AB\_PROD\_EXCL_FLG | VARCHAR(1) | Field previously used to track wholesaler exclusivity. This is no longer tracked. |
| PPD\_SHPMT\_CD | VARCHAR(1) | Pre-paid shipment code |
| MIL\_BRKOUT\_CD | VARCHAR(1) | Provides military sales reporting broken into appropriate groups. The following codes are used: N = North, S = South, E = Europe/Atlantic, A = Asia/Pacific, O = Other Overseas. |
| MCA_CD | VARCHAR(3) | Unique identifier for a Media Coverage Area. Currently, code is 3 numeric digits, but is close to 999. |
| ALPHA\_ADMIN\_CD | VARCHAR(3) | A one to three digit alphabetic code that represents the region roster position. |
| SLS\_REGN\_CD | VARCHAR(2) | The two-digit numeric code representing the Sales Region (VP level). |
| SLS\_DIRCTR\_CD | VARCHAR(2) | The two-digit numeric code representing the Sales Director. |
| SLS\_DIRCTR\_NM | VARCHAR(100) | The name of the Sales Director. |
| RTL\_SLS\_MGR_CD | VARCHAR(2) | The two-digit numeric code representing the Retail Sales Manager. |
| RTL\_SLS\_MGR_NM | VARCHAR(100) | The Name of the Retail Sales Manager. |
| REGN\_VICE\_PRES_NM | VARCHAR(100) | The name of the Regional VP. |
| SLS\_START\_TSP | TIMESTAMP_NTZ(0) | The date and time that the brewery customer started making sales. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | EDW Modified Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object Identifier |
| SRMW\_ROW\_ID | NUMBER(10,0), |     |
| SIEBEL\_ROW\_ID | VARCHAR(30) |     |
| SIEBEL\_DSRCE\_ID | NUMBER(10,0), |     |
| WSLR\_NM\_NBR_TXT | VARCHAR(153) | Wholesaler Name / Number Text |
| WSLR\_CITY\_ST\_NBR\_TXT | VARCHAR(153) | Wholesaler City State / Number Text |
| WSLR\_NM\_CITY\_ST\_NBR_TXT | VARCHAR(225) | Wholesaler Name / City / State / Number Text |
| DQST_CD | VARCHAR(8) | The unique code that represents the data quality support team person assigned to a set of wholesalers. |
| EXCLSVTY\_LVL\_CD | VARCHAR(1) | Field previously used to track wholesaler exclusivity. This is no longer tracked and values are invalid. DO NOT USE. |
| EXCLSVTY\_LVL\_DT | DATE, | Field previously used to track wholesaler exclusivity. This is no longer tracked and values are invalid. DO NOT USE. |
| DRGHT\_LN\_CLNG\_METH\_NM | VARCHAR(30) | Draught line cleaning method name |
| RAIL\_SDG\_FLG | VARCHAR(1) |     |
| AFT\_HRS\_PHONE_NBR | VARCHAR(40) | After hours phone number |
| TOLL\_FREE\_PHONE_NBR | VARCHAR(40) | Toll free phone number |
| OVRD\_MF\_HIST\_SLS\_FLG | VARCHAR(1) | 'Override Mainframe History Sales Flag', |
| AFFILTN\_START\_DT | DATE | AB affiliation start date |
| MAIL\_CD\_LTR\_ALWD\_FLG | VARCHAR(1) | Mail Code Letter Allowed Flag |
| PKG\_AVG\_PER\_PLLT\_QTY | NUMBER(15,5) | Package Average Per Pallet Quantity |
| PKG\_AVG\_PLLT\_STACK\_QTY | NUMBER(15,5) | Package Average Pallet Stack Quantity |
| PKG\_MAX\_CPCTY_QTY | NUMBER(15,5) | Package Maximum Capacity Quantity |
| DFT\_AVG\_PER\_PLLT\_QTY | NUMBER(15,5) | Draft Average Per Pallet Quantity |
| DFT\_AVG\_PLLT\_STACK\_QTY | NUMBER(15,5) | Draft Average Pallet Stack Quantity |
| DFT\_MAX\_CPCTY_QTY | NUMBER(15,5) | Draft Maximum Capacity Quantity |
| WEA\_WDA\_CTGY_ABBR | VARCHAR(3) |     |
| WEA\_WDA\_POSBL_CNT | NUMBER(38,0), |     |
| WEA\_WDA\_SCORE_CNT | NUMBER(38,0), |     |

  

Published on 3/17/21 by A. Stites
