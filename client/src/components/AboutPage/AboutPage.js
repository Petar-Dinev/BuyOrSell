import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        vestibulum nisi eu orci finibus, vitae pulvinar urna congue. Sed
        laoreet semper risus, sit amet consectetur magna euismod sit amet.
      </p>
    </div>
  );
};

export default AboutPage;
