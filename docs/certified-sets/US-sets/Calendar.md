---
title: Calendar
tags:
    - Sales 
    - Dates
description: Definitions for the most often used time periods within the Gregorian Calendar
---

import {PageCreator} from '@site/src/components/PageCreator'
import LiveDemo from '@site/src/components/index-live-demo'
import FieldMappings from '@site/src/components/FieldName/FieldMapping'

# Calendar  

This views in this data set collectively represent a robust series of definitions for the most often used time periods within the Gregorian Calendar. These views can either be used for reference if loading calendar elements as part of development of a reporting solution or referenced when direct querying sales, shipment or production data to analyze STRs or STWs within a given time period such as Days, Calendar Weeks, ISO Weeks, Months, Quarters or Trimesters.


### [**EDW.CAL_DT**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_DT)

<LiveDemo />  

<!-- This is the most granular and most dynamic of the Calendar views that defines each Date on the calendar. For nearly any possible query requiring or including a date, this should be the primary view referenced. It includes a wealth of attributes about a given Date including corresponding time frames from the prior year for quick year over year analysis. -->
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL_DT | DATE | The Gregorian Calendar Date |
| JULN_DT | NUMBER(9,0) | The Julian Date that corresponds to the CAL_DT value |
| WK\_DY\_NBR | NUMBER(1,0) | The number of the day of the week for the CAL_DT per the ISO calendar. Monday = 1, Tuesday = 2, etc |
| WK\_DY\_NM | VARCHAR(9) | The name of the day of the week |
| CAL\_DT\_DSC | VARCHAR(50) | The full text description of the date (ex. November 1, 2020) |
| CURR\_WK\_MON_DT | DATE | The Monday date of the week the CAL_DT falls within |
| CURR\_WK\_SUN_DT | DATE | The Sunday date of the week the CAL_DT falls within |
| DY\_OF\_MO_NBR | NUMBER(2,0) | The day of the month for the CAL_DT |
| DY\_OF\_YR_NBR | NUMBER(3,0) | The day of the year for the CAL_DT |
| WKDY_FLG | VARCHAR(1) | Y/N Flag to indicate if date is a weekday or not |
| LAST\_DY\_OF\_MO\_FLG | VARCHAR(1) | Y/N Flag to indicate if date is the last day of the month |
| CAL\_YR\_NBR | NUMBER(4,0) | The calendar year number expressed as YYYY |
| CAL\_YR\_TRI_NBR | NUMBER(6,0) | The calendar year and trimester number expressed as YYYYTT |
| CAL\_YR\_QTR_NBR | NUMBER(6,0) | The calendar and quarter number expressed as YYYYQQ |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar year and month number expressed as YYYYMM |
| CAL\_YR\_WK_NBR | NUMBER(6,0) | The calendar year and week number expressed as YYYYWW |
| BOT\_YR\_WK_NBR | NUMBER(6,0) | Brewery Operations Week Number expressed as YYYYWW |
| ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Year Week Number expressed as YYYYWW |
| PRIOR\_YR\_CAL_DT | DATE | The same CAL_DT value for the previous year |
| PRIOR\_YR\_MON_DT | DATE | The Monday date for the previous year |
| PRIOR\_YR\_CAL\_YR\_NBR | NUMBER(4,0) | The calendar year number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_YR\_MO_NBR | NUMBER(6,0) | The calendar year and month number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_YR\_QTR_NBR | NUMBER(6,0) | The calendar year quarter number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_YR\_WK_NBR | NUMBER(6,0) | The calendar year and week number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_YR\_TRI_NBR | NUMBER(6,0) | The calendar year and trimester number for the corresponding date from the previous year |
| PRIOR\_YR\_ISO\_YR\_WK_NBR | NUMBER(6,0) | ISO Year Week Number for the corresponding date from the previous year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |

  
# Field Name Mappings

<FieldMappings />
  

  

### [**EDW.CAL_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_MO)
This view defines the Calendar Year Month values. It includes the name of the month along with the value of the Quarter and Trimester that the month falls within. Additionally includes prior year values for the Month, Quarter and Year
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_MO_NBR | NUMBER(6,0) | A 6-digit number representing the month within a calendar year expressed as YYYYMM. |
| CAL\_MO\_CD | VARCHAR(15) | A code indicating the month within a calendar year. For example, Apr 2005. Mar 2007, etc.. |
| CAL\_MO\_DSC | VARCHAR(250) | A description of a month within a calendar year along with the year. For example, April 2005. March 2007, etc. |
| CAL\_MO\_NM | VARCHAR(250) | The complete name of the month. For example January, February, etc. |
| CAL\_MO\_ABBR_NM | VARCHAR(15) | The abbreviated name of the month. For example Jan, Feb, etc. |
| CAL\_YR\_QTR_NBR | NUMBER(6,0) | The caledar and quarter number expressed as YYYYQQ |
| CAL\_YR\_TRI_NBR | NUMBER(6,0) | The calendar year and trimester number expressed as YYYYTT |
| CAL\_MO\_NBR | NUMBER(38,0) | The calendar year and month number expressed as YYYYMM |
| CAL\_YR\_NBR | NUMBER(4,0) | The calendar year number expressed as YYYY |
| PRIOR\_YR\_CAL\_YR\_MO_NBR | NUMBER(7,0) | The calendar year and month number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_QTR\_NBR | NUMBER(7,0) | The calendar year quarter number for the corresponding date from the previous year |
| PRIOR\_YR\_CAL\_YR\_NBR | NUMBER(5,0) | The calendar year number for the corresponding date from the previous year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |

