---
title: Open Stores Monthly
tags:
    - Distribution 
    - Parquet
    - R3M
---

# Source Tables
[CSDO.APP_CS_FCT_MO_POC_DIST](https://docs.alchemy.beertech.com/docs/Canada-Distribution/Monthly-Open-Stores)

# Columns  

Source Table | Column Name in View | Column Name in Parquet | Suggested Column Name in Model | 
 | - | - | - | -
csdi.APP_CS_FCT_MO_POC_DIST | C9_COMM_KPI_CMPLNC_IND | c9_commercial_kpi_compliance_indicator | C9 Commercial KPI Compliance Indicator | 
csdi.APP_CS_FCT_MO_POC_DIST | COMM_KPI_OPEN_STORE_IND | commercial_kpi_open_store_indicator | Commercial KPI Open Store Indicator | 
csdi.APP_CS_FCT_MO_POC_DIST | MO_START_DT | date | Date | 
csdi.APP_CS_FCT_MO_POC_DIST | POC_SK | poc_key | POC Key | 
csdi.APP_CS_FCT_MO_POC_DIST | R3M_DIST_IND | r3m_distribution_indicator | R3M Distribution Indicator | 
csdi.APP_CS_FCT_MO_POC_DIST | R3M_SLS_DIST_IND | r3m_sales_distribution_indicator | R3M Sales Distribution Indicator | 
csdi.APP_CS_FCT_MO_POC_DIST | S7_COMM_KPI_CMPLNC_IND | s7_commercial_kpi_compliance_indicator | S7 Commercial KPI Compliance Indicator | 
  

# Sample Power Query Code
BI provides data for 5 years in 5 seperate Parquet Files which are stored at a year level. To get data for any specific year please replace the year **2019** with the required year in filter_fact step of the power query below.

```
let

   Source   =   AzureStorage.DataLake ("https://nazbtecheu2preporting.dfs.core.windows.net/reporting/parquet/"),
    filter_dimension = Table.SelectRows(Source, each Text.EndsWith([Folder Path], "/open_stores_monthly/")),
    #"Filtered Rows" = Table.SelectRows(filter_dimension, each ([Extension] = ".parquet")),
    #"Removed Other Columns" = Table.SelectColumns(#"Filtered Rows",{"Content"}),
    Content = #"Removed Other Columns"{0}[Content],
    #"Imported Parquet" = Parquet.Document(Content),
    upper_case_cols = Table.TransformColumnNames(#"Imported Parquet", each Text.Proper(Text.Replace(_, "_", " ") )),
    #"Renamed Columns" = Table.RenameColumns(upper_case_cols,{{"Poc Key", "POC Key"}, {"Commercial Kpi Open Store Indicator", "Commercial KPI Open Store Indicator"}, {"C9 Commercial Kpi Compliance Indicator", "C9 Commercial KPI Compliance Indicator"}, {"S7 Commercial Kpi Compliance Indicator", "S7 Commercial KPI Compliance Indicator"}})
in
    #"Renamed Columns"
```

# Refresh Schedule
Daily, 10:00 AM EST

# Access
To request access to the parquet files please reach out to platform support team.
