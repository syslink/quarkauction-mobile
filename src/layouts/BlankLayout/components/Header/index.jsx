import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Search, Grid, Button, Icon } from '@alifd/next';
import eventProxy from '../../../../utils/eventProxy';
import FoundationSymbol from '@icedesign/foundation-symbol';

import styles from './index.module.scss';

const { Row, Col } = Grid;
const LOGO = require('./images/logo.png');
const ACCOUNT = require('./images/account.png');


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenAuctionActive: true, 
      symbolName: 'menu',
    };
  }

  componentDidMount = () => {
    eventProxy.on('closeMenu', (closeMenu) => {
      this.setState({symbolName: 'menu'});
    });
  }

  
  onSearch() {
    
  }

  showMyTokensOrAuction = () => {
    if (this.state.symbolName == 'menu') {
      this.setState({symbolName: 'close'});
      eventProxy.trigger('menuSelector', 'openMenu');
    } else {
      this.setState({symbolName: 'menu'});
      eventProxy.trigger('menuSelector', 'closeMenu');
    }
  }

  render () {
    return (
      <Row justify="space-between" align="center" gutter='20' className={styles.header}>
        <Col>
          <Link to="/">
            <img src={LOGO}/>
          </Link>
        </Col>
        <Col>
          <Search shape="simple" placeholder='Token Names' onSearch={() => this.onSearch()}/>
        </Col>
        <Col>
          <Button text onClick={this.showMyTokensOrAuction.bind(this)}>
            {
              this.state.symbolName == 'menu' ? <FoundationSymbol type='menu' size="large" /> : <Icon  type='close' size="large" />
            }
          </Button>
        </Col>
      </Row>
    );
  }
}
