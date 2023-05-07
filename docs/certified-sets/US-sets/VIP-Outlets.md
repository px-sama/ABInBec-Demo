---
title: VIP Outlets
tags:
    - Supply
    - Sales
    - VIP
description: VIP Outlets (Accounts) data
---
# VIP Outlets  

The VIP Outlets (Accounts) data set is comprised of two account views, a reference view used to join the two account views as well as a 2nd reference view for converting account attribute codes in to real-world descriptions. The data is collected via VIP's Supplier Reporting Services (SRS) sales collection system from all Anheuser-Busch wholesalers and delivered to AB via daily extracts. The following views have been established in the EDW schema in Snowflake to serve as the data layer to connect and identify customer based on reported sales invoices.

### **[EDW.VIP\_WSLR\_OUTLT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_WSLR_OUTLT)**
This view represents the UNCLEANSED data in this view defines all customers for a wholesaler including all identifying attributes (Address, Class of Trade (Channel), Chain Status, Open/Closed Date, etc). It is also known as UNCLEANSED as it comes directly out of the wholesaler’s Route Accounting System (RAS) and is not scrubbed for errors or duplicates by VIP. It is common to find duplicate accounts from a single wholesaler in this view, each used to invoice different products to a customer - Beer, Wine, Spirits. Recycled or reused values in the RSCUST field also known as the Wholesaler Assigned Customer Number (WACN) are common as well. This view is updated every 2 hours throughout the business day from 5am to 9pm CST.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VIP\_SEQ\_ID | NUMBER(15,0) | AB assigned sequence ID from ETL load job |
| RECORDTYPE | VARCHAR(6) | N/A |
| DISTID | VARCHAR(8) | AB assigned Wholesaler Number |
| VIPSRS | VARCHAR(5) | N/A |
| ROCUST | VARCHAR(15) | Wholesaler Assigned Customer Number |
| RODBA | VARCHAR(35) | Consumer facing name of outlet |
| ROLNAM | VARCHAR(35) | License name of account |
| ROADDR1 | VARCHAR(35) | Address line 1 |
| ROADDR2 | VARCHAR(35) | Address line 2 |
| ROCITY | VARCHAR(30) | City |
| ROSTATE | VARCHAR(2) | State |
| ROZIP9 | VARCHAR(9) | Zip 9 |
| ROCTRY | VARCHAR(3) | Country |
| ROPHONE | NUMBER(20,0) | Phone Number |
| ROCHN | VARCHAR(10) | VIP Chain Code (join to VIP_CHAIN for Chain name) |
| ROCHN2 | VARCHAR(10) | Not in Use |
| ROCOT | VARCHAR(2) | Wholesaler Assigned Class of Trade |
| ROFWN | VARCHAR(1) | Fine Wine Program falg |
| ROCSTS | VARCHAR(1) | Wholesaler Assigned chain status (Y/N) |
| RODISP | VARCHAR(2) | Displayable Flag (Y/N) |
| ROETHN | VARCHAR(2) | Ethnicity Code |
| ROIVOL | VARCHAR(1) | Industry Volume Code |
| ROLIFE | VARCHAR(1) | Consumer Lifestyle code |
| ROOCC | VARCHAR(2) | Primary Occupation Code |
| ROPAGE | VARCHAR(2) | Consumer Age Code |
| ROPTYPE | VARCHAR(1) | Package Sales Flag |
| ROWMVT | VARCHAR(2) | Not in Use |
| ROSMVT | VARCHAR(2) | Not in Use |
| ROMMVT | VARCHAR(2) | Not in Use |
| ROSELL | VARCHAR(1) | Primary Selling Method to account |
| ROSM1 | VARCHAR(5) | Primary Sales Rep ID |
| ROSM2 | VARCHAR(5) | Secondary Sale Rep ID |
| ROSTORE | VARCHAR(10) | Chain Store # |
| ROSTS | VARCHAR(1) | Open/Closed Status of Outlet |
| TERR01 | VARCHAR(1) | Not in Use |
| TERR02 | VARCHAR(1) | Not in Use |
| TERR03 | VARCHAR(1) | Not in Use |
| TERR04 | VARCHAR(1) | Not in Use |
| TERR05 | VARCHAR(1) | Not in Use |
| TERR06 | VARCHAR(1) | Not in Use |
| TERR07 | VARCHAR(1) | Not in Use |
| TERR08 | VARCHAR(1) | Not in Use |
| TERR09 | VARCHAR(1) | Not in Use |
| TERR10 | VARCHAR(1) | Not in Use |
| TERR11 | VARCHAR(1) | Not in Use |
| TERR12 | VARCHAR(1) | Not in Use |
| TERR13 | VARCHAR(1) | Not in Use |
| TERR14 | VARCHAR(1) | Not in Use |
| TERR15 | VARCHAR(1) | Not in Use |
| TERR16 | VARCHAR(1) | Not in Use |
| TERR17 | VARCHAR(1) | Not in Use |
| TERR18 | VARCHAR(1) | Not in Use |
| TERR19 | VARCHAR(1) | Not in Use |
| TERR20 | VARCHAR(1) | Not in Use |
| TERR21 | VARCHAR(1) | Not in Use |
| TERR22 | VARCHAR(1) | Not in Use |
| TERR23 | VARCHAR(1) | Not in Use |
| TERR24 | VARCHAR(1) | Not in Use |
| TERR25 | VARCHAR(1) | Not in Use |
| TERR26 | VARCHAR(1) | Not in Use |
| TERR27 | VARCHAR(1) | Not in Use |
| TERR28 | VARCHAR(1) | Not in Use |
| TERR29 | VARCHAR(1) | Not in Use |
| TERR30 | VARCHAR(1) | Not in Use |
| TDOUTCD | VARCHAR(7) | Not in Use |
| TDMGROUP | VARCHAR(6) | Not in Use |
| VIPID | NUMBER(10,0) | DO NOT USE |
| VIPMALT | VARCHAR(1) | DO NOT USE |
| ROBUYER | VARCHAR(35) | Buyer Name |
| ROLICTYPE | VARCHAR(1) | License Type Code (Description on VIP_VALUE) |
| ROWHSE | VARCHAR(8) | AB assigned Wholesaler Number |
| ROPARENT | VARCHAR(10) | Master Wslr Nbr |
| ROLICENSE | VARCHAR(15) | License Number |
| ROOPEN | NUMBER(8,0) | Open Date |
| ROCLOSED | NUMBER(8,0) | Closed Date |
| ROSEASOP | NUMBER(2,0) | Seasonal Open Month |
| ROSEASCL | NUMBER(2,0) | Seaonal Close Month |
| ROPLANO | VARCHAR(1) | Planogrammable (Y/N) |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Time Stamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object |



