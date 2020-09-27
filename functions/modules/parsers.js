/**
 * Parser functions.
 * @module Parsers
 */

const {
  getCashbackBalance,
  getCashbackStatus,
  getCashbackValue,
  getPercentageRule,
  getValidatingCashback,
  groupPurchasesByDate,
} = require('./cashback');
const { clearNumber } = require('./helpers');

const parseUserResponse = (data, { token = '' }) => {
  const user = data[0] || {};

  return JSON.stringify({
    id: user.id,
    accessToken: token || '',
    cpf: user.cpf || '',
    email: user.email || '',
    firstname: user.username.split(' ')[0] || '',
    username: user.username || '',
  });
};

const parseCreatePurchase = (body) => {
  const purchase = JSON.parse(body);
  const purchaseValue = parseInt(purchase.value, 10) / 100;
  const status = getCashbackStatus(purchaseValue);
  const percentage = getPercentageRule(purchaseValue, status);
  const cashback = getCashbackValue(purchaseValue, percentage);

  return JSON.stringify({
    value: purchase.value,
    code: purchase.code,
    date: new Date(purchase.date),
    cashback: clearNumber(cashback * 100),
    percentage: `${(percentage * 100).toFixed(2)}%`,
    status,
  });
};

// const sortKeysByDate = (obj) => {
//   const keys = Object.keys(groupedByDate);
// }

const parsePurchasesResponse = (response) => {
  if (response.length > 0) {
    const purchases = response;
    const balance = getCashbackBalance(purchases);
    const validation = getValidatingCashback(purchases);
    const groupedByDate = groupPurchasesByDate(purchases);

    return JSON.stringify({
      balance,
      validation,
      data: groupedByDate,
    });
  }

  return JSON.stringify({
    balance: 0,
    validation: 0,
    data: [],
  });
};

module.exports = {
  parseCreatePurchase,
  parsePurchasesResponse,
  parseUserResponse,
};
