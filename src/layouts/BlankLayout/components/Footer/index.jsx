import React from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;


const social1 = require('./images/1.png');
const social2 = require('./images/2.png');
const social3 = require('./images/3.png');
const social4 = require('./images/4.png');
const social5 = require('./images/5.png');
const social6 = require('./images/6.png');
const social7 = require('./images/7.png');
const social8 = require('./images/8.png');
const social9 = require('./images/9.png');
const social10 = require('./images/10.png');

export default function Footer() {
  return (
      <div className={styles.container}>
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>Technology</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>Developer Portal</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Whitepaper</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Boson Consensus</a>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>Mining Handbook</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Mainnet</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>QPocket</a>
        </Row>
        
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>Resources</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>News</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Media</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Press</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Ecosystem</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Community</a>
        </Row>
        
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>Contact</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>Career@quarkchain.org</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>support@quarkchain.org</a>
        </Row>
        
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>About Us</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>Team</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Advisors</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Investors</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Careers</a>
        </Row>
        
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>Other</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a className={styles.link}>Terms of use</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Privacy Policy</a>
          <div className={styles.link}>|</div>
          <a className={styles.link}>Token Distribution</a>
        </Row>
        
        <Row justify="start"  style={{width: '100%', marginLeft: '20px'}}>
          <h3 className={styles.title}>Social Media</h3>
        </Row>
        <Row justify="start" style={{width: '100%', marginLeft: '20px'}}>
          <a href='/'><img src={social1} className={styles.imgItem}/></a>
          <a href='/'><img src={social2} className={styles.imgItem}/></a>
          <a href='/'><img src={social3} className={styles.imgItem}/></a>
          <a href='/'><img src={social4} className={styles.imgItem}/></a>
          <a href='/'><img src={social5} className={styles.imgItem}/></a>
          <a href='/'><img src={social6} className={styles.imgItem}/></a>
          <a href='/'><img src={social7} className={styles.imgItem}/></a>
          <a href='/'><img src={social8} className={styles.imgItem}/></a>
          <a href='/'><img src={social9} className={styles.imgItem}/></a>
          <a href='/'><img src={social10} className={styles.imgItem}/></a>
        </Row>
      </div>
  );
}
