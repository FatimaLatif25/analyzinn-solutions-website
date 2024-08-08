import React from "react";
import { Row, Col, Form, Input, Button, message, Card } from "antd";
import emailjs from "emailjs-com";
import "./Contact.css";

const { TextArea } = Input;
const Contact = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    emailjs
      .send(
        "service_a8x25pf", // EmailJS service ID
        "template_5h3focn", // EmailJS template ID
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "lNFHdEMyncwOh4R2G" // EmailJS user ID
      )
      .then((response) => {
        message.success("Message sent successfully!", response);
        form.resetFields();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        message.error("Failed to send message, please try again.");
      });
  };
  return (
    <>
      <div className="contact-section">
      <h1 className="main-heading">Contact Us</h1>
        <Row gutter={16} justify="center" align="middle">
          <Col xs={24} md={12} className="contact-details">
            <h1>Let's Make Things Happen</h1>
            <h3>Advanced software, advanced research for advanced people</h3>
            <p>
              “We have always looked for external resources that matched our
              core values and with Annalyzinn Solutions and the leadership of
              (ceo Annalyzinn Solutions) we finally found a smart and
              conscientious team. I have personally referred Annalyzinn
              Solutions and highly recommend.”
            </p>
          </Col>
          <Col xs={24} md={12}>
            <Card className="contact-form-card" title={<span className="card-title">Let's Talk</span>}>
              <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                  className="contact-form"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                   className="contact-form"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                   className="contact-form"
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="submit-button">
                    Get a Callback
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
