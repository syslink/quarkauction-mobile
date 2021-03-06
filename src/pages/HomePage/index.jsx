import React, { Component } from 'react';
import cookie from 'react-cookies';
import Banner from './components/Banner';
import AuctionedTokens from './components/AuctionedTokens';
import MyTokens from './components/MyTokens';
import Menu from './components/Menu';
import Exchange from './components/Exchange';
import eventProxy from '../../utils/eventProxy';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,
      paused: false,
      menuType: 'auction',
      historyMenuType: 'auction',
    };
    
    const start = cookie.load('start') == 'true';
    this.state.start = !start;
    if (this.state.start) {
      this.state.paused = Math.floor(Math.random() * 10) > 4;
    }
    cookie.save('start', this.state.start);
  }
  componentDidMount = () => {
    eventProxy.on('menuSelector', (menuType) => {
      if (menuType == 'closeMenu') {
        this.setState({menuType: this.state.historyMenuType});
      } else {
        this.state.historyMenuType = this.state.menuType;
        this.setState({menuType});
      }
    });
  }
  
  render() {
    var displayBody;
    switch(this.state.menuType) {
      case 'myTokens':
        displayBody = <div> <MyTokens /> </div>;
        break;
      case 'auction':
        displayBody = <div> 
                        <Banner start={this.state.start} paused={this.state.paused}/> 
                        <AuctionedTokens start={this.state.start}/>
                      </div>;
        break;
      case 'openMenu':
        displayBody = <div> <Menu /> </div>;
        break;
      default:
        displayBody = <div> <Exchange tokenInfo={this.state.menuType}/> </div>;
    }
    return (
      <div style={{width: '150%'}}>
        {displayBody}
      </div>
    );
  }
}
