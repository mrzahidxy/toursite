import React from "react";
import Tour from "./Tour.js"

const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className="title">
        <h2 >Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(
          (tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour}> </Tour>
          }
        )}
      </div>



    </section>
  );
}

export default Tours;
