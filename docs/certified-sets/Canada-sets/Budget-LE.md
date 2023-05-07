---
title: Budget-LE
tags:
    - Canada
    - Budget
    - LE
---
# Budget/LE
## Labatt Budget/LE

### Base Views
Budget and LE(Latest Estimates) for Labatt SKUs are maintained in TM1 by Sales Intelligence team.
Budget are exported annually from TM1 and processed to Base Budget Table.
LE (Latest Estimates) are exported monthly as LE1, LE2 etc and loaded to Base Bughget table.
LE and Budget are both maintained in same table with different Planning Scenarios.

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.FCT_CMRCL_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/FCT_CMRCL_BDGT)<br/>
EDW View Name &emsp;: [EDW.CSDI_FCT_CMRCL_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_CMRCL_BDGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PLNG_SCEN_SK | NUMBER |  Surrogate Key for planing Scenario table CSDI.REF_PLNG_SCEN. It stores the type of Target - Budget/LE1/LE2 etc... | 
|MO_SK | NUMBER |  Surrogate Key for Month table CSDI.REF_MO. It stores the target month | 
|SLS_ORG_SK | NUMBER |  Surrogate Key for Sales Organization table CSDI.REF_SLS_ORG. It stores sales Organization code of the province  | 
|SLS_CH_SK | NUMBER |  Surrogate Key for Sales Channel  table CSDI.REF_SLS_CH. It stores all the Sales Channels like LCBO, BREWER DISTRIBUTORS , GROCERY , LICENSEE etc... | 
|BI_ITEM_SK | NUMBER |  Surrogate Key for BI ITEM table CSDI.REF_BI_ITEM.  It selects the best item for each SKU| 
|SHIP_HL | NUMBER |  Budgeted Shipment Volume in HL| 
|DEPLT_HL | NUMBER |  Budgeted Depletion Volume in HL| 
|NSV | NUMBER |  Budgeted Net Sales Value in CAD| 
|NSV_RT | NUMBER |  Budgeted Net Sales Value Rate per HL in CAD| 
|MACO | NUMBER |  Budgeted Margin Contribution in CAD| 
|MACO_RT | NUMBER |  Budgeted Margin Contribution in CAD| 
|GSV | NUMBER |  Budgeted Gross Sales Value in CAD| 
|GSV_RT | NUMBER |  Budgeted Gross Sales Value Rate per HL in CAD| 
|TAX | NUMBER |  Budgeted Total Tax in CAD| 
|TAX_RT | NUMBER |  Budgeted Total Tax Rate per HL in CAD| 
|SKU_DISC | NUMBER |  Budgeted Total Discount for each SKU in CAD| 
|SKU_DISC_RT | NUMBER |  Budgeted Total Discount Rate per HL for each SKU in CAD| 
|VIC | NUMBER |  Budgeted Variable Industrial Cost in CAD| 
|VLC | NUMBER |  Budgeted Variable Logistical Cost in CAD| 
|VIC_RT | NUMBER |  Budgeted Variable Industrial Cost Rate per HL in CAD| 
|VLC_RT | NUMBER |  Budgeted Variable Logistical Cost Rate per HL in CAD| 
|TM1_GENR_PROD_CODE | TEXT |  Generic Product Code provided from TM1| 
|TM1_GENR_PROD_NAME | TEXT |  Generic Product Name provided from TM1| 
|TM1_SKU_ALIAS_NAME | TEXT |  Generic Product SKU Alias NAME provided from TM1| 
|TM1_SKU_ALIAS_DESC | TEXT |  Generic Product SKU Alias Description provided from TM1| 
|LAST_PUB_DATE | TEXT |  Date when Budget was last published in TM1 if it is present in exported Scenario name | 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ |  Timestamps of when budget was loaded/updated in Snowflake| 


### Application Views

Application Views are used in Canada Sales Reporting Application to show Budget and LE.

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_CS_FCT_CMRCL_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_FCT_CMRCL_BDGT)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_CS_FCT_CMRCL_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_FCT_CMRCL_BDGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PLNG_SCEN_SK | NUMBER |  Surrogate Key for planing Scenario table CSDI.REF_PLNG_SCEN. It stores the type of Target - Budget/LE1/LE2 etc... | 
|MO_SK | NUMBER |  Surrogate Key for Month table CSDI.REF_MO. It stores the target month | 
|START_DT | DATE |  Start date of the target month | 
|POC_SK | NUMBER |  Surrogate Key for POC(Point Of Connect) table CSDI.APP_CS_REF_GEOGRAPHY. It stores the generic POC created for each province | 
|SLS_SUB_CH_SK | NUMBER |  Surrogate Key for Sales Sub Channel table CSDI.APP_CS_REF_SLS_CH.  It stores all the Sales Channels like LCBO, BREWER DISTRIBUTORS , GROCERY , LICENSEE etc... | 
|BI_ITEM_SK | NUMBER |  Surrogate Key for BI ITEM table CSDI.REF_BI_ITEM.  It selects the best item for each SKU| 
|SHIP_HL | NUMBER |  Budgeted Shipment Volume in HL| 
|DEPLT_HL | NUMBER |  Budgeted Depletion Volume in HL| 
|NSV | NUMBER |  Budgeted Net Sales Value in CAD| 
|NSV_RT | NUMBER |  Budgeted Net Sales Value Rate per HL in CAD| 
|MACO | NUMBER |  Budgeted Margin Contribution in CAD| 
|MACO_RT | NUMBER |  Budgeted Margin Contribution in CAD| 
|GSV | NUMBER |  Budgeted Gross Sales Value in CAD| 
|GSV_RT | NUMBER |  Budgeted Gross Sales Value Rate per HL in CAD| 
|TAX | NUMBER |  Budgeted Total Tax in CAD| 
|TAX_RT | NUMBER |  Budgeted Total Tax Rate per HL in CAD| 
|SKU_DISC | NUMBER |  Budgeted Total Discount for each SKU in CAD| 
|SKU_DISC_RT | NUMBER |  Budgeted Total Discount Rate per HL for each SKU in CAD| 
|VIC | NUMBER |  Budgeted Variable Industrial Cost in CAD| 
|VLC | NUMBER |  Budgeted Variable Logistical Cost in CAD| 
|VIC_RT | NUMBER |  Budgeted Variable Industrial Cost Rate per HL in CAD| 
|VLC_RT | NUMBER |  Budgeted Variable Logistical Cost Rate per HL in CAD| 
|TM1_GENR_PROD_CODE | TEXT |  Generic Product Code provided from TM1| 
|TM1_GENR_PROD_NAME | TEXT |  Generic Product Name provided from TM1| 
|TM1_SKU_ALIAS_NAME | TEXT |  Generic Product SKU Alias NAME provided from TM1| 
|TM1_SKU_ALIAS_DESC | TEXT |  Generic Product SKU Alias Description provided from TM1| 
|LAST_PUB_DATE | TEXT |  Date when Budget was last published in TM1 if it is present in exported Scenario name | 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ |  Timestamps of when budget was loaded/updated in Snowflake| 


