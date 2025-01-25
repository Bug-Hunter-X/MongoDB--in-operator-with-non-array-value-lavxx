```javascript
// Correct use of $in operator with an array value
db.collection.find({ field: { $in: ['value1', 'value2'] } });

//Alternative solution if you are trying to check for a single value:
// db.collection.find({ field: 'value' });
```