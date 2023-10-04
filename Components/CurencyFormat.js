import { IntlProvider, FormattedNumber } from 'react-intl';

const CurrencyFormat = ({ amount }) => {
  return (
    <IntlProvider locale="vi">
    <FormattedNumber
      value={amount}
      style="currency"
      currency="VND"
      minimumFractionDigits={0}
      maximumFractionDigits={0}
    />
    </IntlProvider>
    
  );
};

export default CurrencyFormat;