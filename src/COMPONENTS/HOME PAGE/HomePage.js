import React from 'react';
import BannerComp from '../BANNER/BannerComp';
import ExploreChallenge from '../EXPLORE CLALLENGE PAGE/ExploreChallenge';
import WhyParticipate from '../WhyParticipatePage.js/WhyParticipate';

const HomePage = () => {
  return (
    <div>
      <BannerComp></BannerComp>
      <WhyParticipate></WhyParticipate>
      <ExploreChallenge></ExploreChallenge>
    </div>
  );
};

export default HomePage;