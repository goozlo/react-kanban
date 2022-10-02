import { Link } from 'react-router-dom'

const Main = () => {
  const str = 'this is main'

  return (
    <div>
      <h1>{str}</h1>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
    </div>
  );
};

export default Main
