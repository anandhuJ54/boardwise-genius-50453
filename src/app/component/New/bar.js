"use client";
import React from "react";
import { Progress, Space, Typography } from "antd";

const { Text } = Typography;

const StepProgress = ({ getStepNumber }) => {
  const currentStep = getStepNumber();
  const totalSteps = 3;
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text type="secondary">
          Step {currentStep} of {totalSteps}
        </Text>
        <Text style={{ color: "#722ED1", fontWeight: 500 }}>{percent}%</Text>
      </div>

      <Progress
        percent={percent}
        showInfo={false}
        strokeColor={{
          from: "hsl(14, 100%, 60%)", // warm orange
          to: "hsl(280, 81%, 60%)", // brand purple
        }}
        trailColor="rgba(0,0,0,0.1)"
        strokeWidth={8}
      />
    </div>
  );
};

export default StepProgress;
