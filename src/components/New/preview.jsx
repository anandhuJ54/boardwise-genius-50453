import React from "react";
import {
  Modal,
  Button,
  Card,
  Tag,
  Typography,
  Row,
  Col,
  Space,
  Divider,
} from "antd";
import {
  BankOutlined,
  EnvironmentOutlined,
  StarFilled,
  PhoneOutlined,
  GlobalOutlined,
  MailOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const ProfilePreview = ({ open, onOpenChange, name, location, category }) => {
  const getInitials = (fullName) => {
    if (!fullName.trim()) return "UN";
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  };

  const extractCity = (loc) => {
    const parts = loc.split(",");
    return parts[0].trim();
  };

  const getZipCode = () => "29601"; // Mock ZIP

  return (
    <Modal
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width="90%"
      centered
      bodyStyle={{ padding: 0, maxHeight: "90vh", overflowY: "auto" }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "hsl(0,0%,23%)",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          size="small"
          icon={<InfoCircleOutlined />}
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.2)",
            color: "#fff",
          }}
        >
          Unclaimed Profile
        </Button>

        <Space>
          <Button
            size="small"
            type="primary"
            style={{
              background: "linear-gradient(to right, #ff6a00, #a832ff)",
              border: "none",
            }}
          >
            Is this your profile?
          </Button>
          <Button
            size="small"
            type="text"
            icon={<CloseOutlined />}
            onClick={() => onOpenChange(false)}
            style={{
              color: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
        </Space>
      </div>

      <div style={{ padding: 24 }}>
        {/* Main Profile Card */}
        <Card
          style={{
            background: "linear-gradient(135deg, #6B5B95, #8B5A9D, #5B8DEF)",
            color: "#fff",
            borderRadius: 16,
            marginBottom: 24,
          }}
          bodyStyle={{ padding: 24 }}
        >
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: 16,
              marginBottom: 24,
            }}
          >
            <Space align="center">
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#1890ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                G
              </div>
              <Text style={{ color: "#fff" }}>
                Get found as the{" "}
                <span style={{ fontWeight: "bold", color: "#E5D4FF" }}>
                  top {category.toLowerCase()}
                </span>{" "}
                in {getZipCode()}
              </Text>
              <Button type="text" size="small" style={{ color: "#fff" }}>
                Learn More
              </Button>
            </Space>
          </div>

          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} sm={8} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  fontWeight: "bold",
                }}
              >
                {getInitials(name)}
              </div>
            </Col>

            <Col xs={24} sm={16}>
              <Title level={3} style={{ color: "#fff", marginBottom: 8 }}>
                {name}
              </Title>
              <Text style={{ color: "rgba(255,255,255,0.9)" }}>
                17 Years of Experience
              </Text>
              <div style={{ marginTop: 8 }}>
                <Space>
                  <BankOutlined />
                  <Text style={{ color: "#fff" }}>
                    {name} - {extractCity(location)},{" "}
                    {location.split(",")[1]?.trim()}
                  </Text>
                </Space>
              </div>

              <div style={{ marginTop: 12 }}>
                <Space>
                  <Tag color="blue">5.0</Tag>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFilled key={i} style={{ color: "#FFD700" }} />
                  ))}
                  <Text style={{ color: "#fff" }}>(651)</Text>
                </Space>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Description */}
        <Card bordered>
          <Paragraph>
            {name} has expertise in providing exceptional service in the{" "}
            {category.toLowerCase()} industry. With over 17 years of experience
            serving the {extractCity(location)} area, {name} is the area's first
            choice for quality service, delivering outstanding results to every
            client... <a style={{ color: "#1890ff" }}>Show More</a>
          </Paragraph>
        </Card>

        <Divider />

        {/* Emergency Services */}
        <Space>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#52c41a",
            }}
          />
          <Text strong>Emergency Services Offered</Text>
        </Space>

        <Divider />

        {/* Category Tags */}
        <Space wrap>
          <Tag color="blue">{category}</Tag>
          <Tag color="blue">Professional Services</Tag>
        </Space>

        <Divider />

        {/* Action Buttons */}
        <Space>
          <Button type="primary">Share Profile</Button>
          <Button>Refer</Button>
        </Space>

        <Divider />

        {/* Contact Info and Location */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card title="Contact Info" bordered>
              <Space direction="vertical">
                <a>
                  <PhoneOutlined /> (218) 632-3969
                </a>
                <a>
                  <GlobalOutlined /> Visit Website
                </a>
                <a>
                  <MailOutlined /> Send Email
                </a>
              </Space>
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card title="Location & Business Hours" bordered>
              <Space direction="vertical" size="middle">
                <Space align="start">
                  <EnvironmentOutlined />
                  <div>
                    <Text>
                      {extractCity(location)}, {location.split(",")[1]?.trim()}{" "}
                      {getZipCode()}
                    </Text>
                    <br />
                    <a style={{ color: "#1890ff" }}>Get Directions</a>
                  </div>
                </Space>

                <Space align="start">
                  <ClockCircleOutlined />
                  <div>
                    <Text>Monday - Friday: 8:00 AM - 6:00 PM</Text>
                    <br />
                    <Text>Saturday: 9:00 AM - 4:00 PM</Text>
                    <br />
                    <Text>Sunday: Closed</Text>
                  </div>
                </Space>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ProfilePreview;
