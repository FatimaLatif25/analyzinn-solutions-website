import React from 'react';
import { Breadcrumb, Layout, Menu,Dropdown,Drawer } from 'antd';
import { BarsOutlined} from '@ant-design/icons';
// import logo from './3.png';
import './NavBar.css';

const { Header} = Layout;
const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Services' },
    { key: '3', label: 'About' },
    { key: '4', label: 'Contacts' },
  ];

  //responsive with bar menu on small screen using dropdown and drawer
const NavBar = () => {
    const [open, setOpen] = React.useState(false);
//   const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  });
    return (
        <Header className="header">
            <div className="logo" >LOGO</div>
            <Menu className='menu'
             theme="dark" mode="horizontal" defaultSelectedKeys={['0']}
             >
                {items.map(item => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
            </Menu>
                <button className='drawer-button'
                    onClick={showDrawer}
                >
                    <BarsOutlined />
                </button>
            <Drawer id="drawer"
        title="Basic Drawer"
        placement={'left'}
        closable={true}
        onClose={onClose}
        open={open}
        // key={placement}
      >
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['0']}>
          {items.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>

        </Header>

    );
};

export default NavBar;