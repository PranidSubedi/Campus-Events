import EventCard from "../components/EventCard";
import TicketCounter from "../components/TicketCounter";
import {useEvents} from "../hooks/useEvents";

function Events() {
    const {events, loading, error} = useEvents();
    if (loading) return <p> Loading Events.</p>
    if (error) return <p> Error</p>
    if (events.length === 0) return <p> No Events.</p>
    
    return (
        <section>
            <h2>Events</h2>
            
            {
                events.map((event) => (

                    <div key={event.id}>
                        <EventCard title={event.title} location={event.location} price={event.price}/>
                        <TicketCounter/>
                    </div>

                ))
            }
        </section>
    );
}
export default Events;