---
title: Distribution
tags:
    - Distribution 
    - Sales
    - Transportation
description: Distribution data across multiple different time frames
---
# Distribution  

The views that make up this data set provide results to Distribution across multiple different time frames using the appropriate Anheuser-Busch business logic. There are views to define Open Stores, Sold Store/Brand and Sold Store/PODs specifically for 4 Week, 13 Week, 26 Week, Month-Ending and YTD time frames. All results are based on records in the VIP_OUTLT view which is curated and administered by the Retail Account Cleansing team at VIP. All results based views adhere to the following AB Distribution rules:

**_Open Store_** – An outlet is considered an open store based on two very specific criterion:

_Criterion 1_: The outlet must be open at any point during the last week of specified time fame. The VPOPEN and VPCLOSED fields on the VIP_OUTLT view are used to determine eligibility. (Example: For R13W distribution the store must be open for at least one day in the last week of the 13 week period.)

_Criterion 2_: The outlet must fall within the assigned territory for the Wholesaler/Brand that is queried. Wholesaler/Outlet/Brand assignments are determined based on the wholesaler’s territory map and physical location of the outlet.

**_Sold Store_** – An outlet is considered a sold store based on two very specific criterion

 _Criterion 1_: The outlet must meet all the criterion above and be considered an Open Store for the specified time period.

 _Criterion 2_: The sum of Case Equivalent volume for the product(s) in question must be greater than 0 for the specified time period.

**_Point of Distribution (POD)_** – A POD a combination of a sold Brand/Line Code within an outlet where Case Equivalent volume is greater than 0 for the specified time frame. For Off Premise stores every Brand/Pack combo is counted toward the total POD count. For On-Premise there is a limit of 1 Draught and 1 Package POD per brand per outlet.

  

  

### **[EDW.VIP\_DIST\_OPEN_ISOWK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_OPEN_ISOWK)** 
This view defines the Open Store status for the combination of a Wholesaler, Brand and Outlet for a given ISO Week. This is the foundational view of all week-based Distribution reporting as a store must have Open status before it can be considered a Sold Store. There are two conditions that determine eligibility as an Open Store – the store must be opened at any point during the ISO week and it must have a valid relationship to the Wholesaler/Brand as determined by the WSLR\_TERR\_MEMBR view.
 

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week for which the Open Store flag is applicable |
| WSLR_NBR | VARCHAR(5) | Wholesaler Number for which the relationship to VIP ID and Brand is applicable |
| VPID | NUMBER(10,0) | VIP ID of Outlet for which the relationship to Wholesaler and Brand is applicable |
| BRND_CD | VARCHAR(3) | Master Brand Code for which the relationship to Wholesaler and VIP ID is applicable |
| OPEN_STORE | NUMBER(1,0) | Flag to indicate if the VIP Outlet is Open for the given ISO Week and has a valid relationship to the Wslr and Brand. |

  

### **[EDW.VIP\_DIST\_OPEN_MONTH](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_OPEN_MONTH)**
This view defines the Open Store status for the combination of a Wholesaler, Brand and Outlet for a given Calendar Month. This is the foundational view of all month-based Distribution reporting as a store must have Open status before it can be considered a Sold Store. There are two conditions that determine eligibility as an Open Store – the store must be opened at any point during the Calendar Month and it must have a valid relationship to the Wholesaler/Brand as determined by the WSLR\_TERR\_MEMBR view.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_MO_NBR | NUMBER(6,0) | Calendar  Year/Month value of the applicable month |
| WSLR_NBR | VARCHAR(5) | Wholesaler Number for which the relationship to VIP ID and Brand is applicable |
| VPID | NUMBER(10,0) | VIP ID of Outlet for which the relationship to Wholesaler and Brand is applicable |
| BRND_CD | VARCHAR(3) | Master Brand Code for which the relationship to Wholesaler and VIP ID is applicable |
| OPEN_STORE | NUMBER(1,0) | Flag to indicate if the VIP Outlet is Open for the given ISO Week and has a valid relationship to the Wslr and Brand. |


