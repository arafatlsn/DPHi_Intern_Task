import React from 'react';
import BannerUpSide from './BannerUpSide';
import './BannerComp.css'
import BannerDownSide from './BannerDownSide';

const BannerComp = () => {
  return (
    <div className='banner-parent'>
      <BannerUpSide></BannerUpSide>
      <BannerDownSide></BannerDownSide>
    </div>
  );
};

export default BannerComp;