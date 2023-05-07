---
title: Canada Distribution Monthly
slug: /Canada-Distribution/Monthly
tags:
    - Canada Distribution
    - Monthly
---
# Canada Distribution Monthly :
These tables contain distribution for Canada at Monthly level. It shows if there is any distribution (based on Sales or Survey ) for any perticular SKU in the store.
The Variable compensation Volume is used in calculating Distribution.


## Canada Distribution Monthly Application View

The view is created for Consumption for Canada Distribution Monthly Reporting.

### View Name 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY

### Dependency

``` mermaid
graph LR;

A[CSDI.FCT_POC_PROD_DIST_MNTHLY] --> B[CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY];
click A "https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly#Canada-Distribution-Monthly-Base-View"

D[CSDI.APP_CS_REF_GEOGRAPHY_POC] --> B[CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY];
click D "https://docs.alchemy.beertech.com/docs/Canada-Location/Application-View#canada-sales-geography-view"

E[CSDI_T.MAP_COMM_KPI_SKU_LIST] --> B[CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY];
click E "https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly#Canada-Distribution-Monthly-Base-View"


C[CSDI.REF_MO] --> B[CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY];
click C "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#month"

```



### Table/View Details

| Target Object                        | Source Objects                                                                                                   | Join Condition                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Filter Condition | Transformation Process | Additional Details | Job Code | Process | Cadence |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------- | ------------------ | -------- | ------- | ------- |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CSDI.FCT_POC_PROD_DIST_MNTHLY,<br/>CSDI.REF_MO,<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST | CSDI.FCT_POC_PROD_DIST_MNTHLY dist<br/>INNER JOIN CSDI.REF_MO mo<br/>         on dist.mo_sk = mo.mo_sk<br/>LEFT JOIN CSDI_T.MAP_COMM_KPI_SKU_LIST SL_C9<br/>        on dist.POC_SK=SL_C9.POC_SK and dist.CNSMR_PROD_SK=SL_C9.CNSMR_PROD_SK and SL_C9.KPI_NAME='C9'<br/>LEFT JOIN CSDI_T.MAP_COMM_KPI_SKU_LIST SL_S7<br/>        on dist.POC_SK=SL_S7.POC_SK and dist.CNSMR_PROD_SK=SL_S7.CNSMR_PROD_SK and SL_S7.KPI_NAME='S7'<br/>INNER JOIN CSDI.APP_CS_REF_GEOGRAPHY_POC POC<br/>        on POC.POC_SK=dist.POC_SK |                  | View                   |                    |          |         |         |



### Column Details

| Target Object                        | Target Column Names     | Source Coulmn Name                                                                                                                                                                                                                                                                                                   | Logic                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Transformation Process |
| ------------------------------------ | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | EFF_DT                  | CSDI.REF_MO.MO_SK,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.MO_SK,<br/>CSDI.REF_MO.START_DT                                                                                                                                                                                                                                   | CSDI.REF_MO.START_DT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | POC_SK                  | CSDI.FCT_POC_PROD_DIST_MNTHLY.POC_SK                                                                                                                                                                                                                                                                                 | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | BI_ITEM_SK              | CSDI.FCT_POC_PROD_DIST_MNTHLY.BI_ITEM_SK                                                                                                                                                                                                                                                                             | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SLS_DIST_IND         | CSDI.FCT_POC_PROD_DIST_MNTHLY.CM_SLS_DIST_IND                                                                                                                                                                                                                                                                        | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SVY_DIST_IND         | CSDI.FCT_POC_PROD_DIST_MNTHLY.CM_SVY_DIST_IND                                                                                                                                                                                                                                                                        | WK.Start_DT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_DIST_IND        | CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_SLS_DIST_IND                                                                                                                                                                                                                                                                       | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SVY_DIST_IND        | CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_SVY_DIST_IND                                                                                                                                                                                                                                                                       | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SLS_HL               | CSDI.FCT_POC_PROD_DIST_MNTHLY.CM_SLS_HL                                                                                                                                                                                                                                                                              | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_HL              | CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_SLS_HL                                                                                                                                                                                                                                                                             | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_DIST_IND             | CSDI.FCT_POC_PROD_DIST_MNTHLY.CM_DIST_IND                                                                                                                                                                                                                                                                            | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_DIST_IND            | CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_DIST_IND                                                                                                                                                                                                                                                                           | Straight Move                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | COMM_KPI_OPEN_STORE_IND | CSDI.FCT_POC_PROD_DIST_MNTHLY.POC_SK,<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC.POC_SK,<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC.POC_CALLD_ON_CTGY_CODE<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC.PREM_NAME<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC.SLS_PROV_NAME<br/>CSDI.APP_CS_REF_GEOGRAPHY_POC.SLS_CH_NAME                                        | This indicator is 1 for Retails Store  which is marked as maked as "Field Sales" called on indicator. Except for Ontario TBS Store.<br/>Logic:<br/>case when<br/>                CSDI.APP_CS_REF_GEOGRAPHY_POC.POC_CALLD_ON_CTGY_CODE='FIELD SALES'<br/>               and CSDI.APP_CS_REF_GEOGRAPHY_POC.PREM_NAME='OFF'<br/>                and not ( CSDI.APP_CS_REF_GEOGRAPHY_POC.SLS_PROV_NAME='ONTARIO'<br/>                              and CSDI.APP_CS_REF_GEOGRAPHY_POC.SLS_CH_NAME='Brewers Distributors' ) <br/>then 1 else 0 end | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | C9_COMM_KPI_PROD_IND    | CSDI.FCT_POC_PROD_DIST_MNTHLY.POC_SK,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.CNSMR_PROD_SK,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.KPI_NAME,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_SLS_DIST_IND,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.POC_SK,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.CNSMR_PROD_SK,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.KPI_NAME, | if there is a SKU in the C9 SKU list and R3M Distribution  greater that 1 then 1 else 0                                                                                                                                                                                                                                                                                                                                                                                                                                                   | View                   |
| CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | S7_COMM_KPI_PROD_IND    | CSDI.FCT_POC_PROD_DIST_MNTHLY.POC_SK,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.CNSMR_PROD_SK,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.KPI_NAME,<br/>CSDI.FCT_POC_PROD_DIST_MNTHLY.R3M_SLS_DIST_IND,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.POC_SK,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.CNSMR_PROD_SK,<br/>CSDI_T.MAP_COMM_KPI_SKU_LIST.KPI_NAME, | if there is a SKU in the S7 SKU list and R3M Distribution  greater that 1 then 1 else 0                                                                                                                                                                                                                                                                                                                                                                                                                                                   | View                   |



