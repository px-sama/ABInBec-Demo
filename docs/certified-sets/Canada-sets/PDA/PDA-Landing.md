---
title: PDA Landing Tables/Views
slug: /PDA/pda-landing
tags:
    - PDA
    - Canada
    - Contract
    - Quebec
---

## PDA Landing Tables and Views

All the PDA tables listed in control table (CSDI.PDA_STG_CNTRL) is loaded in Snowflake via Mulesoft job (ABI-CA-PDA).
All the tables are truncated and loaded daily from Salesforce.

Below are the list of landing Tables:

## PDA Accounts
   Table Name :  CSDI_SF_S.PDA_ACCOUNT<br/>
   View Name :  CSDI_SF.PDA_ACCOUNT<br/>

This is the landing table for PDA account and contains all the type  of Accounts like POC, Ship to, Sold to, Payers, B2C account , outlet etc.

Field Name	|	Data Type	|	Comment
|-	|	-	|	-
ID	|	VARCHAR(18)	|	PDA Account Key Provided by PDA
NAME	|	VARCHAR(255)	|	PDA Account Name
CREATEDBYID	|	VARCHAR(18)	|	Creators User Id
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation of record in Salesforce
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Id of user who last modified the record
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of last Modification in Salesforce
OWNERID	|	VARCHAR(18)	|	User Id of Owner of Account
ONCALL_RECORD_TYPE_C	|	VARCHAR(255)	|	Type of Account
PHF_BUSINESS_ID_C	|	VARCHAR(255)	|	POC code defined in MDM
PHF_BUSINESS_NAME_C	|	VARCHAR(255)	|	POC Name defined in MDM
PAY_TO_ACCOUNT_C	|	VARCHAR(18)	|	Account ID for Payer account
SHIP_TO_ACCOUNT_C	|	VARCHAR(18)	|	Account ID for Ship To Account
SOLD_TO_ACCOUNT_C	|	VARCHAR(18)	|	Account ID for Sold To Account
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Date and Time of Last update in Snowflake

## PDA Annual POC Budget
   Table Name :  CSDI_SF_S.PDA_ANNUAL_POC_BUDGET_C<br/>
   View Name :  CSDI_SF.PDA_ANNUAL_POC_BUDGET_C<br/>

This is the landing table for PDA Annual POC Budget and contains the annual budgets for each PDA customer/POC. The PDA Headers (Plan 1, Plan 2) roll up to this object.

Field Name	                |	Data Type	|	Comment
|-	|	-	|	-
PDA_BUDGET_COST_PER_CASE_C	|	NUMBER	        |	Cost per Case in PDA budget for Annual POC
PDA_BUDGET_INVESTMENT_C	|	NUMBER	        |	PDA budget Investment for Annual POC
PDA_BUDGET_VOLUME_C	        |	NUMBER	        |	PDA budget Volume for Annual POC
PDA_CHG_OF_OWNRSHP_IN_PROG_C	|	NUMBER	        |	Change Of Ownership in Progress for Annual POC
PDA_CONTRACT_COST_PER_CASE_C	|	NUMBER	        |	Cost per Case in PDA Contract for Annual POC
PDA_CONTRACT_INVESTMENT_C	|	NUMBER	        |	PDA Contract  Investment for Annual POC
PDA_CONTRACT_INVST_TOTAL_C	|	NUMBER	        |	Total Investment for Annual POC as per PDA Contract
PDA_CONTRACT_INVST_VARIANCE_C	|	NUMBER	        |	Investment Variance for Annual POC as per PDA Contract
PDA_CONTRACT_VOLUME_C	        |	NUMBER	        |	PDA Contract Volume for Annual POC
PDA_CONTRACT_VOLUME_TOTAL_C	|	NUMBER	        |	Total Volume for Annual POC as per PDA Contract
PDA_CONTRACT_VOL_VARIANCE_C	|	NUMBER	        |	Volume Variance for Annual POC as per PDA Contract
PDA_CUSTOMER_PLACEHOLDER_C	|	VARCHAR(18)	|	PDA Customer Placeholder
PDA_CUSTOMER_PRIORITIZATION_C	|	VARCHAR(255)	|	PDA Customer Prioritization in English
PDA_CUSTOMER_PRIORITIZN_FR_C	|	VARCHAR(255)	|	PDA Customer Prioritization in French
PDA_DEC_SALES_C	        |	NUMBER	        |	PDA Sales in DEC for the Contract year
PDA_DEC_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in DEC for the Contract year
PDA_FEB_SALES_C	        |	NUMBER	        |	PDA Sales in FEB for the Contract year
PDA_FEB_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in FEB for the Contract year
PDA_HEADER_CLONING_C	        |	NUMBER	        |	Identifier to show PDA header Cloning
PDA_IS_CHANGE_OF_OWNERSHIP_C	|	NUMBER	        |	Identifier to show Change in PDA Ownership
PDA_IS_NEW_ACCOUNT_C	        |	NUMBER	        |	Identifier to Show If this is a new Account
PDA_JAN_SALES_C	        |	NUMBER	        |	PDA Sales in JAN for the Contract year
PDA_JAN_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in JAN for the Contract year
PDA_JUL_SALES_C	        |	NUMBER	        |	PDA Sales in JUL for the Contract year
PDA_JUL_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in JUL for the Contract year
PDA_JUN_SALES_C	        |	NUMBER	        |	PDA Sales in JUN for the Contract year
PDA_JUN_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in JUN for the Contract year
PDA_MAR_SALES_C	        |	NUMBER	        |	PDA Sales in MAR for the Contract year
PDA_MAR_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in MAR for the Contract year
PDA_MAY_SALES_C	        |	NUMBER	        |	PDA Sales in MAY for the Contract year
PDA_MAY_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in MAY for the Contract year
PDA_NOV_SALES_C	        |	NUMBER	        |	PDA Sales in NOV for the Contract year
PDA_NOV_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in NOV for the Contract year
PDA_OCT_SALES_C	        |	NUMBER	        |	PDA Sales in OCT for the Contract year
PDA_OCT_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in OCT for the Contract year
PDA_PLAN_APPROVED_INVST_C	|	NUMBER	        |	Planned Approved investment
PDA_PLAN_APPROVED_VOLUME_C	|	NUMBER	        |	Planned Approved Volume
PDA_PLAN_COST_PER_CASE_C	|	NUMBER	        |	Planned Cost Per Case
PDA_PLAN_INVESTMENT_C	        |	NUMBER	        |	Planned Investment
PDA_PLAN_INVESTMENT_TOTAL_C	|	NUMBER	        |	Planned Total Investment
PDA_PLAN_INVST_VARIANCE_C	|	NUMBER	        |	Planned Investment Variance
PDA_PLAN_VOLUME_C	        |	NUMBER	        |	Planned volume
PDA_PLAN_VOLUME_TOTAL_C	|	NUMBER	        |	Planned Total Volume
PDA_PLAN_VOLUME_VARIANCE_C	|	NUMBER	        |	Planned Volume Variance
PDA_POC_BUDGET_C	        |	NUMBER	        |	POC budget
PDA_POC_PREMISE_C	        |	VARCHAR(255)	|	POC Premise
PDA_POC_PREMISE_EN_C	        |	VARCHAR(255)	|	POC Premise in English
PDA_POC_YEAR_C	                |	VARCHAR(255)	|	POC Year in String
PDA_POC_YEAR_NUMBER_C	        |	NUMBER	        |	POC Year in Number
PDA_PREV_YR_ANNUAL_POC_BDGT_C	|	VARCHAR(18)	|	Previous Year Annual POC Budget Code
PDA_PREV_YR_POC_BUDGET_C	|	NUMBER	        |	Previous Year Annual POC Budget
PDA_PREV_YR_POC_BUDGET_NAME_C	|	VARCHAR(255)	|	Previous Year Annual POC Budget Name
PDA_PROPOSED_CONTRACT_INVST_C	|	NUMBER	        |	Proposed PDA Contract Investment
PDA_PROPOSED_CONTRACT_VOL_C	|	NUMBER	        |	Proposed PDA Contract Volume
PDA_PROPOSED_PLANNED_INVST_C	|	NUMBER	        |	Proposed PDA Planned Investment
PDA_PROPOSED_PLANNED_VOL_C	|	NUMBER	        |	Proposed PDA Planned Volume
PDA_REGROUP_ANNL_TERR_BDGT_C	|	VARCHAR(18)	|	Regrouped Annual Territory budget Code
PDA_SAP_MARKED_FOR_DELETE_C	|	NUMBER	        |	Identifier for marked as deleted in SAP
PDA_SEP_SALES_C	        |	NUMBER	        |	PDA Sales in SEP for the Contract year
PDA_SEP_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in SEP for the Contract year
PDA_SHIP_TO_NAME_C	        |	VARCHAR(255)	|	Ship To POC name
PDA_POC_C	                |	VARCHAR(18)	|	PDA Account ID
PDA_SKU_GROUP_C	        |	VARCHAR(18)	|	PDA SKU Group ID
PDA_SOLD_TO_POC_C	        |	VARCHAR(18)	|	PDA Sold to Account ID
PDA_SUBCLASSIFICATION_C	|	VARCHAR(255)	|	PDA Sub Classification
PDA_TOT_NON_IRRELEVANT_VOL_C	|	NUMBER	        |	PDA Total Non Irrelevant Volume
PDA_TOT_VOL_FROM_WEIGHT_C	|	NUMBER	        |	PDA Total Volume from Weight
PDA_VAR_SCALE_MAX_COST_CASE_C	|	NUMBER	        |	PDA Variable Scale Maximum Cost Per Case
PDA_WARNING_FIELD_1_C	        |	NUMBER	        |	PDA Warning Field 1
PDA_WARNING_FIELD_10_C	        |	NUMBER	        |	PDA Warning Field 10
PDA_WARNING_FIELD_2_C	        |	NUMBER	        |	PDA Warning Field 2
PDA_WARNING_FIELD_3_C	        |	NUMBER	        |	PDA Warning Field 3
PDA_WARNING_FIELD_4_C	        |	NUMBER	        |	PDA Warning Field 4
PDA_WARNING_FIELD_5_C	        |	NUMBER	        |	PDA Warning Field 5
PDA_WARNING_FIELD_6_C	        |	NUMBER	        |	PDA Warning Field 6
PDA_WARNING_FIELD_7_C	        |	NUMBER	        |	PDA Warning Field 7
PDA_WARNING_FIELD_8_C	        |	NUMBER	        |	PDA Warning Field 8
PDA_WARNING_FIELD_9_C	        |	NUMBER	        |	PDA Warning Field 9
PDA_WARNING_TEXT_FIELD_1_C	|	VARCHAR(255)	|	PDA Warning Text Field 1
PDA_WARNING_TEXT_FIELD_2_C	|	VARCHAR(255)	|	PDA Warning Text Field 2
PDA_WARNING_TEXT_FIELD_3_C	|	VARCHAR(255)	|	PDA Warning Text Field 3
PDA_WARNING_TEXT_FIELD_4_C	|	VARCHAR(255)	|	PDA Warning Text Field 4
PDA_WARNING_TEXT_FIELD_5_C	|	VARCHAR(255)	|	PDA Warning Text Field 5
PDA_PREV_YR_ACTUAL_INVST_C	|	NUMBER	        |	Previous Year Actual Investment
PDA_PREV_YR_ACTUAL_VOL_C	|	NUMBER	        |	Previous Year Actual Volume
ID	                        |	VARCHAR(18)	|	PDA Annual POC Budget Id
SYSTEMMODSTAMP	                |	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_WEIGHTS_SOURCE_C	        |	VARCHAR(255)	|	PDA Weight Source
PDA_ALT_WEIGHT_SRC_REASON_C	|	VARCHAR(255)	|	PDA Alternate Weight Source Reason
PDA_ANNUAL_ACTUAL_INVST_C	|	NUMBER	        |	PDA Actual Annual Investment
PDA_ANNUAL_ACTUAL_VOLUME_C	|	NUMBER	        |	PDA Actual Annual Volume
NAME	                        |	VARCHAR(255)	|	PDA Annual POC Budget Name
CREATEDBYID	                |	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	                |	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	                |	VARCHAR(255)	|	Currency code in ISO standard
ISDELETED	                |	NUMBER	        |	Identifier for Deleted record
PDA_IS_FY_ACTIVE_C	        |	NUMBER	        |	Identifier for Active Financial Year
LASTACTIVITYDATE	        |	DATE	        |	Last Activity Date
LASTMODIFIEDBYID	        |	VARCHAR(18)	|	User Id of Last Modifier
LASTMODIFIEDDATE	        |	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	        |	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	                |	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NUMBER_OF_WEIGHTS_C	|	NUMBER	        |	Number Of Weights
PDA_PLAN_NBR_VOLUME_RECORDS_C	|	NUMBER	        |	Planned number of Volume Records
OWNERID	                        |	VARCHAR(18)	|	User Id of Account Owner
PDA_P1_MONTHLY_VOLUMES_C	|	NUMBER	        |	Planned Monthly Volume
PDA_P1_OPEN_MONTH_C	        |	NUMBER	        |	Identifier to show Planned Open Month
PDA_P2_MONTHLY_VOLUMES_C	|	NUMBER	        |	Contract Monthly Volume
PDA_P2_OPEN_MONTH_C	        |	NUMBER	        |	Identifier to show Contract Open Month
PDA_ANNUAL_POC_VIEW_ID_C	|	VARCHAR(255)	|	Annual POC View ID Name
PDA_ANNUAL_TERRITORY_BUDGET_C	|	VARCHAR(18)	|	Annual Territory Budget ID
PDA_APPLICATION_C	        |	VARCHAR(255)	|	PDA Application name
PDA_APR_SALES_C	        |	NUMBER	        |	PDA Sales in APR for the Contract year
PDA_APR_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in APR for the Contract year
PDA_AUG_SALES_C	        |	NUMBER	        |	PDA Sales in AUG for the Contract year
PDA_AUG_YTD_C	                |	NUMBER	        |	PDA  YTD Sales in AUG for the Contract year
NUMBER_OF_FIXED_PAYMENTS_C	|	NUMBER	        |	Number of Fixed Payments
PDA_BASE_MACO_C	        |	NUMBER	        |	Base MACO
PDA_CONTRACT_SIGNER_EMAIL_C	|	VARCHAR(255)	|	Contract Signer Email
PDA_CONTRACT_SIGNER_NAME_C	|	VARCHAR(255)	|	Contract Signer Name
PDA_CORPORATE_LEGAL_NAME_C	|	VARCHAR(255)	|	Corporate Legal Name
PDA_CORPORATE_NUMBER_C	        |	VARCHAR(255)	|	Corporate Number
PDA_COST_PER_CASE_ALL_IN_C	|	NUMBER	        |	Cost Per Case All Inclusive
PDA_COST_PER_CASE_SUPP_C	|	NUMBER	        |	Cost Per Case Supp
PDA_ESTIMATED_MACO_PER_HL_C	|	NUMBER	        |	Estimated MACO Per Hl
PDA_INDUSTRY_TYPE_EN_C	        |	VARCHAR(255)	|	Industry Type in English
PDA_INDUSTRY_TYPE_FR_C	        |	VARCHAR(255)	|	Industry Type in French
PDA_LAST_YR_FIXED_PMT_TOTAL_C	|	NUMBER	        |	Last Year Total Fixed Payment
PDA_LAST_YR_VARIABLE_TOTAL_C	|	NUMBER	        |	Last Year Total Variable Payment
PDA_NBR_OF_FIXED_PAYMENTS_C	|	NUMBER	        |	Number  Of Fixed Payments
PDA_P1_FIXED_PAYMENT_TOTAL_C	|	NUMBER	        |	Planned Total Fixed Payment
PDA_P1_TO_P2_VARIANCE_C	|	NUMBER	        |	Planned To Contract Variance
PDA_P2_FIXED_PAYMENT_TOTAL_C	|	NUMBER	        |	Contract Total Fixed Payment
PDA_PAYER_NUMBER_C	        |	VARCHAR(255)	|	Payer Number
PDA_REGION_TYPE_EN_C	        |	VARCHAR(255)	|	Region Type in English
PDA_REGION_TYPE_FR_C	        |	VARCHAR(255)	|	Region Type in French
PDA_REGION_C	                |	VARCHAR(18)	|	Region Id
LAST_UPDATED_TSP	        |	TIMESTAMP_NTZ	|	Date and time of last update