### **[EDW.VIP_OUTLT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_OUTLT)**
This view represents the CLEANSED outlet data that is defined and maintained by VIP and is intended to represent all unique beverage purchasing retail outlets in the US. Each record is assigned a unique identifier (VPID) intended to give a single standardized definition of an account and its attributes, as defined by VIP, regardless of what wholesaler is servicing the account. The attributes in this view are used as the standard for any commercial results tracking including Sales, Distribution, Wholesaler Joint Business Plan (WJBP). This view is updated once a day around 9pm CST as part of the last VIP extract load of the day.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VPID | NUMBER(10,0) | Numeric ID assigned by VIP to each unique retail outlet in the VIP Outlet universe |
| VPDBA | VARCHAR(35) | Consumer facing name of an outlet |
| VPLNAM | VARCHAR(35) | License Name of outlet |
| VPADDR | VARCHAR(35) | Address line 1 |
| VPADDR2 | VARCHAR(35) | Address line 2 |
| VPCITY | VARCHAR(30) | City |
| VPSTAT | VARCHAR(2) | State |
| VPZIP9 | VARCHAR(9) | Zip 9 |
| VPCOUN | VARCHAR(30) | County |
| VPCTRY | VARCHAR(3) | Country |
| VPPHON | NUMBER(20,0) | Phone Number |
| VPCHN | NUMBER(10,0) | VIP Chain Code (join to VIP_CHAIN for Chain name) |
| VPSTORE | VARCHAR(10) | Chain Store # |
| VPFRANIND | VARCHAR(1) | VIP assigned Franchine ID for chains |
| VPCSTS | VARCHAR(1) | Chain Status (C=Chain, I=Indy) |
| VPIOCODE | NUMBER(10,0) | VIP Chain Hierarchy Level 1 |
| VPCOT | VARCHAR(2) | VIP assigned Class of Trade |
| VPSUBCHNL | VARCHAR(2) | VIP assigned Sub Class of Trade |
| VPCUSTYP | NUMBER(2,0) | VIP assigned Cuisine Type |
| VPPREM | VARCHAR(1) | VIP assigned Premise (O=On F=Off) |
| VPSTATUS | VARCHAR(1) | Active status of account (A=Active, I=Inactive, O=Out of Business) |
| VPMALT | VARCHAR(1) | Malt sales eligible (Y/N) |
| VPWINE | VARCHAR(1) | Wine sales eligible (Y/N) |
| VPSPIRITS | VARCHAR(1) | Spirits sales eligible (Y/N) |
| VPBUYGRP | VARCHAR(10) | VIP assigend Buying Group |
| VPLAT | VARCHAR(10) | Zip Centroid Based lattitude <br/> **DO NOT USE FOR OUTLET LOCATION** |
| VPLONG | VARCHAR(10) | Zip Centroid Based longitude <br/> **DO NOT USE FOR OUTLET LOCATION** |
| VPFIPS | VARCHAR(5) | FIPS Code |
| VPMSACD | VARCHAR(5) | MSA Code |
| VPFUTUR1 | VARCHAR(20) | Future VIP ID Value |
| VPFUTUR2 | VARCHAR(20) | Future VIP ID Value 2 |
| VPOPEN | VARCHAR(8) | Open Date |
| VPCLOSED | VARCHAR(8) | Closed Date |
| VPTRANSID | NUMBER(10,0) | VIP ID outlet transferred to\] |
| VPTRANSDT | NUMBER(10,0) | Transfer date |
| VPOLDID | NUMBER(10,0) | Old VIP ID outlet transferred from |
| VPALTDIST | VARCHAR(20) | Alternate VIP ID |
| VPPARENT | VARCHAR(20) | Parent VIP ID |
| VPLTLNCD | VARCHAR(2) | Lat/Long Confidence Code |
| VPPBSLAT | NUMBER(11,8) | Point Based Lattitude (8 digit length) |
| VPPBSLONG | NUMBER(11,8) | Point Based Longitude (8 digit length) |
| VPPBMCHCOD | VARCHAR(4) | Lat/Long Match Code |
| VPPBLOCCOD | VARCHAR(4) | Lat/Long Location Code |
| VPPBMCDESC | VARCHAR(120) | Match Description |
| VPPBLCDESC | VARCHAR(120) | Location Description |
| VPFIPS15 | NUMBER(15,0) | 15 digit Point Level FIPS code |
| VPDRAFT | VARCHAR(1) | Draft eligible flag |
| TDLINXCD | VARCHAR(7) | TD Linx Code |
| VPSEAOPNW | NUMBER(2,0) | Seasonal Open Month |
| VPSEACLSW | NUMBER(2,0) | Seasonal Close Month |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |


