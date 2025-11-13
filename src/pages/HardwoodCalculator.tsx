
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { calculateBoardFeet, formatNumber } from '@/utils/calculatorUtils';
import { Ruler, Calculator } from 'lucide-react';

// Hardwood prices per board foot (approximate retail prices)
const HARDWOOD_PRICES = {
  "oak-red": 5.5,
  "oak-white": 7.0,
  "maple-hard": 6.5,
  "cherry": 8.5,
  "walnut": 12.0,
  "mahogany": 15.0,
  "poplar": 4.0,
  "pine": 3.5,
  "hickory": 6.0,
  "ash": 5.0,
  "cedar": 6.5,
  "cypress": 7.0
};

const HardwoodCalculator = () => {
  const [dimensions, setDimensions] = useState({
    thickness: '',
    width: '',
    length: '',
    quantity: '1',
    unit: 'imperial' as 'imperial' | 'metric'
  });
  
  const [selectedWood, setSelectedWood] = useState<string>("oak-red");
  const [boardFeet, setBoardFeet] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [pricePerBoardFoot, setPricePerBoardFoot] = useState<number>(5.5);
  
  // Handle dimension changes
  const handleDimensionChange = (field: string, value: string) => {
    setDimensions(prev => ({ ...prev, [field]: value }));
  };
  
  // Handle wood type change
  const handleWoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wood = e.target.value;
    setSelectedWood(wood);
    setPricePerBoardFoot(HARDWOOD_PRICES[wood as keyof typeof HARDWOOD_PRICES]);
  };
  
  // Calculate board feet and cost when dimensions or wood type changes
  useEffect(() => {
    const { thickness, width, length, quantity, unit } = dimensions;
    
    if (thickness && width && length && quantity && !isNaN(Number(thickness)) && 
        !isNaN(Number(width)) && !isNaN(Number(length)) && !isNaN(Number(quantity))) {
      
      const thicknessVal = parseFloat(thickness);
      const widthVal = parseFloat(width);
      const lengthVal = parseFloat(length);
      const quantityVal = parseInt(quantity);
      
      const bf = calculateBoardFeet(thicknessVal, widthVal, lengthVal, unit) * quantityVal;
      setBoardFeet(bf);
      setTotalCost(bf * pricePerBoardFoot);
    } else {
      setBoardFeet(0);
      setTotalCost(0);
    }
  }, [dimensions, pricePerBoardFoot]);
  
  // Format a hardwood name for display
  const formatWoodName = (key: string): string => {
    const parts = key.split('-');
    if (parts.length === 2) {
      return `${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)} ${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)}`;
    }
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Hardwood Calculator | BoardCalculate</title>
        <meta 
          name="description" 
          content="Calculate the board footage and cost of hardwood lumber for your woodworking projects with our specialty hardwood calculator."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Hardwood Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate board footage and estimate costs for different hardwood species for your woodworking projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Ruler className="mr-2 h-5 w-5 text-primary" />
                Hardwood Board Footage Calculator
              </CardTitle>
              <CardDescription>Enter dimensions and wood species to calculate board footage and cost</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Unit Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="unit-select" className="text-base font-medium mb-2 block">Measurement Unit</Label>
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="imperial"
                        name="unit"
                        value="imperial"
                        checked={dimensions.unit === 'imperial'}
                        onChange={() => handleDimensionChange('unit', 'imperial')}
                        className="mr-2"
                      />
                      <Label htmlFor="imperial">Imperial (inches, feet)</Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="metric"
                        name="unit"
                        value="metric"
                        checked={dimensions.unit === 'metric'}
                        onChange={() => handleDimensionChange('unit', 'metric')}
                        className="mr-2"
                      />
                      <Label htmlFor="metric">Metric (cm, meters)</Label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Wood Species Selection */}
              <div>
                <Label htmlFor="wood-select" className="text-base font-medium mb-2 block">Wood Species</Label>
                <select
                  id="wood-select"
                  value={selectedWood}
                  onChange={handleWoodChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {Object.keys(HARDWOOD_PRICES).map((wood) => (
                    <option key={wood} value={wood}>
                      {formatWoodName(wood)} (${HARDWOOD_PRICES[wood as keyof typeof HARDWOOD_PRICES].toFixed(2)}/bd. ft.)
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Price Per Board Foot */}
              <div>
                <Label htmlFor="price" className="text-base font-medium mb-2 block">Price per Board Foot ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={pricePerBoardFoot}
                  onChange={(e) => setPricePerBoardFoot(parseFloat(e.target.value) || 0)}
                />
                <p className="text-xs text-gray-500 mt-1">Default prices are approximate. Adjust based on your local supplier.</p>
              </div>
              
              <Separator />
              
              {/* Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="thickness" className="text-base font-medium mb-2 block">
                    Thickness ({dimensions.unit === 'imperial' ? 'inches' : 'cm'})
                  </Label>
                  <Input
                    id="thickness"
                    type="number"
                    step="0.125"
                    min="0"
                    placeholder={dimensions.unit === 'imperial' ? "e.g., 0.75" : "e.g., 1.9"}
                    value={dimensions.thickness}
                    onChange={(e) => handleDimensionChange('thickness', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="width" className="text-base font-medium mb-2 block">
                    Width ({dimensions.unit === 'imperial' ? 'inches' : 'cm'})
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    step="0.25"
                    min="0"
                    placeholder={dimensions.unit === 'imperial' ? "e.g., 5.5" : "e.g., 14"}
                    value={dimensions.width}
                    onChange={(e) => handleDimensionChange('width', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="length" className="text-base font-medium mb-2 block">
                    Length ({dimensions.unit === 'imperial' ? 'feet' : 'meters'})
                  </Label>
                  <Input
                    id="length"
                    type="number"
                    step="0.5"
                    min="0"
                    placeholder={dimensions.unit === 'imperial' ? "e.g., 8" : "e.g., 2.4"}
                    value={dimensions.length}
                    onChange={(e) => handleDimensionChange('length', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="quantity" className="text-base font-medium mb-2 block">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    step="1"
                    min="1"
                    placeholder="e.g., 1"
                    value={dimensions.quantity}
                    onChange={(e) => handleDimensionChange('quantity', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Results */}
          <Card className="bg-gradient-to-br from-primary/5 to-amber-light/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-primary" />
                Results
              </CardTitle>
              <CardDescription>Board footage and cost calculation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-white rounded-md shadow-sm">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Board Feet</h3>
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(boardFeet)}</p>
                </div>
              </div>
              
              <div className="p-4 bg-white rounded-md shadow-sm">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Cost</h3>
                  <p className="text-3xl font-bold text-primary">${formatNumber(totalCost)}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-500">
                These calculations are estimates. Actual costs may vary based on local suppliers, 
                wood quality, and other factors.
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">About Hardwood Pricing</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Hardwood prices vary widely based on species, quality, region, and market conditions. 
              The prices used in this calculator are approximate retail prices and should be used 
              for estimation purposes only.
            </p>
            <p>
              Factors that affect hardwood pricing include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Wood species</strong> - Exotic and rare species typically cost more than common domestic hardwoods</li>
              <li><strong>Grade</strong> - Higher grades with fewer defects command premium prices</li>
              <li><strong>Thickness</strong> - Thicker boards often cost more per board foot</li>
              <li><strong>Width</strong> - Wider boards may carry a premium price</li>
              <li><strong>Drying method</strong> - Kiln-dried lumber is typically more expensive than air-dried</li>
              <li><strong>Source</strong> - Local suppliers may offer better prices than big box stores</li>
            </ul>
            <p>
              For the most accurate pricing, contact your local hardwood supplier.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HardwoodCalculator;
