---
title: Skynet-Arena
tags:
    - Volume
    - Sales
    - Product
    - Prices
---
# Skynet-Arena  

This data set is comprised of views and tables that house the Arena-Skynet data for volume, pricing and products data and are derived from the CSDI below with additional modelling in Azure DW before orchestrating data write into blob. Arena-Skynet is a global product aimed at using artificial intelligence/machine learning to create a sophisticated and dynamic set of tools for promo evaluation and scenario simulation. Using Skynet, the commercial team can track the effectiveness of various pricing and promo models and make adjustment using the models’ output.

_NOTE: Some views listed below have also been used in other Canada data sets and products (ex. LOLA and BEES) and may also be referenced in future editions of Canada’s Certified Data Sets._

The data in these views can be classified into three categories for Arena-Skynet:  
•    Master Data Objects  
•    Pricing Data  
•    Sales volume transactions

  

### **[EDW.CSDI\_DIM\_BRWR_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_BRWR_HIER)**
This is the Brewer Hierarchy Dimension object detailing brewer attributes and classification; i.e.: Competitive vs Labatt/ABI, and the associated keys.  

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BI\_ITEM\_SK | Number(38,0) | Surrogate Key of BI Item for defined components |
| BI\_ITEM\_NAME | varchar(256) | Item Name |
| BRWR_SK | Number(38,0) | Brewer Surrogate Key |
| BRWR_CODE | varchar(10) | Brewer ID Code |
| BRWR_NAME | varchar(50) | Brewer Name |
| BRWR\_NAME\_FR | varchar(50) | Brewer Name French |
| BRWR_ABBR | varchar(10) | Brewer Abbreviation |
| BRWR\_PRNT\_SK | Number(38,0) | Brewer Parent Surrogate Key |
| BRWR\_PRNT\_CODE | varchar(10) | Brewer Parent ID Code |
| BRWR\_PRNT\_NAME | varchar(50) | Brewer Parent Name |
| BRWR\_PRNT\_NAME_FR | varchar(50) | Brewer Parent Name French |
| BRWR\_PRNT\_ABBR | varchar(10) | Brewer Parent Abbreviation |
| BRWR\_TYP\_SK | Number(38,0) | Brewer Type Surrogate Key: Competitive vs ABI/Labatt |
| BRWR\_TYP\_CODE | char(1) | Brewer Type ID Code |
| BRWR\_TYP\_NAME | varchar(16) | Brewer Type Name |
| BRWR\_TYP\_NAME_FR | varchar(16) | Brewer Type French Name |
| LAST\_UPDATED\_TSP | timestamp | ETL Timestamp |

  
  

