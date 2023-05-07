# Snowflake Access

Snowflake is Alchemy's data warehouse that stores all views and tables that are shown here on this website. There are multiple roles within Snowflake that grant specific levels of access to different views and tables. These roles are as follows:

**General User(*ABI_USER*)**- This is the standard role granted to anyone who requests Snowflake access. This allows you to access all views in ABI_DEV, ABI_TST and ABI_WH(prod). If you have this role, you should be able to follow any link on the website that is a view in the warehouse.

**Super User(*ABI_SUPERUSER*)**- In addition to general users, this role allows you to access all base tables in ABI_DEV, ABI_TST and ABI_WH(prod). If you have this role, you should be able to follow any Snowflake link on the website.

**Developer(*ABI_DEVELOPER*)**- This role allows you to modify objects along with all the permissions that a super user has. This role is granted only to the Alchemy developers and will not be given to any other user unless special circumstances exist.


If you need general user Snowflake access, you can request it through a [Service Now Ticket](https://solutionsnow.one.ofc.loc/plugins/servlet/desk/portal/4/create/2569). <br/>
If you require a higher level of access, please contact [Walt Lilyman](mailto:walter.lillyman@anheuser-busch.com).