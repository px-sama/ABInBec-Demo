---
title: Go Spot Check DIR
tags:
    - Application Data 
    - Program
    - Wholesaler
description: Go Spot Check Digital Image Recognition survey results
---
# Go Spot Check DIR  

This dataset is for Go Spot Check Digital Image Recognition survey results.  Go Spot Check (GSC) is a 3rd party vendor which provides an app for the wholesalers to submit surveys, part of the survey captures images of all the cooler doors present in the stores. GSC converts all the images to readable data formats and makes those results available via API in one of their endpoints accessible by ABI. Every hour the data is consumed through an API call via ADF which in turn executes a set of Python files on Databricks cluster where the data is pushed directly to ABI\_WH.LOLA\_T. One of the primary usage of this data is to create realograms used extensively in the Digital Image Recognition (DIR) project.

  

### **LOLA\_T.GSC\_DIR_TAGS**
This table contains the GSC DIR data retrieved hourly from the GSC API. This data in this table represents surveys and pictures taken by wholesaler employees at specific accounts. This data can be joined to the PDCD_DM view using the UPC field to retrieve and ID the product in the image.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| COMPANY_ID | int | GSC customer identifier |
| MISSION_ID | int | Unique GSC mission identifier |
| MISSION\_RESPONSE\_ID | int | ID of the mission response in which the tagged photo was captured |
| TASK_ID | int | ID of the task for which the photo was captured |
| TASK\_RESPONSE\_ID | int | ID of the task response in which the tagged photo was captured |
| SCENE_ID | int | ID of the scene (collection of all photos submitted as a single task response to a photo task) being tagged |
| SCENE\_TYPE\_ID | int | ID of the scene type |
| SCENE\_TYPE\_NAME | string | The scene type of the photo (e.g. Cold Box) |
| SCENE\_TYPE\_CODE | string | Normalized name of the scene type |
| SCENE_STATUS | string | Value of ‘Pending’ or ‘Completed’. Pending values indicate that Unrecognizable product tags have been identified and sent to our Hybrid human tagging line for completion. |
| SCENE\_CREATED\_AT | timestamp | Date/Timestamp generated by the ML system when the tag was created |
| SCENE\_UPDATED\_AT | timestamp | Date/Timestamp generated by the ML system when the tag was last updated |
| SCENE\_CAPTURED\_AT | timestamp | Date/Timestamp of the GSC Mission Response submission where the tag originated |
| TAG_ID | int | Unique identifier of the tag |
| TAG\_TYPE\_ID | int | ID of the tag_type |
| TAG\_TYPE\_NAME | string | Name of the tag\_type (ex: coldbox\_product, coldbox\_unrecognizable\_product) |
| TAG\_DELETED\_AT | string | Date/Timestamp of tag deletion if applicable. |
| TAG\_CREATED\_AT | timestamp | Date/Timestamp of tag creation in the IR system. |
| TAG\_UPDATED\_AT | timestamp | Date/Timestamp of the most recent tag update in the IR system. |
| TAG\_IMAGE\_ID | int | Unique Image ID for the image that contains the tag |
| TAG\_IMAGE\_URL | string | URL string which links to the specific Image ID |
| TAG\_IMAGE\_ORDINAL | int | Numeric value for the order in which the image was submitted within a specific Scene ID |
| GSC\_TASK\_VERSION_ID | int | Unique task version identifier of task where the image was taken. Task Version ID ties tasks together when missions are edited/versioned. |
| GSC\_PLACE\_ID | int | Unique Place ID where mission response was completed. |
| GSC\_USER\_ID | int | Unique User ID that submitted the mission response. |
| TAG\_BOUNDING\_BOX_BOTTOM | int | Pixel coordinate for the bottom edge of the tag bounding box in the image. |
| TAG\_BOUNDING\_BOX_TOP | int | Pixel coordinate for the top edge of the tag bounding box in the image. |
| TAG\_BOUNDING\_BOX_LEFT | int | Pixel coordinate for the left edge of the tag bounding box in the image. |
| TAG\_BOUNDING\_BOX_RIGHT | int | Pixel coordinate for the right edge of the tag bounding box in the image. |
| TAG\_BOUNDING\_BOX\_DISPLAY\_WIDTH | int | Pixel distance between TAG\_BOUNDING\_BOX\_LEFT and TAG\_BOUNDING\_BOX\_RIGHT |
| TAG\_BOUNDING\_BOX\_DISPLAY\_HEIGHT | int | Pixel distance between TAG\_BOUNDING\_BOX\_TOP and TAG\_BOUNDING\_BOX\_BOTTOM |
| TAG_POSITION | string | (X,Y) Coordinates of the tag within the image. X indicates the vertical position, Y indicates the horizontal position. \[ex: (1,1) will always be in the upper left hand corner of the image\] |
| SUPPLIER | string | Supplier value associated with the UPC or Brand Family identiﬁed. Source: GSC Master Product List. *Note - Even if a UPC is unrecognizable, the IR system is trained to still predict the Brand Family and Supplier of the product if possible |
| BRAND | string | Brand value associated with the UPC identified. Source: GSC Master Product List. |
| BRAND_FAMILY | string | Brand Family value associated with the UPC identified. Source: GSC Master Product List.*Note - Even if a UPC is unrecognizable, the IR system is trained to still predict the Brand Family and Supplier of the product if possible |
| CLASSIFICATION | string | Classification value associated with the UPC identified. Source: GSC Master Product List. |
| SUB_CLASSIFICATION | string | Sub Classification value associated with the UPC identiﬁied. Source: GSC Master Product List. |
| UPC | string | UPC value associated with the product identified. T. Source: GSC Master Product List. |
| PRODUCT\_DELETED\_AT | string | Date/Timestamp when the product tagged was deleted from the GSC Master Product List (if applicable). |
| CONFIDENCE | int | Conﬁdence percentage of the IR model on the tag prediction returned. |
| NAME | string | Product Name associated with the UPC identified. Source: GSC Master Product List. |
| PACK_SIZE | string | Pack Size associated with the UPC identified. Source: GSC Master Product List.*Note - Pack Size is still predicted and returned by the IR system even if a product is Unrecognizable. |
| PACK_TYPE | string | Product Type associated with the UPC identified. Source: GSC Master Product List.*Note - Pack Type is still predicted and returned by the IR system even if a product is Unrecognizable. |
| SIZE | string | Product Size associated with the UPC identified. Source: GSC Master Product List. |
| PRODUCT\_REFERENCE\_IMAGE | string | URL of product reference image (if contained in the GSC Master Product List) |
| PRODUCT_ORIENTATION | string | Indicates the product’s position on the shelf. (Possible values: ‘long-side’ , ‘short-side’ , ‘rotated’).*Note - Product Orientation is still predicted and returned by the IR system even if a product is Unrecognizable. |
| UNIT_FACING | int | Number of facings for a tagged product in the image. Determined by the IR system based on Pack Size, Pack Type, and Product Orientation. |
| TAG\_POSITION\_VERTICAL | int | Parsed vertical position of the tag in the image.(X coordinate in TAG_POSITION ﬁeld) |
| TAG\_POSITION\_HORIZONTAL | int | Parsed horizontal position of tag in the image. (Y coordinate in TAG_POSITION ﬁeld) |
| EVENTED_AT | timestamp | When the completed tag record was written. This is the timestamp by which the ﬁles are partitioned. |
| EDW\_START\_TSP | timestamp | ETL batch identifier of last time record wad updated |

  

  

  
Published on 5/21/21 by A. Stites with content from A. Bhaskar
