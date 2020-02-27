import React, { Component } from 'react';
import { Button, Dialog, Grid  } from '@alifd/next';
import eventProxy from '../../../../utils/eventProxy';

const { Row, Col } = Grid;

export default class MyTokens extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '0x1bd7F...1sd27b0',     
      balance: 6000, 
    };
  }
  componentDidMount = () => {
  }

  withdraw = () => {

  }

  showTokenAuction = () => {
    eventProxy.trigger('menuSelector', 'auction');
    eventProxy.trigger('closeMenu', 'closeMenu');
  }

  showMyTokens = () => {
    eventProxy.trigger('menuSelector', 'myTokens');
    eventProxy.trigger('closeMenu', 'closeMenu');
  }

  render() {
    return (
      <Col style={{margin: '25px'}}>
        <Row>
          <Button text style={{marginBottom: '25px'}} onClick={() => this.showTokenAuction()}><div style={{fontSize: '30px'}}>Token Auction</div></Button>
        </Row>
        <hr />
        <Row>
          <Button text style={{margin: '25px 0', color: '#000000'}} onClick={() => this.showMyTokens()}><div style={{fontSize: '30px'}}>My Tokens</div></Button>
        </Row>
        <hr />
        <Row><div style={{margin: '25px 0', fontSize: '30px'}}>Account: {this.state.account}</div></Row>
        <Row><div style={{marginBottom: '25px', fontSize: '30px'}}>Contract Balance: {this.state.balance} QKC</div></Row>
        <Row>
          <Button type='secondary' style={{ borderRadius: '100px', border: '2px solid #00C4FF', backgroundColor: 'transparent', 
                width: '120px', height: '50px', fontSize: '20px', color: '#00C4FF'}} onClick={() =>  this.withdraw()}>                  
                Withdraw
          </Button>
        </Row>
        <hr />
      </Col>)
  }
}
