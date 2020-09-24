import React, { Fragment, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Portal from 'components/Portal';
import Waves from 'components/Waves';

import { DialogStyled } from './Dialog.styles';

const {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogWrapper,
} = DialogStyled;

const Dialog = ({
  children,
  onCloseHandler,
  isVisible,
  renderComponent,
  title,
}) => {
  const dialogRef = useRef(null);

  const handleKeyUp = useCallback((e) => {
    /* istanbul ignore else */
    if (e.keyCode === 27) {
      onCloseHandler();
    }
  }, [onCloseHandler]);

  useEffect(() => {
    /* istanbul ignore else */
    if (isVisible) {
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [onCloseHandler, handleKeyUp, isVisible]);

  useEffect(() => {
    if (isVisible) {
      disableBodyScroll(dialogRef);
    }

    return () => {
      enableBodyScroll(dialogRef);
    };
  }, [isVisible]);

  return (
    <Fragment>
      {isVisible && (
        <Portal id="dialog">
          <DialogWrapper
            data-testid="dialog"
            ref={dialogRef}
            role="dialog"
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>

              <DialogClose data-testid="dialog-close" onClick={onCloseHandler} />
            </DialogHeader>
            <Waves color="#3388FF" />

            <DialogContent>
              {children}
            </DialogContent>
          </DialogWrapper>
        </Portal>
      )}

      {isVisible && (<DialogOverlay onClick={onCloseHandler} />)}

      {renderComponent && renderComponent}
    </Fragment>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  renderComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Dialog;
