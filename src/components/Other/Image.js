import './Image.css';
import mealsImage from '../../assets/meals.jpg';

const Image = () => {
    return <div className='main-image'>
        <img src={mealsImage} alt='my-im' />
    </div>
}

export default Image;