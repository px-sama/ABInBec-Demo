---
title: PPS Sales
slug: /Sales/PPS-Sales
tags:
    - Sales
    - PPS Sales
---

# **PPS Sales**

PPS (Published Provincial Sales) is the Sales Compiled by Sales Intelligence team from various sources to report total Volume at Province Level.
The data is Complied in TM1 and exported to CSDI once verified.

## **Base View**

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.FCT_PROV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/FCT_PROV_SLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_FCT_PROV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_PROV_SLS)<br/>


This is the Base View to show SAP Invoice data at Province level. Provice is mapped based on profit center.

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|MO_SK | NUMBER | Surrogate Key For Month| 
|SLS_ORG_SK | NUMBER | Surrogate Key for Sales Organisation related to Province| 
|BI_ITEM_SK | NUMBER | Surrogate Key for Product| 
|SLS_HL | NUMBER | Sales Volume in HL| 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and Time of Last Update| 


# **Qlik Provincial Sales**

PPS (Published Provincial Sales) is the Sales Compiled by Sales Intelligence team from various sources to report total Volume at Province Level. 
The data is Complied in TM1 and exported to CSDI once verified.

## **Application Views**

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_PROV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_PROV_SLS)<br/>


This is the Application View used in Qlik Sales Reporting. 

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level
ITEM_KEY|VARCHAR|Item Key for Qlik - BI Item Level for Analytical Items
PROV_SLS_HL|NUMBER(14,6)|HL Volume of the sale
MO_SK|NUMBER|Surrogate Key on Month - used for filtering only
START_DT|DATE|Start Date of Period - used for filtering only
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only