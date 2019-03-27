import React from 'react';

const Card = ({ username, city, id }) => {
  return (
    <div className='tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='kittens' src={`https://robohash.org/${id}?set=set4`} width='300px' height='300px' />
      <div>
        <h2>{username}</h2>
        <p>{city}</p>
      </div>
    </div>
  );
}

export default Card;