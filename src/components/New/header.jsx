import React from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: var(--background, #fff);
  border-bottom: 1px solid var(--border, #e0e0e0);
  padding: 1rem;
`;

const HeaderInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 640px) {
    gap: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  svg {
    display: block;
  }

  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 640px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  display: none;
  position: relative;

  @media (min-width: 640px) {
    display: block;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 14px;
  }

  .search-input {
    padding-left: 36px;
    height: 36px;
    border-radius: 6px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 640px) {
    gap: 0.75rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoWrapper>
          {/* Mobile logo */}
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            className="mobile"
          >
            <text
              x="0"
              y="24"
              fill="currentColor"
              fontWeight="bold"
              fontSize="20"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Xp.com
            </text>
          </svg>

          {/* Desktop logo */}
          <svg
            width="180"
            height="32"
            viewBox="0 0 180 32"
            fill="none"
            className="desktop"
          >
            <text
              x="0"
              y="24"
              fill="currentColor"
              fontWeight="bold"
              fontSize="24"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              experience.com
            </text>
          </svg>
        </LogoWrapper>

        <SearchWrapper>
          <SearchOutlined className="search-icon" />
          <Input
            placeholder="Search site..."
            className="search-input"
            variant="outlined"
          />
        </SearchWrapper>

        <RightSection>
          <Button type="text" size="middle">
            Login
          </Button>
        </RightSection>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
