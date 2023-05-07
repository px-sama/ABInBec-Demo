---
title: Date Dimension
tags:
    - Date
    - Day
    - Month
    - Week
    - Year
---
# Date Dimension

Date Dimension is use for data analysis and has various component like
- Day
- Month
- Week
- Split Week
- Quarter
- Year


## Date

Date Table contains all type of Date and is used as a mapping table to each date table at different granularity.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_DT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_DT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_DT)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
DT_SK|NUMBER|Surrogate Key on Date
DT_CODE|VARCHAR|Date Code
TM_DMN|VARCHAR|Time Domain (Daily/Splitweekly/Weekly/Monthly)
START_DT|DATE|Date Period Start Date
END_DT|DATE|Date Period End Date (Non-inclusive)
DY_SK|NUMBER|Date Surrogate Key
SPLIT_WK_SK|NUMBER|Split Week Surrogate Key
WK_SK|NUMBER|Week Surrogate Key
MO_SK|NUMBER|Month Surrogate Key
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


 
## Day Hierarchy


### Day 
Day Tables contains dates at day Granularity. It also has reference for all the other date hierarchy.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_DY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_DT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_DY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_DY)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_DY](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_DT)<br/>



Field Name	|	Data Type	|	Comment
|-	|	-	|	-
DY_SK|NUMBER|Surrogate Key on Day
DY_CODE|VARCHAR|Day Code
DY_NAME|VARCHAR|Day Name
DY_SHT_NAME|VARCHAR|Day Short Name
DY_SHT_NAME_FR|VARCHAR|Day Short French Name
DY_LONG_NAME|VARCHAR|Day Long Name
DY_LONG_NAME_FR|VARCHAR|Day Long French Name
DY_OF_MO|VARCHAR|Day of Month Order
DY_OF_WK|VARCHAR|Day of Week Order
DY_OF_WK_NAME|VARCHAR|Day of Week Name
DY_OF_WK_NAME_FR|VARCHAR|Day of Week French Name
WK_SK|NUMBER|Week Surrogate Key
MO_SK|NUMBER|Month Surrogate Key
START_DT|DATE|Day Start Date (Non-inclusive)
END_DT|DATE|Day End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### Day Dimension 
Day Dimension Tables contains dates at day Granularity. It all the details related to the date from other date hierarchies as well.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_DY_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/view/DIM_DY_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_DY_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_DY_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_DY_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_DY_HIER)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
DY_SK|NUMBER|Surrogate Key on Day
DY_CODE|VARCHAR|Day Code
DY_NAME|VARCHAR|Day Name
DY_SHT_NAME|VARCHAR|Day Short Name
DY_LONG_NAME|VARCHAR|Day Long Name
DY_SHT_NAME_FR|VARCHAR|Day Short French Name
DY_LONG_NAME_FR|VARCHAR|Day Long French Name
DY_OF_MO|VARCHAR|Day of Month Order
DY_OF_WK|VARCHAR|Day of Week Order
DY_OF_WK_NAME|VARCHAR|Day of Week Name
DY_OF_WK_NAME_FR|VARCHAR|Day of Week French Name
DY_START_DT|DATE|Day Start Date (Non-inclusive)
DY_END_DT|DATE|Day End Date
WK_SK|NUMBER|Surrogate Key on Week
WK_CODE|VARCHAR|Week Code
WK_NAME|VARCHAR|Week Name
WK_SHT_NAME|VARCHAR|Week Short Name
WK_LONG_NAME|VARCHAR|Week Long French Name
WK_SHT_NAME_FR|VARCHAR|Week Short French Name
WK_LONG_NAME_FR|VARCHAR|Week Long Name
WK_OF_YR|VARCHAR|Week Of Year Order
WK_START_DT|DATE|Week Start Date (Non-inclusive)
WK_END_DT|DATE|Week End Date
WK_YR_SK|NUMBER|Surrogate Key on Week Year
WK_YR_CODE|VARCHAR|Week Year Code
WK_YR_NAME|VARCHAR|Week Year Name
WK_YR_START_DT|DATE|Week Year Start Date (Non-inclusive)
WK_YR_END_DT|DATE|Week Year End Date
MO_SK|NUMBER|Surrogate Key on Month
MO_CODE|VARCHAR|Month Code
MO_NAME|VARCHAR|Month Name
MO_SHT_NAME|VARCHAR|Month Short Name
MO_LONG_NAME|VARCHAR|Month Long Name
MO_SHT_NAME_FR|VARCHAR|Month Short French Name
MO_LONG_NAME_FR|VARCHAR|Month Long French Name
MO_OF_YR|VARCHAR|Month Of Year Order
MO_START_DT|DATE|Month Start Date (Non-inclusive)
MO_END_DT|DATE|Month End Date
QTR_SK|NUMBER|Surrogate Key on Quarter
QTR_CODE|VARCHAR|Quarter Code
QTR_NAME|VARCHAR|Quarter Name
QTR_OF_YR|VARCHAR|Quarter of Year
QTR_START_DT|DATE|Quarter Start Date (Non-inclusive)
QTR_END_DT|DATE|Quarter End Date
YR_SK|NUMBER|Surrogate Key on Year
YR_CODE|VARCHAR|Year Code
YR_NAME|VARCHAR|Year Name
YR_START_DT|DATE|Year Start Date (Non-inclusive)
YR_END_DT|DATE|Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Week Hierarchy


