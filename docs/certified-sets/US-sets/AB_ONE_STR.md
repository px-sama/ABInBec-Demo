---
title: AB ONE STRs
tags:
    - Sales
    - Distribution
    - AB ONE
description: Sales from AB ONE wholesalers to retailers
---

# AB ONE Sales

This data set is comprised of a single view that provides visibility into sales from AB ONE wholesalers to retailers. The data is fully refreshed every morning at 6:00AM CST after retrieving invoice-level sales data directly from a database shared by VIP each morning. Data in this view is not limited to AB-only products. This view can be joined to the \"ABSD Data\" tables for AB ONE-specific Geography and Product \& Brand information.

### **[ABONE\_ANALYTICS.ABONE\_ANALYTICS.ABSD\_VIP\_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABONE_ANALYTICS/schemas/ABONE_ANALYTICS/view/ABSD_VIP_SLS)**
This view contains sales details for all STRs from AB ONE wholesalers at the account, item, and day level summary. 
This summarization is created from the VIP\_SHARE\_AZ.C\_10003168\_ABINBEVNAZSHARING.INVOICE\_MEASURE table, and filtered to show only valid sales as defined by the invoice record status and should be the primary source for any Snowflake-based AB ONE Sales reporting queries. The view does not exclude any types of sales, and when leveraging this model, the ACCOUNT\_DIMENSION table should be scoped to only include ACCOUNT\_TYPE\_CODE of 11, 21, 23, 24, and 31 to analyze STRs. This will vary slightly than excluding COT codes of 06, 50, and 99 would, which is the typical practice for the whole AB universe, as the VIP definition of STR varies between supplier and wholesaler. It also contains calculated columns for volume in to Units, Cases and Barrels. This data is updated every morning at 7:00am CST after the share is received from VIP.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR\_NBR | VARCHAR | Five-digit wholesaler number which corresponds to EDW.WSLR and ABONE\_ANALYTICS.ABONE\_ANALYTICS.ABSD\_WHOLESALER\_MAP |
| CAL\_DT | DATE | Date of sale |
| WSLR\_ASGND\_CUST\_NBR | VARCHAR | Five-digit wholesaler-assigned customer number which corresponds to EDW.VIP\_WSLR and ACCOUNT\_CODE in VIP\_SHARE\_AZ.C\_10003168\_ABINBEVNAZSHARING.ACCOUNT\_DIMENSION |
| VIP\_ORDER\_SYSTEM\_CODE | VARCHAR | Order source type name such as BEES, Telsell, etc. |
| SUPPLIER\_ITEM\_CODE | VARCHAR | Item identifier which connects to VIP\_SHARE\_AZ.C\_10003168\_ABINBEVNAZSHARING.ITEM\_DIMENSION and corresponds to PDCN\_CD on EDW.PDCN\_DM for all AB products |

| DLVRD\_CASE\_EQV\_QTY | FLOAT | Case equivalents of item sold |

| DLVRD\_BBL\_EQV\_QTY | FLOAT | Barrel equivalents of item sold |

| DLVRD\_SELLING\_UNIT\_EQV | NUMBER(38,0) | Total units of item sold |

| RSFRONT | FLOAT | Aggregate front line price to retailer for item sold |

| DISC | FLOAT | Aggregate discounts applied to sale of item |

| WSLR_COST | FLOAT | Cost of items to the wholesaler |

| EDW_START_TSP| TIMESTAMP_NTZ(0) | TIMESTAMP OF PROCESS RUN |


Published on 11/17/2022 by A. Hellinghausen.
