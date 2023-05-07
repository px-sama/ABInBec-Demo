---
title: Other Dimension
tags:
    - Period
    - Financial Comapny
    - Profit Center
    - Cross Reference Owner
    - Sales Source
    - Planning Scenario
---
# Other Dimension

Other Small Dimension which are not grouped into othe r Categories ate listed below. These are use for data analysis and has various component like
- Period
- Financial Comapny
- Profit Center
- Cross Reference Owner
- Sales Source
- Planning Scenario


## Period Definition

Period definition is created to support the financial calendar of an external sales or price source (for example LCBO or BC LDB).The periods may also be used to define pricing windows.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PRD_DEF](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_PRD_DEF)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PRD_DEF](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRD_DEF)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PRD_DEF](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRD_DEF)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PRD_DEF_SK | NUMBER | Surrogate Key on Period Definition
PRD_DEF_CODE | TEXT | Period Definition Code (ID)
PRD_DEF_NAME | TEXT | Period Definition Name
PRD_DEF_ABBR | TEXT | Period Definition Abbreviation
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update

## Period Definition Details

Period definition detail allows creation of the periods as defined in the financial calendar for the external sales organization.  Each record corresponds to one period on the financial calendar, with its distinct start and end dates.  Typically, all periods for the same fiscal year (e.g. 2016) will be defined at the same time.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PRD_DEF_DTL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_PRD_DEF_DTL)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PRD_DEF_DTL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRD_DEF_DTL)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PRD_DEF_DTL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRD_DEF_DTL)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PRD_DEF_DTL_SK | NUMBER | Surrogate Key on Period Definition Detail
PRD_DEF_DTL_KEY | TEXT | Period Definition Detail Key as used in source
PRD_DEF_DTL_CODE | TEXT | Period Definition Detail Code as used in source
PRD_DEF_DTL_YR | NUMBER | Period Definition Detail Year as defined in source
PRD_DEF_DTL_NBR | NUMBER | Period Definition Detail Period Number as defined in source
PRD_DEF_DTL_START_DT | DATE | Period Definition Detail Period Start Date
PRD_DEF_DTL_END_DT | DATE | Period Definition Detail Period End Date
PRD_DEF_DTL_SEQ | NUMBER | Period Definition Detail Period Sequence within the Period Definition
PRD_DEF_DTL_PY_SK | NUMBER | Surrogate Key on Period Definition Detail for the prior year
PRD_DEF_SK | NUMBER | Surrogate Key on Period Definition
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update


 ## Financial Company

This category holds the list of financial companies as defined in SAP. The list is short and very stable. As such it is not loaded from SAP directly but dual managed. The values in MDM/Snowflake are expected to reflect the values defined in SAP exactly.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_FIN_CMPY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_FIN_CMPY)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_FIN_CMPY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_FIN_CMPY)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_FIN_CMPY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_FIN_CMPY)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
FIN_CMPY_SK | NUMBER | Surrogate Key on Financial Company
FIN_CMPY_CODE | TEXT | Financial Company Code
FIN_CMPY_NAME | TEXT | Financial Company Name
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL


 ## Profit Center

This category holds profit centers as defined in SAP. While the core data is loaded from SAP, the associations to the Sales Organization and Channel are managed manually in MDM. The association to a Sales Organization can be at any level although the norm is to link a profit center to a province level organization in the SALES structure.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PRFT_CNTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_PRFT_CNTR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PRFT_CNTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRFT_CNTR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PRFT_CNTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRFT_CNTR)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PRFT_CNTR_SK | NUMBER | Surrogate Key on Profit Centre
PRFT_CNTR_CODE | TEXT | Profit Centre Code
PRFT_CNTR_NAME | TEXT | Profit Centre Name
PRFT_CNTR_ABBR | TEXT | Profit Centre Abbreviation
SLS_SLS_ORG_SK | NUMBER | Surrogate Key on SALES Sales Organization Associated With the Profit Centre
PREM_SK | NUMBER | Surrogate Key on Premise Associated With the Profit Centre (when Profit Centre is not associated with Sales Channel)
SLS_CH_SK | NUMBER | Surrogate Key on Sales Channel Associated With the Profit Centre (when Profit Centre is not associated with Premise)
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update by ETL


 ## Sales Source