### **[EDW.VIP\_DIST\_MONTH\_SOLD\_POD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_MONTH_SOLD_POD)**
This view provides visibility into all sales of a Brand/Line Code combination to an outlet for the 13 week period ending on the last day of the CAL\_YR\_MO\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination in the full 13 week period. This data is updated daily for the current month and previous month (plus year ago period) and refreshed for all months on the 4th calendar day of the month. _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_MO_NBR | NUMBER(6,0) | Calendar  Year/Month value of the applicable month |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code that identifes the package size |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand/Line Code is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| EDW_START_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |


### **[EDW.VIP\_DIST\_MONTH\_SOLD\_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_MONTH_SOLD_BRND)**
This view provides visibility into all sales of a Brand to an outlet for the 13 week period ending on the last day of the CAL\_YR\_MO\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand combination in the full 13 week period. This view is created as an aggregate of the VIP\_DIST\_MONTH\_SOLD\_POD view. This data is updated daily for the current month and previous month (plus year ago period) and refreshed for all months on the 4th calendar day of the month. _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| CAL\_YR\_MO_NBR | NUMBER(6,0) | Calendar  Year/Month value of the applicable month |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| TOTAL\_CE\_DRAUGHT | FLOAT | Sum of Draught Case Equivalents Sold |
| TOTAL\_CE\_PACK | FLOAT | Sum of Package Case Equivalents Sold |
| POD_TOTAL | NUMBER(18,0) | Sum of PODs (brand/line code combos) |
| POD_PACK | NUMBER(18,0) | Sum of Packaged PODs (1 max per brand for On-Prem) |
| POD_DRAUGHT | NUMBER(18,0) | Sum of Draught PODs (1 max per brand for On-Prem) |
| EDW_START_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

  
### **[EDW.VIP\_DIST\_R13W\_SOLD\_POD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_R13W_SOLD_POD)** 
This view provides visibility into all sales of a Brand/Line Code combination to an outlet for the 13 week period ending on the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination in the full 13 week period. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month. _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._
 

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 13 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code that identifes the package size |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand/Line Code is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

  
### **[EDW.VIP\_DIST\_R13W\_SOLD\_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_R13W_SOLD_BRND)** 
This view provides visibility into all sales of a Brand to an outlet for the 13 week period ending on the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand combination in the full 13 week period. This view is created as an aggregate of the VIP\_DIST\_R13W\_SOLD_POD view. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month.  _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period.  
  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 13 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| TOTAL\_CE\_DRAUGHT | FLOAT | Sum of Draught Case Equivalents Sold |
| TOTAL\_CE\_PACK | FLOAT | Sum of Package Case Equivalents Sold |
| POD_TOTAL | NUMBER(18,0) | Sum of PODs (brand/line code combos) |
| POD_PACK | NUMBER(18,0) | Sum of Packaged PODs (1 max per brand for On-Prem) |
| POD_DRAUGHT | NUMBER(18,0) | Sum of Draught PODs (1 max per brand for On-Prem) |
| EDW_START_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

 
### **[EDW.VIP\_DIST\_R26W\_SOLD\_POD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_R26W_SOLD_POD)**
This view provides visibility into all sales of Wine & Spirits ONLY Brand/Line Code combinations to an outlet for the 26 week period ending on the week in the ISO\_YR\_WK\_NBR field. Wine and Spirits brands are defined by the FED\_PROD\_CLSFN\_CD field on the BRND view having a value of LQ or WN. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination in the full 26 week period. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month. _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 13 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code that identifes the package size |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand/Line Code is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