## PDA Annual Territory Budget
   Table Name :  CSDI_SF_S.PDA_ANNUAL_TERR_BUDGET_C<br/>
   View Name :  CSDI_SF.PDA_ANNUAL_TERR_BUDGET_C<br/>

This is the landing table for PDA Annual Territory Budget and contains PDA application's budget for each territory.

Field Name						|	Data Type		|	Comment
|-	|	-	|	-
PDA_ANNL_ACT_INVST_OFF_PREM_C	|	NUMBER			|	Annual Actual Investment Off Premise
PDA_ANNL_ACT_INVST_ON_PREM_C	|	NUMBER			|	Annual Actual Investment On Premise
PDA_ANNL_ACT_VOL_ON_PREM_C		|	NUMBER			|	Annual Actual Volume ON Premise
PDA_ANNL_ACT_VOL_OFF_PREM_C	|	NUMBER			|	Annual Actual Volume Off Premise
CREATEDBYID						|	VARCHAR(18)		|	User Id of Creator
CREATEDDATE						|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE					|	VARCHAR(255)	|	Currency Code
ISDELETED						|	NUMBER			|	Is the Record Deleted
PDA_FISCAL_YEAR_PHASE_C		|	VARCHAR(255)	|	Phase of Physical Year
LASTACTIVITYDATE				|	DATE			|	Date of Last Activity
LASTMODIFIEDBYID				|	VARCHAR(18)		|	User Id of Last Modifier
LASTMODIFIEDDATE				|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE				|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE					|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_OFF_PREM_TERR_BUDGET_C		|	NUMBER			|	Off Premise Territory Budget
PDA_ON_PREM_TERR_BUDGET_C		|	NUMBER			|	On Premise Territory Budget
PDA_ANNUAL_TERR_BUDGET_ID_C	|	VARCHAR(255)	|	Annual Territory Budget Id
NAME							|	VARCHAR(255)	|	Annual Territory Budget Name
PDA_BDGT_INVST_ON_PREM_C		|	NUMBER			|	On Premise Budgeted Investment
PDA_BDGT_INVST_OFF_PREM_C		|	NUMBER			|	Off Premise Budgeted Investment
PDA_BDGT_VOLUME_ON_PREM_C		|	NUMBER			|	On Premise Budgeted Volume
PDA_BDGT_VOLUME_OFF_PREM_C		|	NUMBER			|	Off Premise Budgeted Volume
PDA_CONTRACT_INVST_OFF_PREM_C	|	NUMBER			|	Off Premise Contract Investment
PDA_CONTRACT_INVST_ON_PREM_C	|	NUMBER			|	On Premise Contract Investment
PDA_CNTRC_INVST_OF_PREM_TOT_C	|	NUMBER			|	Off Premise Total Contract Investment
PDA_CNTRC_INVST_ON_PREM_TOT_C	|	NUMBER			|	On Premise Total Contract Investment
PDA_CNTRC_INVST_VAR_OF_PREM_C	|	NUMBER			|	Off Premise Contract Investment Variance
PDA_CNTRC_INVST_VAR_ON_PREM_C	|	NUMBER			|	On Premise Contract Investment Variance
PDA_CONTRACT_VOL_OFF_PREM_C	|	NUMBER			|	Off Premise Contract Volume
PDA_CONTRACT_VOL_ON_PREM_C		|	NUMBER			|	On Premise Contract Volume
PDA_CNTRC_VOL_ON_PREM_TOT_C	|	NUMBER			|	On Premise Total Contract Volume
PDA_CNTRC_VOL_OFF_PREM_TOT_C	|	NUMBER			|	Off Premise Total Contract Volume
PDA_CNTRC_VOL_VAR_ON_PREM_C	|	NUMBER			|	On Premise Contract Volume Variance
PDA_CNTRC_VOL_VAR_OFF_PREM_C	|	NUMBER			|	Off Premise Contract Volume Variance
PDA_CUST_PLACEHLDR_BDGT_SUM_C	|	NUMBER			|	Placeholder Customer Budget
PDA_CUST_PLACEHLDR_COUNT_C		|	NUMBER			|	Placeholder Customer Count
PDA_FISCAL_YEAR_C				|	VARCHAR(18)		|	Fiscal Year
PDA_IS_FISCAL_YEAR_ACTIVE_C	|	NUMBER			|	Is Fiscal Year
PDA_PLN_APPR_INVST_ON_PREM_C	|	NUMBER			|	On Premise Planned Approved Investment
PDA_PLN_APPR_INVST_OFF_PREM_C	|	NUMBER			|	Off Premise Planned Approved Investment
PDA_PLN_APPR_VOL_ON_PREM_C		|	NUMBER			|	On Premise Planned Approved Volume
PDA_PLN_APPR_VOL_OFF_PREM_C	|	NUMBER			|	Off Premise Planned Approved Volume
PDA_PLN_INVST_OFF_PREM_C		|	NUMBER			|	Off Premise Planned Investment
PDA_PLN_INVST_ON_PREM_C		|	NUMBER			|	On Premise Planned Investment
PDA_PLN_INVST_ON_PREM_TOT_C	|	NUMBER			|	On Premise Total Planned Investment
PDA_PLN_INVST_OFF_PREM_TOT_C	|	NUMBER			|	Off Premise Total Planned Investment
PDA_PLN_INVST_OFF_PREM_VAR_C	|	NUMBER			|	Off Premise Planned Investment Variance
PDA_PLN_INVST_ON_PREM_VAR_C	|	NUMBER			|	On Premise Planned Investment Variance
PDA_PLAN_VOL_ON_PREMISE_C		|	NUMBER			|	On Premise Planned Volume
PDA_PLAN_VOL_OFF_PREMISE_C		|	NUMBER			|	Off Premise Planned Volume
PDA_PLN_VOL_ON_PREM_TOT_C		|	NUMBER			|	On Premise Total Planned Volume
PDA_PLN_VOL_OFF_PREM_TOT_C		|	NUMBER			|	Off Premise Total Planned Volume
PDA_PLN_VOL_OFF_PREM_VAR_C		|	NUMBER			|	Off Premise Planned Volume Variance
PDA_PLN_VOL_ON_PREM_VAR_C		|	NUMBER			|	On Premise Planned Volume Variance
PDA_PRPSD_CNTRC_INVST_OFF_C	|	NUMBER			|	Off Premise Proposed Contract Investment
PDA_PRPSD_CNTRC_INVST_ON_C		|	NUMBER			|	On Premise Proposed Contract Investment
PDA_PRPSD_CNTRC_VOL_OF_PREM_C	|	NUMBER			|	Off Premise Proposed Contract Volume
PDA_PRPSD_CNTRC_VOL_ON_PREM_C	|	NUMBER			|	On Premise Proposed Contract Volume
PDA_PRPSD_PLN_INVST_ON_C		|	NUMBER			|	On Premise Proposed Planned Investment
PDA_PRPSD_PLN_INVST_OFF_C		|	NUMBER			|	Off Premise Proposed Planned Investment
PDA_PRPSD_PLN_VOL_OFF_PREM_C	|	NUMBER			|	Off Premise Proposed Planned Volume
PDA_PRPSD_PLN_VOL_ON_PREM_C	|	NUMBER			|	On Premise Proposed Planned Volume
PDA_TERRITORY_C				|	VARCHAR(18)		|	Territory Id
PDA_TERRITORY_YEAR_C			|	VARCHAR(255)	|	Year
PDA_TERRITORY_YEAR_NUMBER_C	|	NUMBER			|	Year in Number
PDA_PHASE1_END_DATE_OVRRIDE_C	|	DATE			|	Phase one End Date Override
ID								|	VARCHAR(18)		|	Annual Territory Budget Id
SYSTEMMODSTAMP					|	TIMESTAMP_NTZ	|	System Modified Time stamp
PDA_PHASE_1_DAYS_REMAINING_C	|	NUMBER			|	Phase 1 Days Remaining
LAST_UPDATED_TSP				|	TIMESTAMP_NTZ	|	Date and Time of Last Modification

## PDA Answers
 Table Name :  CSDI_SF_S.PDA_ANSWER_C<br/>
   View Name :  CSDI_SF.PDA_ANSWER_C<br/>

This is the landing table for PDA Answers and contains discrete answers for each question

Field Name						|	Data Type		|	COMMENT
|-	|	-	|	-
PDA_ANS_MIN_PCT_PROPORTION_C	|	NUMBER			|	Answer Minimum Percentage Proportion
PDA_ANSWER_PERCENT_C			|	NUMBER			|	Answer Percentage
PDA_COMPOSITE_ANSWER_1_C		|	VARCHAR(18)		|	Composite Answer 1
PDA_COMPOSITE_ANSWER_2_C		|	VARCHAR(18)		|	Composite Answer 2
CREATEDBYID						|	VARCHAR(18)		|	User id of Creator
CREATEDDATE						|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE					|	VARCHAR(255)	|	Currency Code
ISDELETED						|	NUMBER			|	Deleted Record Indicator
PDA_ENDS_GROUP_C				|	NUMBER			|	Ends Group Indicator
LASTMODIFIEDBYID				|	VARCHAR(18)		|	User id of Last Modifier
LASTMODIFIEDDATE				|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE				|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE					|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NAME_FRENCH_C				|	VARCHAR(255)	|	PDA Answer Options Name in French
PDA_ANSWER_ID_C				|	VARCHAR(255)	|	PDA Answer Option ID
NAME							|	VARCHAR(255)	|	PDA Answer Name
PDA_NAME_ENGLISH_C				|	VARCHAR(255)	|	PDA Answer Option in English
PDA_QUESTION_C					|	VARCHAR(18)		|	PDA Question ID
ID								|	VARCHAR(18)		|	PDA Answer ID 
PDA_SORT_ORDER_C				|	NUMBER			|	Sort Oder of answer Options
SYSTEMMODSTAMP					|	TIMESTAMP_NTZ	|	System Modification timestamp
PDA_TYPE_C						|	VARCHAR(255)	|	ID for Type of Answer
LAST_UPDATED_TSP				|	TIMESTAMP_NTZ	|	Date and Time of Last update



## PDA Approval Instance
 Table Name :  CSDI_SF_S.PDA_APPROVAL_INSTANCE_C<br/>
   View Name :  CSDI_SF.PDA_APPROVAL_INSTANCE_C<br/>

This is the landing table for PDA Approval Instance. The PDA Approval Instance orchestrates the approval steps of an approval custom process.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
PDA_CURRENT_STEP_ORDER_NBR_C	|	NUMBER	|	PDA Current Step Order Number
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Last Modification
PDA_APPROVAL_API_NAME_C	|	VARCHAR(255)	|	PDA Approval API Name
NAME	|	VARCHAR(255)	|	PDA Approval Instance Name
PDA_APPROVAL_TEMPLATE_C	|	VARCHAR(18)	|	PDA Approval Template ID
PDA_CUSTOMER_PLACEHOLDER_C	|	VARCHAR(18)	|	PDA Customer Placeholder ID
PDA_HEADER_C	|	VARCHAR(18)	|	PDA Header ID
PDA_HEADER_COMMENTS_C	|	VARCHAR(25600)	|	PDA Header Comments
PDA_HEADER_SUBMISSION_DATE_C	|	TIMESTAMP_NTZ	|	PDA Header Submission Date 
ID	|	VARCHAR(18)	|	PDA Approval Instance Id
PDA_STATUS_C	|	VARCHAR(255)	|	PDA Status
PDA_SUB_STATUS_C	|	VARCHAR(255)	|	PDA Sub Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Approval Template
 Table Name :  CSDI_SF_S.PDA_APPROVAL_TEMPLATE_C<br/>
   View Name :  CSDI_SF.PDA_APPROVAL_TEMPLATE_C<br/>

This is the landing table for PDA Approval Template. It contains the definition of the approval template. Each template will have one or more approval steps (aka bus stops).

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPLICATION_C	|	VARCHAR(255)	|	PDA Application Name
PDA_APRVL_PROCESS_API_NAME_C	|	VARCHAR(255)	|	Approval Process API name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Creation
PDA_CRITERIA_C	|	VARCHAR(255)	|	Criteria for the Template
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description of Approval Template 
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User Id of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Last View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_APPROVAL_TEMPLATE_ID_C	|	VARCHAR(255)	|	Approval Template ID
NAME	|	VARCHAR(255)	|	Approval Template Name
PDA_OBJECT_C	|	VARCHAR(255)	|	Object Name Related to Approval
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise Name
ID	|	VARCHAR(18)	|	Approval Template ID
RECORDTYPEID	|	VARCHAR(18)	|	Record Type Name
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Approval Instance Steps
 Table Name :  CSDI_SF_S.PDA_APRVL_INSTANCE_STEP_C<br/>
   View Name :  CSDI_SF.PDA_APRVL_INSTANCE_STEP_C<br/>

This is the landing table for PDA Approval Instance Steps. It Persists the approval steps of an Approval Instance.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPROVAL_ORDER_C	|	NUMBER	|	PDA Approval step Order
CREATEDBYID	|	VARCHAR(18)	|	User Id Of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User Id Of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Timestamp of Last Modification
PDA_ACTUAL_APPROVER_C	|	VARCHAR(18)	|	Actual Approver
PDA_APPROVAL_API_NAME_C	|	VARCHAR(255)	|	Approval API Name
PDA_APPROVAL_COMMENTS_C	|	VARCHAR(25600)	|	Approval Comment
PDA_APPROVAL_INSTANCE_C	|	VARCHAR(18)	|	Approval Instance ID
NAME	|	VARCHAR(255)	|	Approval Instance Name
PDA_APPROVER_C	|	VARCHAR(18)	|	Approver ID
PDA_AUXILIARY_APPROVER_C	|	VARCHAR(18)	|	Auxiliary Approver ID
PDA_AUXILIARY_APPROVER_TWO_C	|	VARCHAR(18)	|	2nd Auxiliary Approver ID
PDA_COMPLETION_DATE_TIME_C	|	TIMESTAMP_NTZ	|	Completion Timestamp
PDA_ON_REJECT_RETURN_TO_C	|	VARCHAR(18)	|	Return to user Id 
PDA_ON_REJECT_ROLE_C	|	VARCHAR(18)	|	Reject Role id
PDA_ROLE_C	|	VARCHAR(18)	|	Role
ID	|	VARCHAR(18)	|	Approval Instance Step ID
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_SUB_STATUS_C	|	VARCHAR(255)	|	Sub Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_APPROVAL_TEMPLATE_STEP_C	|	VARCHAR(18)	|	Approval Template Step ID
PDA_MANDATORY_APPROVAL_STEP_C	|	NUMBER	|	Mandatory Approval Step indicator
PDA_SLA_DAYS_C	|	NUMBER	|	SLA  Days
PDA_SLA_TIME_REMAINING_C	|	VARCHAR(255)	|	SLA Time Remaining
PDA_START_DATE_TIME_C	|	TIMESTAMP_NTZ	|	Start Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Approval Template Steps

 Table Name :  CSDI_SF_S.PDA_APRVL_TEMPLATE_STEP_C<br/>
   View Name :  CSDI_SF.PDA_APRVL_TEMPLATE_STEP_C<br/>

