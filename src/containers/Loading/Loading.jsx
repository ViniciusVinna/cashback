import React, { useEffect, useRef } from 'react';
import ReactVivus from 'react-vivus';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useSelector } from 'react-redux';

import defaultImage from 'assets/brands/boticario-light.svg';

import { LoadingStyled } from './Loading.styles';

const { LoadingWrapper, Status } = LoadingStyled;

const Loading = () => {
  const { isLoading, isScrollLocked, statusMessage } = useSelector(state => state.app);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (isScrollLocked) {
      disableBodyScroll(loadingRef);
    }

    return () => {
      enableBodyScroll(loadingRef);
    };
  }, [isScrollLocked]);

  const handleAnimation = (myVivus) => {
    myVivus.play(myVivus.getStatus() === 'end' ? -1 : 1);
  };

  /* instanbul ignore else */
  if (!isLoading) {
    return null;
  }

  return (
    <LoadingWrapper
      ref={loadingRef}
      data-testid="Loading"
    >
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

      {statusMessage && (
        <Status>{statusMessage}</Status>
      )}
    </LoadingWrapper>
  );
};

export default Loading;
