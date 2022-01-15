import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) =>{
    const newTours = tours.filter(tour=> tour.id !== id);
    setTours(newTours);
  }

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://course-api.com/react-tours-project');
      const tours = await response.json();
      setLoading(false)
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log("Not fetching data!");
    }

  }

  useEffect(()=>{
    fetchData();
  }, [])


  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <main>
      <Tours tours ={tours} deleteTour={deleteTour}/>
    </main>
  );
}

export default App