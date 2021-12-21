import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head'

function MeetupDetails(props) {
  return (
    <Fragment>
    <Head>   
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} /> 
      </Head>
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    /> //props.meetupData because we have that meetupData prop. So first we can drill into meetupData and then access to image,title,address and description
  </Fragment>
  );
}

export async function getStaticPaths() {
  //getStaticPaths() is another important function which you need in dynamic pages to tell NextJS for which dynamic parameter values this page should be pre-generated.
  const client = await MongoClient.connect(
    'mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray(); //find give access to all the meetups...... Here we are interested in only Ids, and therefore we can tweak find and pass empty object as first argument, here we also use filter criteria to filter certain values, but here we need to find all ids, so leave as an empty object that means give me all the objects and have no filter criteria,,and in the second argument,where we can define which fields should be extracted for every document. By default, all the fields should be return, but we can only interest is Id so here we can give the id. We only fetching the ids here, We fetch the document objects, but each will contain the ID,nothing else
  client.close();

  return {
    fallback: false, //fallback key tells NextJS whether your paths array contains all supported parameter values or just some of them. If we set fallback set to false, you say that your paths contains all supported meetupId values. That means if user enters anything that not supported here for example meetupId:m3 , so it shows an error of 404 . If we set a fallback to true, NextJs try to generate a page for this meetupId(m3) dynamically on the server for incoming request.It allows to pre-generate some of your pages for specific meetupId values and then pre-generate the missing ones dynamically when requests for them are coming in. Here, we initialized to false, because to indicate that I defined all supported paths here.
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })), //Here we map all the meetups to access an every meetup item which is a document with an Id into an object because paths should an array of objects

    // [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],
  };
} //its only used in getStaticPropsand used when the page is dynamic.

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId; // getStaticProps() have a context which have a params key and meetupId is an identifier of having a page with that folder name

  const client = await MongoClient.connect(
    'mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  }); //findOne() finds one single document and pass an object where we define how to filter. and here we can add _id and pass meetupId so this finds a single meetup.....auto-generated Ids have strings by Default in mongo,,To ensure that we can correctly look for a specific id from database, we need to convert it from String to such an ObjectId thing,

  client.close(); //here we close the connection once we are done from fetching data

  return {
    props: {
      meetupData: {
        //here we could chnge id to String so again we return an object to convert an id to string otherwise we get an error.
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
