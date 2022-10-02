import { Link } from 'react-router-dom'
import style from './home.module.scss'

const Home = () => {
  const str = 'this is home'

  return (
    <div className={style.div}>
      <h1>{str}</h1>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
    </div>
  );
};

export default Home
