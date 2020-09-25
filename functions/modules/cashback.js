const keymirror = require('./keymirror');

const RULES = {
  APPROVED: undefined,
  DISAPPROVED: undefined,
  VALIDATING: undefined,
};

const CASHBACK_STATUS = keymirror(RULES);

const getCashbackStatus = (value) => {
  if (value <= 50) {
    return CASHBACK_STATUS.DISAPPROVED;
  }
  else if (value > 50 && value <= 500) {
    return CASHBACK_STATUS.APPROVED;
  }
  return CASHBACK_STATUS.VALIDATING;
};

const getPercentageRule = (value, status) => {
  if (status === CASHBACK_STATUS.DISAPPROVED) {
    return 0;
  }
  else if (value > 50 && value <= 250) {
    return 0.03;
  }
  else if (value > 250 && value <= 500) {
    return 0.05;
  }
  return 0.08;
};

const getCashbackValue = (value, percentage) => value * percentage;

const getCashbackBalance = (purchases) => purchases.reduce((acc, { status, cashback }) => {
  if (status === CASHBACK_STATUS.APPROVED) {
    // eslint-disable-next-line no-param-reassign
    acc += +cashback;
  }
  return acc;
}, 0);

const getValidatingCashback = (purchases) => purchases.reduce((acc, { status, cashback }) => {
  if (status === CASHBACK_STATUS.VALIDATING) {
    // eslint-disable-next-line no-param-reassign
    acc += +cashback;
  }
  return acc;
}, 0);

const groupPurchasesByDate = (response) => response
  .slice()
  .sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  })
  .reduce((acc, purchase) => {
    if (!acc[purchase['date']]) {
      acc[purchase['date']] = [purchase];

      return acc;
    }

    acc[purchase['date']] = [...acc[purchase['date']], purchase];

    return acc;
  }, {});

module.exports = {
  RULES,
  getCashbackBalance,
  getCashbackStatus,
  getCashbackValue,
  getPercentageRule,
  getValidatingCashback,
  groupPurchasesByDate,
};
