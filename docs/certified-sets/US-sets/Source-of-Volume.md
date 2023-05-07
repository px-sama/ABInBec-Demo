---
title: Source of Volume
tags:
    - Consumer Data
    - Applications
    - Volume
description: Volume dataset provided by IRI quarterly
---

# Source of Volume
The source of volume dataset is provided by IRI quarterly. We're provided four sets of data that are then formatted by commercial and updated on Sharepoint. The datasets show the difference in Brand/Segment metrics for each quarter, showing changes in consumer trends. Each set of metrics are then broken down by Detail and Summary. Summary shows the changes for a particular Brand or Segment over the quarter while Detail compares the brand/segment to other brand/segments showing consumer volume lost and gained between the two.
The four datasets are:

- Brand Shift - Detail
- Brand Shift - Summary
- Segment Shift - Detail
- Segment Shift - Summary


### ETL
The ETL process for this data source is governed by the [generic_flow_v2](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/8819/Alchemy-Patterns) ADF pipeline. The pipeline brings this data from a `.csv` file in raw, to historic, then to consume, and finally to Snowflake. Two files, `KPI_[YYYYMMDD].csv` and `MDF_[YYYYMMDD].csv` are uploaded to Alchemy Prod blob quarterly. 



### **[HERO.KANTAR\_BRAND\_GUIDANCE](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_DEV/schemas/HERO/view/BRAND_SHIFT_DETAIL)**
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
|SIGNIFICANCE|VARCHAR()|Significance up or down or no significance|
|MEASURE_SIG_VALUE|VARCHAR()|Calculated value based on SIGNIFICANCE|
|SAMPLE_BASE|VARCHAR()|Sample size of the KPI & MDF(combined) measure|
|SAMPLE_SIZE_FLAG|VARCHAR()|Sample size Flag based on SAMPLE_BASE. Y if SAMPLE_BASE being < 250, else N|
|DATA_SRC|VARCHAR()|KPI or MDF: Source dataset|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|
|EDW_LOAD_FILENAME| VARCHAR()|EDW load filename| 



### **[HERO.BRAND\_SHIFT\_DETAIL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_DEV/schemas/HERO/view/BRAND_SHIFT_DETAIL)**

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|BREWER|VARCHAR()|Brewer to which the “Brand” falls under|
|TIME|VARCHAR()|Quarter and Year. Data is updated quarterly|
|BRND_FAMLY|VARCHAR()|The Target Brand for analysis - can be an aggregate of brands or individual brand|
|COMPARE_BRND_FAMLY|VARCHAR()|This is the Target Brand that BRND_FAMILY is being compared to|
|NET_GAIN_LOSS|FLOAT()|Net Volume sales change vs YA due to switching with the given Brand Family|
|PCT_NET_GAIN_LOSS|FLOAT()|The Volume % Change vs YA due to switching with the given Brand Family|
|INTERACTION_INDEX|VARCHAR()|Share of Total Switching Volume the Brand Family accounts for within the Target Brand total Switching divided by the Share of the Category the Brand Family accounted for in the prior year * 100|
|SWITCH_LOSS|FLOAT()|Absolute volume lost due to switching between Target Brand and Brand Family vs prior year|
|SWITCH_GAIN|FLOAT()|Absolute volume gained due to switching between Target Brand and Brand Family vs prior year|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|


### **[HERO.BRAND\_SHIFT\_SUMMARY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_DEV/schemas/HERO/view/BRAND_SHIFT_SUMMARY)**

### Brand Shift Summary
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|BREWER|VARCHAR()|Brewer to which the “Brand” falls under|
|TIME|VARCHAR()|Quarter and Year. Data is updated quarterly|
|BRND_FAMLY|VARCHAR()|The Target Brand for analysis - can be an aggregate of brands or individual brand|
|SWITCH_TOTAL|FLOAT()|Volume sales % Change vs YA due to switching activity with other brands|
|PCT_CHANGE|FLOAT()|Volume sales % Change vs YA due to changes in volume from buyers that purchase the brand in both years|
|BRND_BUYER_CHANGE|FLOAT()|Volume sales % Change vs YA due to net volume change between households that stopped buying or started buying a brand within the two year analysis|
|NON_BUYER_CATEGORY|FLOAT()|Volume sales % Change vs YA due to net volume change between Households that left or came into the total Beer Category|
|TOTAL|FLOAT()|Total Brand Volume % Change vs YA; sum of all 4 Source of Volume components|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|


### **[HERO.SEGMENT\_SHIFT\_DETAIL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_DEV/schemas/HERO/view/SEGMENT_SHIFT_DETAIL)**

### Segment Shift Detail
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|GEOGRAPHY|VARCHAR()|Geography to which the "Segment" falls under|
|TIME|VARCHAR()|Quarter and Year. Data is updated quarterly|
|SEGMENT|VARCHAR()|The Target Segment for analysis|
|COMPARE_SEGMENT|VARCHAR()|This is the Target Segment that SEGMENT is being compared to|
|NET_GAIN_LOSS|FLOAT()|Net Volume sales change vs YA due to switching with the given Brand Family|
|PCT_NET_GAIN_LOSS|FLOAT()|The Volume % Change vs YA due to switching with the given Brand Family|
|INTERACTION_INDEX|VARCHAR()|Share of Total Switching Volume the Brand Family accounts for within the Target Brand total Switching divided by the Share of the Category the Brand Family accounted for in the prior year * 100|
|SWITCH_LOSS|FLOAT()|Absolute volume lost due to switching between Target Brand and Brand Family vs prior year|
|SWITCH_GAIN|FLOAT()|Absolute volume gained due to switching between Target Brand and Brand Family vs prior year|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|


### **[HERO.SEGMENT\_SHIFT\_SUMMARY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_DEV/schemas/HERO/view/SEGMENT_SHIFT_SUMMARY)**

### Segment Shift Summary
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|GEOGRAPHY|VARCHAR()|Geography to which the "Segment" falls under|
|TIME|VARCHAR()|Quarter and Year. Data is updated quarterly|
|BRND_FAMLY|VARCHAR()|The Target Brand for analysis - can be an aggregate of brands or individual brand|
|SWITCH_TOTAL|FLOAT()|Volume sales % Change vs YA due to switching activity with other brands|
|PCT_CHANGE|FLOAT()|Volume sales % Change vs YA due to changes in volume from buyers that purchase the brand in both years|
|BRND_BUYER_CHANGE|FLOAT()|Volume sales % Change vs YA due to net volume change between households that stopped buying or started buying a brand within the two year analysis|
|NON_BUYER_CATEGORY|FLOAT()|Volume sales % Change vs YA due to net volume change between Households that left or came into the total Beer Category|
|TOTAL|FLOAT()|Total Brand Volume % Change vs YA; sum of all 4 Source of Volume components|
|EDW_START_TSP|TIMESTAMP_NTZ(9)|EDW timestamp|


### Job Details
There is currently not a set schedule for refreshing this data, it will need to be ran manually. The original file is sent from IRI quarterly, we are working with IRI and commercial to see if an automated schedule is possible.

Published on 02/24/2023 by James Bronowicki


