---
title: Product Application Views
slug: /Canada-Product/Product-Application-Views
tags:
    - Product
    - Application Views
    - Canada Masterdata
---

# **Product Application Views**

The Application views are created on existing product tables /Views to give all the combined product attributes.



## **Canada Sales Product View** :

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_CS_REF_PRODUCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_CS_REF_PRODUCT)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_CS_REF_PRODUCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_CS_REF_PRODUCT)<br/>

This is generic view created for Canada sales model and can be used by any application to get all the product attribute at bi Item level.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK|NUMBER|Surrogate/ generated unique key for This view which is used to connect will all the Fact views
|BI_ITEM_NAME|VARCHAR(256)|Name of Item defined in MDM
|CMRCL_PROD_KEY|VARCHAR(30)|Code for Commercial Product Created in MDM
|ANAL_ITEM_ID|VARCHAR(14)|Code for Brand Analytical Product Created in MDM
|MATL_NBR|VARCHAR(18)|SAP Material Number for the Product
|MATL_NAME|VARCHAR(40)|SAP Material Name for the Product
|BRD_CODE|VARCHAR(10)|Brand code for the Product generated in MDM
|BRD_NAME|VARCHAR(64)|Brand Name for the Product defined in MDM
|BRD_FMLY_CODE|VARCHAR(10)|Brand Family Code for the Product generated in MDM
|BRD_FMLY_NAME|VARCHAR(64)|Brand Family Name for the Product defined in MDM
|SLBL_PROD_CODE|VARCHAR(16777216)|Sellable product Code Generated from Commercial Product Key
|SLBL_PROD_NAME|VARCHAR(768)|Sellable product Name Generated from Commercial Product Name
|SLBL_BRD_CODE|VARCHAR(6)|Brand Code of Sellable product
|SLBL_BRD_NAME|VARCHAR(50)|Brand Name of Sellable product
|MIX_IND_CODE|VARCHAR(1)|Mix Package Indicator Code - N - Non Mix   , M- Mix Pack 
|MIX_IND_NAME|VARCHAR(16)|Mix Package Indicator Name - Non Mix/Mix Pack
|GENR_PROD_CODE|VARCHAR(16777216)|Code for the Generic Product/SKU of Product generated in MDM
|GENR_PROD_NAME|VARCHAR(768)|Name the Generic Product/SKU of Product generated in MDM
|CNSMR_PROD_CODE|VARCHAR(16777216)|Code for the Consumer Generic Product of Product generated in MDM
|CNSMR_PROD_NAME|VARCHAR(768)|Code for the Consumer Generic Product of Product generated in MDM
|PKG_CODE|VARCHAR(6)|Package code for the Product generated in MDM
|PKG_NAME|VARCHAR(50)|Package Name for the Product generated in MDM
|CONT_TYP_CODE|VARCHAR(6)|Container Type code for the Product generated in MDM
|CONT_TYP_NAME|VARCHAR(50)|Container Type Name for the Product generated in MDM
|PKG_CLS_CODE|VARCHAR(4)|Package Class Code for the Product generated in MDM
|PKG_CLS_NAME|VARCHAR(50)|Package Class Name for the Product generated in MDM
|CONT_RTRN_CODE|VARCHAR(4)|Container Returnability indicator code for the Product generated in MDM
|CONT_RTRN_NAME|VARCHAR(50)|Container Returnability indicator name for the Product generated in MDM
|CONT_MATL_CODE|VARCHAR(4)|Container Material code for the Product generated in MDM
|CONT_MATL_NAME|VARCHAR(50)|Container Material Name for the Product generated in MDM
|BRWR_CODE|VARCHAR(10)|Brewer code for the Product generated in MDM
|BRWR_NAME|VARCHAR(50)|Brewer Name for the Product generated in MDM
|BRWR_PRNT_CODE|VARCHAR(10)|Parent Brewer code for the Product generated in MDM
|BRWR_PRNT_NAME|VARCHAR(50)|Parent Brewer Name for the Product generated in MDM
|BRWR_TYP_CODE|VARCHAR(1)|Brewer type code for the Product generated in MDM
|BRWR_TYP_NAME|VARCHAR(16)|Brewer type code for the Product generated in MDM
|LIQ_CLS_CODE|VARCHAR(6)|Liquid Class code for the Product generated in MDM
|LIQ_CLS_NAME|VARCHAR(64)|Liquid Class Name for the Product generated in MDM
|LIQ_SEG_CODE|VARCHAR(4)|Liquid Segment code for the Product generated in MDM
|LIQ_SEG_NAME|VARCHAR(50)|Liquid Segment Name for the Product generated in MDM
|CNTRY_PROD_IMP_CODE|VARCHAR(3)|Import/Domestic Indicator code based on Country of Production of product
|CNTRY_PROD_IMP_NAME|VARCHAR(14)|Import/Domestic Indicator Name based on Country of Production of product
|CNTRY_PROD_CODE|VARCHAR(4)|Code for Country of Production of product
|CNTRY_PROD_NAME|VARCHAR(50)|Name for Country of Production of product
|BRWR_TYPE_TOP_CODE|VARCHAR(6)|Brewer Type code at Top Level
|BRWR_TYPE_TOP_NAME|VARCHAR(8)|Brewer Type name at Top Level
|PRC_SEG_CODE|VARCHAR(10)|Code for Price Segment of product
|PRC_SEG_NAME|VARCHAR(50)|Name for Price Segment of product
|PRC_CLS_CODE|VARCHAR(10)|Code for Price Class of product
|PRC_CLS_NAME|VARCHAR(50)|Name for Price Class of product
|CMPNT_BRD_CODE|VARCHAR(16777216)|Component brand code of Mix Pack brand
|CMPNT_BRD_NAME|VARCHAR(768)|Component brand Name of Mix Pack brand
|CNSMR_CMPNT_BRD_CODE|VARCHAR(16777216)|Component brand code of Mix Pack brand at consumer generic product level
|CNSMR_CMPNT_BRD_NAME|VARCHAR(768)|Component brand name of Mix Pack brand at consumer generic product level
|BRD_TST_SEG_CODE|VARCHAR(4)|Code for Brand Taste Segment of Product
|BRD_TST_SEG_NAME|VARCHAR(50)|Name for Brand Taste Segment of Product
|CONT_SZ_CODE|VARCHAR(4)|Code for Container Size of Product
|CONT_SZ_NAME|VARCHAR(50)|Name for Container Size of Product
|CONT_SZ_HL|NUMBER|Container Size in Hectolitre of Product
|CONT_TYP_INR_CNT_SK|NUMBER|Surrogate Key for Inner Package container type
|CONT_TYP_INR_CNT_NAME|VARCHAR(64)|Inner package container type Name
|INR_PKG_CONT_CNT_CODE|VARCHAR(4)|Code for Inner Package Container count of Product
|INR_PKG_CONT_CNT_NBR|NUMBER|Inner Package Container count of Product
|RTD_REPORTING_FILTER|VARCHAR(9)|Indicator to filter RTD Products
|BEER_REPORTING_FILTER|VARCHAR(4)|Indicator to filter Beer Products
|BRWR_LAB_INCL_MSB_FILTER|VARCHAR(3)|Indicator to filter Labatt Product including Mill Street brewery
|BRWR_LAB_EXCL_MSB_FILTER|VARCHAR(3)|Indicator to filter Labatt Product excluding Mill Street brewery
|BRD_SUB_TST_SEG|VARCHAR(16777216)|Name for Brand Sub Taste Segment of Product
|LIQ_BASE_NAME|VARCHAR(16777216)|Name for Base Liquid of Product
|SUB_BRD_GROUP|VARCHAR(16777216)|Brand Groups to groups multiple sub brands in one like Bud light Core , Bud light seltzer 
|LIQ_STYLE|VARCHAR(16777216)|Liquid Style like IPA, STOUT etc for brand 
|LIQ_SUB_STYLE|VARCHAR(16777216)|Liquid Sub Style  for brand
|LIQ_FLAVOR|VARCHAR(16777216)|Flavour for Flavoured liquid 
|BRD_FOCUS_IND|VARCHAR(16777216)|Indicator to show if the Brand is in Focus by Sales Intelligence team 



