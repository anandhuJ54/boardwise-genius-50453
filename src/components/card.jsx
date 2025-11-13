import React, { useState } from "react";
import {
  SearchOutlined,
  ArrowRightOutlined,
  EnvironmentOutlined,
  RightOutlined,
  LeftOutlined,
  AppstoreOutlined,
  HomeOutlined,
  BookOutlined,
  HeartOutlined,
  CoffeeOutlined,
  EllipsisOutlined,
  StarFilled,
  CheckCircleFilled,
  DownOutlined,
  PlayCircleFilled,
  HighlightOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Card,
  Modal,
  Typography,
  Avatar,
  Tag,
  Pagination,
  Space,
} from "antd";
import ProfileCard from "./New/ProfileCard";
import { profiles } from "./New/data";
import SearchRankScore from "./New/search";
import ProfilePreview from "./New/preview";
import StepProgress from "./New/bar";
import Header from "./New/header";

const { Title, Text, Paragraph } = Typography;

const INDUSTRIES = [
  {
    id: "professional",
    label: "Professional Services",
    icon: AppstoreOutlined,
    description: "Mortgage, legal, financial, real estate and insurance",
  },
  {
    id: "home",
    label: "Home Services",
    icon: HomeOutlined,
    description: "Contractors, repair services, and home improvement",
  },
  {
    id: "training",
    label: "Coaching & Training",
    icon: BookOutlined,
    description: "Professional coaching and training services",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartOutlined,
    description: "Medical professionals, clinics, and wellness services",
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: CoffeeOutlined,
    description: "Dining establishments and food service businesses",
  },
  {
    id: "other",
    label: "Other",
    icon: EllipsisOutlined,
    description: "All other service categories",
  },
];

const ALL_CATEGORIES = [
  "Insurance Agent",
  "Insurance Broker",
  "Escrow Service",
  "Lawyer",
  "Mortgage Broker",
  "Mortgage Loan Officer",
  "Mortgage Lender",
  "Wholesale Account Executive",
  "Real Estate Agent",
  "Accounting",
  "Financial Consultant",
  "Financial Advisor",
  "Credit Union",
  "Electrician",
  "Plumber",
  "Handyman",
  "HVAC Services",
  "Locksmith",
  "Appliance Repair Service",
  "Window Installation Service",
  "Security System Installation Service",
  "Fingerprint Services",
  "Landscaping",
  "Inspections",
  "Environments",
  "Contractor",
  "Installations",
  "Business Coach",
  "Life Coach",
  "Career Coach",
  "Executive Coach",
  "Fitness Trainer",
  "Doctor",
  "Dentist",
  "Chiropractor",
  "Physical Therapist",
  "Mental Health Counselor",
  "Veterinarian",
  "Fine Dining",
  "Casual Dining",
  "Fast Casual",
  "Café",
  "Bar & Grill",
  "Food Truck",
  "Other",
];

