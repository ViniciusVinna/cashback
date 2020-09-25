/**
 * @module Constants
 * @desc Constants
 */
export * from './app';
export * from './purchases';
export * from './user';

export const STATUS = {
  ERROR: 'error',
  IDLE: 'idle',
  READY: 'ready',
  RUNNING: 'running',
  SUCCESS: 'success',
  UPDATE: 'update',
};

export const CASHBACK_STATUS = {
  APPROVED: 'aprovado',
  DISAPPROVED: 'reprovado',
  VALIDATING: 'em validação',
};
