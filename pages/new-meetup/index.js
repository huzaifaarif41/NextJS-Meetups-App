//our-domain.com/new-meetup
//you need sub folder approach if you need nested routes but here, there is our choice because here, we will not need nested routes

import { useRouter } from 'next/router';
import Head from 'next/head'
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData), //the data attached to this request
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    router.push('/'); //it will navigate automatically to homePage after we add a newMeetup
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing opportunities'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetupPage;