This is the landing table for PDA Approval Template Steps. The individual approval steps for the parent approval template.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPROVAL_ORDER_C	|	NUMBER	|	Approval Order
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Creation Timestamp
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Last Modifier's User ID
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Last Modification Timestamp
PDA_APPROVAL_API_NAME_C	|	VARCHAR(255)	|	Approval API Name
PDA_APPROVAL_ROLE_C	|	VARCHAR(18)	|	Approval Role ID
PDA_APPROVAL_TMPL_C	|	VARCHAR(18)	|	Approval Template ID
PDA_APPROVAL_TMPL_STEP_ID_C	|	VARCHAR(255)	|	Approval Template Step ID
NAME	|	VARCHAR(255)	|	Approval Template Step Name
PDA_MANDATORY_APPROVAL_STEP_C	|	NUMBER	|	Mandatory Approval Step Indicator
PDA_REJECTED_ROLE_C	|	VARCHAR(18)	|	Rejected Role ID
ID	|	VARCHAR(18)	|	Approval Template ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_SLA_DAYS_C	|	NUMBER	|	SLA in Days
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA APV(Annual POC View) Accruals

 Table Name :  CSDI_SF_S.PDA_APV_ACCRUAL_C<br/>
   View Name :  CSDI_SF.PDA_APV_ACCRUAL_C<br/>

This is the landing table for PDA APV Accruals. It provide the accrual amount based on approved Plan 1.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	Creators User ID
CREATEDDATE	|	TIMESTAMP_NTZ	|	Creation Timestamp
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Last Modifier's User ID
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Last Modification Timestamp
PDA_ACTUAL_VOLUME_C	|	NUMBER	|	Actual Volume
PDA_AMOUNT_C	|	NUMBER	|	Amount
PDA_ANNUAL_POC_VIEW_C	|	VARCHAR(18)	|	Annual POC View POC concatenated with Year
NAME	|	VARCHAR(255)	|	POC Accrual Name
PDA_COST_PER_CASE_C	|	NUMBER	|	Cost Per Case
PDA_INVESTMENT_C	|	VARCHAR(18)	|	Investment
PDA_SCALES_AMOUNT_C	|	NUMBER	|	Scale Amount
ID	|	VARCHAR(18)	|	POC Accrual ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA APV(Annual POC View) Classification

 Table Name :  CSDI_SF_S.PDA_APV_CLASSIFICATION_C<br/>
   View Name :  CSDI_SF.PDA_APV_CLASSIFICATION_C<br/>

This is the landing table for PDA APV Classification. It is the Junction between APV and other object (Business Drivers, Price List, Clause) to assign attribute by APV.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	Creators User ID
CREATEDDATE	|	TIMESTAMP_NTZ	|	Creation Timestamp
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Last Modifier's User ID
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Last Modification Timestamp
OWNERID	|	VARCHAR(18)	|	Owner's User ID
PDA_ANNUAL_POC_VIEW_C	|	VARCHAR(18)	|	Annual POC View ID
PDA_APV_CLASSIFICATION_ID_C	|	VARCHAR(255)	|	APC Classification ID
PDA_APV_ID_C	|	VARCHAR(255)	|	Annual POC View Name
PDA_BUSINESS_DRIVER_MAX_AMT_C	|	NUMBER	|	Maximum Amount for Business Driver
PDA_CLASSIFICATION_C	|	VARCHAR(255)	|	PDA Classification
PDA_CONFIG_ITEM_C	|	VARCHAR(18)	|	Configuration Item ID
PDA_CONFIG_ITEM_DESC_EN_C	|	VARCHAR(255)	|	Configuration Item Description in English
PDA_CONFIG_ITEM_DESC_FR_C	|	VARCHAR(255)	|	Configuration Item Description in French
PDA_CONFIG_ITEM_ID_C	|	VARCHAR(255)	|	Configuration Item ID
PDA_CONFIG_ITEM_MATCH_C	|	NUMBER	|	Configuration Item Match Indicator
PDA_CONFIG_ITEM_NAME_C	|	VARCHAR(255)	|	Configuration Item Name
PDA_CONFIG_TYPE_C	|	VARCHAR(255)	|	Configuration Type
PDA_CONFIG_TYPE_API_NAME_C	|	VARCHAR(255)	|	Configuration Type API Name
NAME	|	VARCHAR(255)	|	PDA Classification Name
ID	|	VARCHAR(18)	|	PDA Classification Id
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification  Timestamp
PDA_LAST_YEAR_COST_PER_CASE_C	|	NUMBER	|	Last Year Cost Per Case
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated timestamp


## PDA APV(Annual POC View) Trade Spend

 Table Name :  CSDI_SF_S.PDA_APV_TRADE_SPEND_C<br/>
 View Name :  CSDI_SF.PDA_APV_TRADE_SPEND_C<br/>

This is the landing table for PDA APV Trade spend. It is copy of PDA_Trade_Spend_C records, with additional look up to Plan 2 and Plan 3 investments. To be used in reporting.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PHF_LOC_ID_C	|	VARCHAR(255)	|	Physical Location ID
PLANT_CODE_C	|	VARCHAR(255)	|	Plant Code
PDA_PRC_COND_TYP_CODE_C	|	VARCHAR(255)	|	PDA Price Condition Type Code
PRC_COND_TYP_CODE_C	|	VARCHAR(255)	|	Price Condition Type Code
PRC_COND_TYPE_NAME_C	|	VARCHAR(255)	|	Price Condition Type Name
ID	|	VARCHAR(18)	|	PDA APV Trade Spend ID
SLS_ORD_ITEM_CAT_CODE_C	|	VARCHAR(255)	|	Sales Order Item Category Code
SLS_ORD_NBR_C	|	VARCHAR(255)	|	Sales Order Number
SLS_UNIT_PRC_C	|	NUMBER	|	Unit Sales Price
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
TRADE_SPND_CMPNT_C	|	NUMBER	|	Trade Spend Component Count
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
AGMNT_NBR_C	|	VARCHAR(255)	|	Agreement Number
BILL_DOC_NBR_C	|	VARCHAR(255)	|	Billing Document Number
BILL_DOC_TYP_CODE_C	|	VARCHAR(255)	|	Billing Document Type Code
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
CUST_PAYER_NBR_C	|	VARCHAR(255)	|	Payer Customer Number
CUST_SHP_TO_NBR_C	|	VARCHAR(255)	|	Ship To Customer Number
CUST_SLD_TO_NBR_C	|	VARCHAR(255)	|	Sold To Customer Number
ISDELETED	|	NUMBER	|	Record Deleted Indicator
DEL_IND_C	|	VARCHAR(255)	|	Deleted Indicator
DLVRY_NBR_C	|	VARCHAR(255)	|	Delivery Number
DY_BILL_DATE_C	|	DATE	|	Daily Billing Date
DY_SERV_DATE_C	|	DATE	|	Daily Serving Date
FREE_STCK_QTY_C	|	NUMBER	|	Free Stock Quantity
INT_SLS_ORD_NBR_C	|	VARCHAR(255)	|	Internal Sales order Number
PDA_INV_LN_C	|	NUMBER	|	Invoice Line Number
INV_LN_C	|	VARCHAR(255)	|	Invoice Line Number
INV_NBR_C	|	VARCHAR(255)	|	Invoice Number
PDA_INV_NBR_C	|	NUMBER	|	Invoice Number
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Last Modification  User ID
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Last Modification  Timestamp
LAST_UPDATED_TSP_C	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
MATL_NBR_C	|	VARCHAR(255)	|	Material Number
ORD_DESC_C	|	VARCHAR(255)	|	Order Description
OWNERID	|	VARCHAR(18)	|	Owner User ID
NAME	|	VARCHAR(255)	|	APV Trade spend Name
PDA_INVESTMENT_C	|	VARCHAR(18)	|	Investment
PDA_P2_INVESTMENT_C	|	VARCHAR(18)	|	Contract Investment
PDA_TRADE_SPND_KEY_C	|	VARCHAR(255)	|	Trade Spend Key


## PDA APV(Annual POC View) Warning

 Table Name :  CSDI_SF_S.PDA_APV_WARNING_C<br/>
 View Name :  CSDI_SF.PDA_APV_WARNING_C<br/>

This is the landing table for PDA APV Warning. It contains Instance of failed Warning for APV.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_WARNING_C	|	VARCHAR(18)	|	Warning ID
ID	|	VARCHAR(18)	|	Warning ID
SOURCE_IDS_C	|	VARCHAR(255)	|	Source IDs
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
CREATEDBYID	|	VARCHAR(18)	|	User ID of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Creation Timestamp
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Warning Description in English
PDA_FIX_C	|	VARCHAR(255)	|	Fix for the Warning
PDA_IMPACT_C	|	VARCHAR(255)	|	Impact
LASTMODIFIEDBYID	|	VARCHAR(18)	|	Last Modification User ID
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Last Modification timestamp
PDA_ANNUAL_POC_VIEW_C	|	VARCHAR(18)	|	Annual POC View ID
NAME	|	VARCHAR(255)	|	Warning Name
PDA_FIELD_VALUE_DISPLAY_C	|	VARCHAR(12800)	|	Fields and Value for Display in English
PDA_FIELD_VALUE_DISPLAY_FR_C	|	VARCHAR(12800)	|	Fields and Value Display for French
PDA_FRENCH_DESCRIPTION_C	|	VARCHAR(255)	|	Warning Description in French
PDA_FRENCH_FIX_C	|	VARCHAR(255)	|	Fix for the Warning in French
PDA_FRENCH_IMPACT_C	|	VARCHAR(255)	|	Impact in French
PDA_SEVERITY_SORT_ORDER_C	|	NUMBER	|	Severity Sort Order
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA APV(Annual POC View) Weight

 Table Name :  CSDI_SF_S.PDA_APV_WEIGHT_C<br/>
 View Name :  CSDI_SF.PDA_APV_WEIGHT_C<br/>

This is the landing table for PDA APV Weights. It Contains the default PDA Weights for the APV Year.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_ANNUAL_POC_VIEW_C	|	VARCHAR(18)	|	Annual POC view ID
PDA_APR_SALES_C	|	NUMBER	|	April Sales Weight
PDA_APR_YTD_C	|	NUMBER	|	April Sales YTD Weight
NAME	|	VARCHAR(255)	|	APV Weight Name
PDA_AUG_SALES_C	|	NUMBER	|	August Sales Weight
PDA_AUG_YTD_C	|	NUMBER	|	August Sales YTD Weight
PDA_CALCULATED_WEIGHT_C	|	NUMBER	|	Calculated Weight
PDA_CURRENT_APV_FOR_ACTUAL_C	|	VARCHAR(18)	|	Current APV for Actuals
PDA_DEC_SALES_C	|	NUMBER	|	December Sales Weight
PDA_DEC_YTD_C	|	NUMBER	|	December Sales YTD  Weight
PDA_EXTERNAL_ID_C	|	VARCHAR(255)	|	External ID (POC|YEAR|SKU)
PDA_FEB_SALES_C	|	NUMBER	|	February Sales Weight
PDA_FEB_YTD_C	|	NUMBER	|	February Sales YTD Weight
PDA_IS_DELETED_C	|	NUMBER	|	Deleted Indicator
PDA_JAN_SALES_C	|	NUMBER	|	January Sales Weight
PDA_JAN_YTD_C	|	NUMBER	|	January Sales YTD Weight
PDA_JUL_SALES_C	|	NUMBER	|	July Sales Weight
PDA_JUL_YTD_C	|	NUMBER	|	July Sales YTD Weight
PDA_JUN_SALES_C	|	NUMBER	|	June Sales Weight
PDA_JUN_YTD_C	|	NUMBER	|	June Sales YTD Weight
PDA_MAR_SALES_C	|	NUMBER	|	March Sales Weight
PDA_MAR_YTD_C	|	NUMBER	|	March Sales YTD Weight
PDA_MAY_SALES_C	|	NUMBER	|	May Sales Weight
PDA_MAY_YTD_C	|	NUMBER	|	May Sales YTD Weight
PDA_NOV_SALES_C	|	NUMBER	|	November Sales Weight
PDA_NOV_YTD_C	|	NUMBER	|	November Sales YTD Weight
PDA_OCT_SALES_C	|	NUMBER	|	October Sales Weight
PDA_OCT_YTD_C	|	NUMBER	|	October Sales YTD Weight
PDA_POC_ID_C	|	VARCHAR(255)	|	POC code
PDA_REASON_FOR_COPY_C	|	VARCHAR(255)	|	Reason for Copy
PDA_SALES_VOLUME_METRIC_C	|	NUMBER	|	Sales Volume Metric
PDA_SEP_SALES_C	|	NUMBER	|	September Sales Weight
PDA_SEP_YTD_C	|	NUMBER	|	September Sales YTD Weight
PDA_SKU_C	|	VARCHAR(18)	|	SKU ID
PDA_SKU_ID_C	|	VARCHAR(255)	|	SKU Code
PDA_SKU_IS_IRRELEVANT_C	|	NUMBER	|	SKU Relevant Indicator
PDA_VOLUME_SALES_MONTH_C	|	NUMBER	|	Sales Month Number
PDA_VOLUME_SALES_YEAR_C	|	NUMBER	|	Sales Year
PDA_WEIGHT_SOURCE_C	|	VARCHAR(255)	|	Weight Source
ID	|	VARCHAR(18)	|	Weight ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_NOTES_C	|	VARCHAR(25600)	|	Notes
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Business Driver


 Table Name :  CSDI_SF_S.PDA_BUSINESS_DRIVER_C<br/>
 View Name :  CSDI_SF.PDA_BUSINESS_DRIVER_C<br/>

This is the landing table for PDA Business Drivers. It is the Junction table between PDA Header, Question Headers and the associated answers.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_END_DATE_C	|	DATE	|	End date
PDA_ESTIMATED_INVESTMENT_C	|	NUMBER	|	Estimated Investment
PDA_ESTIMATED_VOLUME_C	|	NUMBER	|	Estimated Volume
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_NAME_ENGLISH_C	|	VARCHAR(255)	|	Business Driver Name in English
PDA_NAME_FRENCH_C	|	VARCHAR(255)	|	Business Driver Name in French
PDA_ACTUAL_COST_C	|	NUMBER	|	Actual Cost
NAME	|	VARCHAR(255)	|	Business Driver Code
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_MASTER_REBATE_AGMNT_NBR_C	|	VARCHAR(255)	|	Master Rebate Agreement Number
PDA_MODIFIED_BUS_DRVR_C	|	VARCHAR(18)	|	Modified business Driver
PDA_ORIGINAL_BUS_DRVR_C	|	VARCHAR(18)	|	Original business Driver
PDA_PAYMENT_METHOD_C	|	VARCHAR(255)	|	Business Driver Payment Method
PDA_QUESTION_HEADER_C	|	VARCHAR(18)	|	Business Driver Question Header
PDA_SAP_PAYMENT_STATUS_C	|	VARCHAR(255)	|	SAP Payment Status
PDA_SETTLEMENT_PERIOD_C	|	VARCHAR(255)	|	Settlement Period
PDA_SKU_GROUPS_C	|	VARCHAR(255)	|	SKU Group
PDA_WARNING_FIELD_1_C	|	NUMBER	|	Warning Field 1
PDA_WARNING_FIELD_10_C	|	NUMBER	|	Warning Field 10
PDA_WARNING_FIELD_2_C	|	NUMBER	|	Warning Field 2
PDA_WARNING_FIELD_3_C	|	NUMBER	|	Warning Field 3
PDA_WARNING_FIELD_4_C	|	NUMBER	|	Warning Field 4
PDA_WARNING_FIELD_5_C	|	NUMBER	|	Warning Field 5
PDA_WARNING_FIELD_6_C	|	NUMBER	|	Warning Field 6
PDA_WARNING_FIELD_7_C	|	NUMBER	|	Warning Field 7
PDA_WARNING_FIELD_8_C	|	NUMBER	|	Warning Field 8
PDA_WARNING_FIELD_9_C	|	NUMBER	|	Warning Field 9
PDA_PLAN_NEGOTIATED_COST_C	|	NUMBER	|	Planned  Negotiated Cost
PDA_PLAN_SUGGESTED_COST_C	|	NUMBER	|	Planned Suggested Cost
ID	|	VARCHAR(18)	|	Business Driver ID
PDA_START_DATE_C	|	DATE	|	Start Date
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_SUGGESTED_COST_C	|	NUMBER	|	Suggested Cost
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_ANS_PCT_THRESHOLD_LKP_C	|	VARCHAR(18)	|	Answer Percent Threshold Lookup ID
PDA_ANS_PCT_THRESHOLD_C	|	NUMBER	|	Answer Percent Threshold
PDA_IS_COST_PER_CASE_MOD_C	|	NUMBER	|	Cost Per Case Modified indicator
PDA_IS_DATE_MODIFIED_C	|	NUMBER	|	Date Modified indicator
PDA_LAST_YR_COST_PER_CASE_C	|	NUMBER	|	Last Year's Cost Per Case
PDA_SUGGESTED_COST_MANUAL_C	|	NUMBER	|	Manual Suggested Cost
PDA_WEIGHTED_PCT_SUM_C	|	NUMBER	|	Percent Sum Weighted





## PDA Business Driver Answer Clause


 Table Name :  CSDI_SF_S.PDA_BUS_DRVR_ANS_CLAUSE_C<br/>
 View Name :  CSDI_SF.PDA_BUS_DRVR_ANS_CLAUSE_C<br/>

This is the landing table for PDA Business Driver Answer Clause. This a junction object between PDA Answers and PDA Clauses. This allows many Clauses to be related to many Answers and vice versa.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
DIVISION	|	VARCHAR(255)	|	Division
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_ANSWER_C	|	VARCHAR(18)	|	Answer ID
PDA_BUS_DRVR_ANS_CLAUSE_ID_C	|	VARCHAR(255)	|	Answer Clause ID
NAME	|	VARCHAR(255)	|	Answer Clause Name
PDA_CLAUSE_C	|	VARCHAR(18)	|	Clause ID
ID	|	VARCHAR(18)	|	Record Identifier
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp




## PDA Clause Group Classification


 Table Name :  CSDI_SF_S.PDA_CLAUSE_GROUP_CLSFN_C<br/>
 View Name :  CSDI_SF.PDA_CLAUSE_GROUP_CLSFN_C<br/>

This is the landing table for PDA Clause Group Classification. It Links Clause Groups to Classifications for available Clauses based on Classifications


Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CLASSIFICATION_TYPE_C	|	VARCHAR(255)	|	Classification Type
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_CLAUSE_GROUP_C	|	VARCHAR(18)	|	Clause Group ID
PDA_CLAUSE_GROUP_CLSFN_ID_C	|	VARCHAR(255)	|	Clause Group Classification ID
PDA_CONFIG_ITEM_C	|	VARCHAR(18)	|	Configuration Item ID
NAME	|	VARCHAR(255)	|	Clause Group Classification Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Clause Group

 Table Name :  CSDI_SF_S.PDA_CLAUSE_GROUP_C<br/>
 View Name :  CSDI_SF.PDA_CLAUSE_GROUP_C<br/>

This is the landing table for PDA Clause Group. The PDA Clause Group may contain one or more PDA clauses. A PDA Clause Group may have a parent PDA Clause Group, which allows creation of subgroups.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_CATEGORY_C	|	VARCHAR(255)	|	Category Name
NAME	|	VARCHAR(255)	|	Clause Group Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
DIVISION	|	VARCHAR(255)	|	Division
PDA_ENGLISH_DESCRIPTION_C	|	VARCHAR(255)	|	Clause Description in English
PDA_ENGLISH_NAME_C	|	VARCHAR(255)	|	Clause Name in English
PDA_FRENCH_DESCRIPTION_C	|	VARCHAR(255)	|	Clause Description in French
PDA_FRENCH_NAME_C	|	VARCHAR(255)	|	Clause Name in French
PDA_IS_CLAUSE_GROUP_HEADER_C	|	NUMBER	|	Clause Group Header Indicator
PDA_LANGUAGE_C	|	VARCHAR(255)	|	Clause Language
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Data and Time of Lat View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_PARENT_CLAUSE_GROUP_C	|	VARCHAR(18)	|	Parent Clause Group ID
PDA_CLAUSE_GROUP_ID_C	|	VARCHAR(255)	|	Clause Group ID
PDA_POC_CLASSIFICATION_C	|	VARCHAR(255)	|	POC Classification
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Clause Sort Order
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TYPE_C	|	VARCHAR(255)	|	Type
PDA_YEAR_C	|	VARCHAR(255)	|	Year
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Clause

 Table Name :  CSDI_SF_S.PDA_CLAUSE_GROUP_C<br/>
 View Name :  CSDI_SF.PDA_CLAUSE_GROUP_C<br/>

This is the landing table for PDA Clause. It Contains the PDA clause definitions.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CAPTURE_CLAUSE_TOKENS_C	|	VARCHAR(255)	|	Number of Token Captured 
CLAUSE_GROUP_C	|	VARCHAR(18)	|	Clause Group ID
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
DIVISION	|	VARCHAR(255)	|	Division
PDA_ENGLISH_CLAUSE_DEFN_C	|	VARCHAR(12800)	|	Clause Definition in English
PDA_ENGLISH_DESCRIPTION_C	|	VARCHAR(255)	|	Clause Definition description in English
PDA_ENGLISH_NAME_C	|	VARCHAR(255)	|	Clause Name in English
PDA_FRENCH_CLAUSE_DEFN_C	|	VARCHAR(12800)	|	Clause Definition in French
PDA_FRENCH_DESCRIPTION_C	|	VARCHAR(255)	|	Clause Definition description in French
PDA_FRENCH_NAME_C	|	VARCHAR(255)	|	Clause Name in French
LANGUAGE_C	|	VARCHAR(255)	|	Clause Language
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_CLAUSE_ID_C	|	VARCHAR(255)	|	Clause ID
NAME	|	VARCHAR(255)	|	Clause Name
PDA_IS_CUSTOM_C	|	NUMBER	|	Custom indicator
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Configuration Item

 Table Name :  CSDI_SF_S.PDA_CONFIG_ITEM_C<br/>
 View Name :  CSDI_SF.PDA_CONFIG_ITEM_C<br/>

This is the landing table for PDA Configuration Item. It stores the PDA application configuration types items.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_EN_C	|	VARCHAR(255)	|	Description in English
PDA_DESCRIPTION_FR_C	|	VARCHAR(255)	|	Description in French
INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_CLASSIFICATION_DEFAULT_C	|	NUMBER	|	Default Classification
PDA_CODE_C	|	VARCHAR(255)	|	Configuration Item Code
PDA_CONFIG_ITEM_EXT_ID_C	|	VARCHAR(255)	|	Configuration Item External ID
NAME	|	VARCHAR(255)	|	Configuration Item Name
PDA_CONFIG_TYPE_C	|	VARCHAR(18)	|	Configuration Type ID
PDA_TEMPLATE_API_NAME_C	|	VARCHAR(255)	|	Template API Name
PDA_PARENT_CONFIG_ITEM_C	|	VARCHAR(18)	|	Parent Configuration Item ID
PDA_SYSSCRAMBBLEDID_C	|	VARCHAR(255)	|	System Scrambled ID
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise
ID	|	VARCHAR(18)	|	Record ID
RECORDTYPEID	|	VARCHAR(18)	|	Record Type ID
PDA_SCALE_TIER_PERCENTAGE_C	|	NUMBER	|	Scale Tier Percentage
PDA_SORT_ORDER_C	|	VARCHAR(255)	|	Sort Order
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_CONFIG_TYPE_NAME_C	|	VARCHAR(255)	|	Configuration Type Name
PDA_IS_DEFAULT_C	|	NUMBER	|	Default Configuration Item Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Configuration Type

 Table Name :  CSDI_SF_S.PDA_CONFIG_TYPE_C<br/>
 View Name :  CSDI_SF.PDA_CONFIG_TYPE_C<br/>

This is the landing table for PDA Configuration Type. It stores the PDA application configuration types.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_CMPOS_CONFIG_ITEM_1_TYP_C	|	VARCHAR(255)	|	Composite Configuration Item Type 1
PDA_CMPOS_CONFIG_ITEM_2_TYP_C	|	VARCHAR(255)	|	Composite Configuration Item Type 2
PDA_CMPOS_CONFIG_ITEM_3_TYP_C	|	VARCHAR(255)	|	Composite Configuration Item Type 3
PDA_CONFIG_TYPE_API_NAME_C	|	VARCHAR(255)	|	Configuration Type API Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
PDA_FISCAL_YEAR_C	|	VARCHAR(255)	|	Fiscal Year
PDA_IS_COMPLEX_TYPE_C	|	NUMBER	|	Complex Type Indicator
PDA_IS_COMPOSITE_TYPE_C	|	NUMBER	|	Composite Type Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Data and Time of Last View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_CLSFN_FISCAL_YEAR_C	|	VARCHAR(18)	|	Classification Fiscal Year
PDA_CONFIG_TYPE_EXT_ID_C	|	VARCHAR(255)	|	Configuration Type External ID
NAME	|	VARCHAR(255)	|	Configuration Type Name
PDA_USED_FOR_CLSFN_C	|	NUMBER	|	Used For Classification Indicator
ID	|	VARCHAR(18)	|	Record ID
PDA_STATUS_C	|	VARCHAR(255)	|	Record Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Customer Placeholder

 Table Name :  CSDI_SF_S.PDA_CUSTOMER_PLACEHOLDER_C<br/>
 View Name :  CSDI_SF.PDA_CUSTOMER_PLACEHOLDER_C<br/>

This is the landing table for PDA Customer Placeholder. It Stores the TM entered potential customers and proposed budget to be allocated. When the POC is created by the integration, the record gets linked to the POC record.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CITY_C	|	VARCHAR(255)	|	City Name
COUNTRY_C	|	VARCHAR(255)	|	Country Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_IS_DELETED_C	|	NUMBER	|	Deleted Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_ANNUAL_TERRITORY_BUDGET_C	|	VARCHAR(18)	|	Annual Territory Budget ID
NAME	|	VARCHAR(255)	|	Customer Placeholder Name
PDA_PROSPECT_DESCRIPTION_C	|	VARCHAR(255)	|	Prospect Description
PDA_SIMILAR_ANNUAL_POC_VIEW_C	|	VARCHAR(18)	|	Similar POC Annual View ID
PDA_POC_C	|	VARCHAR(18)	|	Account ID
PDA_POSTAL_CODE_C	|	VARCHAR(255)	|	Postal Code
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise
PDA_PROPOSED_BUDGET_C	|	NUMBER	|	Proposed Budget
PDA_PROSPECT_NAME_C	|	VARCHAR(255)	|	Prospect Name
ID	|	VARCHAR(18)	|	Record ID
SIMILAR_SHIP_TO_POC_C	|	VARCHAR(18)	|	Similar Ship To Account ID
PDA_START_DATE_C	|	DATE	|	Start Date
PDA_STATE_PROVINCE_C	|	VARCHAR(255)	|	Province
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_STREET_C	|	VARCHAR(255)	|	Street
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Fiscal Year

 Table Name :  CSDI_SF_S.PDA_CUSTOMER_PLACEHOLDER_C<br/>
 View Name :  CSDI_SF.PDA_CUSTOMER_PLACEHOLDER_C<br/>

This is the landing table for PDA Fiscal Year. It Contains the Fiscal Year dates and Phase One period dates.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_PHASE_ONE_START_DATE_C	|	DATE	|	Phase 1 Start Date
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_FISCAL_YEAR_END_DATE_C	|	DATE	|	Fiscal Year End Date
PDA_FISCAL_YEAR_START_DATE_C	|	DATE	|	Fiscal Year Start Date
PDA_IS_FY_ACTIVE_C	|	NUMBER	|	Fiscal Year Active Indicator
PDA_ISFYDASHBOARDEDITABLE_C	|	NUMBER	|	Editable Fiscal Year Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_LATEST_START_DATE_C	|	DATE	|	Latest Start Date
PDA_CLASSIFICATION_STATUS_C	|	VARCHAR(255)	|	Classification Status
PDA_FISCAL_YEAR_C	|	VARCHAR(255)	|	Fiscal Year
PDA_FISCAL_YEAR_ID_C	|	VARCHAR(255)	|	Fiscal Year ID
NAME	|	VARCHAR(255)	|	Fiscal Year Name
PDA_HIERARCHY_C	|	VARCHAR(18)	|	Hierarchy ID
PDA_MARKED_FOR_DEL_EXPIR_TM_C	|	NUMBER	|	Marked For delete Expiration Time
PDA_P29_EXPIRATION_LENGTH_C	|NUMBER	|Proposed Contract Modification Expiration Length
PDA_PMT_DECSN_GRACE_PERIOD_C	|	NUMBER	|	Payment Decision Grace Period
PDA_PHASE_C	|	VARCHAR(255)	|	Phase
PDA_VOLUME_PERCENT_INCREASE_C	|	NUMBER	|	Volume Percentage increase
PDA_PHASE_ONE_END_DATE_C	|	DATE	|	Phase one End Date
PDA_EARLIEST_START_DATE_C	|	DATE	|	Earliest Start Date
PDA_LATEST_END_DATE_C	|	DATE	|	Latest End Date
PDA_PHASE_1_DAYS_REMAINING_C	|	NUMBER	|	Phase 1 Remaining Days
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp





## PDA Fixed Payment


 Table Name :  CSDI_SF_S.PDA_FIXED_PAYMENT_C<br/>
 View Name :  CSDI_SF.PDA_FIXED_PAYMENT_C<br/>

This is the landing table for PDA Fixed Payments. It is a flat payment that's associated with a PDA header


Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_AMOUNT_C	|	NUMBER	|	Amount
COST_PER_CASE_C	|	NUMBER	|	Cost Per Case
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
ESTIMATED_VOLUME_C	|	NUMBER	|	Estimated Volume
NAME	|	VARCHAR(255)	|	Fixed Payment Name
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PAYOUT_DATE_C	|	DATE	|	Payout Date
PDA_END_DATE_C	|	DATE	|	End Date
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number ID
PDA_IS_AMOUNT_MODIFIED_C	|	NUMBER	|	Account Modified Indicator
PDA_IS_DATE_MODIFIED_C	|	NUMBER	|	Date Modified Indicator
PDA_IS_INTERNAL_ORD_NBR_MOD_C	|	NUMBER	|	Internal Order Number Modified Indicator
PDA_IS_PMT_METHOD_MOD_C	|	NUMBER	|	Payment Method Modified Indicator
PDA_IS_VOLUME_TARGET_MOD_C	|	NUMBER	|	Volume Target Modified Indicator
PDA_JUSTIFICATION_C	|	VARCHAR(255)	|	Justification
PDA_MASTER_REBATE_AGMNT_NBR_C	|	VARCHAR(255)	|	Master Rebate Agreement Number
PDA_MODIFIED_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Modified Fixed Payment ID
PDA_ORIGINAL_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Original Fixed Payment ID
PDA_PAYMENT_METHOD_C	|	VARCHAR(255)	|	Payment Method
PDA_PAYMENT_REASON_C	|	VARCHAR(18)	|	Payment Reason ID
PDA_PENDING_AMOUNT_C	|	NUMBER	|	Pending Amount
PDA_SAP_PAYMENT_STATUS_C	|	VARCHAR(255)	|	Sap Payment Status
PDA_SETTLEMENT_PERIOD_C	|	VARCHAR(255)	|	Settlement Period
PDA_START_DATE_C	|	DATE	|	Start Date
PDA_SUM_OF_PAYMENT_AMOUNT_C	|	NUMBER	|	Sum Of Payment Amount
PDA_SYSSCRAMBLEDCONFIGITMID_C	|	VARCHAR(255)	|	System Scrambled Configuration Item ID
PDA_TYPE_C	|	VARCHAR(18)	|	Type ID
PDA_REASON_C	|	VARCHAR(255)	|	Reason ID
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
TARGETED_VOLUME_C	|	NUMBER	|	Targeted Volume
UNIT_OF_MEASURE_C	|	VARCHAR(255)	|	Unit of Measure
PDA_VALUE_C	|	NUMBER	|	Value
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Fixed Payment SKU Group


 Table Name :  CSDI_SF_S.PDA_FIXED_PMT_SKU_GRP_C<br/>
 View Name :  CSDI_SF.PDA_FIXED_PMT_SKU_GRP_C<br/>

