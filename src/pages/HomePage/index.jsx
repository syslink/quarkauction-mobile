import React, { Component } from 'react';
import cookie from 'react-cookies';
import Banner from './components/Banner';
import AuctionedTokens from './components/AuctionedTokens';
import MyTokens from './components/MyTokens';
import Menu from './components/Menu';
import eventProxy from '../../utils/eventProxy';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: false,
      paused: false,
      menuType: 'auction',
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
      this.setState({menuType});
    })
  }
  
  render() {
    return (
      <div style={{width: '150%'}}>
        {
          this.state.menuType == 'myTokens' ? 
            <div>
              <MyTokens />
            </div>
              :
            (this.state.menuType == 'auction' ?
              <div>
                <Banner start={this.state.start} paused={this.state.paused}/>
                <AuctionedTokens start={this.state.start}/>
              </div>
                :
              <div>
                <Menu />
              </div>
             )
        }
      </div>
    );
  }
}
