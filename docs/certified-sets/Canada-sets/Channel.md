---
title: Channel
tags:
    - Canada
    - Masterdata
    - Premise
    - Channel
    - Sub-Channel
---
# Channel Dimension

Channel Dimension signifies the channel of Sales or Outlet.It can be Retail or On-Prem channels based on Sales Transation or Type of Outlet. Below are the atributes under channel dimension.
- Premise
- Channel
- Sub-Channel


## Channel Hierarchy

Channel Hierarchy contains all the attribute related to Channel Hierarchy like Premise, Channel and Sub-Channel.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_CH_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/DIM_CH_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_CH_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_CH_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_CH_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_CH_HIER)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
| SLS_SUB_CH_SK | NUMBER | Surrogate Key on Sales Sub Channel
| SLS_SUB_CH_CODE | TEXT | Sales Sub Channel Code(ID)
| SLS_SUB_CH_NAME | TEXT | Sales Sub Channel Name
| SLS_SUB_CH_SHT_NAME | TEXT | Sales Sub Channel Short Name
| SLS_SUB_CH_NAME_FR | TEXT | Sales Sub Channel French Name
| SLS_SUB_CH_SHT_NAME_FR | TEXT | Sales Sub Channel French Short Name
| SLS_CH_SK | NUMBER | Surrogate Key on Sales Channel
| SLS_CH_CODE | TEXT | Sales Channel Code(ID)
| SLS_CH_NAME | TEXT | Sales Channel Name
| SLS_CH_SHT_NAME | TEXT | Sales Channel Short Name
| SLS_CH_NAME_FR | TEXT | Sales Channel French Name
| SLS_CH_SHT_NAME_FR | TEXT | Sales Channel French Short Name
| PREM_SK | NUMBER | Surrogate Key on Premise
| PREM_CODE | TEXT | Premise Code(ID)
| PREM_NAME | TEXT | Premise  Name
| PREM_NAME_FR | TEXT | Premise French Name
| LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL




### Premise 
Premise Tables contains static list of Premise like "ON" for On-Premise and "OFF" for Retail.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PREM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_PREM)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PREM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PREM)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PREM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PREM)<br/>



Field Name	|	Data Type	|	Comment
|-	|	-	|	-
| PREM_SK | NUMBER | Surrogate Key on Premise
| PREM_CODE | TEXT | Premise Code(ID)
| PREM_NAME | TEXT | Premise Name
| PREM_NAME_FR | TEXT | Premise French Name
| DEL_IND | NUMBER | Deleted Indicator
| LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL


### Channel 
Channel Tables contains static list of Channel of Sales  like  "Grocery" , "Liquor Board" , "Brewer Distributor", "Licensee" etc.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_SLS_CH)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_CH)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_CH)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
| SLS_CH_SK | NUMBER | Surrogate Key on Sales Channel
| SLS_CH_CODE | TEXT | Sales Channel Code(ID)
| SLS_CH_NAME | TEXT | Sales Channel Name
| SLS_CH_SHT_NAME | TEXT | Sales Channel Short Name
| SLS_CH_NAME_FR | TEXT | Sales Channel French Name
| SLS_CH_SHT_NAME_FR | TEXT | Sales Channel French Short Name
| PREM_SK | NUMBER | Premise Surrogate Key
| DEL_IND | NUMBER | Deleted Indicator
| LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL


### Sub-Channel 
Sub-Channel Tables contains static list of Sub-Channel of Sales  like  "Grocery" , "Liquor Board Agency" , "Liquor Board Regular" , "Brewer Distributor", "Licensee" , "BAR" etc.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLS_SUB_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_SLS_SUB_CH)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLS_SUB_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_SUB_CH)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLS_SUB_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_SUB_CH)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
| SLS_SUB_CH_SK | NUMBER | Surrogate Key on Sales Sub Channel
| SLS_SUB_CH_CODE | TEXT | Sales Sub Channel Code(ID)
| SLS_SUB_CH_NAME | TEXT | Sales Sub Channel Name
| SLS_SUB_CH_SHT_NAME | TEXT | Sales Sub Channel Short Name
| SLS_SUB_CH_NAME_FR | TEXT | Sales Sub Channel French Name
| SLS_SUB_CH_SHT_NAME_FR | TEXT | Sales Sub Channel French Short Name
| SLS_CH_SK | NUMBER | Sales Channel Surrogate Key
| DEL_IND | NUMBER | Deleted Indicator
| LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL


## Application View

### Canada Sales Channel View

This view is created to have the data at both Channel and Sub Channel Level so that one view can directly be connected to different fact tables which have data at different level.


View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_CS_REF_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_REF_SLS_CH)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_CS_REF_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_REF_SLS_CH)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SLS_SUB_CH_SK | NUMBER | Surrogate Key on Sales Sub Channel and Neegative Keys for Channel Level Data
SLS_SUB_CH_CODE | TEXT | Sales Sub Channel Code(ID) and $N in Case of Channel level Data
SLS_SUB_CH_NAME | TEXT | Sales Sub Channel Name and 'Not Classified' for Channel Level Data
SLS_CH_CODE | TEXT | Sales Channel Code(ID)
SLS_CH_NAME | TEXT |  Sales Channel Name
PREM_CODE | TEXT |  Premise Code(ID)
PREM_NAME | TEXT | Premise Name


### Qlik Sales Channel View

This diemsional view is created to have the data at both Channel and Sub Channel Level so that one view can directly be connected to different fact tables which have data at different level. It will used in Qlik sales reporting.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_SLS_CH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_SLS_CH)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SLS_CH_KEY|VARCHAR|Sales Channel Key Derived from (csdi.ref_sls_src.sls_ch_sk)
SLS_SUB_CH_CODE|VARCHAR(2)|Sales Sub Channel Code
SLS_SUB_CH_NAME|VARCHAR(50)|Sales Sub Channel Name
SLS_SUB_CH_NAME_FR|VARCHAR(50)|Sales Sub Channel French Name
SLS_SUB_CH_SHT_NAME|VARCHAR(50)|Sales Sub Channel Short Name
SLS_SUB_CH_SHT_NAME_FR|VARCHAR(50)|Sales Sub Channel French Short Name
SLS_CH_CODE|VARCHAR(2)|Sales Channel Code
SLS_CH_NAME|VARCHAR(50)|Sales Channel Name
SLS_CH_NAME_FR|VARCHAR(50)|Sales Channel French Name
SLS_CH_SHT_NAME|VARCHAR(10)|Sales Channel Short Name
SLS_CH_SHT_NAME_FR|VARCHAR(10)|Sales Channel French Short Name
PREM_CODE|VARCHAR(2)|Premise Code
PREM_NAME|VARCHAR(13)|Premise Name
PREM_NAME_FR|VARCHAR(13)|Premise French Name
