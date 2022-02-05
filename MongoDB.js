const { connect } = require('mongoose')
connect(
        process.env.MongoUrl, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    .then(db => console.log(
        'Conectado a MongoDB ✅'
    ))
    .catch(err => console.log(
        'No conectado a MongoDB ❌'
    ))