## **Variable Compensation model Product View**

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_AAS_REF_PRODUCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_AAS_REF_PRODUCT)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_AAS_REF_PRODUCT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_REF_PRODUCT)<br/>

This is product view created to handle Variable compensation model. It has data at various level required by VC model.


| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|BI_ITEM_SK|NUMBER|Surrogate/ generated unique key for This view which is used to connect will all the Fact views
|BI_ITEM_NAME|VARCHAR(256)|Name of Item defined in MDM
|CMRCL_PROD_KEY|VARCHAR(30)|Code for Commercial Product Created in MDM
|ANAL_ITEM_ID|VARCHAR(14)|Code for Brand Analytical Product Created in MDM
|MATL_NBR|VARCHAR(18)|SAP Material Number for the Product
|MATL_NAME|VARCHAR(40)|SAP Material Name for the Product
|BRD_CODE|VARCHAR(10)|Brand code for the Product generated in MDM
|BRD_NAME|VARCHAR(64)|Brand Name for the Product defined in MDM
|BRD_FMLY_CODE|VARCHAR(10)|Brand Family Code for the Product generated in MDM
|BRD_FMLY_NAME|VARCHAR(64)|Brand Family Name for the Product defined in MDM
|SLBL_PROD_CODE|VARCHAR(16777216)|Sellable product Code Generated from Commercial Product Key
|SLBL_PROD_NAME|VARCHAR(768)|Sellable product Name Generated from Commercial Product Name
|SLBL_BRD_SK|NUMBER|Surrogate Key for Sellable product Brand
|SLBL_BRD_CODE|VARCHAR(6)|Brand Code of Sellable product
|SLBL_BRD_NAME|VARCHAR(50)|Brand Name of Sellable product
|MIX_IND_CODE|VARCHAR(1)|Mix Package Indicator Code - N - Non Mix   , M- Mix Pack 
|MIX_IND_NAME|VARCHAR(16)|Mix Package Indicator Name - Non Mix/Mix Pack
|GENR_PROD_CODE|VARCHAR(16777216)|Code for the Generic Product/SKU of Product generated in MDM
|GENR_PROD_NAME|VARCHAR(768)|Name the Generic Product/SKU of Product generated in MDM
|CNSMR_PROD_SK|NUMBER|Surrogate Key for Consumer Generic Product
|CNSMR_PROD_CODE|VARCHAR(16777216)|Code for the Consumer Generic Product of Product generated in MDM
|CNSMR_PROD_NAME|VARCHAR(768)|Code for the Consumer Generic Product of Product generated in MDM
|PKG_CODE|VARCHAR(6)|Package code for the Product generated in MDM
|PKG_NAME|VARCHAR(50)|Package Name for the Product generated in MDM
|CONT_TYP_CODE|VARCHAR(6)|Container Type code for the Product generated in MDM
|CONT_TYP_NAME|VARCHAR(50)|Container Type Name for the Product generated in MDM
|PKG_CLS_SK|NUMBER|Surrogate Key for Package Class
|PKG_CLS_CODE|VARCHAR(4)|Package Class Code for the Product generated in MDM
|PKG_CLS_NAME|VARCHAR(50)|Package Class Name for the Product generated in MDM
|CONT_RTRN_CODE|VARCHAR(4)|Container Returnability indicator code for the Product generated in MDM
|CONT_RTRN_NAME|VARCHAR(50)|Container Returnability indicator name for the Product generated in MDM
|CONT_MATL_CODE|VARCHAR(4)|Container Material code for the Product generated in MDM
|CONT_MATL_NAME|VARCHAR(50)|Container Material Name for the Product generated in MDM
|BRWR_CODE|VARCHAR(10)|Brewer code for the Product generated in MDM
|BRWR_NAME|VARCHAR(50)|Brewer Name for the Product generated in MDM
|BRWR_PRNT_CODE|VARCHAR(10)|Parent Brewer code for the Product generated in MDM
|BRWR_PRNT_NAME|VARCHAR(50)|Parent Brewer Name for the Product generated in MDM
|BRWR_TYP_CODE|VARCHAR(1)|Brewer type code for the Product generated in MDM
|BRWR_TYP_NAME|VARCHAR(16)|Brewer type code for the Product generated in MDM
|LIQ_CLS_CODE|VARCHAR(6)|Liquid Class code for the Product generated in MDM
|LIQ_CLS_NAME|VARCHAR(64)|Liquid Class Name for the Product generated in MDM
|LIQ_SEG_CODE|VARCHAR(4)|Liquid Segment code for the Product generated in MDM
|LIQ_SEG_NAME|VARCHAR(50)|Liquid Segment Name for the Product generated in MDM
|CNTRY_PROD_IMP_CODE|VARCHAR(3)|Import/Domestic Indicator code based on Country of Production of product
|CNTRY_PROD_IMP_NAME|VARCHAR(14)|Import/Domestic Indicator Name based on Country of Production of product
|CNTRY_PROD_CODE|VARCHAR(4)|Code for Country of Production of product
|CNTRY_PROD_NAME|VARCHAR(50)|Name for Country of Production of product
|BRWR_TYPE_TOP_CODE|VARCHAR(6)|Brewer Type code at Top Level
|BRWR_TYPE_TOP_NAME|VARCHAR(8)|Brewer Type name at Top Level
|PRC_SEG_CODE|VARCHAR(10)|Code for Price Segment of product
|PRC_SEG_NAME|VARCHAR(50)|Name for Price Segment of product
|PRC_CLS_CODE|VARCHAR(10)|Code for Price Class of product
|PRC_CLS_NAME|VARCHAR(50)|Name for Price Class of product
|CMPNT_BRD_CODE|VARCHAR(16777216)|Component brand code of Mix Pack brand
|CMPNT_BRD_NAME|VARCHAR(768)|Component brand Name of Mix Pack brand
|CNSMR_CMPNT_BRD_CODE|VARCHAR(16777216)|Component brand code of Mix Pack brand at consumer generic product level
|CNSMR_CMPNT_BRD_NAME|VARCHAR(768)|Component brand name of Mix Pack brand at consumer generic product level
|BRD_TST_SEG_CODE|VARCHAR(4)|Code for Brand Taste Segment of Product
|BRD_TST_SEG_NAME|VARCHAR(50)|Name for Brand Taste Segment of Product
|CONT_SZ_CODE|VARCHAR(4)|Code for Container Size of Product
|CONT_SZ_NAME|VARCHAR(50)|Name for Container Size of Product
|CONT_SZ_HL|NUMBER|Container Size in Hectolitre of Product
|CONT_TYP_INR_CNT_SK|NUMBER|Surrogate Key for Inner Package container type
|CONT_TYP_INR_CNT_NAME|VARCHAR(64)|Inner package container type Name
|INR_PKG_CONT_CNT_CODE|VARCHAR(4)|Code for Inner Package Container count of Product
|INR_PKG_CONT_CNT_NBR|NUMBER|Inner Package Container count of Product
|RTD_REPORTING_FILTER|VARCHAR(9)|Indicator to filter RTD Products
|BEER_REPORTING_FILTER|VARCHAR(4)|Indicator to filter Beer Products
|BRWR_LAB_INCL_MSB_FILTER|VARCHAR(3)|Indicator to filter Labatt Product including Mill Street brewery
|BRWR_LAB_EXCL_MSB_FILTER|VARCHAR(3)|Indicator to filter Labatt Product excluding Mill Street brewery
|BRD_CLASSIFICATION|VARCHAR(16777216)|Brand Classification used in Variable Compensation model to group product in different categories ( Mainstream , High end , Craft , Beyond beer)




