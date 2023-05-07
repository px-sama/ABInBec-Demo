---
title: Wholesaler Territory Mapping
tags:
    - Wholesaler
    - Brand
    - Retail
    - Location
description: Defines the relationship between a wholesaler and a retail for a given brand or group of brands
---

# Wholesaler Territory Mapping  

The views described in this data set are used to define the relationship between a wholesaler and a retail for a given brand or group of brands. The Wholesaler Territory Mapping team is responsible for maintaining over 45,000 unique wholesaler territory maps, each defining the geographic footprint a wholesaler is assigned for a given brand or collection of brands. The maps are then combined with [VIP Outlets](VIP-Outlets.md) data to determine which outlets fall within each wholesaler’s assigned territory. Territory maps are drawn at the Territory Group level with each group representing 1 or more than 1 brand. This information is the foundation for [Distribution](Distribution.md) by defining the Wholesaler/Retailer/Brand relationship for which all Distribution reporting is based.

  

### [EDW.VIP\_WSLR\_TERR_MEMBR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_WSLR_TERR_MEMBR)
This view should be used as the master source to determine what VIP Outlets fall within a given wholesaler’s territory. It defines the Wholesaler/Retailer relationship for each Territory Group. It contains the output of the Point in Polygon program that assigns every VIP ID to a Wholesaler for every applicable Territory Group so long as the Outlet has a valid point-based latitude and longitude value that falls within a valid territory map. Each map is the physical representation of the wholesaler’s assigned territory for a brand or collection of brands that make up the Territory Group. The TERR\_GRP\_ABR field can be joined to TERR_GRP view to retrieve the Territory Group Number. This data is refreshed weekly on Thursday evenings.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VIP\_SEQ\_ID | NUMBER(38,0) | Enterprised generated sequence ID |
| VPID | NUMBER(10,0) | VIP ID of the Outlet that is matched to the Wslr/Territory combination |
| WSLR_NBR | VARCHAR(5) | AB Wholesaler Number of the wholesaler whose Territory is matche to the VIP ID |
| TERR\_GRP\_ABR | VARCHAR(10) | 3 character abbreviation of the Territory Group whose wholesaler territory has been matched to the VIP ID |
| EDW\_START\_TSP | DATE | EDW Timestamp of the last update to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### [EDW.TERR_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/TERR_GRP)
This view defines each Territory Group with a unique Territory Group Code, Description and Territory Group Abbreviation. A Territory Group represents a brand or collection of brands who all share a common geographic footprint (territory) across all wholesalers who have rights to sell the brand or brands. Every map created by the mapping team represents a single Wholesaler/Territory Group combination.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| TERR\_GRP\_NBR | NUMBER(8,0) | Numeric code that uniquely identifies each territory group. |
| TERR\_GRP\_DSC | VARCHAR(60) | Description of the Territory Group |
| SHORT\_TERR\_GRP_DSC | VARCHAR(60) | Short description of the Territory Group |
| TERR\_GRP\_ABR | VARCHAR(10) | 3 character abbreviation of the Territory Group whose wholesaler territory has been matched to the VIP ID |
| ALL\_BRND\_FLG | VARCHAR(1) | Flag to indicate if the territory group is applicable to all brands listed in the TERR\_GRP\_BRND view. Default value is Y |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of the last update to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| ELIG\_NON\_LIC\_ACCT\_FLG | VARCHAR(1) | Obsolete flag previously used in BudNET |


### [EDW.TERR\_GRP\_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/TERR_GRP_BRND)
This view serves as a cross-reference between the Territory Group and the Brands assigned with it. The BRND\_CTGY\_ID and BRND_CD values found here can be joined back to the [EDW.BRND](Product-and-Brand.md) view to retrieve identifying attributes of the brand or brands within a particular territory group. Each Brand can only be assigned to a single Territory Group. The assignment of Brand to Territory Group is managed by the Wholesaler Territory Mapping team.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| TERR\_GRP\_NBR | NUMBER(8,0) | Numeric code that uniquely identifies each territory group. |
| BRND\_CTGY\_ID | NUMBER(15,0) | The unique identifier assigned to PKG, BRND, BRND`PROD, CONT, PDCN. |
| BRND_CD | VARCHAR(3 | Three character Brand Code that can be joined back to the EDW.BRND view |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW Timestamp of the last update to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |

  

  

  

### [EDW.TERR\_GRP\_PDCN_ALL](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/TERR_GRP_PDCN_ALL)
This view serves as a cross-reference between Territory Group and the PDCNs for the brands assigned to the Territory Group. The PDCN\_ITEM\_ID or the PDCN_CD can be joined back to the  [PDCN_DM](Product-and-Brand.md) view to retrieve identifying attributes of the PDCNs. Each PDCN can only be assigned to a single Territory Group and is determined by the assignment of Brands to Territory Group.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| TERR\_GRP\_NBR | NUMBER(8,0) | Numeric code that uniquely identifies each territory group. |
| TERR\_GRP\_DSC | VARCHAR(60) | Description of the Territory Group |
| PDCN\_ITEM\_ID | NUMBER(15,0) | Unique enterprise ID for a PDCN |
| PDCN_CD | VARCHAR(7) | Distinct 7 character alphanumeric code that represents a unique combination of Brand and Package |
| PDCN_NM | VARCHAR(100) | Descriptive name of the PDCN usually contains brand name, Package Size, Number of Units and Alcohol % |

  

  

  

Published on 4/7/21 by A. Stites
