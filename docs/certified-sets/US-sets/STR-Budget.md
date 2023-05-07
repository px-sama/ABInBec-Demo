---
title: STR Budget
tags:
    - Budget
    - Volume
description: Official US STR Budget for the calendar and fiscal year
---
# STR Budget  

This data set contains the official US STR Budget for the calendar and fiscal year that is used for all official monthly tracking and reporting purposes. The Budget is published once a year in January and is locked from that point forward with changes only made due to acquisition or divestiture of brands impacting the scope of results. The data can be joined to [any views containing STRs](https://beertech-certified-datasets.azurewebsites.net/docs/VIP_Sales.html) in order to evaluate and analyze annual or monthly performance versus Budget. The budget is managed and maintained by the CASE – Sales Planning & Forecasting team.

  

### **[EDW.SLS\_BUDG\_WSLR\_PDCN\_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SLS_BUDG_WSLR_PDCN_MO)**
This view contains the official monthly STR budget. The budget is created and cascaded at the Wholesaler, Month, PDCN level using top-down targets set for the full year coming out of 1YP planning cycle. The annual STR volume targets are calendarized and spread across the months at the warehouse/PDCN level by the Sales Planning & Forecasting team for all wholesalers and brands within the budget.  

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WSLR\_PARTY\_ID | NUMBER(15,0) | Unique enterprise value used to ID wholesaler warehouse locations. Can be joined to EDW.WSLR to retrive attributes of the wholesaler. |
| WSLR_NBR | VARCHAR(50) COLLATE 'en-ci' | Unique 5 digt number used to ID each wholesler warehouse |
| YR\_MO\_NBR | NUMBER(15,0) | Value representing the Year and Month for each record. Expressed as YYYYMM |
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| GENR\_PDCN\_CD | VARCHAR(15) COLLATE 'en-ci' | Unique 7 characater alphanumeric value that identifies the generic version of every Product-Container combination |
| BUDG_QTY | NUMBER(11,0) | Monthly budgeted value in whole units |
| BUDG\_BBL\_EQUIV_QTY | NUMBER(14,5) | Monthly budgeted value in barrel equivalents (3968 ounces) |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Timestamp when record was last updated |

  

  

  

  

  
Published on 5/14/21 by A. Stites
