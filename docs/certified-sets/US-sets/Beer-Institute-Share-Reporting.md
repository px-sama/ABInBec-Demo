---
title: Beer Institute Share Reporting (BIR)
tags:
    - Product 
    - Supply
    - Wholesaler
description: Raw data for monthly Beer Institute Share Reporting
---
# Beer Institute Share Reporting (BIR)  

This data set is comprised of views that make up the raw data for monthly Beer Institute Share Reporting - also known as BIR. Every month the Beer Institute (BI) collects STR data for the last 36 months from 50 of its brewer members and aggregates the volume by Product Segment, Channel, Premise, Chain Status and Zip Code. AB then receives a file set - typically on the 2nd Tuesday of the month - with that data that is then mapped back to a "snapshot" file that is created on the day of submission that contains brand level detail. This mapping is then used to determine Brand/Package level share at the zip code level. For each Zip Code a primary AB wholesaler is assigned based on a ranking of STR volume within the zip code. For this data set STRs are defined as valid Retail Classes of Trade using the CLEANSED VIP Outlet definitions.

### **[EDW.BIR\_INBOUND\_ABI\_VOL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BIR_INBOUND_ABI_VOL)**
This is the view that all share reporting uses to retrieve the AB volume component of the share calculation for the last 36 months. Each record represents the total AB volume by Brand and Package in a given zip code for a given month segmented by BI Brand Segment, BI Channel, BI Premise and Chain vs Independent flag. The data in this view is created by matching the inbound AB volume from the BI with Brand detail from the monthly AB volume “snapshot”. The inbound BI data does not contain brand detail and so the snapshot is leveraged to map back to the brand/packs sold within a specific Zip code. This view also contains the wholesaler number of the primary AB wholesaler by volume for a given zip code.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VERSION | NUMBER(6,0) | The version of this file based on YYYYM which represents the Year and Month of the BI release. |
| BISUPP | VARCHAR(10) | VIP defined Supplier ID |
| SUPPNAME | VARCHAR(30) | VIP defined Supplier Name |
| BISEGMENTCD | NUMBER(10,0) | Beer Institute Product Segment Code the volume is assigned to |
| BISEGMENTDESC | VARCHAR(20) | Name of the BI Product Segment the volume is assigned to |
| BICHANCD | NUMBER(10,0) | Beer Institute defined Channel code |
| BICHANDESC | VARCHAR(25) | Name of the BI Channel for which the volume is assigned |
| VPPREMDESC | VARCHAR(25) | On/Off Premise description field |
| CHAININD | VARCHAR(1) | VIP defined chain flag. Valid values include: C = Chain, I = Independent |
| FIPS5 | VARCHAR(5) | Federal Information Processing Standard (FIPS) Code for county. |
| COUNTY | VARCHAR(30) | Retail Outlet county description (USPS standard). |
| STATE | VARCHAR(2) | Retail Outlet state (USPS standard). |
| PERIOD | NUMBER(6,0) | Month period for sales (YYYYMM format). |
| ZIP | VARCHAR(9) | Retail Outlet ZIP code (5-digit USPS standard). |
| BRND_CD | VARCHAR(3) | Master/Marketing AB Brand Code for the volume reported. |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code value for the product reproted |
| WSLR_NBR | VARCHAR(8) | Wholesaler number of the Primary AB wholesaler for the Zip Code |
| SALES | NUMBER(38,6) | Retail sales in Barrel Equivalents |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |

  

  

  

### **[EDW.BIR\_INBOUND\_IND\_VOL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BIR_INBOUND_IND_VOL)**
This is the view that all share reporting uses to retrieve the Industry volume component of the share calculation for the last 36 months. Each record represents the total industry volume in a given zip code for a given month segmented by BI Brand Segment, BI Channel, BI Premise, and Chain vs Independent flag. This view also contains the wholesaler number of the primary AB wholesaler by volume for a given zip code.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VERSION | NUMBER(6,0) | The version of this file based on YYYYM which represents the Year and Month of the BI release. |
| BISUPP | VARCHAR(10) | VIP defined Supplier ID |
| SUPPNAME | VARCHAR(30) | VIP defined Supplier Name |
| BISEGMENTCD | NUMBER(10,0) | Beer Institute Product Segment Code the volume is assigned to |
| BISEGMENTDESC | VARCHAR(20) | Name of the BI Product Segment the volume is assigned to |
| BICHANCD | NUMBER(10,0) | Beer Institute defined Channel code |
| BICHANDESC | VARCHAR(25) | Name of the BI Channel for which the volume is assigned |
| VPPREMDESC | VARCHAR(25) | On/Off Premise description field |
| CHAININD | VARCHAR(1) | VIP defined chain flag. Valid values include: C = Chain, I = Independent |
| FIPS5 | VARCHAR(5) | Federal Information Processing Standard (FIPS) Code for county. |
| COUNTY | VARCHAR(30) | Retail Outlet county description (USPS standard). |
| STATE | VARCHAR(2) | Retail Outlet state (USPS standard). |
| PERIOD | NUMBER(6,0) | Month period for sales (YYYYMM format). |
| ZIP | VARCHAR(9) | Retail Outlet ZIP code (5-digit USPS standard). |
| WSLR_NBR | VARCHAR(8) | Wholesaler number of the Primary AB wholesaler for the Zip Code |
| SALES | NUMBER(38,6) | Retail sales in Barrel Equivalents |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |

  

  