const US_CITIES = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Nashville, TN",
  "Detroit, MI",
  "Oklahoma City, OK",
  "Portland, OR",
  "Las Vegas, NV",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Mesa, AZ",
  "Sacramento, CA",
  "Atlanta, GA",
  "Kansas City, MO",
  "Colorado Springs, CO",
  "Raleigh, NC",
  "Miami, FL",
  "Omaha, NE",
  "Long Beach, CA",
  "Virginia Beach, VA",
  "Oakland, CA",
  "Minneapolis, MN",
  "Tulsa, OK",
  "Tampa, FL",
  "Arlington, TX",
  "New Orleans, LA",
  "Wichita, KS",
  "Cleveland, OH",
  "Bakersfield, CA",
  "Aurora, CO",
  "Anaheim, CA",
  "Honolulu, HI",
  "Santa Ana, CA",
  "Riverside, CA",
  "Corpus Christi, TX",
  "Lexington, KY",
  "Henderson, NV",
  "Stockton, CA",
  "Saint Paul, MN",
  "Cincinnati, OH",
  "St. Louis, MO",
  "Pittsburgh, PA",
  "Greensboro, NC",
  "Lincoln, NE",
  "Anchorage, AK",
  "Plano, TX",
  "Orlando, FL",
  "Irvine, CA",
  "Newark, NJ",
  "Durham, NC",
  "Chula Vista, CA",
  "Toledo, OH",
  "Fort Wayne, IN",
  "St. Petersburg, FL",
  "Laredo, TX",
  "Jersey City, NJ",
  "Chandler, AZ",
  "Madison, WI",
  "Lubbock, TX",
  "Scottsdale, AZ",
  "Reno, NV",
  "Buffalo, NY",
  "Gilbert, AZ",
  "Glendale, AZ",
  "North Las Vegas, NV",
  "Winston-Salem, NC",
  "Chesapeake, VA",
  "Norfolk, VA",
  "Fremont, CA",
  "Garland, TX",
  "Irving, TX",
  "Hialeah, FL",
  "Richmond, VA",
  "Boise, ID",
  "Spokane, WA",
  "Baton Rouge, LA",
  "Tacoma, WA",
  "San Bernardino, CA",
  "Modesto, CA",
  "Fontana, CA",
  "Des Moines, IA",
  "Moreno Valley, CA",
  "Santa Clarita, CA",
  "Fayetteville, NC",
  "Birmingham, AL",
  "Oxnard, CA",
  "Rochester, NY",
  "Port St. Lucie, FL",
  "Grand Rapids, MI",
  "Huntsville, AL",
  "Salt Lake City, UT",
  "Frisco, TX",
  "Yonkers, NY",
  "Amarillo, TX",
  "Glendale, CA",
  "Huntington Beach, CA",
  "McKinney, TX",
  "Montgomery, AL",
  "Augusta, GA",
  "Aurora, IL",
  "Akron, OH",
  "Little Rock, AR",
  "Tempe, AZ",
  "Columbus, GA",
  "Overland Park, KS",
  "Grand Prairie, TX",
  "Tallahassee, FL",
  "Cape Coral, FL",
  "Mobile, AL",
  "Knoxville, TN",
  "Shreveport, LA",
  "Worcester, MA",
  "Ontario, CA",
  "Vancouver, WA",
  "Sioux Falls, SD",
  "Chattanooga, TN",
  "Brownsville, TX",
  "Fort Lauderdale, FL",
  "Providence, RI",
  "Newport News, VA",
  "Rancho Cucamonga, CA",
  "Santa Rosa, CA",
  "Peoria, AZ",
  "Oceanside, CA",
  "Elk Grove, CA",
  "Salem, OR",
  "Pembroke Pines, FL",
  "Eugene, OR",
  "Garden Grove, CA",
  "Cary, NC",
  "Fort Collins, CO",
  "Corona, CA",
  "Springfield, MO",
  "Jackson, MS",
  "Alexandria, VA",
  "Hayward, CA",
  "Clarksville, TN",
  "Lakewood, CO",
  "Lancaster, CA",
  "Salinas, CA",
  "Palmdale, CA",
  "Hollywood, FL",
  "Springfield, MA",
  "Macon, GA",
  "Kansas City, KS",
  "Sunnyvale, CA",
  "Pomona, CA",
  "Killeen, TX",
  "Escondido, CA",
  "Pasadena, TX",
  "Naperville, IL",
  "Bellevue, WA",
  "Joliet, IL",
  "Murfreesboro, TN",
  "Midland, TX",
  "Rockford, IL",
  "Paterson, NJ",
  "Savannah, GA",
  "Bridgeport, CT",
  "Torrance, CA",
  "McAllen, TX",
  "Syracuse, NY",
  "Surprise, AZ",
  "Denton, TX",
  "Roseville, CA",
  "Thornton, CO",
  "Miramar, FL",
  "Pasadena, CA",
  "Mesquite, TX",
  "Olathe, KS",
  "Dayton, OH",
  "Carrollton, TX",
  "Waco, TX",
  "Orange, CA",
  "Fullerton, CA",
  "Charleston, SC",
  "West Valley City, UT",
  "Visalia, CA",
  "Hampton, VA",
  "Gainesville, FL",
  "Warren, MI",
  "Coral Springs, FL",
  "Cedar Rapids, IA",
  "Round Rock, TX",
  "Sterling Heights, MI",
  "Kent, WA",
  "Columbia, SC",
  "Santa Clara, CA",
  "New Haven, CT",
  "Stamford, CT",
  "Concord, CA",
  "Elizabeth, NJ",
  "Athens, GA",
  "Thousand Oaks, CA",
  "Lafayette, LA",
  "Simi Valley, CA",
  "Topeka, KS",
  "Norman, OK",
  "Fargo, ND",
  "Wilmington, NC",
  "Abilene, TX",
  "Odessa, TX",
  "Columbia, MO",
  "Pearland, TX",
  "Victorville, CA",
  "Hartford, CT",
  "Vallejo, CA",
  "Allentown, PA",
  "Berkeley, CA",
  "Richardson, TX",
  "Arvada, CO",
  "Ann Arbor, MI",
  "Rochester, MN",
  "Cambridge, MA",
  "Sugar Land, TX",
  "Lansing, MI",
  "Evansville, IN",
  "College Station, TX",
  "Fairfield, CA",
  "Clearwater, FL",
  "Beaumont, TX",
  "Independence, MO",
  "Provo, UT",
  "West Jordan, UT",
  "Murrieta, CA",
  "Palm Bay, FL",
];

