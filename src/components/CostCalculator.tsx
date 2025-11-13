
import React, { useState } from 'react';
import { 
  calculateBoardFeet, 
  calculateLumberCost, 
  formatNumber, 
  validateInputs 
} from '@/utils/calculatorUtils';
import { Calculator, RefreshCw, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CostCalculator: React.FC<{ className?: string }> = ({ className }) => {
  // Input states for dimensions
  const [thickness, setThickness] = useState('1');
  const [width, setWidth] = useState('6');
  const [length, setLength] = useState('8');
  
  // Input states for cost calculation
  const [pricePerBoardFoot, setPricePerBoardFoot] = useState('5.50');
  const [quantity, setQuantity] = useState('1');
  const [totalBoardFeet, setTotalBoardFeet] = useState<number | null>(null);
  
  // Results
  const [costPerPiece, setCostPerPiece] = useState<number | null>(null);
  const [totalCost, setTotalCost] = useState<number | null>(null);
  
  // UI states
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationMethod, setCalculationMethod] = useState<'dimensions' | 'direct'>('dimensions');
  const [unit, setUnit] = useState<'imperial' | 'metric'>('imperial');

  const handleCalculate = () => {
    if (calculationMethod === 'dimensions') {
      // Validate dimension inputs
      const inputs = { thickness, width, length, quantity, pricePerBoardFoot };
      if (!validateInputs(inputs)) {
        toast({
          title: "Invalid inputs",
          description: "Please enter valid positive numbers for all fields.",
          variant: "destructive"
        });
        return;
      }
      
      setIsCalculating(true);
      
      try {
        // Calculate board feet based on dimensions
        const boardFeetPerPiece = calculateBoardFeet(
          parseFloat(thickness),
          parseFloat(width),
          parseFloat(length),
          unit
        );
        
        const totalBF = boardFeetPerPiece * parseFloat(quantity);
        setTotalBoardFeet(totalBF);
        
        // Calculate costs
        const pieceCost = calculateLumberCost(boardFeetPerPiece, parseFloat(pricePerBoardFoot));
        setCostPerPiece(pieceCost);
        
        const total = calculateLumberCost(totalBF, parseFloat(pricePerBoardFoot));
        setTotalCost(total);
        
        toast({
          title: "Calculation complete",
          description: `Total cost calculated: $${formatNumber(total)}`,
        });
      } catch (error) {
        toast({
          title: "Calculation error",
          description: "An error occurred. Please check your inputs.",
          variant: "destructive"
        });
      }
      
      setIsCalculating(false);
    } else {
      // Direct board feet input
      const inputs = { totalBoardFeet: String(totalBoardFeet), pricePerBoardFoot };
      if (!validateInputs(inputs)) {
        toast({
          title: "Invalid inputs",
          description: "Please enter valid positive numbers for all fields.",
          variant: "destructive"
        });
        return;
      }
      
      setIsCalculating(true);
      
      try {
        // Calculate total cost based on board feet and price
        if (totalBoardFeet !== null) {
          const total = calculateLumberCost(totalBoardFeet, parseFloat(pricePerBoardFoot));
          setTotalCost(total);
          
          toast({
            title: "Calculation complete",
            description: `Total cost calculated: $${formatNumber(total)}`,
          });
        }
      } catch (error) {
        toast({
          title: "Calculation error",
          description: "An error occurred. Please check your inputs.",
          variant: "destructive"
        });
      }
      
      setIsCalculating(false);
    }
  };
  
  const handleReset = () => {
    if (calculationMethod === 'dimensions') {
      setThickness('1');
      setWidth('6');
      setLength('8');
    } else {
      setTotalBoardFeet(null);
    }
    
    setQuantity('1');
    setPricePerBoardFoot('5.50');
    setCostPerPiece(null);
    setTotalCost(null);
    
    toast({
      title: "Calculator reset",
      description: "All values have been reset to defaults.",
    });
  };
  
  const toggleUnit = () => {
    if (unit === 'imperial') {
      // Convert to metric
      setThickness(formatNumber(parseFloat(thickness) * 2.54, 1));
      setWidth(formatNumber(parseFloat(width) * 2.54, 1));
      setLength(formatNumber(parseFloat(length) / 3.28084, 2));
      setUnit('metric');
    } else {
      // Convert to imperial
      setThickness(formatNumber(parseFloat(thickness) / 2.54, 1));
      setWidth(formatNumber(parseFloat(width) / 2.54, 1));
      setLength(formatNumber(parseFloat(length) * 3.28084, 1));
      setUnit('imperial');
    }
  };

  return (
    <div className={cn(
      "w-full max-w-2xl mx-auto rounded-2xl overflow-hidden transition-all duration-500",
      "bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200",
      className
    )}>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Lumber Cost Calculator
          </h3>
          
          {calculationMethod === 'dimensions' && (
            <button
              onClick={toggleUnit}
              className="text-xs font-medium bg-white text-primary px-3 py-1.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
              aria-label={`Switch to ${unit === 'imperial' ? 'metric' : 'imperial'} units`}
            >
              {unit === 'imperial' ? 'Switch to Metric' : 'Switch to Imperial'}
            </button>
          )}
        </div>
        
        <div className="flex space-x-3 mb-6">
          <button
            onClick={() => setCalculationMethod('dimensions')}
            className={cn(
              "flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
              calculationMethod === 'dimensions' 
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            )}
          >
            From Dimensions
          </button>
          <button
            onClick={() => setCalculationMethod('direct')}
            className={cn(
              "flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
              calculationMethod === 'direct'
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            )}
          >
            From Board Feet
          </button>
        </div>
        
        {calculationMethod === 'dimensions' ? (
          <div className="space-y-5">
            <h4 className="text-sm font-medium text-gray-700 border-b pb-2">Step 1: Enter Lumber Dimensions</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Label htmlFor="thickness" className="block text-sm font-medium text-gray-700 mb-1">
                  Thickness
                </Label>
                <div className="relative">
                  <Input
                    id="thickness"
                    type="number"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    placeholder={unit === 'imperial' ? 'inches' : 'cm'}
                    min="0.1"
                    step="0.1"
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'in' : 'cm'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-1">
                <Label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                  Width
                </Label>
                <div className="relative">
                  <Input
                    id="width"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder={unit === 'imperial' ? 'inches' : 'cm'}
                    min="0.1"
                    step="0.1"
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'in' : 'cm'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-1">
                <Label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
                  Length
                </Label>
                <div className="relative">
                  <Input
                    id="length"
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder={unit === 'imperial' ? 'feet' : 'meters'}
                    min="0.1"
                    step="0.1"
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'ft' : 'm'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Number of pieces"
                    min="1"
                    step="1"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <h4 className="text-sm font-medium text-gray-700 border-b pb-2">Step 1: Enter Board Footage</h4>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="boardFeet" className="block text-sm font-medium text-gray-700 mb-1">
                  Total Board Feet
                </Label>
                <div className="relative">
                  <Input
                    id="boardFeet"
                    type="number"
                    value={totalBoardFeet === null ? '' : totalBoardFeet}
                    onChange={(e) => setTotalBoardFeet(parseFloat(e.target.value) || null)}
                    placeholder="Enter board feet"
                    min="0.1"
                    step="0.1"
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    BF
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="pt-5 mt-5 space-y-5 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 border-b pb-2">Step 2: Enter Pricing</h4>
          <div>
            <Label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price per Board Foot
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                $
              </span>
              <Input
                id="price"
                type="number"
                value={pricePerBoardFoot}
                onChange={(e) => setPricePerBoardFoot(e.target.value)}
                className="pl-8"
                placeholder="Price per BF"
                min="0.01"
                step="0.01"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <Button
            onClick={handleCalculate}
            disabled={isCalculating}
            className={cn(
              "flex-1 flex items-center justify-center gap-2",
              isCalculating && "cursor-not-allowed"
            )}
          >
            {isCalculating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <DollarSign className="h-4 w-4" />
                Calculate Cost
              </>
            )}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="p-3"
            aria-label="Reset calculator"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
        
        {totalCost !== null && (
          <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Calculation Results</h4>
            
            <div className="space-y-3">
              {calculationMethod === 'dimensions' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Board Feet (per piece):</span>
                    <span className="text-base font-medium text-gray-800">
                      {formatNumber(totalBoardFeet! / parseFloat(quantity))} BF
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cost per piece:</span>
                    <span className="text-base font-medium text-gray-800">
                      ${formatNumber(costPerPiece!)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Board Feet:</span>
                    <span className="text-base font-medium text-gray-800">
                      {formatNumber(totalBoardFeet!)} BF
                    </span>
                  </div>
                </>
              )}
              
              {calculationMethod === 'direct' && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Board Feet:</span>
                  <span className="text-base font-medium text-gray-800">
                    {formatNumber(totalBoardFeet!)} BF
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">Total Cost:</span>
                <span className="text-xl font-semibold text-primary">
                  ${formatNumber(totalCost)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CostCalculator;
