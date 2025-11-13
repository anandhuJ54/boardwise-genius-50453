import React from "react";
import {
  EnvironmentOutlined,
  BankOutlined,
  MailOutlined,
  PhoneOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Card, Button, Tag } from "antd";

const ProfileCard = ({ profile, onClaim, compact = false }) => {
  if (compact) {
    return (
      <Card
        hoverable
        style={{
          transition: "all 0.3s",
          cursor: "pointer",
          borderRadius: 8,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, hsl(14,100%,60%), hsl(280,81%,60%))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              {profile?.avatar}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: 4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {profile?.name}
              </h3>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  marginBottom: 4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {profile?.business}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.75rem",
                  color: "#6b7280",
                }}
              >
                <EnvironmentOutlined />
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {profile?.location}
                </span>
              </div>
            </div>
          </div>

          <Button
            type="primary"
            block
            style={{
              background:
                "linear-gradient(90deg, hsl(14,100%,60%), hsl(280,81%,60%))",
              border: "none",
              color: "#fff",
              fontWeight: 600,
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClaim(profile);
            }}
          >
            Claim Profile <RightOutlined />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      hoverable
      style={{
        position: "relative",
        borderRadius: 8,
        cursor: "pointer",
        transition: "all 0.3s",
      }}
      onClick={() => onClaim(profile)}
    >
      {/* Claim Button (desktop) */}
      <div
        className="claim-desktop"
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          display: "none",
        }}
      >
        <Button
          type="primary"
          style={{
            background:
              "linear-gradient(90deg, hsl(14,100%,60%), hsl(280,81%,60%))",
            border: "none",
            color: "#fff",
            fontWeight: 500,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClaim(profile);
          }}
        >
          Claim this profile <RightOutlined />
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          paddingRight: "10rem",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, hsl(14,100%,60%), hsl(280,81%,60%))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.25rem",
            fontWeight: "bold",
          }}
        >
          {profile?.avatar}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
            {profile?.name}
          </h3>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            {profile?.business}
          </p>

          <div style={{ marginTop: 8, color: "#6b7280", fontSize: "0.875rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <BankOutlined />
              <span>{profile?.industry}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <EnvironmentOutlined />
              <span>{profile?.location}</span>
            </div>
          </div>

          <div style={{ marginTop: 8, color: "#6b7280", fontSize: "0.875rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MailOutlined />
              <span>{profile?.email}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <PhoneOutlined />
              <span>{profile?.phone}</span>
            </div>
          </div>

          <div style={{ marginTop: 8 }}>
            <Tag color="blue" style={{ fontSize: "0.75rem" }}>
              {profile?.industry}
            </Tag>
          </div>
        </div>
      </div>

      {/* Claim Button (mobile) */}
      <div
        className="claim-mobile"
        style={{
          marginTop: 16,
          display: "block",
        }}
      >
        <Button
          type="primary"
          block
          style={{
            background:
              "linear-gradient(90deg, hsl(14,100%,60%), hsl(280,81%,60%))",
            border: "none",
            color: "#fff",
            fontWeight: 500,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClaim(profile);
          }}
        >
          Claim this profile <RightOutlined />
        </Button>
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .claim-desktop {
            display: block !important;
          }
          .claim-mobile {
            display: none !important;
          }
        }
      `}</style>
    </Card>
  );
};

export default ProfileCard;
