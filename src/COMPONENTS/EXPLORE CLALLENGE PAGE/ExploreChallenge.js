import React from 'react';
import ExploreSearch from './ExploreSearch';
import ExploreChellangesCards from './ExploreChellangesCards';

const ExploreChallenge = () => {
  return (
    <div className='explore-challenge-parent'>
      <ExploreSearch></ExploreSearch>
      <ExploreChellangesCards></ExploreChellangesCards>
    </div>
  );
};

export default ExploreChallenge;