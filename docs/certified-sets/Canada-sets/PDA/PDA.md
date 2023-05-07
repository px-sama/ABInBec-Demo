---
title: PDA
slug: /PDA
tags:
    - PDA
    - Canada
    - Contract
    - Quebec
---

# PDA 

## Introduction

PDA stand's for "Plan d'Affaire" which means Business plan or Contract.
PDA is an Salesforce application for Quebec province to manage the contracts with POC.
The data is pulled in Snowflake through Mulesoft applications "ABI-CA-PDA". Its is used by Quebec team to analyses the earlier contracts with POC and its performance . It also helps in analyzing contracts in pipeline and approve them. 

## PDA Application Views
These views are created to be used in downstream applications like AAS, Dataflows , Power BI etc.

### PDA Account
This view is created to provide details about PDA account and its attributes required for PDA Dashboard


View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_AAS_REF_PDA_ACCOUNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_AAS_REF_PDA_ACCOUNT)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_AAS_REF_PDA_ACCOUNT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_REF_PDA_ACCOUNT)<br/>



|Field Name	            |	Data Type	      |	Comment
|-	                     |	-	               |	-
|ID                     |	VARCHAR(18)	      |	PDA Account Key provided by PDA
|IDEAL                  |	VARCHAR(225)      |	POC Code for defined in MDM
|TERRITORY_NAME         |	VARCHAR(255)      |	Territory Name to which POC is assigned
|DISTRICT               |	VARCHAR(100)      |	District Short Name to which POC is assigned
|CHAINE                 |	VARCHAR(100) 	   |	POC Chain as per Liste Ultime
|REGROUPEMENT           |	VARCHAR(50) 	   |	POC Regroupement as per Liste Ultime
|SEGMENT                |	VARCHAR(255)      |	POC Segment as per Liste Ultime
|CLUSTER                |	VARCHAR(100)      |	POC Cluster as per Liste Ultime
|TYPE                   |  VARCHAR           |  POC TYPE (CAD/CSP) as per Liste Ultime



### PDA Data
This view is created to provide details about PDA Annual POC budget along with its Plan 1 and Plan 2 Header details to be shown in PDA dashboard.

View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.APP_AAS_PDA_DATA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/APP_AAS_PDA_DATA)<br/>
EDW View Name &emsp;: [EDW.CSDI_APP_AAS_PDA_DATA](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_AAS_PDA_DATA)<br/>


|Field Name	|	Data Type	|	Comment
|-	|	-	|	-
|ANNUAL_POC_NAME	|	VARCHAR(255)	|	Annual POC name- Poc Name Concatenated with Year
|PDA_POC_C	|	VARCHAR(18)	|	Account Id Provided from PDA
|PDA_SHIP_TO_NAME_C	|	VARCHAR(255)	|	Ship To Account Name
|PDA_CUSTOMER_PRIORITIZATION_C	|	VARCHAR(255)	|	Customer Prioritization
|PDA_PLAN_INVESTMENT_TOTAL_C	|	NUMBER	|	Total Planned Investment
|PDA_PLAN_VOLUME_TOTAL_C	|	NUMBER	|	Total Planned Volume
|PDA_PLAN_COST_PER_CASE_C	|	NUMBER	|	Planned Cost Per Case
|PDA_PROPOSED_CONTRACT_INVST_C	|	NUMBER	|	Investment as per Proposed Contract
|PDA_PROPOSED_CONTRACT_VOL_C	|	NUMBER	|	Volume as per Proposed Contract
|PDA_CONTRACT_VOLUME_C	|	NUMBER	|	Volume as per Contract
|PDA_CONTRACT_COST_PER_CASE_C	|	NUMBER	|	Cost Per Case as per Contract
|PDA_CONTRACT_INVST_TOTAL_C	|	NUMBER	|	Total Investment as per Contract
|PDA_CONTRACT_VOLUME_TOTAL_C	|	NUMBER	|	Total Volume as per Contract
|PDA_CONTRACT_INVST_VARIANCE_C	|	NUMBER	|	Investment Variance as per Contract
|PDA_CONTRACT_VOL_VARIANCE_C	|	NUMBER	|	Volume Variance as per Contract
|PDA_REGION_TYPE_FR_C	|	VARCHAR(255)	|	Region Type
|PDA_INDUSTRY_TYPE_FR_C	|	VARCHAR(255)	|	Industry Type
|PDA_POC_YEAR_C	|	VARCHAR(255)	|	PDA POC Year
|PDA_P2_OPEN_MONTH_C	|	NUMBER	|	Plan 2 Open Month
|PDA_BUDGET_INVESTMENT_C	|	NUMBER	|	Budgeted Investment
|PDA_BUDGET_VOLUME_C	|	NUMBER	|	Budgeted Volume
|PDA_BUDGET_COST_PER_CASE_C	|	NUMBER	|	Budgeted Cost Per Case
|P1_B4_HDR_ID	|	VARCHAR(16777216)	|	Plan 1 Before Header ID
|P1_B4_HDR_NAME	|	VARCHAR(16777216)	|	Plan 1 Before Header Name
|P1_B4_PSTN	|	VARCHAR(16777216)	|	Plan 1 Before Header Position
|P1_B4_TYPE	|	VARCHAR(16777216)	|	Plan 1 Before Header Type
|P1_B4_PSTN_NO	|	NUMBER	|	Plan 1 Before Header Position Number
|P1_B4_STATUS	|	VARCHAR(16777216)	|	Plan 1 Before Header Status
|P1_B4_APPRVR_ROLE	|	VARCHAR(16777216)	|	Plan 1 Before Header Approval Role
|P1_B4_START_DT	|	DATE	|	Plan 1 Before Header Start Date
|P1_B4_END_DT	|	DATE	|	Plan 1 Before Header End Date
|P1_B4_TOT_INVSTMT_VAL	|	NUMBER	|	Plan 1 Before Header Total Investment
|P1_B4_TOT_VOL	|	NUMBER	|	Plan 1 Before Header Total Volume
|P1_B4_TOT_COST_PER_CASE	|	NUMBER	|	Plan 1 Before Header Cost Per Case
|P1_B4_TOT_FIXED_PYMT	|	NUMBER	|	Plan 1 Before Header Total Fixed Payment
|P1_B4_TOT_COST_PER_CASE2	|	NUMBER	|	Plan 1 Before Header Cost Per Case 2
|P1_B4_BEER	|	NUMBER	|	Plan 1 Before Header BEER Volume
|P1_B4_DECOUVERTE	|	NUMBER	|	Plan 1 Before Header  DECOUVERTE Volume
|P1_B4_ALCOMALT	|	NUMBER	|	Plan 1 Before Header ALCOMALT Volume
|P1_B4_SANS_ALCOOL	|	NUMBER	|	Plan 1 Before Header SAN ALCOOL Volume
|P1_B4_ARCHIBALD|	NUMBER	|	Plan 1 Before Header Archibald Volume
|P1_B4_PDA_REASON	|	VARCHAR(16777216)	|	Plan 1 Before Header Reason
|P1_AFTR_HDR_ID	|	VARCHAR(16777216)	|	Plan 1 After Header ID
|P1_AFTR_HDR_NAME	|	VARCHAR(16777216)	|	Plan 1 After Header Name
|P1_AFTR_PSTN	|	VARCHAR(16777216)	|	Plan 1 After Header Position
|P1_AFTR_TYPE	|	VARCHAR(16777216)	|	Plan 1 After Header Type
|P1_AFTR_PSTN_NO	|	NUMBER	|	Plan 1 After Header Position Number
|P1_AFTR_STATUS	|	VARCHAR(16777216)	|	Plan 1 After Header Status
|P1_AFTR_APPRVR_ROLE	|	VARCHAR(16777216)	|	Plan 1 After Header Approval Role
|P1_AFTR_START_DT	|	DATE	|	Plan 1 After Header Start Date
|P1_AFTR_END_DT	|	DATE	|	Plan 1 After Header End Date
|P1_AFTR_TOT_INVSTMT_VAL	|	NUMBER	|	Plan 1 After Header Total Investment
|P1_AFTR_TOT_VOL	|	NUMBER	|	Plan 1 After Header Total Volume
|P1_AFTR_TOT_COST_PER_CASE	|	NUMBER	|	Plan 1 After Header Cost Per Case
|P1_AFTR_TOT_FIXED_PYMT	|	NUMBER	|	Plan 1 AFTER Header Total Fixed Payment
|P1_AFTR_TOT_COST_PER_CASE2	|	NUMBER	|	Plan 1 AFTER Header Cost Per Case 2
|P1_AFTR_BEER	|	NUMBER	|	Plan 1 AFTER Header BEER Volume
|P1_AFTR_DECOUVERTE	|	NUMBER	|	Plan 1 AFTER Header  DECOUVERTE Volume
|P1_AFTR_ALCOMALT	|	NUMBER	|	Plan 1 AFTER Header ALCOMALT Volume
|P1_AFTR_SANS_ALCOOL	|	NUMBER	|	Plan 1 AFTER Header SAN ALCOOL Volume
|P1_AFTR_ARCHIBALD|	NUMBER	|	Plan 1 AFTER Header Archibald Volume
|P1_AFTR_PDA_REASON	|	VARCHAR(16777216)	|	Plan 1 AFTER Header Reason
|P1_PSTN_CHNG_1	|	VARCHAR(16777216)	|	Plan 1 position change (Position Before "-" Postion After)
|P1_PSTN_CHNG_2	|	VARCHAR(16777216)	|	Plan 1 position change (Position number Before " à " Postion Number After)
|P2_B4_HDR_ID	|	VARCHAR(16777216)	|	Plan 2 Before Header ID
|P2_B4_HDR_NAME	|	VARCHAR(16777216)	|	Plan 2 Before Header Name
|P2_B4_PSTN	|	VARCHAR(16777216)	|	Plan 2 Before Header Position
|P2_B4_TYPE	|	VARCHAR(16777216)	|	Plan 2 Before Header Type
|P2_B4_PSTN_NO	|	NUMBER	|	Plan 2 Before Header Position Number
|P2_B4_STATUS	|	VARCHAR(16777216)	|	Plan 2 Before Header Status
|P2_B4_APPRVR_ROLE	|	VARCHAR(16777216)	|	Plan 2 Before Header Approval Role
|P2_B4_START_DT	|	DATE	|	Plan 2 Before Header Start Date
|P2_B4_END_DT	|	DATE	|	Plan 2 Before Header End Date
|P2_B4_TOT_INVSTMT_VAL	|	NUMBER	|	Plan 2 Before Header Total Investment
|P2_B4_TOT_VOL	|	NUMBER	|	Plan 2 Before Header Total Volume
|P2_B4_TOT_COST_PER_CASE	|	NUMBER	|	Plan 2 Before Header Cost Per Case
|P2_B4_TOT_FIXED_PYMT	|	NUMBER	|	Plan 2 Before Header Total Fixed Payment
|P2_B4_TOT_COST_PER_CASE2	|	NUMBER	|	Plan 2 Before Header Cost Per Case 2
|P2_B4_BEER	|	NUMBER	|	Plan 2 Before Header BEER Volume
|P2_B4_DECOUVERTE	|	NUMBER	|	Plan 2 Before Header  DECOUVERTE Volume
|P2_B4_ALCOMALT	|	NUMBER	|	Plan 2 Before Header ALCOMALT Volume
|P2_B4_SANS_ALCOOL	|	NUMBER	|	Plan 2 Before Header SAN ALCOOL Volume
|P2_B4_ARCHIBALD|	NUMBER	|	Plan 2 Before Header Archibald Volume
|P2_B4_PDA_REASON	|	VARCHAR(16777216)	|	Plan 2 Before Header Reason
|P2_AFTR_HDR_ID	|	VARCHAR(16777216)	|	Plan 2 After Header ID
|P2_AFTR_HDR_NAME	|	VARCHAR(16777216)	|	Plan 2 After Header Name
|P2_AFTR_PSTN	|	VARCHAR(16777216)	|	Plan 2 After Header Position
|P2_AFTR_TYPE	|	VARCHAR(16777216)	|	Plan 2 After Header Type
|P2_AFTR_PSTN_NO	|	NUMBER	|	Plan 2 After Header Position Number
|P2_AFTR_STATUS	|	VARCHAR(16777216)	|	Plan 2 After Header Status
|P2_AFTR_APPRVR_ROLE	|	VARCHAR(16777216)	|	Plan 2 After Header Approval Role
|P2_AFTR_START_DT	|	DATE	|	Plan 2 After Header Start Date
|P2_AFTR_END_DT	|	DATE	|	Plan 2 After Header End Date
|P2_AFTR_TOT_INVSTMT_VAL	|	NUMBER	|	Plan 2 After Header Total Investment
|P2_AFTR_TOT_VOL	|	NUMBER	|	Plan 2 After Header Total Volume
|P2_AFTR_TOT_COST_PER_CASE	|	NUMBER	|	Plan 2 After Header Cost Per Case
|P2_AFTR_TOT_FIXED_PYMT	|	NUMBER	|	Plan 2 AFTER Header Total Fixed Payment
|P2_AFTR_TOT_COST_PER_CASE2	|	NUMBER	|	Plan 2 AFTER Header Cost Per Case 2
|P2_AFTR_BEER	|	NUMBER	|	Plan 2 AFTER Header BEER Volume
|P2_AFTR_DECOUVERTE	|	NUMBER	|	Plan 2 AFTER Header  DECOUVERTE Volume
|P2_AFTR_ALCOMALT	|	NUMBER	|	Plan 2 AFTER Header ALCOMALT Volume
|P2_AFTR_SANS_ALCOOL	|	NUMBER	|	Plan 2 AFTER Header SAN ALCOOL Volume
|P2_AFTR_ARCHIBALD|	NUMBER	|	Plan 2 AFTER Header Archibald Volume
|P2_AFTR_PDA_REASON	|	VARCHAR(16777216)	|	Plan 2 AFTER Header Reason
|P2_PSTN_CHNG_1	|	VARCHAR(16777216)	|	Plan 2 position change (Position Before "-" Postion After)
|P2_PSTN_CHNG_2	|	VARCHAR(16777216)	|	Plan 2 position change (Position number Before " à " Postion Number After)
|P1_B4_HDR_COMMENT	|	VARCHAR(16777216)	|	Plan 1 Before Header Comment
|P2_B4_HDR_COMMENT	|	VARCHAR(16777216)	|	Plan 2 Before Header Comment
|P1_AFTR_HDR_COMMENT	|	VARCHAR(16777216)	|	Plan 1 After Header Comment
|P2_AFTR_HDR_COMMENT	|	VARCHAR(16777216)	|	Plan 2 After Header Comment
|P1_B4_RTD_SPACE|	NUMBER	|	Plan 1 Before RTD Space
|P2_B4_RTD_SPACE|	NUMBER	|	Plan 2 Before RTD Space
|P1_AFTR_RTD_SPACE|	NUMBER	|	Plan 1 AFTER RTD Space
|P2_AFTR_RTD_SPACE|	NUMBER	|	Plan 2 AFTER RTD Space
|P1_B4_CRAFT_SPACE|	NUMBER	|	Plan 1 Before Craft Space
|P2_B4_CRAFT_SPACE|	NUMBER	|	Plan 2 Before Craft Space
|P1_AFTR_CRAFT_SPACE|	NUMBER	|	Plan 1 AFTER Craft Space
|P2_AFTR_CRAFT_SPACE|	NUMBER	|	Plan 2 AFTER Craft Space
|P1_B4_BEER_SPACE|	NUMBER	|	Plan 1 Before BEER Space
|P2_B4_BEER_SPACE|	NUMBER	|	Plan 2 Before BEER Space
|P1_AFTR_BEER_SPACE|	NUMBER	|	Plan 1 AFTER BEER Space
|P2_AFTR_BEER_SPACE|	NUMBER	|	Plan 2 AFTER BEER Space
|P1_POSN_CHNG	|	VARCHAR(100)	|	Plan 1 Position Change Code
|P2_POSN_CHNG	|	VARCHAR(100)	|	Plan 2 Position Change Code
|INCLUS	|	NUMBER	|	Included ( Has header assigned to Annual Poc View)
|EN_RETARD	|	NUMBER	|	Late ( Plan 2 After Start Date is before  todays date)
|P1_CREE	|	NUMBER	|	Plan 1 Created
|P2_CREE	|	NUMBER	|	Plan 2 Created
|P2_NB	|	NUMBER	|	Number of Plan 2 Header
