import React, { Fragment, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useDispatch, useSelector } from 'react-redux';

import { toggleDialog } from 'actions';

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
  renderComponent,
  title,
}) => {
  const { isDialogOpen, isScrollLocked } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const dialogRef = useRef(null);

  const handleClose = useCallback(() => {
    dispatch(toggleDialog(false));
  }, [dispatch]);

  const handleKeyUp = useCallback((e) => {
    /* istanbul ignore else */
    if (e.keyCode === 27) {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    /* istanbul ignore else */
    if (isDialogOpen) {
      document.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp, isDialogOpen]);

  useEffect(() => {
    if (isScrollLocked) {
      disableBodyScroll(dialogRef);
    }

    return () => {
      enableBodyScroll(dialogRef);
    };
  }, [isScrollLocked]);

  return (
    <Fragment>
      {isDialogOpen && (
        <Portal id="dialog">
          <DialogWrapper
            data-testid="dialog"
            ref={dialogRef}
            role="dialog"
          >
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>

              <DialogClose data-testid="dialog-close" onClick={handleClose} />
            </DialogHeader>
            <Waves color="#3388FF" />

            <DialogContent>
              {children}
            </DialogContent>
          </DialogWrapper>
        </Portal>
      )}

      {isDialogOpen && (<DialogOverlay onClick={handleClose} />)}

      {renderComponent && renderComponent}
    </Fragment>
  );
};

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  renderComponent: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Dialog;
