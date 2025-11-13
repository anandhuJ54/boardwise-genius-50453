
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/Layout";
import { Section, H1, H2, P } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { generateCalculatorSchema, generateFaqSchema } from "@/utils/seoUtils";
import { Ruler, Circle } from "lucide-react";

const SegmentCalculator = () => {
  const [radius, setRadius] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [results, setResults] = useState<{
    area: number | null;
    perimeter: number | null;
    chordLength: number | null;
    centralAngle: number | null;
  }>({
    area: null,
    perimeter: null,
    chordLength: null,
    centralAngle: null,
  });
  const [error, setError] = useState<string | null>(null);

  const calculateSegment = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);

    if (isNaN(r) || r <= 0 || isNaN(h) || h <= 0 || h > 2 * r) {
      setError("Please enter valid values. Height must be less than the diameter.");
      setResults({ area: null, perimeter: null, chordLength: null, centralAngle: null });
      return;
    }

    setError(null);

    // Calculate chord length (c)
    const c = 2 * Math.sqrt(h * (2 * r - h));

    // Calculate central angle in radians
    const centralAngleRad = 2 * Math.acos(1 - h / r);
    
    // Convert to degrees
    const centralAngleDeg = centralAngleRad * (180 / Math.PI);

    // Calculate segment area
    const area = 0.5 * r * r * (centralAngleRad - Math.sin(centralAngleRad));

    // Calculate segment perimeter (arc length + chord)
    const arcLength = r * centralAngleRad;
    const perimeter = arcLength + c;

    setResults({
      area: area,
      perimeter: perimeter,
      chordLength: c,
      centralAngle: centralAngleDeg,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateSegment();
  };

  // SEO Data
  const pageTitle = "Circle Segment Calculator | BoardCalculate";
  const pageDescription = "Calculate the area, perimeter, chord length and central angle of a circle segment. Free online calculator for woodworking and construction projects.";
  
  const faqs = [
    {
      question: "What is a circle segment?",
      answer: "A circle segment is the region of a circle bounded by a chord and the arc subtended by the chord. It's a portion of a circular disk enclosed by an arc and a chord."
    },
    {
      question: "How do you calculate the area of a segment?",
      answer: "The area of a segment can be calculated using the formula: Area = (r² × θ - r² × sin θ)/2, where r is the radius, and θ is the central angle in radians."
    },
    {
      question: "What is the difference between a sector and a segment?",
      answer: "A sector is a portion of a circle enclosed by two radii and an arc, resembling a pizza slice. A segment is a portion of a circle enclosed by an arc and a chord."
    },
    {
      question: "How is the segment calculator useful in woodworking?",
      answer: "In woodworking, the segment calculator helps when creating curved pieces, calculating materials needed for arched designs, or determining dimensions for circular segment cuts on panels or boards."
    }
  ];

  const schema = {
    calculator: generateCalculatorSchema(
      "Circle Segment Calculator",
      "Calculate the area, perimeter, and other properties of circle segments for woodworking and construction projects."
    ),
    faq: generateFaqSchema(faqs)
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://boardcalculate.com/segment-calculator" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <Layout>
        <div className="pt-20 pb-16 md:pb-24">
          <Section className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 mb-4">
                <Circle className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-500">Circle Calculator</span>
              </div>

              <H1 className="mb-6">Circle Segment Calculator</H1>
              
              <P className="text-gray-600 mb-8">
                Calculate the properties of a circle segment including area, perimeter, chord length, 
                and central angle. Enter the radius of the circle and the height of the segment below.
              </P>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6 shadow-md">
                  <div className="mb-4">
                    <H2 className="text-xl border-none pb-0">Enter Dimensions</H2>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="radius">Circle Radius</Label>
                        <div className="mt-1 relative">
                          <Input
                            id="radius"
                            type="number"
                            step="0.01"
                            min="0.01"
                            placeholder="Enter radius"
                            value={radius}
                            onChange={(e) => setRadius(e.target.value)}
                            className="pr-12"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                            <span>units</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="height">Segment Height</Label>
                        <div className="mt-1 relative">
                          <Input
                            id="height"
                            type="number"
                            step="0.01"
                            min="0.01"
                            placeholder="Enter height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="pr-12"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                            <span>units</span>
                          </div>
                        </div>
                      </div>

                      {error && <div className="text-red-500 text-sm">{error}</div>}

                      <Button type="submit" className="w-full">Calculate Segment Properties</Button>
                    </div>
                  </form>
                </Card>

                <Card className="p-6 shadow-md">
                  <div className="mb-4">
                    <H2 className="text-xl border-none pb-0">Results</H2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-gray-600">Segment Area</Label>
                      <div className="p-3 bg-gray-50 rounded-md mt-1">
                        <span className="font-medium">
                          {results.area !== null ? `${results.area.toFixed(4)} square units` : "—"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-600">Perimeter</Label>
                      <div className="p-3 bg-gray-50 rounded-md mt-1">
                        <span className="font-medium">
                          {results.perimeter !== null ? `${results.perimeter.toFixed(4)} units` : "—"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-600">Chord Length</Label>
                      <div className="p-3 bg-gray-50 rounded-md mt-1">
                        <span className="font-medium">
                          {results.chordLength !== null ? `${results.chordLength.toFixed(4)} units` : "—"}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label className="text-gray-600">Central Angle</Label>
                      <div className="p-3 bg-gray-50 rounded-md mt-1">
                        <span className="font-medium">
                          {results.centralAngle !== null ? `${results.centralAngle.toFixed(2)}°` : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mb-12">
                <H2>Understanding Circle Segments</H2>
                <P>
                  A circle segment is a region of a circle that is bounded by a chord and the arc subtended by 
                  the chord. This calculator helps you determine the geometric properties of a circle segment 
                  when you know the radius of the circle and the height of the segment.
                </P>
                
                <div className="mt-6">
                  <H2 className="text-xl mb-2">How to Use This Calculator</H2>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Enter the radius of the circle in your preferred units.</li>
                    <li>Enter the height of the segment (the perpendicular distance from the chord to the arc).</li>
                    <li>Click "Calculate" to get the segment's properties.</li>
                    <li>The calculator will display the area, perimeter (arc length + chord length), chord length, and central angle.</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <H2 className="text-xl border-none pb-0 mb-4">Formulas Used</H2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Chord Length (c):</p>
                    <p className="text-gray-700">c = 2 × √[h × (2r - h)]</p>
                  </div>
                  <div>
                    <p className="font-semibold">Central Angle (θ):</p>
                    <p className="text-gray-700">θ = 2 × arccos(1 - h/r)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Area of Segment:</p>
                    <p className="text-gray-700">Area = (r² × θ - r² × sin θ)/2</p>
                    <p className="text-gray-600 text-sm mt-1">(where θ is in radians)</p>
                  </div>
                  <div>
                    <p className="font-semibold">Perimeter of Segment:</p>
                    <p className="text-gray-700">Perimeter = r × θ + c</p>
                    <p className="text-gray-600 text-sm mt-1">(arc length + chord length)</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default SegmentCalculator;
