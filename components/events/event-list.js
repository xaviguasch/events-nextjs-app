import EventItem from './event-item'

const EventList = (props) => {
  const { items } = props

  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} />
      ))}
    </ul>
  )
}

export default EventList