## Canada Distribution Monthly Base View

The View is created for base view to store The Monthly Distribution.

### View Name 
CSDI.FCT_POC_PROD_DIST_MNTHLY

### Dependency

``` mermaid
graph LR;

A[CSDI_V.FCT_POC_DIST_SRVY] --> B[CSDI.FCT_POC_PROD_DIST_MNTHLY];
click A "https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly#Canada-Distribution-Survey-Monthly"

D[CSDI_V.FCT_POC_DIST_SLS_MNTHLY] --> B[CSDI.FCT_POC_PROD_DIST_MNTHLY];
click D "https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly#Canada-Distribution-Sales-Monthly"

```



### Table/View Details

| Target Object                 | Source Objects                                              | Join Condition                                                                                                                                                                                                          | Filter Condition | Transformation Process | Additional Details | Job Code | Process | Cadence |
| ----------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------- | ------------------ | -------- | ------- | ------- |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CSDI_V.FCT_POC_DIST_SRVY,<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY | CSDI_V.FCT_POC_DIST_SRVY svy<br/>  full outer join CSDI_V.FCT_POC_DIST_SLS_MNTHLY SLS<br/>         on svy.mo_sk=sls.mo_sk<br/>         and svy.poc_sk=sls.poc_sk <br/>         and  svy.cnsmr_prod_sk=sls.cnsmr_prod_sk |                  | View                   |                    |          |         |         |


### Column Details

| Target Object                 | Target Column Names | Source Coulmn Name                                                                      | Logic                                                                                     | Transformation Process |
| ----------------------------- | ------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------- |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | MO_SK               | CSDI_V.FCT_POC_DIST_SRVY.MO_SK,<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY.MO_SK                 | NVL(CSDI_V.FCT_POC_DIST_SRVY.MO_SK, CSDI_V.FCT_POC_DIST_SLS_MNTHLY.MO_SK )                | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | POC_SK              | CSDI_V.FCT_POC_DIST_SRVY.POC_SK,<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY.POC_SK               | NVL(CSDI_V.FCT_POC_DIST_SRVY.POC_SK, CSDI_V.FCT_POC_DIST_SLS_MNTHLY.POC_SK )              | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CNSMR_PROD_SK       | CSDI_V.FCT_POC_DIST_SRVY.CNSMR_PROD_SK,<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CNSMR_PROD_SK | NVL(CSDI_V.FCT_POC_DIST_SRVY.CNSMR_PROD_SK, CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CNSMR_PROD_SK) | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CM_SLS_DIST_IND     | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CM_SLS_DIST_IND                                          | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CM_SLS_DIST_IND                                            | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CM_SVY_DIST_IND     | CSDI_V.FCT_POC_DIST_SRVY.DIST_IND                                                       | CSDI_V.FCT_POC_DIST_SRVY.DIST_IND                                                         | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_DIST_IND    | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.R3M_SLS_DIST_IND                                         | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.R3M_SLS_DIST_IND                                           | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | R3M_SVY_DIST_IND    | CSDI_V.FCT_POC_DIST_SRVY.R3M_DIST_IND                                                   | CSDI_V.FCT_POC_DIST_SRVY.R3M_DIST_IND                                                     | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CM_SLS_HL           | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CM_SLS_HL                                                | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CM_SLS_HL                                                  | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_HL          | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.R3M_SLS_HL                                               | CSDI_V.FCT_POC_DIST_SLS_MNTHLY.R3M_SLS_HL                                                 | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | CM_DIST_IND         | CSDI_V.FCT_POC_DIST_SRVY.CW_DIST_IND<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY.CW_DIST_IND      | if there is distrution from Sales or Survey in current month then 1 else 0                | View                   |
| CSDI.FCT_POC_PROD_DIST_MNTHLY | R3M_DIST_IND        | CSDI_V.FCT_POC_DIST_SRVY.R4W_DIST_IND<br/>CSDI_V.FCT_POC_DIST_SLS_MNTHLY.R4W_DIST_IND    | if there is distrution from Sales or Survey in last 3 Month then 1 else 0                 | View                   |\