### **[EDW.CSDI\_DIM\_SLBL\_PROD\_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_SLBL_PROD_HIER)** 
The sellable product hierarchy is defined to support analysis against the SKU and SKU definitions. The hierarchy is based on the SKU with levels of generalization up to the brand and Mix indicator. The brand is the sellable brand so includes mix packs. Because the hierarchy is based on the definition of the SKU itself there is no time variance presented. This object and its’ other variations are referenced by multiple Canada objects related to product, material, or package related data flows.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BI\_ITEM\_SK | decimal(38,0) | Surrogate Key on BI Item |
| BI\_ITEM\_NAME | varchar(256) | Name of the corresponding source data row |
| SLBL\_PROD\_SK | decimal(38,0) | Surrogate Key of parent Sellable Brand |
| SLBL\_PROD\_CODE | varchar(32) | Sellable Product ID |
| SLBL\_PROD\_NAME | varchar(100) | Sellable Procuct Name;CMRCL\_PROD\_NAME from source or SLBL\_BRD\_NAME or SLBL\_BRD\_ALT_NAME from source for brands copied down with a prefix of ‘Other’. |
| SLBL\_PROD\_NAME_FR | varchar(100) | Sellable Procuct Name;CMRCL\_PROD\_NAME from source or SLBL\_BRD\_NAME or SLBL\_BRD\_ALT_NAME in French |
| SLBL\_BASE\_PROD_SK | decimal(38,0) | Sellable Base Product Surrogate Key; Look up the parent to resolve the SK. |
| SLBL\_BASE\_PROD_CODE | varchar(32) | CMRCL\_PROD\_KEY from source or SLBL\_BRD\_ID from source for brands copied down. |
| SLBL\_BASE\_PROD_NAME | varchar(100) | CMRCL\_PROD\_NAME from source or SLBL\_BRD\_NAME or SLBL\_BRD\_ALT_NAME from source for brands copied down with a prefix of ‘Other’. |
| SLBL\_BASE\_PROD\_NAME\_FR | varchar(100) | CMRCL\_PROD\_NAME from source or SLBL\_BRD\_NAME or SLBL\_BRD\_ALT_NAME in French |
| GENR\_PROD\_SK | decimal(38,0) | Surrogate Key of parent Generic Product |
| GENR\_PROD\_CODE | varchar(32) | Generic Product Code; GENR\_PROD\_KEY from source or SLBL\_BRD\_ID from source for brands copied down. |
| GENR\_PROD\_NAME | varchar(80) | Generic Product Name ;GENR\_PROD\_NAME from source or SLBL\_BRD\_NAME or SLBL\_BRD\_ALT_NAME from source for brands copied down with a prefix of ‘Other’. |
| GENR\_PROD\_NAME_FR | varchar(80) | French Generic Product Name |
| CNSMR\_PROD\_SK | decimal(38,0) | Consumer Generic Product Surrogate Key |
| CNSMR\_PROD\_CODE | varchar(32) | Consumer Generic Product Code |
| CNSMR\_PROD\_NAME | varchar(80) | Consumer Generic Product Name |
| CNSMR\_PROD\_NAME_FR | varchar(80) | Consumer Generic Product Name French |
| SLBL\_BRD\_SK | decimal(38,0) | Surrogate Key of parent Sellable Brand |
| SLBL\_BRD\_CODE | varchar(6) | Sellable Brand Code; SLBL\_BRD\_ID from source; from source where the data is sourced from the sub brand |
| SLBL\_BRD\_NAME | varchar(50) | Sellable Brand Name; SLBL\_BRD\_ALT\_NAME or the SLBL\_BRD_NAME when the alternate name is null from source |
| SLBL\_BRD\_NAME_FR | varchar(50) | Sellable Brand Name French |
| SLBL\_BRD\_ABBR | varchar(10) | Sellable Brand Abbreviation |
| MIX\_IND\_SK | decimal(38,0) | Surrogate Key of parent Mix Indicator |
| MIX\_IND\_CODE | char(1) | Mix Indicator Code |
| MIX\_IND\_NAME | varchar(16) | Mix Indicator Name |
| MIX\_IND\_NAME_FR | varchar(16) | Mix Indicator Name French |
| PRC\_CLS\_SK | decimal(38,0) | Price Class Surrogate Key |
| PRC\_CLS\_CODE | varchar(10) | Price Class ID |
| PRC\_CLS\_NAME | varchar(50) | Price Class Name; Premium Craft, Premium Import … |
| PRC\_CLS\_NAME_FR | varchar(50) | French Price Class Name |
| PRC\_CLS\_ABBR | varchar(10) | Price Class Abbreviation |
| PRC\_SEG\_SK | decimal(38,0) | Price Segment Surrogate Key |
| PRC\_SEG\_CODE | varchar(10) | Price Segment Code |
| PRC\_SEG\_NAME | varchar(50) | Price Segment Name |
| PRC\_SEG\_NAME_FR | varchar(50) | Price Segment Name in French |
| PRC\_SEG\_ABBR | varchar(10) | Price Segment Abbreviation |
| LAST\_UPDATED\_TSP | timestamp | ETL Timestamp |

  

  

