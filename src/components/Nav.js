import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from './3.png';

const { Header} = Layout;
const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Services' },
    { key: '3', label: 'About' },
    { key: '4', label: 'Contacts' },
  ];

//   const itm=[
//     {key: '5',label: 'ANALYZINN SOLUTIONS'}
//   ];

const Nav = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo}
            alt="Logo" 
            style={{ height: '50px', marginRight: '10px' }} 
          />
          <div style={{ color: 'white', fontSize: '20px', padding: '10px' }}>
            ANALYZINN SOLUTIONS
          </div>
        </div>
        
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{
            //   flex: 1,
            //   minWidth: 0,
              marginLeft: 'auto', 
            }}
          />
        </Header>
        
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */} 
      </Layout>

    );
};

export default Nav;