### [**EDW.CAL_QTR**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_QTR)
This view defines the Calendar Year Quarter values. It includes a full Year/Quarter value and description along with values for the Quarter Number and Year for each record.
  
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_QTR_NBR | NUMBER(6,0) | The Calendar year and quarter value expressed as YYYYQQ |
| CAL\_QTR\_CD | VARCHAR(15) | Code representing the Year and Quarter |
| CAL\_QTR\_DSC | VARCHAR(250) | Description of the Quarter and Year |
| CAL\_QTR\_NBR | NUMBER(38,0) | Indicates he quarter number within a year (values = 1,2,3,4) |
| CAL\_YR\_NBR | NUMBER(4,0) | Numeric expression of the calendar year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |

  

  

### [**EDW.CAL_TRI**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_TRI)
This view defines the Calendar Year Trimester values. It includes a full Year/Trimester value and description along with values for the Trimester Number and Year for each record  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_TRI_NBR | NUMBER(6,0) | The Calendar year and trimester value expressed as YYYYTT |
| CAL\_TRI\_CD | VARCHAR(15) | Code representing the Year and Trimester |
| CAL\_TRI\_DSC | VARCHAR(250) | Description of the Year and Trimester |
| CAL\_TRI\_NBR | NUMBER(38,0) | Indicates the trimester number within a year (values = 1,2,3) |
| CAL\_YR\_NBR | NUMBER(4,0) | Numeric expression of the calendar year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |

  

  

  

### [**EDW.CAL_WK**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_WK)
This view defines the Calendar Year Week values. Every year will have 52 weeks which begin on Monday and end on Sunday. The view provides a numeric value for each Year/Week along with a description of the week and the Sunday Date and Monday Date of the given Week.  

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_WK_NBR | NUMBER(6,0) | Numeric expression of the Year and Calendar Week expressed as YYYYWW |
| CAL\_WK\_CD | VARCHAR(15) | Code representing the Year and Calendar Week |
| CAL\_WK\_DSC | VARCHAR(250) | A description of the the Calendar Week. i.e. Calendar Week 01, 2006. |
| CAL\_WK\_NBR | NUMBER(38,0) | Indicates the week number within a year |
| CAL\_YR\_NBR | NUMBER(4,0) | Numeric expression of the calendar year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |
| CURR\_WK\_MON_DT | DATE | The Monday date of the Calendar Week |
| CURR\_WK\_SUN_DT | DATE | The Sunday date of the Calendar Week |

  

  

### [**EDW.CAL_YR**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/CAL_YR)
This view defines the Calendar Year values with each record representing a Calendar Year beginning with 1993.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| CAL\_YR\_NBR | NUMBER(4,0) | Numeric expression of the Calendar Year |
| CAL\_YR\_CD | VARCHAR(15) | Code representing the Calendar Year |
| CAL\_YR\_DSC | VARCHAR(250) | Description of the Calendar Year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |

  

  

  

### [**EDW.ISO_WK**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ISO_WK)
This view defines all valid ISO Year Week values. An ISO Week is defined by the International Organization for Standardization calendar system. While ISO Weeks begin on Mondays and end on Sundays they do not align with standard Calendar Weeks. Most Sales reporting is based on ISO Weeks and not Calendar Weeks.  
 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ISO\_YR\_WK_NBR | NUMBER(6,0) | Numeric value representing the ISO Year Week expressed as YYYYWW |
| ISO\_WK\_CD | VARCHAR(15) | Code representing the ISO Week |
| ISO\_WK\_DSC | VARCHAR(250) | Description of the ISO Week. Example: ISO Week 20, 2021 |
| ISO\_WK\_NBR | NUMBER(38,0) | Numeric value of the ISO Week |
| CAL\_YR\_NBR | NUMBER(4,0) | Numerica value of the Calendar Year |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |
| CURR\_WK\_MON_DT | DATE | The Monday date of the ISO Week |
| CURR\_WK\_SUN_DT | DATE | The Sunday date of the ISO Week |
| MJRTY\_WKDY\_YR\_MO\_NBR | NUMBER(6,0) |     |
| PRIOR\_YR\_ISO\_YR\_WK_NBR | NUMBER(6,0) | The corresponding ISO Week of the prior year |

  

  

  

### [**EDW.ISO\_WK\_MO**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/ISO_WK_MO)
This view serves as a reference for every valid combination of an ISO Week and Month. An ISO Week is not confined within a single month and may cross months depending how the calendar falls. Therefore it is possible for an ISO Week to have multiple entries on this view – one for each month it resides within.

| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| ISO\_YR\_WK_NBR | NUMBER(6,0) | Numeric value representing the ISO Year Week expressed as YYYYWW |
| CAL\_YR\_MO_NBR | NUMBER(6,0) | Numeric value of the Calendar Year Month that the ISO Week falls within. (An ISO week may cross months) |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | EDW timestamp of the last modification to the record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata Object of the record |


# How to query data

<PageCreator />

Published on 4/14/21 by A. Stites
