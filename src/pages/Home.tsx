import {Link} from 'react-router-dom';
import img from '../../call.jpeg'
import '../styles/index.scss'

const Home = () => {
    const str = 'this is home';

    return (
        <div>
            <img src={img} alt=""/>
            <h1>{str}</h1>
            <Link to="/">Home</Link>
            <Link to="/main">Main</Link>
        </div>
    );
};

export default Home;
