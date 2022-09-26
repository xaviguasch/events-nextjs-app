import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, // If a new requests comes 30min after the last time
    // the page was generated, then it will be generated again
  }
}

export default HomePage
