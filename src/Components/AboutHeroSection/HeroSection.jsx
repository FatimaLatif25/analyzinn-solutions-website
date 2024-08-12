import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "./HeroSection.css";

const { Content } = Layout;
const { Paragraph } = Typography;

const MainContact = () => {
  return (
    <Layout>
      <Content className="main-about">
        <Row
          style={{ minHeight: "60vh", paddingLeft: "40px", marginLeft: "40px" }}
          justify="center"
          align="middle"
        >
          <Col span={20} justify="center" align="middle">
            <Paragraph className="about-paragraph">
            Annlyzinn team is passionate about creating valuable products and helping other businesses climb the tech ladder.
            </Paragraph>
            <h1 level={1} className="about-title">
             About Us
            </h1>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainContact;
