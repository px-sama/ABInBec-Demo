---
title: FP&A MACO
tags:
    - Budget
    - Finance
    - Volume
description: Latest MACO financial data for various volume sets
---
# FP&A MACO  

This data set is comprised of views that house the latest MACO financial data for various volume sets. Each view will contain the latest version of that particular type of data (i.e. budget, Latest Estimate (LE or forecast), actuals for both STRs and shipments (ABINC). The LE and Actuals are updated once monthly after the Month-End Close process has completed while Budget is typically updated once a year in January for the current year. The data in these views is sourced from MACO Anaplan process and loaded into base tables that these views are built on top of. The data in these views can be joined to the Products, Wholesaler and Calendar data sets using common fields.

##### _**\*These views are restricted for need to know users only and access to this data is audited. If you require access please submit a Snowflake Access Request for Secured Access on SolutionsNow\***_

  

### [**EDW.SHPT\_AN\_WSLR\_PDCN\_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_AN_BUDG_WSLR_PDCN_MO)
This view contains the latest MACO financial data for ABINC Actuals once they are approved and finalized by the FP&A team at the close of each month.  This will contain data from months that have already happened based on volume sold by AB to Wholesalers (exception for ABSDs: Wslrs to Retailers)   There should be no forecast data in this view.  

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Example: 022 -24/12 OZ RF BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.  /td> |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used. This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions.   PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.   This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |

  

  

  

### [**EDW.SHPT\_AN\_FCST\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_AN_FCST_WSLR_PDCN_MO)
This view contains the latest MACO financial data for ABINC LE/Forecast once they are approved and finalized by the FP&A team at the close of each month.  This will contain data for a full year forecasting sales from AB to Wholesalers (exception for ABSDs: Wslrs to Retailers)   

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group.   Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022   - 24/12 OZ RF BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.   This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.   This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |

  

  

### [**EDW.SHPT\_AN\_BUDG\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_AN_BUDG_WSLR_PDCN_MO)
This view contains the latest MACO budget for ABINC once it is approved and finalized by the FP&A team.  This will contain the budget for next year or a revision of the current year’s budget early in the year.  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group.   Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022   - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.   This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.   This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |

  

  

### [**EDW.SLS\_AN\_WSLR\_PDCN\_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_AN_WSLR_PDCN_MO)
This view contains the latest MACO financial data for STR Actuals once they are approved and finalized by the FP&A team.  This will contain data from months that have already happened based on volume sold by Wholesalers to retailers.  There should be no forecast data in this view.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group.   Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022   - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.   This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.   This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |

  

  

### [**EDW.SLS\_AN\_FCST\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_AN_FCST_WSLR_PDCN_MO)
This view contains the latest MACO financial data for STR LE/Forecast once they are approved and finalized by the FP&A team.  This will contain data for a full year forecasting sales from AB to Wholesalers (exception for ABSDs: Wslrs to Retailers). 

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group.   Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022   - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.   This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.   This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |

  

  

### [**EDW.SLS\_AN\_BUDG\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_AN_BUDG_WSLR_PDCN_MO)
This view contains the latest MACO budget for STR once it is approved and finalized by the FP&A team.  This will contain the budget for next year or a revision of the current year’s budget early in the year.    


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| WSLR_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler Number |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group.   Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022   - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN.   This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Enterprise generated value to identify a wholesaler |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ST\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| LCL\_TAX\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FRT\_FULL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| SPOILAGE_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| HNDLG_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax.   REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| NET\_RVNU\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(0) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | This is a legacy column that is no longer used.     This will always be 0. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.   This will always be 0. |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | This is a legacy column that is no longer used.     This will always be 0. |

  

Published on 4/16/21 by A. Stites, content from K. Jennings