### Week
Week Tables contains dates at week granularity.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_WK)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_WK)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_WK)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
WK_SK|NUMBER|Surrogate Key on Week
WK_CODE|VARCHAR|Week Code
WK_NAME|VARCHAR|Week Name
WK_SHT_NAME|VARCHAR|Week Short Name
WK_LONG_NAME|VARCHAR|Week Long Name
WK_SHT_NAME_FR|VARCHAR|Week Short French Name
WK_LONG_NAME_FR|VARCHAR|Week Long French Name
WK_OF_YR|VARCHAR|Week Of Year Order
WK_YR_SK|NUMBER|Week Year Surrogate Key
START_DT|DATE|Week Start Date (Non-inclusive)
END_DT|DATE|Week End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### Week Dimension 
Week Dimension Tables contains dates at week granularity. It all the details related to the date from other date hierarchies as well related to week.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/view/DIM_WK_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_WK_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_WK_HIER)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
WK_SK|NUMBER|Surrogate Key on Week
WK_CODE|VARCHAR|Week Code
WK_NAME|VARCHAR|Week Name
WK_SHT_NAME|VARCHAR|Week Short Name
WK_LONG_NAME|VARCHAR|Week Long Name
WK_SHT_NAME_FR|VARCHAR|Week Short French Name
WK_LONG_NAME_FR|VARCHAR|Week Long French Name
WK_OF_YR|VARCHAR|Week Of Year Order
WK_START_DT|DATE|Week Start Date (Non-inclusive)
WK_END_DT|DATE|Week End Date
WK_YR_SK|NUMBER|Surrogate Key on Week Year
WK_YR_CODE|VARCHAR|Week Year Code
WK_YR_NAME|VARCHAR|Week Year Name
WK_YR_START_DT|DATE|Week Year Start Date (Non-inclusive)
WK_YR_END_DT|DATE|Week Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## Month Hierarchy


### Month 
Month Tables contains dates at month Granularity. It also has reference for all the other higher date hierarchy related to month like Quarter.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_MO)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_MO)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_MO)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
MO_SK|NUMBER|Surrogate Key on Month
MO_CODE|VARCHAR|Month Code
MO_NAME|VARCHAR|Month Name
MO_SHT_NAME|VARCHAR|Month Short Name
MO_LONG_NAME|VARCHAR|Month Long Name
MO_SHT_NAME_FR|VARCHAR|Month Short French Name
MO_LONG_NAME_FR|VARCHAR|Month Long French Name
MO_OF_YR|VARCHAR|Month Of Year Order
QTR_SK|NUMBER|Quarter Surrogate Key
START_DT|DATE|Month Start Date (Non-inclusive)
END_DT|DATE|Month End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



