---
title: Wholesaler Inventory (BudNET)
tags:
    - Wholesaler
    - Distribution
    - Sales
    - Transactions
description: Wholesaler's reported inventory transactions and end of day inventory levels by PDCN for each day
---
# Wholesaler Inventory (BudNET)  

This data set is comprised of the views that provide visibility in to a given wholesaler's reported inventory transactions and end of day inventory levels by PDCN for each day.  Wholesalers are responsible for reporting these transactions and inventory levels to BudNET daily to keep their reporting in balance. When the sum of a days' inventory transactions and reported sales do not balance to the reported end of day units on hand the wholesaler is considered out of balance and reporting must be reconciled by the Wholesaler and the Data Management team.

  

### **[EDW.WSLR_INVTY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/WSLR_INVTY)**
This view contains all of the inventory transactions (receipts, transfers in/out, breakage. repack, etc) by PDCN for a given day as reported by the wholesaler to BudNET for each warehouse. Each transaction type is assigned a specific transaction code (INVTY\_TYP\_CD) that represents the movement of the product either in to or out of the warehouse. This view can be joined to the Shipments data using the ORD\_NBR or SHPMT\_NBR to track product shipped from AB to a wholesaler's warehouse. To retrieve the reported units on hand at the end of a particular day users can filter to INVTY\_TYP\_CD = '01'.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique enterprise ID for a wholesaler |
| INVTY\_EFF\_DT | DATE | Date on which reported inventory is effective. Only on order receipts (when a shipment comes into a warehouse). |
| PDCN\_ITEM\_ID | NUMBER(15,0) | Unique enterprise ID for a PDCN |
| WSLR\_RCRD\_DT | DATE | Date on which the Wholesaler recorded the inventory transaction into the accounting system. |
| INVTY\_TYP\_CD | VARCHAR(5) | Code that indicates the type of inventory transaction. Can be joined to INVTY_TYP view to get description of code. |
| SEQ_NBR | NUMBER(4,0) | Sequence number - added for uniqueness for multiple Born On Dates. |
| RPTED\_SKU\_QTY | NUMBER(9,2) | Reported Unit Quantity of PDCN in transaction. |
| RPTED\_CASE\_EQUIV_QTY | NUMBER(15,7) | Calculated quantity of Case Equivalents (288 oz) based on the reported PDCN and Selling Unit Code |
| RPTED\_BBL\_EQUIV_QTY | NUMBER(15,7) | Calculated quantity of Barrel Equivalents (3,968 oz) based on the reported PDCN and Selling Unit Code |
| SELLNG\_UNIT\_CD | VARCHAR(2) | Code that identifies the type of Selling Unit reported on the transaction. Can be joined to SELLNG_UNIT view to retrieve description. 10 = Normal Selling Unit |
| BORN\_ON\_DT | DATE | Born On Date for the product to track viablity of the inventory. Sequence Number takes PK because of Born On Date. |
| ORD_NBR | VARCHAR(10) | Order Number that correlates to the product received in to wholesaler's warehouse. Only populated for Order Receipt transactions. |
| SHPMT_NBR | NUMBER(9,0) | Shipment Number correlated to the Order Number used to verify that shipments are received. Only valide for Order Receipt transactions |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Time Stamp for the last time the record was modified |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |
| END\_OF\_WK\_INVTY\_FLG | VARCHAR(1) | System generated week-ending inventory flag for maximum inventory effective date for each inventory type code. Week is defined as Monday through Sunday. |
| END\_OF\_MO\_INVTY\_FLG | VARCHAR(1) | Month-ending inventory flag read from the header of the BudNET Inventory file for maximum inventory effective date for each inventory type code. This header/flag can be resent up to 6 days after the end of the month. |



### **[EDW.INVTY_TYP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/INVTY_TYP)**
This is a reference view used to define the types of Inventory Transactions wholesalers are allowed to report in to BudNET. Each INVTY\_TYP\_CD has an accompanying description that defines the action associated with the code.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| INVTY\_TYP\_CD | VARCHAR(5) | Code for the associated inventory transaction type. Numeric codes are submitted by wholesalers, character codes are system generated. |
| INVTY\_TYP\_DSC | VARCHAR(30) | The descriptive name of the INVTY\_TYP\_CD that defines the inventory action |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of the last time the record was modified |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

  

### **[EDW.SELLNG_UNIT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SELLNG_UNIT)**
This is a reference view used to define the types of Selling Units wholesalers are allowed to report in to BudNET. Each Selling Unit Code represents a whole or fractional value of a PDCN unit. For example Selling Unit Code 12 represents one half (1/2) of a PDCN. This view also contains a conversion factor that can be used to convert the integer value of reported units in to a decimal value of a whole PDCN unit. (Example: 3 units reported of SELLNG_CD 12 = 3 * 0.5 = 1.5 PDCN units reported)

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SELLNG\_UNIT\_CD | VARCHAR(2) | Code that identifies the type of Selling Unit reported on the transaction. |
| SELLNG\_UNIT\_NM | VARCHAR(100) | The descriptive name of the Selling Unit that defines the correlated SELLNG\_UNIT\_CD. |
| SELLNG\_UNIT\_DSC | VARCHAR(250) | NULL column |
| SELLNG\_UNIT\_SYS_CD | VARCHAR(50) | NULL column |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of last time record was updated |
| EDW\_END\_TSP | TIMESTAMP_NTZ(9) |     |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| SELLNG\_UNIT\_CONV_FCT | NUMBER(7,6) | Selling Unit conversion factor that represents the fractional value of each Selling Unit Code (Example: 0.5 for code 12 to represent 1/2 of the unit.) |

Published on 3/24/21 by A. Stites
