---
title: VIP Call Points
tags:
    - Employee
    - Retail
    - Volume
    - Prices
    - VIP
description: VIP Outlets that meet user-created defining criteria such as Chain Name, Ownership hierarchy, geography or specific VIP ID
---
# VIP Call Points  

This data set allows users to join and view VIP Sales data using the various levels of chain ownership hierarchy and with AB-defined Call Points. A Call Point is a collection of VIP Outlets that meet user-created defining criteria such as Chain Name, Ownership hierarchy, geography or specific VIP ID. Call Points are structured to reflect and track results for national and regional Channel retail teams that call on our major chain business. Through a series of extracts provided directly by VIP and loaded into Snowflake users can quickly define the relationship between VIP IDs and their chain assignments to then traverse the Call Points and Ownership views to understand how national and local chains roll up through 4 levels of ownership hierarchy. Alternatively, by using the employee assignments within the Call Points view users can create queries to pull volume by employee for the Call Points they are assigned.

  

### **[EDW.VIP_KARM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_KARM)** 
This is the base view that defines all Call Points along with the dynamic and specific criteria used to create those Call Point and the AB employee mapping to that Call Point. There are currently 9 different Call Point types and each VIP Outlet may only be assigned to one Call Point within each type. It’s important to note that a Call Point may have more than one record in this view if it is defined by multiple criteria. Due to this structure, to avoid duplicating volume when referencing this view you must use a DISTINCT qualifier on the KHCALLID and KHName fields only for any sales query.

    
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| VIP\_SEQ\_ID | NUMBER(15,0) | Sequence ID created by AB when loading data from VIP |
| KHCALLID | NUMBER(8,0) | Call Point ID |
| KHNAME | VARCHAR(35) | Call Point Name |
| KHTYPE | VARCHAR(8) | Call Point Type |
| KHEMPID | VARCHAR(10) | DO NOT USE |
| KHADDR1 | VARCHAR(30) | Call Point Address |
| KHADDR2 | VARCHAR(30) | Call Point Address Line 2 |
| KHCITY | VARCHAR(20) | Call Point City |
| KHSTAT | VARCHAR(2) | Call Point State |
| KHZIP4 | VARCHAR(5) | Call Point Zip |
| KHCONNAME | VARCHAR(30) | Call Point Contact Name |
| KHCONEML | VARCHAR(128) | Call Point Email |
| KHCONPHN1 | VARCHAR(10) | Call Point Phone |
| KHCONEXT1 | VARCHAR(5) | Call Point Ext |
| KHCONMBL | VARCHAR(10) | Call Point Mobile |
| KHSTORCNT | NUMBER(5,0) | Count of unique VIP IDs within Call Point |
| KH12MOCE | NUMBER(11,0) | L12M Volume for Call Point |
| KHSTOBLDD | TIMESTAMP_NTZ(9) | Last refresh date of Call Point |
| KHSTATUS | VARCHAR(8) | Call Point Status (Active or Inactive) |
| KDBANNER | VARCHAR(10) | Dynamically Assigned VIP Chain Code |
| KDCONCEPT | VARCHAR(10) | Dynamically Assigned VIP Concept Code (Ownership Levels) |
| KDULTIMATE | VARCHAR(10) | Dynamically Assigned VIP Level 4 Ultimate Owner |
| KDL2 | VARCHAR(10) | Dynamically assigned Chain Sub Division Code |
| KDL3 | VARCHAR(10) | Dynamically assigned Chain Division code |
| KDIMMED | VARCHAR(10) | Dynamically assigned Immediate Owner code |
| KDSTATE | VARCHAR(2) | Dynamically assigned state criteria |
| KDMSA | VARCHAR(8) |     |
| KDSTORID | NUMBER(10,0) | VIP ID only valid when stores are explicitly assigned. **Must use KARX to get all valid VIP ID -> Call Point relationships** |
| KETYPE | VARCHAR(8) | DO NOT USE |
| KENAME | VARCHAR(30) | DO NOT USE |
| KEADDR1 | VARCHAR(30) | DO NOT USE |
| KEADDR2 | VARCHAR(30) | DO NOT USE |
| KECITY | VARCHAR(25) | DO NOT USE |
| KESTAT | VARCHAR(2) | DO NOT USE |
| KEZIP5 | VARCHAR(5) | DO NOT USE |
| KEZIP4 | VARCHAR(4) | DO NOT USE |
| KEPHONE | VARCHAR(10) | DO NOT USE |
| KEPHNEXT | VARCHAR(5) | DO NOT USE |
| KEMOBILE | VARCHAR(10) | DO NOT USE |
| KEEMAIL | VARCHAR(128) | DO NOT USE |
| KEMANAGER | VARCHAR(8) | DO NOT USE |
| KEDIVCD | VARCHAR(4) | DO NOT USE |
| KEAREAID | VARCHAR(4) | DO NOT USE |
| KEMRKTCD | VARCHAR(4) | DO NOT USE |
| KESTATUS | VARCHAR(1) | DO NOT USE |
| KEMNGR | VARCHAR(30) | DO NOT USE |
| KDINCLUDE | VARCHAR(1) | Include/Exclude code for dynamic or specific criteria assigned within SRS interface |
| KDCOUNTY | VARCHAR(50) | Dynamically Assigned County |
| KDCITY | VARCHAR(30) | Dynamically Assigned City |
| KCVCFVL1 | VARCHAR(50) | KAM Name |
| KCVCFVL2 | VARCHAR(50) | Channel RSD Name |
| KCVCFVL3 | VARCHAR(50) | Region RSD Name |
| KCVCFVL4 | VARCHAR(50) | Sr Retail SD Name |
| KCVCFVL5 | VARCHAR(50) | W & S KAM Name |
| KCVCFVL6 | VARCHAR(50) | Region Turbo Name |
| KCVCFVL7 | VARCHAR(50) | High End KAM KAM |
| KCVCFVL8 | VARCHAR(50) | Currently Unused |
| KCVCFVL9 | VARCHAR(50) | Currently Unused |
| KCVCFVL10 | VARCHAR(50) | Currently Unused |
| KCVCFCD1 | VARCHAR(20) | KAM Position Name |
| KCVCFCD2 | VARCHAR(20) | Channel RSD Position Name |
| KCVCFCD3 | VARCHAR(20) | Region RSD Position Name |
| KCVCFCD4 | VARCHAR(20) | Sr Retail SD Position Name |
| KCVCFCD5 | VARCHAR(20) | W & S KAM Position Name |
| KCVCFCD6 | VARCHAR(20) | Region Turbo Position Name |
| KCVCFCD7 | VARCHAR(20) | High End KAM Position Name |
| KCVCFCD8 | VARCHAR(20) | Currently Unused |
| KCVCFCD9 | VARCHAR(20) | Currently Unused |
| KCVCFCD10 | VARCHAR(20) | Currently Unused |
| KHCUSTID | VARCHAR(15) |     |
| KCVCFPC1 | VARCHAR(20) | KAM SAP Position Code |
| KCVCFPC2 | VARCHAR(20) | Channel RSD SAP Position Code |
| KCVCFPC3 | VARCHAR(20) | Region RSD SAP Position Code |
| KCVCFPC4 | VARCHAR(20) | Sr Retail SD SAP Position Code |
| KCVCFPC5 | VARCHAR(20) | W & S KAM SAP Position Code |
| KCVCFPC6 | VARCHAR(20) | Region Turbo SAP Position Code |
| KCVCFPC7 | VARCHAR(20) | High End KAM SAP Position Code |
| KCVCFPC8 | VARCHAR(20) | Currently Unused |
| KCVCFPC9 | VARCHAR(20) | Currently Unused |
| KCVCFPC10 | VARCHAR(20) | Currently Unused |
| KCVCFPN1 | VARCHAR(50) | KAM SAP Position Title |
| KCVCFPN2 | VARCHAR(50) | Channel RSD SAP Position Title |
| KCVCFPN3 | VARCHAR(50) | Region RSD SAP Position Title |
| KCVCFPN4 | VARCHAR(50) | Sr Retail SD SAP Position Title |
| KCVCFPN5 | VARCHAR(50) | W & S KAM Position Title |
| KCVCFPN6 | VARCHAR(50) | Region Turbo SAP Position Title |
| KCVCFPN7 | VARCHAR(50) | High End KAM SAP Position Title |
| KCVCFPN8 | VARCHAR(50) | Currently Unused |
| KCVCFPN9 | VARCHAR(50) | Currently Unused |
| KCVCFPN10 | VARCHAR(50) | Currently Unused |
| KCVCFNM1 | VARCHAR(120) | KAM Standardized Position Title |
| KCVCFNM2 | VARCHAR(120) | Channel RSD Standardized Position Title |
| KCVCFNM3 | VARCHAR(120) | Region RSD Standardized Position Title |
| KCVCFNM4 | VARCHAR(120) | Sr Retail SD Standardized Position Title |
| KCVCFNM5 | VARCHAR(120) | W & S KAM Standardized Position Title |
| KCVCFNM6 | VARCHAR(120) | Region Turbo Standardized Position Title |
| KCVCFNM7 | VARCHAR(120) | High End KAM Standardized Position Title |
| KCVCFNM8 | VARCHAR(120) | Currently Unused |
| KCVCFNM9 | VARCHAR(120) | Currently Unused |
| KCVCFNM10 | VARCHAR(120) | Currently Unused |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Record Update Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