### **[EDW.BIR\_INBOUND\_ABI\_VOL_HIST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BIR_INBOUND_ABI_VOL_HIST)**
This is the historical view of the AB volume component of the share calculation. It contains the full 36 month data set for the 3 previous monthly closings – not including the most recent month. The 3 different data sets are distinguishable using the VERSION field which will contain a value representing the calendar year and month number (format YYYYMM) which IDs the year/month of the closing for which the data belongs. This data should really only be used to compare the most recent closing with prior closing in the event of a possible data discrepancy.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VERSION | NUMBER(6,0) | The version of this file based on YYYYMM which represents the Year and Month of the BI release. |
| BISUPP | VARCHAR(10) | VIP defined Supplier ID |
| SUPPNAME | VARCHAR(30) | VIP defined Supplier Name |
| BISEGMENTCD | NUMBER(10,0) | Beer Institute Product Segment Code the volume is assigned to |
| BISEGMENTDESC | VARCHAR(20) | Name of the BI Product Segment the volume is assigned to |
| BICHANCD | NUMBER(10,0) | Beer Institute defined Channel code |
| BICHANDESC | VARCHAR(25) | Name of the BI Channel for which the volume is assigned |
| VPPREMDESC | VARCHAR(25) | On/Off Premise description field |
| CHAININD | VARCHAR(1) | VIP defined chain flag. Valid values include: C = Chain, I = Independent |
| FIPS5 | VARCHAR(5) | Federal Information Processing Standard (FIPS) Code for county. |
| COUNTY | VARCHAR(30) | Retail Outlet county description (USPS standard). |
| STATE | VARCHAR(2) | Retail Outlet state (USPS standard). |
| ZIP | VARCHAR(5) | Retail Outlet ZIP code (5-digit USPS standard). |
| PERIOD | NUMBER(6,0) | Month period for sales (YYYYMM format). |
| SALES | NUMBER(13,6) | Retail sales in Barrel Equivalents |
| BRND_CD | VARCHAR(3) | Master/Marketing AB Brand Code for the volume reported. |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code value for the product reported |
| WSLR_NBR | VARCHAR(8) | Wholesaler number of the Primary AB wholesaler for the Zip Code |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |

  

  

  
https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BIR_INBOUND_IND_QLIK_VOL_HIST

### [**EDW.BIR\_INBOUND\_IND\_VOL_HIST**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BIR_INBOUND_IND_VOL_HIST)
This is the historical view of the Industry volume component of the share calculation. It contains the full 36 month data set for the 3 previous monthly closings – not including the most recent month. The 3 different data sets are distinguishable using the VERSION field which will contain a value representing the calendar year and month number (format YYYYMM) which IDs the year/month of the closing for which the data belongs. This data should really only be used to compare the most recent closing with prior closing in the event of a possible data discrepancy.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VERSION | NUMBER(6,0) | The version of this file based on YYYYM which represents the Year and Month of the BI release. |
| BISUPP | VARCHAR(10) | VIP defined Supplier ID |
| SUPPNAME | VARCHAR(30) | VIP defined Supplier Name |
| BISEGMENTCD | NUMBER(10,0) | Beer Institute Product Segment Code the volume is assigned to |
| BISEGMENTDESC | VARCHAR(20) | Name of the BI Product Segment the volume is assigned to |
| BICHANCD | NUMBER(10,0) | Beer Institute defined Channel code |
| BICHANDESC | VARCHAR(25) | Name of the BI Channel for which the volume is assigned |
| VPPREMDESC | VARCHAR(25) | On/Off Premise description field |
| CHAININD | VARCHAR(1) | VIP defined chain flag. Valid values include: C = Chain, I = Independent |
| FIPS5 | VARCHAR(5) | Federal Information Processing Standard (FIPS) Code for county. |
| COUNTY | VARCHAR(30) | Retail Outlet county description (USPS standard). |
| STATE | VARCHAR(2) | Retail Outlet state (USPS standard). |
| ZIP | VARCHAR(5) | Retail Outlet ZIP code (5-digit USPS standard). |
| PERIOD | NUMBER(6,0) | Month period for sales (YYYYMM format). |
| SALES | NUMBER(13,6) | Retail sales in Barrel Equivalents |
| BRND_CD | VARCHAR(3) | N/A |
| MKT\_LN\_CD | VARCHAR(3) | N/A |
| WSLR_NBR | VARCHAR(8) | N/A |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |

### [**EDW.INBOUND\_BRAND\_XREF_BASE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/INBOUND_BRAND_XREF_BASE)
This is a view that defines what AB brands are included and excluded from monthly BI share reporting. There are certain brands that are excluded from the monthly AB submission because they are ineligible (Wine and Spirits products) or for specific business purposes (Seltzers) that must be flagged for exclusion prior to each month. The view contains the AB Brand Code and Description along with the VIP internal brand code and description plus the INCLUSIONSTATUS flag field which indicate if the brand was included or excluded from reporting.
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| SRSBRANDCD | VARCHAR(3) | Master/Marketing AB Brand Code for the volume reported. |
| SRSBRANDDESC | VARCHAR(30) | AB Brand description |
| VIPBRANDCODE | NUMBER(10,0) | VIP defined Brand Code |
| VIPBRANDDESC | VARCHAR(60) | VIP defined Brand Description |
| VIPBRANDFAMDESC | VARCHAR(30) | VIP defined Brand Family Description |
| PRODSEGMENTNM | VARCHAR(20) | BI Product Segment Name |
| INCLUSIONSTATUS | VARCHAR(1) | Inclusion Flag; I = Included, E = Excluded |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |


### [**EDW.INBOUND\_TRADE\_CHANNEL_BASE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/views/INBOUND_TRADE_CHANNEL_BASE)
This is a reference view that defines how VIP Class of Trade and Sub Class of Trade values roll up into the BI Channels in BIR share reporting. This view can only be use to map sales from VIP Outlets in to the BI Channels for AB volume from the snapshot view – there is no way to reverse engineer back to VIP COT and Sub COT the BI volume for the rest of the industry.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VPCOT | VARCHAR(2) | VIP Class of Trade Code |
| VPCOTDESC | VARCHAR(25) | VIP Class of Trade Description |
| VPSCOT | VARCHAR(2) | VIP Sub Class of Trade Code |
| VPSCOTDESC | VARCHAR(25) | VIP Sub Class of Trade Descsription |
| VPPREMDESC | VARCHAR(25) | VIP Premise Description |
| BICHANCD | VARCHAR(2) | BI Channel Code |
| BICHANDESC | VARCHAR(25) | BI Channel Description |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |


### [**EDW.INBOUND\_PRODUCT\_SEG_BASE**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/views/INBOUND_PRODUCT_SEG_BASE)
This view contains a listing of all Brands submitted by brewers that are part of the monthly BIR report. Each record identifies the Supplier/Brewer reporting the brand along with the Brand Name as defined in VIP’s SRS reporting system. It also contains the BI Brand Segment that each brand is assigned. Since Brewers can choose to stop reporting to the BI it is advised when using this view the pull only the records with the most recent Timestamp value in order to get a full listing of all actively reported brands.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| SUPPID | VARCHAR(10) | VIP Assigned Supplier ID |
| SUPPNAME | VARCHAR(30) | VIP defined Supplier Name |
| BRANDCODE | NUMBER(10,0) | VIP defined Brand Code |
| BRANDNAME | VARCHAR(100) | VIP defined Brand Name |
| BISEGMENTCD | NUMBER(10,0) | BI Product Segment Code |
| BISEGMENT | VARCHAR(20) | BI Product Segment Name |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USR_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |


### [**EDW.BIR\_WSLR\_ZIP_XREF**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/views/BIR_WSLR_ZIP_XREF)
This is a reference view that should be used to look up the primary AB Wholesaler by volume in a given Zip Code. The assignments are provided by the Wholesaler Territory Mapping team.
  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| ZIP_CODE | VARCHAR(9) | Retail Outlet ZIP code (5-digit USPS standard). |
| WSLR_NBR | VARCHAR(8) | Wholesaler number of the Primary AB wholesaler for the Zip Code |
| JOB_NM | VARCHAR(40) | Name of the job that wrote the record to the table. |
| USER_NM | VARCHAR(40) | Name of the user that wrote the record to table, can be service account. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was last modified |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Date and time on when the record was written to the table. |



Published on 3/31/21 by A. Stites
Edited on 2/15/23 by J. Jordan
