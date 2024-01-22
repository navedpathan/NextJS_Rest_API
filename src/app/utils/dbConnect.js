const mongoose = require('mongoose')

export default async function dbConnect(){
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB connected"))
}