### Month Dimension 
Month Dimension Tables contains dates at month granularity. It all the details related to the date from other higher date hierarchies related to month.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_MO_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/view/DIM_MO_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_MO_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_MO_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_MO_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_MO_HIER)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
MO_SK|NUMBER|Surrogate Key on Month
MO_CODE|VARCHAR|Month Code
MO_NAME|VARCHAR|Month Name
MO_SHT_NAME|VARCHAR|Month Short Name
MO_LONG_NAME|VARCHAR|Month Long French Name
MO_SHT_NAME_FR|VARCHAR|Month Short French Name
MO_LONG_NAME_FR|VARCHAR|Month Long Name
MO_OF_YR|VARCHAR|Month Of Year Order
MO_START_DT|DATE|Month Start Date (Non-inclusive)
MO_END_DT|DATE|Month End Date
QTR_SK|NUMBER|Surrogate Key on Quarter
QTR_CODE|VARCHAR|Quarter Code
QTR_NAME|VARCHAR|Quarter Name
QTR_OF_YR|VARCHAR|Quarter of Year
QTR_START_DT|DATE|Quarter Start Date (Non-inclusive)
QTR_END_DT|DATE|Quarter End Date
YR_SK|NUMBER|Surrogate Key on Year
YR_CODE|VARCHAR|Year Code
YR_NAME|VARCHAR|Year Name
YR_START_DT|DATE|Year Start Date (Non-inclusive)
YR_END_DT|DATE|Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Split Week Hierarchy


### Split Week 
Split Week Tables contains dates at Week Granularity but week is split into two if the weeks falls into two months.  This helps to analyze the data both at Weekly and monthly level. It also has reference for all the other higher date hierarchy related to Split week.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_SPLIT_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_SPLIT_WK)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_SPLIT_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_SPLIT_WK)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_SPLIT_WK](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_SPLIT_WK)<br/>

Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SPLIT_WK_SK|NUMBER|Surrogate Key on Split Week
SPLIT_WK_CODE|VARCHAR|Split Week Code
SPLIT_WK_NAME|VARCHAR|Split Week Name
SPLIT_WK_SHT_NAME|VARCHAR|Split Week Short Name
SPLIT_WK_LONG_NAME|VARCHAR|Split Week Long Name
WK_SK|NUMBER|Week Surrogate Key
MO_SK|NUMBER|Month Surrogate Key
START_DT|DATE|Split Week Start Date (Non-inclusive)
END_DT|DATE|Split Week End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



