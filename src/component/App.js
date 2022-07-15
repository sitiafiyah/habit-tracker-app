import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tracker from './Tracker';
import Menus from './Navbar';
import Main from './Main';

function App() {
  const { Content } = Layout;

  return (
    <Router>
      <div className='App'>
        {/* <Layout className='layout'> */}
          <Menus />
          <Switch>
            <Content>
              <Route exact path='/' component={Main} />
              <Route path='/progress' component={Tracker} />
            </Content>
          </Switch>
          {/* <Footer className='footer' style={{ textAlign: 'center' }}>
            ©2020 Created by Shashank Chandel - github.com/shashankch
          </Footer> */}
        {/* </Layout> */}
      </div>
    </Router>
  );
}

export default App;
