import { CASHBACK_STATUS } from 'constants/index';

import { getDate } from 'modules/date';
import { formatCurrency } from 'modules/formatters';

export const detailsParser = (details) => ({
  code: details.code,
  value: formatCurrency(details.value),
  date: getDate(details.date),
  status: CASHBACK_STATUS[details['status']],
  percentage: details.percentage,
  cashback: formatCurrency(details.cashback),
});
