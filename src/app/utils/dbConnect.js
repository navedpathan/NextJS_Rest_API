const mongoose = require('mongoose')

export default async function dbConnect(){
    await mongoose.connect("mongodb+srv://yamuno36:4Oqd0Ktucr2BLXCO@clusterprod.evwds6o.mongodb.net/nextProducts?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB connected"))
}