import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ items }) {
    return (
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                  <TransactionItem
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                  />
              </tr>
            ))}
          </tbody>
    );
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}