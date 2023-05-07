---
title: VIP Orders
tags:
    - Order
    - Consumer Data
    - VIP
description: Orders data collected by VIP via SRS for future delivery
---
# VIP Orders  

This dataset represents Orders data collected by VIP via SRS for future delivery. When a retailer places an Order, regardless of methodology, an Order record is generated in the selling wholesaler's Route Accounting System (RAS) and that order record is then transmitted to VIP via SRS. Once an order is fulfilled an invoice is generated for the sale from that Order with details on whether the order was ready and if any items ordered were out of stock. This data is currently submitted to SRS by VIP and dBEV RAS customers with more integrations planned in the near future. 

  

### **EDW.VIP_ORD**
This view contains all the Orders records collected by VIP SRS and transmitted to AB. The data is updated every 2 hours throughout the business day with new records submitted to SRS. Each record contains information about an item ordered by a specific customer along with details on how the orde was placed, whether the order was fulfilled, were all products in stock and the total revenue collected for the item ordered.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RECORDTYPE | VARCHAR(6) | All record will say DETAIL |
| DISTID | VARCHAR(25) | Unique 5 digit AB wholesaler number |
| ORCODE | VARCHAR(25) | Order Number for the order taken |
| ORLINE | NUMBER(38,0) | Line on which the item ordered appears on the order |
| ORDATE | NUMBER(38,0) | Date order was taken |
| ORCUST | VARCHAR(15) | Wholesaler Assigned Customer Number |
| ORDITM | VARCHAR(10) | Distributor Item Number |
| ORSITM | VARCHAR(10) | PDCN code for item sold |
| ORSLSREPID | VARCHAR(10) | Sales Rep ID of the rep who took the order |
| ORWHSE | VARCHAR(8) | 5 digit AB wholesaler number of the warehouse for which the order was taken |
| ORCODEDT | NUMBER(8,0) | DO NOT USE |
| ORMODE | NUMBER(2,0) | DO NOT USE |
| ORORDSYS | VARCHAR(20) | System or methodology for which an Order was taken |
| ORTRTYPE | VARCHAR(1) | Flag to indicate the type of transaction (R = Retail, S = Samples, B = Breakage, T = Transfer, E = Revenue Adj, V = Prev Month Rev Adj) |
| ORINV | VARCHAR(25) | Sales invoice associated with an Order |
| ORIDAT | NUMBER(8,0) | Date associated with Sales Invoice |
| ORAVAIL | VARCHAR(1) | Flag indicating if Order was available |
| ORQTY | NUMBER(7,0) | Quanity of units ordered |
| ORUOM | VARCHAR(1) | Unit of measure ordered (C = Full unit, B = bottle/lowest unit in PDCN) |
| OROOSQTY | NUMBER(7,0) | Quantity of units Out of Stock |
| OROOSUOM | VARCHAR(1) | Unit of measure for Out of Stocks (C = Full unit, B = bottle/lowest unit in PDCN) |
| ORFRNEXT | NUMBER(13,4) | Extended Front Line Price for Order (excludes discounts) |
| ORTOTSLS | NUMBER(13,4) | Net Price of Order after discounts |
| OREXTDEP | NUMBER(13,4) | Deposit amount charged on Order |
| ORREPACK | VARCHAR(1) | Flag indicating if VIP team has placed this Wholesaler Item in REPACK status |
| ORCRTDATE | NUMBER(8,0) | Date order was created |
| ORCRTTIME | NUMBER(6,0) | Time order was created |
| ORPARENT | VARCHAR(25) | Master AB wholesaler number of warehouse that took order |
| EDW\_START\_TSP | TIMESTAMP_NTZ(0) | EDW Timestamp of record |
| MDATA\_OBJ\_ID | NUMBER(15,0) | Metadata object of record |

  
  

  

  

  
Published on 5/28/21 by A. Stites