## **P&L SKU Attribute**

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_PNL_SKU_ATTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_PNL_SKU_ATTR)<br/>

This tables contains sku attributes which are required for P&L reporting.

| **Field Name** | **Data Type** | **Comment** |
|-	|	-	|	-
|CNSMR_PROD_SK|NUMBER|Surrogate Key for Consumer Generic Product
|BRANDCODE|VARCHAR|Consumer Product Code
|NAME|VARCHAR|Consumer Product Name
|DISPLAY_ALLAIS|VARCHAR|Allias name defined in TM1
|CONT_MATL_NAME|VARCHAR|Container Material Name
|BRAND_FAMILY|VARCHAR|Brand Family name
|CONVERSION_TO_UNITS|NUMBER|Conversion factor to conver into units
|CONVERSION_TO_HLS|NUMBER|Conversion factor to conver into HLs
|SELLING_COMPONENT|NUMBER|Seling Component ( Outer Package count)
|CONTAINER_NUMBER|NUMBER|Number of Container ( Inner Package Count)
|CONTAINER_SIZE|NUMBER|Size of Container in Litres
|CONTAINER_SIZE_FROM_FILE|NUMBER|Size of Container in Hecto Litres
|ERP_ID|VARCHAR|SAP Material number
|PRICE_CLASS|VARCHAR|Price Class
|ALCOHOL_CLASS|VARCHAR|Alcohol Content name
|CONTAINER_TYPE|VARCHAR|Container Type
|IMPORT|VARCHAR|Import Indicator - Import/Domestic
|LIQUID_TYPE|VARCHAR|Liquid Class
|MIX|VARCHAR|Mix Brand Indicator
|BRANDFAMILY_TEXT|VARCHAR|Brand  Family Name
|BRAND_TEXT|VARCHAR|Brand Name
|PACK_SIZE_QC|VARCHAR|Size Name ( as per Quebec)
|BUSINESS|VARCHAR|Daily Sales Brand Group name
|HE_BRAND_TARGET_SCOPE|VARCHAR|Brand Target Scope Name

