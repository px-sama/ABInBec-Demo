---
title: Legend
tags:
    - Wholesaler
    - Promotion
    - Sales
    - Prices
description: Promotions, pricing, brand, and package Ontology
---
# Legend  

The views in this data set are loaded in to the Palantir Foundry platform by the Revenue Management team for promotions, pricing, brand, and package Ontology. This data is used to power multiple Command Centers in the Legend platform, including PINC and the Pricing Command Center.

  

### [**EDW.PROMO\_PMT\_LFCYC**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/PROMO_PMT_LFCYC)
This view presents the monthly After Allowance Payments (AAP) to wholesalers. It Includes all promotions offered to wholesalers, including promotions later cancelled (at the A-B promotion level and at the wholesaler promotion level).  It also shows information from the latest submitted wholesaler sales report.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| PRC\_PROMO\_ID | LONG | A randomly assigned number that uniquely represents a promotion sales period. |
| BRWY\_CUST\_NBR | STRING | 5 digit wholesaler number. |
| PKG\_GRP\_CD | STRING | Code used to identify a package group. PACKAGE GROUP, also known as PRICE GROUP provides a way to recategorize products for pricing purposes. |
| BRWY\_CUST\_PARTY_ID | LONG | Uniquely identifies the Brewery Customer to which this promotion was offered. |
| PROMO\_SLS\_RPT\_CRTE\_TSP | LONG | Date and time this promotions sales report was created in BudNET AAP. |
| PROMO\_CNCLD\_FLG | STRING | Identifies whether the promotion has been physically deleted from the AAP system. A physical delete indicates that the promotion was cancelled. Archived promotions are not included as a delete. (Originally the column DEL_FLG) |
| CPM\_PROMO\_NBR | STRING | Uniquely identifies every promotion (pre-chunk). If a promotion runs an entire year, it will have one CPM Promotion Number but will be paid multiple times (payment "chunks" or sales periods). |
| AAP_NBR | STRING | Used to identify each promotion "chunk" (i.e. sales period) that is released to pay into the Automated Allowance Payment (AAP) system. Commonly called AAP Number. |
| PROMO_DSC | STRING | Historically contained quantity requirements and/or venue specific retailers. May be blank. As of 7/05, used to describe market scope or unique promotion arrangements that need to be communicated to the wholesaler. |
| WSLR\_CNCLD\_FLG | STRING | CASE STATEMENT OF OFFER.EDW\_END\_TSP < TIMESTAMP '9999-12-31 23:59:59' THEN 'Y' ELSE 'N' |
| CNCRR_FLG | STRING | When Yes indicates this Promotion Sales Report is a Concurrent Flag, and when No the Promotion Sales Report is not a Concurrent Flag. |
| LATEST\_PROMO\_SLS\_RPT\_STAT_ID | LONG | The unique identifier of the Promotion Sales Report Status Type. Often a system generated id. |
| BRND\_CTGY\_ID | LONG | A randomly assigned number that uniquely represents the 3 digit alphanumeric brand code (e.g., BUD, BDL). |
| BRND_CD | STRING | 3 digit alphanumeric brand code. The source is PPS for AB brands and the PRCMICRO table in RMR for microbrewery brands. |
| PLND\_YR\_NBR | LONG | The year the promotion is planned to be released to the wholesaler. If the current year is 2005 and the planned year is 2006, the promotion will be run in 2006. |
| SLS\_PRD\_START_DT | DATE | The beginning date of the AAP ''chunk'' (i.e., sales period) that is released to pay~ determined after concurrency (CORN) logic has been applied. The source is AAP. |
| SLS\_PRD\_END_DT | DATE | The ending date of the AAP ''chunk'' (i.e., sales period) that is released to pay~ determined after concurrency (CORN) logic has been applied. The source is AAP. |
| ALCHL\_CLSFN\_CD | STRING | The unique code representing an Alcohol Classification. ALCOHOL CLASSIFICATION classifies alcohol strength into high, light or none. |
| SLS\_DEST\_CD | STRING | US destination classification number. The state where the promotion is conducted. Uses the numeric code for the state. |
| METH_CD | STRING | Defines calc method or discount split AAP will use to pay promos. Values: P - Price promotion 50/50 split general market, M - Price promotion 50/50 split military only, N - All other calcs using split derived by dividing Max Allow Rate by Sgst Disc Amt. |
| SUBMETH_CD | STRING | Only used when Method Code = N. Identifies type of sales used by the reasonableness test. Values: C - Civilian and Military sales, M - Military only sales, or Space - If a reasonableness test is not to be performed (e.g., Special Program). |
| PROMO\_MKT\_SCOPE_CD | STRING | Identifies the target market group (retailers) for the promotion. |
| MIL\_ONLY\_FLG | STRING | Identifies whether the promotion should include sales from military only accounts. |
| QTY\_LVL\_FLG | STRING | Identifies whether the promotion contains multiply quantity levels. |
| MIN\_SLD\_QTY | LONG | The minimum quantity the Wholesaler must sell in order to receive the allowance rate. |
| MAX\_SLD\_QTY | LONG | The maximum quantity the Wholesaler must sell in order to receive the allowance rate. |
| SPCL\_PGM\_FLG | STRING | Identifies whether the promotion is a special program. Values are Y or N. |
| SPCL\_PGM\_TYP_CD | STRING | A special program is created to handle promotion exceptions. |
| AAP\_PROMO\_CRTE_DT | DATE | The date the promotion was created in the AAP payment tool. |
| AAP\_PROMO\_RETRO_DT | DATE | The Aap Promotion Retroactive Date of the Promo\`Sls\`Prd. |
| PROMO\_SLS\_RPTD\_BY\_CD | STRING | The code that identifies the Promo\`Sls\`Prd. |
| SPCL\_ALWNC\_CORN\_RLSE\_CD | STRING | The code that identifies the Special Allowance Corn Release. |
| PRE\_CALC\_REQST_TSP | LONG | The Pre-Calculate Request Timestamp of the Promo\`Sls\`Prd. |
| QTY\_DISC\_ACUMN_CD | STRING | The code that identifies the Quantity Discount Accumulation. |
| RSN\_TST\_SRCE_CD | STRING | Indicates the source of sales used in the reasonability check. |
| RSN\_TST\_QTY\_DISC\_GRP_FLG | STRING | The Reason Test Quantity Discount Group Flag of the Promo\`Sls\`Prd. |
| MAX\_PROMO\_RT | DECIMAL | The approved A-B rate to be paid for the promotion~ often referred to as Max A-B Rate. Required for all promotions. Used with Sgst Disc Amt to determine the A-B split rate. |
| SGST\_DISC\_AMT | DECIMAL | The discount amount AB suggests a wholesaler extends to retail accounts. If this value is 0, take the Max Allow Rate and multiply it by 2. |
| PLND\_AB\_SPLIT_RT | DECIMAL | The discount split that AB is to pay the wholesaler. |
| CR\_MEMO\_NBR | STRING | Credit memo number assigned to the promotion payment for the wholesaler. It is possible for the same number to be used for more than one promotion release. Value is asterisks if a credit memo not issued. AAP credit memos end with D. |
| ORIG\_PROMO\_PMT_DT | DATE | Date of the original promotion payment. |
| LATEST\_PROMO\_PMT_DT | DATE | Date of the latest promotion payment. When no adjustments have been made this will be equal to the original promotion payment date. |
| ACT\_PROMO\_RT | DECIMAL | Rate used to calculate allowance payments. Before wslr reports sales, this rate should equal Max Allow Rate. Once sales are reported, this rate is calculated by multiplying Wgtd Avg Disc Amt by Plnd AB Split Rate. Cannot exceed the Max Allow Rate. |
| TOTL\_ALWNC\_PMT_AMT | DECIMAL | Total allowance amount paid to the wholesaler for this promotion sales period. |
| WGTD\_AVG\_DISC_AMT | DECIMAL | The actual discount the wholesaler reported. |
| TOTL\_QLFY\_SLS_QTY | LONG | The Total Qualifying Sales Quantity for the promotion "chunk" to date. |
| AAP\_ZERO\_SLS_FLG | STRING | Identifies that Total Qualifying Sales Quantity was once set to zero by the AAP system. |
| WSLR\_ZERO\_SLS_FLG | STRING | Identifies that Total Qualifying Sales Quantity was once set to zero by the Wholesaler. |
| REBATE\_TYP\_CD | STRING | Specifies the type of rebate. |
| REBATE\_ALWNC\_RT | DECIMAL | The add on rate to be included in addition to the Actual Promotional Rate Amount field for allowance payments for this promotion chunk (i.e. sales period). This will be either the Price Increase Rebate (PIR) or the New York Trans-Shipping Rebate (WTR). |
| AAP\_PROMO\_ADJMT_DT | DATE | The last date that a promotion offer was adjusted in the AAP system. |
| PROMO\_RPT\_TYP_CD | STRING | Substr |
| MANL\_TYP\_CD | STRING | Substr |
| WRKSHT\_TYP\_CD | STRING | Substr |
| PROMO\_SLS\_RPTD_AMT | LONG | Actual sales at last adjustment. |
| PATSI\_SLS\_AMT | LONG | PATSI Sales Amount |
| SI\_SLS\_MO\_1\_AMT | LONG | S&I Sales Amount for the first month. When promotions cross months, the second month field is used. |
| SI\_SLS\_MO\_2\_AMT | LONG | S&I Sales Amount for the second month. Only used when a promotion sales period crosses months. |
| RSN\_TST\_SRCE\_SLS\_VOL_PCT | LONG | The Reason Test Source Sales Volume Percent of the Promotion Offer. |
| RSN\_TST\_STAT_CD | STRING | Indicates the status of this promotion''s last reasonability check. |
| CALC\_SLS\_PRD\_START\_DT | DATE | The Calculate Sales Period Start Date of the Promotion Sales Report. |
| CAL\_SLS\_PRD\_END\_DT | DATE | Substr |
| CALC\_MAX\_PROMO_RT | DECIMAL | Substr |
| CALC\_SGST\_DISC_AMT | DECIMAL | The Calculate Suggest Discount Amount of the Promotion Sales Report. |
| CALC\_REBATE\_ALWNC_RT | DECIMAL | The Calculate Rebate Allowance Rate of the Promotion Sales Report. |
| PRE\_CALC\_ESTD\_PMT\_AMT | LONG | The Pre-Calculate Estimated Payment Amount of the Promotion Sales Report. |
| PRE\_CALC\_WGTD\_CAP\_ALWNC_AMT | DECIMAL | The Pre-Calculate Weighted Cap Allowance Amount of the Promotion Sales Report. |
| PRE\_CALC\_WGTD\_CAP\_DISC_AMT | DECIMAL | The Pre-Calculate Weighted Cap Discount Amount of the Promotion Sales Report. |
| PRE\_CALC\_SLS_QTY | LONG | The Pre-Calculate Sales Quantity of the Promotion Sales Report. |
| POST\_CALC\_WGTD\_CAP\_ALWNC_AMT | DECIMAL | The Post-Calculate Weighted Cap Allowance Amount of the Promotion Sales Report. |
| POST\_CALC\_WGTD\_CAP\_DISC_AMT | DECIMAL | The Post-Calculate Weighted Cap Discount Amount of the Promotion Sales Report. |
| POST\_CALC\_SLS_QTY | LONG | The Post-Calculate Sales Quantity of the Promotion Sales Report. |
| SUBMT\_WGTD\_CAP\_ALWNC\_AMT | DECIMAL | The Submit Weighted Cap Allowance Amount of the Promotion Sales Report. |
| SUBMT\_WGTD\_CAP\_DISC\_AMT | DECIMAL | The Submit Weighted Cap Discount Amount of the Promotion Sales Report. |
| SUBMT\_SLS\_QTY | LONG | The Submit Sales Quantity of the Promotion Sales Report. |
| OVRD_FLG | STRING | When Yes indicates this Promotion Sales Report is a Override Flag, and when No the Promotion Sales Report is not a Override Flag. |
| OVRD\_RSN\_ID | LONG | The unique identifier of the Override Reason. Often a system generated id . |
| OVRD\_WGTD\_CAP\_ALWNC\_AMT | DECIMAL | The Override Weighted Cap Allowance Amount of the Promotion Sales Report. |
| OVERD\_WGTD\_CAP\_DISC\_AMT | DECIMAL | The Override Weighted Cap Discount Amount of the Promotion Sales Report. |
| OVRD\_SLS\_QTY | LONG | The Override Sales Quantity of the Promotion Sales Report. |
| WRKSHT\_WGTD\_CAP\_ALWNC\_AMT | DECIMAL | The Worksheet Weighted Cap Allowance Amount of the Promotion Sales Report. |
| WRKSHT\_WGTD\_CAP\_DISC\_AMT | DECIMAL | The Worksheet Weighted Cap Discount Amount of the Promotion Sales Report. |
| WRKSHT\_SLS\_QTY | LONG | The Worksheet Sales Quantity of the Promotion Sales Report. |
| MIX\_MATCH\_FLG | STRING | Value of "Y", allows wholesaler to choose from multiple eligible products to participate in the promotion. |
| MIX\_MATCH\_GRP_NBR | LONG | Unique identifier that is used to group discounts Sourced from MIX\`MATCH\`GRP\`NBR of the RMR.RM\`DEAL`HDR. |
| OFFER\_EDW\_START_TSP | LONG | The EDW Start Timestamp identifies the date and time the record was inserted in the EDW. The EDW timestamps are used to persist the values of this table over time. |

  

  

  