### **[EDW.CSDI\_REF\_BI_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_BI_ITEM)** 
The BI Item reference data object that is the base for the product dimension at the lowest granularity. Each of the hierarchies is defined separately. References are related but not limited to Brewer, Brand, Package, SKU and material hierarchies.

    
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BI\_ITEM\_SK | Number(38,0) | Surrogate Key on BI Item |
| BI\_ITEM\_NAME | varchar(256) | Name of the corresponding source data row |
| BI\_ITEM\_TYP_CODE | char(1) | BI Item Code |
| BI\_ITEM\_IND\_TYP\_CODE | char(1) | Set based on whether the source row is competitive or not. Industry items may be defined for non brand analytical items only; I- Industry,C-Competitive,L-Labatt |
| BI\_ITEM\_UNIT_CONV | Number(38,0) | Hectolitres to units conversion rate |
| BI\_ITEM\_CNSMR\_UNIT\_CONV | Number(38,0) | Conversion rate from hectolitres to units at the consumer level with no outer package value |
| CMRCL\_PROD\_KEY | varchar(30) | Commercial Product ID |
| LCL\_CMRCL\_PROD_ID | varchar(6) | Local Commercial ID |
| ANAL\_ITEM\_ID | varchar(6) | Analysis Item ID |
| MATL_NBR | varchar(18) | Material Number |
| MATL_NAME | varchar(40) | Material Name from source |
| SUB\_BRD\_ID | varchar(6) | Sub Brand ID |
| CONT\_SZ\_ID | varchar(4) | container Size ID |
| CONT\_TYP\_ID | varchar(4) | Container Type ID |
| CMRCL\_PROD\_CMPNT_CNT | Number(38,0) | Count of the components |
| MIX\_BI\_ITEM_SK | Number(38,0) | SK of BI Item for defined components |
| BRWR_SK | Number(38,0) | Brewer Surrogate Key |
| SLBL\_PROD\_SK | Number(38,0) | Sellable Product Surrogate Key |
| CMPNT\_BRD\_SK | Number(38,0) | Component Brand Surrogate Key |
| PKG_SK | Number(38,0) | Package Surrogate Key |
| BRD\_TST\_SEG_SK | Number(38,0) | Brand Taste Segment Surrogate Key |
| CNTRY\_PROD\_SK | Number(38,0) | Product Country Surrogate Key |
| PRC\_CLS\_SK | Number(38,0) | Surrogate Key of parent Price Class |
| ALCHL\_CNTN\_SK | Number(38,0) | Alcohol Content Surrogate Key |
| LIQ\_CLS\_SK | Number(38,0) | Liquor Class Surrogate Key |
| OTR\_PKG\_TYP_SK | Number(38,0) | Outer Package Type Surrogate Key |
| PROD\_REFILL\_IND_SK | Number(38,0) | Product Refill Indicator Surrogate Key |
| BEV\_TYP\_SK | Number(38,0) | Beverage Type Surrogate Key |
| MATL\_TYP\_SK | Number(38,0) | Material Type Surrogate Key |
| MATL\_STAT\_SK | Number(38,0) | Material Status ID from source |
| START_DT | date | Effective start date of row |
| END_DT | date | Effective end date of row |
| DEL_IND | Number(38,0) | Deleted Indicator. Processed in ETL |
| LAST\_UPDATED\_TSP | Timestamp | ETL Timespan |
| BI\_ITEM\_ALCHL_PCT | Number(38,0) | Average of Alcohol percentage is calculated using the min and max value |

  

  

  

### **[EDW.CSDI\_APP\_REV\_MAN\_PTC\_BY\_WINDOW](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_REV_MAN_PTC_BY_WINDOW)** 
The  view contains Price to Consumer by Pricing Window for Price History Analysis by Price Source as  they relate to Product Pricing, offers, associated taxes and fees; Product and Pack size.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| Price\_Source\_Code | varchar(6) | PRC\_SRC\_ID from source |
| Price\_Source\_Name | varchar(50) | PRC \_SRC\_NAME from source |
| Price\_Window\_Code | varchar(32) | Price Window Code; defines the ID for the Start and End Date for the Window period |
| Price\_Window\_Year | decimal(38,0) | Pricing Window Period Year |
| Price\_Window\_Period | decimal(38,0) | Pricing Window Period ID |
| Price\_Window\_Start_Date | date | Price Window Start Date |
| Price\_Window\_End_Date | date | Price Window End Date |
| Brewer_Name | varchar(50) | Brewer Name |
| Brewer\_Parent\_Name | varchar(50) | Brewer Parent Name |
| Brewer_Type | varchar(16) | Brewer Type: Competitive vs ABI |
| Product_Key | varchar(32) | Commercial Product Key |
| Product_Name | varchar(100) | Commercial Prouct Name |
| Generic\_Product\_Name | varchar(80) | Generic Product Name |
| Brand_Name | varchar(50) | Brand Name |
| Price\_Class\_Name | varchar(50) | Price Class Name; Premium Craft, Premium Import … |
| Price\_Segment\_Name | varchar(50) | Price Segment Name |
| Package_Name | varchar(50) | Combination of Material , Container size and Container count |
| Container\_Type\_Name | varchar(50) | Container material type |
| Container\_Size\_Litres | decimal(38,0) | Container volume size in Litres |
| Outer\_Package\_Count | decimal(38,0) | Outer Package Container Number; where the data is sourced from the combination available at the package level. |
| Inner\_Package\_Count | decimal(38,0) | Inner Package Container Number; where the data is sourced from the combination available at the package level. |
| Container_Count | decimal(38,0) | Package Container Count |
| All\_In\_Price\_Per\_Unit | decimal(14,6) | All in price per unit in CAD including taxes and deposit |
| Pre\_Tax\_Price\_Per\_Unit | decimal(14,6) | Price per unit in CAD excluding taxes and deposit |
| GST\_Per\_Unit | decimal(14,6) | GST/HST portion of the price per unit in CAD |
| PST\_Per\_Unit | decimal(14,6) | Provincial tax portion of the price per unit in CAD |
| Deposit\_Per\_Unit | decimal(14,6) | Deposit portion of the price per unit in CAD |
| LTO\_Price\_Per_Unit | decimal(14,6) | Limited time offer price per unit adjustment amount in CAD |
| All\_In\_Price\_Per\_HL | decimal(27,0) | All in price per HL in CAD |
| Pre\_Tax\_Price\_Per\_HL | decimal(27,0) | Price per HL in CAD excluding taxes and deposit |
| GST\_Per\_HL | decimal(27,0) | GST/HST portion of the price per HL in CAD |
| PST\_Per\_HL | decimal(27,0) | Provincial tax portion of the price per HL in CAD |
| Deposit\_Per\_HL | decimal(27,0) | Deposit portion of the price per HL in CAD |
| LTO\_Price\_Per_HL | decimal(27,0) | Limited time offer price per HL adjustment amount in CAD |

  

  

  