### **[EDW.VIP_KARX](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_KARX)**
This view defines the relationship between VIP Outlets and Call Points. A record is generated on this view for every instance of a VIP/Call Point relationship. It is highly suggested that this be the primary view used when querying volume by Call Point in order to avoid duplicating volume. The VIP ID field on this view can be joined back to VIP\_SLS\_STR to get the volume for a given VIP Outlet or collection of outlets.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| KSCALLID | NUMBER(8,0) | Call Point ID |
| KSTYPE | VARCHAR(8) COLLATE | Call Point Type |
| KSSTOREID | NUMBER(10,0) | VIP ID |
| KS12MCEVOL | NUMBER(10,0) | 12 Month Volume for VIP ID |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Timestamp |

  

### [**EDW.VIP_OWNHIER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_OWNHIER)
This view defines the Chain Ownership Hierarchy that is defined by the VIP Retail Account Cleaning (ROC) Team within VIP SRS. There ae 4 possible levels of chain ownership within the current hierarchy (listed from lowest to highest) – Immediate Owner, Chain Sub Division, Chain Division, Ultimate Owner. The four chain code fields in this view can be joined to the VIP\_OWNDESC view to retrieve identifying attributes of the chains. If you need Chain Type or Parent Chain Code that can be retrieved from the VIP\_CHAIN view.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RECORDTYPE | VARCHAR(6) | N/A |
| VPOCHNHCD1 | NUMBER(10,0) | Immediate Owner Code |
| VPOCHNHNM1 | VARCHAR(35) | Immediate Owner Name |
| VPOCHNHCD2 | NUMBER(10,0) | Chain Sub Division Code |
| VPOCHNHNM2 | VARCHAR(35) | Chain Sub Division Name |
| VPOCHNHCD3 | NUMBER(10,0) | Chain Division Code |
| VPOCHNHNM3 | VARCHAR(35) | Chain Division Name |
| VPOCHNHCD4 | NUMBER(10,0) | Ultimate Owner Code |
| VPOCHNHNM4 | VARCHAR(35) | Ultimate Owner Name |
| VPOCHNHSTAT | VARCHAR(1) | Active/Inactive Flag for Immediate Owner Chain Code |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Record update Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

  
### [**EDW.VIP_OWNDESC**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_OWNDESC)
This view provides descriptive attributes about chains including the primary mailing address, city, state and zip code. It can be joined from any other view tht contains the VIP Chain Code field to bring in these descriptive attributes.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RECORDTYPE | VARCHAR(6) | N/A |
| VPCHNHCD | NUMBER(5,0) | VIP Chain Code |
| VPCHNHNM | VARCHAR(35) | VIP Chain Name |
| VPCHNHADR | VARCHAR(35) | VIP Chain Addres |
| VPCHNHCITY | VARCHAR(35) | VIP Chain City |
| VPCHNHST | VARCHAR(2) | VIP Chain State |
| VPCHNHZIP | VARCHAR(9) | VIP Chain Zip |
| VPCHNHPHN | NUMBER(20,0) | VIP Chain Phone |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Record update Timestamp |
| MDATA\_OBJ\_ID | NUMBER(15,0) |     |

  

  

### [**EDW.VIP_CHAIN**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_CHAIN)
This view provides a link between the VIP Chain Code and the Name of the chain as well as mapping from Chain Code to Parent Chain code. Example: Walmart Supercenter chain has a parent chain of Walmart Stores Inc.

  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| RECORDTYPE | VARCHAR(6) | N/A |
| VPCHN | VARCHAR(10) | VIP Chain Code |
| VPCHNM | VARCHAR(50) | VIP Chain Name |
| VPCHNTYP | VARCHAR(1) | VIP Chain Type |
| VPPARCHN | VARCHAR(10) | VIP Parent Chain Code |
| VPPARNM | VARCHAR(35) | VIP Parent Chain Name |
| EDW\_START\_TSP | TIMESTAMP_NTZ(9) | Record update timestamp |

  

Published on 3/10/21 by A. Stites
