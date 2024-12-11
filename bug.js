```javascript
// Incorrect use of $in operator with an array of ObjectId

db.collection.find({ _id: { $in: ["651a2f23430a", "651a2f25430b"] }})
```