### [**EDW.STR\_BDGT\_ALL_LINECODES**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/STR_BDGT_ALL_LINECODES)
This view contains all relevant information regarding all line codes (package configurations) including any groups they may belong to.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| MKT\_LN\_CD | STRING | Market line code – a unique number identifier for a package configuration. |
| MKT\_LN\_NM | STRING | Market line name – a package configuration description (i.e 24/12 CAN 2/12). |
| PACKDRA | STRING | Denotes Package (P) or draught (D). |
| CONT\_CLASS\_CD | STRING | Abbreviation to denote if the container is a “CAN” (for can) or “BOT” (for bottle). |
| CONT\_CLASS\_NM | STRING | Full container name as Can or Bottle. |
| VOL_GROUP | STRING | Denotes the ounce size of the container. |
| CONT\_UNIT\_QTY | LONG | The number of containers within a package (i.e. 24/12 CAN 2/12 will be 12 and there are 12 units in a 12pk). |
| PRIMARY_GROUP | STRING | Denotes the primary package groupings being “Standard” (12oz), “Non-Standard”, “Singles”, “On-Premise” or “Specialty”. |
| SECONDARY_GROUP | STRING | Denotes the secondary packages groupings being “Small”, “Mid” or “Large”, “Singles”, “Specialty” or “On Premise” which are determined by the number of containers in a package. |
| PRICE_GROUP | STRING | These are CSO package groupings of how we look at packages we want to see together (i.e. 12pk 12oz, would contain 12pk cans and bottles). |
| EDW\_MOD\_TSP | LONG | Modified timestamp. |
| ETL\_RUN\_ID | LONG | ETL run ID. |

  

  

  

