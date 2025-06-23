
db.createCollection('instructors');
db.createCollection('devices');

// Inserting documents into the instructors collection
db.instructors.insertMany([
    { Name: 'Amit', subject: 'Frontend' },
    { Name: 'Riya', subject: 'Java Programming' },
    { Name: 'Neha', subject: 'C++' },
    { Name: 'sarvesh', subject: 'Machine Learning' }
]);

db.devices.insertMany([
    { title: 'Asus', specs: ['Touchscreen', 'Ryzen 5'], cost: 75 },
    { title: 'HP', specs: ['Full HD', 'i5'], cost: 55 },
    { title: 'Dell', specs: ['NVMe SSD', 'i7'], cost: 65 },
    { title: 'Acer', specs: ['Matte Display', 'i3'], cost: 40 }
]);

db.instructors.updateOne(
    { _id: ObjectId('6852aab19d7be0c04f50eb6b') },
    {
        $set: {
            device: { title: 'Asus', specs: ['Touchscreen', 'Ryzen 5'], cost: 75 }
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852aab19d7be0c04f50eb6c') },
    {
        $set: {
            device: { title: 'HP', specs: ['Full HD', 'i5'], cost: 55 }
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852aab19d7be0c04f50eb6d') },
    {
        $set: {
            device: { title: 'Dell', specs: ['NVMe SSD', 'i7'], cost: 65 }
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852aab19d7be0c04f50eb6e') },
    {
        $set: {
            device: { title: 'Acer', specs: ['Matte Display', 'i3'], cost: 40 }
        }
    }
);

// Accessing nested embedded object fields
db.instructors.findOne({ Name: 'Amit' }).device.title;


// RELATIONSHIP MODEL: referencing another collection by ID (foreign key style)
db.instructors.updateOne(
    { _id: ObjectId('6852b1c29d7be0c04f50eb73') },
    {
        $set: {
            deviceRef: ObjectId('6852b1d89d7be0c04f50eb77')
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852b1c29d7be0c04f50eb74') },
    {
        $set: {
            deviceRef: ObjectId('6852b1d89d7be0c04f50eb78')
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852b1c29d7be0c04f50eb75') },
    {
        $set: {
            deviceRef: ObjectId('6852b1d89d7be0c04f50eb79')
        }
    }
);

db.instructors.updateOne(
    { _id: ObjectId('6852b1c29d7be0c04f50eb76') },
    {
        $set: {
            deviceRef: ObjectId('6852b1d89d7be0c04f50eb7a')
        }
    }
);

// Joining instructors with devices using $lookup for referenced documents
db.instructors.aggregate([
    {
        $lookup: {
            from: 'devices',
            localField: 'deviceRef',
            foreignField: '_id',
            as: 'deviceDetails'
        }
    }
]);