## Canada Distribution Survey Monthly

The View is created to show the monthly distribution based in Survey data.

### View Name 
CSDI_V.FCT_POC_DIST_SRVY

### Dependency

``` mermaid
graph LR;

A[CSDI.FCT_BASE_POC_DIST_SRVY] --> B[CSDI_V.FCT_POC_DIST_SRVY];


D[CSDI.DIM_DY_HIER] --> B[CSDI_V.FCT_POC_DIST_SRVY];
click D "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#day-dimension"

C[CSDI.REF_GENR_PROD] --> B[CSDI_V.FCT_POC_DIST_SRVY];
click C "https://docs.alchemy.beertech.com/docs/Canada-Product/Sellable-Product-Hierarchy#generic-product"


E[CSDI.REF_MO] --> B[CSDI_V.FCT_POC_DIST_SRVY];
click E "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#month"


F[csdi.map_roll2_mo] --> B[CSDI_V.FCT_POC_DIST_SRVY];
click F "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#rolling-2-month-mapping"

G[csdi.map_roll3_mo] --> B[CSDI_V.FCT_POC_DIST_SRVY];
click G "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#rolling-3-month-mapping"

```



### Table/View Details

| Target Object            | Source Objects                                                                                                                  | Join Condition                                                                                                                                                                                                                                                                                                                                                 | Filter Condition | Transformation Process | Additional Details | Job Code | Process | Cadence |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------- | ------------------ | -------- | ------- | ------- |
| CSDI_V.FCT_POC_DIST_SRVY | CSDI.FCT_BASE_POC_DIST_SRVY<br/>CSDI.DIM_DY_HIER<br/>CSDI.REF_GENR_PROD<br/>CSDI.REF_MO<br/>csdi.map_roll2_mo<br/> csdi.map_roll3_mo | csdi.fct_base_poc_dist_srvy bas<br/>                  JOIN csdi.dim_dy_hier dy   ON  bas.dy_sk = dy.dy_sk<br/>                  JOIN csdi.ref_genr_prod gp  ON  bas.genr_prod_sk = gp.genr_prod_sk<br/><br/>Use csdi.map_roll2_mo and csdi.map_roll3_mo is used for calculating R3M and R2M Distribution.<br/>Mo_sk from REF_DY join with roll2_mo_sk / roll3_mo_sk |                  |                        |                    |          |         |         |


### Column Details