### **[EDW.VIP\_OUTLT\_XREF](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_OUTLT_XREF)**
This view defines the relationship between wholesaler customers and VIP Outlets and should be used as a lookup reference for any use case where the connection is required. The unique combination of DISTID and RSCUST can be used to join to this view from VIP\_WSLR\_OUTLT to define the VIPID for a particular wholesaler’s outlet. Once the VIPID is identified it can be used to joined to VIP_OUTLT view to retrieve any CLEANSED attributes of that outlet. This view is updated once a day around 9pm CST as part of the VIP extract load of the day.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DISTID | VARCHAR(25) | AB Wholesaler Number |
| RSCUST | VARCHAR(25) | Wholesaler Assigned Customer Number |
| VPID | NUMBER(10,0) | VIP ID matched to Wslr's Cust Nbr |
| VPST | VARCHAR(2) | VIP State |
| VPPARENT | VARCHAR(25) | Parent VIP ID |
| TDLINXCD | VARCHAR(7) | TDLinx Code |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Start Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object ID |



### **[EDW.VIP_VALUE](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_VALUE)**
The data in this view should be used as a lookup reference to translate code values found across VIP views and tables into definable definitions for items such as Class of Trade. The FIELD value defines the name of the column in those other VIP tables and the DESCRIPTION value provides the real-world definition that the CODE value represents. This view is updated once a day around 9pm CST as part of the VIP extract load of the day.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RECORDTYPE | VARCHAR(6) | N/A |
| FIELD | VARCHAR(10) | Field name from VIP-based table for which description is defined in the view |
| FIELDNAME | VARCHAR(20) | Description of the field for which a description is provided |
| CODE | VARCHAR(3) | Code value submitted in VIP-based tables that corresponds to the description |
| DESCRIPTION | VARCHAR(50) | Business-use description of the CODE field |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp for most recent update to record |

  
  

Published on 2/26/21 by A. Stites
