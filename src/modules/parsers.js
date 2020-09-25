import { CASHBACK_STATUS } from 'constants/index';

import { getDate, formatCurrency } from 'modules';

export const detailsParser = (details) => ({
  code: details.code,
  value: formatCurrency(details.value),
  date: getDate(details.date),
  status: CASHBACK_STATUS[details['status']],
  percentage: details.percentage,
  cashback: details.cashback,
});
