//NextJs makes easy to make an API together with React front-end app in the same project and its also key feature called API routes. API routes a re special routes,special pages which dont return HTML code but accepting incoming HTTP requests, also PUT, POST, PATCH, Delete request,,Api routes allows you to build your own Api end points as part of NExt project. For that, it has a special folder named 'api' in pages folder
//It defines functions which contains server-side code because API routes only run on Server and not on user. And those functions will triggered when the request is sent to this route.

// /api/new-meetup
//POST /api/new-meetup

import { MongoClient } from 'mongodb';

async function handler(req, res) {
  //This will recieve request and response. Req object contains data about incoming requests and response object will be needed for sending back a response.
  if (req.method === 'POST') {
    const data = req.body; //body is another built-in field which contains body of incoming requests.

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
    );
    const db = client.db(); //db method which we get hold of that database to which we are connecting here

    const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

    const result = await meetupsCollection.insertOne(data); //It is one of the built-in query commands for inserting one new document into this collection and document is an object in MongoDb and here data have an object having title, image, address, description so this have full data into our database
    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup Inserted' }); //status method which we call on response to set HTTP status code of the response which will be returned and 201 status code to indicate that something was inserted successfully and then we call json() to add json data will be added to outgoing response
  }
}
export default handler;