### [**EDW.STR\_BDGT\_ALL_BRNDS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/STR_BDGT_ALL_BRNDS)
This view contains all information regarding brands (at the marketing brand code level) and their various levels of segmentation for WAMP, Commercial Priority, Brand Family and Craft flags and more.  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BRAND | STRING | Alphanumeric brand code of 3 characters. |
| WAMP_CD | STRING | Number assigned to a WAMP (1=Super Premium, 2=Premium, 3=FMB, 4=Core Plus, 5=Core, 6=Value, 7=Non-Alc) |
| WAMP_NM | STRING | Weighted Average Market Price name, or Partition. Brands are grouped together based on similar pricing. |
| BRND\_GRP\_CD | STRING | Alphanumeric Brand group code of 5 characters which denotes a group of brands. |
| BRND\_GRP\_NM | STRING | Brand group name. |
| BRND_FLG | STRING | Denotes whether a brand falls into “ABI”, “USO” (US Other), “FPA” or “ADJ” which is how we group our brands for financial reporting. |
| BEYOND\_BEER\_FLG | STRING | Denotes if a brand is Beyond Beer by a “Y” or “N”. |
| BCBU_FLG | STRING | Denotes if the brand is CBA (B), craft (A), or our core portfolio (N). |
| LOCAL\_CRAFT\_FLG | STRING | Local craft flag. |
| MACRO\_CRAFT\_FLG | STRING | Macro craft flag. |
| IMPORT_FLG | STRING | Import flag to denote if a brand is imported (Y) or domestically produced (N). |
| CP_CD | STRING | Code assigned to a commercial priority. |
| CP_NM | STRING | Commercial priority name. |
| BRND\_STYLE\_CD | STRING | Brand style code. |
| BRND_STYLE | STRING | Brand style. |
| EDW\_MOD\_TSP | LONG | Modified timestamp. |
| ETL\_RUN\_ID | LONG | ETL run id. |

  

  

  

