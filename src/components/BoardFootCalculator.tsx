import React, { useState, useEffect } from 'react';
import { 
  calculateBoardFeet, 
  formatNumber, 
  validateInputs,
  calculateLumberCost
} from '@/utils/calculatorUtils';
import { ArrowRight, Calculator, RefreshCw, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from "@/components/ui/use-toast";

interface BoardFootCalculatorProps {
  location?: string;
  className?: string; // Added className prop
}

type UnitType = 'imperial' | 'metric';
type InputType = 'dimensions' | 'cost';

const BoardFootCalculator: React.FC<BoardFootCalculatorProps> = ({ location, className }) => {
  const [thickness, setThickness] = useState('1');
  const [width, setWidth] = useState('6');
  const [length, setLength] = useState('8');
  const [unit, setUnit] = useState<UnitType>('imperial');
  const [boardFeet, setBoardFeet] = useState<number | null>(null);
  const [inputMode, setInputMode] = useState<InputType>('dimensions');
  const [pricePerBoardFoot, setPricePerBoardFoot] = useState('3.50');
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initial calculation on mount
  useEffect(() => {
    handleCalculate();
  }, []);

  const handleCalculate = () => {
    const inputs = { thickness, width, length };
    
    if (!validateInputs(inputs)) {
      toast({
        title: "Invalid measurements",
        description: "Please enter valid positive numbers for all dimensions.",
        variant: "destructive"
      });
      return;
    }
    
    setIsCalculating(true);
    setIsAnimating(true);
    
    // Simulate calculation delay for animation effect
    setTimeout(() => {
      try {
        const result = calculateBoardFeet(
          parseFloat(thickness),
          parseFloat(width),
          parseFloat(length),
          unit
        );
        
        setBoardFeet(result);
        
        // Calculate cost if price is provided
        if (pricePerBoardFoot && parseFloat(pricePerBoardFoot) > 0) {
          setTotalCost(calculateLumberCost(result, parseFloat(pricePerBoardFoot)));
        }
        
        toast({
          title: "Calculation complete",
          description: `${formatNumber(result)} board feet calculated.`,
        });
      } catch (error) {
        toast({
          title: "Calculation error",
          description: "An error occurred during calculation. Please check your inputs.",
          variant: "destructive"
        });
      }
      
      setIsCalculating(false);
      
      // End animation slightly after calculation completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 600);
  };
  
  const handleReset = () => {
    setThickness('1');
    setWidth('6');
    setLength('8');
    setUnit('imperial');
    setPricePerBoardFoot('3.50');
    setBoardFeet(null);
    setTotalCost(null);
    setInputMode('dimensions');
    
    toast({
      title: "Calculator reset",
      description: "All values have been reset to defaults.",
    });
  };
  
  const toggleUnit = () => {
    // When toggling units, convert the input values
    if (unit === 'imperial') {
      // Convert to metric (inches to cm, feet to meters)
      setThickness(formatNumber(parseFloat(thickness) * 2.54, 1));
      setWidth(formatNumber(parseFloat(width) * 2.54, 1));
      setLength(formatNumber(parseFloat(length) / 3.28084, 2));
      setUnit('metric');
    } else {
      // Convert to imperial (cm to inches, meters to feet)
      setThickness(formatNumber(parseFloat(thickness) / 2.54, 1));
      setWidth(formatNumber(parseFloat(width) / 2.54, 1));
      setLength(formatNumber(parseFloat(length) * 3.28084, 1));
      setUnit('imperial');
    }
  };

  return (
    <div className={cn(
      "w-full max-w-md mx-auto rounded-2xl overflow-hidden transition-all duration-500",
      "bg-gradient-to-br from-white to-gray-50 shadow-glass",
      className // Apply the className prop
    )}>
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {location ? `${location} Board Feet Calculator` : "Board Feet Calculator"}
          </h3>
          <button
            onClick={toggleUnit}
            className="text-xs font-medium bg-white text-primary px-3 py-1.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-colors duration-200 border border-primary/20"
            aria-label={`Switch to ${unit === 'imperial' ? 'metric' : 'imperial'} units`}
          >
            {unit === 'imperial' ? 'Switch to Metric' : 'Switch to Imperial'}
          </button>
        </div>
        
        <div className="flex space-x-3 mb-6">
          <button
            onClick={() => setInputMode('dimensions')}
            className={cn(
              "flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
              inputMode === 'dimensions' 
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            )}
          >
            Dimensions
          </button>
          <button
            onClick={() => setInputMode('cost')}
            className={cn(
              "flex-1 text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
              inputMode === 'cost'
                ? "bg-primary text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
            )}
          >
            Calculate Cost
          </button>
        </div>
        
        {inputMode === 'dimensions' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thickness
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="calculator-input"
                    placeholder={unit === 'imperial' ? 'inches' : 'cm'}
                    min="0.1"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'in' : 'cm'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="calculator-input"
                    placeholder={unit === 'imperial' ? 'inches' : 'cm'}
                    min="0.1"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'in' : 'cm'}
                  </span>
                </div>
              </div>
              
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Length
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="calculator-input"
                    placeholder={unit === 'imperial' ? 'feet' : 'meters'}
                    min="0.1"
                    step="0.1"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                    {unit === 'imperial' ? 'ft' : 'm'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price per Board Foot
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  value={pricePerBoardFoot}
                  onChange={(e) => setPricePerBoardFoot(e.target.value)}
                  className="calculator-input pl-8"
                  placeholder="Price per board foot"
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex space-x-3">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className={cn(
              "flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium rounded-md shadow-sm transition-all duration-300 transform",
              isCalculating ? "bg-gray-200 text-gray-500" : "bg-primary text-white hover:translate-y-[-2px] hover:shadow-md"
            )}
          >
            {isCalculating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="h-4 w-4" />
                Calculate
              </>
            )}
          </button>
          
          <button
            onClick={handleReset}
            className="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Reset calculator"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
        
        {boardFeet !== null && (
          <div className={cn(
            "mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 transform transition-all duration-500",
            isAnimating ? "scale-95 opacity-0" : "scale-100 opacity-100"
          )}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-700">Result</h4>
              <span className="text-xs text-gray-500">{unit === 'imperial' ? 'Imperial' : 'Metric'}</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Board Feet:</span>
                <span className="text-lg font-semibold text-primary">{formatNumber(boardFeet)} BF</span>
              </div>
              
              {totalCost !== null && (
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Total Cost:</span>
                  <span className="text-lg font-semibold text-gray-900">${formatNumber(totalCost)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoardFootCalculator;
