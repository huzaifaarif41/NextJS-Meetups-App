import Card from '../ui/Card';
import { useRouter } from 'next/router';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id); //useRouter dont have just one query property which gives the access to all that data that might be part of that URL for a dynamic page but it also have methods for navigating programatically. Here we use push method. This pushes a new page onto the stack of pages and its equivalent of using the Link component
  } //meetupid is something we get via props because when we rendered meetupList, we passed the id prop into MeetupItem and therefore inside of meetupItem,we can now construct dynamic path by using props.id, so this will lead us to slash(/) and then specific Id of the meetupItem
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