## Industry Budget/LE

### Base Views
Budget and LE(Latest Estimates) at Industry Level are maintained in TM1 by Sales Intelligence team.
Budget are exported annually from TM1 and processed to Base Budget Table.
LE (Latest Estimates) are exported monthly as LE1, LE2 etc and loaded to Base Bughget table.
LE and Budget are both maintained in same table with different Planning Scenarios.

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.FCT_CMRCL_IND_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/FCT_CMRCL_IND_BDGT)<br/>
EDW View Name &emsp;: [EDW.CSDI_FCT_CMRCL_IND_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_CMRCL_IND_BDGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PLNG_SCEN_SK | NUMBER |  Surrogate Key for planing Scenario table CSDI.REF_PLNG_SCEN. It stores the type of Target - Budget/LE1/LE2 etc... | 
|MO_SK | NUMBER |  Surrogate Key for Month table CSDI.REF_MO. It stores the target month | 
|SLS_ORG_SK | NUMBER |  Surrogate Key for Sales Organization table CSDI.REF_SLS_ORG. It stores sales Organization code of the province  | 
|SLS_CH_SK | NUMBER |  Surrogate Key for Sales Channel  table CSDI.REF_SLS_CH. It stores all the Sales Channels like LCBO, BREWER DISTRIBUTORS , GROCERY , LICENSEE etc... | 
|BI_ITEM_SK | NUMBER |  Surrogate Key for BI ITEM table CSDI.REF_BI_ITEM.  It selects the best item for each SKU| 
|SHIP_HL | NUMBER |  Budgeted Shipment Volume in HL| 
|DEPLT_HL | NUMBER |  Budgeted Depletion Volume in HL| 
|NSV | NUMBER |  Budgeted Net Sales Value in CAD| 
|NSV_RT | NUMBER |  Budgeted Net Sales Value Rate per HL in CAD| 
|MACO | NUMBER |  Budgeted Margin Contribution in CAD| 
|MACO_RT | NUMBER |  Budgeted Margin Contribution in CAD| 
|GSV | NUMBER |  Budgeted Gross Sales Value in CAD| 
|GSV_RT | NUMBER |  Budgeted Gross Sales Value Rate per HL in CAD| 
|TAX | NUMBER |  Budgeted Total Tax in CAD| 
|TAX_RT | NUMBER |  Budgeted Total Tax Rate per HL in CAD| 
|SKU_DISC | NUMBER |  Budgeted Total Discount for each SKU in CAD| 
|SKU_DISC_RT | NUMBER |  Budgeted Total Discount Rate per HL for each SKU in CAD| 
|VIC | NUMBER |  Budgeted Variable Industrial Cost in CAD| 
|VLC | NUMBER |  Budgeted Variable Logistical Cost in CAD| 
|VIC_RT | NUMBER |  Budgeted Variable Industrial Cost Rate per HL in CAD| 
|VLC_RT | NUMBER |  Budgeted Variable Logistical Cost Rate per HL in CAD| 
|TM1_GENR_PROD_CODE | TEXT |  Generic Product Code provided from TM1| 
|TM1_GENR_PROD_NAME | TEXT |  Generic Product Name provided from TM1| 
|TM1_SKU_ALIAS_NAME | TEXT |  Generic Product SKU Alias NAME provided from TM1| 
|TM1_SKU_ALIAS_DESC | TEXT |  Generic Product SKU Alias Description provided from TM1| 
|LAST_PUB_DATE | TEXT |  Date when Budget was last published in TM1 if it is present in exported Scenario name | 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ |  Timestamps of when budget was loaded/updated in Snowflake| 


### Application Views

Application Views are used in Canada Sales Reporting Application to show Budget and LE for full Industry.

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_CS_FCT_CMRCL_IND_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_FCT_CMRCL_IND_BDGT)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_CS_FCT_CMRCL_IND_BDGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_FCT_CMRCL_IND_BDGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|PLNG_SCEN_SK | NUMBER |  Surrogate Key for planing Scenario table CSDI.REF_PLNG_SCEN. It stores the type of Target - Budget/LE1/LE2 etc... | 
|MO_SK | NUMBER |  Surrogate Key for Month table CSDI.REF_MO. It stores the target month | 
|START_DT | DATE |  Start date of the target month | 
|POC_SK | NUMBER |  Surrogate Key for POC(Point Of Connect) table CSDI.APP_CS_REF_GEOGRAPHY. It stores the generic POC created for each province | 
|SLS_SUB_CH_SK | NUMBER |  Surrogate Key for Sales Sub Channel table CSDI.APP_CS_REF_SLS_CH.  It stores all the Sales Channels like LCBO, BREWER DISTRIBUTORS , GROCERY , LICENSEE etc... | 
|BI_ITEM_SK | NUMBER |  Surrogate Key for BI ITEM table CSDI.REF_BI_ITEM.  It selects the best item for each SKU| 
|SHIP_HL | NUMBER |  Budgeted Shipment Volume in HL| 
|DEPLT_HL | NUMBER |  Budgeted Depletion Volume in HL| 
|NSV | NUMBER |  Budgeted Net Sales Value in CAD| 
|NSV_RT | NUMBER |  Budgeted Net Sales Value Rate per HL in CAD| 
|MACO | NUMBER |  Budgeted Margin Contribution in CAD| 
|MACO_RT | NUMBER |  Budgeted Margin Contribution in CAD| 
|GSV | NUMBER |  Budgeted Gross Sales Value in CAD| 
|GSV_RT | NUMBER |  Budgeted Gross Sales Value Rate per HL in CAD| 
|TAX | NUMBER |  Budgeted Total Tax in CAD| 
|TAX_RT | NUMBER |  Budgeted Total Tax Rate per HL in CAD| 
|SKU_DISC | NUMBER |  Budgeted Total Discount for each SKU in CAD| 
|SKU_DISC_RT | NUMBER |  Budgeted Total Discount Rate per HL for each SKU in CAD| 
|VIC | NUMBER |  Budgeted Variable Industrial Cost in CAD| 
|VLC | NUMBER |  Budgeted Variable Logistical Cost in CAD| 
|VIC_RT | NUMBER |  Budgeted Variable Industrial Cost Rate per HL in CAD| 
|VLC_RT | NUMBER |  Budgeted Variable Logistical Cost Rate per HL in CAD| 
|TM1_GENR_PROD_CODE | TEXT |  Generic Product Code provided from TM1| 
|TM1_GENR_PROD_NAME | TEXT |  Generic Product Name provided from TM1| 
|TM1_SKU_ALIAS_NAME | TEXT |  Generic Product SKU Alias NAME provided from TM1| 
|TM1_SKU_ALIAS_DESC | TEXT |  Generic Product SKU Alias Description provided from TM1| 
|LAST_PUB_DATE | TEXT |  Date when Budget was last published in TM1 if it is present in exported Scenario name | 
|LAST_UPDATED_TSP | TIMESTAMP_NTZ |  Timestamps of when budget was loaded/updated in Snowflake| 