### **[EDW.CSDI\_DIM\_PRC\_CLS\_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_PRC_CLS_HIER)** 
The view contains Current state Price Class Hierarchy which can be used to categorize liquid/beer class and segments e.g: Craft, Premium and Beyond Beer

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| BI\_ITEM\_SK | Number(38,0) | Surrogate Key on BI Item |
| BI\_ITEM\_NAME | varchar(256) | Name of the corresponding source data row |
| PRC\_CLS\_SK | Number(38,0) | Price Class Surrogate Key |
| PRC\_CLS\_CODE | varchar(10) | Price Class Source ID |
| PRC\_CLS\_NAME | varchar(50) | Price Class Name |
| PRC\_CLS\_NAME_FR | varchar(50) | Price Class Name French |
| PRC\_CLS\_ABBR | varchar(10) | Price Class Abbreviation |
| PRC\_SEG\_SK | Number(38,0) | Price Segment Surrogate Key |
| PRC\_SEG\_CODE | varchar(10) | Price Segment Source ID |
| PRC\_SEG\_NAME | varchar(50) | Price Segment Name |
| PRC\_SEG\_NAME_FR | varchar(50) | Price Segment French |
| PRC\_SEG\_ABBR | varchar(10) | Price Segment Abbreviation |
| LAST\_UPDATED\_TSP | Timestamp_ntz | ETL Timestamp |

  

  

  

### **[EDW.CSDI\_DIM\_CH_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_CH_HIER)** 
The channel view  is defined to support analysis against the channel of product sales distribution. It represents a three level hierarchy; Premise , Sales Channel and the sub-channel. A channel may be identified as a characteristic of the transaction, but also can be looked at as a characteristic of a POC.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SLS\_SUB\_CH_SK | Number(38,0) | Sales Sub-channel Surrogate Key |
| SLS\_SUB\_CH_CODE | char(2) | Sales Source Code; SLS\_SRC\_ID from source |
| SLS\_SUB\_CH_NAME | varchar(50) | Sales Source Name |
| SLS\_SUB\_CH\_SHT\_NAME | varchar(50) | Sales Subchannel Short Name |
| SLS\_SUB\_CH\_NAME\_FR | varchar(50) | Sales Subchannel Name French |
| SLS\_SUB\_CH\_SHT\_NAME_FR | varchar(50) | Sales Subchannel Short Name French |
| SLS\_CH\_SK | Number(38,0) | Sales Channel Surrogate Key |
| SLS\_CH\_CODE | char(2) | Sales Channel Code |
| SLS\_CH\_NAME | varchar(50) | Sales Channel Name |
| SLS\_CH\_SHT_NAME | varchar(50) | Sales Channel Short Name |
| SLS\_CH\_NAME_FR | varchar(50) | Sales Channel French |
| SLS\_CH\_SHT\_NAME\_FR | varchar(50) | Sales Channel Short Name French |
| PREM_SK | Number(38,0) | Premise Surrogate Key |
| PREM_CODE | char(2) | Premise Code |
| PREM_NAME | varchar(13) | Premise Name English |
| PREM\_NAME\_FR | varchar(13) | Premise Name French |
| LAST\_UPDATED\_TSP | Timestamp_ntz | ETL Timestamp |

  

  

  

