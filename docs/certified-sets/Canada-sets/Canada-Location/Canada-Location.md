---
title: Canada Location
slug: /Canada-Location
tags:
    - Location
    - Consumer Data
    - Application
---
# Canada Location :
These tables contain all the different types of Locations used across all the applications in Canada. POC is the base for the product dimension and used along with other tables to get the required details.


 
## POC (Point of Connection)
Table Name : [CSDI_T.REF_POC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_POC)<br/>
View Name : [CSDI.REF_POC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_POC)<br/>
EDW View Name :[EDW.CSDI_REF_POC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_POC)<br/>

This is the Base Table for Geography dimension and used in all the reporting. It contains all the physical locations and plants.

Field Name	|	Data Type	 |	Comment
-	|	-	|	-
POC_SK	|	NUMBER(38,0)	|	Surrogate Key for Point of Connection 
POC_CODE	|	VARCHAR(10)	|	Physical Location Code created in Kalido MDM for each location
POC_NAME	|	VARCHAR(256)	|	Physical Location Name defined in Kalido MDM for each location
POC_ADDR_1	|	VARCHAR(256) 	|	Address Line 1 for POC
POC_ADDR_2	|	VARCHAR(256) 	|	Address Line 1 for POC
POC_CITY_MCPLTY	|	VARCHAR(256) 	|	City Name with Province and Country
POC_POSTL_CODE	|	VARCHAR(20) 	|	Postal Code Of POC
POC_PRMT_NBR	|	VARCHAR(15) 	|	POC Permit Number provided by government agencies
POC_LATTD	|	NUMBER(18,15)	|	POC latitude defined in Salesforce
POC_LNGTD	|	NUMBER(18,15)	|	POC longitude defined in Salesforce
POC_CALLD_ON_CTGY_SK	|	NUMBER(38,0)	|	This Columns defines how the POC will be called by Reps (Field Sales, Inside Sales or Not Called On ) in Core(SALES) hierarchy as defined in Salesforce
POC_SUB_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key for Sub Segment defined in salesforce
POC_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key for Segment defined in salesforce
POC_DIST_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key for Distribution Segment defined in salesforce. Its not being used now.
SLS_SUB_CH_SK	|	NUMBER(38,0)	|	Surrogate Key for Sub Channel (i.e. Grocery, Licensee, LCBO regular, LCBO Agency etc.)
SLS_ORG_SK	|	NUMBER(38,0)	|	Surrogate Key for Sales Organization Hierarchy to which POC is assigned to in MDM.
SLS_KEY_ACCT_ORG_SK	|	NUMBER(38,0)	|	Surrogate Key for Key Account Hierarchy to which POC is assigned to in MDM.
GEO_REGN_SK	|	NUMBER(38,0)	|	Surrogate Key for Geographical region to which POC is located.
START_DT	|	DATE	|	Effective start date
END_DT	|	DATE	|	Effective end date
DEL_IND	|	NUMBER(38,0)	|	Deleted indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update
POC_CITY_NAME	|	VARCHAR(256) 	|	City Name
POC_MBC_CALLD_ON_CTGY_SK	|	NUMBER(38,0)	|	This Columns defines how the POC will be called by Reps (Field Sales , Inside Sales or Not Called On ) in MBC hierarchy as defined in Salesforce
POC_CRFT_CALLD_ON_CTGY_SK	|	NUMBER(38,0)	|	This Columns defines how the POC will be called by Reps (Field Sales , Inside Sales or Not Called On ) in Craft hierarchy as defined in Salesforce


## Physical Location
Table Name : [CSDI_T.REF_PHF_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PHF_LOC)<br/>
View Name : [CSDI.REF_PHF_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PHF_LOC)<br/>
EDW View Name :[EDW.CSDI_REF_PHF_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PHF_LOC)<br/>

