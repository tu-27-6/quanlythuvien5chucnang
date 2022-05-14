const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb+srv://admin:admin123@cluster0.8izzv.mongodb.net/quanly?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected');
    }catch(e){
        console.log(e);
    }
}

module.exports = connectDB