### Qlik Provincial Industry Targets Application View

Application transactional view for Qlik Sales reflecting Provincial Industry Targets.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_PROV_IND_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_PROV_IND_TGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions|
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level for provincial level organizations|
ITEM_KEY|VARCHAR|Item Key for Qlik - Price Class Level|
PLNG_SCEN_KEY|NUMBER(38)|Planning Scenario Key for Qlik|
TGT_SLS_HL|NUMBER(38,12)|Target HL Volume of the product to be sold|
MO_SK|NUMBER(38)|Surrogate Key on Month - used for filtering only|
START_DT|DATE|Start Date of Period - used for filtering only|
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only|

### Qlik Monthly Territory Sales Target Application View

Application transactional view for Qlik Sales reflecting Provincial Industry Targets.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_MO_TERR_VOL_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_MO_TERR_VOL_TGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level
ITEM_KEY|VARCHAR|Item Key for Qlik - BI Item Level
SLS_CH_KEY|VARCHAR|Sales Channel Key for Qlik - Sales Channel Level
PLNG_SCEN_KEY|NUMBER(38)|Planning Scenario Key for Qlik
TGT_SLS_HL|NUMBER(28,12)|Target HL Volume of the product to be sold
MO_SK|NUMBER(38)|Surrogate Key on Month - used for filtering only
START_DT|DATE|Start Date of Period - used for filtering only
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only