<!--    
### **[EDW.VIP\_DIST\_R26W\_SOLD\_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_R26W_SOLD_BRND)**
This view provides visibility into all sales of Wine & Spirits Brand to an outlet for the 26 week period ending on the week in the ISO\_YR\_WK\_NBR field.. Wine and Spirits brands are defined by the FED\_PROD\_CLSFN\_CD field on the BRND view having a value of LQ or WN. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination in the full 26 week period. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month.  _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 26 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| TOTAL\_CE\_DRAUGHT | FLOAT | Sum of Draught Case Equivalents Sold |
| TOTAL\_CE\_PACK | FLOAT | Sum of Package Case Equivalents Sold |
| POD_TOTAL | NUMBER(18,0) | Sum of PODs (brand/line code combos) |
| POD_PACK | NUMBER(18,0) | Sum of Packaged PODs (1 max per brand for On-Prem) |
| POD_DRAUGHT | NUMBER(18,0) | Sum of Draught PODs (1 max per brand for On-Prem) |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record | -->

   

### **EDW.VIP\_DIST\_R4W\_SOLD\_POD**
This view provides visibility into all sales of a Brand/Line Code combination to an outlet for the 4 week period ending on the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination in the full 4 week period. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month.  _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 4 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code that identifes the package size |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand/Line Code is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

<!--  
### **EDW.VIP\_DIST\_R4W\_SOLD\_BRND** 
This view provides visibility into all sales of a Brand to an outlet for the 4 week period ending on the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand combination in the full 4 week period. This view is created as an aggregate of the VIP\_DIST\_R4W\_SOLD\_POD view. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month.  _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the 4 Week period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| TOTAL\_CE\_DRAUGHT | FLOAT | Sum of Draught Case Equivalents Sold |
| TOTAL\_CE\_PACK | FLOAT | Sum of Package Case Equivalents Sold |
| POD_TOTAL | NUMBER(18,0) | Sum of PODs (brand/line code combos) |
| POD_PACK | NUMBER(18,0) | Sum of Packaged PODs (1 max per brand for On-Prem) |
| POD_DRAUGHT | NUMBER(18,0) | Sum of Draught PODs (1 max per brand for On-Prem) |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record | -->

### **[EDW.VIP\_DIST\_YTD\_SOLD\_POD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_YTD_SOLD_POD)**
This view provides visibility into all sales of a Brand/Line Code combination to an outlet for the Year-To-Date period through the end of the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand/Pack combination Year-To-Date. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month.  _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the Year To Date period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| MKT\_LN\_CD | VARCHAR(3) | Market Line Code that identifes the package size |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand/Line Code is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |



### **[EDW.VIP\_DIST\_YTD\_SOLD\_BRND](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/VIP_DIST_YTD_SOLD_BRND)**
This view provides visibility into all sales of a Brand to an outlet for the Year-To-Date period through the end of the week in the ISO\_YR\_WK\_NBR field. The Sold Store flag is triggered when volume is greater than 0 for the Outlet/Brand combination Year-To-Date. This view is created as an aggregate of the VIP\_DIST\_YTD\_SOLD_POD view. This data is updated every Sunday and Tuesday for the previous 6 weeks and updated for all weeks on the 4th calendar day of the month. _NOTE: Not every record where SOLD_STORE = 1 is a valid Sold Store for Distribution – it must first meet the Open Store criteria before being counted as a Sold Store. Therefore this view must be joined to the Open Stores view to determine valid Sold Stores for the period._


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Week value of the last week in the Year To Date period |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| BRND_CD | VARCHAR(3) | Master Brand Code of the Brand sold (BRND.MKTNG\_BRND\_CD) |
| SOLD_STORE | NUMBER(1,0) | Flag that indicates if C/E volume for Outlet/Wslr/Brand is greater than 0 for the time period |
| TOTAL_CE | FLOAT | Sum of Case Equivalents Sold |
| TOTAL\_CE\_DRAUGHT | FLOAT | Sum of Draught Case Equivalents Sold |
| TOTAL\_CE\_PACK | FLOAT | Sum of Package Case Equivalents Sold |
| POD_TOTAL | NUMBER(18,0) | Sum of PODs (brand/line code combos) where C/E Sold > 0 |
| POD_PACK | NUMBER(18,0) | Sum of Packaged PODs (1 max per brand for On-Prem) |
| POD_DRAUGHT | NUMBER(18,0) | Sum of Draught PODs (1 max per brand for On-Prem) |
| UPDATED_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |


### **[VIP_DIST.WSLR_TERRITORIES](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/VIP_DIST/view/WSLR_TERRITORIES)** 
This view provides visibility into all retailers/accounts(VPID)-wholesalers(WSLR_NBR) combinations mapped under valid Territories. The core source of this dataset comes from territories defined/maintained by WTM team, with additional data filters to align with our business reporting needs.
Some of those filter are excluding retail accounts(Direct Distributors,Non Retail etc.), territories with state specific rules(e.g. California Off-Prem Chain Accounts for Cutwater).

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
| WSLR_NBR | VARCHAR(8) | DISTID from VIP\_SLS\_STR for the recorded sale |
| VPID | NUMBER(10,0) | VPID from VIP\_SLS\_STR for the recorded sale |
| TERR_GRP_ALC_NBR | NUMBER(38,0) | Rank calculated using TERR_GRP_NBR and ALCHL_STRENGTH_CD. Negative values for Beer, Positive for W&S |
| EDW_START_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |

### **[VIP_DIST.DISTRIBUTION_VOLUME](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/VIP_DIST/view/DISTRIBUTION_VOLUME)** 
This view provides visibility into Distribution-Volume for all Open stores and their volume(CE), if they Sold AB product, spread across ISO_YR_WK_NBR. The dataset is at the Brand & Market Line code level with (Sales)Volume as rolling R1W,R4W, R13W and R26W. This also identifies between BEER and W&S products supplemented by an On/Off Premise flag.

Additionally, it follows the same business exclusion logic as [VIP_DIST.WSLR_TERRITORIES]

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |
|ISO_YR_WK_NBR|NUMBER(6,0)|ISO Year-Week Number, sourced from VIP_DIST.cal_isowk|
|ISO_YR_MO |NUMBER(6,0)|Min week associated to the an iso week, this column is used to control refresh|
|ISO_YR_NBR |NUMBER(6,0)|Min year associated to the an iso week, this column is used to control refresh|
| VPID | NUMBER(10,0) | VIP Identifier for stores |
| BRND_CD | VARCHAR(3) | AB Marketing Brand code |
| MKT_LN_CD | VARCHAR(3) | AB Marketing Line code |
| SOLD_STORE | NUMBER(1,0) | Flag for sold stores. 1 if volume >0, 0 otherwise for R13 Period|
| TOTAL_CE | FLOAT | Total of R13W Case Eqv. sale quantity |
| R26_SOLD_STORE | NUMBER(1,0) | Flag for sold stores. 1 if volume >0, 0 otherwise for R26 Period |
| R26_TOTAL_CE | FLOAT | Total of Case Eqv. sale quantity for R26 Period |
| R4_SOLD_STORE | NUMBER(1,0) | Flag for sold stores. 1 if volume >0, 0 otherwise for R4 Period |
| R4_TOTAL_CE | FLOAT | Total of Case Eqv. sale quantity for R4 Period |
| R1_SOLD_STORE | NUMBER(1,0) | Flag for sold stores. 1 if volume >0, 0 otherwise for R1 Period |
| R1_TOTAL_CE | FLOAT | Total of Case Eqv. sale quantity for R1 Period |
| BEER_TOOL_FLAG | VARCHAR(4) | Flag to identify whether this Row belongs to Beer or W&S|
| DRAFT_FLAG | VARCHAR(1) | Draft Flag|
| PREM_FLAG | VARCHAR(1) | Premise Flag o=on prem, f=off prem|
| EDW_START_TSP | TIMESTAMP_LTZ(9) | Timestamp of last update to record |


Technical documentation: https://dev.azure.com/abi-ghq-audit-dsc-dev-ops/beer_tech/_wiki/wikis/beer_tech.wiki/10557/VIP-Distribution

Published on 3/26/21 by A. Stites
Updated on 3/22/23 by Rohan Bohra
