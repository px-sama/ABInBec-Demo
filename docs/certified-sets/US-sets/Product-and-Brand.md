---
title: Product and Brand
tags:
    - Product
    - Brand
description: Product and brand attributes data 
---
# Product and Brand  

This data set is comprised of views that will allow a user to identify any relevant attribute about a given item, product or brand that can be used in any reporting or analytics tool. Beginning with the powerful PDCN_DM view users can easily begin to connect the dots from any item based view or report back to the identifying traits of that such as size, container type, package graphics, all the way down to Brand Family or Beer Style. These views can be joined with Sales, Inventory or Shipments data to create insightful analytics and reporting about ABI operations.

  

### **[EDW.PDCN_DM](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/PDCN_DM)**
This is a materialized view of PDCN that should be leveraged for all reporting that references items. Each record represents a unique combination of a Product & Container (PDCN) and has the most comprehensive detailed attributes for an item such as UPC/GTIN, Brand, Package, Container, Market Line and more. This view is updated nightly around 7:45pm CST.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| GENR\_PDCN\_CD | VARCHAR(7) | Unique 7 characater alphanumeric value that identifies the generic version of every Product-Container combination |
| GENR\_PDCN\_CD_SHORT | VARCHAR(7) | The concatenation of the 2-digit product and 3-digit package identifiers~ no hyphen between the two. |
| PDCN_CD | VARCHAR(7) | Unique 7 character alphanumeric value that identifies each unique Product/Container combination |
| PDCN_NM | VARCHAR(100) | Concatenation of the the BRND\_NM, ALCHL\_STRENGTH_NM and the PACKAGE STANDARD NAME. |
| PKG\_GRAPHC\_CD | VARCHAR(3) | The Graphic Code identifies each unique graphic design which appears on various containers or PDCN. |
| PKG\_GRPHC\_DSC | VARCHAR(250) | Textual explanation of the graphic. |
| MKTNG\_CNTRY\_CD | VARCHAR(2) | A 2-Character code created by AB Marketing department for a country/area. |
| MKTNG\_CNTRY\_NM | VARCHAR(25) | The name given to a country/area by AB Marketing department. |
| MKTNG\_CNTRY\_GEOGC\_AREA\_ID | NUMBER(15,0) | Integer which uniquely identifies a geographic area. block, census tract, metropolitan stati |
| FULL\_CARR\_UPC_CD | VARCHAR(15) | This is the entire UPC code for the carrier of the Product Package, for example, a 6-pack. |
| FULL\_CASE\_UPC_CD | VARCHAR(15) | This is the entire UPC code for the case of the Product Package. |
| FULL\_UNIT\_UPC_CD | VARCHAR(15) | This is the entire UPC code for the unit of the Product Package, for example, a 24-oz can. |
| CARR\_UPC\_CD | VARCHAR(15) | The last 5 digits of a standard UPC code on the secondary packaging (e.g., on a six-pack cardboard basket). |
| CASE\_UPC\_CD | VARCHAR(15) | The last 5 digits of a standard UPC code on the master carton (secondary packaging), for example the tray, or box holding 24 long-necks, or whatever the biggest part of the package is. |
| UNIT\_UPC\_CD | VARCHAR(15) | The UPC number on the primary packaging (i.e., the bottle, can, or sometimes a keg). |
| FULL\_CARR\_GTIN_CD | VARCHAR(15) | The full carrier UPC code with two leading 0s. |
| FULL\_CASE\_GTIN_CD | VARCHAR(15) | The full case UPC code with two leading 0s. |
| FULL\_UNIT\_GTIN_CD | VARCHAR(15) | The full unit UPC code with two leading 0s. |
| PDCN\_ACTV\_FLG | VARCHAR(1) | Y = the PDCN is active~ N = the PDCN is not active. |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code assigned from the PPS system. |
| BRND_NM | VARCHAR(100) | The name of the PPS BRAND. |
| BRND\_SHORT\_NM | VARCHAR(100) | Brand name to be used when space constraints do not permit use of the standard name. Currently being used for ship orders and invoices. |
| TRDMK_NM | VARCHAR(100) | The name of a product that is trademarked under US laws for use in this country.Examples include: Budweiser Michelob Ultra from PPS\_PKG\_BRAND |
| BRND\_TYP\_CD | VARCHAR(1) | This attribute defines the brand type. |
| BRND_ABBR | VARCHAR(3) | The short description of a Brand. |
| BRND\_IMP\_FLG | VARCHAR(1) | Flag that indicates brand is imported into country, rather than produced domestically or under license. |
| BRND\_ASEPTIC\_FLG | VARCHAR(1) | A flag indicating that the brand is free from pathogenic microorganisms. |
| BRND\_INTRL\_NBR | VARCHAR(2) | A numerical representation for a brand that is used internally for indexing and sorting. More than one brand can have the same number. |
| BRND\_CMPTV\_NBR | VARCHAR(4) | This attribute is used in the Competitive Pricing System interface to the wholesaler mark-up system. |
| BRND\_CMPTV\_NM | VARCHAR(100) | Name for the brand in the Competitive Pricing System. |
| BREWD\_PROD\_CD | VARCHAR(4) | Mandatory. Purpose unclear. As an example, the brewed product code 11 is found on these brands: |
| BRND\_PROD\_CD | VARCHAR(4) | An identifer that represents a unique brand product. Examples are 11 for Budweiser 5%. |
| BRND\_PROD\_NM | VARCHAR(100) | The name of the Brand Product is the concatenation of the Brand Name and Alcohol Percentage. |
| ALCHL\_STRENGTH\_CD | VARCHAR(2) | A code used to distinguish various concentrations of beverage productan Alcohol Strength. |
| ALCHL\_STRENGTH\_NM | VARCHAR(100) | The name of the ALCOHOL STRENTH |
| ALCHL\_WGT\_PCT | NUMBER(9,4) | The alcohol percentage expressed by a ratio of alcohol as a percentage of the total weight of the beverage. |
| ALCHL\_VOL\_PCT | NUMBER(9,4) | The alcohol percentage expressed by a ratio of alcohol as a percentage of the total volume of the beverage. |
| ALCHL\_CLSFN\_CD | VARCHAR(3) | The unique code representing an Alcohol Classification. ALCOHOL CLASSIFICATION classifies alcohol strength into high, light or none. |
| ALCHL\_CLSFN\_NM | VARCHAR(100) | The name associated with an ALCOHOL CLASSIFICATION. Examples include Strong, etc.. |
| PKG_CD | VARCHAR(3) | A numeric code to represent a unique package. |
| PKG_NM | VARCHAR(100) | This is the standard description for each unique package. |
| PRC\_GRP\_CD | VARCHAR(3) | Code used to identify a package group. PACKAGE GROUP, also known as PRICE GROUP provides a way to recategorize products for pricing purposes. |
| PRC\_GRP\_NM | VARCHAR(100) | The name of the PACKAGE GROUP. |
| TAX\_RT\_METH_CD | VARCHAR(18) | The tax code is the current code assigned to a package group to track the tax rate. |
| PKG\_QLFR\_TXT | VARCHAR(100) | Textual details of the package qualifier. |
| WRAP_CD | VARCHAR(4) | Uniquely identifies the type of carrier or wrapper around the carrier of a package of beer. |
| WRAP_DSC | VARCHAR(250) | Describes the carrier or wrapper around the carrier of a package of beer. |
| CRTN_CD | VARCHAR(4) | A unique identifier for the mix of materials used to make up a package. |
| CRTN_DSC | VARCHAR(250) | Describes the material used to make up a package. |
| PKG\_LTR\_EQUIV_FCT | NUMBER(15,9) | The amount of liquid in that package converted to the equivalent liter amount. |
| PKG\_UNIT\_QTY | NUMBER(10,0) | The number of smallest saleable packaged units per package. Ex: A box with 4 6-pack baskets, each 6-pack is a unit. So there are 4 units in the package. |
| PKG\_BRRL\_EQUIV_FCT | NUMBER(11,9) | The amount of liquid in a package converted to the equivalent barrel amount (percentage of a barrel). |
| PKG\_CS\_EQUIV_FCT | NUMBER(11,9) | The amount of liquid in a package converted to the equivalent case amount, or percentage of a statistical case. |
| CONT\_UNIT\_QTY | NUMBER(11,0) | Number of containers in the smallest saleable packaged unit (excluding loose items). For example: 6 (bottles in a 6-pack) |
| CONT_CD | VARCHAR(3) | A numeric code to represent a unique container. The container is the object which holds the beer. |
| CONT_NM | VARCHAR(100) | Container name is created by concatenating the container size name, material type name and the container type code. |
| CONT\_TYP\_CD | VARCHAR(6) | A code used to identify a type of container. |
| CONT\_TYP\_NM | VARCHAR(100) | The name of the CONTAINER TYPE. |
| CONT\_ASEPTIC\_FLG | VARCHAR(1) | A flag indicating that the container is free from pathogenic microorganisms. |
| CONT\_BODY\_TYP_CD | VARCHAR(10) | The unique code representing a type of Body that a Container has, which represents the feature that distinguish a given container. |
| CONT\_BODY\_TYP_NM | VARCHAR(100) | The name associated with a CONTAINER BODY TYPE. |
| CONT\_DECOR\_LBL\_TYP\_CD | VARCHAR(4) | The unique code representing a type of Decor for a Container. |
| CONT\_DECOR\_LBL\_TYP\_NM | VARCHAR(100) | The name of the CONTAINER DECORATION LABEL. |
| CONT\_MATL\_TYP_CD | VARCHAR(2) | The unique code representing a material codes applicable to A-B Containers. |
| CONT\_MATL\_TYP_NM | VARCHAR(100) | The name of the CONTAINER MATERIAL TYPE. |
| CONT\_QLFR\_TXT | VARCHAR(100) | Container qualifier text. |
| CONT\_RTRN\_TYP_CD | VARCHAR(15) | The unique code for a type of return supported for bottle containers. |
| CONT\_RTRN\_TYP_NM | VARCHAR(100) | The name of the CONTAINER RETURN TYPE. |
| CONT\_SZ\_CD | VARCHAR(2) | The unique code representing the size of a container. Refers to the amount of product that a container will hold |
| CONT\_SZ\_NM | VARCHAR(100) | The name of the CONTAINER SIZE. |
| DRGHT_FLG | VARCHAR(1) | An indicator that a container may be used for draught product. |
| CONT\_CLASS\_CD | VARCHAR(3) | This unique code for a type of container classes applicable to A-B Containers. |
| CONT\_CLASS\_NM | VARCHAR(100) | The name associated with a CONTAINER CLASS. |
| BTL\_NECK\_TYP_CD | VARCHAR(2) | Code identifying the type of neck. Example, Die Cut, Specialty Bottle, Long Neck. |
| BTL\_NECK\_TYP_NM | VARCHAR(100) | The name of the type of neck. Example, Die Cut, Specialty Bottle, Long Neck. |
| CONT\_COLR\_CD | VARCHAR(4) | The unique code representing a standardized Color for Containers. |
| CONT\_COLR\_NM | VARCHAR(100) | The name of the CONTAINER COLOR. |
| CLOS_CD | VARCHAR(2) | Short text to uniqely identifies a closure type for the container. |
| CLOS_DSC | VARCHAR(250) | Textual description of the closure. |
| MKT\_LN\_CD | VARCHAR(3) | The unique code representing a market line. Examples: 022 - 24/12 OZ RF BTL 001 - 15/20 OZ NR BTL |
| MKT\_LN\_NM | VARCHAR(100) | The name of the MARKET LINE. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| ALCHL\_ACTUAL\_STRENGTH | VARCHAR(2) | Actual Strength from RMR - including procuts above 9 percent |
| PRODUCT_ID | VARCHAR(34) | RMR Product ID |