const profilesPerPage = 3;

const SearchLanding = ({ onClaimProfile, onCreateNew }) => {
  const [currentStep, setCurrentStep] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showNameSuggestions, setShowNameSuggestions] = useState(false);
  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [showProfilePreview, setShowProfilePreview] = useState(false);

  const getInitials = (name) => {
    if (!name.trim()) return "AE";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0).toUpperCase() +
      parts[parts.length - 1].charAt(0).toUpperCase()
    );
  };

  const getDisplayName = () => searchName.trim() || "Amber Ernst";
  const getDisplayLocation = () => location.trim() || "Denver, CO";
  const getSearchQuery = () => {
    const locationText = location.trim() || "Denver, CO";
    return `Top Professional in ${locationText}`;
  };

  const handleNameChange = (value) => {
    setSearchName(value);
    if (value.trim().length >= 2) {
      const filtered = profiles
        .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setNameSuggestions(filtered);
      setShowNameSuggestions(true);
    } else {
      setNameSuggestions([]);
      setShowNameSuggestions(false);
    }
  };

  const selectProfile = (profile) => {
    setSearchName(profile.name);
    setShowNameSuggestions(false);
  };

  const handleNameSubmit = () => {
    setShowNameSuggestions(false);
    if (searchName.trim()) {
      setCurrentStep("location");
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
    if (category !== "Real Estate Agent") {
      setBusinessName("");
    }
    setCurrentStep("location");
  };

  const handleLocationChange = (value) => {
    setLocation(value);
    if (value.trim()) {
      const filtered = US_CITIES.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setLocationSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectCity = (city) => {
    setLocation(city);
    setShowSuggestions(false);
  };

  const handleLocationSubmit = () => {
    if (location.trim()) {
      setCurrentStep("results");
      setCurrentPage(1);
    }
  };

  const handleBackToName = () => {
    setCurrentStep("name");
  };
  const handleBackToLocation = () => {
    setCurrentStep("location");
  };

  const nameFilteredProfiles = searchName.trim()
    ? profiles.filter((p) =>
        p.name.toLowerCase().includes(searchName.toLowerCase())
      )
    : profiles;
  const filteredProfiles = location.trim()
    ? nameFilteredProfiles.filter((p) =>
        p.location.toLowerCase().includes(location.toLowerCase())
      )
    : nameFilteredProfiles;

  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
  const startIndex = (currentPage - 1) * profilesPerPage;
  const endIndex = startIndex + profilesPerPage;
  const currentProfiles = filteredProfiles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getStepNumber = () => {
    const map = { name: 1, location: 2, results: 3 };
    return map[currentStep] || 1;
  };

  return (
    <>
      <Header />
      {/* Top Banner */}
      <div
        style={{
          width: "100%",
          background: "hsl(0,0%,23%)",
          padding: "12px 16px",
          textAlign: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}>
          See how thousands of professionals rank #1 on Google
        </Text>
        <Button
          onClick={() => setShowHowItWorks(true)}
          size="small"
          style={{
            marginTop: 8,
            background:
              "linear-gradient(90deg, hsl(14,100%,60%), hsl(280,81%,60%))",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          <Space align="center">
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DownOutlined style={{ color: "#fff", fontSize: 14 }} />
            </div>
            <span>See How It Works</span>
          </Space>
        </Button>
      </div>

      {/* How It Works Modal */}
      <Modal
        visible={showHowItWorks}
        onCancel={() => setShowHowItWorks(false)}
        footer={null}
        width="80%"
        style={{ maxWidth: 800 }}
      >
        <div style={{ padding: 24, textAlign: "center" }}>
          <Title level={2}>Rank #1 on Google in your location</Title>
          <Paragraph>
            Join 8 million professionals getting more clients
          </Paragraph>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gap: 16,
            }}
          >
            {[1, 2, 3].map((step) => (
              <div key={step} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "linear-gradient(90deg,#5B8DEF,#A78BFA)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 8px",
                  }}
                >
                  {step}
                </div>
                <Title level={5}>
                  {step === 1
                    ? "Find Your Profile"
                    : step === 2
                    ? "Claim & Verify"
                    : "Rank Higher"}
                </Title>
                <Text type="secondary">
                  {step === 1
                    ? "Search our database of millions of professional profiles to find yours"
                    : step === 2
                    ? "Take ownership of your profile and verify your identity"
                    : "Get discovered by more clients and grow your business"}
                </Text>
              </div>
            ))}
          </div>

          {/* Video / CTA */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
              marginTop: 24,
              background: "linear-gradient(135deg,#6B5B95,#8B5A9D,#5B8DEF)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "#4A90E2",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                /* play video logic */
              }}
            >
              <PlayCircleFilled style={{ fontSize: 32, color: "#fff" }} />
            </button>
          </div>

          <Button
            onClick={() => setShowHowItWorks(false)}
            style={{ marginTop: 24 }}
          >
            Back <RightOutlined />
          </Button>
        </div>
      </Modal>

      <div style={{ maxWidth: 800, margin: "32px auto", padding: "0 16px" }}>
        {currentStep === "name" && (
          <div>
            <StepProgress getStepNumber={getStepNumber} />
            <div style={{ margin: "16px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Input
                  placeholder="Enter your name here"
                  value={searchName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onPressEnter={handleNameSubmit}
                  prefix={<SearchOutlined />}
                  style={{ paddingRight: 48 }}
                />
                <Button
                  type="primary"
                  disabled={!searchName.trim()}
                  onClick={handleNameSubmit}
                >
                  <ArrowRightOutlined />
                </Button>
              </div>

              {showNameSuggestions && nameSuggestions.length > 0 && (
                <Card style={{ marginTop: 16 }}>
                  {nameSuggestions.map((p) => (
                    <div
                      key={p.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: 12,
                        borderBottom: "1px solid #f0f0f0",
                        cursor: "pointer",
                      }}
                      onClick={() => selectProfile(p)}
                    >
                      <Avatar
                        style={{
                          background:
                            "linear-gradient(135deg, hsl(14,100%,60%), hsl(280,81%,60%))",
                          color: "#fff",
                        }}
                      >
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.name}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        ) : (
                          getInitials(p.name)
                        )}
                      </Avatar>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Title level={5} style={{ margin: 0 }}>
                          {p.name}
                        </Title>
                        <Text type="secondary" ellipsis>
                          {p.industry} · {p.location}
                        </Text>
                      </div>
                      <Button
                        type="primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          onClaimProfile(p);
                        }}
                      >
                        Claim
                      </Button>
                    </div>
                  ))}
                </Card>
              )}
            </div>
          </div>
        )}

        {currentStep === "location" && (
          <div>
            <StepProgress getStepNumber={getStepNumber} />
            <div style={{ margin: "16px 0" }}>
              <Button
                type="link"
                onClick={handleBackToName}
                icon={<LeftOutlined />}
              >
                Back
              </Button>
            </div>

            <Title level={3}>
              {nameFilteredProfiles.length > 5
                ? "Too many profiles match your search"
                : "Where are you located?"}
            </Title>
            <Text type="secondary">
              {nameFilteredProfiles.length > 5
                ? "Add your location to narrow the results"
                : "We'll filter our search for profiles in your area"}
            </Text>

            <div style={{ marginTop: 16 }}>
              <Input
                placeholder="Enter city & state"
                value={location}
                onChange={(e) => handleLocationChange(e.target.value)}
                onPressEnter={handleLocationSubmit}
                prefix={<EnvironmentOutlined />}
                style={{ paddingRight: 48 }}
              />
              <Button
                type="primary"
                disabled={!location.trim()}
                onClick={handleLocationSubmit}
                style={{ marginTop: 12 }}
              >
                <ArrowRightOutlined />
              </Button>
              {showSuggestions && locationSuggestions.length > 0 && (
                <Card style={{ marginTop: 12 }}>
                  {locationSuggestions.map((city) => (
                    <div
                      key={city}
                      style={{
                        padding: 8,
                        borderBottom: "1px solid #f0f0f0",
                        cursor: "pointer",
                      }}
                      onClick={() => selectCity(city)}
                    >
                      {city}
                    </div>
                  ))}
                </Card>
              )}
            </div>
          </div>
        )}

        {currentStep === "results" && (
          <div>
            <StepProgress getStepNumber={getStepNumber} />
            <Title level={3} style={{ marginTop: 16 }}>
              {filteredProfiles.length > 0
                ? "We found some matches!"
                : "Let's Activate A New Profile For You"}
            </Title>
            {filteredProfiles.length === 0 ? (
              <div>
                <Card style={{ marginTop: 16 }}>
                  <Text type="secondary">{getSearchQuery()}</Text>
                </Card>
                <Button
                  type="primary"
                  onClick={() =>
                    onCreateNew({
                      name: searchName,
                      category: selectedCategory,
                      location,
                      businessName,
                    })
                  }
                  style={{ marginTop: 16 }}
                >
                  Create This Profile Now <ArrowRightOutlined />
                </Button>
              </div>
            ) : (
              <>
                {currentProfiles.map((p) => (
                  <ProfileCard
                    key={p.id}
                    profile={p}
                    onClaim={onClaimProfile}
                  />
                ))}
                {totalPages > 1 && (
                  <Pagination
                    current={currentPage}
                    pageSize={profilesPerPage}
                    total={filteredProfiles.length}
                    onChange={handlePageChange}
                    style={{ marginTop: 16, textAlign: "center" }}
                  />
                )}
                <div style={{ textAlign: "center", marginTop: 24 }}>
                  <Text type="secondary">
                    Don't see your profile?{" "}
                    <Button
                      type="link"
                      onClick={() =>
                        onCreateNew({
                          name: searchName,
                          location,
                        })
                      }
                    >
                      Create New Profile
                    </Button>
                  </Text>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <ProfilePreview
        open={showProfilePreview}
        onOpenChange={setShowProfilePreview}
        name={searchName || "Amber Ernst"}
        location={location || "Denver, CO"}
        category={selectedCategory || "Professional Services"}
      />
    </>
  );
};

export default SearchLanding;
