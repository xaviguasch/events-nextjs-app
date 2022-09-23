import { getFeaturedEvents } from '../dummy-data'

import EventList from '../components/events/event-list'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <h1>The home page</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
