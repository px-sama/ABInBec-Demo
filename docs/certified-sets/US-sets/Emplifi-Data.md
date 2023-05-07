---
title: Emplifi Data
tags:
    - Application Data 
    - Social Media
description: Data from ABI's social media accounts 
---
# Emplifi Data
This dataset is comprised of views provided by Emplifi (formerly Social Bakers). The views contain information on ABI's social media accounts (both qualitative and quantitative data) for a specified time range.  Data is refreshed daily. 


### [**CONSUMERS.EMPLIFI_PROFILES**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CONSUMERS/view/EMPLIFI_PROFILES)
Contains all profiles specified by AB Emplifi Account owner.

| Field Name        | Data Type        | Comment                                                     |
|-------------------|------------------|-------------------------------------------------------------|
| id                | varchar          | Profile unique ID; format varies by network                 |
| name              | varchar          | Profile display name                                        |
| timezone          | varchar          | Profile default timezone                                    |
| profile_name      | varchar          | Profile user name                                           |
| picture           | varchar          | url link to profile picture                                 |
| insights_enabled  | boolean          | Indicates whether or not inghts data is enabled for profile |
| community_enabled | boolean          | Indicates whether community specific data is enabled        |
| network           | varchar          | Social Media network of profile e.g. Facebook               |
| EDW_LOAD_TSP      | timestamp_ntz(9) | Data Load timestamp                                         |

### [**CONSUMERS.EMPLIFI_METRICS**](https://app.snowflake.com/east-us-2.azure/abinbev_naz/data/databases/ABI_WH/schemas/CONSUMERS/view/EMPLIFI_METRICS)
Emplifi collects metrics on all profiles specified by Emplifi Account for all social media networks. This view 
contains all base metrics for all profiles in `EMPLIFI_PROFILES` table.  Profile metrics endpoints return daily values for the specified set of metrics and profiles. Profile metrics attribute data to the profile/page, focusing on when engagement happened, regardless if a post was published during the analyzed date range or not. Data is aggregated by when it happened, and it is not related to a specific piece of content. Aggregation is the type of calculation used for grouping values of a specific metric.
**NOTE**: Not all fields correspond to all networks

| Field Name               | Data Type        | Comment                                                      |
|--------------------------|------------------|--------------------------------------------------------------|
| followers_lifetime       | varchar          | Lifetime total followers                                     |
| followers_change         | varchar          | Daily Followers Change                                       |
| profile                  | varchar          | Profile ID                                                   |
| network                  | varchar          | Profile Network e.g. Facebook                                |
| date                     | varchar          | Date metric computed by emplifi                              |
| ff_ratio                 | varchar          | Followers/Following Ratio                                    |
| following_change         | varchar          | Number of accounts profile is following (daily change)       |
| following_lifetime       | varchar          | Total number of accounts profile has followed                |
| listed_change            | varchar          | Absolute change of on how many lists profile appears (daily) |
| listed_lifetime          | varchar          | Total count of on how many lists profile appears             |
| interactions_per_1k_fans | varchar          | Interaction count for every 1000 fans; (youtube only)        |
| interaction_change       | varchar          | Daily growth on interactions; (youtube only)                 |
| posts_lifetime           | varchar          | Number of total posts by profile                             |
| views_change             | varchar          | Absolute change in views (dialy change)                      |
| viewed_time_change       | varchar          | Change in the amount of view time (youtube only; daily)      |
| EDW_LOAD_TSP             | timestamp_ntz(9) | Last Loaded time                                             |


Published on 10/19/2022 by Jonathan Dunnett