### **[EDW.CSDI\_REF\_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_DT)** 
The view is base reference object for Date

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DT_SK | Number(38,0) | Date Surrogate Key |
| DT_CODE | varchar(10) | Date Code |
| TM_DMN | char(1) | Time Domain; Day, Week, Split Week, month |
| START_DT | date | Start Date |
| END_DT | date | End Date |
| DY_SK | Number(38,0) | Day Surrogate Key |
| SPLIT\_WK\_SK | Number(38,0) | Split Week Surrogate Key |
| WK_SK | Number(38,0) | Week Surrogate Key |
| MO_SK | Number(38,0) | Month Surrogate Key |
| LAST\_UPDATED\_TSP | Timestamp_ntz | ETL Timestamp |

  

  

  

### **[EDW.CSDI\_REF\_GEO_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_GEO_REGN)** 
The is base reference object for regions and geographical attributes

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| GEO\_REGN\_SK | Number(38,0) | Geographic Region Surrogate Key |
| GEO\_REGN\_CODE | varchar(6) | Geographics Region Code/ID; ID from source (REG\_CUR\_PROV). Limit the selection to where id is not null |
| GEO\_REGN\_NAME | varchar(50) | Geographic Region Name |
| GEO\_REGN\_ABBR | varchar(4) | Geographic Region Abbreviation |
| CNTRY_SK | Number(38,0) | Country Surrogate Key |
| SLS\_ORG\_SK | Number(38,0) | Sales Organization Surrogate Key |
| DEL_IND | Number(38,0) | Deleted Indicator |
| LAST\_UPDATED\_TSP | Timestamp_ntz | ETL Timestamp |

  

  

  

### **[EDW.CSDI\_REF\_SLS_SRC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_SRC)** 
The view contains sales sources and associated attributes related to product, liquid classification, and owner cross references

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| SLS\_SRC\_SK | Number(38,0) | Sales Source Surrogate Key |
| SLS\_SRC\_CODE | varchar(10) | Sales Source Code |
| SLS\_SRC\_NAME | varchar(256) | Sales Source Name |
| SLS\_SRC\_TM_DMN | char(1) | Sales Source Time Domain |
| CMRCL\_SLS\_IND | Number(38,0) | Commercial Sales Indicator |
| DEMND\_SLS\_IND | Number(38,0) | Demand Sales Indicator |
| VC\_SLS\_IND | Number(38,0) | Variable Compensation Sales Indicator |
| RR\_SLS\_IND | Number(38,0) | Revenue Recognition Sales Indicator |
| DEL_IND | Number(38,0) | Delete Indicator |
| LAST\_UPDATED\_TSP | Timestamp_NTZ | ETL Timestamp |
| CNTER\_SLS\_IND | Number(38,0) | Counter Sales Indicator |
| PROD\_XREF\_OWNR_SK | Number(38,0) | Product Cross Ref Owner Surrogate Key |
| LOC\_XREF\_OWNR_SK | Number(38,0) | Location Cross Ref Owner Surrogate Key |
| SLS\_TRAN\_XREF\_OWNR\_SK | Number(38,0) | Sales Transaction Cross Ref Owner Surrogate Key |
| RTD\_SLS\_IND | Number(38,0) | RTD Sales Indicator; Beyond Beer category |
| BEER\_SLS\_IND | Number(38,0) | Beer Sales Indicator |
| PRD\_DEF\_SK | Number(38,0) | Period Definition Surrogate Key (used for Pricing Window Definition); Lookup surrogate key in REF\_PRD\_DEF based on PRD\_DEF\_ID |
| DLY\_SLS\_IND | Number(38,0) | Daily Sales Indicator for Sales classification : Daily, weekly, split weekly or monthly |

  

  

  

### **[EDW.CSDI\_REF\_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_WK)** 
This is base reference object for week and related attributes

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| WK_SK | Number(38,0) | Week Surrogate Key |
| WK_CODE | varchar(10) | Week Code/ID |
| WK_NAME | varchar(10) | Week Name |
| WK\_SHT\_NAME | varchar(12) | Week Short Name |
| WK\_LONG\_NAME | varchar(18) | Week Long Name |
| WK\_SHT\_NAME_FR | varchar(12) | Week Short Name French |
| WK\_LONG\_NAME_FR | varchar(18) | Week Long Name French |
| WK\_OF\_YR | char(2) | Week of the Year |
| WK\_YR\_SK | Number(38,0) | Week of the Year Surrogate Key |
| START_DT | date | Week Start Date |
| END_DT | date | Week End Date |
| Last\_Updated\_Tsp | Timestamp_ntz | ETL Timestamp |

  

  

  

