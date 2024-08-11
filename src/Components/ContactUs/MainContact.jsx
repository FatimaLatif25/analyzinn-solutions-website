import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "./MainContact.css";

const { Content } = Layout;
const { Paragraph } = Typography;

const MainContact = () => {
  return (
    <Layout>
      <Content className="main-contact">
        <Row
          style={{ minHeight: "60vh", paddingLeft: "40px", marginLeft: "40px" }}
          justify="center"
          align="middle"
        >
          <Col span={20} justify="center" align="middle">
            <Paragraph className="contact-paragraph">
              Lets's Connect with Analyzinn Solutions
            </Paragraph>
            <h1 level={1} className="contact-title">
              Contact Us
            </h1>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainContact;