### **[EDW.PDCN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/PDCN)**
This is the base view that defines all valid items produced and sold by AB. Each item is assigned a PDCN Code that will represent that item across the Sales and Logistics reporting environments. Additionally, all items are assigned a Generic PDCN value to tie specialty packages (Bud Light Super Bowl 30 pack) back to the “base” package (Bud Light 30 pack). Also included in the view are the GTIN/UPC values to be used with POS/scan data sources such as IRI. This view is updated nightly around 7:45pm CST.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PDCN\_ITEM\_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. |
| GENR\_PDCN\_CD | VARCHAR(7) | Unique 7 characater alphanumeric value that identifies the generic version of every Product-Container combination |
| PDCN_CD | VARCHAR(7) | Unique 7 character alphanumeric value that identifies each unique Product/Container combination |
| PDCN_NM | VARCHAR(100) | Concatenation of the the BRND\_NM, ALCHL\_STRENGTH_NM and the PACKAGE STANDARD NAME. |
| BRND\_PROD\_ITEM_ID | NUMBER(15,0) | Unique ID that identifies Brand Product |
| BRND\_PROD\_CD | VARCHAR(4) | An identifer that represents a unique brand product. Examples are 11 for Budweiser 5%. |
| PKG\_ITEM\_ID | NUMBER(15,0) | Unique ID that identifies Package Items |
| PKG_CD | VARCHAR(3) | A numeric code to represent a unique package. |
| PKG\_GRPHC\_CD | VARCHAR(3) | A numeric code to represent a unique package graphics combination |
| PKG\_GRPHC\_DSC | VARCHAR(250) | Textual explanation of the graphic. |
| MKTNG\_CNTRY\_CD | VARCHAR(2) | A 2-Character code created by AB Marketing department for a country/area. |
| MKTNG\_CNTRY\_GEOGC\_AREA\_ID | NUMBER(15,0) | Integer which uniquely identifies a geographic area. block, census tract, metropolitan stati |
| FULL\_CARR\_UPC_CD | VARCHAR(12) | This is the entire UPC code for the carrier of the Product Package, for example, a 6-pack. |
| FULL\_CASE\_UPC_CD | VARCHAR(12) | This is the entire UPC code for the case of the Product Package. |
| FULL\_UNIT\_UPC_CD | VARCHAR(12) | This is the entire UPC code for the unit of the Product Package, for example, a 24-oz can. |
| CARR\_UPC\_CD | VARCHAR(5) | The last 5 digits of a standard UPC code on the secondary packaging (e.g., on a six-pack cardboard basket). |
| CASE\_UPC\_CD | VARCHAR(5) | The last 5 digits of a standard UPC code on the master carton (secondary packaging), for example the tray, or box holding 24 long-necks, or whatever the biggest part of the package is. |
| UNIT\_UPC\_CD | VARCHAR(5) | The UPC number on the primary packaging (i.e., the bottle, can, or sometimes a keg). |
| FULL\_CARR\_GTIN_CD | VARCHAR(14) | The full carrier UPC code with two leading 0s. |
| FULL\_CASE\_GTIN_CD | VARCHAR(14) | The full case UPC code with two leading 0s. |
| FULL\_UNIT\_GTIN_CD | VARCHAR(14) | The full unit UPC code with two leading 0s. |
| ACTV_FLG | VARCHAR(1) | Y = the PDCN is active, N = the PDCN is not active. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Mod Timestamp is the date and time the process ran that updated data in the EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |


### [**EDW.STR\_BDGT\_ALL_BRNDS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/STR_BDGT_ALL_BRNDS)
This is the primary view to be used for any Commercial reporting that relies on brand segmentations such as Brand Families, Commercial Priorities, Weighted Average Market Price, Beer Style, etc. It is important to note that when joining to this view from PDCN\_DM or BRND that you must use the MKTNG\_BRND\_CD as only those values are mapped to this view. This view is managed by the CASE Sales Planning and Forecasting team and is updated weekly on Fridays at 3pm CST.

|     |     |     |
| --- | --- | --- |  
| **Field Name** | **Data Type** | **Comment** |
| BRND_CD | VARCHAR(3) | Brand Code value that aligns to the EDW.BRND.MKTNG\_BRND\_CD value |
| BRAND | VARCHAR(31) | Description of the brand |
| WAMP_CD | VARCHAR(5) | Weighted Average Market Price partition code |
| WAMP_NM | VARCHAR(16) | Weighted Average Market Price partition name |
| BRND\_GRP\_CD | VARCHAR(5) | Brand Group Code |
| BRND\_GRP\_NM | VARCHAR(16) | Brand Group Name |
| BRND_FLG | VARCHAR(3) | Flag indicating if Brand is part of AB (ABI), US Other (USO) or Adjacency (ADJ) reporting group |
| BEYOND\_BEER\_FLG | VARCHAR(1) | Flag indicating if Brand is part of the Beyond Beer portfolio |
| BCBU_FLG | VARCHAR(1) | Flag indicating if Brand is part of Brewers Collective portfolio |
| LOCAL\_CRAFT\_FLG | VARCHAR(1) | Flag indicating if Brand is considered a Local Craft |
| MACRO\_CRAFT\_FLG | VARCHAR(1) | Flag indicating if Brand is considered a Macro Craft |
| IMPORT_FLG | VARCHAR(1) | Flag indicatin of Brand is an import |
| CP_CD | VARCHAR(5) | Commercial Priority Code |
| CP_NM | VARCHAR(16) | Commercial Priority Name |
| BRND\_STYLE\_CD | VARCHAR(2) | Brand Style Code |
| BRND_STYLE | VARCHAR(50) | Brand Style Name |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | Last modified date of the record in EDW |
| ETL\_RUN\_ID | NUMBER(38,0) | ID of the ETL run that updated the table |