### **[EDW.CSDI\_REF\_POC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_POC)** 
This view contains POC/Store IDs ,  physical location details and related channels.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| POC_SK | Number(38,0) | POC Surrogate Key; The surrogate key assignments are defined as part of POC load |
| POC_CODE | varchar(10) | POC Code/ID |
| POC_NAME | varchar(256) | POC Physical Location Name |
| POC\_ADDR\_1 | varchar(256) | POC Physical Address 1 |
| POC\_ADDR\_2 | varchar(256) | POC Physical Address 2 |
| POC\_CITY\_MCPLTY | varchar(256) | POC Physical Municipal City |
| POC\_POSTL\_CODE | varchar(20) | POC Physical Postal/Zip Code |
| POC\_PRMT\_NBR | varchar(15) | POC Permit Number |
| POC_LATTD | decimal(18 | POC Latitude |
| POC_LNGTD | decimal(18 | POC Longitude |
| POC\_CALLD\_ON\_CTGY\_SK | Number(38,0) | POC Called ON Category Surrogate Key |
| POC\_SUB\_SEG_SK | Number(38,0) | POC Sub Surrogate Key |
| POC\_SEG\_SK | Number(38,0) | POC Segment Surrogate Key |
| POC\_DIST\_SEG_SK | Number(38,0) | POC Distribution Segment Key; Distribution Segment of POC |
| SLS\_SUB\_CH_SK | Number(38,0) | Sales Sub-channel Surrogate Key |
| SLS\_ORG\_SK | Number(38,0) | Sales Organization Surrogate Key; Look up the parent to resolve the SK |
| SLS\_KEY\_ACCT\_ORG\_SK | Number(38,0) | Sales Key account Organization Surrogate Key |
| GEO\_REGN\_SK | Number(38,0) | Geographical Region Surrogate Key; Lookup the parent to resolve SK based on City ID associated with Physical Location |
| START_DT | date | POC Start Date |
| END_DT | date | POC End Date |
| DEL_IND | Number(38,0) | Deleted Indicator |
| LAST\_UPDATED\_TSP | Timestamp_ntz | ETL Timestamp |
| POC\_CITY\_NAME | varchar(256) | POC Physical City Name |
| POC\_MBC\_CALLD\_ON\_CTGY_SK | Number(38,0) | POC Beyond Beer Called ON Category Surrogate Key |
| POC\_CRFT\_CALLD\_ON\_CTGY_SK | Number(38,0) | POC Craft Called ON Category Surrogate Key |

  

  

  

### **[EDW.CSDI\_FCT\_POC_SLS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_FCT_POC_SLS)** 
This view contains POC related transactions related to scans sales as well as date-time and products attributes. When joined with the Sellable product hierarchy, additional details related to brands and package details can be referenced.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| DT_SK | Number(38,0) | Date Surrogate Key |
| DY_SK | Number(38,0) | Day Surrogate Key |
| SPLIT\_WK\_SK | Number(38,0) | Split Week Surrogate Key |
| WK_SK | Number(38,0) | Week Surrogate Key |
| MO_SK | Number(38,0) | Month Surrogate Key |
| EFF_DT | Date | Effective Sales Date |
| PRD\_DEF\_DTL_SK | Number(38,0) | Surrogate Key on Week, Month or Period Definition Detail (Pricing Window) |
| SLS\_SRC\_SK | Number(38,0) | Sales Source Surrogate Key |
| POC_SK | Number(38,0) | POC Surrogate Key |
| PHF\_LOC\_SCM_SK | Number(38,0) | Physical Surrogate Key |
| BI\_ITEM\_SK | Number(38,0) | Surrogate Key on BI Item |
| ORGNC\_BI\_ITEM_SK | Number(38,0) | Organic BI Item Surrogate Key |
| PREM_SK | Number(38,0) | Premise Surrogate Key |
| SLS\_SUB\_CH_SK | Number(38,0) | Sales Subchannel Surrogate Key |
| SLS_HL | Number(38,0) | Sales Volumes in Hectoliters |
| SLS\_UNIT\_PRC | Number(38,0) | Sales Unit Price |
| LAST\_UPDATED\_TSP | Timestamp_NTZ | ETL Timestamp |

  

  

  

  

Published on 5/26/21 by A. Stites, content by N. Kandeya