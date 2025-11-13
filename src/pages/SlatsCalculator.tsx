
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { H1, H2, P, Section } from '@/components/ui/typography';
import { validateInputs, formatNumber } from '@/utils/calculatorUtils';
import { generateCalculatorSchema } from '@/utils/seoUtils';

const SlatsCalculator = () => {
  const [totalWidth, setTotalWidth] = useState<string>('');
  const [slatCount, setSlatCount] = useState<string>('');
  const [gapWidth, setGapWidth] = useState<string>('');
  const [slatWidth, setSlatWidth] = useState<string>('');
  const [calculationMode, setCalculationMode] = useState<'findSlatWidth' | 'findGapWidth' | 'findSlatCount'>('findSlatWidth');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    try {
      const width = parseFloat(totalWidth);
      
      if (isNaN(width) || width <= 0) {
        setError('Please enter a valid total width');
        setResult(null);
        return;
      }

      // Different calculations based on mode
      if (calculationMode === 'findSlatWidth') {
        // Calculate slat width based on total width, number of slats, and gap width
        const slats = parseInt(slatCount);
        const gap = parseFloat(gapWidth);
        
        if (isNaN(slats) || slats <= 0 || !Number.isInteger(slats)) {
          setError('Please enter a valid number of slats (integer)');
          setResult(null);
          return;
        }
        
        if (isNaN(gap) || gap < 0) {
          setError('Please enter a valid gap width');
          setResult(null);
          return;
        }
        
        const totalGapWidth = gap * (slats - 1);
        const slatWidthResult = (width - totalGapWidth) / slats;
        
        if (slatWidthResult <= 0) {
          setError('The total width is too small for the number of slats and gaps');
          setResult(null);
        } else {
          setResult(`Each slat should be ${formatNumber(slatWidthResult)} units wide`);
          setSlatWidth(formatNumber(slatWidthResult));
        }
      } 
      else if (calculationMode === 'findGapWidth') {
        // Calculate gap width based on total width, number of slats, and slat width
        const slats = parseInt(slatCount);
        const slat = parseFloat(slatWidth);
        
        if (isNaN(slats) || slats <= 0 || !Number.isInteger(slats)) {
          setError('Please enter a valid number of slats (integer)');
          setResult(null);
          return;
        }
        
        if (isNaN(slat) || slat <= 0) {
          setError('Please enter a valid slat width');
          setResult(null);
          return;
        }
        
        if (slats === 1) {
          setResult('Only one slat, no gaps needed');
          setGapWidth('0');
          return;
        }
        
        const totalSlatWidth = slat * slats;
        if (totalSlatWidth > width) {
          setError('The combined slat width exceeds the total width');
          setResult(null);
          return;
        }
        
        const gapWidthResult = (width - totalSlatWidth) / (slats - 1);
        setResult(`Each gap should be ${formatNumber(gapWidthResult)} units wide`);
        setGapWidth(formatNumber(gapWidthResult));
      } 
      else if (calculationMode === 'findSlatCount') {
        // Calculate number of slats based on total width, slat width, and gap width
        const slat = parseFloat(slatWidth);
        const gap = parseFloat(gapWidth);
        
        if (isNaN(slat) || slat <= 0) {
          setError('Please enter a valid slat width');
          setResult(null);
          return;
        }
        
        if (isNaN(gap) || gap < 0) {
          setError('Please enter a valid gap width');
          setResult(null);
          return;
        }
        
        if (slat > width) {
          setError('The slat width exceeds the total width');
          setResult(null);
          return;
        }
        
        // Formula: n = (W + g) / (s + g)
        // Where n is number of slats, W is total width, g is gap width, s is slat width
        const slatCountResult = (width + gap) / (slat + gap);
        const roundedDown = Math.floor(slatCountResult);
        
        if (gap === 0) {
          const exactCount = Math.floor(width / slat);
          setResult(`You can fit exactly ${exactCount} slats with no gaps`);
          setSlatCount(exactCount.toString());
          return;
        }
        
        if (roundedDown <= 0) {
          setError('Invalid dimensions, cannot calculate number of slats');
          setResult(null);
          return;
        }
        
        setResult(`You can fit ${roundedDown} slats with the given dimensions`);
        setSlatCount(roundedDown.toString());
      }
    } catch (err) {
      setError('An error occurred during calculation');
      setResult(null);
    }
  };

  const handleModeChange = (mode: 'findSlatWidth' | 'findGapWidth' | 'findSlatCount') => {
    setCalculationMode(mode);
    setResult(null);
    setError(null);
  };

  const title = 'Slats Calculator - Precise Spacing for Woodworking Projects';
  const description = 'Calculate optimal slat dimensions, gap sizes, or count for your woodworking projects. Our free slat calculator helps you design perfect fences, decks, or furniture.';
  const schema = generateCalculatorSchema(title, description);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="slat calculator, woodworking slats, slat spacing calculator, fence slats, deck slats, slat dimensions" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12">
        <Section>
          <H1 className="mb-4">Slats Calculator</H1>
          <P>
            This calculator helps you determine the optimal dimensions for slats in woodworking projects such as fences, 
            decks, privacy screens, or furniture. You can calculate slat width, gap width, or the number of slats 
            needed based on your project requirements.
          </P>
        </Section>

        <Section className="py-8">
          <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Slats Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="calculationMode">What would you like to calculate?</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <Button 
                      variant={calculationMode === 'findSlatWidth' ? 'default' : 'outline'}
                      onClick={() => handleModeChange('findSlatWidth')}
                      className="w-full"
                    >
                      Slat Width
                    </Button>
                    <Button 
                      variant={calculationMode === 'findGapWidth' ? 'default' : 'outline'}
                      onClick={() => handleModeChange('findGapWidth')}
                      className="w-full"
                    >
                      Gap Width
                    </Button>
                    <Button 
                      variant={calculationMode === 'findSlatCount' ? 'default' : 'outline'}
                      onClick={() => handleModeChange('findSlatCount')}
                      className="w-full"
                    >
                      Number of Slats
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="totalWidth">Total Width</Label>
                    <Input
                      id="totalWidth"
                      type="number"
                      min="0"
                      step="any"
                      value={totalWidth}
                      onChange={(e) => setTotalWidth(e.target.value)}
                      placeholder="Enter total width"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      The total width of your project area (inches, mm, cm, etc.)
                    </p>
                  </div>

                  {calculationMode !== 'findSlatCount' && (
                    <div>
                      <Label htmlFor="slatCount">Number of Slats</Label>
                      <Input
                        id="slatCount"
                        type="number"
                        min="1"
                        step="1"
                        value={slatCount}
                        onChange={(e) => setSlatCount(e.target.value)}
                        placeholder="Enter number of slats"
                      />
                    </div>
                  )}

                  {calculationMode !== 'findSlatWidth' && (
                    <div>
                      <Label htmlFor="slatWidth">Slat Width</Label>
                      <Input
                        id="slatWidth"
                        type="number"
                        min="0"
                        step="any"
                        value={slatWidth}
                        onChange={(e) => setSlatWidth(e.target.value)}
                        placeholder="Enter slat width"
                      />
                    </div>
                  )}

                  {calculationMode !== 'findGapWidth' && (
                    <div>
                      <Label htmlFor="gapWidth">Gap Width</Label>
                      <Input
                        id="gapWidth"
                        type="number"
                        min="0"
                        step="any"
                        value={gapWidth}
                        onChange={(e) => setGapWidth(e.target.value)}
                        placeholder="Enter gap width"
                      />
                    </div>
                  )}
                </div>

                <Button onClick={handleCalculate} className="w-full">Calculate</Button>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}

                {result && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    <strong>Result:</strong> {result}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section className="py-8">
          <H2 className="mb-4">How to Use the Slats Calculator</H2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Finding Slat Width</h3>
              <P>
                To calculate how wide each slat should be, select "Slat Width" mode, then enter the total width, 
                the number of slats you want to use, and the desired gap width between slats.
              </P>
            </div>

            <div>
              <h3 className="text-lg font-medium">Finding Gap Width</h3>
              <P>
                To determine the ideal gap between slats, select "Gap Width" mode, then enter the total width, 
                the number of slats, and the width of each slat.
              </P>
            </div>

            <div>
              <h3 className="text-lg font-medium">Finding Number of Slats</h3>
              <P>
                To calculate how many slats you need, select "Number of Slats" mode, then enter the total width, 
                the width of each slat, and the desired gap between slats.
              </P>
            </div>
          </div>
        </Section>

        <Section className="py-8">
          <H2 className="mb-4">Common Applications for Slat Calculations</H2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Fence and Deck Building</h3>
              <P>
                When building fences or decks, precise slat spacing ensures uniform appearance and adequate 
                privacy while maintaining structural integrity and proper airflow.
              </P>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Privacy Screens and Room Dividers</h3>
              <P>
                For indoor or outdoor privacy screens, calculating optimal slat dimensions helps achieve the 
                perfect balance between privacy and light transmission.
              </P>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Furniture Design</h3>
              <P>
                Modern furniture often incorporates slatted designs for benches, chairs, tables, and shelving. 
                Precise calculations ensure comfortable seating and aesthetic appeal.
              </P>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Architectural Features</h3>
              <P>
                Slatted walls, ceilings, and facades are popular architectural elements that require careful 
                planning to achieve the desired visual effect and functionality.
              </P>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default SlatsCalculator;
