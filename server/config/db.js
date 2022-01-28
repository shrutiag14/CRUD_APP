const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        const con=await mongoose.connect('mongodb+srv://shruti:shruti123@cluster0.bxwad.mongodb.net/users?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB