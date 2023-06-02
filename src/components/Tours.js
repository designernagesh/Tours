import Tour from "./Tour";

const Tours = ({tourPlaces, setTourPlaces}) => {
    const deleteTour = (id) => {
        const newTourPlaces = tourPlaces.filter((tour) => tour.id !== id );
        setTourPlaces(newTourPlaces);
    }
    
    return (
        tourPlaces.map( tour => <Tour tour={tour} deleteTour={deleteTour} /> )
    )
}

export default Tours;