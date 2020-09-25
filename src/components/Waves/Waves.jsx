import React from 'react';
import PropTypes from 'prop-types';

const Waves = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
    <path fill={color} fillOpacity="1" d="M0,32L60,58.7C120,85,240,139,360,144C480,149,600,107,720,80C840,53,960,43,1080,74.7C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
  </svg>
);

// preserveAspectRatio="none" style="height: 100%; width: 100%;"

Waves.propTypes = {
  color: PropTypes.string,
};

Waves.defaultProps = {
  color: '#52b947',
};

export default Waves;
