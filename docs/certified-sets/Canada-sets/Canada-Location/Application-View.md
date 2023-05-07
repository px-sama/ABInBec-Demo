---
title: Application View
slug: /Canada-Location/Application-View
tags:
    - Location
    - Geography
    - Application View
---
# Application View

## Canada Sales Geography View

This View is used for Exposing all the Attributes related to POC and is used in Canada Sales Reporting.
We also have some rows at PRovince Level to support PPS ( Published Provincial Sales) reporting.

View Name : [CSDI.APP_CS_REF_GEOGRAPHY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_REF_GEOGRAPHY)<br/>
EDW View Name :[EDW.CSDI_APP_CS_REF_GEOGRAPHY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_REF_GEOGRAPHY)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
POC_SK | NUMBER | Surrogate key for POC (Point Of Connection) location 
POC_CODE | TEXT | Location code generated in MDM for each POC (Point Of Connection) location 
POC_NAME | TEXT | Location Name as per MDM for each POC (Point Of Connection) location 
POC_REPORTING_NAME | TEXT | Location Name Used in report which is combination of POC code and POC name  (POC_CODE-POC_NAME) 
POC_ADDR_1 | TEXT | Address Line 1 of the POC (Point Of Connection) location updated in MDM 
POC_ADDR_2 | TEXT | Address Line 2 of the POC (Point Of Connection) location updated in MDM 
POC_CITY_MCPLTY | TEXT | Full City Name (CITY, PROVINCE, COUNTRY)of the POC (Point Of Connection) location updated in MDM 
CALC_CITY | TEXT | City Name extracted from Full City Name of the POC (Point Of Connection) location updated in MDM 
CALC_PROVINCE | TEXT | Province code extracted from Full City Name of the POC (Point Of Connection) location updated in MDM 
CALC_COUNTRY | TEXT | Country code extracted from Full City Name of the POC (Point Of Connection) location updated in MDM 
POC_POSTL_CODE | TEXT | Postal Code of the POC (Point Of Connection) location updated in MDM 
POC_PRMT_NBR | TEXT | Permit number provided by Government agency of the POC (Point Of Connection) location updated in MDM 
SLS_SUB_CH_SK | NUMBER | Surrogate key for outlet Sub-Channel(Grocery/LCBO Agency/Brewer distributor / Bars etc..). This reflecting the Sub-channels through which product is sold.
SLS_CH_CODE | TEXT | Channel Code for outlet Channel defined in MDM. This reflecting the channels through which product is sold.
SLS_CH_NAME | TEXT | Channel Name for outlet Channel(Grocery/LCBO /Brewer distributor / Licensee etc..) defined in MDM. This reflecting the channels through which product is sold.
SLS_SUB_CH_CODE | TEXT | Sub Channel Code for outlet Channel defined in MDM. This reflecting the sub-channels through which product is sold.
SLS_SUB_CH_NAME | TEXT | Sub-Channel Name for outlet Channel(Grocery/LCBO Agency/LCBO Regular /Brewer distributor / BArs etc..) defined in MDM. This reflecting the channels through which product is sold.
PREM_CODE | TEXT | Code for Outlet Premise (OfF- Retail stores, ON - Stores that serve the beer)
PREM_NAME | TEXT | Name for Outlet Premise (OfF- Retail stores, ON - Stores that serve the beer)
POC_CALLD_ON_CTGY_CODE | TEXT | Called on category code used by sales ops team to identify what kind of reps is targeting those (Field Sales POCs,Inside Sales POCs etc)
POC_SEG_SK | NUMBER | Surrogate Key for Outlet Segmentation managed by Sales ops team for Variable Compensation targeting
POC_SEG_NAME | TEXT | Name for Outlet Segmentation managed by Sales ops team for Variable Compensation targeting
POC_SUB_SEG_SK | NUMBER | Surrogate Key for Outlet Sub Segmentation managed by Sales ops team for Variable Compensation targeting
POC_SUB_SEG_NAME | TEXT | Name for Outlet Sub Segmentation managed by Sales ops team for Variable Compensation targeting
SLS_TERR_CODE | TEXT | Territory Code to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_TERR_NAME | TEXT | Territory Name to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_DST_CODE | TEXT | District  Code to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_DST_NAME | TEXT | District  Name to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_AREA_CODE | TEXT | Area Code to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_AREA_NAME | TEXT | Area NAme to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_PROV_CODE | TEXT | Province Code to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_PROV_NAME | TEXT | Province Name to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_REGN_CODE | TEXT | Region Code to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_REGN_NAME | TEXT | Region Name to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_TERR_PRSN_NAME | TEXT | Name of the Sales Rep responsible for the territory to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_DST_PRSN_NAME | TEXT | Name of the Sales Rep responsible for the District to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_TERR_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for the territory to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
SLS_DST_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for the territory to which the Outlet is assigned to under ""Sales"" Sales Organization Hierarchy in MDM
KEY_ACCT_BNR_CODE | TEXT | Key Account Banner Code to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_BNR_NAME | TEXT | Key Account Banner Name to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_CODE | TEXT | Key Account Code to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_NAME | TEXT | Key Account Name to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_MGR_CODE | TEXT | Key Account Manager Code to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_MGR_NAME | TEXT | Key Account Manager Name to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_ORG_TYP_CODE | TEXT | Key Account Organization Type code to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
KEY_ACCT_ORG_TYP_NAME | TEXT | Key Account Organization Name code to which the Outlet is assigned to under ""KA"" Sales Organization Hierarchy in MDM
MBC_TERR_CODE | TEXT | Mikes Beverage Company Territory code to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_TERR_NAME | TEXT | Mikes Beverage Company Territory Name to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_DIST_CODE | TEXT | Mikes Beverage Company District code to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_DIST_NAME | TEXT | Mikes Beverage Company District Name to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_AREA_CODE | TEXT | Mikes Beverage Company Area code to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_AREA_NAME | TEXT | Mikes Beverage Company Area Name to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_PROV_CODE | TEXT | Mikes Beverage Company Province code to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_PROV_NAME | TEXT | Mikes Beverage Company Province Name to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_REGN_CODE | TEXT | Mikes Beverage Company Region code to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_REGN_NAME | TEXT | Mikes Beverage Company Region Name to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_TERR_PRSN_NAME | TEXT | Name of the Sales Rep responsible for Mikes Beverage Company Territory to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_DST_PRSN_NAME | TEXT | Name of the Sales Rep responsible for Mikes Beverage Company District to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_TERR_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for Mikes Beverage Company Territory to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
MBC_DST_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for Mikes Beverage Company District to which the Outlet is assigned to under ""MBC"" Sales Organization Hierarchy in MDM
CRFT_TERR_CODE | TEXT | Craft Territory code to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_TERR_NAME | TEXT | Craft Territory Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_DST_CODE | TEXT | Craft District code to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_DST_NAME | TEXT | Craft District Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_AREA_CODE | TEXT | Craft Area code to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_AREA_NAME | TEXT | Craft Area Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_PROV_CODE | TEXT | Craft Province code to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_PROV_NAME | TEXT | Craft Province Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_REGN_CODE | TEXT | Craft Region code to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_REGN_NAME | TEXT | Craft Region Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_TERR_PRSN_NAME | TEXT | Name of the Sales Rep responsible for Craft territory Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_DST_PRSN_NAME | TEXT | Name of the Sales Rep responsible for Craft District Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_TERR_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for Craft territory Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
CRFT_DST_PRSN_ID | TEXT | Person Identifier of the Sales Rep responsible for Craft District Name to which the Outlet is assigned to under ""CRAFT"" Sales Organization Hierarchy in MDM
TS_TERR_CODE | TEXT | Telesales Territory code to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_TERR_NAME | TEXT | Telesales Territory Name to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_AREA_CODE | TEXT | Telesales Area code to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_AREA_NAME | TEXT | Telesales Area Name to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_PROV_CODE | TEXT | Telesales Province code to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_PROV_NAME | TEXT | Telesales Province Name to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_REGN_CODE | TEXT | Telesales Region code to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
TS_REGN_NAME | TEXT | Telesales Region Name to which the Outlet is assigned to under ""TELESLES"" Sales Organization Hierarchy in MDM
SCN_BNR_CODE | TEXT | Scan Banner code to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into sales from Grocery sources
SCN_BNR_NAME | TEXT | Scan Banner Name to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into sales from Grocery sources
SCN_CHN_CODE | TEXT | Scan Channel code to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into sales from Grocery sources
SCN_CHN_NAME | TEXT | Scan Channel Name to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into sales from Grocery sources
SCN_TYP_CODE | TEXT | Scan Type code to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SCN_TYP_NAME | TEXT | Scan Type Name to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SCN_OWNR_CODE | TEXT | Scan Owner Code to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SCN_OWNR_NAME | TEXT | Scan Owner Name to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SCN_ORG_TYP_CODE | TEXT | Scan Organization type code to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SCN_ORG_TYP_NAME | TEXT | Scan Organization type name to which the Outlet is assigned to under ""SCAN"" Sales Organization Hierarchy in MDM. SCAN hierarchy is used for have more detailed level into  sales from Grocery sources
SMR_TERR_CODE | TEXT | SMR Territory code to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_TERR_NAME | TEXT | SMR Territory Name to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_DIST_CODE | TEXT | SMR District code to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_DIST_NAME | TEXT | SMR District Name to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_AREA_CODE | TEXT | SMR Area code to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_AREA_NAME | TEXT | SMR Area Name to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_PROV_CODE | TEXT | SMR Province code to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_PROV_NAME | TEXT | SMR Province Name to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_REGN_CODE | TEXT | SMR Region code to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_REGN_NAME | TEXT | SMR Region Name to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_TERR_PRSN_NAME | TEXT | Name of the Sales Rep responsible for SMR Territory to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_DIST_PRSN_NAME | TEXT | Name of the Sales Rep responsible for SMR District to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_TERR_PRSN_ID | TEXT | Person Identification of the Sales Rep responsible for SMR Territory to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
SMR_DIST_PRSN_ID | TEXT | Person Identification of the Sales Rep responsible for SMR District to which the Outlet is assigned to under ""SMR"" Sales Organization Hierarchy in MDM. SMR hierarchy is used to fine the hierarchy for the merchandisers
POC_LATTD | NUMBER | Latitude of the Outlet updated in Salesforce application
POC_LNGTD | NUMBER | Longitude of the Outlet updated in Salesforce application
SLS_REP_CLSFCN | TEXT | Classification of Sales Rep based of Sales territory used for Variable compensation 
CRFT_REP_CLSFCN | TEXT | Classification of Craft Rep based of Craft territory used for Variable compensation 
MBC_REP_CLSFCN | TEXT | Classification of MBC Rep based of MBC territory used for Variable compensation 
HYB_TERR_NAME | TEXT | Territory Name of Hybrid Hierarchy created to use Sales hierarchy if the MBC hierarchy is assigned to non Called on territory
HYB_DIST_NAME | TEXT | District Name of Hybrid Hierarchy created to use Sales hierarchy if the MBC hierarchy is assigned to non Called on territory
HYB_AREA_NAME | TEXT | Area Name of Hybrid Hierarchy created to use Sales hierarchy if the MBC hierarchy is assigned to non Called on territory
HYB_PROV_NAME | TEXT | Province Name of Hybrid Hierarchy created to use Sales hierarchy if the MBC hierarchy is assigned to non Called on territory
HYB_REGN_NAME | TEXT | Region Name of Hybrid Hierarchy created to use Sales hierarchy if the MBC hierarchy is assigned to non Called on territory
FOG_NAME | TEXT | Financial Ownership group defined by Revenue Management team to group POCs for financial analysis
SF_CUST_ZOOLANDER_SEG | TEXT | Sales Force Customer Segment for  Zoolander Clusters

