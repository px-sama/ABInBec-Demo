---
title: PESO data
tags:
 - Marketing Data
 - Media
 - PESO
description: Aggregated values for quantitative consumer engagement and cost metrics
---

# PESO Data 
This data set is comprised of the PESO input table. PESO stands for Paid, Earned, Shared and Owned Media and the data is sourced from the Consumer Data Platform and various social channels (e.g. Facebook) via Datorama. The data is used by the Consumer Data Science team to understand the interactions between our different media channels and create recommendations on how to optimize ABI's marketing spend. 
 

### [CONSUMERS.PESO_METRICS](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CONSUMERS/view/PESO_METRICS) 
This view contains the daily aggregated values for quantitative engagement and cost metrics that are inputs to the PESO model. Each record represents total number of individual quantitative metrics (e.g. Facebook likes, Twitter Retweets, Google Analytics Page Views) for the given date. The data is refreshed daily at midnight. The following acronyms are used in this view:

- FB = Facebook
- TW = Twitter
- YT = YouTube 
- TTD = The TradeDesk 

| **Field Name**| **Data Type** | **Values| PESO** | **Source** | **Description** |
| ------------------------------------ | --------- | -------- | ---- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Day | Date | YYYYMMDD | NA | Harmonized | Time Period which supports all field metrics |
| Gold | Numeric | Integer | O | Treasure Data | Consumer Gold Records Acquired Per Time Period |
| Diamond | Numeric | Integer | O | Treasure Data | Consumer Diamond Records Acquired Per Time Period where a consumer made a purcahse |
| Poor | Numeric | Integer | O | Google Search | Number of Poor URLS as defined by Google |
| Needs\_Improvement | Numeric | Integer | O | Google Search | Number of URLS that need improvement as defined by Google |
| Good | Numeric | Integer | O | Google Search | Number of Good URLS as defined by Google |
| Hits | Numeric | Integer | O | Google Analytics | An interaction that results in data being sent to Analytics. Common hit types include page tracking hits, event tracking hits, and e-commerce hits. |
| Visits | Numeric | Integer | O | Google Analytics | Number of page visits |
| Screen\_Views | Numeric | Integer | O | Google Analytics | Number of screen views |
| Clicks | Numeric | Integer | S | SFMC (Salesforce Marketing Cloud)| Number of Salesforce Marketing Cloud Email Clicks |
| Opens | Numeric | Integer | S | SFMC (Salesforce Marketing Cloud)| Number Salesforce Marketing Cloud of Email Opens |
| Media\_Cost\_TTD | Numeric | Integer | P | The TradeDesk | Sum of Media Cost in USD $ per Time Period |
| Impressions\_TD | Numeric | Integer | P | The TradeDesk | Number of Impressions serviced by The TradeDesk |
| FB\_Lead\_Ads | Numeric | Integer | P | Facebook | Number of Facebook Lead Ads acquired (Note: See Gold Records) |
| FB\_Lead\_Ads\_Cost | Numeric | Integer | P | Facebook | Sum of Media Cost in USD $ per Time Period |
| Media\_Cost\_TW | Numeric | Integer | P | Twitter | Sum of Media Cost in USD $ per Time Period |
| Media\_Cost\_YT | Numeric | Integer | P | YouTube | Sum of Media Cost in USD $ per Time Period |
| Media\_Cost\_FB | Numeric | Integer | P | Facebook | Does not include FB Lead Ads Cost |
| Paid\_Cost\_Total | Numeric | Integer | P | Calculated |Sum of all Media Costs in USD per Time Period (TTD+FB+FB_Lead_Ads+TW+YT) |
| Impressions\_TW | Numeric | Integer | P | Twitter | Number of Twitter Impressions |
| Impressions\_YT | Numeric | Integer | P | YouTube | Number of YouTube Impressions |
| Impressions\_FB | Numeric | Integer | P | Facebook | Number of Facebook Impressions |
| Paid\_Impressions\_Total | Numeric | Integer | P | Calculated |Sum of all Paid Impressions (TTD+FB+FB_Lead_Ads+TW+YT) |
| Clicks\_TTD | Numeric | Integer | P | The TradeDesk | Clicks on the TradeDesk |
| Clicks\_FB | Numeric | Integer | P | Facebook | Clicks on Facebook |
| Clicks\_YT | Numeric | Integer | P | YouTube | Clicks on YouTube |
| Clicks\_TW | Numeric | Integer | P | Twitter | Clicks on Twitter |
| Paid\_Clicks\_Total | Numeric | Integer | P | Calculated | Sum of all Clicks (TTD+FB+TW+YT) |
| Conversions\_TTD | Numeric | Integer | P | The TradeDesk | Source Defined Conversions on The TradeDesk |
| Conversions\_FB | Numeric | Integer | P | Facebook | Source Defined Conversions on Facebook |
| Conversions\_YT | Numeric | Integer | P | YouTube | Source Defined Conversions on YouTube |
| Conversions\_TW | Numeric | Integer | P | Twitter | Source Defined Conversions on Twitter |
| Paid\_Conversions\_Total | Numeric | Integer | P | Calculated | Sum of all Conversions (TTD+FB+TW+YT) |
| FB\_Social\_Page\_Likes | Numeric | Integer | E | Facebook | Number of Likes on Facebook pages |
| FB\_Delivery\_Social\_Post\_Comments | Numeric | Integer | E | Facebook | Number of Comments on Facebook posts |
| TW\_Social\_Retweets | Numeric | Integer | E | Twitter | Number of Retweets on Twitter |
| TW\_Social\_Follows | Numeric | Integer | E | Twitter | Number of new Twitter Followers |
| YT\_Interactions | Numeric | Integer | E | YouTube | Number of YouTube interactions (views, likes, and subscriptions)|
| Earned\_Engagement\_Total | Numeric | Integer | E | Calculated | Sum of all Earned Activity (FB Social Likes + FB Social Post Comments + TW Retweets + TW Social Follows+ YT Interactions) |

 