Physical locations are comprised of customer locations, POCs, distributors, plants and any other location that AB InBev owns, manages or does business with. Each location is expected to be a distinct physical address. In SAP the Ship To and Sold To Customers are defined separately, but if they have the same address, there will be one and only one physical location. The physical location remains the same as ownership changes over time. This means that multiple customers may be associated to the same location. POCs that are not financial customers make up a large percentage of physical locations. A single location is defined for each POC. External cross references are defined against the physical location. This allows the same cross reference list to be used for POCs and customers and also allows Sold To and Ship To customers to use the same cross reference value.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
PHF_LOC_SK	|	NUMBER(38,0)	|	Surrogate Key on Physical Location
PHF_LOC_CODE	|	VARCHAR(10)	|	Physical Location Code
PHF_LOC_NAME	|	VARCHAR(256)	|	Physical Location Name
CUST_SLS_GRP_SK	|	NUMBER(38,0)	|	Customer Sales Group Surrogate Key
POC_SK	|	NUMBER(38,0)	|	Point of Connection Surrogate Key
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Plant
Table Name : [CSDI_T.REF_PLNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PLNT)<br/>
View Name : [CSDI.REF_PLNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PLNT)<br/>
EDW View Name :[EDW.CSDI_REF_PLNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PLNT)<br/>

This category holds all plants as managed in SAP. The list includes real production plants as well as warehouses that are defined as plants in SAP.


Field Name	|	Data Type	|	Comment
-	|	-	|	-
PLNT_SK	|	NUMBER(38,0)	|	Surrogate Key on  Plant
PLNT_CODE	|	VARCHAR(5)	|	Plant Code
PLNT_NAME	|	VARCHAR(256)	|	Plant Name
PHF_LOC_SK	|	NUMBER(38,0)	|	Physical Location Surrogate Key
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update by ETL



## External Location Mapping

Table Name : [CSDI_T.MAP_EXT_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_EXT_LOC)<br/>
View Name : [CSDI.MAP_EXT_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_EXT_LOC)<br/>
EDW View Name :[EDW.CSDI_MAP_EXT_LOC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_EXT_LOC)<br/>

Mapping table between External Location and Physical Location. This is defined for each sales sources in MDM. Each Sales source have a xref owner. Based on Xref Owners, We can identify external codes will be mapped to which Physical Location

Field Name	|	Data Type	|	Comment
-	|	-	|	-
XREF_OWNR_SK	|	NUMBER(38,0)	|	Surrogate Key on Cross Reference Owner
EXT_LOC_XREF_CODE	|	VARCHAR(50)	|	Location Cross Reference Code
PHF_LOC_SLS_TYP_ID	|	VARCHAR(2)	|	Physical Location Sales Type ID
PHF_LOC_SK	|	NUMBER(38,0)	|	Surrogate Key on Physical Location
START_DT	|	DATE	|	External Location to Physical Location Association Start Date
END_DT	|	DATE	|	External Location to Physical Location Association End Date
MAP_IND	|	NUMBER(38,0)	|	Mapping Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update/load


## Sales Organization 
Table Name : [CSDI_T.REF_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_SLS_ORG)<br/>
View Name : [CSDI.REF_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SLS_ORG)<br/>
EDW View Name :[EDW.CSDI_REF_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SLS_ORG)<br/>

Sales organizations are defined group POCs under territories, banners, routes or other business entities for analysis and reporting purposes. The organizations are self-referencing, representing a ragged hierarchy for reporting. Each node in the organization may be assigned a person that is responsible for the organization. Multiple structures are held in the same category and organizations may be parented by organizations within the same structure.

We have below sales Org Structures Defined
- [Sales](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10889/Sales-Hierarchy)
- [MBC](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10893/MBC-Hierarchy)
- [Craft](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10894/Craft-Hierarchy)
- [Telesales](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10896/Telesales-Hierarchy)
- [Key Account](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10891/Key-Account-Hierarchy)
- [Scan](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10898/Scan-Hierarchy)
- [SMR (Merchandiser)](https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10900/Merchandiser(SMR)-Hierarchy)

