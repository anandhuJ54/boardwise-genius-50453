
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react';

const MetricToImperial = () => {
  // Length conversion state
  const [cm, setCm] = useState<string>('');
  const [inches, setInches] = useState<string>('');
  const [meters, setMeters] = useState<string>('');
  const [feet, setFeet] = useState<string>('');
  
  // Area conversion state
  const [squareCm, setSquareCm] = useState<string>('');
  const [squareInches, setSquareInches] = useState<string>('');
  const [squareMeters, setSquareMeters] = useState<string>('');
  const [squareFeet, setSquareFeet] = useState<string>('');
  
  // Volume conversion state
  const [cubicCm, setCubicCm] = useState<string>('');
  const [cubicInches, setCubicInches] = useState<string>('');
  const [cubicMeters, setCubicMeters] = useState<string>('');
  const [cubicFeet, setCubicFeet] = useState<string>('');
  
  // Length conversion handlers
  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCm(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 cm = 0.393701 inches
      setInches((Number(value) * 0.393701).toFixed(4));
    } else {
      setInches('');
    }
  };
  
  const handleInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInches(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 inch = 2.54 cm
      setCm((Number(value) * 2.54).toFixed(4));
    } else {
      setCm('');
    }
  };
  
  const handleMetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMeters(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 meter = 3.28084 feet
      setFeet((Number(value) * 3.28084).toFixed(4));
    } else {
      setFeet('');
    }
  };
  
  const handleFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFeet(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 foot = 0.3048 meter
      setMeters((Number(value) * 0.3048).toFixed(4));
    } else {
      setMeters('');
    }
  };
  
  // Area conversion handlers
  const handleSquareCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareCm(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 cm² = 0.155 in²
      setSquareInches((Number(value) * 0.155).toFixed(4));
    } else {
      setSquareInches('');
    }
  };
  
  const handleSquareInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareInches(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 in² = 6.4516 cm²
      setSquareCm((Number(value) * 6.4516).toFixed(4));
    } else {
      setSquareCm('');
    }
  };
  
  const handleSquareMetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareMeters(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 m² = 10.7639 ft²
      setSquareFeet((Number(value) * 10.7639).toFixed(4));
    } else {
      setSquareFeet('');
    }
  };
  
  const handleSquareFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareFeet(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 ft² = 0.092903 m²
      setSquareMeters((Number(value) * 0.092903).toFixed(4));
    } else {
      setSquareMeters('');
    }
  };
  
  // Volume conversion handlers
  const handleCubicCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCubicCm(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 cm³ = 0.0610237 in³
      setCubicInches((Number(value) * 0.0610237).toFixed(4));
    } else {
      setCubicInches('');
    }
  };
  
  const handleCubicInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCubicInches(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 in³ = 16.3871 cm³
      setCubicCm((Number(value) * 16.3871).toFixed(4));
    } else {
      setCubicCm('');
    }
  };
  
  const handleCubicMetersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCubicMeters(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 m³ = 35.3147 ft³
      setCubicFeet((Number(value) * 35.3147).toFixed(4));
    } else {
      setCubicFeet('');
    }
  };
  
  const handleCubicFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCubicFeet(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 ft³ = 0.0283168 m³
      setCubicMeters((Number(value) * 0.0283168).toFixed(4));
    } else {
      setCubicMeters('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Metric to Imperial Calculator | BoardCalculate</title>
        <meta name="description" content="Convert between metric and imperial measurements for woodworking projects with our easy-to-use calculator." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Metric to Imperial Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Easily convert between metric and imperial units for your woodworking projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Length Conversions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowUpDown className="mr-2 h-5 w-5 text-primary" />
                Length Conversion
              </CardTitle>
              <CardDescription>Convert between centimeters, inches, meters, and feet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cm" className="text-sm font-medium">Centimeters (cm)</Label>
                    <Input
                      id="cm"
                      type="number"
                      placeholder="Enter cm"
                      value={cm}
                      onChange={handleCmChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="inches" className="text-sm font-medium">Inches (in)</Label>
                    <Input
                      id="inches"
                      type="number"
                      placeholder="Enter inches"
                      value={inches}
                      onChange={handleInchesChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="meters" className="text-sm font-medium">Meters (m)</Label>
                    <Input
                      id="meters"
                      type="number"
                      placeholder="Enter meters"
                      value={meters}
                      onChange={handleMetersChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="feet" className="text-sm font-medium">Feet (ft)</Label>
                    <Input
                      id="feet"
                      type="number"
                      placeholder="Enter feet"
                      value={feet}
                      onChange={handleFeetChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Area Conversions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowUp className="mr-2 h-5 w-5 text-primary" />
                Area Conversion
              </CardTitle>
              <CardDescription>Convert between square centimeters, square inches, square meters, and square feet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="square-cm" className="text-sm font-medium">Square cm (cm²)</Label>
                    <Input
                      id="square-cm"
                      type="number"
                      placeholder="Enter cm²"
                      value={squareCm}
                      onChange={handleSquareCmChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="square-inches" className="text-sm font-medium">Square in (in²)</Label>
                    <Input
                      id="square-inches"
                      type="number"
                      placeholder="Enter in²"
                      value={squareInches}
                      onChange={handleSquareInchesChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="square-meters" className="text-sm font-medium">Square m (m²)</Label>
                    <Input
                      id="square-meters"
                      type="number"
                      placeholder="Enter m²"
                      value={squareMeters}
                      onChange={handleSquareMetersChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="square-feet" className="text-sm font-medium">Square ft (ft²)</Label>
                    <Input
                      id="square-feet"
                      type="number"
                      placeholder="Enter ft²"
                      value={squareFeet}
                      onChange={handleSquareFeetChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Volume Conversions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDown className="mr-2 h-5 w-5 text-primary" />
                Volume Conversion
              </CardTitle>
              <CardDescription>Convert between cubic centimeters, cubic inches, cubic meters, and cubic feet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cubic-cm" className="text-sm font-medium">Cubic cm (cm³)</Label>
                    <Input
                      id="cubic-cm"
                      type="number"
                      placeholder="Enter cm³"
                      value={cubicCm}
                      onChange={handleCubicCmChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cubic-inches" className="text-sm font-medium">Cubic in (in³)</Label>
                    <Input
                      id="cubic-inches"
                      type="number"
                      placeholder="Enter in³"
                      value={cubicInches}
                      onChange={handleCubicInchesChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cubic-meters" className="text-sm font-medium">Cubic m (m³)</Label>
                    <Input
                      id="cubic-meters"
                      type="number"
                      placeholder="Enter m³"
                      value={cubicMeters}
                      onChange={handleCubicMetersChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cubic-feet" className="text-sm font-medium">Cubic ft (ft³)</Label>
                    <Input
                      id="cubic-feet"
                      type="number"
                      placeholder="Enter ft³"
                      value={cubicFeet}
                      onChange={handleCubicFeetChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Conversion Formulas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Length</h3>
              <ul className="space-y-2 text-gray-700">
                <li>1 inch = 2.54 centimeters</li>
                <li>1 foot = 0.3048 meters</li>
                <li>1 yard = 0.9144 meters</li>
                <li>1 mile = 1.60934 kilometers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Area</h3>
              <ul className="space-y-2 text-gray-700">
                <li>1 square inch = 6.4516 square cm</li>
                <li>1 square foot = 0.092903 square meters</li>
                <li>1 square yard = 0.836127 square meters</li>
                <li>1 acre = 4,046.86 square meters</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Volume</h3>
              <ul className="space-y-2 text-gray-700">
                <li>1 cubic inch = 16.3871 cubic cm</li>
                <li>1 cubic foot = 0.0283168 cubic meters</li>
                <li>1 cubic yard = 0.764555 cubic meters</li>
                <li>1 gallon (US) = 3.78541 liters</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MetricToImperial;