# Qlik Sales Sellable Item View

This is a dimensional view used for Exposing all the Attributes related to Sellable Item and is used in Qlik sales reporting.

EDW View Name :[EDW.CSDI_APP_QS_SI_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_ITEM)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
ITEM_KEY|VARCHAR|Item Key
BI_ITEM_NAME|VARCHAR(256)|BI Item Name
BI_ITEM_TYP_CODE|VARCHAR(1)|BI Item Type Code
BI_ITEM_IND_TYP_CODE|VARCHAR(1)|BI Item Industry Type: I-Industry, C-Competitive, L-Labatt
BI_ITEM_UNIT_CONV|NUMBER(9,6)|BI Item Conversion rate from HL to Units
BI_ITEM_CNSMR_UNIT_CONV|NUMBER(9,6)|BI Item Conversion rate from HL to Units at the Consumer level
CMRCL_PROD_KEY|VARCHAR(30)|Commercial Product Key
ANAL_ITEM_ID|VARCHAR(6)|Analytical Item ID
MATL_NBR|VARCHAR(18)|Material Number
MATL_NAME|VARCHAR(40)|Material Name
BRWR_CODE|VARCHAR(10)|Brewer Code
BRWR_NAME|VARCHAR(50)|Brewer Name
BRWR_NAME_FR|VARCHAR(50)|Brewer French Name
BRWR_ABBR|VARCHAR(10)|Brewer Abbreviation
BRWR_PRNT_CODE|VARCHAR(10)|Brewer Parent Code
BRWR_PRNT_NAME|VARCHAR(50)|Brewer Parent Name
BRWR_PRNT_NAME_FR|VARCHAR(50)|Brewer Parent French Name
BRWR_PRNT_ABBR|VARCHAR(10)|Brewer Parent Abbreviation
BRWR_TYP_CODE|VARCHAR(1) |Brewer Type Code
BRWR_TYP_NAME|VARCHAR(16) |Brewer Type Name
BRWR_TYP_NAME_FR|VARCHAR(16) |Brewer Type French Name
IND_NAME|VARCHAR(14)|Brewer Industry Total Name
SLBL_PROD_CODE|VARCHAR(32)|Sellable Product Code
SLBL_PROD_NAME|VARCHAR(100)|Sellable Product Name
SLBL_PROD_NAME_FR|VARCHAR(100)|Sellable Product French Name
SLBL_BASE_PROD_CODE|VARCHAR(32)|Sellable Base Product Code
SLBL_BASE_PROD_NAME|VARCHAR(100)|Sellable Base Product Name
SLBL_BASE_PROD_NAME_FR|VARCHAR(100)|Sellable Base Product French Name
GENR_PROD_CODE|VARCHAR(32)|Generic Product Code
GENR_PROD_NAME|VARCHAR(80)|Generic Product Name
GENR_PROD_NAME_FR|VARCHAR(80)|Generic Product French Name
CNSMR_PROD_CODE|VARCHAR(32)|Consumer Product Code
CNSMR_PROD_NAME|VARCHAR(80)|Consumer Product Name
CNSMR_PROD_NAME_FR|VARCHAR(80)|Consumer Product French Name
SLBL_BRD_CODE|VARCHAR(6)|Sellable Brand Code
SLBL_BRD_NAME|VARCHAR(50)|Sellable Brand Name
SLBL_BRD_NAME_FR|VARCHAR(50)|Sellable Brand French Name
SLBL_BRD_ABBR|VARCHAR(10)|Sellable Brand Abbreviation
MIX_IND_CODE|VARCHAR(1) |Mix Indicator Code
MIX_IND_NAME|VARCHAR(16) |Mix Indicator Name
MIX_IND_NAME_FR|VARCHAR(16) |Mix Indicator French Name
CMPNT_BRD_CODE|VARCHAR(40)|Component Brand Code
CMPNT_BRD_NAME|VARCHAR(128)|Component Brand Name
CMPNT_BRD_NAME_FR|VARCHAR(128)|Component Brand French Name
CNSMR_CMPNT_BRD_CODE|VARCHAR(40)|Consumer Component Brand Code
CNSMR_CMPNT_BRD_NAME|VARCHAR(128)|Consumer Component Brand Name
CNSMR_CMPNT_BRD_NAME_FR|VARCHAR(128)|Consumer Component Brand French Name
BRD_CODE|VARCHAR(10)|Brand Code
BRD_NAME|VARCHAR(64)|Brand Name
BRD_NAME_FR|VARCHAR(64)|Brand French Name
BRD_ABBR|VARCHAR(10)|Brand Abbreviation
BRD_FMLY_CODE|VARCHAR(10)|Brand Family Code
BRD_FMLY_NAME|VARCHAR(64)|Brand Family Name
BRD_FMLY_NAME_FR|VARCHAR(64)|Brand Family French Name
BRD_FMLY_ABBR|VARCHAR(10)|Brand Family Abbreviation
PKG_CODE|VARCHAR(6)|Package Code
PKG_NAME|VARCHAR(50)|Package Name
PKG_NAME_FR|VARCHAR(50)|Package French Name
CONT_TYP_INR_CNT_NAME|VARCHAR(64)|Container Type and Inner Count Name
CONT_TYP_INR_CNT_NAME_FR|VARCHAR(64)|Container Type and Inner Count French Name
CONT_TYP_CODE|VARCHAR(6)|Container Type Code
CONT_TYP_NAME|VARCHAR(50)|Container Type Name
CONT_TYP_NAME_FR|VARCHAR(50)|Container Type French Name
PKG_CLS_CODE|VARCHAR(4) |Package Class Code
PKG_CLS_NAME|VARCHAR(50) |Package Class Name
PKG_CLS_NAME_FR|VARCHAR(50) |Package Class French Name
CONT_SZ_CODE|VARCHAR(4) |Container Size Code
CONT_SZ_NAME|VARCHAR(50) |Container Size Name
CONT_SZ_NAME_FR|VARCHAR(50) |Container Size French Name
CONT_SZ_HL|NUMBER(9,6)|Container Size in Hectolitres
CONT_SZ_LIT|NUMBER(9,6)|Container Size in Litres
INR_PKG_CONT_CNT_CODE|VARCHAR(4) |Inner Package Container Count Code
INR_PKG_CONT_CNT_NBR|NUMBER(38,0)|Inner Package Container Count Number
OTR_PKG_CONT_CNT_CODE|VARCHAR(4) |Outer Package Container Count Code
OTR_PKG_CONT_CNT_NBR|NUMBER(38,0)|Outer Package Container Count Number
CONT_RTRN_CODE|VARCHAR(4) |Container Return Code
CONT_RTRN_NAME|VARCHAR(50) |Container Return Name
CONT_RTRN_NAME_FR|VARCHAR(50) |Container Return French Name
CONT_MATL_CODE|VARCHAR(4) |Container Material Code
CONT_MATL_NAME|VARCHAR(50) |Container Material Name
CONT_MATL_NAME_FR|VARCHAR(50) |Container Material French Name
BRD_TST_SEG_CODE|VARCHAR(4)|Brand Taste Segment Code
BRD_TST_SEG_NAME|VARCHAR(50)|Brand Taste Segment Name
BRD_TST_SEG_NAME_FR|VARCHAR(50)|Brand Taste Segment French Name
BRD_TST_SEG_ABBR|VARCHAR(10)|Brand Taste Segment Abbreviation
BI_ITEM_ALCHL_PCT|NUMBER(5,2)|BI Item Alcohol Percentage
ALCHL_CNTN_CODE|VARCHAR(4)|Alcohol Content Code
ALCHL_CNTN_NAME|VARCHAR(50)|Alcohol Content Name
ALCHL_CNTN_NAME_FR|VARCHAR(50)|Alcohol Content French Name
ALCHL_CNTN_ABBR|VARCHAR(10)|Alcohol Content Abbreviation
ALCHL_CNTN_PCT_MIN|NUMBER(5,2)|Alcohol Content Minimum Percentage
ALCHL_CNTN_PCT_MAX|NUMBER(5,2)|Alcohol Content Maximum Percentage
CNTRY_PROD_CODE|VARCHAR(4)|Country of Production Code
CNTRY_PROD_ISO_CODE|VARCHAR(4)|Country of Production ISO Code
CNTRY_PROD_NAME|VARCHAR(50)|Country of Production Name
CNTRY_PROD_IMP_CODE|VARCHAR(1)|Country of Production Import / Domestic Indicator Code: D:Domestic, I:Import, U-Unknown
CNTRY_PROD_IMP_NAME|VARCHAR(10)|Country of Production Import / Domestic Name
CNTRY_PROD_IMP_NAME_FR|VARCHAR(10)|Country of Production Import / Domestic French Name
PRC_CLS_CODE|VARCHAR(10)|Price Class Code
PRC_CLS_NAME|VARCHAR(50)|Price Class Name
PRC_CLS_NAME_FR|VARCHAR(50)|Price Class Frech Name
PRC_CLS_ABBR|VARCHAR(10)|Price Class Abbreviation
PRC_SEG_CODE|VARCHAR(10)|Price Class Segment Code
PRC_SEG_NAME|VARCHAR(50)|Price Class Segment Name
PRC_SEG_NAME_FR|VARCHAR(50)|Price Class Segment French Name
PRC_SEG_ABBR|VARCHAR(10)|Price Segment Abbreviation
LIQ_CLS_CODE|VARCHAR(6)|Liquid Class
LIQ_CLS_NAME|VARCHAR(64)|Liquid Name
LIQ_CLS_NAME_FR|VARCHAR(65)|Liquid French Name
LIQ_CLS_ABBR|VARCHAR(10)|Liquid Class Abbreviation
LIQ_SEG_CODE|VARCHAR(4)|Liquid Segment Code
LIQ_SEG_NAME|VARCHAR(50)|Liquid Segment Name
LIQ_SEG_NAME_FR|VARCHAR(50)|Liquid Segment French Name
LIQ_SEG_ABBR|VARCHAR(10)|Liquid Segment Abbreviation
MATL_TYP_CODE|VARCHAR(4)|Material Type Code
MATL_TYP_NAME|VARCHAR(50)|Material Type Name
MATL_STAT_NAME|VARCHAR(10)|Material Status Code
MATL_STAT_NAME|VARCHAR(50)|Material Status Name
BEV_TYP_CODE|VARCHAR(2)|Beverage Type Code
BEV_TYP_NAME|VARCHAR(50)|Beverage Type Name
BEV_TYP_NAME_FR|VARCHAR(50)|Beverage Type French Name
PROD_REFILL_IND_CODE|VARCHAR(1)|Product Refillable Indicator Code
PROD_REFILL_IND_NAME|VARCHAR(50)|Product Refillable Indicator Name
PROD_REFILL_IND_NAME_FR|VARCHAR(50)|Product Refillable Indicator French Name
OTR_PKG_TYP_CODE|VARCHAR(4)|Outer Package Type Code
OTR_PKG_TYP_NAME|VARCHAR(50)|Outer Package Type Name
OTR_PKG_TYP_NAME_FR|VARCHAR(50)|Outer Package Type French Name
OTR_PKG_TYP_DECOR_CODE|VARCHAR(1)|Outer Package Type Decorated Indicator Code
OTR_PKG_TYP_DECOR_NAME|VARCHAR(16)|Outer Package Type Decorated Indicator Name
OTR_PKG_TYP_DECOR_NAME_FR|VARCHAR(16)|Outer Package Type Decorated Indicator French Name