### [**PATSI.ALL_STATES**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/PATSI/view/ALL_STATES)
This view contains information regarding all US States, including their state codes and groupings within PATSI.

  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| STATE_CD | STRING | State code. |
| STATE\_GRP\_CD | STRING | State group code. |
| STATE\_GRP\_OWNER_NM | STRING | Wholesaler group owner name. |

  

  

  

### [**PATSI.ALL\_MKT\_LNS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/PATSI/view/ALL_MKT_LNS)
This view contains information regarding all market line codes (packages) and their package group codes within PATSI.  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| MKT\_LN\_CD | STRING | Market line code – a unique number identifier for a package configuration. |
| MKT\_LN\_GRP_CD | STRING | Market line group code. |
| MKT\_LN\_GRP\_OWNER\_NM | STRING | Market line group owner. |

  

  

  

### [**PATSI.ALL_BRNDS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/PATSI/view/ALL_BRNDS)
Project a list of all brands and brand groups from the PATSI universe

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BRAND\_SHORT\_NM | STRING | Brand short name. |
| BRND\_GRP\_CD | STRING | Brand group code. |
| IS\_VISIBLE\_FLG | STRING | Is visible flag. |
| ALLIANCE_FLG | STRING | Alliance flag. |
| MALT_FLG | STRING | Malt flag. |
| AB_FLG | STRING | Craft flag. |
| MSTR\_BRND\_CD | STRING | Master brand code. |
| NA_FLG | STRING | Non-Alcoholic flag. |
| BRND\_GRP\_OWNER_NM | STRING | Brand group owner name. |

  

  

  

