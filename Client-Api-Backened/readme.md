This is CrmTicket Backened API.
<!-- 

   Make sure to install nodemon as a dev-dependencies.
   git clone 
   and npm start

 -->

Routers Used----LoginRouter  and TicketRouter
<!-- LoginRouter Api ('/auth/user)
          |Routers               |reuqet-type   |isPrivate  |description
    1.     | './auth/login'  |    POST       |     NO   |       verify user authentication and return JWT
    2.     | './auth/user/request-reset-password '|Post  | NO | verify email and pin to reset the passsword
    3.     |  './auth/user/reset-password'  | Post |NO | replace with new password
    4.     | './auth/user/   | GET  | YES  |  get user info
   5. | './auth/user/update-password' | Patch | NO | update password \
   6. | './auth/user/logout' | Delete | yes | logout fromentries





 -->


 ****TicketRouter******
 <!-- TicketRouter Api ('/ticket/)
          |Routers               |request-type   |isPrivate  |description
    1.     | '/ticket'  |    Get    |     YES |   get all ticket for the loggedin User
    2.     | '/ticket/{id} '|GET  | YES | Get a single ticket details
    3.     |  '/ticket'  | POST |YES | Create a new ticket
    4.     | '/ticket/{id}'   | PUT  | YES  |  Update ticket details i.e reply message 
    5.     | '/ticket/close-ticket/{id}'   | PUT  | YES  |  Update ticket details i.e reply message 
 
 
 
 
 
  -->