# Qlik Sales Organic Item View

Application dimensional view for Qlik Sales reflecting Organic Item Definitions.

EDW View Name :[EDW.CSDI_APP_QS_SI_ORGNC_ITEM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_ORGNC_ITEM)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
ORG_ITEM_KEY|VARCHAR|Organic BI Item Key derived from (ref_bi_item.bi_item_sk)
ORG_BI_ITEM_NAME|VARCHAR(256)|BI Item Name (ref_bi_item.bi_item_name)
ORG_BI_ITEM_TYP_CODE|VARCHAR(1)|BI Item Type Code
ORG_BI_ITEM_IND_TYP_CODE|VARCHAR(1)|"BI Item Industry Type: I-Industry|, C-Competitive|, L-Labatt"
ORG_BI_ITEM_UNIT_CONV|NUMBER(9,6)|BI Item Conversion rate from HL to Units
ORG_BI_ITEM_CNSMR_UNIT_CONV|NUMBER(9,6)|BI Item Conversion rate from HL to Units at the Consumer Level
ORG_CMRCL_PROD_KEY|VARCHAR(30)|Commericial Product Key
ORG_ANAL_ITEM_ID|VARCHAR(6)|Analytical Item
ORG_MATL_NBR|VARCHAR(18)|Material Number
ORG_MATL_NAME|VARCHAR(40)|Material Name
ORG_BRWR_CODE|VARCHAR(10)|Brewer Code
ORG_BRWR_NAME|VARCHAR(50)|Brewer Name
ORG_BRWR_NAME_FR|VARCHAR(50)|Brewer French Name
ORG_BRWR_ABBR|VARCHAR(10)|Brewer Abbreviation
ORG_BRWR_PRNT_CODE|VARCHAR(10)|Brewer Parent Code
ORG_BRWR_PRNT_NAME|VARCHAR(50)|Brewer Parent Name
ORG_BRWR_PRNT_NAME_FR|VARCHAR(50)|Brewer Parent French Name
ORG_BRWR_PRNT_ABBR|VARCHAR(10)|Brewer Parent Abbreviation
ORG_BRWR_TYP_CODE|VARCHAR(1) COLLATE 'en-ci'|Brewer Type Code
ORG_BRWR_TYP_NAME|VARCHAR(16) COLLATE 'en-ci'|Brewer Type Name
ORG_BRWR_TYP_NAME_FR|VARCHAR(16) COLLATE 'en-ci'|Brewer Type French Name
ORG_IND_NAME|VARCHAR(14)|Brewer Industry Total Name
ORG_SLBL_PROD_CODE|VARCHAR(32)|Sellable Product Code
ORG_SLBL_PROD_NAME|VARCHAR(100)|Sellable Product Name
ORG_SLBL_PROD_NAME_FR|VARCHAR(100)|Sellable Product French Name
ORG_SLBL_BASE_PROD_CODE|VARCHAR(32)|Sellable Base Product Code
ORG_SLBL_BASE_PROD_NAME|VARCHAR(100)|Sellable Base Product Name
ORG_SLBL_BASE_PROD_NAME_FR|VARCHAR(100)|Sellable Base Product French Name
ORG_GENR_PROD_CODE|VARCHAR(32)|Generic Product Code
ORG_GENR_PROD_NAME|VARCHAR(80)|Generic Product Name
ORG_GENR_PROD_NAME_FR|VARCHAR(80)|Generic Product French Name
ORG_CNSMR_PROD_CODE|VARCHAR(32)|Consumer Product Code
ORG_CNSMR_PROD_NAME|VARCHAR(80)|Consumer Product Name
ORG_CNSMR_PROD_NAME_FR|VARCHAR(80)|Consumer Product French Name
ORG_SLBL_BRD_CODE|VARCHAR(6)|Sellable Brand Code
ORG_SLBL_BRD_NAME|VARCHAR(50)|Sellable Brand Name
ORG_SLBL_BRD_NAME_FR|VARCHAR(50)|Sellable Brand French Name
ORG_SLBL_BRD_ABBR|VARCHAR(10)|Sellable Brand Abbreviation
ORG_MIX_IND_CODE|VARCHAR(1) COLLATE 'en-ci'|Mix Indicator Code
ORG_MIX_IND_NAME|VARCHAR(16) COLLATE 'en-ci'|Mix Indicator Name
ORG_MIX_IND_NAME_FR|VARCHAR(16) COLLATE 'en-ci'|Mix Indicator French Name
ORG_CMPNT_BRD_CODE|VARCHAR(40)|Component Brand Code
ORG_CMPNT_BRD_NAME|VARCHAR(128)|Component Brand Name
ORG_CMPNT_BRD_NAME_FR|VARCHAR(128)|Component Brand French Name
ORG_CNSMR_CMPNT_BRD_CODE|VARCHAR(40)|Consumer Component Brand Code
ORG_CNSMR_CMPNT_BRD_NAME|VARCHAR(128)|Consumer Component Brand Name
ORG_CNSMR_CMPNT_BRD_NAME_FR|VARCHAR(128)|Consumer Component Brand French Name
ORG_BRD_CODE|VARCHAR(10)|Brand Code
ORG_BRD_NAME|VARCHAR(64)|Brand Name
ORG_BRD_NAME_FR|VARCHAR(64)|Brand French Name
ORG_BRD_ABBR|VARCHAR(10)|Brand Abbreviation
ORG_BRD_FMLY_CODE|VARCHAR(10)|Brand Family Code
ORG_BRD_FMLY_NAME|VARCHAR(64)|Brand Family Name
ORG_BRD_FMLY_NAME_FR|VARCHAR(64)|Brand Family French Name
ORG_BRD_FMLY_ABBR|VARCHAR(10)|Brand Family Abbreviation
ORG_PKG_CODE|VARCHAR(6)|Package Code
ORG_PKG_NAME|VARCHAR(50)|Package Name
ORG_PKG_NAME_FR|VARCHAR(50)|Pacakage French Name
ORG_CONT_TYP_INR_CNT_NAME|VARCHAR(64)|Container Type Inner Count Name
ORG_CONT_TYP_INR_CNT_NAME_FR|VARCHAR(64)|Container Type Inner Count French Name
ORG_CONT_TYP_CODE|VARCHAR(6)|Container Type Code
ORG_CONT_TYP_NAME|VARCHAR(50)|Container Type Name
ORG_CONT_TYP_NAME_FR|VARCHAR(50)|Container Type French Name
ORG_PKG_CLS_CODE|VARCHAR(4) COLLATE 'en-ci'|Package Class Code
ORG_PKG_CLS_NAME|VARCHAR(50) COLLATE 'en-ci'|Package Class Name
ORG_PKG_CLS_NAME_FR|VARCHAR(50) COLLATE 'en-ci'|Package Class French Name
ORG_CONT_SZ_CODE|VARCHAR(4) COLLATE 'en-ci'|Container Size Code
ORG_CONT_SZ_NAME|VARCHAR(50) COLLATE 'en-ci'|Container Size Name
ORG_CONT_SZ_NAME_FR|VARCHAR(50) COLLATE 'en-ci'|Container Size French Name
ORG_CONT_SZ_HL|NUMBER(9,6)|Container Size in Hectolitres
ORG_CONT_SZ_LIT|NUMBER(9,6)|Container Size in Litres
ORG_INR_PKG_CONT_CNT_CODE|VARCHAR(4) COLLATE 'en-ci'|Inner Package Container Count Code
ORG_INR_PKG_CONT_CNT_NBR|NUMBER(38,0)|Inner Package Container Count Number
ORG_OTR_PKG_CONT_CNT_CODE|VARCHAR(4) COLLATE 'en-ci'|Outer Package Container Count Code
ORG_OTR_PKG_CONT_CNT_NBR|NUMBER(38,0)|Outer Package Container Count Number
ORG_CONT_RTRN_CODE|VARCHAR(4) COLLATE 'en-ci'|Container Return Code
ORG_CONT_RTRN_NAME|VARCHAR(50) COLLATE 'en-ci'|Container Return Name
ORG_CONT_RTRN_NAME_FR|VARCHAR(50) COLLATE 'en-ci'|Container Return French Name
ORG_CONT_MATL_CODE|VARCHAR(4) COLLATE 'en-ci'|Container Material Code
ORG_CONT_MATL_NAME|VARCHAR(50) COLLATE 'en-ci'|Container Material Name
ORG_CONT_MATL_NAME_FR|VARCHAR(50) COLLATE 'en-ci'|Container Material French Name
ORG_BRD_TST_SEG_CODE|VARCHAR(4)|Brand Taste Segment Code
ORG_BRD_TST_SEG_NAME|VARCHAR(50)|Brand Taste Segment Name
ORG_BRD_TST_SEG_NAME_FR|VARCHAR(50)|Brand Taste Segment French Name
ORG_BRD_TST_SEG_ABBR|VARCHAR(10)|Brand Taste Segment Abbreviation
ORG_BI_ITEM_ALCHL_PCT|NUMBER(5,2)|BI Item Alcohol  Percentage
ORG_ALCHL_CNTN_CODE|VARCHAR(4)|Alcohol Content Code
ORG_ALCHL_CNTN_NAME|VARCHAR(50)|Alcohol Content Name
ORG_ALCHL_CNTN_NAME_FR|VARCHAR(50)|Alcohol Content French Name
ORG_ALCHL_CNTN_ABBR|VARCHAR(10)|Alcohol Content Abbreviation
ORG_ALCHL_CNTN_PCT_MIN|NUMBER(5,2)|Alcohol Content Percentage Minimum
ORG_ALCHL_CNTN_PCT_MAX|NUMBER(5,2)|Alcohol Content Percentage Maximum
ORG_CNTRY_PROD_CODE|VARCHAR(4)|Country of Production Code
ORG_CNTRY_PROD_ISO_CODE|VARCHAR(4)|Country of Production ISO Code
ORG_CNTRY_PROD_NAME|VARCHAR(50)|Country of Production Name
ORG_CNTRY_PROD_IMP_CODE|VARCHAR(1)|"Country of Production Import / Domestic Indicator Code: D-Domestic|, I-Import|, U-Unknown"
ORG_CNTRY_PROD_IMP_NAME|VARCHAR(10)|Country of Production Import / Domestic Indicator Name
ORG_CNTRY_PROD_IMP_NAME_FR|VARCHAR(10)|Country of Production Import / Domestic Indicator French Name
ORG_PRC_CLS_CODE|VARCHAR(10)|Price Class Code
ORG_PRC_CLS_NAME|VARCHAR(50)|Price Class Name
ORG_PRC_CLS_NAME_FR|VARCHAR(50)|Price Class French Name
ORG_PRC_CLS_ABBR|VARCHAR(10)|Price Class Abbreviation
ORG_PRC_SEG_CODE|VARCHAR(10)|Price Segment  Code
ORG_PRC_SEG_NAME|VARCHAR(50)|Price Segment  Name
ORG_PRC_SEG_NAME_FR|VARCHAR(50)|Price Segment French Name
ORG_PRC_SEG_ABBR|VARCHAR(10)|Price Segment Abbreviation
ORG_LIQ_CLS_CODE|VARCHAR(6)|Liquid Class Code
ORG_LIQ_CLS_NAME|VARCHAR(64)|Liquid Class Name
ORG_LIQ_CLS_NAME_FR|VARCHAR(65)|Liquid Class French Name
ORG_LIQ_CLS_ABBR|VARCHAR(10)|Liquid Class Abbreviation
ORG_LIQ_SEG_CODE|VARCHAR(4)|Liquid Segement Code
ORG_LIQ_SEG_NAME|VARCHAR(50)|Liquid Segement Name
ORG_LIQ_SEG_NAME_FR|VARCHAR(50)|Liquid Segement French Name
ORG_LIQ_SEG_ABBR|VARCHAR(10)|Liquid Segement Abbreviation
ORG_MATL_TYP_CODE|VARCHAR(4)|Material Type Code
ORG_MATL_TYP_NAME|VARCHAR(50)|Material Type Name
ORG_MATL_STAT_CODE|VARCHAR(10)|Material Status Code
ORG_MATL_STAT_NAME|VARCHAR(50)|Material Status Name
ORG_BEV_TYP_CODE|VARCHAR(2)|Beverge Type Code
ORG_BEV_TYP_NAME|VARCHAR(50)|Beverge Type Name
ORG_BEV_TYP_NAME_FR|VARCHAR(50)|Beverge Type French Name
ORG_PROD_REFILL_IND_CODE|VARCHAR(1)|Product Refillable Indicator Code
ORG_PROD_REFILL_IND_NAME|VARCHAR(50)|Product Refillable Indicator Name
ORG_PROD_REFILL_IND_NAME_FR|VARCHAR(50)|Product Refillable Indicator French Name
ORG_OTR_PKG_TYP_CODE|VARCHAR(4)|Outer Package Type Code
ORG_OTR_PKG_TYP_NAME|VARCHAR(50)|Outer Package Type Name
ORG_OTR_PKG_TYP_NAME_FR|VARCHAR(50)|Outer Package Type French Name
ORG_OTR_PKG_TYP_DECOR_CODE|VARCHAR(1)|Outer Package Type Decorated Indicator Code
ORG_OTR_PKG_TYP_DECOR_NAME|VARCHAR(16)|Outer Package Type Decorated Indicator Name
ORG_OTR_PKG_TYP_DECOR_NAME_FR|VARCHAR(16)|Outer Package Type Decorated Indicator French Name
