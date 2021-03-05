use admin
db.createUser({
  user: "USERNAME",
  pwd: "USERPASSWORD",
  roles: [
    "userAdminAnyDatabase",
    "dbAdminAnyDatabase",
    "readWriteAnyDatabase",
    "root",
  ]  
});



// connect to mongo => 
// mongodb://USERNAME:USERPASSWORD@127.0.0.1:27017/mongodb?authSource=admin&gssapiServiceName=mongodb&connectTimeoutMS=300000
// connect to mongo for nodejs => 
// mongodb://USERNAME:USERPASSWORD@database:27017/test?authSource=admin
