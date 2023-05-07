---
title: VIP Inventory
tags:
    - Inventory
    - VIP
description: Extracts received via SFTP from the VIP Supplier Reporting Services (SRS)
---
# VIP Inventory  

The VIP Inventory data set is comprised of data provided by extracts received via SFTP from the VIP Supplier Reporting Services (SRS) collection system. The VIP SRS system collects daily inventory data from all Anheuser-Busch wholesalers. The following view has been established in the EDW schema in Snowflake to serve as the data layer for any inventory reporting applications.


### **EDW.VIP_INV**
This view contains all reported inventory transactions and on-hand inventory levels of AB products as reported by wholesalers to VIP SRS. Each record contains identifying fields for the date, wholesaler number, inventory transaction types (ending on hand, orders, samples, misc., etc.) and inventory (product, quantity, unit of measure). This is a live view that is updated every 2 hours throughout the business day from 5am to 9pm CST most commonly with inventory transactions for the prior business day.

 
| **Field Name** | **Data Type** | **Comment** |
| --- | --- | --- |  
| RECORDTYPE | VARCHAR(6) | All records will say DETAIL |
| RIDIST | VARCHAR(8) | 5 digit AB wholesaler number |
| VIPSRS | VARCHAR(5) | N/A |
| RIGLN | VARCHAR(13) | UCCnet Distributor ID |
| RIDDAT | DATE | Date of inventory posting (Do Not Use) |
| RIITEM | VARCHAR(10) | PDCN code for the inventory item |
| RITRCD | VARCHAR(2) | Inventory Transaction Code |
| RIIDAT | DATE | Date of inventory transcation (use this for inventory date) |
| RIQTY | NUMBER(10,0) | Inventory quantity |
| RIUM | VARCHAR(1) | Unit of measure of RIQTY (C = Full unit, B = bottle/lowest unit in PDCN) |
| RIPO | VARCHAR(10) | Purchase Order # (Receipts only) |
| RITRDN | VARCHAR(35) | Transfer Distributor Name (transfers only) |
| RITRST | VARCHAR(2) | Transfer Distributor State (transfers only) |
| RITSTP | TIMESTAMP_NTZ(9) | Timestamp of transaction |
| RIFMDT | DATE | From Date |
| RITODT | DATE | To Date |
| RIDITEM | VARCHAR(10) | Distributor internal item number |
| RIITMSTS | VARCHAR(1) | Distributor PDCN item status |
| RIREPACK | VARCHAR(1) | VIP data REPACK flag |
| RIPARENT | VARCHAR(8) | 5 digit AB parent wholesaler number |
| EDW\_START\_TSP | TIMESTAMP_NTZ(0) | EDW Timestamp of record |

  
  

  

  

  
Published on 12/07/2022 by J. Jordan
