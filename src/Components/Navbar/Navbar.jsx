import React, { useEffect, useState } from "react";
import { MenuOutlined, HomeOutlined, ContactsOutlined, ReadOutlined, ToolOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Drawer, Menu, Button } from "antd";
import "./Navbar.css";
import navbarLogo1 from "../../assets/images/navbarLogo1.png";
import navbarLogo from "../../assets/images/navbarLogo.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { label: <Link to="/"><HomeOutlined/>Home</Link>, key: "home" },
    { label: <Link to="/about"><ReadOutlined/>About</Link>, key: "about" },
    { label: <Link to="/services"><ToolOutlined/>Services</Link>, key: "services" },
    { label: <Link to="/contacts"><ContactsOutlined/>Contact</Link>, key: "contacts" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={navbarLogo1} alt="Logo" />
        </a>
      </div>
      <div className="menu-container">
        {!isMobile && (
          <Menu mode="horizontal" items={menuItems} className="menu" />
        )}
        {isMobile && (
           <Button
           className="menu-button"
           type="primary"
           icon={<MenuOutlined />}
           onClick={showDrawer}
         />
        )}
      </div>
      {isMobile && (
         <Drawer
         title={
           <img
             src={navbarLogo}
             alt="Logo"
             style={{ height: "186px", width: "auto" }}
           />
         }
         placement="right"
         onClose={onClose}
         visible={visible}
         bodyStyle={{ padding: 0 }}
       >
         <Menu mode="vertical" items={menuItems} onClick={onClose}  style={{color: '#001529'}}/>
       </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
