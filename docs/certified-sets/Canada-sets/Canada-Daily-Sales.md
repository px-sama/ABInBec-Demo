---
title: Canada Daily Sales
tags:
    - Dates
    - Sales
---
# Canada Daily Sales  

The views that define Canada Daily Sales provide insight and high level reporting for Labatt only sales at a provincial and brand group level . There are views for both Business Day and Calendar Day that include detail for Budget & Latest Estimate (LE) by day, Month to Date (MTD) and Month to Go (MTD). The five step process to create these views runs once a day after all sales have been refreshed in CSDI and will refresh 3 months of data at a time to capture any restatements or adjustments.

### **[EDW.CSDI\_FCT\_DLY\_SLS\_AGG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_DLY_SLS_AGG)** 
This is the primary view representing the final daily aggregate built by business day (Monday-Friday excluding holidays) for daily, monthLy , MTD and MTG Sales, Budget, Financial Sales, LE, and Adjust LE and is known as the **Aggregate Daily Sales** view. Sales are typically reported for the prior business day but can be adjusted or overridden with control parameters. The data in this view is derived from the Detail Daily Sales and is aggregated using the Daily Sales Brand Group, Liquid Class and Liquid Segment. It incorporates Adjusted LE and Adjusted Sales data from TM1 (COGNOS). Note that Ontario Imports are handled differently that other regions as the Detail Sales are ignored with the expectation they will be entered through the adjustment process.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DLY\_SLS\_GEO_ID | NUMBER(38,0) | Daily Sales Geography ID |
| RPT_DT | DATE | Reporting Day Date |
| DLY\_SLS\_BRD\_GRP\_ID | VARCHAR(4) | Daily Sales Brand Group ID |
| LIQ\_CLS\_CODE | VARCHAR(6) | Liquid Class Code |
| LIQ\_CLS\_NAME | VARCHAR(64) | Liquid Class Name |
| LIQ\_SEG\_CODE | VARCHAR(4) | Liquid Segment Code |
| LIQ\_SEG\_NAME | VARCHAR(50) | Liquid Segment Name |
| DLY\_SLS\_hL | NUMBER(19,6) | Daily Reported Sales Volume including Adjustments and Lagging Volume (hL) |
| DLY\_RPT\_SLS_hL | NUMBER(19,6) | Daily Reported Sales Volume (hL) |
| DLY\_FIN\_SLS_hL | NUMBER(19,6) | Daily Financial Sales Volume (hL) |
| DLY\_BDGT\_SLS_hL | NUMBER(19,6) | Daily Budgeted Sales Volume (hL) |
| DLY\_LE\_SLS_hL | NUMBER(19,6) | Daily Latest Estimate Sales Volume (hL) |
| DLY\_ADJ\_LE\_SLS\_hL | NUMBER(19,6) | Daily Adjusted Latest Estimate Sales Volume (hL) |
| DLY\_NEG2\_SLS_hL | NUMBER(19,6) | Daily Target Sales Volume (hL) |
| MTD\_SLS\_hL | NUMBER(19,6) | Month to Date Reported Sales Volume plus Adjustments and Lagging Volume (hL) |
| MTD\_RPT\_SLS_hL | NUMBER(19,6) | Month to Date Reported Sales Volume (hL) |
| MTD\_FIN\_SLS_hL | NUMBER(19,6) | Month to Date Financial Sales Volume (hL) |
| MTD\_BDGT\_SLS_hL | NUMBER(19,6) | Month to Date Budgeted Sales Volume (hL) |
| MTD\_LE\_SLS_hL | NUMBER(19,6) | Month to Date Latest Estimate Sales Volume (hL) |
| MTD\_ADJ\_LE\_SLS\_hL | NUMBER(19,6) | Month to Date Adjusted Latest Estimate Sales Volume (hL) |
| MTD\_NEG2\_SLS_hL | NUMBER(19,6) | Month to Date Target Sales Volume (hL) |
| MTG\_SLS\_hL | NUMBER(19,6) | Month to Go Reported Sales Volume including Adjustments and Lagging Volume (hL) |
| MTG\_RPT\_SLS_hL | NUMBER(19,6) | Month to Go Reported Sales Volume (hL) |
| MTG\_FIN\_SLS_hL | NUMBER(19,6) | Month to Go Financial Sales Volume (hL) |
| MTG\_BDGT\_SLS_hL | NUMBER(19,6) | Month to Go Budgeted Sales Volume (hL) |
| MTG\_LE\_SLS_hL | NUMBER(19,6) | Month to Go Latest Estimate Sales Volume (hL) |
| MTG\_ADJ\_LE\_SLS\_hL | NUMBER(19,6) | Month to Go Adjusted Latest Estimate Sales Volume (hL) |
| MTG\_NEG2\_SLS_hL | NUMBER(19,6) | Month to Go NEG2 Sales Volume (hL) |
| MO\_SLS\_hL | NUMBER(19,6) | Total Month Reported Sales Volume including Adjustments and Lagging Volume (hL) |
| MO\_RPT\_SLS_hL | NUMBER(19,6) | Total Month Reported Sales Volume (hL) |
| MO\_FIN\_SLS_hL | NUMBER(19,6) | Total Month Financial Sales Volume (hL) |
| MO\_BDGT\_SLS_hL | NUMBER(19,6) | Total Month Budgeted Sales Volume (hL) |
| MO\_LE\_SLS_hL | NUMBER(19,6) | Total Month Latest Estimate Sales Volume (hL) |
| MO\_ADJ\_LE\_SLS\_hL | NUMBER(19,6) | Total Month Adjusted Latest Estimate Sales Volume (hL) |
| MO\_NEG2\_SLS_hL | NUMBER(19,6) | Total Month Target Sales Volume (hL) |
| DLY\_SLS\_ADJ_hL | NUMBER(19,6) | Daily Sales Adjustment (hL) |
| DLY\_SLS\_LAG_hL | NUMBER(19,6) | Daily Sales Lagging Volume Adjustment (hL) |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last updated by ETL |

  
  
  

