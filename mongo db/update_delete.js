//update
db.products.updateOne({
    name: 'laptop'},{
     $set: {price : 1200}
    }
);
// name with laptop , price will be updated to 1200

//delete
db.products.deleteOne({
    name : 'pen'
});
// the data having name pen will be deleted from database
db.characters.deleteMany({
    name : 'tony stark'
},
{
    name : 'john snow '
});

// both the data from character swill be deleted from the database by using deleteMany
