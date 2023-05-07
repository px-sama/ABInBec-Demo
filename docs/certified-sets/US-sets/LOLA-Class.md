---
title: LOLA Class (Segmentation)
tags:
    - Consumer Data
    - Segmentation
description: Account segmentation data created by the LOLA Class microservice
---

# LOLA Class (Segmentation)  

This data set is comprised of objects that hold account segmentation data that is created by the LOLA Class microservice. Segmentation is used to describe pre-defined business attributes for accounts, which allows the Sales organization or other products within LOLA to categorize accounts based on these features. The process begins with the Data Science team creating a raw output, which is then curated by Data Engineering so that the raw output is transformed into business ready, consumable data. This data now resides in Snowflake and is exposed in a view available to users in the LOLA schema. Currently the Class segmentations are refreshed every trimester but will become more frequent in the near future.

  

### **[LOLA.VIP\_OUTLT\_SEGMENTATION](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/LOLA/view/VIP_OUTLT_SEGMENTATION)**
This is a consumer ready view that encapsulates all logic sourced directly from the LOLA Class Data Science output to describe the active segmentation attributes and values (can be thought of as key/value pairs) assigned to VIP Outlets using the VPID as the unique identifying key.  


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| VPID | numeric | Unique identifier for an account in the VIP universe. |
| SEG_ATTRIBUTE | text | The name of the segmentation attribute assigned to the account. |
| SEG_VALUE | text | The name of the segmentation value assigned to the account. |
| TAXIS_ID | numeric | The segmentation value assigned to the account. |
| ACTV_FLG | text | Active flag to denote if the record is still active or not. |

  
Published on 6/11/21 by A. Stites. Content from L. Diffey