### [**EDW.CSDI\_FCT\_DLY\_SLS\_SUM**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_DLY_SLS_SUM)
This view is nearly identical to the Aggregate Daily Sales view except that it is by calendar day and includes sales for days that occur on Holidays and weekends that may not normally be available at the aggregate level. The view also does not include any lagging volumes or adjustments. It is otherwise known as the **Summarized Daily Sales**.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DLY\_SLS\_GEO_ID | NUMBER(38,0) | Daily Sales Geography ID |
| DLY\_SLS\_BRD\_GRP\_ID | VARCHAR(4) | Daily Sales Brand Group ID |
| LIQ\_CLS\_CODE | VARCHAR(6) | Liquid Class Code |
| LIQ\_CLS\_NAME | VARCHAR(64) | Liquid Class Name |
| LIQ\_SEG\_CODE | VARCHAR(4) | Liquid Segment Code |
| LIQ\_SEG\_NAME | VARCHAR(50) | Liquid Segment Name |
| SALES_DT | DATE | Date of sale |
| DLY\_SLS\_hL | NUMBER(31,6) | Daily Reported Sales Volume not including Adjustments and Lagging Volume (hL) |
| DLY\_RPT\_SLS_hL | NUMBER(31,6) | Daily Reported Sales Volume (hL) |
| DLY\_FIN\_SLS_hL | NUMBER(31,6) | Daily Financial Sales Volume (hL) |
| DLY\_BDGT\_SLS_hL | NUMBER(31,6) | Daily Budgeted Sales Volume (hL) |
| DLY\_LE\_SLS_hL | NUMBER(31,6) | Daily Latest Estimate Sales Volume (hL) |
| DLY\_ADJ\_LE\_SLS\_hL | NUMBER(31,6) | Daily Adjusted Latest Estimate Sales Volume (hL) |
| DLY\_NEG2\_SLS_hL | NUMBER(31,6) | Daily Target Sales Volume (hL) |
| MTD\_SLS\_hL | NUMBER(31,6) | Month to Date Reported Sales Volume not including Adjustments and Lagging Volume (hL) |
| MTD\_RPT\_SLS_hL | NUMBER(31,6) | Month to Date Reported Sales Volume (hL) |
| MTD\_FIN\_SLS_hL | NUMBER(31,6) | Month to Date Financial Sales Volume (hL) |
| MTD\_BDGT\_SLS_hL | NUMBER(31,6) | Month to Date Budgeted Sales Volume (hL) |
| MTD\_LE\_SLS_hL | NUMBER(31,6) | Month to Date Latest Estimate Sales Volume (hL) |
| MTD\_ADJ\_LE\_SLS\_hL | NUMBER(31,6) | Month to Date Adjusted Latest Estimate Sales Volume (hL) |
| MTD\_NEG2\_SLS_hL | NUMBER(31,6) | Month to Date Target Sales Volume (hL) |
| MTG\_SLS\_hL | NUMBER(31,6) | Month to Go Reported Sales Volume not including Adjustments and Lagging Volume (hL) |
| MTG\_RPT\_SLS_hL | NUMBER(31,6) | Month to Go Reported Sales Volume (hL) |
| MTG\_FIN\_SLS_hL | NUMBER(31,6) | Month to Go Financial Sales Volume (hL) |
| MTG\_BDGT\_SLS_hL | NUMBER(31,6) | Month to Go Budgeted Sales Volume (hL) |
| MTG\_LE\_SLS_hL | NUMBER(31,6) | Month to Go Latest Estimate Sales Volume (hL) |
| MTG\_ADJ\_LE\_SLS\_hL | NUMBER(31,6) | Month to Go Adjusted Latest Estimate Sales Volume (hL) |
| MTG\_NEG2\_SLS_hL | NUMBER(31,6) | Month to Go NEG2 Sales Volume (hL) |
| MO\_SLS\_hL | NUMBER(32,6) | Total Month Reported Sales Volume not including Adjustments and Lagging Volume (hL) |
| MO\_RPT\_SLS_hL | NUMBER(32,6) | Total Month Reported Sales Volume (hL) |
| MO\_FIN\_SLS_hL | NUMBER(32,6) | Total Month Financial Sales Volume (hL) |
| MO\_BDGT\_SLS_hL | NUMBER(32,6) | Total Month Budgeted Sales Volume (hL) |
| MO\_LE\_SLS_hL | NUMBER(32,6) | Total Month Latest Estimate Sales Volume (hL) |
| MO\_ADJ\_LE\_SLS\_hL | NUMBER(32,6) | Total Month Adjusted Latest Estimate Sales Volume (hL) |
| MO\_NEG2\_SLS_hL | NUMBER(32,6) | Total Month Target Sales Volume (hL) |
| DLY\_SLS\_ADJ_hL | NUMBER(19,6) | Daily Sales Adjustment (hL) - always null |
| DLY\_SLS\_LAG_hL | NUMBER(19,6) | Daily Sales Lagging Volume Adjustment (hL) - always null |
| LAST\_UPDATED\_TSP | TIMESTAMP_LTZ(0) | Date and time of last updated by ETL |

  