### Split Week Dimension 
Split Week Tables contains dates at Week Granularity but week is split into two if the weeks falls into two months. It all the details related to the date from other higher date hierarchies related to split week.


Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_NJ_T.DIM_SPLIT_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_NJ_T/view/DIM_SPLIT_WK_HIER)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.DIM_SPLIT_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/DIM_SPLIT_WK_HIER)<br/>
EDW View Name &emsp;: [EDW.CSDI_DIM_SPLIT_WK_HIER](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_DIM_SPLIT_WK_HIER)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
SPLIT_WK_SK|NUMBER|Surrogate Key on Split Week
SPLIT_WK_CODE|VARCHAR|Split Week Code
SPLIT_WK_NAME|VARCHAR|Split Week Name
SPLIT_WK_SHT_NAME|VARCHAR|Split Week Short Name
SPLIT_WK_LONG_NAME|VARCHAR|Split Week Long Name
SPLIT_WK_START_DT|DATE|Split Week Start Date (Non-inclusive)
SPLIT_WK_END_DT|DATE|Split Week End Date
WK_SK|NUMBER|Surrogate Key on Week
WK_CODE|VARCHAR|Week Code
WK_NAME|VARCHAR|Week Name
WK_SHT_NAME|VARCHAR|Week Short Name
WK_LONG_NAME|VARCHAR|Week Long Name
WK_SHT_NAME_FR|VARCHAR|Week Short French Name
WK_LONG_NAME_FR|VARCHAR|Week Long French Name
WK_OF_YR|VARCHAR|Week Of Year Order
WK_START_DT|DATE|Week Start Date (Non-inclusive)
WK_END_DT|DATE|Week End Date
WK_YR_SK|NUMBER|Surrogate Key on Week Year
WK_YR_CODE|VARCHAR|Week Year Code
WK_YR_NAME|VARCHAR|Week Year Name
WK_YR_START_DT|DATE|Week Year Start Date (Non-inclusive)
WK_YR_END_DT|DATE|Week Year End Date
MO_SK|NUMBER|Surrogate Key on Month
MO_CODE|VARCHAR|Month Code
MO_NAME|VARCHAR|Month Name
MO_SHT_NAME|VARCHAR|Month Short Name
MO_LONG_NAME|VARCHAR|Month Long Name
MO_SHT_NAME_FR|VARCHAR|Month Short French Name
MO_LONG_NAME_FR|VARCHAR|Month Long French Name
MO_OF_YR|VARCHAR|Month Of Year Order
MO_START_DT|DATE|Month Start Date (Non-inclusive)
MO_END_DT|DATE|Month End Date
QTR_SK|NUMBER|Surrogate Key on Quarter
QTR_CODE|VARCHAR|Quarter Code
QTR_NAME|VARCHAR|Quarter Name
QTR_OF_YR|VARCHAR|Quarter of Year
QTR_START_DT|DATE|Quarter Start Date (Non-inclusive)
QTR_END_DT|DATE|Quarter End Date
YR_SK|NUMBER|Surrogate Key on Year
YR_CODE|VARCHAR|Year Code
YR_NAME|VARCHAR|Year Name
YR_START_DT|DATE|Year Start Date (Non-inclusive)
YR_END_DT|DATE|Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



## Quarter

Quarter Tables contains dates at Quarterly Granularity.  

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_QTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_QTR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_QTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_QTR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_QTR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_QTR)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
QTR_SK|NUMBER|Surrogate Key on Quarter
QTR_CODE|VARCHAR|Quarter Code
QTR_NAME|VARCHAR|Quarter Name
QTR_OF_YR|VARCHAR|Quarter of Year
YR_SK|NUMBER|Year Surrogate Key
START_DT|DATE|Quarter Start Date (Non-inclusive)
END_DT|DATE|Quarter End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Year

Year Tables contains dates at yearly Granularity.  

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_YR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_YR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_YR)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
YR_SK|NUMBER|Surrogate Key on Year
YR_CODE|VARCHAR|Year Code
YR_NAME|VARCHAR|Year Name
START_DT|DATE|Year Start Date (Non-inclusive)
END_DT|DATE|Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp



### Week year

Week year is similar to Year table but can be used to join week table to get the year to which week will tie in.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_WK_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_WK_YR)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_WK_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_WK_YR)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_WK_YR](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_WK_YR)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
WK_YR_SK|NUMBER|Surrogate Key on Week Year
WK_YR_CODE|VARCHAR|Week Year Code
WK_YR_NAME|VARCHAR|Week Year Name
START_DT|DATE|Week Year Start Date (Non-inclusive)
END_DT|DATE|Week Year End Date
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


## Relative Date 

Relative Date table contains list of all the relative dates which need to be calculated like rolling 6 month , rolling 4 week last month etc.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.REF_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/REF_REL_DT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.REF_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/REF_REL_DT)<br/>
EDW View Name &emsp;: [EDW.CSDI_REF_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_REF_REL_DT)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_DT_SK|NUMBER|Surrogate Key on Relative Time
REL_DT_CODE|VARCHAR|Relative Time Code
REL_DT_NAME|VARCHAR|Relative Time Name
REL_DT_DEF|VARCHAR|Relative Time Definition
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### Relative Date Mapping

Relative Date Mapping table contains list of all the dates mapped to relative dates.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/MAP_REL_DT)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_REL_DT)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_REL_DT)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_DT_SK|NUMBER|Surrogate Key on Relative Time
REL_DT_CODE|VARCHAR|Relative Time Code
DT_SK|NUMBER|Surrogate Key on Date
MAP_DT_SK|NUMBER|Surrogate Key on Date of the Transaction
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### Rolling 2 Month Mapping