This is the landing table for PDA Fixed Payments SKU Group. It is a Junction object for fixed payments and selected SKU groups

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Fixed Payment ID
NAME	|	VARCHAR(255)	|	Fixed Payment SKU Group Name
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group
ID	|	VARCHAR(18)	|	Record ID
SORT_NUMBER_C	|	NUMBER	|	Sort Order Number
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Fixed Payment Type


 Table Name :  CSDI_SF_S.PDA_FIX_PAYMENT_TYPE_C<br/>
 View Name :  CSDI_SF.PDA_FIX_PAYMENT_TYPE_C<br/>

This is the landing table for PDA Fixed Payments Type. It contains PDA Application payment types .

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
PDA_DESCRIPTION_FRENCH_C	|	VARCHAR(255)	|	Description in French
PDA_FISCAL_YEAR_C	|	VARCHAR(255)	|	Fiscal Year
IS_AGAINST_STRATEGY_C	|	NUMBER	|	Against Strategy Indicator
PDA_IS_BUDGET_AFFECTED_C	|	NUMBER	|	Affecting Budget Indicator
PDA_IS_DISPLD_ON_CONTRACT_C	|	NUMBER	|	Displayed on Contract Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NBR_OF_PAYMENT_REASONS_C	|	NUMBER	|	Number of Payment Reason
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_CODE_C	|	VARCHAR(255)	|	Code
NAME	|	VARCHAR(255)	|	Name of Payment Type
PDA_PAYMENT_TYPE_ID_C	|	VARCHAR(255)	|	Payment Type ID
PDA_TYPE_C	|	VARCHAR(18)	|	Configuration Type ID
CONSUMPTION_TYPE_C	|	VARCHAR(255)	|	Consumption Type
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp




## PDA Header Clause


 Table Name :  CSDI_SF_S.PDA_HEADER_CLAUSE_C<br/>
 View Name :  CSDI_SF.PDA_HEADER_CLAUSE_C<br/>

This is the landing table for PDA Header Clause. It is the junction table to relate PDA Headers to PDA Clauses.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CLAUSE_LANGUAGE_C	|	VARCHAR(255)	|	Language of Clause
PDA_CLAUSE_TOKEN_FOUR_C	|	VARCHAR(255)	|	Clause Token - 4
PDA_CLAUSE_TOKEN_ONE_C	|	VARCHAR(255)	|	Clause Token - 1
PDA_CLAUSE_TOKEN_THREE_C	|	VARCHAR(255)	|	Clause Token 3
PDA_CLAUSE_TOKEN_TWO_C	|	VARCHAR(255)	|	Clause Token -2
CLAUSE_TOKEN_TWO_C	|	VARCHAR(255)	|	Clause Token 2
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
DIVISION	|	VARCHAR(255)	|	Division
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_CLAUSE_C	|	VARCHAR(18)	|	Clause ID
PDA_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Fixed Payment ID
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
NAME	|	VARCHAR(255)	|	Name if Header Clause
PDA_IS_CUSTOM_C	|	NUMBER	|	Custom Header Clause Indicator
PDA_QUESTION_ANSWER_C	|	VARCHAR(18)	|	Question Answer ID
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_BUSINESS_DRIVER_C	|	VARCHAR(18)	|	Business Driver ID
PDA_SIMPLE_CLAUSE_EN_C	|	VARCHAR(12800)	|	Simple Clause in English
PDA_SIMPLE_CLAUSE_FR_C	|	VARCHAR(12800)	|	Simple Clause in French
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Header Contribution


 Table Name :  CSDI_SF_S.PDA_HEADER_CONTRIBUTION_C<br/>
 View Name :  CSDI_SF.PDA_HEADER_CONTRIBUTION_C<br/>

This is the landing table for PDA Header Contribution. This junction table relates PDA headers that span over a year to multiple PDA Annual POC Budgets.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_IS_BUDGET_ORIGIN_C	|	NUMBER	|	Budget Origin 
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_ANNUAL_POC_BUDGET_C	|	VARCHAR(18)	|	Annual POC Budget ID
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
NAME	|	VARCHAR(255)	|	Header Contribution Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Header Warning

 Table Name :  CSDI_SF_S.PDA_HEADER_WARNING_C   <br/>
 View Name :  CSDI_SF.PDA_HEADER_WARNING_C      <br/>

This is the landing table for PDA Header Warning. It contains instance of failed Warning for PDA Header

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_FIELD_VALUE_DISPLAY_C	|	VARCHAR(12800)	|	Display Field Value
PDA_FIELD_VALUE_DISPLAY_FR_C	|	VARCHAR(12800)	|	Display Field Value in French
PDA_FRENCH_DESCRIPTION_C	|	VARCHAR(255)	|	Description in French
PDA_FRENCH_FIX_C	|	VARCHAR(255)	|	Fix for Warning in French
PDA_FRENCH_IMPACT_C	|	VARCHAR(255)	|	Impact in French
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
NAME	|	VARCHAR(255)	|	Header Warning Name
PDA_SEVERITY_SORT_ORDER_C	|	NUMBER	|	Severity Sort Order
PDA_WARNING_C	|	VARCHAR(18)	|	Warning ID
ID	|	VARCHAR(18)	|	Record ID
SOURCE_IDS_C	|	VARCHAR(255)	|	Source ID Name
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_IS_KPI_C	|	NUMBER	|	KPI Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Header Weight

 Table Name :  CSDI_SF_S.PDA_HEADER_WEIGHT_C<br/>
 View Name :  CSDI_SF.PDA_HEADER_WEIGHT_C<br/>

This is the landing table for PDA Header Weight. It contains the modified Weights for PDA Header records.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_EXTERNAL_ID_C	|	VARCHAR(255)	|	External ID (Concatenation of Header ID and SKU Group ID)
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_HEADER_WEIGHT_LOCKED_C	|	NUMBER	|	Header Weight Locked Indicator
NAME	|	VARCHAR(255)	|	Header Weight Name
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group ID
PDA_SKU_GROUP_CALC_WEIGHT_C	|	NUMBER	|	SKU Group Calculated Weight
PDA_SKU_GROUP_SALES_VOLUME_C	|	NUMBER	|	SKU Group Sales Volume
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Header

 Table Name :  CSDI_SF_S.PDA_HEADER_C<br/>
 View Name :  CSDI_SF.PDA_HEADER_C<br/>

This is the landing table for PDA Header. It contains information about a specific version of a PDA for a single POC.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPROVAL_ITERATION_NBR_C	|	NUMBER	|	Approval Iteration Number 
PDA_APPROVAL_SUB_STATUS_C	|	VARCHAR(255)	|	Approval Sub Status
PDA_APPROVERS_ROLE_C	|	VARCHAR(255)	|	Approvers Role
PDA_BUDGET_CLOSED_C	|	NUMBER	|	Budget Closed Indicator
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_FAILED_KPI_COUNT_C	|	NUMBER	|	Failed KPI Count
PDA_HEADER_GENERATION_TYPE_C	|	VARCHAR(255)	|	Header Generation Type
PDA_IS_PDA_HEADER_EDITABLE_C	|	NUMBER	|	Header Editable Indicator
PDA_IS_PDA_HDR_VOL_EDITABLE_C	|	NUMBER	|	Header Volume Editable Indicator
PDA_IS_VALIDATED_C	|	NUMBER	|	Validated Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NUMBER_OF_FIX_PAYMENTS_C	|	NUMBER	|	Number Of Fix Payments
PDA_ACTIVE_PAYMENT_DECISION_C	|	NUMBER	|	Active Payment Decision Indicator
PDA_ANNUAL_POC_BUDGET_C	|	VARCHAR(18)	|	Annual POC Budget ID
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_APPROVAL_COMMENTS_C	|	VARCHAR(25600)	|	Approval Comments
PDA_APPROVAL_INSTANCE_C	|	VARCHAR(255)	|	Approval Instance ID
PDA_APPROVAL_INSTANCE_STEP_C	|	VARCHAR(18)	|	Approval Instance Step ID
PDA_APRVL_INSTANCE_SBMSN_DT_C	|	DATE	|	Approval  Instance Submission Date
PDA_APPROVER_C	|	VARCHAR(18)	|	Approver user ID
PDA_AUXILIARY_APPROVER_C	|	VARCHAR(18)	|	Auxiliary Approver User ID
PDA_AUXILIARY_APPROVER_TWO_C	|	VARCHAR(18)	|	Auxiliary Approver Two User ID
PDA_CONGA_TEMPLATE_C	|	VARCHAR(255)	|	Conga Template
PDA_CREATED_BY_CONVERSION_C	|	NUMBER	|	Created By Conversion Indicator
PDA_CUT_OFF_DATE_C	|	DATE	|	Cut Off Date
PDA_END_DATE_C	|	DATE	|	End Date Indicator
PDA_HEADER_ID_C	|	VARCHAR(255)	|	Header Id
NAME	|	VARCHAR(255)	|	Header Name
PDA_MANUAL_REBATE_AGMNT_C	|	NUMBER	|	Number of Manual Rebate Agreement
PDA_NEW_REBATE_AGREEMENTS_C	|	NUMBER	|	Number of New Rebate Agreement
PDA_NUMBER_BUSINESS_DRIVERS_C	|	NUMBER	|	Number of Business Drivers
PDA_NUMBER_CLAUSES_C	|	NUMBER	|	Number of Clauses 
PDA_NBR_INVALID_BUS_DRVR_C	|	NUMBER	|	Number of Invalid Business Driver
PDA_NBR_SCALE_AVG_EXCED_MAX_C	|	NUMBER	|	Number of Scale Average Exceeded Maximum
PDA_NBR_USER_MODIFED_WEIGHT_C	|	NUMBER	|	Number of user Modified Weights
PDA_NUMBER_VARIABLES_C	|	NUMBER	|	Number of Variables
PDA_ORIGINAL_HEADER_C	|	VARCHAR(18)	|	Original Header ID
PDA_P29_IS_EXPIRED_C	|	NUMBER	|	Proposed Contract Modification Expired Indicator
PDA_P29_MARKED_DEL_EXPIR_C	|	DATE	|	Proposed Contract Modification Marked for Deletion Expiry Date
PDA_PENDING_REBATE_AGMNT_C	|	NUMBER	|	Number of Pending Rebate Agreement
PDA_PLAN_NAME_TRANSLATED_C	|	VARCHAR(255)	|	Plan Name Translated
PDA_POC_MARKED_FOR_DELETION_C	|	NUMBER	|	POC Marked For Deletion Indicator
PDA_PRE_APPROVED_C	|	NUMBER	|	Pre Approved Header Indicator
PDA_PRE_APRVL_SBMSN_DATE_C	|	DATE	|	Pre Approval Submission date
PDA_PRICE_LIST_IS_RCMD_C	|	NUMBER	|	Price List Recommended Indicator
PDA_REASON_FOR_MODIFICATION_C	|	VARCHAR(255)	|	Reason For Modification
PDA_REPLICATED_SOURCE_C	|	VARCHAR(18)	|	Replicated Source
PDA_START_DATE_C	|	DATE	|	Start Date 
PDA_STORE_MAPPING_COUNT_C	|	NUMBER	|	Store Mapping count
PDA_SBMSN_FAIL_REBATE_AGMNT_C	|	NUMBER	|	Submission Failed Rebate Agreement
PDA_SBMSN_SUCS_REBATE_AGMNT_C	|	NUMBER	|	Submission Success Rebate Agreement
PDA_SUB_PRICE_LIST_IS_RCMD_C	|	NUMBER	|	Recommended Sub Price List Indicator
PDA_SUCCESS_SUBMISSION_DATE_C	|	DATE	|	Success Submission Date
PDA_SUCS_SBMSN_DT_IS_ACTIVE_C	|	NUMBER	|	Success Submission Date Active Indicator
PDA_TOTAL_COST_PER_CASE_C	|	NUMBER	|	Total Cost Per Case Indicator
PDA_TOTAL_MSTR_REBATE_AGMNT_C	|	NUMBER	|	Total Master Rebate Agreement Indicator
PDA_TOTAL_VOLUME_C	|	NUMBER	|	Total Volume
PDA_TYPE_C	|	VARCHAR(255)	|	Configuration Type
PDA_VERSION_C	|	VARCHAR(255)	|	Version 
PDA_WARNING_COUNT_C	|	NUMBER	|	Count Of Warning
PDA_PLAN_NAME_C	|	VARCHAR(255)	|	Plan Name
PDA_PLAN_NUMBER_C	|	VARCHAR(255)	|	Plan Number
PDA_POC_C	|	VARCHAR(18)	|	Account ID
PDA_POSITION_FM_C	|	VARCHAR(255)	|	Position Name
PDA_POSITION_C	|	VARCHAR(18)	|	Position ID
PDA_PRICELIST_C	|	VARCHAR(18)	|	Pricelist  ID
PDA_PRICELIST_FM_C	|	VARCHAR(255)	|	Pricelist Name
ID	|	VARCHAR(18)	|	Record ID
PDA_STATUS_C	|	VARCHAR(255)	|	Status 
PDA_SUB_PRICELIST_C	|	VARCHAR(18)	|	Sub Pricelist ID
PDA_SUB_PRICELIST_FM_C	|	VARCHAR(255)	|	Sub Pricelist Name
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TARGET_VOLUME_C	|	NUMBER	|	Target Volume
PDA_TOTAL_FIXED_PAYMENTS_C	|	NUMBER	|	Total Fixed Payments
PDA_TOTAL_INVESTMENT_VALUE_C	|	NUMBER	|	Total Investment Value
PDA_TYPE_OF_PAYMENT_C	|	VARCHAR(255)	|	Type Of Payment
PDA_TYPE_OF_SURFACE_C	|	VARCHAR(255)	|	Type Of Surface
PDA_CONGA_VERSION_NUMBER_C	|	NUMBER	|	Conga Version Number
PDA_CONVERTED_FROM_HEADER_C	|	VARCHAR(18)	|	Converted From Header
PDA_IS_MANUAL_SIGNATURE_C	|	NUMBER	|	Manual Signature Indicator
PDA_REASON_C	|	VARCHAR(255)	|	Reason
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Hierarchy Role


 Table Name :  CSDI_SF_S.PDA_HIERARCHY_ROLE_C<br/>
 View Name :  CSDI_SF.PDA_HIERARCHY_ROLE_C<br/>

This is the landing table for PDA Hierarchy Role. It contains bridge between PDA hierarchy and Role .

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_EFFECTIVE_END_DATE_C	|	DATE	|	Effective End Date
PDA_EFFECTIVE_START_DATE_C	|	DATE	|	Effective Start Date
PDA_IS_ACTIVE_C	|	NUMBER	|	Active Indicator
PDA_IS_PRIMARY_C	|	NUMBER	|	Primary Role Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_HIERARCHY_C	|	VARCHAR(18)	|	Hierarchy ID
NAME	|	VARCHAR(255)	|	Hierarchy Role Name
PDA_HIERARCHY_ROLE_ID_C	|	VARCHAR(255)	|	Hierarchy Role ID
PDA_ROLE_C	|	VARCHAR(18)	|	Role ID
PDA_TERRITORY_C	|	VARCHAR(18)	|	Territory ID
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_USER_C	|	VARCHAR(18)	|	User ID
PDA_PREFERRED_PREMISE_C	|	VARCHAR(255)	|	Preferred Premise
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Hierarchy


 Table Name :  CSDI_SF_S.PDA_HIERARCHY_C<br/>
 View Name :  CSDI_SF.PDA_HIERARCHY_C<br/>

This is the landing table for PDA Hierarchy. It contains the logical hierarchy of the application, e.g., District -> Region -> Application.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_HIERARCHY_TYPE_C	|	VARCHAR(255)	|	Hierarchy Type Name
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_LEVEL_C	|	NUMBER	|	Level of Hierarchy
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_PARENT_HIERARCHY_C	|	VARCHAR(18)	|	Parent Hierarchy ID
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_HIERARCHY_ID_C	|	VARCHAR(255)	|	Hierarchy  ID
NAME	|	VARCHAR(255)	|	Hierarchy Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_ANCESTORS_IDS_C	|	VARCHAR(255)	|	List of Hierarchy ID in Order
PDA_ANCESTORS_C	|	VARCHAR(255)	|	List of Hierarchy Name in Order
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Investments

 Table Name :  CSDI_SF_S.PDA_INVESTMENT_C<br/>
 View Name :  CSDI_SF.PDA_INVESTMENT_C<br/>

