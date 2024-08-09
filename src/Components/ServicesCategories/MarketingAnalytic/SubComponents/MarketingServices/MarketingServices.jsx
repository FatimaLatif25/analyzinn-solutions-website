import React from "react";
import "./MarketingServices.css";
import { Row, Col } from "antd";
import { DrawerCard } from "../../../CommonComponent/DrawerCard/DrawerCard";

export const MarketingServices = () => {
  return (
    <div className="MarketingServices">
      <div className="MarketingServices-Content">
        <h1>Services</h1>
        <h4>
          Are your digital marketing goals driven by data, or just a shot in the
          dark? Either way, ANALYZINN can help to gain competitive advantage by
          providing you the right knowledge, at the right time, so you can:
        </h4>
        {/*Cards should have button to open Description in Drawers */}
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <DrawerCard
              title={
                "Understand your customers & offer Superior Customer Experience"
              }
              description={
                "Offer superior customer experiences by comprehending customer needs and behaviors."
              }
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <DrawerCard
              title={"Identify opportunities and threats & Market Better"}
              description={
                "Market more effectively by recognizing opportunities and potential threats."
              }
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <DrawerCard
              title={"Respond to business needs proactively"}
              description={
                "Respond to business needs in a timely manner, enhancing agility."
              }
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <DrawerCard
              title={"Innovate faster with relevant data"}
              description={
                "Innovate faster by leveraging relevant data insights."
              }
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <DrawerCard
              title={
                "Gain competitive advantage & make informed and optimized decision"
              }
              description={
                "Gain a competitive edge by making well-informed and optimized decisions using data."
              }
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
