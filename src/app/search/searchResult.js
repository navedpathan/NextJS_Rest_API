"use server"
import mongoose from "mongoose"
import Products from "../model/Products"

export default async function searchResult(str){
    await mongoose.connect("mongodb+srv://yamuno36:4Oqd0Ktucr2BLXCO@clusterprod.evwds6o.mongodb.net/nextProducts?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB-search connected"))

    let searchTerm = `${str}`

    const convertFirstLetter = (text) => {
        const convert = text.replace(/(^\w{1})|(\.\s*\w{1})/g, (match)=>match.toUpperCase())
        return convert
    }

    const searchTermFirst = convertFirstLetter(searchTerm)

    let results = await Products.find({
        $or: [
            {
                name: {$regex: searchTerm}
            },
            {
                name: {$regex: searchTermFirst}
            },
            {
                brand: {$regex: searchTerm}
            },
            {
                brand: {$regex: searchTermFirst}
            }
        ]
    })

    return results
}