### Qlik Monthly Provincial Sales Target Application View

Transactional data view for Qlik Sales reflecting Monthly shipment volume Target transactions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_PROV_VOL_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_PROV_VOL_TGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level for provincial level organizations
ITEM_KEY|VARCHAR|Item Key for Qlik - BI Item Level
PLNG_SCEN_KEY|NUMBER(38)|Planning Scenario Key for Qlik
TGT_SLS_HL|NUMBER(28,12)|Target HL Volume of the product to be sold
MO_SK|NUMBER(38)|Surrogate Key on Month - used for filtering only
START_DT|DATE|Start Date of Period - used for filtering only
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only

### Qlik Monthly Shipment Volume Target Application View

Transactional data view for Qlik Sales reflecting Monthly shipment volume Target transactions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_SHP_VOL_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_SHP_VOL_TGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level for provincial level organizations
ITEM_KEY|VARCHAR|Item Key for Qlik - BI Item Level
PLNG_SCEN_KEY|NUMBER(38)|Planning Scenario Key for Qlik
TGT_SLS_HL|NUMBER(28,12)|Target HL Volume of the product to be sold
MO_SK|NUMBER(38)|Surrogate Key on Month - used for filtering only
START_DT|DATE|Start Date of Period - used for filtering only
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Date and time of last update - used for filtering only

### Qlik Monthly Territory Distribution Target Application View

Transactional data view for Qlik Sales reflecting Monthly shipment volume Target transactions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_TERR_DIST_TGT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_TERR_DIST_TGT)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik at the monthly level - key as reflected in the transactions
POC_KEY|VARCHAR|POC Key for Qlik - Sales Organization Level
ITEM_KEY|VARCHAR|Item Key for Qlik - Package Class Level
SLS_CH_KEY|VARCHAR|Sales Channel Key for Qlik -  Sales Channel Level
PLNG_SCEN_KEY|NUMBER(38)|Planning Scenario Key for Qlik
TGT_DIST_CNT|NUMBER(38)|Target distribution of the product to be sold
MO_SK|NUMBER(38)|Surrogate Key on Month - Used for filtering only
START_DT|DATE|Start Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ(9)|Last Updated Date