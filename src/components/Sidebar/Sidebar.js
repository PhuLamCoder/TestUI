import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUtensils } from '@fortawesome/free-solid-svg-icons';

import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar({ className }) {
    return (
        <aside className={`${className} ${cx('wrapper')}`}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            {/* Tách user info ra để tiện thêm loader ra */}
            <div className={cx('user-info')}>
                <img className={cx('user-avatar')} src={images.avatar} alt="avatar" />
                <p className={cx('user-name')}>PrettyGirl</p>
            </div>
            <div className={cx('nav')}>
                <Button leftIcon={<FontAwesomeIcon icon={faUtensils} />} primary large>
                    Recipes
                </Button>
                <Button leftIcon={<FontAwesomeIcon icon={faHeart} />} inactive large mt>
                    Favourites
                </Button>
            </div>
            <img className={cx('bottom-img')} src={images.sidebarBottomImg} alt="cooking-img" />
        </aside>
    );
}

export default Sidebar;
