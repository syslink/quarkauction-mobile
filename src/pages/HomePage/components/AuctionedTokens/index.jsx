import React, { Component } from 'react';
import { Button, Grid } from '@alifd/next';
import styles from './index.module.scss';

const nodata = require('./images/nodata.png');
const { Row, Col } = Grid;

export default class AuctionedTokenData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenData: [],
      start: props.start,
      startIndex: 0,
    };
  }
  componentDidMount = () => {
    if (this.state.start) {
      this.state.tokenData = this.generateData(this.state.startIndex);
      this.state.startIndex += 4;
      this.setState({tokenData: this.state.tokenData});
    }
  }

  generateData = (startIndex) => {
    let data = [];
    for (let i = 0; i < 4; i++) {
      data.push({tokenName: 'Satoshi-' + (startIndex + i), price: '100000 QKC', createdTime: '21:42:12 01/22/2020', totalSupply: '10000000', owner: '0xaaaa...bbbb'});
    }
    return data;
  }

  loadMore = () => {
    this.state.tokenData.push(...this.generateData(this.state.startIndex));
    this.state.startIndex += 4;
    this.setState({tokenData: this.state.tokenData});
  }
  
  render() {
    return (
      <div>
        <Row wrap justify="space-around" align="center" style={{margin: '20px'}}>
          {
          this.state.tokenData.map(tokenInfo =>
            <Col span="24" align='start' style={{marginBottom: '20px'}}>
              <div className={styles.content}>
                <li className={styles.navItem}>
                  <div className={styles.desc}>Token Name:</div>
                  <div className={styles.value}>{tokenInfo.tokenName}</div>
                </li>
                <li className={styles.navItem}>
                  <div className={styles.desc}>Auctioned Price:</div>
                  <div className={styles.value}>{tokenInfo.price}</div>
                </li>
                <li className={styles.navItem}>
                  <div className={styles.desc}>Created Time:</div>
                  <div className={styles.value}>{tokenInfo.createdTime}</div>
                </li>
                <li className={styles.navItem}>
                  <div className={styles.desc}>Total Supply:</div>
                  <div className={styles.value}>{tokenInfo.totalSupply}</div>
                </li>
                <li className={styles.navItem}>
                  <div className={styles.desc}>Owner:</div>
                  <div className={styles.value}>{tokenInfo.owner}</div>
                </li>
              </div> 
            </Col>
          )}
        </Row>
        <Row wrap  justify="space-around" align="center">
          {
            this.state.tokenData.length == 0 ? '' :
              <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: '#00C4FF', marginTop: '20px', 
                      width: '120px', height: '50px', fontSize: '20px', color: '#FFFFFF'}} onClick={() =>  this.loadMore()}>                  
                      More
              </Button>
          }
        </Row>
      </div>
    );
  }
}
