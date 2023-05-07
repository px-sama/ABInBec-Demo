---
title: Distribution Model
tags:
    - Canada
    - Distribution
    - BI
    - Power BI
---
# Distribution Model

## Canada Distribution Model

Distribution was developed to report on Labatt's brand and sku level distribution, volume and rate of sale across the country.

**Workspace Name:** [Alchemy Datasets](https://app.powerbi.com/groups/da110164-259c-4bb8-819f-9aaa94c3668d/list?experience=power-bi)

**Model Name:** Canada Distribution

## ERD
<img width="862" alt="image" src="https://user-images.githubusercontent.com/24382274/226697657-72f6d603-6dcc-4812-8ebd-19f1d516b261.png" />

## Tables 

|Table Name | Table Type | Source | Source Name | Defintion | Notes|
| -	| -	| - | - | - | - |
|\_\_Calculations | Auxillary |  |  |  | 
|\_Report Status | Auxillary | Snowflake | hero.pbi_report_status |  | 
|Calculation Group | Auxillary | Manual |  |  | 
|Calendar | Dimension | ADLS | calendar |  | 
|Comparison Selection | Auxillary | Manual |  |  | 
|Data Available Info | Dimension | Snowflake | ca_data_available_info |  | 
|Fact Monthly | Fact | ADLS | [distribution_monthly](https://docs.alchemy.beertech.com/docs/BI/Parquet-Files/Canada/Distribution-Monthly) |  | 
|Fact Weekly | Fact | ADLS | distribution_weekly |  | 
|Geography | Dimension | ADLS | geography_ca |  | 
|Parameter | Auxillary | Manual |  |  | 
|Product | Dimension | ADLS | product_ca |  | 
|Retailers Open R3M | Fact | ADLS | [open_stores_monthly](https://docs.alchemy.beertech.com/docs/BI/Parquet-Files/Canada/Open-Stores-Monthly) |  | 
|Retailers Open R4WK | Fact | ADLS | open_stores_weekly |  | 
|Survey Selection | Auxillary | Manual |  |  | 
|Timeframe | Auxillary | Manual |  |  | 
|Timeframe Parameter | Auxillary | Manual |  |  | 
|Values | Auxillary | Manual |  |  | 

## Refresh Schedule
Daily, 4:00 AM EST
