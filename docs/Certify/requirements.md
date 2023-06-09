---
title: Data Set Requirements
sidebar_position: 3
---
# Data Set Requirements

Here is an example Data Set with important formatting comments

:::note
This format does not need to be followed exactly. The main components are the header and the subheadings for each view or important heading.

:::


Shipments.md:
### Header
```
---
title: Shipments
tags:
    - Transportation
    - Distribution
description: Data on shipments sent from breweries and distribution centers to wholesaler warehouses
---
```
**Each document should have a header section with an appropriate title, tags AND short desciption in this format** <br/> <br/> <br/>
### Introduction
```
# Shipments  

This data set is comprised of views that provide visibility in to shipments sent from breweries and distribution centers to wholesaler warehouses. 
Shipments to wholesalers primarily consist of finished product but may also include line items for packaging, freight or deposit amounts for kegs. 
This data set can be joined with [Product & Brand](Product-and-Brand.md) to retrieve identifying attributes about the items shipped or destination wholesaler. 
It can also be joined to the [VIP Sales](VIP-Sales.md) data set if a user wanted to compare shipments to STRs.

``` 
**The title should be repeated with a level one heading followed by a short description of the data set** <br/> <br/> <br/>
### Document Body
```
### **[EDW.SHPMT\_INV\_LN](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/EDW/view/SHPMT_INV_LN)**
This view contains the line item detail for all invoices with a relationship to a shipment sent from an AB brewery or warehouse. An invoice may be generated for finished goods purchase, returns or adjustments to a prior invoice and all invoices are generated by Warehouse Management System (WMS). This view can be joined to EDW.PDCN\_DM view using the PDCN\_GENR\_TR\_ID to retrieve the item level detail (brand, package, etc) of items that were shipped as part of a specific shipment. It can also be joined to the EDW.WSLR_DM view to retrieve details about the destination of the shipment and what wholesaler warehouse was shipped to. Fields of interest on this view include the Order Number, Shipment Number, Shipment Date, origin, destination wholesaler, item, volume, price, taxes, and discounts.


| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- | 
| INV_NBR | VARCHAR(10) | Invoice number of the VSAM Sales (line item) record. |
| INV\_LN\_NBR | NUMBER(4,0) | This is a unique number used to separate line items within an invoice. |
| INV_DT | DATE | The date on a standard calendar. |
| SELLNG\_CMPY\_PARTY_ID | NUMBER(15,0) | Surrogate key to uniquely identify an organizational unit called an SAP Company. |
| SELLNG\_CMPY\_CD | VARCHAR(15) | A code that is associated with each legal entity that makes up Anheuser-Busch. |
| SELLNG\_BRWY\_PARTY_ID | NUMBER(15,0) | This is the rolename of Party that corresponds to the organization. |
| SELLNG\_BRWY\_CD | VARCHAR(6) | Represents the brewery from which the product on the line item was sold. |
| SHP\_FROM\_LOC\_TYP\_CD | VARCHAR(2) | Indicates what type of location it is. ex: Brewery = BY, warehouse = WH, distribution center = dt, sales office = so, etc. |
| SHP\_FROM\_ST_CD | VARCHAR(2) | The standard 2 character code for US States and Territories |
| SHP\_TO\_CUST_CD | VARCHAR(10) | This will be the Wholesaler Number if the shipment goes to a wholesaler. If customer is not wslr then it may be a recycle product customer, aluminum company, PPG product customer etc. |
| SHP\_TO\_LOC\_TYP\_CD | VARCHAR(2) | Indicates what type of location it is. ex: Brewery = BY, warehouse = WH, distribution center = dt, sales office = so, etc. |
| SHP\_TO\_BRWY\_PARTY\_ID | NUMBER(15,0) | This is the rolename of Party that corresponds to the organization. |
| SHP\_TO\_BRWY_CD | VARCHAR(6) | Represents the location abbreviation where the product on the line item was shipped. |
| SHP\_TO\_WSLR\_PARTY\_ID | NUMBER(15,0) | Unique identifier for a wholesaler. |
| SHP\_TO\_WSLR_NBR | VARCHAR(5) | Unique 5 digit code for a wholesaler. **Can be joined to WSLR_DM view to retrieve attributes of destination wholesaler.** |
| SHP\_TO\_DEST_CD | VARCHAR(2) | A code uniquely describing a Sales Destination. Mostly the state codes of the 50 U.S. states, plus codes for other shipment destinations. |
| PRDUCG\_BRWY\_PARTY_ID | NUMBER(15,0) | This is the rolename of Party that corresponds to the organization. |
| PRDUCG\_BRWY\_CD | VARCHAR(6) | Represents the location abbreviation where the product on the line item was produced. |
| JRNL\_CMPY\_PARTY_ID | NUMBER(15,0) | Surrogate key to uniquely identify an organizational unit called an SAP Company for accounting purposes. |
| JRNL\_CMPY\_CD | VARCHAR(15) | A code that is associated with each legal entity that makes up Anheuser-Busch. |
| CTRL\_CNTR\_CD | VARCHAR(6) | Company or location code indication accounting responsibility for work in process on DSL databases. |
| GENL\_SLS\_GRP_CD | VARCHAR(2) | General Sales Group 01- Draft Beer -Shipments of Draft Beer to wholesalers 02- Package Beer - Shipments of Package Beer to Wholesalers 03 -Interplant Beer \- Interplant Shipments |
| INV\_DOC\_TYP_CD | VARCHAR(1) | Code indicates what the invoice represents (i.e. sale, credit, consignment, etc.) 0 = beer branch cost wholesalers~ 1 = non consignment debit~ 3 = consignment credit~ 4 branch to branch sales~ 5 = non consignment credit~ 7 = consignment credit |
| INV\_DOC\_RSN_CD | VARCHAR(2) | Document Reason 00 - ORIGINAL-BILLING 01 - RETURNED-FOR-RESALE 03 - SHIPPING-BILLING-ERROR 05 - AMOUNT-ONLY-ADJUSTMENTS etc. |
| GENL\_PROD\_GRP_CD | VARCHAR(4) | This indicates what the invoice, in general, is representing (i.e. beer, wine, soda, snacks, etc.) |
| LN\_PROD\_GRP_CD | VARCHAR(4) | This specifically indicates what the particular line item of the invoice represents (i.e. beer, wine, soda, pack, frt, etc.) |
| LIQ\_TYP\_CD | VARCHAR(2) | Code that identifies the general type of liquid in the shipment. Ex. BR - Beer, LQ - Liquor, NA - Non-alcoholic. Used to help determine how a shipment may be taxed. |
| PDCN\_GENR\_TR_ID | NUMBER(15,0) | The unique ITEM_ID that identifies the PDCN or a Generic trade Return. **Can be joined to the PDCN\_DM view to get PDCN\_CD and attributes** |
| STCK_CD | VARCHAR(15) | A code that designates special distribution and handling requirements for a Packaged Product (PDCN). For example, 01 represents general distribution. |
| PCS\_ITEM\_ID | NUMBER(15,0) | Represents the item that is planned for a packing activity. |
| ITEM_TXT | VARCHAR(12) | A number used by companies to specifically identify line items. |
| SHPD_DT | DATE | The date on a standard calendar. |
| DSLS\_TFER\_DT | DATE | The date on a standard calendar. Date when the shipment information is transferred to SAP, used for reconciliation and auditing. May differ from the Invoice or Shipment Date. |
| CNTRT_NBR | VARCHAR(9) | Represents a contract number that is associated with the invoice. |
| ORD_NBR | VARCHAR(10) | The order number associated with the invoice. |
| SHPMT_NBR | VARCHAR(10) | Shipment identifier for goods on invoice line item. |
| PURC\_ORD\_NBR | VARCHAR(10) | Purchasing document number.  his identifies the purchase order that precipitated the shipment. Import orders will get the PO from SAP. Export orders get PO from WMS. |
| FRT\_TYP\_CD | VARCHAR(1) | Indicates freight type. P = Prepaid freight by brewery~ C = collect freight by brewery~ N = none |
| RAIL\_CAR\_JOB_NBR | VARCHAR(12) | Indicates the rail-car number or specific job number that is associated with the invoice. |
| TRANS\_MODE\_CD | VARCHAR(2) | Indicates what method the line item of the invoice was transported. CC - Common Carrier, RL- Rail |
| CARR_CD | VARCHAR(4) | Code that identifies which carrier code the product is being shipped on for this last order. |
| WHSE_CD | VARCHAR(3) | Warehouse code. |
| WHSE\_SRCE\_CD | VARCHAR(1) | Warehouse source indicator indicates if warehouse (producing location) assignment was done by RCT (value R) ... applicable only to beer/beer lines. |
| PRC\_SRCE\_CD | VARCHAR(1) | Indicates the source of the price: Space - missing, A - Pricing, F - Freight Pricing Routine, E = Entered. |
| ACRUL_FLG | VARCHAR(1) | This indicates if the line item represents an accrual which needs to be automatically reversed (Y = yes, N = no). |
| MSSHPMT\_TAX\_FLG | VARCHAR(1) | Indicates that AB could not reclaim excise tax paid on this shipment because it could not prove that it was a misshipment. Misshipment occurs when product/qty/party is incorrect on a shipment. |
| B220\_SALE\_CD | VARCHAR(1) | This indicates whether the line item represents a B220 sales or not. B220 sales are what is reported as WODs to retailer. |
| ORIGN\_OF\_SLS\_RCRD\_CD | VARCHAR(1) | This indicates where the monthly sales record came from. T = Transferred from daily sales~ U = User Submitted correction~ P = Program created correction~ C = Converted from a monsales correction |
| MOD\_SLS\_RCRD_FLG | VARCHAR(1) | Indicates if the MSSSALES record has been modified after being added. |
| CRTE\_JRNL\_FLG | VARCHAR(1) | Switch that indicates whether or not the MSSSALES record is used for journals. |
| ST\_TAXPYR\_CD | VARCHAR(1) | Identifies who pays the state tax for this product. B - Brewery pays, C - Customer pays, Space - Tax free. |
| SLS\_TAX\_CD | VARCHAR(3) | Indicates if excise tax is paid by the producer or the customer and if it is a military sale or not. Each of the 3 characters in this code are detailed below: Position 1 (federal) and 3 (state): 3 - tax paid by customer 4 - tax paid by producer |
| FED\_SLS\_TAX_CD | VARCHAR(1) | Indicates if federal excise tax is paid by the producer or the customer. 3 - federal tax paid by customer 4 - federal tax paid by producer |
| CIV\_MIL\_TAX_CD | VARCHAR(1) | Indicates if civilian or military taxes may apply. 0 - Civilian 9 - Military |
| ST\_SLS\_TAX_CD | VARCHAR(1) | Indicates if state excise tax is paid by the producer or the customer. 3 - state tax paid by customer 4 - state tax paid by producer |
| WGT\_IN\_LBS_QTY | NUMBER(10,2) | The total weight (in lbs) of the product represented by the line item. |
| INV\_LN\_QTY | NUMBER(8,0) | This is the quantity, by individual product units, represented by the line item. |
| INV\_LN\_AMT | NUMBER(12,2) | This is the total dollar amount represented by the line item. |
| UNIT\_PRC\_LN_AMT | NUMBER(12,5) | This is the unit price, for one quantity, of the line item. Includes federal tax, state tax. |
| PROMO\_UNIT\_LN_AMT | NUMBER(12,5) | The portion of the unit price that is a promotional discount. Included in frontline price. |
| ST\_TAX\_UNIT\_LN\_AMT | NUMBER(12,5) | The portion of the tax that is state tax. Included in frontline price. Federal tax is not broken out. |
| DEPST\_UNIT\_LN_AMT | NUMBER(12,5) | The portion of the price that is the deposit - used for returning items (returnable bottles and kegs). Included in frontline price. |
| BBL\_EQUIV\_FCT | NUMBER(12,9) | The barrel equivalent factor associated with the container on the line item. |
| BBL\_EQUIV\_QTY | NUMBER(14,5) | The barrel equivalent associated with the quantity on the line item. |
| GAL\_EQUIV\_FCT | NUMBER(12,9) | The gallon equivalent factor associated with the container on the line item. |
| GAL\_EQUIV\_QTY | NUMBER(12,2) | The gallon equivalent associated with the quantity on the line item. |
| EDW\_MOD\_TSP | TIMESTAMP_NTZ(9) | The EDW Modified Timestamp is the date and time of the process was ran that obtained the data to be loaded into the EDW. |
| MDATA\_OBJ\_ID | NUMBER(15,0) | The unique identifier of a metadata object. |
| SAP\_BUS\_AREA_CD | VARCHAR(4) | The SAP business area (part of the new account information). For the entire SAP code block, look at MSSSLSAP. |
| SAP\_ACCT\_CD | VARCHAR(10) | The SAP account. See MSSSLSAP. |
| SAP\_COST\_CNTR_NBR | VARCHAR(10) | The SAP Cost Center. See MSSSLSAP. |
| LAST\_OP\_CD | VARCHAR(1) | CODE OF LAST OPERATION - Add/Update |
| ORIG\_GEN\_GRP_CD | VARCHAR(2) | The original general group code of the record when first added to monthly sales. |
| UNIT\_FRT\_AMT | NUMBER(9,3) |     |
| UNIT\_RCVRY\_CHRG_AMT | NUMBER(4,2) |     |
| MAINE\_PERMIT\_NO | VARCHAR(10) |     |
```
**The body of the document should be formatted as follows:**

    1. A title describing the view formatted in level 2 or level 3 header format
    2. A clear description consistent with the view definition
    3. A schema.view name linking directly to the object in Snowflake
    4. A table that contains all columns, data types and comments consistent with the view definition
    Also if possible, add a link to each view to its associated storage space on Snowflake
