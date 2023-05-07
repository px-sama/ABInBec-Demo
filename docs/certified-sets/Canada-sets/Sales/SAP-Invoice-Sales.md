---
title: SAP Invoice Sales
slug: /Sales/SAP-Invoice-Sales
tags:
    - Sales
    - SAP Invoice
---

# **SAP Invoice Sales**

SAP Invoice sales is based on SAP invoices. These exported daily from SAP and is processed into CSDI.

## **Application View** 

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_CS_FCT_SAP_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_FCT_SAP_SLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_CS_FCT_SAP_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_FCT_SAP_SLS)<br/>


This is the Application View Created for Canada Sales Model. It helps Sales Intelligence team to report SAP Invoice data at Province level. Provice is mapped based on profit center.

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|DT_SK | NUMBER | Surrogate Key for Date| 
|POC_SK | NUMBER | Surrogate Key for POC| 
|SLS_SUB_CH_SK | NUMBER | Surrogate Key for Sales Sub Channel| 
|BI_ITEM_SK | NUMBER | Surrogate Key for Product| 
|SLS_HL | NUMBER | Sales Volume in HL| 
|SLS_UNIT_PRC | NUMBER | Sales Unit Price for product| 
|EFF_DT | DATE | Effective Date of Sale| 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and Time of Last Update| 


## **Base View**

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.FCT_SAP_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/FCT_SAP_SLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_FCT_SAP_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_SAP_SLS)<br/>


This is the Base View to show SAP Invoice data at Province level. Provice is mapped based on profit center.

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|DT_SK | NUMBER | Surrogate Key for Date| 
|EFF_DT | DATE | Effective Date of Sale| 
|BI_ITEM_SK | NUMBER | Surrogate Key for Product| 
|SLS_ORG_SK | NUMBER | Surrogate Key for Sales Organisation related to Province| 
|SLS_CH_SK | NUMBER | Surrogate Key for Sales Channel| 
|SLS_HL | NUMBER | Sales Volume in HL| 
|SLS_UNIT_PRC | NUMBER | Sales Unit Price| 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and Time of Last Update| 



Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.FCT_BASE_INV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/FCT_BASE_INV_SLS)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.FCT_BASE_INV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/FCT_BASE_INV_SLS)<br/>
EDW View Name &emsp;: [EDW.CSDI_FCT_BASE_INV_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_BASE_INV_SLS)<br/>


This is the Base View to show SAP Invoice data at each Invoice line in Invoice table. This tasble is used in calculate all the internal sales sources.

|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|DY_SK | NUMBER | Surrogate Key on Day| 
|BI_ITEM_SK | NUMBER | Surrogate Key on BI Item| 
|FIN_CMPY_SK | NUMBER | Surrogate Key on Financial Company| 
|PRFT_CNTR_SK | NUMBER | Surrogate Key on Profit Centre| 
|PLNT_SK | NUMBER | Surrogate Key on Plant| 
|CUST_SHP_TO_SK | NUMBER | Surrogate Key on the Customer the Goods Have Been Ship To| 
|CUST_SLD_TO_SK | NUMBER | Surrogate Key on the Customer Ordered the Goods| 
|CUST_PAYER_SK | NUMBER | Surrogate Key on the Customer Invoiced| 
|PREM_SK | NUMBER | Surrogate Key on Premise of Sale as Derived from the SAP Channel| 
|INV_SLS_QTY | NUMBER | Financial Sales Unit Quantity| 
|INV_SLS_HL | NUMBER | Financial Sales Volume (Hl)| 
|SLS_UNIT_PRC | NUMBER | Derived unit selling price in Canadian dollars associated with the sale| 
|GSV | NUMBER | Gross Sales Volume (Gross Turnover)| 
|TAX | NUMBER | Tax (Excise Duty)| 
|CUST_DISC | NUMBER | Customer Discount| 
|ADDL_CUST_DISC | NUMBER | Additional Customer Discount| 
|PRC_DISC | NUMBER | Price Discount| 
|SKU_DISC | NUMBER | SKU Discount| 
|BUS_DRVR_DISC | NUMBER | Business Driver Discount| 
|CUST_REBATE | NUMBER | Customer Rebate| 
|PRC_REBATE | NUMBER | Price Rebate| 
|SKU_REBATE | NUMBER | SKU Rebate| 
|BUS_DRVR_REBATE | NUMBER | Business Driver Rebate| 
|VIC | NUMBER | Variable Industrial Cost (VIC)| 
|VAR_PRI_WHSE_COST | NUMBER | Variable Primary Warehouse Cost| 
|VAR_PRI_TRNSPRT_COST | NUMBER | Variable Primary Transportation Cost| 
|VAR_SCNDY_WHSE_COST | NUMBER | Variable Secondary Warehouse Cost| 
|VAR_SCNDY_TRNSPRT_COST | NUMBER | Variable Secondary Transportation Cost| 
|LGSTC_DISC | NUMBER | Logistic Cost| 
|LGSTC_REBATE | NUMBER | Logistic Rebate| 
|OTH_VIC | NUMBER | Other Variable Industrial Cost (Other VIC)| 
|MKTNG_COST | NUMBER | Marketing Cost| 
|OTH_RVNU | NUMBER | Other Revenue| 
|INTCMPY_PNL | NUMBER | Intercompany Profit and Loss| 
|CUST_SAP_CH_CODE | TEXT | Customer SAP Channel Code| 
|INV_SLS_QTY_UOM | TEXT | Unit of Measure for Financial Sales Quantity| 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last updated by ETL| 