### **[EDW.CSDI\_FCT\_DLY\_SLS\_DTL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_DLY_SLS_DTL)** 
This is the detail sales view known as Daily Sales Detail view from which the Aggregate Daily Sales view is derived. This view incldues reported daily sales from various sales sources, budget, and LE from TM1 (COGNOS). The Generic Prod Code can be used to either aggregate sales using the Daily Sales Brand Groups on CSDI\_DIM\_DLY\_SLS\_BRND\_GRP\_HIER or break sales out by product detail by joining to the CSDI\_DIM\_DLY\_SLS\_PROD\_HIER view


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DLY\_SLS\_GEO_ID | NUMBER(38,0) | Daily Sales Geography ID |
| GENR\_PROD\_CODE | VARCHAR(32) | Generic Product Code |
| PROD\_IMP\_CODE | VARCHAR(1) | Import / Domestic Indicator Code |
| SALES_DT | DATE | Date of sale |
| DLY\_RPT\_SLS_hL | NUMBER(19,6) | Daily Reported Sales Volume (hL) |
| DLY\_FIN\_SLS_hL | NUMBER(19,6) | Daily Financial Sales Volume (hL) |
| DLY\_BDGT\_SLS_hL | NUMBER(19,6) | Daily Budgeted Sales Volume (hL) |
| DLY\_LE\_SLS_hL | NUMBER(19,6) | Daily Latest Estimate Sales Volume (hL) |
| DLY\_NEG2\_SLS_hL | NUMBER(19,6) | Daily Target Sales Volume (hL) |
| PY\_RPT\_SLS_hL | NUMBER(19,6) | Prior Year Reported Sales Volume (hL) |
| PY\_FIN\_SLS_hL | NUMBER(19,6) | Prior Year Financial Sales Volume (hL) |
| FUT\_SLS\_IND | NUMBER(38,0) | Future Sale Indicator - Reported and Financial sales taken from Budget |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last updated by ETL |

  

