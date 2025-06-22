// One instructor can be linked to multiple devices 

// Step 1: Clean up any previous one-to-one mappings
db.instructors.updateMany({}, { $unset: { deviceID: 1 } });

// Step 2: Assign multiple device references to each instructor
db.instructors.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb73')
    },
    {
        $set: {
            deviceIDs: [
                ObjectId('6852b1d89d7be0c04f50eb77'),
                ObjectId('6852b1d89d7be0c04f50eb78')
            ]
        }
    }
);

db.instructors.updateOne(
    {
        _id: ObjectId('6852b1c29d7be0c04f50eb74')
    },
    {
        $set: {
            deviceIDs: [
                ObjectId('6852b1d89d7be0c04f50eb79'),
                ObjectId('6852b1d89d7be0c04f50eb7a')
            ]
        }
    }
);

// Use embedded documents when data is tightly bound to the parent and rarely changes.
// Use referencing when shared data (e.g., device catalog, user profiles) is frequently updated or reused.

// Step 3: Fetch instructors and their linked devices via $lookup (1:N reference)
db.instructors.aggregate([
    {
        $lookup: {
            from: 'devices',
            localField: 'deviceIDs',
            foreignField: '_id',
            as: 'linkedDevices'
        }
    }
]);