Field Name	|	Data Type	|	Comment
-	|	-	|	-
SLS_ORG_SK|NUMBER|Surrogate Key on Sales Organization
SLS_ORG_CODE|VARCHAR|Sales Organization Code
SLS_ORG_NAME|VARCHAR|Sales Organization Name
SLS_ORG_ACT_IND|NUMBER|Sales Organization Active Indicator
SLS_TERR_SK|NUMBER|Sales Territory Surrogate Key
TS_TERR_SK|NUMBER|Telesales Territory Surrogate Key
KEY_ACCT_BNR_SK|NUMBER|Key Account Banner Surrogate Key
DEL_IND|NUMBER|Deleted Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp
PRSN_RESP_SK|NUMBER|Sales Organization ""SALES"" Person Responsible Surrogate Key
SLS_ORG_TYP_CODE|VARCHAR|Type Of Sales Organization to represent there these Sales Organization is used like Sales , MBC Craft etc
CRFT_TERR_SK|NUMBER|Craft Territory Surrogate Key
MBC_TERR_SK|NUMBER|MBC Territory Surrogate Key
SCN_BNR_SK|NUMBER|SCAN Banner Surrogate Key
SMR_TERR_SK|NUMBER|SMR Territory Surrogate Key


## POC - Sales Organization Mapping

Table Name : [CSDI_T.MAP_POC_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/MAP_POC_SLS_ORG)<br/>
View Name : [CSDI.MAP_POC_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_POC_SLS_ORG)<br/>
EDW View Name :[EDW.CSDI_MAP_POC_SLS_ORG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_POC_SLS_ORG)<br/>


Mapping table between Point of Connection (POC) and Sales Organization. POCs are mapped to lowest level sales orgs in each type of Sales organization . like in "Sales" sales org POCs are mapped to Sales Territory.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
POC_SK	|	NUMBER(38,0)	|	Surrogate Key on Point of Connection (POC)
SLS_ORG_SK	|	NUMBER(38,0)	|	Surrogate Key on Sales Organization
SLS_ORG_TYP_CODE	|	VARCHAR(10)	|	Sales Organization Type Code
MAP_IND	|	NUMBER(38,0)	|	Mapping Indicator
START_DT	|	DATE	|	POC to Sales Organization Association Start Date
END_DT	|	DATE	|	POC to Sales Organization Association End Date
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update/load


 
## Country

Table Name : [CSDI_T.REF_CNTRY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CNTRY)<br/>
View Name : [CSDI.REF_CNTRY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CNTRY)<br/>
EDW View Name :[EDW.CSDI_REF_CNTRY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CNTRY)<br/>


This table contains all the Country defined in MDM.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CNTRY_SK	|	NUMBER(38,0)	|	Surrogate Key on Country
CNTRY_CODE	|	VARCHAR(4)	|	Country Code
CNTRY_NAME	|	VARCHAR(50)	|	Country Name
CNTRY_ABBR	|	VARCHAR(4)	|	Country Abbreviation
DEL_IND	|	NUMBER(38,0)	|	Deleted indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Customer
Table Name : [CSDI_T.REF_CUST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CUST)<br/>
View Name : [CSDI.REF_CUST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CUST)<br/>
EDW View Name :[EDW.CSDI_REF_CUST](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CUST)<br/>

This table holds all customers as managed in SAP.  All customer types (account groups) are included. 

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CUST_SK	|	NUMBER(38,0)	|	Surrogate Key on Customer
CUST_CODE	|	VARCHAR(10)	|	Customer Code (Customer Number)
CUST_NAME	|	VARCHAR(256)	|	Customer Name
CUST_ACCT_GRP_SK	|	NUMBER(38,0)	|	Customer Account Group Surrogate Key
PHF_LOC_SK	|	NUMBER(38,0)	|	Physical Location Surrogate Key
CUST_ADDR	|	VARCHAR(35) 	|	Customer Street Address (House Number and Street)
CUST_CITY	|	VARCHAR(35) 	|	Customer City
CUST_POSTL_CODE	|	VARCHAR(10) 	|	Customer Postal Code
CUST_REGN	|	VARCHAR(3) 	|	Customer Region
CUST_CNTRY	|	VARCHAR(2) 	|	Customer Country
CUST_PRMT_NBR	|	VARCHAR(80) 	|	Customer Permit Number
CUST_STORE_NBR	|	VARCHAR(80) 	|	Customer Store Number
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Customer Account Group

