---
title: Historical MACO
tags:
    - Legacy 
    - Shipment
    - Finance
description: Historical Shipments and STRs from the legacy Financial Operating Model (FIM)
---
# Historical MACO  

This data set is comprised of views that hold the historical view of Shipments (ABINCs) and Sales to Retailers (STRs) that exist in the legacy Financial Operating Model (FIM). The FIM model was replaced in 2020 by Anaplan however the tables and views with the historical MACO data are still referenced and used by various reporting systems within AB. By maintaining these views visibility is being granted to ABINC and STR data for Budget, Actuals and Forecast/LE as they stood at the close of 2020

##### _**\*These views are restricted for need to know users only and access to this data is audited. If you require access please submit a Snowflake Access Request for Secured Access on SolutionsNow \***_

  

### **[EDW.SHPT\_FIM\_BUDG\_WSLR\_PDCN_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_FIM_BUDG_WSLR_PDCN_MO)** 
This view contains the historical MACO financial budget data for shipments from AB to Wholesalers (exception for ABSDs: Wholesaler to Retailers) also called ABINCs from the legacy FIM model which is the predecessor to the current Anaplan system. This view is for historical purposes only, does not get updated with present-day budget and is currently populated with data through the end of 2020 only.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

### [**EDW.SHPT\_FIM\_WSLR\_PDCN\_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_FIM_WSLR_PDCN_MO)
This view contains historical MACO data for actual Shipments (ABINCs) from AB to Wholesalers (exception for ABSDs: Wholesaler to Retailers) from the legacy FIM model. This view contains no budget or forecast information, only shipments that have already occurred. The data in this view is for historical purposes only, does not get updated with present-day shipments and is currently populated with data through the end of 2020 only.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

### [**EDW.SHPT\_FIM\_FCST\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPT_FIM_FCST_WSLR_PDCN_MO)
This view contains historical MACO financial data for ABINC LE/Forecast for shipments from AB to Wholesalers (exception for ABSDs: Wholesaler to Retailers) from the legacy FIM model. The data in this view is for historical purposes only, does not get updated with present-day values and is currently populated with the 12+0 LE from January 20201.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

### [**EDW.SLS\_FIM\_BUDG\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_FIM_BUDG_WSLR_PDCN_MO)
This view contains historical MACO financial STR budget data from the legacy FIM model which is the predecessor to the current Anaplan system. The data in this view is for historical purposes only, does not get updated with present-day budget and is currently populated with data through the end of 2020 only.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

### [**EDW.SLS\_FIM\_WSLR\_CH\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_FIM_WSLR_CH_PDCN_MO)
This view contains historical MACO financial data for STR Actuals from the legacy FIM model.  This will contain data from months that have already happened based on volume sold by Wholesalers to retailers and is for historical purposes only. The data in this view does not get updated with present-day STRs and is currently populated with data through the end of 2020 only.  
  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| NATL\_CHAIN\_ACCT_NBR | VARCHAR(4) | National Chain Account number. |
| MKT\_SEG\_CD | VARCHAR(1) | The code for a marketing categorization. Examples: Type: RAC 1404 - Casino Type: Segment 4 - Travel |
| MKT\_SUBSEG\_CD | VARCHAR(1) | The code defining a sub categorization of retail market segments. This segment further classifies the Retail Market Segments. Example of subsegments for Segment 4 - Travel: 4-1- AIRLINE 4-2 - RAIL 4-3 - CRUISE |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| NATL\_CHAIN\_PARTY_ID | NUMBER(15,0) | The identifier of a national chain or retail association in EDW. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

