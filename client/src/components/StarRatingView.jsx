import React from 'react';
import PropTypes from 'prop-types';

function StarRatingView({ averageRating }) {

  // Only to test partial stars

  const randomNum = Math.random() * 3;
  let result;

  if (randomNum < 1) {
    result = 0.25;
  } else if (randomNum < 2) {
    result = 0.5;
  } else {
    result = 0.75;
  }

  averageRating += result;

  //

  const filledStars = Math.floor(averageRating);
  const filledQuarters = Math.floor((averageRating - filledStars) * 4);

  return (
    <div className="flex items-center" style={{ maxWidth: '100%' }}>
      {Array.from({ length: 5 }, (_, index) => {
        let starType = 'star';
        if (index < filledStars) {
          starType = 'starFull';
        } else if (index === filledStars && filledQuarters > 0) {
          starType = `star${filledQuarters}`;
        }
        return (
          <span key={index} className={`${starType} fa fa-star`} style={{ fontSize: '100%' }} />
        );
      })}
      <span className="text-gray-400 ml-1">{averageRating.toFixed(1)}</span>
    </div>
  );
}

StarRatingView.propTypes = {
  averageRating: PropTypes.number.isRequired,
};

export default StarRatingView;