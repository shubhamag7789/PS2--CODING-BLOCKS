// many to many -  Each document links to multiple documents in another collection and vice versa via a bridge collection.


db.createCollection('actors');
db.actors.insertMany([
    {name:"Sheldon"},
    {name:'Penny'}
])

db.createCollection('shows');
db.shows.insertMany([
    {name:'Big Bang Theory'},
    {name:'Young Sheldon'}
])

// To have a many to many relationship, we need to create a collection that link the collections
db.createCollection('actors_shows');

// actorID: ObjectId('6852c0e59d7be0c04f50eb7b'), ObjectId('6852c0e59d7be0c04f50eb7c')
// showId: ObjectId('6852c0f79d7be0c04f50eb7d'), ObjectId('6852c0f79d7be0c04f50eb7e')

db.actors_shows.insertMany([
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7b'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7d')
    },
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7b'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7e')
    },
    {
        actorID: ObjectId('6852c0e59d7be0c04f50eb7c'),
        showId: ObjectId('6852c0f79d7be0c04f50eb7d')
    }
])

// This is a many-to-many relationship where actors can be in multiple shows and shows can have multiple actors.
// To fetch the data, we can use the $lookup operator to join the actors and shows


// Fetch data
db.actors_shows.aggregate(
    {
        $lookup:{
            from: 'actors',
            localField: 'actorID',
            foreignField: '_id',
            as: 'actorInfo'
        }
    },
    {
        $lookup:{
            from: 'shows',
            localField: 'showId',
            foreignField: '_id',
            as: 'showInfo'
        }
    }
)