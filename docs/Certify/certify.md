---
title: What is Certification?
hide_table_of_contents: true
sidebar_position: 1
---
# What is certification?

**Certified Data Sets** are collections of views and tables available in EDW that have met a specific set of criteria described below that verify they have been _documented_, _validated_ and _modernized_ by the beertech team and are certified for official use across the enterprise. 

**Certified Data Sets** are:
1. Acquired with a modern ETL tool using an aligned ETL method
2. Characterized by:
  - normalized - 3NF
  - harmonized, i.e. extensible ontology
3. Accessible via materialized view 
  - within Alchemy data mesh
  - including relevant meta data

Each data set is made up of one or more views that are related to a specific subject matter within the Enterprise Data Warehouse (EDW). Depending on the subject matter and its relationship to other views, a single view may be part of one or more Certified Data Sets.

Beginning in October 2021 the following criterion have been established as prerequisites for a data set to be considered "certified" by BeerTech. 

1.  **[Any EL (extract and load) used to bring data in to EDW is documented end to end](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/6142/1.-Data-Set-Documentation)**

    - Documentation must include all job/task names
    - Refresh cadence and schedule must be explicitly documented
    - Lucid Chart (or equivalent) graphic of process flow must be included
<br/>
2. **All ETLs must exist on a modernized platform and preferably the Alchemy tech stack**
    - This explicitly excludes any ETLs remaining on Data Stage/Tivoli
    - Preferred method is an _ADF orchestrated pipeline_ moving data between ADLS containers of Raw, Historical & Base using Databricks or a native 
      ADF dataflow.
<br/>
3. **All ETLs must have explicit data quality error checking engineered in the final pipeline**
    - DQ validation should check for expected values prior to any data creation
    - For any inbound data, DQ checks must exist between "Raw" and "Historic" layer
    - Any validation errors should be logged and made available in log file or table
<br/>
4. **All ETLs must contain transparency logs**
     -  Logs should be created for tracking any issue encountered by ETL Pipeline
     - This includes logs for successful, missed, incomplete or failed pipeline executions
<br/>
5. **Final documentation must be approved by the beertech team prior to being posted to this website**


