1. Create app — get client id and secret
    #https://www.linkedin.com/developers/apps/new
2. Call authorization to get the auth code (launch in a browser window)
    #https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="YOUR_CLIENT_ID"&redirect_uri=http://localhost:3000/auth/callback&scope=r_liteprofile%20r_emailaddress%20w_member_social

3. Call access token end point to get the access token (oauth/v2/accessToken)
    #from postman collection (oauth/v2/accessToken) -- replace the code with the latest code you got in step 2

4. Call profile call to get the basic profile
    # from postman collection use (/getProfile) -- replace the Autherization header with the new access token you get in step 3. (Bearer .....)