Table Name : [CSDI_T.REF_CUST_ACCT_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CUST_ACCT_GRP)<br/>
View Name : [CSDI.REF_CUST_ACCT_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CUST_ACCT_GRP)<br/>
EDW View Name :[EDW.CSDI_REF_CUST_ACCT_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CUST_ACCT_GRP)<br/>


Customer account group is a short and static list of type or classification for customers in SAP. Typical customer types are Sold To, Ship To, Bill To or Payer.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
CUST_ACCT_GRP_SK	|	NUMBER(38,0)	|	Surrogate Key on Customer Account Group
CUST_ACCT_GRP_CODE	|	VARCHAR(4)	|	Customer Account Group Code
CUST_ACCT_GRP_NAME	|	VARCHAR(256)	|	Customer Account Group Name
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## Customer Sales Group

Table Name : [CSDI_T.REF_CUST_SLS_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_CUST_SLS_GRP)<br/>
View Name : [CSDI.REF_CUST_SLS_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_CUST_SLS_GRP)<br/>
EDW View Name :[EDW.CSDI_REF_CUST_SLS_GRP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_CUST_SLS_GRP)<br/>
 

Customer sales groupings are defined by the commercial team to group customers together at a high level primarily to define or extend products within a geographic region. The geography may be similar to province as used in Canada or a grouping of states or provinces within a country. In some cases it may be country or a grouping of countries, but the intention is to define the highest level of customer grouping that will allow localizations to be defined with minimal maintenance. In some cases a grouping beyond geography may be required. And example would be duty free or export customers that may be treated differently from others.


Field Name	|	Data Type	|	Comment
-	|	-	|	-
CUST_SLS_GRP_SK	|	NUMBER(38,0)	|	Surrogate Key on Customer Sales Grouping
CUST_SLS_GRP_CODE	|	VARCHAR(4)	|	Customer Sales Grouping Code
CUST_SLS_GRP_NAME	|	VARCHAR(50)	|	Customer Sales Grouping Name
CUST_SLS_GRP_ABBR	|	VARCHAR(3)	|	Customer Sales Grouping Abbreviation
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update

 
## Geographical Region

Table Name : [CSDI_T.REF_GEO_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_GEO_REGN)<br/>
View Name : [CSDI.REF_GEO_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_GEO_REGN)<br/>
EDW View Name :[EDW.CSDI_REF_GEO_REGN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_GEO_REGN)<br/>


Geographical Region contain various type of Geographical regions like Country, Provinces and territories. It also provided the mapping of sales orgs to the geographical regions.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
GEO_REGN_SK	|	NUMBER(38,0)	|	Surrogate Key on Geographical Region
GEO_REGN_CODE	|	VARCHAR(6)	|	Geographical Region Code
GEO_REGN_NAME	|	VARCHAR(50)	|	Geographical Region Name
GEO_REGN_ABBR	|	VARCHAR(4)	|	Geographical Region Abbreviation
CNTRY_SK	|	NUMBER(38,0)	|	Surrogate Key for Country
SLS_ORG_SK	|	NUMBER(38,0)	|	Surrogate Key for Sales Organization at the Provincial Level
DEL_IND	|	NUMBER(38,0)	|	Deleted indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update


## POC Called on Category

Table Name : [CSDI_T.REF_POC_CALLD_ON_CTGY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_POC_CALLD_ON_CTGY)<br/>
View Name : [CSDI.REF_POC_CALLD_ON_CTGY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_POC_CALLD_ON_CTGY)<br/>
EDW View Name :[EDW.CSDI_REF_POC_CALLD_ON_CTGY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_POC_CALLD_ON_CTGY)<br/>

