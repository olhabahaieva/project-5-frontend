import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import { StatisticsChart } from 'components/User/UserStatistics/UserStatistics';
import { CalendarDropdown } from 'components/User/CalendarPopup/CalendarPopup';
import PeriodPaginator from 'components/User/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from 'components/User/CalendarToolbar/PeriodTypeSelect/PeriodTypeSelect';
import css from './StatisticPage.module.css';
import moment from 'moment';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState(moment());

  useEffect(() => {
    dispatch(currentPage('Statistics'));
  }, [dispatch]);

  const leftClick = () => {
    setDay(moment(day).subtract(1, 'day'));
  };

  const rightClick = () => {
    setDay(moment(day).add(1, 'day'));
  };

  return (
    <div>
      <section className={css.calendarToolbar}>
        <div className={css.boxToolbar}>
          <CalendarDropdown day={day} setDay={setDay}/>
          <PeriodPaginator leftClick={leftClick} rightClick={rightClick} />
        </div>
        <PeriodTypeSelect />
      </section>
      <StatisticsChart />
    </div>
  );
};

export default StatisticsPage;
