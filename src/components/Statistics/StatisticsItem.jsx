import PropTypes from 'prop-types';
import { StatsItem, TypeDocument, PerTypeDoc } from './Statistics.styled';

export default function StatisticsItem(props) {
    const { label, percentage } = props;
    return <StatsItem className="item" typedoc={label}>
      <TypeDocument className="label">{label}</TypeDocument>
      <PerTypeDoc className="percentage">{percentage}%</PerTypeDoc>
    </StatsItem>
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}