Rolling 2 Month Mapping maps months to prior two months.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_ROLL2_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/MAP_ROLL2_MO)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_ROLL2_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_ROLL2_MO)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_ROLL2_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_ROLL2_MO)<br/>

Field Name	|	Data Type	|	Comment
|-	|	-	|	-
MO_SK|NUMBER|Surrogate Key on Month - Time of Transaction
ROLL2_MO_SK|NUMBER|Surrogate Key on Month - Rolling 2 Month Period
MAP_IND|NUMBER|Mapping Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp


### Rolling 3 Month Mapping

Rolling 3 Month Mapping maps months to prior three months.

Table Name &emsp;&emsp;&emsp;&nbsp;: [CSDI_T.MAP_ROLL3_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI_T/view/MAP_ROLL3_MO)<br/>
View Name &emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: [CSDI.MAP_ROLL3_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CSDI/view/MAP_ROLL3_MO)<br/>
EDW View Name &emsp;: [EDW.CSDI_MAP_ROLL3_MO](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_MAP_ROLL3_MO)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
MO_SK|NUMBER|Surrogate Key on Month - Time of Transaction
ROLL3_MO_SK|NUMBER|Surrogate Key on Month - Rolling 3 Month Period
MAP_IND|NUMBER|Mapping Indicator
LAST_UPDATED_TSP|TIMESTAMP_NTZ|Last Updated Timestamp

## Application Views

### Qlik Sales Period Definition

Application dimensional view for Qlik sales reflecting period definition details.


EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_PRD_DEF](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_PRD_DEF)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
PRD_DEF_KEY|VARCHAR|Period Definition Key Derived from REF_PRD_DEF_DTL.PRD_DEF_DTL_SK
PRD_DEF_DTL_CODE|VARCHAR(32)|Period Definition Detail Code
PRD_DEF_DTL_YR|NUMBER(38)|Period Definition Detail Year
PRD_DEF_DTL_NBR|NUMBER(38)|Period Definition Detail Number
PRD_DEF_DTL_START_DT|DATE|Period Definition Detail Start Date
PRD_DEF_DTL_END_DT|DATE| Period Definition Detail End Date
PRD_DEF_DTL_SEQ|NUMBER(38)|Period Definition Detail Sequence
PRD_DEF_CODE|VARCHAR(4)|Period Definition Code
PRD_DEF_NAME|VARCHAR(50)|Period Definition Name
PRD_DEF_ABBR|VARCHAR(10)|Period Definition Abbreviation

### Qlik Sales Relative Period Definition

Application dimensional view for Qlik Sales reflecting Relative Period Definitions. e.g. rolling 3 periods, rolling year periods.


EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_REL_PRD](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_REL_PRD)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_PRD_KEY|VARCHAR(10)|Relative Period Key
REL_PRD_CODE|VARCHAR(10)|Relative Period Code
REL_PRD_NAME|VARCHAR(20)|Relative Period Name

### Qlik Sales Relative Date Definition

Application dimensional view for Qlik Sales reflecting Relative Date definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_REL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_REL_DT)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_DT_KEY|NUMBER(38)|Relative Date Key for Qlik - Based on REL_DT_SK
REL_DT_CODE|VARCHAR(16)|Relative Date Code
REL_DT_NAME|VARCHAR(32)|Relative Date Name
REL_DT_DEF|VARCHAR(256)|Relative Date Definition

### Qlik Sales Relative Period Mapping

Application dimensional view for Qlik sales reflecting relative period mapping definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_REL_PRD_MAP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_REL_PRD_MAP)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_PRD_KEY|VARCHAR(7)|Relative Period Key
REL_PRD_CODE|VARCHAR(7)|Relative Period Code
PRD_DEF_KEY|VARCHAR|Period Definition Key
TRAN_PRD_DEF_KEY|VARCHAR|Translated Relative Period Key

### Qlik Sales Calendar Date Definition

