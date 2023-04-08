import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1><b>Welcome to our site!</b></h1>
      <h3><b>Here u can buy or sell your car.</b></h3>
      <h4><b>To publish your Ad u need to register first.</b></h4>
      <p><b>If you'd like to access more features, please <Link to="/register">register</Link>.</b></p>
    </div>
  );
};

export default Home;

