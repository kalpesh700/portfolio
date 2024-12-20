import './main2.css';
import github from './images/github.png';
import linked_in from './images/linked_in.png';
import leetcodes from './images/leetcodes.png';
import rightimg from './images/11.png';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      className="Main"
      id="mainy"
    >
      <div className="main_left">
        <h3 className="it_is_me">Hey! It's Me</h3>
        <h2 className="names">Kalpesh Koli</h2>
        <p className="i_am_a">I am a&nbsp;Web Developer</p>

        <div className="flex1">
          <p className="follow_me">Follow me: </p>
          <div className="logos">
            <a href="https://github.com/kalpesh700" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/kalpesh-koli-033342245" target="_blank" rel="noreferrer">
              <img src={linked_in} alt="LinkedIn logo" />
            </a>
            <a href="https://leetcode.com/u/iamkalpesh0/" target="_blank" rel="noreferrer">
              <img src={leetcodes} alt="LeetCode logo" />
            </a>
          </div>
        </div>

        <div className="flex1">
          <a href="mailto:kalpeshkoliwork@gmail.com">
            <button className="buttonc">E-Mail Me</button>
          </a>
          <button
            onClick={() => window.open("https://drive.google.com/file/d/1PA7A3QVRDCLsB-_W5PSaxOOJFgDr6q6B/view?usp=drive_link", "_blank")}
            className="buttonb"
          >
            Resume
          </button>
        </div>
      </div>

      <div className="right_main">
        <img className="behind_the_image" src={rightimg} alt="Decorative background" />
      </div>
    </motion.div>
  );
};

export default Main;
