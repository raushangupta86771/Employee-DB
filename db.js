const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employeeDB?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB', err));
