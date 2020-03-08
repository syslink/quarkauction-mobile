import React, { Component } from 'react';
import { Button, Dialog, Input, Grid  } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const asset = require('./images/asset.png');
const greenIcon = require('./images/green.png');
const redIcon = require('./images/red.png');
const yellowIcon = require('./images/yellow.png');

export default class Exchange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenInfo: props.tokenInfo,
      shardData: [],
      registerVisible: false,
      exchangeRateVisible: false,
      registerFooter: (<view style={{marginRight: '30px', marginBottom: '80px'}}>
        <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: '#00C4FF', 
          width: '25%', height: '60px', fontSize: '16px',
          color: '#FFFFFF', marginRight: '20px'}} onClick={() => this.setState({registerVisible: false})}>                  
          Cancel
        </Button>
        <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: '#00C4FF', 
          width: '25%', height: '60px', fontSize: '16px',
          color: '#FFFFFF'}} onClick={() => this.setState({registerVisible: false})}>                  
          OK
        </Button>
      </view>),
      exchangeRateFooter: (<view style={{marginRight: '30px', marginBottom: '80px'}}>
        <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: '#00C4FF', 
          width: '25%', height: '60px', fontSize: '16px',
          color: '#FFFFFF', marginRight: '20px'}} onClick={() => this.setState({exchangeRateVisible: false})}>                  
          Cancel
        </Button>
        <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: '#00C4FF', 
          width: '25%', height: '60px', fontSize: '16px',
          color: '#FFFFFF'}} onClick={() => this.setState({exchangeRateVisible: false})}>                  
          OK
        </Button>
      </view>),
    };
  }
  componentDidMount = () => {
    const shardData = this.generateData();
    this.setState({shardData})
  }

  generateData = () => {
    let data = [];
    let statusList = [{status: 'Provider Higher Rate', icon: greenIcon, func: this.exchangeRate}, 
                      {status: 'Set Rate', icon: greenIcon, func: this.exchangeRate}, 
                      {status: 'Register', icon: greenIcon, func: this.register}, 
                      {status: 'Register', icon: greenIcon, func: this.register}, 
                      {status: 'Set Rate', icon: greenIcon, func: this.exchangeRate}];
    for (let i = 0; i < 5; i++) {
      data.push({shardName: 'Shard-' + i, admin: '0x1bcd1...1D99d', exchangeRate: '0.5', gasReserve: '1000 QKC', refundRate: '0.2', 
                status: statusList[i].status, icon: statusList[i].icon, func: statusList[i].func});
    }
    return data;
  }

  withdraw = () => {
  }
  register = () => {
    this.setState({registerVisible: true});
  }

  exchangeRate = () => {
    this.setState({exchangeRateVisible: true});
  }
  
  render() {

    return (
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.title}>{this.state.tokenInfo.tokenName}</div>
    
            <li className={styles.navItem}>
              <li className={styles.auctionInfo}>
                <div className={styles.desc}>Created Time:</div>
              </li>
              <div className={styles.bannerValue}>21:14:12 01/02/2020</div>
            </li>
            <li className={styles.navItem}>
              <li className={styles.auctionInfo}>
                <div className={styles.desc}>Auctioned Price:</div>
              </li>
              <div className={styles.bannerValue}>50000 QKC</div>
            </li>
            <li className={styles.navItem}>
              <li className={styles.navItem}>
                <li className={styles.auctionInfo}>
                  <div className={styles.desc}>Total Supply:</div>
                </li>
                <div className={styles.bannerValue}>1000000</div>
              </li>
            </li>
            <li className={styles.navItem} style={{ width: '100%', justifyContent: 'start'}} >
                <li className={styles.auctionInfo}>
                  <div className={styles.desc}>Balance:</div>
                </li>
                <div className={styles.bannerValue}>30000</div>
              <Button type='secondary' style={{ borderRadius: '20px', border: '1px solid #00C4FF', backgroundColor: 'transparent', 
                width: '140px', height: '40px', fontSize: '20px', color: '#00C4FF', margin: '-25px 0 0 20px'}} onClick={() =>  this.withdraw()}>                  
                Withdraw All
              </Button>

            </li>
          </div> 
        </div>
        {
          this.state.shardData.map(shardInfo => {

              return (
                <div className={styles.baseShard}>
                  <Row align='center'>
                    <div className={styles.shardTitle}>{shardInfo.shardName}</div>
                    <img src={shardInfo.icon} className={styles.iconItem}/>
                  </Row>
                  <Row style={{marginTop: '20px'}}>
                    <Col span='12'>
                      <Row>
                        <div className={styles.value}>Admin:</div>
                        <div className={styles.value}>{shardInfo.admin}</div>
                      </Row>
                    </Col>
                    <Col span='12' style={{marginLeft: '40px'}}>
                      <Row>
                        <div className={styles.value}>Exchange Rate:</div>
                        <div className={styles.value}>{shardInfo.exchangeRate}</div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col span='12'>
                      <Row>
                        <div className={styles.value}>Gas Reserve:</div>
                        <div className={styles.value}>{shardInfo.gasReserve}</div>
                      </Row>
                    </Col>
                    <Col span='12' style={{marginLeft: '40px'}}>
                      <Row>
                        <div className={styles.value}>Refund Rate:</div>
                        <div className={styles.value}>{shardInfo.refundRate}</div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Button text style={{ color: '#00C3FF', fontSize: '24px'}} onClick={() => shardInfo.func()}>                  
                      {shardInfo.status}
                    </Button>
                  </Row>
                </div> )
            }
          )}
        <Dialog style={{ width: "80%", marginLeft: '10%'}}
          visible={this.state.registerVisible}
          closeable="esc,mask"
          onOk={() => this.setState({registerVisible: false})}
          onCancel={() => this.setState({registerVisible: false})}
          onClose={() => this.setState({registerVisible: false})}
          title='Register'
          footerAlign='right'
          footer={this.state.registerFooter}
        >
          <Input style={{borderRadius: '4px', marginRight: '20px', marginLeft: 30, width: '85%', height: '25px'}} 
                 placeholder="Token Amount" addonTextAfter="Satoshi"/>
          <p style={{fontSize: 16, lineHeight: '180%', marginRight: 30, marginLeft: 30}}>
          A token must be registered in a specified shard to enable gas reserve operation. Sending any amount of the token to our system contract will complete registration. Continue to proceed?
          </p>
        </Dialog>
        
        <Dialog style={{ width: "80%", marginLeft: '10%' }}
          visible={this.state.exchangeRateVisible}
          closeable="esc,mask"
          onOk={() => this.setState({exchangeRateVisible: false})}
          onCancel={() => this.setState({exchangeRateVisible: false})}
          onClose={() => this.setState({exchangeRateVisible: false})}
          title='Exchange Rate'
          footerAlign='right'
          footer={this.state.registerFooter}
        >
          <Input style={{borderRadius: '4px', margin: '0 20px 20px 30px', width: '85%', height: '30px'}} 
                 placeholder="Exchange Rate"/>
          <Input style={{borderRadius: '4px', margin: '0 20px 0px 30px', width: '85%', height: '30px'}} 
                placeholder="Gas Reserve Amount"/>
          <p style={{fontSize: 14, color: '#FB7C6E', lineHeight: '180%', marginRight: 30, marginLeft: 30}}>
          Must be more than 500 QKC
          </p>
        </Dialog>
      </div>
    );
  }
}
