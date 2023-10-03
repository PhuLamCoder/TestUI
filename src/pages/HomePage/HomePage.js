import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import Button from '~/components/Button';
import FoodItem from '~/components/FoodItem';

const cx = classNames.bind(styles);

const RECIPES_ITEM = [
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Special Salad',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
    {
        image: 'https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=6YgYbtr%2bOavtoQ&pid=ImgRaw&r=0',
        name: 'Hamburgurs',
        time: 20,
        stars: 4,
        reviews: 10,
    },
];

function HomePage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category')}>
                <ul className={cx('category-list')}>
                    <li className={cx('category-item')}>
                        <Button small rounded center dark>
                            Pizza
                        </Button>
                    </li>
                    <li className={cx('category-item')}>
                        <Button small inactive rounded center>
                            Dessert
                        </Button>
                    </li>
                    <li className={cx('category-item')}>
                        <Button small inactive rounded center>
                            Noodle
                        </Button>
                    </li>
                    <li className={cx('category-item')}>
                        <Button small inactive rounded center>
                            Cocktails
                        </Button>
                    </li>
                    <li className={cx('category-item')}>
                        <Button small inactive rounded center>
                            Salad
                        </Button>
                    </li>
                </ul>
            </div>
            <div className="grid">
                <div className={`row`}>
                    {RECIPES_ITEM.map((recipe, index) => (
                        <div key={index} className={`col l-3 m-4 c-6`}>
                            <FoodItem {...recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
