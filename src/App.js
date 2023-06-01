import { useEffect, useState } from 'react';
import './App.css';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [ tourPlaces, setTourPlaces ] = useState([]);
  const [ showInfo, setShowInfo ] = useState(false);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTourPlaces(tours);
    }
    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();  
   }, [])

   const deleteTour = (id) => {
      const newTourPlaces = tourPlaces.filter((tour) => tour.id !== id );
      setTourPlaces(newTourPlaces);
   }

   const toggleShow = () => {
    setShowInfo(!showInfo);
   }

  return (
    <div>
      <h1>Our Tours</h1>
      <ul>
        {
          tourPlaces.map( tour => {
            return (
              <li className='tour-card' key={tour.id}>
                <img src={tour.image} alt={ tour.name } />
                <span className='price'><strong>Price:</strong> { tour.price }/-</span>
                <h3>{tour.name}</h3>
                <p>
                  { showInfo ? tour.info : `${tour.info.substring(0, 150)} ...`}  
                  <button className='button-more' onClick={ toggleShow }>
                    { showInfo ? "Show Less" : "Show More" } 
                  </button>
                </p>
                <button className='not-interested' onClick={ () => deleteTour(tour.id) }>Not Interested</button>
              </li>
            )
          })
        }
      </ul>
      <button className='btn-reload' onClick={ fetchTours }> Reload </button>
    </div>
  );
}

export default App;
