import React from 'react'
import './AutomationServiceCards.css'
import { DrawerCard } from '../../../CommonComponent/DrawerCard/DrawerCard'
import { Row, Col } from 'antd'


// CRM System Integrations
// Automation of your sales processes that you are doing manually on a regular basis.


// Automation And Integration From APIs
// Certified architects to develop and execute integration solutions by the Leverage APIs and standard connections


// ERP System Integration
// Analyzinn provides a scalable solution to the modern connectivity problem such as SAP integration with third-party applications, Using ERP reporting software such as Power BI and Tableau.


// Accounting System Integration
// We aim to offer our customers a one-stop solution for accounting, auditing, and taxation by using SAP and Xero for integration with CRM systems


// Payment Gateway Integration
// Our Payment Gateway Integration Services assist in simplifying online transaction processing on your website such as Payment gateway integration for clients, such as Paypal.


// Ecommerce Integration
// Our ECommerce integration services includes completing integration projects for companies of all sizes and shapes across various eCommerce platforms such as Website connection with eCommerce solutions such as Magento, Shopify, and WooCommerce, ETL integrations and data replication to provide a unified experience, etc.

export const AutomationServiceCards = () => {
  return (
    <div className='AutomationServiceCards'>
        <div className='AutomationServiceCards-Content'>
            <h1>Automation Services</h1>
            <Row gutter={[16, 16]} className='Row'>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='CRM System Integrations' description='Automation of your sales processes that you are doing manually on a regular basis.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Automation And Integration From APIs' description='Certified architects to develop and execute integration solutions by the Leverage APIs and standard connections' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='ERP System Integration' description='Analyzinn provides a scalable solution to the modern connectivity problem such as SAP integration with third-party applications, Using ERP reporting software such as Power BI and Tableau.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Accounting System Integration' description='We aim to offer our customers a one-stop solution for accounting, auditing, and taxation by using SAP and Xero for integration with CRM systems' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Payment Gateway Integration' description='Our Payment Gateway Integration Services assist in simplifying online transaction processing on your website such as Payment gateway integration for clients, such as Paypal.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Ecommerce Integration' description='Our ECommerce integration services includes completing integration projects for companies of all sizes and shapes across various eCommerce platforms such as Website connection with eCommerce solutions such as Magento, Shopify, and WooCommerce, ETL integrations and data replication to provide a unified experience, etc.' />
                </Col>
            </Row>

        </div>
    </div>

  )
}
