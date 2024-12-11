```javascript
// Correct use of $in operator with an array of ObjectId
const { ObjectId } = require('mongodb');

const objectIds = [ObjectId("651a2f23430a"), ObjectId("651a2f25430b")]

db.collection.find({ _id: { $in: objectIds }})
```