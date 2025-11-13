import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import { AimOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const SearchRankScore = () => {
  const [score, setScore] = useState(0);
  const targetScore = 650;
  const maxScore = 850;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetScore / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        setScore(targetScore);
        clearInterval(timer);
      } else {
        setScore(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const percentage = (score / maxScore) * 100;
  const rotation = (percentage / 100) * 180;

  return (
    <Card
      bordered={false}
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Gauge */}
      <div style={{ position: "relative", width: 120, height: 80 }}>
        <svg
          viewBox="0 0 200 120"
          style={{ width: "100%", height: "100%" }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <defs>
            <linearGradient
              id="scoreGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="hsl(14, 100%, 55%)" />
              <stop offset="50%" stopColor="hsl(45, 100%, 60%)" />
              <stop offset="100%" stopColor="hsl(120, 60%, 50%)" />
            </linearGradient>
          </defs>

          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * percentage) / 100}
            style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
          />

          {/* Pointer */}
          <g transform={`rotate(${rotation - 90} 100 100)`}>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transition: "transform 0.5s ease-out" }}
            />
            <circle cx="100" cy="100" r="4" fill="#000" />
          </g>
        </svg>

        <Text
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            fontSize: 10,
            color: "#999",
          }}
        >
          0
        </Text>
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: 10,
            color: "#999",
          }}
        >
          {maxScore}
        </Text>
      </div>

      {/* Score display */}
      <div style={{ marginTop: -8 }}>
        <Title
          level={3}
          style={{
            margin: 0,
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}
        >
          {score}
        </Title>
        <Text strong style={{ fontSize: 10, color: "#555" }}>
          Search Rank Score®
        </Text>
      </div>

      {/* Optional Icon Accent */}
      <div style={{ marginTop: 8, color: "#1890ff" }}>
        <AimOutlined />
      </div>
    </Card>
  );
};

export default SearchRankScore;
