
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowDown } from 'lucide-react';

const CmToMmCalculator = () => {
  const [cm, setCm] = useState<string>('');
  const [mm, setMm] = useState<string>('');
  
  // Convert cm to mm
  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCm(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 cm = 10 mm
      setMm((Number(value) * 10).toFixed(1));
    } else {
      setMm('');
    }
  };
  
  // Convert mm to cm
  const handleMmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMm(value);
    
    if (!isNaN(Number(value)) && value !== '') {
      // 1 mm = 0.1 cm
      setCm((Number(value) * 0.1).toFixed(2));
    } else {
      setCm('');
    }
  };
  
  // Common conversions (predefined values that users might need frequently)
  const commonConversions = [
    { cm: '1', mm: '10' },
    { cm: '2.5', mm: '25' },
    { cm: '5', mm: '50' },
    { cm: '10', mm: '100' },
    { cm: '15', mm: '150' },
    { cm: '20', mm: '200' },
    { cm: '50', mm: '500' },
    { cm: '100', mm: '1000' },
  ];
  
  // Set predefined conversion values
  const setPresetValues = (cm: string, mm: string) => {
    setCm(cm);
    setMm(mm);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>CM to MM Calculator | BoardCalculate</title>
        <meta name="description" content="Convert centimeters to millimeters and vice versa with our simple woodworking calculator." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">CM to MM Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Easily convert between centimeters and millimeters for your woodworking projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDown className="mr-2 h-5 w-5 text-primary" />
                CM ↔ MM Converter
              </CardTitle>
              <CardDescription>Enter a value in either field to see the conversion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="cm" className="text-base font-medium mb-2 block">Centimeters (cm)</Label>
                  <Input
                    id="cm"
                    type="number"
                    step="0.01"
                    placeholder="Enter centimeters"
                    value={cm}
                    onChange={handleCmChange}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">1 centimeter = 10 millimeters</p>
                </div>
                
                <div>
                  <Label htmlFor="mm" className="text-base font-medium mb-2 block">Millimeters (mm)</Label>
                  <Input
                    id="mm"
                    type="number"
                    step="0.1"
                    placeholder="Enter millimeters"
                    value={mm}
                    onChange={handleMmChange}
                    className="text-lg"
                  />
                  <p className="text-xs text-gray-500 mt-1">1 millimeter = 0.1 centimeters</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Common Conversions */}
          <Card>
            <CardHeader>
              <CardTitle>Common Conversions</CardTitle>
              <CardDescription>Frequently used CM to MM conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {commonConversions.slice(0, 4).map((conversion, index) => (
                  <button
                    key={index}
                    onClick={() => setPresetValues(conversion.cm, conversion.mm)}
                    className="p-3 border rounded-md hover:bg-gray-50 transition-colors text-sm"
                  >
                    {conversion.cm} cm = {conversion.mm} mm
                  </button>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-500">Click any conversion to use those values</p>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>More Conversions</CardTitle>
              <CardDescription>Additional CM to MM conversions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {commonConversions.slice(4).map((conversion, index) => (
                  <button
                    key={index}
                    onClick={() => setPresetValues(conversion.cm, conversion.mm)}
                    className="p-3 border rounded-md hover:bg-gray-50 transition-colors text-sm"
                  >
                    {conversion.cm} cm = {conversion.mm} mm
                  </button>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-500">Click any conversion to use those values</p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">About CM to MM Conversion</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              In the metric system, converting between centimeters (cm) and millimeters (mm) is straightforward 
              because the metric system is based on powers of 10.
            </p>
            <p>
              <strong>1 centimeter = 10 millimeters</strong>
            </p>
            <p>
              This simple conversion is essential for woodworkers when working with metric measurements, 
              especially when dealing with precise cuts or following plans that use different metric units.
            </p>
            <p>
              For woodworking projects, millimeters are often preferred for high-precision work, 
              while centimeters may be used for general dimensions.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CmToMmCalculator;
