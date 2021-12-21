//our-domain.com/
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

//metadata used when we deploy our Applications. In nextJs, there is special Head component so where we add data, description etc.
function HomePage(props) {
  return (
    <Fragment> 
      <Head>   
        <title>React Meetups</title>
        <meta name='description' content='Browse a huge list of highly active Meetups' /> 
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// } //it is an alternative to getStaticProps() and the difference to getServerSideProps() that this function will now not run during build process but instead always on the server after deployment
//its guaranteed to run for every request but it could be disadvantage because that means that you need to wait for your page to be generated on every incoming request.. You dont have access on Request and Response in getStaticProps(). If you have really a data that changes multiple times every second then therefore revalidate wont helpyou, so getServerSideProps() might be useful
export async function getStaticProps() {
  //   //fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://Huzaifa:huzaifa123@cluster0.bu6az.mongodb.net/meetups?retryWrites=true&w=majority' //we need to add username and passwrd but this code is not accessible for the clients and this will give us connected client eventually
  );
  const db = client.db(); //db method which we get hold of that database to which we are connecting here

  const meetupsCollection = db.collection('meetups'); //and then with database, we can get access to our meetupsCollection. Collection is a method having name of your choice.

  const meetups = await meetupsCollection.find().toArray(); //find method will find default all the documents in that collection and then ultimately we get our meetups here and toArray() method is to be precise to get an array of collections
  client.close(); //here we close the connection once we are done from fetching data

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })), //here are the meetups which we can fetch from mongodb
    }, //meetups is a key in return object and so use that identifier in MeetupList as a props.meetups and then how we can move the data fetching away from the client to server side
    revalidate: 1,
  }; // this property in getStaticProps() and when we add this property to the return object, we unlock a feature called incremental Static Generation. Revalidate needs a number and this number is the number of seconds, NEXTJS will wait until it regenerates this page for incoming request. It means this page is not just be generated during build process but also be generated every couple of seconds on the server, if there are requests for this page. So, if data can change in every 1 hour, so it changed to 3600 and if data changes in every one second so it should be initialized to 1. It ensures that this page could be updated after deployment
}
//if you need to add data fetching to a page component, you can do by exporting a special function from inside your page component file and its only work in page component files and not on regular components, but only work in component files inside the pages folder
// //it has to be called getStaticProps and NextJs first of all, call getStaticProps function before its called the component function and getStaticProps have a job to prepare props for this page and this props could contain the data this page needs and its allowed to be asynchronous which means it waits until your data is loaded
// //In getStaticProps(),you can execute any code, that would normally only run on a server becuase any code here will never end on a client side and never execute on client side
// //in page component function, recieves a props object and the object will be the object you set as a props here

export default HomePage;
