import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import {TransactionTable, HeadTable, HeadTableData} from './Transactions.styled';

export default function TransactionHistory({ items }) {
  return (
      <TransactionTable className="transaction-history">
  <HeadTable>
    <tr>
      <HeadTableData>Type</HeadTableData>
      <HeadTableData>Amount</HeadTableData>
      <HeadTableData>Currency</HeadTableData>
    </tr>
  </HeadTable>
          <tbody>
            {items.map(item => (
                  <TransactionItem key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                  />
            ))}
      </tbody>
      </TransactionTable>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}