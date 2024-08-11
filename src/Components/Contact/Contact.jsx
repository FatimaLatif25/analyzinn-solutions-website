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
        "lNFHdEMyncwOh4R2G" // Use Public key as a userID EmailJS
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
        <Row gutter={[32, 16]} justify="center" align="middle">
          <Col span={12} xs={24} md={12} className="contact-details">
            <h1>Let's Make Things Happen</h1>
            <h3>
              Feel free to contact us for any questions or request a Free
              Consultation
            </h3>
            <p>
              “We partner with our clients, take full ownership of their
              business needs and devise tailored solutions for their unique
              requirements. Our solutions are result-oriented, technology
              driven, with end-to-end implementations Including Digital
              Marketing, BI frameworks, and strategic consultancy.”
            </p>
          </Col>
          <Col span={12} xs={24} md={12}>
            <div className="contact-form-card">
              <h2 className="card-title">Let's Talk</h2>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ padding: "20px" }}
              >
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
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="submit-button"
                  >
                    Get a Callback
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