### [**EDW.SLS\_FIM\_FCST\_WSLR\_PDCN_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_FIM_FCST_WSLR_PDCN_MO)
This view contains historical MACO financial data for STR LE/Forecast from the legacy FIM model.  The data in this is for historical purposes, does not get updated with present-day STRs and is currently populated with the 12+0 STR LE from January 2020.  

   
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR_NBR | VARCHAR(5) | AB Assigned 5 digit Wholesaler Number. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code from PPS system. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a price group. Price Group provides a way to recategorize products for pricing purposes. Examples: 743,965,219 |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| PDCN_CD | VARCHAR(7) | This describes the subset of items that are a Product Container, commonly referred to as a PDCN. This is a relationship between Product and Package (Container). |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar\_year\_month\_number of the Calendar\_Month. |
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND_PROD, CONT, PDCN. |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| VOL\_BBLS\_QTY | NUMBER(17,5) | Volume in barrels. |
| VOL\_UNIT\_QTY | NUMBER(17,5) | Volume in units. |
| ANN\_VARBL\_COST_AMT | NUMBER(17,5) | Annualized variable costs in dollars. |
| WYR\_VARBL\_COST_AMT | NUMBER(17,5) | Within year variable costs in dollars. |
| PROMOTN\_VOL\_BBLS_QTY | NUMBER(17,5) | Promotion volume in barrels. |
| PROMOTN\_VOL\_UNIT_QTY | NUMBER(17,5) | Promotion volume in units. |
| REG\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Regular FOB promotion dollars. |
| SPCL\_FOB\_PROMOTN_AMT | NUMBER(17,5) | Special FOB promotion dollars. |
| FOB\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | FOB redemptions in dollars. |
| FOB\_PROMOTN\_RED_AMT | NUMBER(17,5) | FOB reductions in dollars. |
| REG\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Regular PTR promotion dollars. |
| SPCL\_PTR\_PROMOTN_AMT | NUMBER(17,5) | Special PTR promotion dollars. |
| PTR\_PROMOTN\_RDMPTN_AMT | NUMBER(17,5) | PTR redemptions in dollars. |
| PTR\_PROMOTN\_RED_AMT | NUMBER(17,5) | PTR reductions in dollars. |
| FOB\_RVNU\_AMT | NUMBER(17,5) | FOB revenue in dollars. |
| ANN\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized FOB revenue increases in dollars. |
| ANN\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized FOB revenue adjustments in dollars. |
| WYR\_FOB\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year FOB revenue increases in dollars, |
| WYR\_FOB\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year FOB revenue adjustments in dollars. |
| PTR\_RVNU\_AMT | NUMBER(17,5) | PTR revenue in dollars. |
| ANN\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTR revenue increases in dollars. |
| ANN\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTR revenue adjustments in dollars. |
| ANN\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Annualized reported PTR. |
| WYR\_PTR\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTR revenue increases in dollars. |
| WYR\_PTR\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTR revenue adjustments in dollars. |
| WYR\_PTR\_RVNU\_RPTD\_AMT | NUMBER(17,5) | Within year reported. |
| PTC\_RVNU\_AMT | NUMBER(17,5) | PTC revenue in dollars. |
| ANN\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Annualized PTC revenue increases in dollars. |
| ANN\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Annualized PTC revenue adjustments in dollars. |
| WYR\_PTC\_RVNU\_INCR\_AMT | NUMBER(17,5) | Within year PTC revenue increases in dollars. |
| WYR\_PTC\_RVNU\_ADJMT\_AMT | NUMBER(17,5) | Within year PTC revenue adjustments in dollars. |
| ST\_TAX\_AMT | NUMBER(17,5) | State tax in dollars. |
| LCL\_TAX\_AMT | NUMBER(17,5) | Local tax in dollars. |
| FRT\_FULL\_AMT | NUMBER(17,5) | Freight full in dollars. |
| FRT\_EMPTY\_AMT | NUMBER(17,5) | Freight empty in dollars. |
| RTLR\_FEE\_AMT | NUMBER(17,5) | Retailer fees in dollars. |
| WSLR\_FEE\_AMT | NUMBER(17,5) | Wslr fees in dollars. |
| FED\_EXCISE\_TAX_AMT | NUMBER(17,5) | Federal Excise tax in dollars. |
| FED\_EXCISE\_TAX\_INCR\_AMT | NUMBER(17,5) | Federal Excise tax increase in dollars. |
| ANN\_CONT\_DEPST_AMT | NUMBER(17,5) | Annualized container deposits in dollars. |
| WYR\_CONT\_DEPST_AMT | NUMBER(17,5) | Within year container deposits in dollars. |
| ANN\_FIXED\_COST_AMT | NUMBER(17,5) | Annualized fixed costs in dollars. |
| WYR\_FIXED\_COST_AMT | NUMBER(17,5) | Within year fixed costs in dollars. |
| ANN\_UNIT\_COST_AMT | NUMBER(17,5) | Annualized unit costs in dollars. |
| WYR\_UNIT\_COST_AMT | NUMBER(17,5) | Within year unit costs in dollars. |
| ANN\_BATCH\_COST_AMT | NUMBER(17,5) | Annualized batch costs in dollars. |
| WYR\_BATCH\_COST_AMT | NUMBER(17,5) | Within year batch costs in dollars. |
| ANN\_PRCSS\_COST_AMT | NUMBER(17,5) | Annualized process costs in dollars. |
| WYR\_PRCSS\_COST_AMT | NUMBER(17,5) | Within year process costs in dollars. |
| ANN\_FCLTY\_COST_AMT | NUMBER(17,5) | Annualized facility sustaining costs in dollars. |
| WYR\_FCLTY\_COST_AMT | NUMBER(17,5) | Within year facility sustaining costs in dollars. |
| SPOILAGE_AMT | NUMBER(17,5) | Spoilage fees in dollars. |
| HNDLG_AMT | NUMBER(17,5) | Wslr handling fees in dollars. |
| RYLTY\_EXPNS\_AMT | NUMBER(17,5) | Royalty expense in dollars. |
| RYLTY\_RVNU\_AMT | NUMBER(17,5) | Royalty revenue in dollars. |
| BASE\_RVNU\_AMT | NUMBER(17,5) | Base Revenue Calculation = FOB revenue - excise tax. REVENUE\_FOB\_BASE - REVENUE_FET. |
| PRC\_INCR\_AMT | NUMBER(17,5) | Price Increase calculation = FOB revenue + FOB adjustments. REVENUE\_FOB\_INC\_WYR + REVENUE\_FOB\_ADJ\_WYR. |
| CPN_AMT | NUMBER(17,5) | Coupons calculation = FOB redemptions + FOB reductions. PROMOS\_REDEMPTION + PROMOS\_REDUCTION. |
| TOTL\_COST\_AMT | NUMBER(17,5) | Total Cost calculation = within year fixed costs + variable costs + royalty. |
| GRS\_RVNU\_AMT | NUMBER(17,5) | Gross Revenue calculation = BASE-REVENUE + RVN-DEP-WYR + PRC-INCR + RVN-ROYALTY. |
| NET\_RVNU\_AMT | NUMBER(17,5) | Net Revenue calculation = gross revenue - regular FOB promos - special FOB promos - coupons - spoilage - handling. |
| VARBL\_MRGN\_AMT | NUMBER(17,5) | Variable margin calculation = net revenue - within year variable costs - royalty. |
| GRS\_MRGN\_AMT | NUMBER(17,5) | Gross margin calculation = net revenue - total cost. |
| PROD\_MRGN\_AMT | NUMBER(17,5) | Product margin calculation = net revenue - within year unit costs - batch costs - process costs. |
| GRS\_PROFT\_AMT | NUMBER(17,5) | Gross profit margin calculation = net revenue - within year unit costs - batch costs - process costs - facility costs. |
| FRONTLN\_MRGN\_AMT | NUMBER(17,5) | Frontline margin calculation = Gross revenue - variable costs within year - royalty. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the Teradata EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The Metadata Object Id references the distinct execution of the ETL process or program that loaded this record. Related information can be found in the process metadata tables. |
| RVNU\_BAL\_AMT | NUMBER(17,5) | Revenue balancing |
| VARBL\_COST\_VAR_AMT | NUMBER(17,5) | Variable Cost variance |
| MKTNG\_ADVNG\_AMT | NUMBER(17,5) | Advertising marketing expense |
| MKTNG\_BRNDD\_PROD_AMT | NUMBER(17,5) | Branded Product marketing expense |
| MKTNG\_SLS\_PROMO_AMT | NUMBER(17,5) | Sales Promotions advertising expense |
| TFER\_EXPNS\_AMT | NUMBER(17,5) | Transfer expense |
| NON\_MFG\_EXPNS_AMT | NUMBER(17,5) | Non-manufacturing expense |
| G\_AND\_A\_EXPNS\_AMT | NUMBER(17,5) | General and Administrative expense |
| NET\_VARBL\_COST_AMT | NUMBER(17,5) | Net variable cost = Within variable cost + cost variance + royalty expense |
| SELLNG\_MRGN\_AMT | NUMBER(17,5) | Selling margin = Variable margin - (advertising + branded products + selling profit) or Variable margin - total marketing expenses |
| INCR\_VARBL\_MRGN_AMT | NUMBER(17,5) | Incremental variable margin = variable margin - transfer expense - within year batch cost amount |
| TOTL\_MKTNG\_EXPNS_AMT | NUMBER(17,5) | Total marketing expenses = advertising + branded products + selling profit |
| INCR\_SELLNG\_MRGN_AMT | NUMBER(17,5) | Incremental selling margin = Incremental variable margin - total marketing expense |
| SELLNG\_PROFT\_AMT | NUMBER(17,5) | Selling profit = varibale margin - total marketing expense - within year fixed cost amount - transfer expense |
| OPERTG\_PROFT\_AMT | NUMBER(17,5) | Operating Profit = selling profit - non-manufacturing expense - G&A expense |

  

  

Published on 4/28/21 by A. Stites. Content from D. Yoon