### [**EDW.CSDI\_DIM\_DLY\_SLS\_BRND\_GRP\_HIER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DLY_SLS_BRD_GRP_HIER)
This view provides the Daily Sales Brand Groups used to aggregate brands for the purpose of Daily Sales Reporting. It can be joined directly from the Aggregate or Summary Daily Sales view views to pull or display data by Daily Sales Brand Groups.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DLY\_SLS\_BRD\_GRP\_ID | VARCHAR(4) | Daily Sales Brand Group ID |
| DLY\_SLS\_BRD\_GRP\_CODE | VARCHAR(10) | Daily Sales Brand Group Code |
| DLY\_SLS\_BRD\_GRP\_NAME | VARCHAR(50) | Daily Sales Brand Group Name |
| DLY\_SLS\_BRD\_GRP\_EXCLD_IND | NUMBER(38,0) | Brands assigned to a group that is marked as excluded will not show in daily sales reporting |
| DLY\_SLS\_BRD\_GRP\_PRNT_CODE | VARCHAR(128) | Daily Sales Brand Group Parent Code |
| DLY\_SLS\_BRD\_GRP\_PRNT_NAME | VARCHAR(128) | Daily Sales Brand Group Parent Name |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  

### **[EDW.CSDI\_DIM\_DLY\_SLS\_PROD_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DLY_SLS_PROD_HIER)** 
This view provides identifying attributes of a given product that can be leveraged for any level of sales analysis. The attributes of note on this view include Container, Package, Size, Brand, Brand family, Price Segment and Price Class at the Generic Product level. This view can be joined to Daily Sales Detail view to provide deeper insights on daily sales.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| GENR\_PROD\_CODE | VARCHAR(32) | Generic Product Code |
| GENR\_PROD\_NAME | VARCHAR(80) | Generic Product Name |
| BRD_CODE | VARCHAR(6) | Sellable Brand Code |
| BRD_NAME | VARCHAR(50) | Sellable Brand Name |
| PRC\_CLS\_CODE | VARCHAR(10) | Price Class Code as defined at the National Level |
| PRC\_CLS\_NAME | VARCHAR(50) | Price Class Name as defined at the National Level |
| PRC\_SEG\_CODE | VARCHAR(10) | Price Segment Code as defined at the National Level |
| PRC\_SEG\_NAME | VARCHAR(50) | Price Segment Name as defined at the National Level |
| LIQ\_CLS\_CODE | VARCHAR(6) | Liquid Class Code |
| LIQ\_CLS\_NAME | VARCHAR(64) | Liquid Class Name |
| LIQ\_SEG\_CODE | VARCHAR(4) | Liquid Segment Code |
| LIQ\_SEG\_NAME | VARCHAR(50) | Liquid Segment Name |
| BRD\_FMLY\_CODE | VARCHAR(10) | Brand Family Code |
| BRD\_FMLY\_NAME | VARCHAR(64) | Brand Family Name |
| DLY\_SLS\_BRD\_GRP\_ID | VARCHAR(4) | Daily Sales Brand Group ID |
| DLY\_SLS\_BRD\_GRP\_CODE | VARCHAR(6) | Daily Sales Brand Group Code |
| DLY\_SLS\_BRD\_GRP\_NAME | VARCHAR(50) | Daily Sales Brand Group Name |
| DLY\_SLS\_BRD\_GRP\_EXCLD_IND | NUMBER(38,0) | Brands assigned to a group that is marked as excluded will not show in daily sales reporting |
| DLY\_SLS\_BRD\_GRP\_PRNT_CODE | VARCHAR(6) | Daily Sales Brand Group Parent Code |
| DLY\_SLS\_BRD\_GRP\_PRNT_NAME | VARCHAR(50) | Daily Sales Brand Group Parent Name |
| BRD\_TGT\_SCOPE_NAME | VARCHAR(50) | Brand Target Scope Name |
| PKG_CODE | VARCHAR(6) | Package Code |
| PKG_NAME | VARCHAR(50) | Package Name |
| OTR\_PKG\_CONT\_CNT\_NBR | NUMBER(38,0) | Outer Package Container Count Number |
| INR\_PKG\_CONT\_CNT\_NBR | NUMBER(38,0) | Inner Package Container Count Number |
| CONT\_SZ\_NAME | VARCHAR(50) | Container Size Name |
| CONT\_SZ\_LIT | NUMBER(9,6) | Container Size in Litres |
| CONT\_TYP\_NAME | VARCHAR(50) | Container Type Name |
| PKG\_CLS\_NAME | VARCHAR(50) | Package Class Name |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  

