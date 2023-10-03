import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('search')}>
                    <input placeholder="Search recipes..." />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div>
                    <Button primary center>
                        Sign Up
                    </Button>
                    <Button primary center ml>
                        Sign In
                    </Button>
                </div>
            </div>
            <div className={cx('title')}>
                <h1>Learn, Cook & Eat your food</h1>
            </div>
        </header>
    );
}

export default Header;
