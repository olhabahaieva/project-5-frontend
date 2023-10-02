import { useSelector } from 'react-redux';
import css from './Header.module.css';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Header = () => {
  const namePage = useSelector(state => state.currentPage.namePage);

  return (
    <header>
      <button
        type="button"
        className={css.burgerButton}
        aria-label="open close burger menu"
      >
        <RxHamburgerMenu className={css.burgerIcon} />
      </button>
      <section>{<h1 className={css.title}>{namePage}</h1>}</section>
    </header>
  );
};
