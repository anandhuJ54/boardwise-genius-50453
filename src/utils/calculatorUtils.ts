
/**
 * Calculates board feet from dimensions
 * 
 * Formula: (thickness in inches × width in inches × length in feet) ÷ 12
 */
export const calculateBoardFeet = (
  thickness: number,
  width: number,
  length: number,
  unit: 'imperial' | 'metric' = 'imperial'
): number => {
  if (unit === 'metric') {
    // Convert from cm to inches first
    thickness = thickness / 2.54;
    width = width / 2.54;
    // Convert from meters to feet
    length = length * 3.28084;
  }
  
  // Apply board feet formula
  return (thickness * width * length) / 12;
};

/**
 * Converts board feet to cubic meters
 */
export const boardFeetToCubicMeters = (boardFeet: number): number => {
  // 1 board foot = 0.002359737 cubic meters
  return boardFeet * 0.002359737;
};

/**
 * Converts cubic meters to board feet
 */
export const cubicMetersToBoardFeet = (cubicMeters: number): number => {
  // 1 cubic meter = 423.7760007 board feet
  return cubicMeters * 423.7760007;
};

/**
 * Converts square feet to board feet (assuming 1" thickness)
 */
export const squareFeetToBoardFeet = (squareFeet: number, thickness: number = 1): number => {
  return squareFeet * thickness;
};

/**
 * Converts linear feet to board feet
 */
export const linearFeetToBoardFeet = (linearFeet: number, width: number, thickness: number): number => {
  return (thickness * width * linearFeet) / 12;
};

/**
 * Formats number with specified number of decimal places
 */
export const formatNumber = (num: number, decimals: number = 2): string => {
  return num.toFixed(decimals);
};

/**
 * Calculate the cost of lumber based on board feet and price per board foot
 */
export const calculateLumberCost = (boardFeet: number, pricePerBoardFoot: number): number => {
  return boardFeet * pricePerBoardFoot;
};

/**
 * Check if all input values are valid numbers
 */
export const validateInputs = (values: Record<string, string>): boolean => {
  for (const key in values) {
    const num = parseFloat(values[key]);
    if (isNaN(num) || num <= 0) {
      return false;
    }
  }
  return true;
};
