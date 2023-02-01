import PropTypes from 'prop-types';
import css from './TransictionList.module.css';

export const TransactionHistory = ({ items }) => (
    <table>
        <thead>
            <tr className={css.valueTable}>
                <th className={css.columnTable}>Type</th>
                <th className={css.columnTable}>Amount</th>
                <th className={css.columnTable}>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <tr key={item.id} className={css.valueTable}>
                    <td className={css.transictionValue}>{item.type}</td>
                    <td className={css.transictionValue}>{item.amount}</td>
                    <td className={css.transictionValue}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};