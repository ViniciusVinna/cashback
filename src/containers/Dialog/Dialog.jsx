import React, { Fragment, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from 'components/Portal';
import Waves from 'components/Waves';

import { DialogStyled } from './Dialog.styles';

const {
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogWrapper,
} = DialogStyled;

const Dialog = ({
  children,
  onCloseHandler,
  isVisible,
  onConfirmHandler,
  renderComponent,
  title,
}) => {
  const handleConfirm = () => {
    /* istanbul ignore else */
    if (onConfirmHandler) {
      onConfirmHandler();
    }

    onCloseHandler();
  };

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

  return (
    <Fragment>
      {isVisible && (
        <Portal id="dialog">
          <DialogWrapper data-testid="dialog" role="dialog">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>

              <DialogClose data-testid="dialog-close" onClick={onCloseHandler} />
            </DialogHeader>
            <Waves color="#3388FF" />

            <DialogContent>
              {children}
            </DialogContent>
          </DialogWrapper>

          <DialogOverlay onClick={onCloseHandler} />
        </Portal>
      )}

      {renderComponent && renderComponent}
    </Fragment>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onCloseHandler: PropTypes.func.isRequired,
  onConfirmHandler: PropTypes.func,
  renderComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
  onConfirmHandler: () => {},
};

export default Dialog;
