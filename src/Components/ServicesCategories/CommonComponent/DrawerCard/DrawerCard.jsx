import React from "react";
import { Card, Button, Drawer } from "antd";
import './DrawerCard.css'

export const DrawerCard = (props) => {
    const [visible, setVisible] = React.useState(false);
    const showDrawer = () => {
        setVisible(true);
    }
    const onClose = () => {
        setVisible(false);
    }
  return (
    <Card className='DrawerCard'
      title={props.title}
      bordered={false}
    >
      <Button type="primary" onClick={showDrawer}>
        Learn More
      </Button>
      <Drawer
        // title="Understand your customers & offer Superior Customer Experience"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        getContainer={false}
      >
        <p>
          {props.description}
        </p>
      </Drawer>
    </Card>
  );
};