### [**EDW.CSDI\_DIM\_DLY\_SLS\_PROD\_IMP\_HIER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DLY_SLS_PROD_IMP_HIER)
This view is used to determine if a product is flagged as Domestic or Import product.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| PROD\_IMP\_CODE | VARCHAR(1) | Import / Domestic Indicator Name |
| PROD\_IMP\_NAME | VARCHAR(10) | Import / Domestic Indicator Code D=Domestic, I=Import |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  

### [**EDW.CSDI\_DIM\_DLY\_SLS\_GEO_HIER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DLY_SLS_GEO_HIER)
This view is used as a reference view to determine the Provincial geography as well as Daily Sales Reporting region and Sub Region.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DLY\_SLS\_GEO_ID | NUMBER(38,0) | Daily Sales Geography ID |
| DLY\_SLS\_PROV_ID | NUMBER(38,0) | Daily Sales Geography ID at the Province Level |
| DLY\_SLS\_PROV_CODE | VARCHAR(8) | Daily Sales Geography Code at the Province Level |
| DLY\_SLS\_PROV_NAME | VARCHAR(64) | Daily Sales Geography Name at the Province Level |
| DLY\_SLS\_PROV\_DISP\_IND | NUMBER(38,0) | Daily Sales Geography Display Indicator at the Province Level |
| DLY\_SLS\_PROV\_DISP\_SEQ | NUMBER(38,0) | Daily Sales Geography Display Sequence at the Province Level |
| DLY\_SLS\_SUB\_REGN\_ID | NUMBER(38,0) | Daily Sales Geography ID at the Sub Region Level |
| DLY\_SLS\_SUB\_REGN\_CODE | VARCHAR(8) | Daily Sales Geography Code at the Sub Region Level |
| DLY\_SLS\_SUB\_REGN\_NAME | VARCHAR(64) | Daily Sales Geography Name at the Sub Region Level |
| DLY\_SLS\_SUB\_REGN\_DISP_IND | NUMBER(38,0) | Daily Sales Geography Display Indicator at the Sub Region Level |
| DLY\_SLS\_SUB\_REGN\_DISP_SEQ | NUMBER(38,0) | Daily Sales Geography Display Sequence at the Sub Region Level |
| DLY\_SLS\_REGN_ID | NUMBER(38,0) | Daily Sales Geography ID at the Region Level |
| DLY\_SLS\_REGN_CODE | VARCHAR(8) | Daily Sales Geography Code at the Region Level |
| DLY\_SLS\_REGN_NAME | VARCHAR(64) | Daily Sales Geography Name at the Region Level |
| DLY\_SLS\_REGN\_DISP\_IND | NUMBER(38,0) | Daily Sales Geography Display Indicator at the Region Level |
| DLY\_SLS\_REGN\_DISP\_SEQ | NUMBER(38,0) | Daily Sales Geography Display Sequence at the Region Level |
| DLY\_SLS\_TOT_ID | NUMBER(38,0) | Daily Sales Geography ID at the Total Level |
| DLY\_SLS\_TOT_CODE | VARCHAR(8) | Daily Sales Geography Code at the Total Level |
| DLY\_SLS\_TOT_NAME | VARCHAR(64) | Daily Sales Geography Name at the Total Level |
| DLY\_SLS\_TOT\_DISP\_IND | NUMBER(38,0) | Daily Sales Geography Display Indicator at the Total Level |
| DLY\_SLS\_TOT\_DISP\_SEQ | NUMBER(38,0) | Daily Sales Geography Display Sequence at the Total Level |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  

### [**EDW.CSDI\_DIM\_DLY\_SLS\_RPT\_PRD\_HIER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DLY_SLS_RPT_PRD_HIER)
This view is a reference view to be used to determine the correct reporting period for Daily Sales Reporting. It identifies calendar and reporting period attributes such as Date, Week, Month, Reporting Day, Reporting Week and Prior Year Sales Date.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SALES_DT | DATE | Calendar day of sale |
| PY\_SALES\_DT | DATE | Calendar day of sale in the prior year |
| RPT_DT | DATE | Reporting day of sale where multiple calendar days may be rolled into a single reporting day |
| RPT_WK | DATE | Reporting week start date of sale |
| WK\_MO\_NBR | NUMBER(38,0) | Week of Month Number |
| WK\_MO\_NAME | VARCHAR(50) | Week of Month Name |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date and time of last update |

  
  
Published on 3/12/21 by A. Stites