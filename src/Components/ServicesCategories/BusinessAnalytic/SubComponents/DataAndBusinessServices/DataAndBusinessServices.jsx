import React from "react";
import "./DataAndBusinessServices.css";
import { Layout, Col, Row, Tabs, Card, Grid } from "antd";
import { useInView } from "react-intersection-observer";

/*Data & Business Analytics Services

Data Management Services
Database Systems Automation. Quality Control. Data Integration & Warehousing. Transformation.


Marketing Analytics
Business Discovery with Marketing Stakeholders Opportunity/Threat Identification Marketing and Customer Insights, Segmentation, and Personalization Marketing Mix Modeling (MMM) Attribution Modeling Product Life Cycle Analysis Customer Analytics Services Customer Lifetime Value / RFM Analysis Customer Journey Analysis Retention/Churn Analysis Marketing Dashboards (Salesforce, Marketo, Klipfolio, etc)


Data Analysis & Visualization
Business objectives Analysis:Identify and prioritize your objectives and burning questions to focus our analysis. Visibility Wireframing Product Level Dashboards and visualizations Customer Level Dashboards and visualizations Recommendations Reports */

export const DataAndBusinessServices = () => {
  const screens = Grid.useBreakpoint();
  return (
    <div className="DataAndBusinessServices">
      <div className="DataAndBusinessServices-Content">
        <h1>Data & Business Analytics Services</h1>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Tabs
              defaultActiveKey="1"
              tabPosition={screens.md ? "top" : "left"}
              centered
            >
              <Tabs.TabPane tab="Data Management Services" key="1">
                <Card className="CardBody c1" title="Database Systems Automation" bordered={false}>
                  <p>
                  Database Systems Automation. Quality Control. Data Integration & Warehousing. Transformation.
                  </p>
                </Card>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Marketing Analytics" key="2">
                <Card className="CardBody c2"
                  title="Business Discovery with Marketing Stakeholders"
                  bordered={false}
                >
                  <p>
                    Opportunity/Threat Identification. Marketing and Customer
                    Insights, Segmentation, and Personalization. Marketing Mix
                    Modeling (MMM) Attribution Modeling. Product Life Cycle
                    Analysis. Customer Analytics Services. Customer Lifetime
                    Value / RFM Analysis. Customer Journey Analysis.
                    Retention/Churn Analysis. Marketing Dashboards (Salesforce,
                    Marketo, Klipfolio, etc)
                  </p>
                </Card>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Data Analysis & Visualization" key="3">
                <Card className="CardBody c3" title="Business objectives Analysis" bordered={false}>
                  <p>
                    Identify and prioritize your objectives and burning
                    questions to focus our analysis. Visibility Wireframing.
                    Product Level Dashboards and visualizations. Customer Level
                    Dashboards and visualizations. Recommendations Reports
                  </p>
                </Card>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};
