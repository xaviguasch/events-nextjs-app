import { Fragment } from 'react'

import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

import { getEventById, getAllEvents } from '../../helpers/api-util'

const EventDetailPage = (props) => {
  const event = props.selectedEvent

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId
  const event = await getEventById(eventId)

  if (!event) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      selectedEvent: event,
    },
  }
}

export async function getStaticPaths() {
  const events = await getAllEvents()

  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export default EventDetailPage