Sales source is defined to capture essential information related to an external or internal source of sales data. Indicators are set which provide details on the characteristics of and context for the source data.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_SLS_SRC)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_SRC)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_SRC)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SLS_SRC_SK | NUMBER | Surrogate Key on Sales Source
SLS_SRC_CODE | TEXT | Sales Source Code (ID)
SLS_SRC_NAME | TEXT | Sales Source Name
SLS_SRC_TM_DMN | TEXT | Sales Source Time Domain
CMRCL_SLS_IND | NUMBER | Commercial Sales Indicator
DEMND_SLS_IND | NUMBER | Demand Sales Indicator
VC_SLS_IND | NUMBER | Variable Compensation Sales Indicator
RR_SLS_IND | NUMBER | Revenue Recognition Sales Indicator
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update
CNTER_SLS_IND | NUMBER | Counter Sales Indicator
PROD_XREF_OWNR_SK | NUMBER | Product Cross Reference Owner Surrogate Key
LOC_XREF_OWNR_SK | NUMBER | Location Cross Reference Owner Surrogate Key
SLS_TRAN_XREF_OWNR_SK | NUMBER | Sales Transaction Type Cross Reference Owner Surrogate Key
RTD_SLS_IND | NUMBER | RTD Focused Analysis Sales Indicator
BEER_SLS_IND | NUMBER | Beer Focused Analysis Sales Indicator
PRD_DEF_SK | NUMBER | Period Definition Surrogate Key
DLY_SLS_IND | NUMBER | Daily Sales Indicator
LIQ_BD_DEMND_SLS_IND | NUMBER | Demand Liquor Board Sales Indicator


 ## Cross Reference Owner

Cross reference owners are the unique list of distributers, liquor boards or other external entities that report sales, price, inventory or other data. As an owner, they own the external codes in the reported sales data. The cross reference they own is the cross reference from their code to an ABI definition. Some cross reference owners may use codes that overlap. An example could be UPC code or CSPC code. Owners can share a cross reference where they truly are shared. In a case such as this, the real owner (UPC) may be assigned to each of the separate owners. In cases where there is some overlap of codes but the owners really manage their ongoing lists independently, the ownership is better left independent to avoid conflicts, although this implies more cross reference lines must be managed.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_XREF_OWNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_XREF_OWNR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_XREF_OWNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_XREF_OWNR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_XREF_OWNR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_XREF_OWNR)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
XREF_OWNR_SK | NUMBER | Surrogate Key on Cross Reference Owner
XREF_OWNR_CODE | TEXT | Cross Reference Owner Code(ID)
XREF_OWNR_NAME | TEXT | Cross Reference Owner Name
XREF_OWNR_ABBR | TEXT | Cross Reference Owner Abbreviation
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update



 ## Planning Scenario

Planning Scenario is added to Datast to represent if it is Actuals or Budget data.
Budget and LE data cane be further classified into BU1, BU2 and LE1 , LE2 etc.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_PLNG_SCEN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_PLNG_SCEN)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PLNG_SCEN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PLNG_SCEN)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_PLNG_SCEN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PLNG_SCEN)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PLNG_SCEN_SK | NUMBER | Surrogate Key on Planning Scenario
PLNG_SCEN_CODE | TEXT | Planning Scenario Code
PLNG_SCEN_NAME | TEXT | Planning Scenario Name
PLNG_SCEN_NAME_FR | TEXT | Planning Scenario French Name
DEL_IND | NUMBER | Deleted Indicator
LAST_UPDATED_TSP | TIMESTAMP_NTZ | Date and time of last update



## Qlik Sales Sales Source

Application dimensional view for Qlik sales reflecting sales source definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_SLS_SRC)<br/>

Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SLS_SRC_KEY|NUMBER(38)|Sales Source Key (csdi.ref_sls_src.sls_src_sk)
SLS_SRC_CODE|VARCHAR(10)|Sales Source Code
SLS_SRC_NAME|VARCHAR(256)|Sales Source Name
SLS_SRC_TM_DMN|VARCHAR(1)|Sales Source Time Domain
CMRCL_SLS_IND|NUMBER(38,0)|Commercial Sales Indicator
DLY_SLS_IND|NUMBER(38,0)|Daily Sales Indicator
DEMND_SLS_IND|NUMBER(38,0)|Demand Sales Indicator
VC_SLS_IND|NUMBER(38,0)|Variable Compensation Sales Indicator
RR_SLS_IND|NUMBER(38,0)|Revenue Recognition Sales Indicator
CNTER_SLS_IND|NUMBER(38,0)|Counter Sales Indicator
RTD_SLS_IND|NUMBER(38,0)|RTD Focused Analysis Sales Indicator
BEER_SLS_IND|NUMBER(38,0)|Beer Focused Analysis Sales Indicator

## Qlik Sales Planning Scenario

Application dimensional view for Qlik Sales reflecting Planning Scenario Definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_PLNG_SCEN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_PLNG_SCEN)<br/>

Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PLNG_SCEN_KEY|NUMBER|Planning Scenario Key
PLNG_SCEN_CODE|VARCHAR(32)|Planning Scenario Code
PLNG_SCEN_NAME|VARCHAR(64)|Planning Scenario Name
PLNG_SCEN_NAME_FR|VARCHAR(64)|Planning Scenario French Name