Called on Category specifies to which type of POC call is done. It can be Field Sales , inside sales or Tele-Sales. This is managed in Salesforce by Sales ops team.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
POC_CALLD_ON_CTGY_SK	|	NUMBER(38,0)	|	Surrogate Key on POC Called On Category
POC_CALLD_ON_CTGY_CODE	|	VARCHAR(255)	|	POC Called On Category Code
POC_CALLD_ON_CTGY_NAME	|	VARCHAR(255)	|	POC Called On Category Name
POC_CALLD_ON_CTGY_NAME_FR	|	VARCHAR(255)	|	POC Called On Category French Name
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update by ETL


## POC Segment

Table Name : [CSDI_T.REF_POC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_POC_SEG)<br/>
View Name : [CSDI.REF_POC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_POC_SEG)<br/>
EDW View Name :[EDW.CSDI_REF_POC_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_POC_SEG)<br/>

POC Segment stores all the POC segments to which POC can be classified into. This is managed in Salesforce by Sales ops team.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
POC_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key on POC Segment
POC_SEG_CODE	|	VARCHAR(255)	|	POC Segment Code
POC_SEG_NAME	|	VARCHAR(255)	|	POC Segment Name
POC_SEG_NAME_FR	|	VARCHAR(255)	|	POC Segment French Name
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update by ETL


## POC Sub Segment

Table Name : [CSDI_T.REF_POC_SUB_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_POC_SUB_SEG)<br/>
View Name : [CSDI.REF_POC_SUB_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_POC_SUB_SEG)<br/>
EDW View Name :[EDW.CSDI_REF_POC_SUB_SEG](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_POC_SUB_SEG)<br/>

POC SUB Segment stores all the POC sub segments to which POC can be classified into. This is managed in Salesforce by Sales ops team.

Field Name	|	Data Type	|	Comment
-	|	-	|	-
POC_SUB_SEG_SK	|	NUMBER(38,0)	|	Surrogate Key on POC Sub Segment
POC_SUB_SEG_CODE	|	VARCHAR(255)	|	POC Sub Segment Code
POC_SUB_SEG_NAME	|	VARCHAR(255)	|	POC Sub Segment Name
POC_SUB_SEG_NAME_FR	|	VARCHAR(255)	|	POC Sub Segment French Name
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update by ETL


 
## Person
Table Name &nbsp;&nbsp;&nbsp;: CSDI_T.REF_PRSN
View Name &nbsp;&nbsp;&nbsp;&nbsp;: CSDI.REF_PRSN
EDW View Name : EDW.CSDI_REF_PRSN

Table Name : [CSDI_T.REF_PRSN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/table/REF_PRSN)<br/>
View Name : [CSDI.REF_PRSN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PRSN)<br/>
EDW View Name :[EDW.CSDI_REF_PRSN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_PRSN)<br/>

Person contains a list of all employees and contractors that may be referred to or have access to Labatt systems. The list is partially authored and partially loaded from the HR systems.


Field Name	|	Data Type	|	Comment
-	|	-	|	-
PRSN_SK	|	NUMBER(38,0)	|	Surrogate Key on Person
PRSN_ID	|	VARCHAR(6)	|	Person ID
PRSN_FNM	|	VARCHAR(50)	|	Person First Name
PRSN_LNM	|	VARCHAR(50)	|	Person Last Name
PRSN_MNM	|	VARCHAR(50)	|	Person Middle Name
PRSN_DISP_NAME	|	VARCHAR(50)	|	Person Display Name
DEL_IND	|	NUMBER(38,0)	|	Deleted Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ(9)	|	Date and time of last update
EMP_NO	|	VARCHAR(8)	|	Employee Number
EMP_GLBL_ID	|	VARCHAR(8)	|	Employee Global ID
AD_UPN	|	VARCHAR(100)	|	User Principal Name
AD_SAM_ACCT_NAME	|	VARCHAR(100)	|	SAM Account Name
PRSN_EMAIL	|	VARCHAR(100)	|	E-Mail Address
PRSN_ACTV_IND	|	NUMBER(38,0)	|	Active Indicator
