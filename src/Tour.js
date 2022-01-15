import React, { useState } from 'react';

const Tour = ({ id, image, name, price, info, deleteTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour" >
      <img src={image} alt=''></img>

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">{price}</div>
        </div>

        <p>{
        readMore? info: `${info.substring(0,200)}...`
        }<button onClick={()=>setReadMore(!readMore)}>{readMore? 'show less':'show more'}</button>
        </p>

        <button className='delete-btn ' onClick={()=> deleteTour(id)}>Not Interested</button>

      </footer>

    </article>);
};

export default Tour;
