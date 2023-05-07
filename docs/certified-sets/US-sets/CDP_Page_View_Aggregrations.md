---
title: CDP Page View Aggregations
tags:
    - Marketing
    - Application Data
    - FUSION
description: Aggregated website page view data from our CDP (Consumer Data Platform) 
---

# CDP Page View Aggregations
This dataset contains a materialized view that provides detailed information on site page views from our CDP (Consumer Data Platform). This view will be used by the LOLA team.

### **[CONSUMERS.AGGREGATED_PAGE_VIEWS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/#/data/databases/ABI_WH/schemas/CONSUMERS/view/AGGREGATED_PAGE_VIEWS)**
This view shows total page views and distinct page views by day. It categorizes the data into female and male buckets, bucketizes age, and adds country code as 'US'. This view also shows the brand name for these interactions.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
|page_view_date|date|record date|	
|displaybrandname| string|website brand name for the record|
|demographic|string|demographic bucketized category e.g. female, age 25-30|
|total_views|integer|total page views with the demographic characteristics for the given day|
|distinct_views|integer|distinct page views with the demographic characteristics for the given day|
|country_cd|string|country code (will always be US)|

Published on 11/1/2022 by Jayson Yurcho
