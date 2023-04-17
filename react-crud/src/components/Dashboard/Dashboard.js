import { Layout, theme, Menu } from 'antd';
import React from "react";
import { NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import AddContacts from '../AddContacts/AddContacts';
import Dashboard_data from './Dashboard_data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mapview from '../Map/Map';

const { Header, Content, Footer } = Layout;


const Dashboard = () => {

 
  const {
    token: { colorBgContainer },
  } = theme.useToken();
 
  return (
    <Router>
    <Layout style={{minHeight: "100vh"}}>

      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: "white",
          height : '50%'
          
        }}
      >
      </Header>
      <Content
        className="site-layout"
        style={{ 
          margin: "24px 16px 0", 
          overflow: "initial" ,
          
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        > 
        <Menu mode="horizontal" style={{ textDecoration: 'none' }}>
              {Dashboard_data.map((val, key)=>{
                   return (
              <Menu.Item key = {key} icon = {val.icon}>
            
                    <NavLink style={{ textDecoration: 'none' }} to= {val.link}>    
                    <span>{val.title}</span>
                    </NavLink>
 
              </Menu.Item>
                   )}
              )}
                
                </Menu>
                  <Routes>
                    <Route exact path='/home' element={<Home/>} />
                    <Route exact path='/addcontacts' element={<AddContacts/>} />
                    <Route exact path='/map' element={<Mapview/>} />
                  </Routes>
          
        </div>
        
        </Content>
        
        <Footer
        style={{
          textAlign: 'center',
          width: '100%',
        }}
      >
        React assessment @ 2023 sample footer
      </Footer>
    </Layout>
    </Router>

  );
};
export default Dashboard;