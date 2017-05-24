# myrateme

- User login system including passport local login, facebook login, login session. 
- Users are allowed to view each other company rating and very simple messaging without using socket.io. 

Note: 
- Add gmail email address in auth module
- Add facebook app ID and password in facebook module, facebook app is created from http://developer.facebook.com


 module.exports={  
   auth:{  
        user:'\<User gmail address\>',  
        pass:'\<password\>'  
        },  
   facebook:{  
    clientID:'\<App ID\>',  
    clientSecret:'\<App password\>',  
    profileFields:['email','displayName'],  
    callbackURL:'http://localhost:3000/auth/facebook/callback',  
    passReqToCallback:true  
  }  
}

