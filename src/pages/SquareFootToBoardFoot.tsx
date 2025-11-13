
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SquareFootToBoardFoot = () => {
  const [squareFeet, setSquareFeet] = useState<string>('');
  const [thickness, setThickness] = useState<string>('');
  const [unit, setUnit] = useState<string>('inches');
  const [boardFeet, setBoardFeet] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const isValidNumber = (value: string) => {
    return !isNaN(parseFloat(value)) && parseFloat(value) > 0;
  };
  
  const handleCalculate = () => {
    setError(null);
    
    // Validation
    if (!isValidNumber(squareFeet) || !isValidNumber(thickness)) {
      setError('Please enter valid positive numbers for all dimensions');
      setBoardFeet(null);
      return;
    }
    
    const squareFeetVal = parseFloat(squareFeet);
    const thicknessVal = parseFloat(thickness);
    
    // Convert thickness to inches if needed
    const thicknessInInches = unit === 'inches' ? thicknessVal : thicknessVal * 0.3937; // cm to inches
    
    // Board feet formula when using square feet: Square Feet × Thickness (in inches)
    const result = squareFeetVal * thicknessInInches;
    
    setBoardFeet(parseFloat(result.toFixed(3)));
  };
  
  const clearValues = () => {
    setSquareFeet('');
    setThickness('');
    setBoardFeet(null);
    setError(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Square Foot to Board Foot Calculator | BoardCalculate</title>
        <meta 
          name="description" 
          content="Convert square feet to board feet with our easy-to-use calculator. Perfect for flooring, paneling, and surface area calculations." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Square Foot to Board Foot Calculator</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convert surface area measurements (square feet) to volumetric board feet based on material thickness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-subtle border border-gray-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 text-primary mr-2" />
                  Calculator
                </CardTitle>
                <CardDescription>Enter your measurements to convert square feet to board feet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="unit">Thickness Unit</Label>
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
                      <Label htmlFor="square-feet">Square Feet</Label>
                      <Input 
                        id="square-feet" 
                        type="number" 
                        placeholder="e.g., 50" 
                        value={squareFeet} 
                        onChange={(e) => setSquareFeet(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="thickness">Thickness ({unit})</Label>
                      <Input 
                        id="thickness" 
                        type="number" 
                        placeholder={unit === 'inches' ? "e.g., 0.75" : "e.g., 1.9"} 
                        value={thickness} 
                        onChange={(e) => setThickness(e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
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
                      {squareFeet} square feet of material with a thickness of {thickness} {unit} 
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
                  Board feet = Square feet × Thickness (in inches)
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <Tabs defaultValue="about" className="mb-16">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="about">About This Conversion</TabsTrigger>
              <TabsTrigger value="uses">Common Uses</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Understanding Square Feet to Board Feet</h2>
              
              <div className="space-y-6">
                <p className="text-gray-600">
                  <strong>Square feet</strong> measures surface area (length × width) without considering thickness. 
                  This two-dimensional measurement is commonly used for flooring, wall coverage, and similar applications.
                </p>
                
                <p className="text-gray-600">
                  <strong>Board feet</strong> is a three-dimensional volumetric measurement that accounts for thickness. 
                  One board foot equals 144 cubic inches (1 foot × 1 foot × 1 inch).
                </p>
                
                <p className="text-gray-600">
                  The conversion formula is straightforward:
                </p>
                
                <div className="bg-gradient-to-r from-gray-50 to-amber-light/20 rounded-lg p-6 mb-6 text-center">
                  <p className="text-lg font-medium text-gray-800">
                    Board Feet = Square Feet × Thickness (in inches)
                  </p>
                </div>
                
                <p className="text-gray-600">
                  For example, if you need to cover 100 square feet with 3/4 inch thick material, you would need 
                  100 × 0.75 = 75 board feet of lumber.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="uses" className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Common Applications</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Flooring Projects</h3>
                  <p className="text-gray-600">
                    When installing hardwood flooring, you typically measure the floor area in square feet. 
                    To order the right amount of lumber, convert to board feet based on your flooring thickness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Wall Paneling</h3>
                  <p className="text-gray-600">
                    For wall paneling or wainscoting projects, you'll measure the wall surface area 
                    and then convert to board feet using the panel thickness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Cabinet Making</h3>
                  <p className="text-gray-600">
                    When building cabinets, you might calculate the total surface area needed for doors, 
                    sides, and shelves, then convert to board feet for purchasing lumber.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Material Estimating</h3>
                  <p className="text-gray-600">
                    For projects where you know the coverage area needed and the material thickness, 
                    this calculator helps you estimate the volume of lumber required.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Tips for Accurate Measurements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Account for Waste</h3>
                <p className="text-gray-600">
                  Always add 10-15% extra material to account for cutting waste, mistakes, and future repairs. 
                  For complex patterns like herringbone flooring, consider adding up to 20%.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Check Actual Dimensions</h3>
                <p className="text-gray-600">
                  Remember that nominal dimensions often differ from actual dimensions. 
                  For example, a "1-inch" board might actually be 3/4 inch thick. Always use actual measurements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Consider Milling Loss</h3>
                <p className="text-gray-600">
                  If you'll be planing or surfacing rough lumber, account for the thickness that 
                  will be removed during milling (typically 1/8" to 1/4" per surface).
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">Calculate Each Thickness Separately</h3>
                <p className="text-gray-600">
                  If your project uses materials of different thicknesses, calculate the board feet 
                  for each thickness separately, then add them together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SquareFootToBoardFoot;
