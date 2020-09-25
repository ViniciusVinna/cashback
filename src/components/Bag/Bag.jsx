import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'assets/animations/bag.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Bag = () => (<Lottie options={defaultOptions} />);

export default Bag;