| Target Object            | Target Column Names | Source Coulmn Name                                                                                              | Logic                                                  | Transformation Process |
| ------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ---------------------- |
| CSDI_V.FCT_POC_DIST_SRVY | MO_SK               | csdi.fct_base_poc_dist_srvy.dy_sk<br/>csdi.dim_dy_hier.dy_sk<br/>csdi.dim_dy_hier.wk_sk<br/>csdi.ref_mo.mo_sk      | csdi.dim_dy_hier.mo_sk                                 |                        |
| CSDI_V.FCT_POC_DIST_SRVY | POC_SK              | csdi.fct_base_poc_dist_srvy.POC_SK                                                                              | csdi.fct_base_poc_dist_srvy.POC_SK                     |                        |
| CSDI_V.FCT_POC_DIST_SRVY | CNSMR_PROD_SK       | csdi.fct_base_poc_dist_srvy.GENR_PROD_SK<br/>CSDI.REF_GENR_PROD.GENR_PROD_SK<br/>CSDI.REF_GENR_PROD.CNSMR_PROD_SK | CSDI.REF_GENR_PROD.CNSMR_PROD_SK                       |                        |
| CSDI_V.FCT_POC_DIST_SRVY | PKG_CLS_SK          | csdi.fct_base_poc_dist_srvy.PKG_CLS_SK                                                                          | csdi.fct_base_poc_dist_srvy.PKG_CLS_SK                 |                        |
| CSDI_V.FCT_POC_DIST_SRVY | DIST_IND            | csdi.fct_base_poc_dist_srvy.DIST_IND                                                                            | csdi.fct_base_poc_dist_srvy.DIST_IND                   |                        |
| CSDI_V.FCT_POC_DIST_SRVY | ROLL2_DIST_IND      | csdi.fct_base_poc_dist_srvy.DIST_IND<br/>csdi.map_roll2_mo.roll2_mo_sk                                           | If there is distribution in last 2 Month then 1 else 0 |                        |
| CSDI_V.FCT_POC_DIST_SRVY | ROLL3_DIST_IND      | csdi.fct_base_poc_dist_srvy.DIST_IND<br/>csdi.map_roll3_mo.roll3_mo_sk                                           | If there is distribution in last 3 Month then 1 else 0 |                        |
| CSDI_V.FCT_POC_DIST_SRVY | LAST_UPDATED_TSP    | HARDCODED                                                                                                       | Current_timestamp                                      |                        |



## Canada Distribution Sales Monthly

The View is created to show the monthly distribution based in Sales data.

### View Name 
CSDI_V.FCT_POC_DIST_SLS_MNTHLY

### Dependency

``` mermaid
graph LR;

A[CSDI.FCT_POC_VC_SLS] --> B[CSDI_V.FCT_POC_DIST_SLS_MNTHLY];


C[CSDI.DIM_SLBL_PROD_HIER] --> B[CSDI_V.FCT_POC_DIST_SLS_MNTHLY];
click C "https://docs.alchemy.beertech.com/docs/Canada-Product/Sellable-Product-Hierarchy#sellable-product-dimension"


E[CSDI.REF_MO] --> B[CSDI_V.FCT_POC_DIST_SLS_MNTHLY];
click E "https://docs.alchemy.beertech.com/docs/certified-sets/Canada-sets/Date-Dimension#month"


```



### Table/View Details

| Target Object                  | Source Objects                                                | Join Condition                                                                                                                                                                             | Filter Condition | Transformation Process | Additional Details | Job Code | Process | Cadence |
| ------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ---------------------- | ------------------ | -------- | ------- | ------- |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | CSDI.FCT_POC_VC_SLS<br/>CSDI.REF_MO<br/>CSDI.DIM_SLBL_PROD_HIER | CSDI.FCT_POC_VC_SLS vc<br/>  inner join CSDI.REF_MO MO on vc.start_dt between MO.start_dt and MO.end_dt<br/>  inner join CSDI.DIM_SLBL_PROD_HIER sph on vc.bi_item_sk=sph.bi_item_sk<br/><br/> |                  |                        |                    |          |         |         |

### Column Details

| Target Object                  | Target Column Names | Source Coulmn Name                                                                                 | Logic                                                                      | Transformation Process |
| ------------------------------ | ------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------- |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | MO_SK               | CSDI.FCT_POC_VC_SLS.START_DT,<br/>CSDI.REF_MO.START_DT,<br/>CSDI.REF_MO.END_DT,<br/>CSDI.REF_MO.MO_SK | CSDI.REF_MO.MO_SK                                                          |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | POC_SK              | CSDI.FCT_POC_VC_SLS.POC_SK                                                                         | CSDI.FCT_POC_VC_SLS.POC_SK                                                 |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | CNSMR_PROD_SK       | CSDI.FCT_POC_VC_SLS.CNSMR_PROD_SK                                                                  | CSDI.FCT_POC_VC_SLS.CNSMR_PROD_SK                                          |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | CM_SLS_HL           | CSDI.FCT_POC_VC_SLS.VC_SLS_HL                                                                      | SUM(CSDI.FCT_POC_VC_SLS.VC_SLS_HL)                                         |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | CM_DIST_IND         | CSDI.FCT_POC_VC_SLS.VC_SLS_HL                                                                      | when SUM(CSDI.FCT_POC_VC_SLS.VC_SLS_HL) > 0 then 1 else 0                  |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | R3M_SLS_HL          | CSDI.FCT_POC_VC_SLS.VC_SLS_HL                                                                      | SUM(CSDI.FCT_POC_VC_SLS.VC_SLS_HL) for last 3 Month                        |                        |
| CSDI_V.FCT_POC_DIST_SLS_MNTHLY | R3M_DIST_IND        | CSDI.FCT_POC_VC_SLS.VC_SLS_HL                                                                      | when SUM(CSDI.FCT_POC_VC_SLS.VC_SLS_HL) for last 3 Month > 0 then 1 else 0 |                        |
