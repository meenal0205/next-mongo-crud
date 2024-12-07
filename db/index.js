import { MongoClient } from 'mongodb'

let client;

try {
    if (!process.env.MONGO_URI) {
        throw new Error('MognoDB URI is required')
    }

    client = new MongoClient(process.env.MONGO_URI);
    client.connect();
} catch (error) {
    console.log(error);

}

export default client;