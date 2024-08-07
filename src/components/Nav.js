import React from 'react';
import { Breadcrumb, Layout, Menu, theme,Drawer } from 'antd';
import logo from './3.png';
import {useState} from 'react';
import {MenuOutlined} from "@ant-design/icons"

const { Header } = Layout;
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
    const[openMenu,setOpenMenu]=useState(false);
    return (

        <div>
            <MenuOutlined style={{color: 'white', fontSize:30}} onClick={()=>{
                setOpenMenu(true);
            }}/> 
            <NavMenu />
            <Drawer placement='right' open={openMenu} onClose={()=>{
                setOpenMenu(false);

            }} closable={false}>
                <NavMenu isInline/>
            </Drawer>
        </div>
    );
};

const NavMenu = ({isInline=false}) => {
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
                    padding: '0 20px', // Add padding to the Header
                    backgroundColor: '#000', // Set background color
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
                    mode={isInline?"inline":"horizontal"}
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        //   flex: 1,
                        //   minWidth: 0,
                        marginLeft: 'auto',
                    }}
                />
            </Header>
        </Layout>

    );
};

export default Nav;
