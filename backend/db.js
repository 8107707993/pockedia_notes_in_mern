const mongoose = require('mongoose');

const mongoUrl = "mongodb://localhost:27017/pockediaBook?readPreference=primary&appname=MongoDB%20Compass%20Beta&ssl=false";


const connectToMongodb = () => {
    mongoose.connect(mongoUrl, ()=>{
        console.log("Connected to Mongo SuccessFuly");
    })
}

module.exports = connectToMongodb;