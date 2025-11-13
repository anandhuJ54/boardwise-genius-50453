
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, ArrowRight } from 'lucide-react';

const LinearToBoardFoot = () => {
  const [width, setWidth] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');
  const [linearFeet, setLinearFeet] = useState<string>('');
  const [unit, setUnit] = useState<string>('inches');
  const [boardFeet, setBoardFeet] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const isValidNumber = (value: string) => {
    return !isNaN(parseFloat(value)) && parseFloat(value) > 0;
  };
  
  const handleCalculate = () => {
    setError(null);
    
    // Validation
    if (!isValidNumber(width) || !isValidNumber(thickness) || !isValidNumber(linearFeet)) {
      setError('Please enter valid positive numbers for all dimensions');
      setBoardFeet(null);
      return;
    }
    
    const widthVal = parseFloat(width);
    const thicknessVal = parseFloat(thickness);
    const linearFeetVal = parseFloat(linearFeet);
    
    // Convert to inches if needed
    const widthInInches = unit === 'inches' ? widthVal : widthVal * 0.3937; // cm to inches
    const thicknessInInches = unit === 'inches' ? thicknessVal : thicknessVal * 0.3937; // cm to inches
    
    // Board feet formula: (thickness in inches × width in inches × length in feet) ÷ 12
    const result = (thicknessInInches * widthInInches * linearFeetVal) / 12;
    
    setBoardFeet(parseFloat(result.toFixed(3)));
  };
  
  const clearValues = () => {
    setWidth('');
    setThickness('');
    setLinearFeet('');
    setBoardFeet(null);
    setError(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Linear Foot to Board Foot Calculator | BoardCalculate</title>
        <meta 
          name="description" 
          content="Convert linear feet to board feet with our easy-to-use calculator. Perfect for woodworking and lumber purchasing." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Linear Foot to Board Foot Calculator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convert linear feet (length) measurements to board feet based on the width and thickness of your lumber.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-subtle border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 text-primary mr-2" />
                  Calculator
                </CardTitle>
                <CardDescription>Enter your lumber dimensions to convert linear feet to board feet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="unit">Unit System</Label>
                    <Select
                      value={unit}
                      onValueChange={value => setUnit(value)}
                    >
                      <SelectTrigger id="unit" className="mt-1.5">
                        <SelectValue placeholder="Select unit system" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inches">Imperial (inches)</SelectItem>
                        <SelectItem value="cm">Metric (cm)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="thickness">Thickness ({unit})</Label>
                      <Input 
                        id="thickness" 
                        type="number" 
                        placeholder={unit === 'inches' ? "e.g., 1" : "e.g., 2.54"} 
                        value={thickness} 
                        onChange={(e) => setThickness(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="width">Width ({unit})</Label>
                      <Input 
                        id="width" 
                        type="number" 
                        placeholder={unit === 'inches' ? "e.g., 6" : "e.g., 15.24"} 
                        value={width} 
                        onChange={(e) => setWidth(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="linear-feet">Linear Feet</Label>
                    <Input 
                      id="linear-feet" 
                      type="number" 
                      placeholder="e.g., 8" 
                      value={linearFeet} 
                      onChange={(e) => setLinearFeet(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={clearValues}>Clear</Button>
                <Button onClick={handleCalculate}>Calculate</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/5 to-amber-light/20 shadow-subtle border border-gray-100">
              <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Your calculated board feet measurement</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center min-h-[240px]">
                {boardFeet !== null ? (
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-4">
                      {boardFeet} BF
                    </div>
                    <p className="text-gray-600">
                      A board with dimensions {thickness} × {width} {unit} × {linearFeet} ft 
                      equals {boardFeet} board feet.
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <p>Enter your dimensions and click Calculate to see the result</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 w-full text-center">
                  Board feet = (thickness × width × length) ÷ 12
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100 mb-16">
            <h2 className="text-2xl font-semibold mb-6">About Linear Feet vs. Board Feet</h2>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                <strong>Linear feet</strong> (also called lineal feet) measure the length of lumber 
                in feet, regardless of its width or thickness. This is a one-dimensional measurement.
              </p>
              
              <p className="text-gray-600">
                <strong>Board feet</strong> is a volume measurement that accounts for all three dimensions 
                of lumber: length, width, and thickness. One board foot equals 144 cubic inches 
                (1 foot × 1 foot × 1 inch).
              </p>
              
              <p className="text-gray-600">
                Converting between these measurements is essential when:
              </p>
              
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You know the length of lumber you need but need to calculate volume for purchasing</li>
                <li>A supplier sells by board feet but you've measured your project in linear feet</li>
                <li>You're working with lumber of varying widths and thicknesses</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">When to Use Linear Feet</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>When ordering trim, molding, or other products with consistent dimensions</li>
                <li>When calculating fence length, deck railing, or border measurements</li>
                <li>When lumber is sold by the linear foot (common for moldings and trim)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-subtle p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">When to Use Board Feet</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>When purchasing hardwood lumber (the standard measurement for pricing)</li>
                <li>When calculating total wood volume needed for a project</li>
                <li>When comparing lumber costs across different dimensions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LinearToBoardFoot;
