---
title: Kantar Brand Guidance
tags:
    - Consumer Data
    - Applications
    - Marketing
description: Kantar brand guidance marketing data
---

# Kantar Brand Guidance  
This dataset provides detailed information on brand guidance provided by Kantar. This view is used to populate reporting tools used by the HERO team. The data is updated with previous month's data on a monthly schedule. 
	
### ETL
The ETL process for this data source is governed by the [generic_flow_v2 ADF](see https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/8819/Alchemy-Patterns) pipeline. The pipeline brings this data from a `.csv` file in raw, to historic, then to consume, and finally to Snowflake. Two files, `KPI_[YYYYMMDD].csv` and `MDF_[YYYYMMDD].csv` are uploaded to Alchemy Prod blob monthly. Currently, no transformations are performed on this data; this will change in the near future to support data harmonization. 



### **[EDW.KANTAR\_BRAND\_GUIDANCE](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_WH/schemas/EDW/view/BRND_GUIDANCE)**
This view contains marketing data for brand guidance. Each record specifies a market measure broken out by brand, region, time period, and demographic.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|DISPLAYBRANDNAME|VARCHAR()|Display Brand Names for Brand Guidance KPI & MDF(combined)|
|CAL_YR_MO_NBR|VARCHAR()|The unique identifier of the calendar month, in Year-MonthNumber format|
|REGION|VARCHAR()|States, Regions(1 to 6) and Total US|
|REGION_STATE|VARCHAR()|Derived value: Regions or State|
|MEASURENAMEDISPLAYED|VARCHAR()|Measure names like (funnel stages, imagery stages, affinity etc)|
|ROLLINGPERIOD|VARCHAR()|Rolling period for the measure e.g. R3, R6, R12|
|FILTER|VARCHAR()|Demographics (age, income, total etc)|
|DEMOGRAPHICS|VARCHAR()|Demographics calculated based on FILTER values|
|R_ABS|VARCHAR()|Absolute metric values|
|ABS_P|VARCHAR()|Percentage value for R_ABS|
|SIGNIFICANCE|VARCHAR()|Significance up or down or no significance |
|MEASURE_SIG_VALUE|VARCHAR()|Calculated value based on SIGNIFICANCE|
|SAMPLE_BASE|VARCHAR()|Sample size of the KPI & MDF(combined) measure|
|SAMPLE_SIZE_FLAG|VARCHAR()|Sample size Flag based on SAMPLE_BASE. Y if SAMPLE_BASE being < 250, else N|
|DATA_SRC|VARCHAR()|KPI or MDF: Source dataset|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|
|EDW_LOAD_FILENAME| VARCHAR()|EDW load filename| 

Published on 02/24/2023 by James Bronowicki


