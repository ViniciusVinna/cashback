import React from 'react';
import PropTypes from 'prop-types';
import ReactVivus from 'react-vivus';

import defaultImage from 'assets/brands/boticario-light.svg';

import { LoadingStyled } from './Loading.styles';

const { LoadingWrapper } = LoadingStyled;

const Loading = ({ isLoading }) => {
  const handleAnimation = (myVivus) => {
    myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
  };

  return (
    <LoadingWrapper isLoading={isLoading} data-testid="Loading">
      <ReactVivus
        id="loading"
        option={{
          file: defaultImage,
          type: 'scenario',
          animTimingFunction: 'EASE_OUT_BOUNCE',
          duration: 50,
        }}
        style={{ height: 'auto', width: '100%' }}
        callback={handleAnimation}
      />
    </LoadingWrapper>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
