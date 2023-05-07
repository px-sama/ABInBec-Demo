---
title: Historical Promotions
tags:
    - Legacy 
    - Prices
    - Sales
description: Historical pricing Promotions offered by AB to wholesalers for reimbursement
---
# Historical Promotions  

This dataset contains a materialized view that provides detailed information on historical pricing Promotions offered by AB to wholesalers for reimbursement. These views are used in conjunction with the [Wholesaler](https://beertech-certified-datasets.azurewebsites.net/docs/Wholesaler.html) and [Brand](https://beertech-certified-datasets.azurewebsites.net/docs/Product-Brand.html) data sets to populate reporting tools used by the CASE Price Ops team to validate reimbursement payments to wholesalers for AB supported price promotion discounts based on specific time, product and geographic restrictions.  
  

### **[ABI_WH.BIREPORTING.PROMOTIONPAYMENTLIFECYCLE](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/BIREPORTING/view/PROMOTIONPAYMENTLIFECYCLE)**
This view contains historical records of price promotions supported and reimbursed by AB to wholesalers. A promotional discount offered by AB and eligible for reimbursement is defined in scope by time, brand/package, and geography (state, county, channel, chain or individual retailer). When reported sales records meet the matching criteria defined in the parameters of the promotion they are captured and included in the Promo Sales Report data which is used to calculate how much money is owed to each wholesaler for the promotions they chose to participate.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| PRC\_PROMO\_ID | NUMBER(15,0) | PRC Promotion ID of the promotion |
| BRWY\_CUST\_NBR | VARCHAR(5) | Unique 5 digit AB wholesaler number |
| PKG\_GRP\_CD | VARCHAR(15) | Packaging Group Code for product on Promotion |
| BRWY\_CUST\_PARTY_ID | NUMBER(15,0) | Unique enterprise ID for wholesaler. Can be joined to WSLR.WSLR\_PARTY\_ID |
| PROMO\_SLS\_RPT\_CRTE\_TSP | TIMESTAMP_NTZ(9) | Promotion Sales Receipt Creation Timestamp |
| PROMO\_CNCLD\_FLG | VARCHAR(1) | Promotion Cancelled Flag |
| CPM\_PROMO\_NBR | VARCHAR(8) | Competitive Promotions Monitoring Promo Number |
| AAP_NBR | VARCHAR(8) | Number for promotion in AAP (Automated Allowance Payment) |
| PROMO_DSC | VARCHAR(20) | Promotion Description |
| WSLR\_CNCLD\_FLG | VARCHAR(1) | Wholesaler Cancelled Flag |
| CNCRR_FLG | VARCHAR(1) | Flag indicating if Promoton Sals Report is concurrent. |
| LATEST\_PROMO\_SLS\_RPT\_STAT_ID | NUMBER(3,0) | Latest Promotional Sales Report Status ID |
| BRND\_CTGY\_ID | NUMBER(15,0) | Uniqiue entperise value for Brand on promotion. Can be joined to BRND.BRND\_CTGY\_ID |
| BRND_CD | VARCHAR(3) | Unique 3 digit Brand Code for Brand on promotion |
| PLND\_YR\_NBR | NUMBER(4,0) | Planned Year Number of promotion |
| SLS\_PRD\_START_DT | DATE | Sales Production Start Date |
| SLS\_PRD\_END_DT | DATE | Sales Production End date |
| ALCHL\_CLSFN\_CD | VARCHAR(15) | Alcohol Classification Code for product on Promotion |
| SLS\_DEST\_CD | VARCHAR(2) | State Code of state in which Promotion is offered |
| METH_CD | VARCHAR(1) | Defines discount split AAP will use to pay promos (P = 50/50, M = 50/50 Military, N = Max Allowed Rate/Suggested Disc Amt) |
| SUBMETH_CD | VARCHAR(1) | Only valid when METH_CD = N to validate reasonableness of promotion |
| PROMO\_MKT\_SCOPE_CD | VARCHAR(1) | IDs the retailers targeted for the promotion. G - General Market, P - On-Premise Accounts, F - Off-Premise Accounts, C - Accounts within a specific county, and R - Venue Specific. |
| MIL\_ONLY\_FLG | VARCHAR(1) | Military Only Flag |
| QTY\_LVL\_FLG | VARCHAR(1) | Quantity Level Flag |
| MIN\_SLD\_QTY | NUMBER(4,0) | Minimum Sold Quantity required for Promotion |
| MAX\_SLD\_QTY | NUMBER(4,0) | Maximum Sold Quantity allowed for Promotion |
| SPCL\_PGM\_FLG | VARCHAR(1) | Special Program Flag |
| SPCL\_PGM\_TYP_CD | VARCHAR(3) | Special Program Type Code |
| AAP\_PROMO\_CRTE_DT | DATE | The date the promotion was created in the AAP payment tool |
| AAP\_PROMO\_RETRO_DT | DATE | The AAP Promotion Retroactive Date of the Promo |
| PROMO\_SLS\_RPTD\_BY\_CD | VARCHAR(4) | Promotional Sales Reported by Code |
| SPCL\_ALWNC\_CORN\_RLSE\_CD | VARCHAR(1) | The code that identifies the Special Allowance Corn Release |
| PRE\_CALC\_REQST_TSP | TIMESTAMP_NTZ(9) | Pre-Calc Request Timestamp |
| QTY\_DISC\_ACUMN_CD | VARCHAR(15) | Code that identifies the Quantity Discount Code |
| RSN\_TST\_SRCE_CD | VARCHAR(5) | Indicates the source of sales used in the reasonability check. Valid values are S&I (Monthly Sales) and PATSI (Weekly Sales) |
| RSN\_TST\_QTY\_DISC\_GRP_FLG | VARCHAR(1) | Reasonable Tst Quantity Discount Group Flag |
| MAX\_PROMO\_RT | NUMBER(9,3) | Maximum allowed Promotion Rate |
| SGST\_DISC\_AMT | NUMBER(9,3) | Suggested Discount Amount |
| PLND\_AB\_SPLIT_RT | NUMBER(5,2) | Planned AB Split Rate (how much of the promotion AB will reimburse) |
| CR\_MEMO\_NBR | VARCHAR(7) |     |
| ORIG\_PROMO\_PMT_DT | DATE | Original Promotional Payment Date |
| LATEST\_PROMO\_PMT_DT | DATE | Latest Promotional Payment Date |
| ACT\_PROMO\_RT | NUMBER(9,3) | Actual Promotional Rate |
| TOTL\_ALWNC\_PMT_AMT | NUMBER(12,2) | Total Allowance Payment Amount |
| WGTD\_AVG\_DISC_AMT | NUMBER(9,3) | Weighted Average Discount Amount |
| TOTL\_QLFY\_SLS_QTY | NUMBER(10,0) | Total Qualifying Sales Quantity |
| AAP\_ZERO\_SLS_FLG | VARCHAR(1) | Automated Allowance Payment Zero Sales Flag |
| WSLR\_ZERO\_SLS_FLG | VARCHAR(1) | Wholesaler Zero Sales Flag |
| REBATE\_TYP\_CD | VARCHAR(3) | Rebate Type Code |
| REBATE\_ALWNC\_RT | NUMBER(9,3) | Rebate Allowance Rate |
| AAP\_PROMO\_ADJMT_DT | DATE | Automated Allowance Payment Promotional Adjustment Date |
| PROMO\_RPT\_TYP_CD | VARCHAR(2) | Promotional Report Type Code |
| MANL\_TYP\_CD | VARCHAR(15) | Manual Type Code |
| WRKSHT\_TYP\_CD | VARCHAR(15) | Worksheet Type Code |
| PROMO\_SLS\_RPTD_AMT | NUMBER(9,0) | Promo Sales Reported Amount |
| PATSI\_SLS\_AMT | NUMBER(9,0) | PATSI Sales Amount |
| SI\_SLS\_MO\_1\_AMT | NUMBER(9,0) | Sales Amount for the first month of the promotion |
| SI\_SLS\_MO\_2\_AMT | NUMBER(9,0) | Sales Amount for the second month if the promotion crosses months |
| RSN\_TST\_SRCE\_SLS\_VOL_PCT | NUMBER(3,0) | Reason Test Source Sales Volume Percentage |
| RSN\_TST\_STAT_CD | VARCHAR(4) | Reason Test Status Code |
| CALC\_SLS\_PRD\_START\_DT | DATE | Calculated Sales Prod Start Date |
| CALC\_SLS\_PRD\_END\_DT | DATE | Calculated Sales Prod End Date |
| CALC\_MAX\_PROMO_RT | NUMBER(9,3) | Calculated Maximum Promotional Rate |
| CALC\_SGST\_DISC_AMT | NUMBER(9,3) | Calculated Suggested Discount Amount |
| CALC\_REBATE\_ALWNC_RT | NUMBER(9,3) | Calculated Rebate Allowance Rate |
| PRE\_CALC\_ESTD\_PMT\_AMT | NUMBER(9,0) | Precalc Estimated Payment Amount |
| PRE\_CALC\_WGTD\_CAP\_ALWNC_AMT | NUMBER(7,3) | Precalc Weighted Cap Allowance Amount |
| PRE\_CALC\_WGTD\_CAP\_DISC_AMT | NUMBER(8,3) | Precalc Weighted Cap Discount Amount |
| PRE\_CALC\_SLS_QTY | NUMBER(9,0) | Precalc Sales Quantity |
| POST\_CALC\_WGTD\_CAP\_ALWNC_AMT | NUMBER(7,3) | Post Calc Weighted Cap Allowance Amount |
| POST\_CALC\_WGTD\_CAP\_DISC_AMT | NUMBER(8,3) | Post Calc Weighted Cap Discount Amount |
| POST\_CALC\_SLS_QTY | NUMBER(9,0) | Post Calc Sales Quantity |
| SUBMT\_WGTD\_CAP\_ALWNC\_AMT | NUMBER(7,3) | Submitted Weighted Cap Allowance Amount |
| SUBMT\_WGTD\_CAP\_DISC\_AMT | NUMBER(8,3) | Submitted Weighted Cap Discount Amount |
| SUBMT\_SLS\_QTY | NUMBER(9,0) | Submitted Sales Quantity |
| OVRD_FLG | VARCHAR(1) | Override Flag |
| OVRD\_RSN\_ID | NUMBER(3,0) | Override Reason ID |
| OVRD\_WGTD\_CAP\_ALWNC\_AMT | NUMBER(7,3) | Overright Weighted Cap Allowance Amount |
| OVRD\_WGTD\_CAP\_DISC\_AMT | NUMBER(8,3) | Overright Weighed Cap Discount Amount |
| OVRD\_SLS\_QTY | NUMBER(9,0) | Override Sales Quantity |
| WRKSHT\_WGTD\_CAP\_ALWNC\_AMT | NUMBER(7,3) | Worksheet Weighted Cap Allowance Amount |
| WRKSHT\_WGTD\_CAP\_DISC\_AMT | NUMBER(8,3) | Worksheet Weighted Cap Discount Amount |
| WRKSHT\_SLS\_QTY | NUMBER(9,0) | Worksheet Sales Quantity |
| MIX\_MATCH\_FLG | VARCHAR(1) | Mix and Match Flag |
| PROMO\_STATHIST\_JOIN_KEY | VARCHAR(16777216) | USED FOR DATA MODELING IGNORE FIELD |
| MIX\_MATCH\_GRP_NBR | NUMBER(11,0) | Mix and Match Group Number |
| OVRD\_OVR\_UNDR_FLG | VARCHAR(11) | Flag indicating if override is over or under the Promotion cap |

  

  
  

  

  

  
Published on 6/2/21 by A. Stites
