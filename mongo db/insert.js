let persons =[
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "Los Angeles"
    },
    {
        name: "Mike",
        age: 35,
        city: "Chicago"
    }
];
db.createCollection("teachers");
db.teachers.insertOne({
    name: "Alice",
    subject: "Math",
    
});
db.teachers.insertOne({
    name: "Bob",
    subject: "Science",
    
});
db.teachers.insertMany([
    {
        name: "xyz",
        subject: "History",
        
    },
    {
        name: "abc",
        subject: "English",
        
    }
]);
db.teachers.find()
db.createCollection("products");
db.products.insertOne({
    name: "Laptop",
    price: 1000,
    category: "Electronics"
});
db.products.insertMany([
    {
        name: "laptop",
        price: 1500,
        category: "electronics"
    },
    {
        name: "Pen",
        price: 2,
        category: "Stationery"
    }
]);
db.products.find();
mentors> db.products.find({name :'Laptop'})
db.products.find({price:{$in:[20,50]}});

db.createCollection('characters');
db.characters.insertMany([
    {name: 'tony stark'},
    {name: 'Thanos'},
    {name: 'Jon Snow'},
    {name: 'Robb Stark'},
    {name: 'Ross'},
    {name: 'Monica'},
    {name: 'Ted Mosby'},
    {name: 'Barney'},
    {name: 'Dr. Doom'},
    {name: 'Reed Richards'},
    {name: 'Professor X'},
    {name: 'Wolverine'},
    {name: 'Bruce Wayne'},
    {name: 'Clark Kent'},
    {name: 'Diana Prince'},
    {name: 'Barry Allen'},
    {name: 'Harley Quinn'},
    {name: 'Luke Skywalker'},
    {name: 'Darth Vader'},
    {name: 'Obi-Wan Kenobi'},
    {name: 'Yoda'},
    {name: 'Hermione'},
    {name: 'Harry Potter'},
    {name: 'Ron Weasley'},
    {name: 'Albus Dumbledore'},
    {name: 'Severus Snape'},
    {name: 'Gandalf'},
    {name: 'Daenerys Targaryen'},
    {name: 'Tyrion Lannister'},
    {name: 'Cersei Lannister'},
    {name: 'Joey Tribbiani'},
    {name: 'Chandler Bing'},
])
//when we insert more than 20 names , only 20 items are shown instead of all
//when we use toArray() all itms will be shown

db.characters.find().toArray(); 

// another way
db.characters.find().forEach(ch => printjson(ch));


// Pagination
db.characters.find().limit(5); // this will return first 5 elements

db.characters.find().skip(5).limit(5);