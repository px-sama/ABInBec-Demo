---
title: Canada Scan Data
tags:
    - Consumer Data
    - Retail
    - Sales
---
# Canada Scan Data  

The focus of this data set is consumer sales data provided by 3rd party sources for the Grocery channel. Each of the four sources are provide by external data vendors/partners and loaded in to CSDI on a regular cadence with POC and item level detail along with totals sales expressed in hectoliters and a price per unit value. The data for these retailers is housed in a table containing other sources of data but can be identified by their unique Sales Source Surrogate Key value.

  

### **[EDW.CSDI\_FCT\_WK\_POC\_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_WK_POC_SLS)** 
The data in this view is an aggregate of weekly POC level item sales across multiple different sales sources within the CSDI environment. Each source of sales is identified by a unique surrogate key found in the SLS\_SRC\_SK field which should be joined to the CSDI\_REF\_SLS_SRC view to retrieve the descriptive name of the source.. The various sales metrics are populated in each record only if they are provided and applicable for the given source. 


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WK_SK | NUMBER(38,0) | Surrogate Key for Sales Week |
| SLS\_SRC\_SK | NUMBER(38,0) | Surrogate Key for Sales Source |
| POC_SK | NUMBER(38,0) | Surrogate Key for POC (retailer) from MDM |
| PHF\_LOC\_SCM_SK | NUMBER(38,0) | Surrogate Key for physical location |
| BI\_ITEM\_SK | NUMBER(38,0) | Surrogate Key for Item from MDM |
| ORGNC\_BI\_ITEM_SK | NUMBER(38,0) | Surrogate Key for Organic Status of Item based on acquisition date |
| PREM_SK | NUMBER(38,0) | Surrogate Key for Premise type of POC |
| SLS\_SUB\_CH_SK | NUMBER(38,0) | Surrogate Key for Subchannel of POC |
| RPTD\_SLS\_HL | NUMBER(38,12) | Reported Sales in Hectoliters |
| CMRCL\_SLS\_HL | NUMBER(38,12) | Commercial sales in hectoliters (not relevant to this data set) |
| DEMND\_SLS\_HL | NUMBER(38,12) | Demand sales in hectoliters (not relevant to this data) |
| VC\_SLS\_HL | NUMBER(38,12) | Variable comp sales in hectoliters (not relevant to this data set) |
| RR\_SLS\_HL | NUMBER(38,12) | Recognized Revenue sales in hectoliters (not relevant to this data set) |
| CNTER\_SLS\_HL | NUMBER(38,12) | Counter sales in hectoliters (not relevant to this data) |
| BEER\_SLS\_HL | NUMBER(38,12) | Beer sales in hectoliters (not relevant to this data set) |
| RTD\_SLS\_HL | NUMBER(38,12) | RTD sales in hectoliters (not relevant to this data set) |
| SLS\_UNIT\_PRC | NUMBER(8,2) | Price per Unit |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Date of last update to record |

  
  

### **[EDW.CSDI\_REF\_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_SRC)** 
The data in this view serves as a reference to define the various sources of sales data within CSDI. Each record indicates a different source and contains flag indicators that help define the use-case and contents of data provided by the source. Below


 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SLS\_SRC\_SK | NUMBER(38,0) | Surrogate Key for the Sales Source |
| SLS\_SRC\_CODE | VARCHAR(10) | Three digit code associated with the Sales Source |
| SLS\_SRC\_NAME | VARCHAR(256) | Descriptive name of the Sales Source |
| SLS\_SRC\_TM_DMN | VARCHAR(1) | Indicator for cadence of data fresh (Daily, Weekly, Split Week, Monthly) |
| CMRCL\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains Commercial sales |
| DEMND\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains Demand sales |
| VC\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains Variable Compensation sales |
| RR\_SLS\_IND | NUMBER(38,0) | Flag indicating if source can be used as official source of Labatt revenue |
| DEL_IND | NUMBER(38,0) | Flag to indicate if source should be deleted |
| LAST\_UPDATED\_TSP | TIMESTAMP_NTZ(9) | Last updated date for the record |
| CNTER\_SLS\_IND | NUMBER(38,0) | Flag indicating of source contains Counter sales |
| PROD\_XREF\_OWNR_SK | NUMBER(38,0) | Surrogate Key for Product Owner Cross Reference |
| LOC\_XREF\_OWNR_SK | NUMBER(38,0) | Surrogate Key for Location Owner Cross Reference |
| SLS\_TRAN\_XREF\_OWNR\_SK | NUMBER(38,0) | Surrogate Key for Sales Transaction Cross Reference |
| RTD\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains Ready to Drink sales |
| BEER\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains Beer sales |
| PRD\_DEF\_SK | NUMBER(38,0) | Surrogate Key for Product Definition |
| DLY\_SLS\_IND | NUMBER(38,0) | Flag indicating if source contains daily sales |

  

  

**Grocery Scan Data Sources**  
  
Loblaws Sales from LDIA  
Records with this source code reflect sales from Loblaws which is a Canadian supermarket chain with locations across 6 different provinces (BC, Manitoba, Saskatchewan, Alberta, Ontario and Quebec). POC level sales from Loblaws are retrieved via the Loblaw Data Insights & Analytics Portal (LDIA) and reflect POC level consumer sales at Loblaws locations across Canada. Sales data is reported weekly and includes both Labatt and Competitive items from the following categories: Beer, Beer based coolers, Ciders, Spirit based coolers, Spirit based RTD’s and NA beer. LDIA also provides the external master data for Products and Stores which the MDM product request system uses to create Loblaws SKU’s automatically. 

  

  
Loblaws Sales from Top Shelf - History  
Records with this source code reflect POC level sales to consumers from Loblaws via Top Shelf which is the legacy system that previously provided Loblaws sales for the Central, East and West Regions independently. This POC level sales history of sales to consumers is now grouped under the “Loblaws Sales from Top Shelf – History” source code.  The data set includes sales of both Labatt and Competitive products. This source is static and is no longer updated but can be used for historical reference.  

  

Metro Sales from Dunhumby  
The records with this source code reflect POC level sales to consumers from Metro – a Canadian food retailer operating in Quebec and Ontario. Metro sales are loaded weekly from files provided to Labatt by Dunnhumby and are allocated to split week for consistent reporting when a month or year is split mid-week. Products included in the Metro data include Labatt and Competitive items from the following categories: Beer, Beer based coolers, Ciders, Spirit based RTD’s and NA beer. Competitive sales data may also include wines and spirit-based coolers in some instances. Dunnhumby provides Labatt with master data files for Products and Stores, which are used to create external products and locations in the MDM system.  
  
Sobeys Sales from IRI  
The records with this source code reflect POC level sales to consumers from Sobey’s which is the second largest food retailer in Canada. Sales are loaded from files provided to Labatt by IRI on a weekly basis. This data includes consumer sales for Beer, Beer-based coolers, Ciders, Spirit based RTDs and NA Beer for both Labatt and Competitive products. Competitive sales data may also include wines and spirit-based coolers in some instances.  
Control tables are used to align the sales with Labatt calendar.  IRI provides master data to Labatt for Products and Stores which is used to automatically create products and POC’s in MDM.  

  

Published on 4/30/21 by A. Stites. Content from I. Mahmood