<br/><br/><br/>

### Sign and Date
```
Published on 3/5/21 by A. Stites  
```
**Include the author's name and publish date** <br/> <br/>

### Images
If you want to add images to your document, you first need to add them to their respective folder. For example, if I have a new Canada set that includes an image, I will put the image in this folder:
```
\alchemy\alchemy_website\docs\certified-sets\Canada-sets\images
```
The same would go for US sets, all you have to do is change "Canada-sets" to "US-sets".

To add the image in your document you need to use the following code:
```
![img.png](images/<example.png>)
```
The name of the image is unimportant. For example, in the Canada set "Loblaws Store Sales Data", this line of code is added to display the Architecture of Loblaws:
```
![image.png](images/Architecture.png)
```
:::note
**If you want to include a csv file with your data, put it into the same repository as the data set**

:::
### Extra tips
1. Use a markdown live preview to make sure the file looks correct before uploading it
2. Try to match tags with other pre-existing tags. You can find the full list of currently used tags by navigating to the bottom of a document and clicking a tag then clicking "View All Tags"
3. Use very minimal html and don't use "style"
4. Use:
```
<br/>
```
to make a new line if you want. Simply creating a new line in markdown will not force a new line in the rendered version.

[Click here to download the raw markdown file](example_markdown.docx)