### **[EDW.BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/BRND)**
This is the base view that defines all brands within Anheuser-Busch and includes attributes such as Brand Code, Trademark Name and Federal Product Classification. It is important to note that its possible for a brand to be represented by more than one brand code if that brand is “cross-brewed”. In these cases the two brand codes will share the same MKTNG\_BRND\_CD value which can be used to combine results in to a single brand record when applicable. The data in this view is managed by the Product Support Team within the Product Package System and the view is updated nightly around 7:45pm CST.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BRND\_CTGY\_ID | NUMBER(15,0) | Unique ID that identifies as specific brand |
| BRND_CD | VARCHAR(3) | This is the three characters long Brand Code assigned from the PPS system. |
| BRND_NM | VARCHAR(100) | The name of the PPS BRAND. |
| BRND\_SHORT\_NM | VARCHAR(100) | Brand name to be used when space constraints do not permit use of the standard name. Currently being used for ship orders and invoices. |
| TRDMK_NM | VARCHAR(100) | The name of a product that is trademarked under US laws for use in this country.Examples include: Budweiser Michelob Ultra from PPS\_PKG\_BRAND |
| BRND\_TYP\_CD | VARCHAR(1) | This attribute defines the brand type. |
| BRND_ABBR | VARCHAR(3) | The short description of a Brand. |
| BRND\_IMP\_FLG | VARCHAR(1) | Flag that indicates brand is imported into country, rather than produced domestically or under license. |
| BRND\_ASEPTIC\_FLG | VARCHAR(1) | A flag indicating that the brand is free from pathogenic microorganisms. |
| BRND\_INTRL\_NBR | VARCHAR(2) | A numerical representation for a brand that is used internally for indexing and sorting. More than one brand can have the same number. |
| BRND\_CMPTV\_NBR | VARCHAR(4) | This attribute is used in the Competitive Pricing System interface to the wholesaler mark-up system. |
| BRND\_CMPTV\_NM | VARCHAR(100) | Name for the brand in the Competitive Pricing System. |
| BREWED\_PROD\_CD | VARCHAR(4) | Mandatory. Purpose unclear. As an example, the brewed product code 11 is found on these brands: |
| ACTV_FLG | VARCHAR(1) | Flag indicating if the brand is active |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | Last modified date of the record in EDW |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata object associated with record |
| HIGH\_LVL\_BRND\_FAMLY\_CD | VARCHAR(2) | High Level Brand Family Code assigned in PPS |
| FED\_PROD\_CLSFN_CD | VARCHAR(2) | Federal Product Classification Code for whether the products is Beer, Wine, Liquor, Cider or Non-Alcoholic |
| PRCNG\_BRND\_FAMLY\_DSPLY\_SEQ_NBR | NUMBER(5,0) | Brand Family Sequence number for Pricing purposes |
| PRCNG\_BRND\_DSPLY\_SEQ\_NBR | NUMBER(5,0) | Brand Sequence number for Pricing purposes |
| HIGH\_LVL\_BRND\_FAMLY\_NM | VARCHAR(100) | High Level Brand Family name assigned in PPS |
| MKTNG\_BRND\_CD | VARCHAR(3) | "Master" brand code used to map cross-brewed items together. This value should be used to join to STR\_BDGT\_ALL_BRNDS and is the value used in most Sales reporting applications |

  

Published on 5/5/21 by A. Stites