Application dimensional view for Qlik sales reflecting relative period mapping definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_CAL_DT](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_CAL_DT)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik - Based on DT_SK|
TM_DMN|VARCHAR(1)|Time Domain (Daily / Split Weekly / Weekly / Monthly)|
DY_CODE|VARCHAR(10)|Day Code|
DY_NAME|VARCHAR(10) |Day Name|
DY_SHT_NAME|VARCHAR(12) |Day Short Name|
DY_LONG_NAME|VARCHAR(18) |Day Long Name|
DY_SHT_NAME_FR|VARCHAR(12) |Day Short French Name|
DY_LONG_NAME_FR|VARCHAR(18) |Day Short French Name|
DY_OF_WK|VARCHAR(1) |Day Of Week|
DY_OF_WK_NAME|VARCHAR(10) |Day Of Week Name|
DY_OF_WK_NAME_FR|VARCHAR(10) |Day Of Week French Name|
DY_OF_MO|VARCHAR(2) |Day Of Month|
DY_DT|DATE|Day Date|
SPLIT_WK_CODE|VARCHAR(10)|Split Week Code|
SPLIT_WK_NAME|VARCHAR(10) |Split Week Name|
SPLIT_WK_SHT_NAME|VARCHAR(12) |Split Week Short Name|
SPLIT_WK_LONG_NAME|VARCHAR(18) |Split Week Long Name|
SPLIT_WK_START_DT|DATE|Split Week Start Date|
SPLIT_WK_END_DT|DATE|Split Week End Date|
WK_CODE|VARCHAR(10)|Week Code|
WK_NAME|VARCHAR(10) |Week Name|
WK_SHT_NAME|VARCHAR(12) |Week Short Name|
WK_LONG_NAME|VARCHAR(18) |Week Long Name|
WK_SHT_NAME_FR|VARCHAR(12) |Week Short French Name|
WK_LONG_NAME_FR|VARCHAR(18) |Week Long French Name|
WK_OF_YR|VARCHAR(2) |Week Of Year|
WK_YR_NAME|VARCHAR(4) |Week Year Name|
WK_START_DT|DATE|Week Start Date|
WK_END_DT|DATE|Week End Date|
MO_CODE|VARCHAR(7)|Month Code|
MO_NAME|VARCHAR(7) |Month Name|
MO_SHT_NAME|VARCHAR(10) |Month Short Name|
MO_LONG_NAME|VARCHAR(15) |Month Long Name|
MO_SHT_NAME_FR|VARCHAR(10) |Month Short French Name|
MO_LONG_NAME_FR|VARCHAR(15) |Month Long French Name|
MO_OF_YR|VARCHAR(2) |Month Of Year|
MO_START_DT|DATE|Month Start Date|
MO_END_DT|DATE|Month End Date|
QTR_CODE|VARCHAR(6)|Quarter Code|
QTR_NAME|VARCHAR(6) |Quarter Name|
QTR_OF_YR|VARCHAR(1) |Quarter Of Year|
QTR_START_DT|DATE|Quarter Start Date|
QTR_END_DT|DATE|Quarter End Date|
YR_CODE|VARCHAR(4)|Year Code|
YR_NAME|VARCHAR(4) |Year Name|
YR_START_DT|DATE|Year Start Date|
YR_END_DT|DATE|Year End Date|

### Qlik Sales Relative Date Mapping

Application dimensional view for Qlik sales reflecting relative period mapping definitions.

EDW View Name &emsp;: [EDW.CSDI_APP_QS_SI_REL_DT_MAP](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CSDI_APP_QS_SI_REL_DT_MAP)<br/>


Field Name	|	Data Type	|	Comment
|-	|	-	|	-
REL_DT_KEY|NUMBER(38)|Relative Date Key for Qlik - Based on REL_DT_SK
REL_DT_CODE|VARCHAR(16)|Relative Date Code
CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik - Target Date for presentation in BI
TRAN_CAL_DT_KEY|NUMBER(38)|Calendar Date Key for Qlik (Key as reflected in the Transactions)