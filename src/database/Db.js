import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb+srv://dojo:Paxy1234@africanalace.w5cdn.mongodb.net/");
        console.log("MongoDb is Conneted");
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb;