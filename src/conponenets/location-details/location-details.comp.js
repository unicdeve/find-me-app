import React from 'react';

import { StyledLocation, FindMeButton } from './location.details.styled';

const LocationDetails = ({ text, findMe, lng, lat }) => (
  <StyledLocation>
    <p className='long'>Long: {lng}</p>
    <p className='lat'>Lat: {lat}</p>
    <FindMeButton onClick={findMe}>find me</FindMeButton>
  </StyledLocation>
);

export default LocationDetails;
