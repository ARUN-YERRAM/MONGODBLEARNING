// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE
// show - IDBOpenDBRequest

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/NYAAYSAHAAYAK')

    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

    db.people.insertOne({
        name: { first: 'Alan', last: 'Turing' },
        birth: new Date('Jun 23, 1912'),
        death: new Date('Jun 07, 1954'),
        contribs: [ 'Turing machine', 'Turing test' ],
        views : Long(1250000)
    })