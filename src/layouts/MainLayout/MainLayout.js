import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';
import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header/Header';

const cx = classNames.bind(styles);

function MainLayout() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('main')}>
                <div className={cx('inner')}>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
