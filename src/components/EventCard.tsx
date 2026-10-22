import { Link } from 'react-router'
import type { CampusEvent } from '../data/events'
import { Card } from './ui/Card'

type Props = { event: CampusEvent }

export function EventCard({ event }: Props) {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>
        {event.date} · {event.place}
      </p>
      <span className="tag">{event.seats} seats</span>
      <Link to={`/events/${event.id}`}>Details</Link>
    </Card>
  )
}