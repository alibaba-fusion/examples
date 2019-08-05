import React, { Component } from 'react';
import { Icon, Search, Nav } from '@alifd/next';
import Shell from '@alifd/shell';
import './App.scss';

const { Item } = Nav;

class App extends Component {
  state = {}
  componentDidMount() {
    this.handleResize(window.innerWidth);

    window.addEventListener("optimizedResize", (e) => {
      this.handleResize(e.target.window.innerWidth);
    });
  }

  handleResize = width => {
    let device;
    if (width < 680) {
      device = 'phone';
    } else if (width > 1280) {
      device = 'desktop';
    } else {
      device = 'tablet'
    }

    if (!(device === this.state.device)) {
      this.setState({
        device
      });
    }
  }


  btnClick = () => {
    this.setState({
      navcollapse: !this.state.navcollapse
    });
  }

  render() {
    return (
      <div className="root">
        <Shell device={this.state.device} sizeMap={{NavigationCollapse: 60}}>
          <Shell.Branding>
            <div className="rectangular"></div>
            <span style={{marginLeft: 10, color: '#FFF'}}>App Name</span>
          </Shell.Branding>
          <Shell.Navigation direction="hoz">
            <Search key="2" shape="simple" type="dark" palceholder="Search" style={{width: '200px'}}/>
          </Shell.Navigation>
          <Shell.Action>
            <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" className="avatar" alt="用户头像" />
            <span style={{marginLeft: 10, color: '#FFF'}}>MyName</span>
          </Shell.Action>

          <Shell.Navigation collapse={this.state.navcollapse} >
            <Nav  type="primary" embeddable>
              <Nav.Item>Nav Item 1</Nav.Item>
              <Nav.Item>Nav Item 2</Nav.Item>
              <Nav.Item>Nav Item 3</Nav.Item>
              <Nav.Item>Nav Item 4</Nav.Item>
              <Nav.Item>Nav Item 5</Nav.Item>
              <Nav.Item>Nav Item 6</Nav.Item>
              <Nav.Item>Nav Item 7</Nav.Item>
          </Nav>
          <div className="my-trigger-nav" onClick={this.btnClick}> toggle </div>
          </Shell.Navigation>

          <Shell.LocalNavigation>
            <Nav embeddable>
              <Nav.SubNav label="Local Nav1">
                <Item>Local Nav1</Item>
              </Nav.SubNav>
              <Nav.SubNav label="Local Nav2">
                <Item>Local Nav2</Item>
              </Nav.SubNav>
              <Nav.SubNav label="Local Nav3">
                <Item>Local Nav3</Item>
              </Nav.SubNav>
              <Item>Local Nav4</Item>
              <Item>Local Nav5</Item>
              <Item>Local Nav6</Item>
              <Item>Local Nav7</Item>
              <Item>Local Nav8</Item>
               <Item>Local Nav4</Item>
              <Item>Local Nav5</Item>
              <Item>Local Nav6</Item>
              <Item>Local Nav7</Item>
              <Item>Local Nav8</Item>
            </Nav>
          </Shell.LocalNavigation>

          <Shell.Content>
            <div style={{minHeight: 1200, background: '#fff'}}></div>
          </Shell.Content>
          <Shell.Footer>
            <span>Alibaba Fusion</span>
            <span>@ 2019 Alibaba Piecework 版权所有</span>
          </Shell.Footer>
          
          <Shell.Ancillary>
            
          </Shell.Ancillary>
          <Shell.ToolDock>
            <Shell.ToolDockItem>
              <Icon type="calendar" />
            </Shell.ToolDockItem>
            <Shell.ToolDockItem>
              <Icon type="atm" />
            </Shell.ToolDockItem>
            <Shell.ToolDockItem>
              <Icon type="account" />              
            </Shell.ToolDockItem>
          </Shell.ToolDock>
        </Shell>
      </div>
    );
  }
}

export default App;
