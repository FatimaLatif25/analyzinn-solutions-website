import React from 'react'
import {Layout, Col, Row, Card} from 'antd'
import './ProblemSolSection.css'

// Problems We Solve
// Lack of Data Consolidation
// Difficulty in extracting meaningful information from data.
// Multiple Data Sources
// No unified reporting mechanism for critical insights and visualizations.
// Leads to manual data cleaning and reporting.
// Unintegrated Systems
// Unintegrated CRMs and core business software.
// Results in multiple silos of data without holistic visibility.
// Need for Advanced Data Analytics
// Data analytics delivers refined, highly accurate, and intelligent actionable insights.
// Fosters a culture of data-driven decisions and growth.


export const ProblemSolSection = () => {
  return (
    <div className='ProblemSolSection'>
        <div className='ProblemSol-Content'>
            <h1>Problems We Solve</h1>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Card title="Lack of Data Consolidation" bordered={false}>
                        <p>Difficulty in extracting meaningful information from data.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Card title="Multiple Data Sources" bordered={false}>
                        <p>No unified reporting mechanism for critical insights and visualizations.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Card title="Unintegrated Systems" bordered={false}>
                        <p>Unintegrated CRMs and core business software.</p>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Card title="Need for Advanced Data Analytics" bordered={false}>
                        <p>Data analytics delivers refined, highly accurate, and intelligent actionable insights.</p>
                    </Card>
                </Col>
            </Row>
        </div>
    </div>
  )
}
