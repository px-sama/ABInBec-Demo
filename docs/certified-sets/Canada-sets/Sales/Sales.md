---
title: Sales
slug: /Sales
tags:
    - Sales
    - POC Sales
---

# **Qlik POC Sales Application Views**

Application transactional view for Qlik Sales reflecting POC Sales transactions.

## **Application Views**

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_QS_SI_POC_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_QS_SI_POC_SLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_POC_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_POC_SLS)<br/>


Application transactional view for Qlik Sales reflecting POC Sales transactions.

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik - key as reflected in the transactions
PRD_DEF_KEY|VARCHAR|Period Definition Key for Qlik - key as reflected in the transactions
SLS_SRC_KEY|NUMBER(38)|Sales Source Key for Qlik
POC_KEY|VARCHAR|POC Key for Qlik - POC Level
ITEM_KEY|VARCHAR|Item Key for Qlik - BI Item Level
ORG_ITEM_KEY|VARCHAR|Organic Item Key for Qlik - BI Item Level
SLS_CH_KEY|VARCHAR|Sales Channel Key for Qlik - Sales Sub Channel Level
SLS_HL|NUMBER(14,6)|HL Volume of the sale
SLS_UNIT_PRC|NUMBER(8,2)|Reported unit selling price in Canadian dollars associated with the sale. Note that there may be no price and prices from different sources may not have consistent definitions
CMRCL_SLS_HL|NUMBER(14,6)|HL Volume of the sale for demand sales analysis
VC_SLS_HL|NUMBER(14,6)|HL Volume of the sale for variable compensation analysis
RR_SLS_HL|NUMBER(14,6)|HL Volume of the sale for revenue recognition analysis
BEER_SLS_HL|NUMBER(14,6)|HL Volume of the sale for beer focused analysis
RTD_SLS_HL|NUMBER(14,6)|HL Volume of the sale for RTD focused analysis
CNTER_SLS_HL|NUMBER(14,6)|HL Volume of the sale for counter sales analysis
DEMND_SLS_HL|NUMBER(14,6)|HL Volume of the sale for demand sales analysis
DLY_SLS_HL|NUMBER(14,6)|HL Volume of the sale for daily sales analysis
TBS_SLS_HL|NUMBER(14,6)|HL Volume of the sale for TBS sales analysis
DT_SK|NUMBER(38)|Surrogate Key on Date - used for filtering only
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only
DIST_IND|NUMBER(38)|Distribution Indicator

