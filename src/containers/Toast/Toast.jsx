import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { hideAlert } from 'actions';

import {
  AnimationBounce,
  Container,
  Progress,
} from './Toast.styled';

const WrappedToastContainer = ({ ...props }) => {
  const alerts = useSelector(state => state.app.alerts);
  const dispatch = useDispatch();
  const handleClose = useCallback(id => dispatch(hideAlert(id)), [dispatch]);

  useEffect(() => {
    /* istanbul ignore else */
    if (alerts.length > 0) {
      alerts.map(alert => toast[alert.status](
        alert.message, {
          onClose: () => handleClose(alert.id),
          position: toast.POSITION[alert.position],
          autoClose: alert.timeout || 3000,
        })
      );
    }
  }, [alerts, handleClose]);

  return (
    <Container data-testid="toast">
      <Progress>
        <AnimationBounce>
          <ToastContainer
            limit={2}
            closeOnClick
            {...props}
          />
        </AnimationBounce>
      </Progress>
    </Container>
  );
};

export default WrappedToastContainer;
