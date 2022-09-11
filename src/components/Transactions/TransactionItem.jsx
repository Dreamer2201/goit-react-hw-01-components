import PropTypes from 'prop-types';
import { TableRow, TableData } from './Transactions.styled';
export default function TransactionItem(props) {
    const { type, amount, currency } = props;
    return (<TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>);
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}