## Qlik Sales POC View

This View is used for Exposing all the Attributes related to POC and is used in Canada Sales Qlik Reporting.


EDW View Name :[EDW.CSDI_APP_QS_SI_POC](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_POC)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
POC_KEY|VARCHAR|Point Of Connection Key
POC_CODE|VARCHAR(10)|Point Of Connection Code
POC_NAME|VARCHAR(256)|Point Of Connection Name
POC_ADDR_1|VARCHAR(256)|Point Of Connection Street Address 1
POC_ADDR_2|VARCHAR(256)|Point Of Connection Street Address 2
POC_POSTL_CODE|VARCHAR(20)|Point Of Connection Postal Code
POC_CITY_MCPLTY|VARCHAR(256)|Point Of Connection City Municipality
POC_CITY_NAME|VARCHAR(256)|Point Of Connection City Name
POC_PRMT_NBR|VARCHAR(15)|Point Of Connection Permit Number
POC_LATTD|NUMBER(18,15)|Point Of Connection Latitude
POC_LNGTD|NUMBER(18,15)|Point Of Connection Longitude
POC_SLS_SUB_CH_CODE|VARCHAR(2)|Point Of Connection Sales Sub Channel Code
POC_SLS_SUB_CH_NAME|VARCHAR(50)|Point Of Connection Sales Sub Channel Name
POC_SLS_SUB_CH_NAME_FR|VARCHAR(50)|Point Of Connection Sales Sub Channel French Name
POC_SLS_SUB_CH_SHT_NAME|VARCHAR(50)|Point Of Connection Sales Sub Channel Short Name
POC_SLS_SUB_CH_SHT_NAME_FR|VARCHAR(50)|Point Of Connection Sales Sub Channel Short French Name
POC_SLS_CH_CODE|VARCHAR(2)|Point Of Connection Sales Channel Code
POC_SLS_CH_NAME|VARCHAR(50)|Point Of Connection Sales Channel Name
POC_SLS_CH_NAME_FR|VARCHAR(50)|Point Of Connection Sales Channel French Name
POC_SLS_CH_SHT_NAME|VARCHAR(50)|Point Of Connection Sales Channel Short Name
POC_SLS_CH_SHT_NAME_FR|VARCHAR(50)|Point Of Connection Sales Channel Short French Name
POC_PREM_CODE|VARCHAR(2)|Point Of Connection Premise Code
POC_PREM_NAME|VARCHAR(13)|Point Of Connection Premise Name
POC_PREM_NAME_FR|VARCHAR(13)|Point Of Connection Premise French Name
POC_SUB_SEG_CODE|VARCHAR(255)|Point Of Connection Sub Segment Code
POC_SUB_SEG_NAME|VARCHAR(255)|Point Of Connection Sub Segment Name
POC_SUB_SEG_NAME_FR|VARCHAR(255)|Point Of Connection Sub Segment French Name
POC_SEG_CODE|VARCHAR(255)|Point Of Connection Segment Code
POC_SEG_NAME|VARCHAR(255)|Point Of Connection Segment Name
POC_SEG_NAME_FR|VARCHAR(255)|Point Of Connection Segment French Name
POC_DIST_SEG_CODE|VARCHAR(255)|Point Of Connection Distribution Segment Code
POC_DIST_SEG_NAME|VARCHAR(255)|Point Of Connection Distribution Segment Name
POC_DIST_SEG_NAME_FR|VARCHAR(255)|Point Of Connection Distribution Segment French Name
POC_CALLD_ON_CTGY_CODE|VARCHAR(255)|Point Of Connection Called On Category Code
POC_CALLD_ON_CTGY_NAME|VARCHAR(255)|Point Of Connection Called On Category Name
POC_CALLD_ON_CTGY_NAME_FR|VARCHAR(255)|Point Of Connection Called On Category French Name
GEO_REGN_CODE|VARCHAR(6)|Geographical Region Code
GEO_REGN_NAME|VARCHAR(50)|Geographical Region Name
GEO_REGN_ABBR|VARCHAR(4)|Geographical Region Abbreviation
CNTRY_CODE|VARCHAR(4)|Country Code
CNTRY_NAME|VARCHAR(50)|Country Name
CNTRY_ABBR|VARCHAR(4)|Country Abbreviation
SLS_ORG_CODE|VARCHAR(6)|Sales Organization Name
SLS_ORG_NAME|VARCHAR(50)|Sales Organization Code
SLS_ORG_TYP_CODE|VARCHAR(10)|Sales Organization Type Code
SLS_TERR_CODE|VARCHAR(10)|Sales Territory Code
SLS_TERR_NAME|VARCHAR(50)|Sales Territory Name
SLS_DST_CODE|VARCHAR(10)|Sales District Code
SLS_DST_NAME|VARCHAR(50)|Sales District Name
SLS_AREA_CODE|VARCHAR(10)|Sales Area Code
SLS_AREA_NAME|VARCHAR(50)|Sales Area Name
SLS_PROV_CODE|VARCHAR(10)|Sales Province Code
SLS_PROV_NAME|VARCHAR(50)|Sales Province Name
SLS_REGN_CODE|VARCHAR(10)|Sales Region Code
SLS_REGN_NAME|VARCHAR(50)|Sales Region Name
KEY_ACCT_BNR_CODE|VARCHAR(10)|Key Account Banner Code
KEY_ACCT_BNR_NAME|VARCHAR(50)|Key Account Banner Name
KEY_ACCT_CODE|VARCHAR(10)|Key Account Code
KEY_ACCT_NAME|VARCHAR(50)|Key Account Name
KEY_ACCT_MGR_CODE|VARCHAR(10)|Key Account Manager Code
KEY_ACCT_MGR_NAME|VARCHAR(50)|Key Account Manager Name
KEY_ACCT_ORG_TYP_CODE|VARCHAR(10)|Key Account Organization Type Code
KEY_ACCT_ORG_TYP_NAME|VARCHAR(50)|Key Account Organization Type Name
TS_TERR_CODE|VARCHAR(10)|Telesales Territory Code
TS_TERR_NAME|VARCHAR(50)|Telesales Territory Name
TS_AREA_CODE|VARCHAR(10)|Telesales Area Code
TS_AREA_NAME|VARCHAR(50)|Telesales Area Name
TS_PROV_CODE|VARCHAR(10)|Telesales Province Code
TS_PROV_NAME|VARCHAR(50)|Telesales Province Name
TS_REGN_CODE|VARCHAR(10)|Telesales Region Code
TS_REGN_NAME|VARCHAR(50)|Telesales Region Name
CRFT_TERR_CODE|VARCHAR(10)|MBC Territory Code
CRFT_TERR_NAME|VARCHAR(50)|MBC Territory Name
CRFT_DST_CODE|VARCHAR(10)|Craft District Code
CRFT_DST_NAME|VARCHAR(50)|Craft District Name
CRFT_AREA_CODE|VARCHAR(10)|Craft Area Code
CRFT_AREA_NAME|VARCHAR(50)|Craft Area Name
CRFT_PROV_CODE|VARCHAR(10)|Craft Province Code
CRFT_PROV_NAME|VARCHAR(50)|Craft Province Name
CRFT_REGN_CODE|VARCHAR(10)|Craft Region Code
CRFT_REGN_NAME|VARCHAR(50)|Craft Region Name
MBC_TERR_CODE|VARCHAR(10)|MBC Territory Code
MBC_TERR_NAME|VARCHAR(50)|MBC Territory Name
MBC_DST_CODE|VARCHAR(10)|MBC District Code
MBC_DST_NAME|VARCHAR(50)|MBC District Name
MBC_AREA_CODE|VARCHAR(10)|MBC Area Code
MBC_AREA_NAME|VARCHAR(50)|MBC Area Name
MBC_PROV_CODE|VARCHAR(10)|MBC Province Code
MBC_PROV_NAME|VARCHAR(50)|MBC Province Name
MBC_REGN_CODE|VARCHAR(10)|MBC Region Code
MBC_REGN_NAME|VARCHAR(50)|MBC Region Name
