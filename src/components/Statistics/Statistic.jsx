import PropTypes, { arrayOf } from 'prop-types';
import css from './StatisticStyle.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistic = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {data.map(data => (
          <li
            key={data.id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>{' '}
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  data: arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
