const { MongoClient } = require('mongodb');

async function main() {
    const uri = ""
    // insert uri there 

    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }

}

main().catch(console.error);

await client.connect();
}