This is the landing table for PDA Investment. It contains Investment per type (e.g., business drivers and variables) per month and per year for each PDA header.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_LATEST_VOLUME_C	|	NUMBER	|	Latest Volume
PDA_MONTH_C	|	VARCHAR(255)	|	Month Number
PDA_ANNUAL_POC_BUDGET_C	|	VARCHAR(18)	|	Annual POC Budget ID
PDA_BUSINESS_DRIVER_C	|	VARCHAR(18)	|	Business Driver ID
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_HEADER_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Header Fixed Payment ID
PDA_HEADER_PLAN_NUMBER_C	|	VARCHAR(255)	|	Header Plan Number
PDA_HEADER_STATUS_C	|	VARCHAR(255)	|	Header Status
PDA_HEADER_VARIABLE_C	|	VARCHAR(18)	|	Header Variable Payment ID
PDA_INVESTMENT_ID_C	|	VARCHAR(255)	|	Investment ID
NAME	|	VARCHAR(255)	|	Header Name
PDA_LATEST_AMOUNT_C	|	NUMBER	|	Latest Amount
PDA_MASTER_REBATE_AGMNT_NBR_C	|	VARCHAR(255)	|	Master Rebate Agreement Number
PDA_NOT_PDA_CONDITION_INVST_C	|	NUMBER	|	Not PDA Condition Investment ID
PDA_P3_ACTUAL_AMOUNT_C	|	NUMBER	|	Actual Amount
PDA_P3_MASTER_REBATE_NUMBER_C	|	VARCHAR(255)	|	Actual Master Rebate Number
PDA_PAYMENT_DECISION_C	|	VARCHAR(18)	|	Payment Decision ID
PDA_SUBTYPE_FORMULA_C	|	VARCHAR(255)	|	Subtype Formula
PDA_YEAR_NUMBER_C	|	NUMBER	|	Year Number
ID	|	VARCHAR(18)	|	Record ID
PDA_SUBTYPE_C	|	VARCHAR(255)	|	Subtype
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_INVESTMENT_TYPE_C	|	VARCHAR(255)	|	Investment Type ID
PDA_YEAR_C	|	VARCHAR(255)	|	Year
PDA_AMOUNT_C	|	NUMBER	|	Amount
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_APV_NAME_C	|	VARCHAR(255)	|	Annual POC View Name
PDA_CONDITION_TYPE_ENGL_C	|	VARCHAR(255)	|	Condition Type English
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_CONDITION_TYPE_FR_C	|	VARCHAR(255)	|	Condition Type French
PDA_HEADER_NAME_C	|	VARCHAR(255)	|	Header Name
PDA_INTRNL_ORD_NBR_FORMULA_C	|	VARCHAR(255)	|	Internal Order Number Formula
PDA_PHF_BUSINESS_ID_C	|	VARCHAR(255)	|	POC Code
PDA_PMT_DECSN_LATEST_AMT_C	|	NUMBER	|	Payment Decision Latest Amount
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise 
PDA_SUB_SUB_TYPE_ENGLISH_C	|	VARCHAR(255)	|	Sub- Sub Type in English
PDA_SUB_SUB_TYPE_FRENCH_C	|	VARCHAR(255)	|	Sub- Sub Type in French
PDA_SUB_TYPE_ENGLISH_C	|	VARCHAR(255)	|	Sub Type in English 
PDA_SUB_TYPE_FRENCH_C	|	VARCHAR(255)	|	Sub Type in French



## PDA Master Rebate Agreement

 Table Name :  CSDI_SF_S.PDA_MASTER_REBATE_AGMNT_C<br/>
 View Name :  CSDI_SF.PDA_MASTER_REBATE_AGMNT_C<br/>

This is the landing table for PDA Master Rebate Agreement. This object is used to link the individual Rebate Agreement records into a single Condition.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_BUSINESS_DRIVER_C	|	VARCHAR(18)	|	Business Driver ID
PDA_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Fixed Payment ID
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_IS_PAYMENT_DECISION_C	|	NUMBER	|	Payment Decision Indicator
PDA_LONG_REST_RESPONSE_C	|	VARCHAR(16000)	|	Rest Response Long
NAME	|	VARCHAR(255)	|	Master Rebate Agreement Name
PDA_NUMBER_OF_RETRIES_C	|	NUMBER	|	Number of Retries
PDA_PAYMENT_DECISION_C	|	VARCHAR(18)	|	Payment Decision ID
PDA_REPLICATED_HEADER_C	|	VARCHAR(255)	|	Replicated Header ID
PDA_SAP_KNUMA_C	|	VARCHAR(255)	|	SAP Agreement number
PDA_SENT_MULESOFT_MESSAGE_C	|	VARCHAR(6400)	|	Mulesoft Message Sent
PDA_SHORT_REST_RESPONSE_C	|	VARCHAR(6400)	|	Rest Response  Short
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_VARIABLE_C	|	VARCHAR(18)	|	Variable Payment ID
ID	|	VARCHAR(18)	|	Master Rebate Agreement Id
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_CONDITION_TYPE_C	|	VARCHAR(255)	|	Condition Type
PDA_LAST_STATUS_CHECK_C	|	TIMESTAMP_NTZ	|	Last Status Check 
PDA_SAP_STATUS_C	|	VARCHAR(255)	|	Sap Status


## PDA ONTAP Product

 Table Name :  CSDI_SF_S.PDA_ONTAP__PRODUCT_C<br/>
 View Name :  CSDI_SF.PDA_ONTAP__PRODUCT_C<br/>

This is the landing table for PDA ONTAP Products. This contains List of all the Material number for ONTAP Products.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
MATERIAL_NUMBER_C	|	VARCHAR(255)	|	Material Number
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Payment Decision

 Table Name :  CSDI_SF_S.PDA_PAYMENT_DECISION_C<br/>
 View Name :  CSDI_SF.PDA_PAYMENT_DECISION_C<br/>

This is the landing table for PDA Payment Decision. It contains payment decisions for fixed payments. A fix payment could be paid in full, partially paid, postponed or not paid.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
DECISION_C	|	VARCHAR(255)	|	Decision
PDA_DECISION_REASON_C	|	VARCHAR(255)	|	Decision Reason
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_PAYMENT_AMOUNT_C	|	NUMBER	|	Payment Amount
PDA_END_DATE_C	|	DATE	|	End Date
PDA_START_DATE_C	|	DATE	|	Start Date
PDA_PAYOUT_DUE_DATE_C	|	DATE	|	Payout Due Date
PDA_ACTIVE_DECSN_START_DT_C	|	DATE	|	Active Decision Start Date
PDA_APPROVAL_COMMENTS_C	|	VARCHAR(255)	|	Approval Comments
PDA_COST_PER_CASE_C	|	NUMBER	|	Cost Per Case
PDA_DECISION_DUE_DATE_C	|	DATE	|	Decision Due Date
PDA_EXPIRATION_DATE_C	|	DATE	|	Expiration Date
PDA_FINAL_DECISION_C	|	NUMBER	|	Final Decision
PDA_FIXED_EXPIRATION_DATE_C	|	DATE	|	Fixed Expiration Date
PDA_FIXED_PAYMENT_LOOKUP_C	|	VARCHAR(18)	|	Fixed Payment ID
PDA_FIXED_PAYMENT_AMOUNT_C	|	NUMBER	|	Fixed Payment Amount
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_INVESTMENT_C	|	VARCHAR(18)	|	Investment ID
PDA_ISACTIVE_C	|	NUMBER	|	Active Indicator
PDA_IS_REFUSED_C	|	NUMBER	|	Refused Indicator
PDA_LAST_DECSN_MODIFIED_DT_C	|	DATE	|	Last Decision Modified Date
PDA_MASTER_REBATE_AGMNT_NBR_C	|	VARCHAR(255)	|	Master Rebate Agreement Number
NAME	|	VARCHAR(255)	|	Decision Name
PDA_PAYMENT_DUE_DATE_C	|	DATE	|	Payment Due Date
PDA_POSTPONE_DECSN_MESSAGE_C	|	VARCHAR(255)	|	Postpone Decision Message
PDA_POSTPONE_MESSAGE_C	|	VARCHAR(255)	|	Postpone Message
PDA_REMAINING_BALANCE_C	|	NUMBER	|	Remaining Balance
PDA_SAP_STATUS_C	|	VARCHAR(255)	|	Sap Status
PDA_SUCCESS_SUBMISSION_DATE_C	|	DATE	|	Success Submission Date
PDA_SUCS_SBMSN_DT_IS_ACTIVE_C	|	NUMBER	|	Success Submission Date Active Indicator
PDA_VARIABLE_DECSN_DUE_DT_C	|	DATE	|	Variable Payment Decision Due Date
PDA_VARIABLE_DECSN_PREV_MTH_C	|	VARCHAR(18)	|	Variable Payment Decision Previous Month
PDA_VARIABLE_EXPIRATION_DT_C	|	DATE	|	Variable Expiration Date
PDA_VARIABLE_PAYMENT_LOOKUP_C	|	VARCHAR(18)	|	Variable Payment ID
PDA_VARIABLE_PAYMENT_AMOUNT_C	|	NUMBER	|	Variable Payment Amount
PDA_VAR_PMT_DECSN_END_DT_C	|	DATE	|	Variable Payment Decision End Date
PDA_VAR_PMT_DECSN_START_DT_C	|	DATE	|	Variable Payment Decision Start Date
PDA_VARIABLE_PERIOD_C	|	VARCHAR(255)	|	Variable Period
ID	|	VARCHAR(18)	|	Record ID
RECORDTYPEID	|	VARCHAR(18)	|	Record Type
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_IS_AUTO_POSTPONED_C	|	NUMBER	|	Auto Postponed Indicator
PDA_MONTH_C	|	VARCHAR(255)	|	Month 
PDA_PAID_ON_PREV_CONTRACT_C	|	NUMBER	|	Pain On Previous Contract
PDA_VAR_PMT_ACTUAL_AMT_C	|	NUMBER	|	Variable Payment Actual Amount
PDA_VAR_PMT_TOT_ACTUAL_VOL_C	|	NUMBER	|	Variable Payment Total Actual Volume



## PDA Payment Reason

 Table Name :  CSDI_SF_S.PDA_PAYMENT_REASON_C<br/>
 View Name :  CSDI_SF.PDA_PAYMENT_REASON_C<br/>

This is the landing table for PDA Payment Reason. This reference table stores the Payment Reason options related to Fix Payment Types.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
PDA_DESCRIPTION_FRENCH_C	|	VARCHAR(255)	|	Description in French
PDA_IS_AGAINST_STRATEGY_C	|	NUMBER	|	Against Strategy Indicator
PDA_IS_BUDGET_IMPACTED_C	|	NUMBER	|	Budget Impacted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_CODE_C	|	VARCHAR(255)	|	CODE
PDA_FIX_PAYMENT_TYPE_C	|	VARCHAR(18)	|	Fixed Payment Type
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_IS_EXCEPTION_C	|	NUMBER	|	Exception Indicator
PDA_PAYMENT_REASON_ID_C	|	VARCHAR(255)	|	Payment Reason ID
NAME	|	VARCHAR(255)	|	Payment Reason Name
PDA_SECTION_C	|	NUMBER	|	Section
PDA_SYSSCRAMBLEDCONFIGITMID_C	|	VARCHAR(255)	|	System Scrambled Configuration Item ID
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_IS_VISIBLE_ON_CONTRACT_C	|	NUMBER	|	Visible on Contract Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA POC Territory

 Table Name :  CSDI_SF_S.PDA_POC_TERRITORY_C<br/>
 View Name :  CSDI_SF.PDA_POC_TERRITORY_C<br/>

This is the landing table for PDA POC Territory. This is Junction table to relate POCs to Territories (many to many).

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_IS_CUSTOMER_PLACEHOLDER_C	|	NUMBER	|	Customer Placeholder Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_CUSTOMER_PLACEHOLDER_C	|	VARCHAR(18)	|	Customer Placeholder ID
PDA_IS_CUSTOM_TERRITORY_C	|	NUMBER	|	Custom Territory Indicator
PDA_POC_TERRITORY_ID_C	|	VARCHAR(255)	|	POC Territory ID
NAME	|	VARCHAR(255)	|	POC Territory Name
PDA_POC_C	|	VARCHAR(18)	|	Account ID
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TERRITORIES_C	|	VARCHAR(18)	|	Territory ID
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Question Answers

 Table Name :  CSDI_SF_S.PDA_QUESTION_ANSWER_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_ANSWER_C<br/>

This is the landing table for PDA Question Answers. This Contains the selected answer for the related question. Also links the answer to a Business Driver/PDAH.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_ANSWER_C	|	VARCHAR(255)	|	Answer
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NEGOTIATED_COST_C	|	NUMBER	|	Negotiated Cost
NAME	|	VARCHAR(255)	|	Answer Name
PDA_BUSINESS_DRIVER_C	|	VARCHAR(18)	|	Business Driver Name
PDA_ENDS_GROUP_C	|	NUMBER	|	Ends Group
PDA_QUESTION_C	|	VARCHAR(18)	|	Question ID
PDA_QUESTION_ANSWER_C	|	VARCHAR(18)	|	Question Answer ID
PDA_QUESTION_ANSWER_ID_C	|	VARCHAR(255)	|	Question Answer ID
PDA_QUESTION_N_A_C	|	NUMBER	|	Question no Answer Indicator
ID	|	VARCHAR(18)	|	Record ID
PDA_SUGGESTED_COST_C	|	NUMBER	|	Suggested Cost
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Question Answer Investment

 Table Name :  CSDI_SF_S.PDA_QUESTION_ANS_INVST_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_ANS_INVST_C<br/>

This is the landing table for PDA Question Answer Investment. It is the Junction between PDA Question Answer and PDA Investment.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
OWNERID	|	VARCHAR(18)	|	User Id of Owner
NAME	|	VARCHAR(255)	|	Question Answer Investment Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_ANSWER_ENGLISH_C	|	VARCHAR(255)	|	Answer in English
PDA_ANSWER_FRENCH_C	|	VARCHAR(255)	|	Answer in French
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_INVESTMENT_NAME_C	|	VARCHAR(255)	|	Investment Name
PDA_INVESTMENT_C	|	VARCHAR(18)	|	Investment ID
PDA_MONTH_C	|	VARCHAR(255)	|	Month Number
PDA_NEGOTIATED_COST_PER_CS_C	|	NUMBER	|	Negotiated Cost Per Case
PDA_POC_PHF_BUSINESS_ID_C	|	VARCHAR(255)	|	POC Code
PDA_PLAN_NUMBER_C	|	VARCHAR(255)	|	Plan Number
PDA_PROPOSED_COST_PER_CASE_C	|	NUMBER	|	Proposed Cost Per Case
PDA_QUESTION_ANSWER_C	|	VARCHAR(18)	|	Question Answer ID
PDA_QUESTION_ENGLISH_C	|	VARCHAR(255)	|	Question in English
PDA_QUESTION_FRENCH_C	|	VARCHAR(255)	|	Question in French
PDA_QUESTION_GROUP_ENGLISH_C	|	VARCHAR(255)	|	Question Group Name in English
PDA_QUESTION_GROUP_FRENCH_C	|	VARCHAR(255)	|	Question Group Name in French
PDA_QUESTION_HEADER_FRENCH_C	|	VARCHAR(255)	|	Question Header in French
PDA_QUESTION_HEADER_C	|	VARCHAR(255)	|	Question Header
PDA_SKU_GROUP_C	|	VARCHAR(255)	|	SKU Group Name
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_YEAR_C	|	VARCHAR(255)	|	Year



## PDA Question Group

 Table Name :  CSDI_SF_S.PDA_QUESTION_GROUP_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_GROUP_C<br/>

This is the landing table for PDA Question Group.  It contains a logical grouping of questions within a question header.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
NAME	|	VARCHAR(255)	|	Question Group Name
PDA_QUESTION_HEADER_C	|	VARCHAR(18)	|	Question Header ID
PDA_QUESTION_HEADER_NAME_C	|	VARCHAR(255)	|	Question Header Name 
ID	|	VARCHAR(18)	|	Record ID
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_MAX_PERCENTAGE_C	|	NUMBER	|	Maximum percentage
PDA_NAME_FRENCH_C	|	VARCHAR(255)	|	Question Group Name in French
PDA_NAME_ENGLISH_C	|	VARCHAR(255)	|	Question Group Name in English
PDA_QUESTION_GROUP_ID_C	|	VARCHAR(255)	|	Question Group ID
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Question Header SKU Group

 Table Name :  CSDI_SF_S.PDA_QUESTION_HDR_SKU_GRP_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_HDR_SKU_GRP_C<br/>

This is the landing table for PDA Question Header SKU Group.  It is junction table to relate SKU Groups to PDA Question Header (many to many)

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_QUESTION_HEADER_C	|	VARCHAR(18)	|	Question Header ID
PDA_QUESTION_HDR_SKU_GRP_ID_C	|	VARCHAR(255)	|	Question Header SKU Group ID
NAME	|	VARCHAR(255)	|	Question Header SKU Group Name
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group ID
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Question Header Classification

 Table Name :  CSDI_SF_S.PDA_QUESTION_HEADER_CLSFN_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_HEADER_CLSFN_C<br/>

This is the landing table for PDA Question Header Classification.  It links Question Headers to Classifications for available Business Drivers based on Classifications

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CLASSIFICATION_TYPE_C	|	VARCHAR(255)	|	Classification Type
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_CONFIG_ITEM_C	|	VARCHAR(18)	|	Configuration Item ID
PDA_QUESTION_HEADER_C	|	VARCHAR(18)	|	Question Header ID
PDA_QUESTION_HDR_CLSFN_ID_C	|	VARCHAR(255)	|	Question Header Classification ID
NAME	|	VARCHAR(255)	|	Question Header Classification Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp





## PDA Question Header

 Table Name :  CSDI_SF_S.PDA_QUESTION_HEADER_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_HEADER_C<br/>

This is the landing table for PDA Question Header .  It groups an entire PDA Business Driver questionnaire together

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_NAME_ENGLISH_C	|	VARCHAR(255)	|	Question Header Name English
PDA_NAME_FRENCH_C	|	VARCHAR(255)	|	Question Header Name French
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_BUSINESS_DRIVER_TYPE_C	|	VARCHAR(18)	|	Business Driver ID
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_QUESTION_HEADER_ID_C	|	VARCHAR(255)	|	Question Header ID
NAME	|	VARCHAR(255)	|	Question Header Name
PDA_SKU_GROUPS_C	|	VARCHAR(255)	|	SKU Group
ID	|	VARCHAR(18)	|	Record ID
PDA_QUESTION_HEADER_STATUS_C	|	VARCHAR(255)	|	Question Header Status
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_VALUE_C	|	NUMBER	|	Value
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_LAST_YEAR_COST_PER_CASE_C	|	NUMBER	|	Last Year Cost Per Case


## PDA Question

 Table Name :  CSDI_SF_S.PDA_QUESTION_C<br/>
 View Name :  CSDI_SF.PDA_QUESTION_C<br/>

This is the landing table for PDA Question. The specific question to ask the user as well as the logic for calculating cost per case based on the answers given.


Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_CAN_BE_N_A_C	|	NUMBER	|	Answer Can be NA Indicator
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_INTERNAL_ORDER_NUMBER_C	|	NUMBER	|	Internal Order Number
PDA_COMPOSITE_QUESTION_C	|	NUMBER	|	Composite Question Indicator
PDA_LABEL_C	|	VARCHAR(255)	|	Label
PDA_LABEL_FRENCH_C	|	VARCHAR(255)	|	Label French
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_COMPOSITE_QUESTION_1_C	|	VARCHAR(18)	|	Composite Question ID 1
PDA_COMPOSITE_QUESTION_2_C	|	VARCHAR(18)	|	Composite Question ID 2
PDA_QUESTION_GROUP_C	|	VARCHAR(18)	|	Question Group ID
PDA_QUESTION_ID_C	|	VARCHAR(255)	|	Question ID
NAME	|	VARCHAR(255)	|	Question Name
PDA_QUESTION_PERCENT_C	|	NUMBER	|	Question Percentage
ID	|	VARCHAR(18)	|	Record ID
PDA_REFERENCED_FIELD_C	|	VARCHAR(255)	|	Referenced Field
PDA_SORT_ORDER_C	|	NUMBER	|	Sort Order
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TYPE_C	|	VARCHAR(255)	|	Type
PDA_VISIBLE_ON_CONTRACT_C	|	NUMBER	|	Visible on Contract Indicator
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_PERCENT_ANSWER_WEIGHT_C	|	NUMBER	|	Answer Weight Percentage


## PDA Rebate Agreement

 Table Name :  CSDI_SF_S.PDA_REBATE_AGREEMENT_C<br/>
 View Name :  CSDI_SF.PDA_REBATE_AGREEMENT_C<br/>

This is the landing table for PDA Rebate Agreement. This object will act as a junction storing or relating all the information needed for rebate agreement integration to SAP.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_BUSINESS_DRIVER_C	|	VARCHAR(18)	|	Business Driver ID
PDA_CODE_C	|	VARCHAR(255)	|	Code
PDA_CONDITION_SCALE_QTY_C	|	VARCHAR(255)	|	Condition Scale Quantity
PDA_CONVERSION_RATE_C	|	VARCHAR(255)	|	Conversion Rate
PDA_CONVERSION_RATE_SCALE_C	|	VARCHAR(255)	|	Conversion Rate Scale
PDA_COST_PER_CS_C	|	NUMBER	|	Cost Per Case
PDA_END_DATE_C	|	VARCHAR(255)	|	End Date
PDA_EXTERNAL_DESCRIPTION_C	|	VARCHAR(255)	|	External Description
PDA_FIXED_PAYMENT_C	|	VARCHAR(18)	|	Fixed Payment ID
PDA_FIX_PAYMENT_AMOUNT_C	|	NUMBER	|	Fixed Payment Amount
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_INTERNAL_KEY_FOR_SAP_C	|	VARCHAR(255)	|	SAP Internal Key
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_IS_PAYMENT_DECISION_C	|	NUMBER	|	Payment Decision Indicator
PDA_KEY_C	|	VARCHAR(255)	|	Key
PDA_KEY_APPEND_C	|	VARCHAR(255)	|	Appended Key
PDA_KEY_COMBINATION_C	|	VARCHAR(255)	|	Key Combination
PDA_NBR_OF_RETRIES_FORMULA_C	|	NUMBER	|	Formula for Number of Retries
PDA_PAYMENT_DECISION_C	|	VARCHAR(18)	|	Payment Decision ID
PDA_PAYMENT_METHOD_C	|	VARCHAR(255)	|	Payment Method ID
PDA_REBATE_AGMNT_DESC_C	|	VARCHAR(255)	|	Rebate Agreement Description
PDA_REBATE_AGREEMENT_LEVEL_C	|	VARCHAR(255)	|	Rebate Agreement Level
NAME	|	VARCHAR(255)	|	Rebate Agreement Name
PDA_REBATE_AGREEMENT_TYPE_C	|	VARCHAR(255)	|	Rebate Agreement Type
PDA_REBATE_RECIPIENT_C	|	VARCHAR(255)	|	Rebate Recipient
PDA_REPLICATED_HEADER_C	|	VARCHAR(255)	|	Replicated Header
PDA_REVERSAL_COST_PER_CS_C	|	NUMBER	|	Cost Per Case Reversal
PDA_SAP_KEY_COMBINATION_C	|	VARCHAR(255)	|	SAP Key Combination
PDA_SAP_KNUMA_C	|	VARCHAR(255)	|	SAP Agreement number
PDA_SAP_REBATE_AGREEMENT_ID_C	|	VARCHAR(255)	|	SAP Rebate Agreement ID
PDA_SETTLEMENT_PERIOD_C	|	VARCHAR(255)	|	Settlement Period
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group ID
PDA_START_DATE_C	|	VARCHAR(255)	|	Start Date
PDA_STATUS_FORMULA_C	|	VARCHAR(255)	|	Status Formula
PDA_VARIABLE_C	|	VARCHAR(18)	|	Variable Payment ID
PDA_VARIABLE_SCALE_C	|	VARCHAR(18)	|	Variable Scale ID
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Role 

 Table Name :  CSDI_SF_S.PDA_ROLE_C<br/>
 View Name :  CSDI_SF.PDA_ROLE_C<br/>

This is the landing table for PDA Role. It stores the application user roles, e.g., Territory Manager, District Manager, etc.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
DESCRIPTION_EN_C	|	VARCHAR(255)	|	Description in English
PDA_DESCRIPTION_FR_C	|	VARCHAR(255)	|	Description in French
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_ROLE_ID_C	|	VARCHAR(255)	|	Role ID
NAME	|	VARCHAR(255)	|	Role Name
ID	|	VARCHAR(18)	|	Record ID
PDA_ROLE_LEVEL_C	|	NUMBER	|	Role Level
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA SKU Group Item


 Table Name :  CSDI_SF_S.PDA_SKU_GROUP_ITEM_C<br/>
 View Name :  CSDI_SF.PDA_SKU_GROUP_ITEM_C<br/>

This is the landing table for PDA SKU Group Item. It stores the individual SKUs making up a SKU Group.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_GLOBAL_PROD_HIERARCHY_C	|	VARCHAR(255)	|	Global Product Hierarchy
LASTACTIVITYDATE	|	DATE	|	Date of Lat Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_MATERIAL_GROUP_3_C	|	VARCHAR(255)	|	Material Group
PDA_PACKAGE_C	|	VARCHAR(255)	|	Package count
PDA_BRAND_CODE_C	|	VARCHAR(255)	|	Brand Code
PDA_INVALID_GPH_C	|	NUMBER	|	Invalid Global Product Hierarchy Indicator
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group ID
NAME	|	VARCHAR(255)	|	SKU Group Item Name
PDA_STATUS_C	|	VARCHAR(255)	|	Status
PDA_PRODUCT_C	|	VARCHAR(18)	|	Product ID
ID	|	VARCHAR(18)	|	Record ID
PDA_SAP_PRODUCT_ID_C	|	VARCHAR(255)	|	SAP Material Code
PDA_SKU_GROUP_ITEM_ID_C	|	VARCHAR(255)	|	SKU Group Item ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA SKU Group

 Table Name :  CSDI_SF_S.PDA_SKU_GROUP_C<br/>
 View Name :  CSDI_SF.PDA_SKU_GROUP_C<br/>

This is the landing table for PDA SKU Group. A SKU Group may contain one or more SKUs set by back office users.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_ANCESTER_IDS_C	|	VARCHAR(255)	|	Ancestor IDs in Order
PDA_ANCESTORS_C	|	VARCHAR(255)	|	List of Ancestors in Order
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_FISCAL_YEAR_C	|	VARCHAR(255)	|	Fiscal Year
PDA_GLOBAL_PROD_HIER_CODE_C	|	VARCHAR(255)	|	Global Product Hierarchy Code
PDA_IS_IRREVELANT_FLAG_C	|	NUMBER	|	Irrelevant Flag Indicator
PDA_IS_SKU_GROUP_HEADER_C	|	NUMBER	|	SKU Group Header Indicator
PDA_IS_UNASSIGNED_FLAG_C	|	NUMBER	|	Unassigned Flag Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_SKU_GROUP_LEGACY_ID_C	|	VARCHAR(255)	|	SKU group Legacy ID
PDA_LEGACY_PRNT_SKU_GRP_ID_C	|	VARCHAR(255)	|	Parent SKU Group Legacy ID
PDA_MATERIAL_GROUP_VALUE_C	|	VARCHAR(255)	|	Material Group Value
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_PARENT_SKU_GROUP_C	|	VARCHAR(18)	|	Parent SKU Group ID
PDA_ANCESTOR_IS_IRRELEVANT_C	|	NUMBER	|	Irrelevant Ancestor Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
PDA_MATERIAL_TYPE_C	|	VARCHAR(255)	|	Material Type
PDA_SKU_GROUP_ID_C	|	VARCHAR(255)	|	SKU Group ID
NAME	|	VARCHAR(255)	|	SKU Group Name
PDA_TOP_OF_PYRAMID_SKU_GRP_C	|	VARCHAR(18)	|	Top Of Pyramid SKU Group ID
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise
PDA_PYRAMID_NAME_C	|	VARCHAR(255)	|	Pyramid Name
ID	|	VARCHAR(18)	|	Record ID
PDA_SAP_EXPORT_LEVEL_C	|	VARCHAR(255)	|	SAP Export Level
PDA_SKU_GROUP_STATUS_C	|	VARCHAR(255)	|	SKU Group Status
SORT_NUMBER_C	|	NUMBER	|	Sort Order Number
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TOP_OF_PYRAMID_C	|	NUMBER	|	Top Of Pyramid Indicator
PDA_YEAR_C	|	VARCHAR(255)	|	Year
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Territory


 Table Name :  CSDI_SF_S.PDA_TERRITORY_C<br/>
 View Name :  CSDI_SF.PDA_TERRITORY_C<br/>

This is the landing table for PDA Territory.  It contains PDA Territories for each version of the PDA application: e.g., Labatt, Archibald.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DISTRICT_C	|	VARCHAR(255)	|	District Name
PDA_TERRITORY_DSM_C	|	VARCHAR(18)	|	Territory's DSM (District Sales Manager)
PDA_IS_CUSTOM_TERR_GROUP_C	|	NUMBER	|	Custom Territory Group Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application name
PDA_DISTRICT_HIERARCHY_C	|	VARCHAR(18)	|	District Hierarchy ID
PDA_RM_C	|	VARCHAR(18)	|	Regional Manager ID
PDA_TERRITORY_ID_C	|	VARCHAR(255)	|	Territory ID
NAME	|	VARCHAR(255)	|	Territory Name
PDA_TERRITORY_RD_C	|	VARCHAR(18)	|	Territory RD
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TM_C	|	VARCHAR(18)	|	Territory Manager
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA User


 Table Name :  CSDI_SF_S.PDA_USER<br/>
 View Name :  CSDI_SF.PDA_USER<br/>

This is the landing table for PDA User.  It contains List of PDA users with its attributes.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
ACCOUNTID	|	VARCHAR(18)	|	Account ID
ISACTIVE	|	NUMBER	|	Active Indicator
CITY	|	VARCHAR(255)	|	City Name
COMPANYNAME	|	VARCHAR(255)	|	Company Name
COUNTRY	|	VARCHAR(255)	|	Country Name
EMAIL	|	VARCHAR(255)	|	Email ID
EMPLOYEENUMBER	|	VARCHAR(255)	|	Employee Number
FIRSTNAME	|	VARCHAR(255)	|	First Name
NAME	|	VARCHAR(255)	|	User Name
LASTNAME	|	VARCHAR(255)	|	Last Name
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PHONE	|	VARCHAR(255)	|	Phone Number
ID	|	VARCHAR(18)	|	Record ID
USERNAME	|	VARCHAR(255)	|	PDA Login user Name
USERTYPE	|	VARCHAR(255)	|	User Type
USER_TYPE_C	|	VARCHAR(255)	|	Type of user (Internal /External)
POSTALCODE	|	VARCHAR(255)	|	Postal code
LBOC_LABATT_USER_EXTRL_ID_C	|	VARCHAR(255)	|	Labatt Users External ID
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Variable Scale

 Table Name :  CSDI_SF_S.PDA_VARIABLE_SCALE_C<br/>
 View Name :  CSDI_SF.PDA_VARIABLE_SCALE_C<br/>