### [**PATSI.BRND_MASTER**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/PATSI/view/BRND_MASTER)
View from PATSI that relates master brands to their member brands in cases where there are multiple brand codes for a single brand such as cross-brewed products.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| MBR\_BRND\_CD | STRING | Unique natural identifier of an Anheuser-Busch brand. |
| MBR\_BRND\_CTGY_ID | LONG | Unique identifier of an Anheuser-Busch brand. |

  

  

  

### [**ANALYTICS\_CELL.BRND\_FAMLY\_SGMT\_XREF**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/ANALYTICS_CELL/view/BRND_FAMLY_SGMT_XREF)
This view is used Foundry in conjunction with  the brand dataset which contains metadata on different brands, including name, family, and partition.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| BRND_NM | STRING | The name of the PPS brand. |
| TRDMK_NM | STRING | The name of a product that is trademarked under US laws for use in this country. |
| BRND\_FAMLY\_ID | LONG | The unique identifier for a brand family. |
| BRND\_FAMLY\_NM | STRING | Brand family name. |
| BIR\_SGMNT\_NM | STRING | PRODSEGMENTNM from EDW.INBOUND\_BRAND\_XREF_BASE. |
| RPT\_GRP\_MIN | LONG | Takes the minimum RPT\_GRP\_ID from RPT_GRP. |
| BRND\_PRTTN\_ID | LONG | When RPT\_GRP\_ID is null, checks to see if BRND\_FAMLY\_ID is 7859. If it is, set BRND\_PRTTN\_ID to 7890, otherwise 1111. If RPT\_GRP\_ID is not null, return RPT\_GRP\_ID. |
| WAMP_NM | STRING | Max RPT\_GRP\_NM from RPT_GRP. |
| LOW_FLG | LONG | Low alcohol flag. ALCHL\_CLSFN\_CD < 5. |
| NON\_ALC\_FLG | LONG | Non-alcoholic flag. Calculated based off of ALCHL\_STRENGTH\_CD = 0. |
| BRND\_PRTTN\_NM | STRING | Brand partition name. |
| HIGH\_LVL\_BRND\_FAMLY\_NM | STRING | High level brand family name. |
| WAMP_CD | STRING | Substring of WAMP name column. |

  

  

  

Published on 05/07/21 by A. Stites, content by J. Lich.
