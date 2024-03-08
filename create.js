/* The code is inserting documents into the "inventory" collection in a MongoDB database. */
db.inventory.insertOne(
    { item : "canvas", qty : 100, size : { h : 28, w : 35.5, uom : "cm" } }
)

db.inventory.insertOne(
    { item : "journal", qty : 25, size : { h : 14, w : 21, uom : "cm" } } ,
    {  item : "journal", qty : 25, size : { h : 14, w : 21, uom : "cm" } }

)

