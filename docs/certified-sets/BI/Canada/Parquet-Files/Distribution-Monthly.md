---
title: Distribution Monthly
tags:
    - Distribution 
    - Parquet
    - R3M
---

# Source Tables
[CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY](https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly)

# Columns  

Source Table | Column Name in View | Column Name in Parquet | Suggested Column Name in Model | 
 | - | - | - | -
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_DIST_IND | cm_distribution_indicator | CM Distribution Indicator | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SLS_DIST_IND | cm_sales_distribution_indicator | CM Sales Distribution Indicator | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SLS_HL | cm_sales_volume | CM Sales Volume | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | CM_SVY_DIST_IND | cm_survey_distribution_indicator | CM Survey Distribution Indicator | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | EFF_DT | date | Date | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | POC_SK | poc_key | POC Key | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | BI_ITEM_SK | product_key | Product Key | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_DIST_IND | r3m_distribution_indicator | R3M Distribution Indicator | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_DIST_IND  | r3m_sales_distribution_indicator | R3M Sales Distribution Indicator | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SLS_HL | r3m_sales_volume | R3M Sales Volume | 
CSDI.APP_CS_FCT_POC_PROD_DIST_MNTHLY | R3M_SVY_DIST_IND | r3m_survey_distribution_indicator | R3M Survey Distribution Indicator |
  

# Sample Power Query Code
BI provides data for 5 years in 5 seperate Parquet Files which are stored at a year level. To get data for any specific year please replace the year **2019** with the required year in filter_fact step of the power query below.

```
let
   Source   =   AzureStorage.DataLake ("https://nazbtecheu2preporting.dfs.core.windows.net/reporting/parquet/"),
    filter_fact = Table.SelectRows(Source, each Text.EndsWith([Folder Path], "distribution_monthly/reporting_year%3D2019/")),
    filter_parquet = Table.SelectRows(filter_fact, each ([Extension] = ".parquet")),
    remove_other_cols = Table.SelectColumns(filter_parquet,{"Content"}),
    content_filter = remove_other_cols{0}[Content],
    get_data_in_parquet = Parquet.Document(content_filter),
    upper_case_cols = Table.TransformColumnNames(get_data_in_parquet, each Text.Proper(Text.Replace(_, "_", " ") )),
    rename_columns = Table.RenameColumns(upper_case_cols,{{"Cm Survey Distribution Indicator", "CM Survey Distribution Indicator"}, {"Cm Sales Distribution Indicator", "CM Sales Distribution Indicator"}, {"Cm Distribution Indicator", "CM Distribution Indicator"}, {"Cm Sales Volume", "CM Sales Volume"}, {"Poc Key", "POC Key"}})
in
    rename_columns
```

# Refresh Schedule
Daily, 10:00 AM EST

# Access
To request access to the parquet files please reach out to platform support team.
