
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { InfoIcon, ArrowRightIcon, Calculator } from 'lucide-react';
import SeoHead from '../components/SeoHead';

const MbfLumberCalculator = () => {
  const [thickness, setThickness] = useState<string>('1');
  const [width, setWidth] = useState<string>('6');
  const [length, setLength] = useState<string>('8');
  const [pieces, setPieces] = useState<string>('10');
  const [result, setResult] = useState<number | null>(null);
  
  const calculateMBF = () => {
    // Formula for MBF: (thickness × width × length × pieces) ÷ 12
    const t = parseFloat(thickness);
    const w = parseFloat(width);
    const l = parseFloat(length);
    const p = parseFloat(pieces);
    
    if (isNaN(t) || isNaN(w) || isNaN(l) || isNaN(p) || t <= 0 || w <= 0 || l <= 0 || p <= 0) {
      return;
    }
    
    // Calculate MBF (thousand board feet)
    const boardFeet = (t * w * l * p) / 12;
    const mbf = boardFeet / 1000;
    setResult(mbf);
  };
  
  return (
    <>
      <SeoHead
        title="MBF Lumber Calculator - Convert Board Feet to Thousand Board Feet"
        description="Calculate thousand board feet (MBF) for lumber with our free MBF calculator. Convert from board feet to MBF for timber pricing, purchasing, and inventory management."
        canonicalUrl="https://boardcalculate.com/mbf-lumber-calculator"
        includeBdft={true}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">MBF Lumber Calculator</h1>
              <p className="text-gray-600 text-lg mb-8">
                Calculate thousand board feet (MBF) for lumber pricing and volume estimation
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is MBF?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      MBF stands for "thousand board feet" and is a common unit of measurement in the lumber industry for large quantities of wood.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Converting to MBF</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      To convert from board feet to MBF, divide the total board feet by 1,000. For example, 5,500 board feet equals 5.5 MBF.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Lumber Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Lumber is often priced by MBF in commercial transactions. This calculator helps you determine the MBF for accurate price estimates.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="shadow-lg border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    MBF Calculator
                  </CardTitle>
                  <CardDescription>
                    Enter lumber dimensions and quantity to calculate MBF (thousand board feet)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="thickness">Thickness (inches)</Label>
                      <Input
                        id="thickness"
                        type="number"
                        min="0.25"
                        step="0.25"
                        value={thickness}
                        onChange={(e) => setThickness(e.target.value)}
                        placeholder="Enter thickness"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (inches)</Label>
                      <Input
                        id="width"
                        type="number"
                        min="1"
                        step="0.25" 
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="Enter width"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (feet)</Label>
                      <Input
                        id="length"
                        type="number"
                        min="1"
                        step="1"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="Enter length"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pieces">Number of Pieces</Label>
                      <Input
                        id="pieces"
                        type="number"
                        min="1"
                        step="1"
                        value={pieces}
                        onChange={(e) => setPieces(e.target.value)}
                        placeholder="Enter quantity"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch">
                  <Button onClick={calculateMBF} className="mt-4 w-full" size="lg">
                    Calculate MBF <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  
                  {result !== null && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-md text-center">
                      <p className="text-sm text-gray-600">Result</p>
                      <p className="text-3xl font-bold text-primary">{result.toFixed(3)} MBF</p>
                      <p className="text-sm text-gray-600 mt-1">
                        ({(result * 1000).toFixed(2)} board feet)
                      </p>
                    </div>
                  )}
                </CardFooter>
              </Card>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">How to Use the MBF Calculator</h2>
                <div className="space-y-4">
                  <p>
                    Our MBF calculator helps you convert from board feet to thousand board feet (MBF), 
                    a common unit for large-scale lumber purchases and inventory management.
                  </p>
                  
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Enter the thickness of your lumber in inches.</li>
                    <li>Enter the width of your lumber in inches.</li>
                    <li>Enter the length of your lumber in feet.</li>
                    <li>Enter the number of pieces.</li>
                    <li>Click "Calculate MBF" to get your result.</li>
                  </ol>
                  
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 mt-6">
                    <h3 className="font-bold flex items-center gap-2">
                      <InfoIcon className="h-4 w-4 text-blue-500" />
                      MBF Formula
                    </h3>
                    <p className="mt-1">
                      MBF = (Thickness × Width × Length × Pieces) ÷ 12,000
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Where thickness and width are in inches, length is in feet
                    </p>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Common Uses for MBF Calculations</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lumber purchasing and pricing for commercial projects</li>
                  <li>Timber harvesting yield estimation</li>
                  <li>Sawmill production calculation</li>
                  <li>Wood inventory management</li>
                  <li>Construction project planning</li>
                </ul>
              </div>
              
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg">What does MBF stand for?</h3>
                    <p className="mt-1">
                      MBF stands for "thousand board feet." It's a unit of measurement commonly used 
                      in the lumber industry for large quantities of wood.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">How do I convert board feet to MBF?</h3>
                    <p className="mt-1">
                      To convert board feet to MBF, simply divide the total board feet by 1,000. 
                      For example, 3,500 board feet equals 3.5 MBF.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Why is lumber priced in MBF?</h3>
                    <p className="mt-1">
                      Lumber is often priced in MBF for commercial and wholesale transactions because 
                      it's more convenient to work with smaller numbers when dealing with large quantities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">What's the difference between board feet and MBF?</h3>
                    <p className="mt-1">
                      Board feet (BF) is the basic unit of measurement for lumber, while 
                      MBF (thousand board feet) is simply 1,000 board feet. MBF is used for 
                      larger quantities to make the numbers more manageable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default MbfLumberCalculator;
