mongo [databasename]   # connect to databasename
show dbs 
use [databasename] 
db  # show currently used database 
show collections
db.createCollection('myCollection')

db.facebookrequests.find({ body: { $regex: /1420001734722366_1420384454684094/ } } );

db.facebookrequests.distinct( 'receivedAtTimestamp' );