This is the landing table for PDA Variable Scale.  It contains PDA Variable scales and volume bonus.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_COST_PER_CASE_C	|	NUMBER	|	Cost Per Case 
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_END_DATE_C	|	DATE	|	End Date
PDA_ESTIMATED_INVESTMENT_C	|	NUMBER	|	Estimated Investment
PDA_MODIFIED_VARIABLE_SCALE_C	|	VARCHAR(18)	|	Modified Variable Scale
PDA_ORIGINAL_VARIABLE_SCALE_C	|	VARCHAR(18)	|	Original Variable Scale
PDA_START_DATE_C	|	DATE	|	Start Date
PDA_VARIABLE_C	|	VARCHAR(18)	|	Variable ID
NAME	|	VARCHAR(255)	|	Variable Scale Name
PDA_VOLUME_C	|	NUMBER	|	Volume 
ID	|	VARCHAR(18)	|	Record ID
PDA_SCALE_FROM_C	|	NUMBER	|	Scale From
PDA_SCALE_TO_C	|	NUMBER	|	Scale To
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Variable SKU group


 Table Name :  CSDI_SF_S.PDA_VARIABLE_SKU_GROUP_C<br/>
 View Name :  CSDI_SF.PDA_VARIABLE_SKU_GROUP_C<br/>

This is the landing table for PDA Variable SKU Group.  It is junction table to relate SKU Groups to PDA Variable (many to many)

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_SKU_GROUP_C	|	VARCHAR(18)	|	SKU Group ID
PDA_VARIABLE_C	|	VARCHAR(18)	|	Variable ID
NAME	|	VARCHAR(255)	|	Variable SKU Group Name
ID	|	VARCHAR(18)	|	Record ID
SORT_NUMBER_C	|	NUMBER	|	Sort Order Number
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Variable


 Table Name :  CSDI_SF_S.PDA_VARIABLE_C<br/>
 View Name :  CSDI_SF.PDA_VARIABLE_C<br/>

This is the landing table for PDA Variable. It contains the PDA Variables created by Reps applicable to PDA Headers.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
PDA_AVERAGE_COST_PER_CASE_C	|	NUMBER	|	Average Cost Per Case
PDA_COST_PER_CASE_C	|	NUMBER	|	Cost Per Case
PDA_ESTIMATED_VOLUME_C	|	NUMBER	|	Estimated Volume
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_INTERNAL_ORDER_NUMBER_C	|	VARCHAR(255)	|	Internal Order Number
PDA_IS_AMOUNT_MODIFIED_C	|	NUMBER	|	Amount Modified Indicator
PDA_IS_COST_PER_CASE_MOD_C	|	NUMBER	|	Cost Per Case Modified Indicator
PDA_IS_DATE_MODIFIED_C	|	NUMBER	|	Date Modified Indicator
PDA_IS_INTERNAL_ORD_NBR_MOD_C	|	NUMBER	|	Internal Order Number Modified Indicator
PDA_IS_PMT_METHOD_MOD_C	|	NUMBER	|	Payment Method Modified Indicator
PDA_IS_SKU_GROUP_MODIFIED_C	|	NUMBER	|	SKU Group Modified Indicator
PDA_IS_VARIABLE_SCALES_MOD_C	|	NUMBER	|	Variable Scale Modified Indicator
PDA_IS_VOLUME_TARGET_MOD_C	|	NUMBER	|	Volume Target Modified Indicator
PDA_JUSTIFICATION_C	|	VARCHAR(255)	|	Justification
PDA_LAST_YEAR_COST_PER_CASE_C	|	NUMBER	|	Last Year Cost Per Case
PDA_MASTER_REBATE_AGMNT_NBR_C	|	VARCHAR(255)	|	Master Rebate Agreement Number
PDA_MODIFIED_VARIABLE_C	|	VARCHAR(18)	|	Modified Variable ID
PDA_ORIGINAL_VARIABLE_C	|	VARCHAR(18)	|	Original Variable ID
PDA_PAYMENT_METHOD_C	|	VARCHAR(255)	|	Payment Method
PDA_PAYMENT_REASON_C	|	VARCHAR(18)	|	Payment Reason ID
PDA_REASON_C	|	VARCHAR(255)	|	Reason ID
PDA_SAP_PAYMENT_STATUS_C	|	VARCHAR(255)	|	SAP Payment Status
PDA_SCALE_AVG_EXCEEDS_MAX_C	|	NUMBER	|	Scale Average Exceeds Maximum
PDA_SETTLEMENT_PERIOD_C	|	VARCHAR(255)	|	Settlement Period
PDA_TOTAL_CNT_VAR_SCALES_C	|	NUMBER	|	Total Count of Variable Scales
PDA_TYPE_LOOKUP_C	|	VARCHAR(18)	|	Type Lookup ID
PDA_TYPE_FORMULA_C	|	VARCHAR(255)	|	Type Formula
NAME	|	VARCHAR(255)	|	Variable Name
PDA_VAR_PMT_TYP_FORMULA_C	|	VARCHAR(255)	|	Variable Payment Type Formula
PDA_VAR_PMT_TYP_NM_FORMULA_C	|	VARCHAR(255)	|	Variable Payment Type Name Formula
PDA_VAR_SCALE_EST_INVST_C	|	NUMBER	|	Variable Scale Estimated Investment
ID	|	VARCHAR(18)	|	Record ID
PDA_START_DATE_C	|	DATE	|	Start Date
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
TARGETED_VOLUME_C	|	NUMBER	|	Targeted Volume
PDA_TYPE_ALT_C	|	VARCHAR(255)	|	Alternate Type
UNIT_OF_MEASURE_C	|	VARCHAR(255)	|	Unit of Measure
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_END_DATE_C	|	DATE	|	End Date
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_AMOUNT_C	|	NUMBER	|	Amount ID
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp



## PDA Volume


 Table Name :  CSDI_SF_S.PDA_VOLUME_C<br/>
 View Name :  CSDI_SF.PDA_VOLUME_C<br/>

This is the landing table for PDA Volume. It is used to set the volume per month and per year for each PDA header.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_IS_COMMITTED_C	|	NUMBER	|	Committed Indicator
LASTACTIVITYDATE	|	DATE	|	Date of Last Activity
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
PDA_ANNUAL_POC_BUDGET_C	|	VARCHAR(18)	|	Annual POC Budget ID
PDA_HEADER_C	|	VARCHAR(18)	|	Header ID
PDA_HEADER_PLAN_NUMBER_C	|	VARCHAR(255)	|	Header Plan Number
PDA_HEADER_STATUS_C	|	VARCHAR(255)	|	Header Status
PDA_LATEST_VOLUME_C	|	NUMBER	|	Latest Volume
PDA_VOLUME_C	|	NUMBER	|	Volume
PDA_VOLUME_ID_C	|	VARCHAR(255)	|	Volume ID
PDA_VOLUME_MONTH_C	|	VARCHAR(255)	|	Volume Month
NAME	|	VARCHAR(255)	|	Volume Name
PDA_VOLUME_YEAR_C	|	VARCHAR(255)	|	Volume Year
PDA_VOLUME_YEAR_NUMBER_C	|	NUMBER	|	Volume Year in Number
ID	|	VARCHAR(18)	|	Record ID
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_PHF_BUSINESS_ID_C	|	VARCHAR(255)	|	POC Code



## PDA Warning Approval Template Step


 Table Name :  CSDI_SF_S.PDA_WARNG_APRVL_TMPL_STEP_C<br/>
 View Name :  CSDI_SF.PDA_WARNG_APRVL_TMPL_STEP_C<br/>

This is the landing table for PDA Volume. It is a Junction object - Allows the relating of a single PDA Warning to multiple PDA Approval Template Steps

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_APPROVAL_TEMPLATE_STEP_C	|	VARCHAR(18)	|	Approval Template Step ID
PDA_WARNING_C	|	VARCHAR(18)	|	Warning ID
PDA_WARN_APRVL_TMPL_STEP_ID_C	|	VARCHAR(255)	|	Warning Approval Template Step ID
NAME	|	VARCHAR(255)	|	Warning Approval Template Step Name
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp


## PDA Warning Formula


 Table Name :  CSDI_SF_S.PDA_WARNING_FORMULA_C<br/>
 View Name :  CSDI_SF.PDA_WARNING_FORMULA_C<br/>

This is the landing table for PDA Volume. It contains formulas related to each PDA Warning.

Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_FIELD_1_DISPLAY_NAME_C	|	VARCHAR(255)	|	Field 1 Display Name
PDA_FIELD_1_IS_RELATIONSHIP_C	|	NUMBER	|	Field 1 Relationship Indicator
PDA_FIELD_1_IS_STATIC_C	|	NUMBER	|	Field 1 Static Indicator
PDA_FIELD_1_PARENT_C	|	VARCHAR(255)	|	Field 1 Parent Object
PDA_FIELD1_PARENT_FIELD_C	|	VARCHAR(255)	|	Field 1 Parent Object Column
PDA_FIELD_2_DISPLAY_NAME_C	|	VARCHAR(255)	|	Field 2 Display Name
PDA_FIELD_2_IS_RELATIONSHIP_C	|	NUMBER	|	Field 2 Relationship Indicator
PDA_FIELD_2_IS_STATIC_C	|	NUMBER	|	Field 2 Static Indicator
PDA_FIELD_2_PARENT_C	|	VARCHAR(255)	|	Field 2 Parent Object
PDA_FIELD_2_PARENT_FIELD_C	|	VARCHAR(255)	|	Field 2 Parent Object Column
PDA_FIELD_TYPE_C	|	VARCHAR(255)	|	Field Type
PDA_HEADER_COMPARISON_C	|	NUMBER	|	Header Comparison ID
PDA_HDR_COMPARISON_TYPE_1_C	|	VARCHAR(255)	|	Header Comparison Type 1
PDA_HDR_COMPARISON_TYPE_2_C	|	VARCHAR(255)	|	Header Comparison Type 2
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
PDA_FIELD1_C	|	VARCHAR(255)	|	Field 1
PDA_FIELD1_AGG_FILTER_C	|	VARCHAR(4800)	|	Field 1 Aggregation Filter
PDA_FIELD1_AGGREGATION_C	|	VARCHAR(255)	|	Field 1 Aggregation Type
PDA_FIELD1_DISPLAY_FRENCH_C	|	VARCHAR(255)	|	Field 1 Display Name French
PDA_FIELD1_FILTER_FIELDS_C	|	VARCHAR(4800)	|	Field 1 Filter Fields
PDA_FIELD2_C	|	VARCHAR(255)	|	Field 2
PDA_FIELD2_AGG_FILTER_C	|	VARCHAR(4800)	|	Field 2 Aggregation Filter
PDA_FIELD2_AGGREGATION_C	|	VARCHAR(255)	|	Field 2 Aggregation Type
PDA_FIELD2_DISPLAY_FRENCH_C	|	VARCHAR(255)	|	Field 2 Display Name French
PDA_FIELD2_FILTER_FIELDS_C	|	VARCHAR(4800)	|	Field 2 Filter Fields
PDA_FORMULA_POSITION_C	|	NUMBER	|	Position Formula
PDA_OBJECT_C	|	VARCHAR(255)	|	Object name
PDA_OPERATOR_C	|	VARCHAR(255)	|	Operator
PDA_WARNING_C	|	VARCHAR(18)	|	Warning ID
PDA_WARNING_FORMULA_ID_C	|	VARCHAR(255)	|	Warning Formula ID
NAME	|	VARCHAR(255)	|	Warning Formula Name
PDA_PERCENT_DIFFERENCE_C	|	NUMBER	|	Percent Difference
PDA_PCT_DIFFERENCE_FORMULA_C	|	NUMBER	|	Percent Difference Formula
ID	|	VARCHAR(18)	|	Record ID
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_FIELD1_RELATIONSHIP_ACT_C	|	VARCHAR(255)	|	Field 1 Relationship Actual
PDA_FIELD2_RELATIONSHIP_ACT_C	|	VARCHAR(255)	|	Field 2 Relationship Actual
PDA_IS_CPC_C	|	NUMBER	|	Cost Per Case Indicator
PDA_OBJECT_FORMULA_C	|	VARCHAR(255)	|	Object Formula
PDA_VAL_DISPLAY_OVERRIDE_FR_C	|	VARCHAR(255)	|	Display Value Override French
PDA_VAL_DISPLAY_OVERRIDE_C	|	VARCHAR(255)	|	Display Value Override
SYS_PDAWARNINGNAME_C	|	VARCHAR(255)	|	System  Warning Name



## PDA Warning



 Table Name :  CSDI_SF_S.PDA_WARNING_C<br/>
 View Name :  CSDI_SF.PDA_WARNING_C<br/>

This is the landing table for PDA Warning. It contains KPIs & Warnings used to evaluate PDA Headers and APV.


Field Name	|	Data Type	|	COMMENT
|-	|	-	|	-
CREATEDBYID	|	VARCHAR(18)	|	User Id of Creator
CREATEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Creation
CURRENCYISOCODE	|	VARCHAR(255)	|	Currency Code
ISDELETED	|	NUMBER	|	Deleted Indicator
PDA_DESCRIPTION_C	|	VARCHAR(255)	|	Description
PDA_FIX_C	|	VARCHAR(255)	|	Fix
PDA_IMPACT_C	|	VARCHAR(255)	|	Impact
PDA_WARNING_KEY_C	|	VARCHAR(255)	|	Warning Key
LASTMODIFIEDBYID	|	VARCHAR(18)	|	User ID of Last Modifier
LASTMODIFIEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Modification
LASTREFERENCEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last Reference
LASTVIEWEDDATE	|	TIMESTAMP_NTZ	|	Date and Time of Last View
OWNERID	|	VARCHAR(18)	|	User Id of Owner
PDA_WARN_PDA_ANNL_POC_BDGT_C	|	VARCHAR(18)	|	Annual POC Budget Warning
PDA_FISCAL_YEAR_LOOKUP_C	|	VARCHAR(18)	|	Fiscal Year Lookup ID
PDA_FRENCH_DESCRIPTION_C	|	VARCHAR(255)	|	Description French
PDA_FRENCH_FIX_C	|	VARCHAR(255)	|	Fix French
PDA_FRENCH_IMPACT_C	|	VARCHAR(255)	|	Impact French
PDA_FRENCH_NAME_C	|	VARCHAR(255)	|	Warning name in French
PDA_WARNING_PDA_HEADER_C	|	VARCHAR(18)	|	Warning Header ID
PDA_HEADER_FILTER_C	|	VARCHAR(255)	|	Header Filter
PDA_IS_KPI_C	|	NUMBER	|	KPI indicator
PDA_KPI_POSITION_C	|	NUMBER	|	KPI Position
PDA_LOGICAL_EVALUATION_C	|	VARCHAR(255)	|	Logical Evaluation
PDA_PREMISE_C	|	VARCHAR(255)	|	Premise
PDA_REQUIRES_APPROVAL_C	|	NUMBER	|	Required Approval
PDA_SEVERITY_SORT_ORDER_C	|	NUMBER	|	Severity Sort Order
PDA_WARNING_ID_C	|	VARCHAR(255)	|	Warning ID
NAME	|	VARCHAR(255)	|	Warning Name
PDA_YEAR_FORMULA_C	|	VARCHAR(255)	|	Year Formula
ID	|	VARCHAR(18)	|	Record ID
PDA_WARNING_RESOLUTION_C	|	VARCHAR(255)	|	Warning Resolution
PDA_WARNING_SEVERITY_C	|	VARCHAR(255)	|	Warning Severity
PDA_WARNING_SOURCE_ID_C	|	VARCHAR(255)	|	Warning Source ID
PDA_WARNING_SOURCE_TYPE_C	|	VARCHAR(255)	|	Warning Source Type 
PDA_WARNING_STATUS_C	|	VARCHAR(255)	|	Warning Status
PDA_STATUS_C	|	VARCHAR(255)	|	Status
SYSTEMMODSTAMP	|	TIMESTAMP_NTZ	|	System Modification Timestamp
PDA_TRIGGERING_OBJECT_C	|	VARCHAR(255)	|	Triggering Object
PDA_WARNING_VALUE_C	|	VARCHAR(255)	|	Warning Value
LAST_UPDATED_TSP	|	TIMESTAMP_NTZ	|	Last Updated Timestamp
PDA_APPLICATION_C	|	VARCHAR(255)	|	Application Name
PDA_RPN_LOGIC_C	|	VARCHAR(255)	|	Reporting Logic
PDA_SEVERITY_ICON_C	|	VARCHAR(255)	|	Severity Icon