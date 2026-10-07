interface EventCardProps {
    title: string,
    location : string,
    price: number
}

function EventCards ({title, location, price}: EventCardProps){
    return(
        <>
        <p>{title}</p>
        <p>{location}</p>
        <p>{price}</p>
        </>
    );
}

export default EventCards;
