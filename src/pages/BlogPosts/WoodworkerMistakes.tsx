
import React from 'react';
import BlogPost from '@/components/BlogPost';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';

const WoodworkerMistakes: React.FC = () => {
  return (
    <BlogPost
      title="Top 5 Mistakes Woodworkers Make When Calculating Lumber Volume"
      description="Learn the most common errors when calculating board feet and how to avoid them for more accurate woodworking projects and material estimates."
      date="April 9, 2025"
      readTime="7 min read"
      category="Woodworking Tips"
      slug="woodworker-mistakes"
    >
      <p>
        Accurately calculating lumber volume is essential for woodworking, whether you're building furniture, framing a house, or estimating material costs. 
        Even experienced woodworkers sometimes make small mistakes that can lead to big problems — like running out of wood mid-project or overspending.
      </p>

      <p>
        To help you avoid these issues, here are the top 5 mistakes woodworkers make when calculating board feet, plus tips to get it right every time.
      </p>

      <h2>1. Forgetting to Convert Inches to Feet</h2>
      <p>The most common mistake? Mixing units.</p>

      <p>
        Board feet are calculated using inches for thickness and width, but feet for length. Many beginners use all inches or all feet, which leads to inaccurate results.
      </p>

      <p><strong>Example mistake:</strong><br />
      Using 96" instead of 8' in the formula:<br />
      (1 × 6 × 96) ÷ 144 = 4 board feet ← Incorrect<br />
      <strong>Correct version:</strong><br />
      (1 × 6 × 8) ÷ 12 = 4 board feet ← Correct
      </p>

      <p className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
        <strong>Tip:</strong> Always convert the length to feet and thickness/width to inches. Our <Link to="/board-footage-calculator" className="text-primary hover:underline">Board Foot Calculator</Link> does this automatically for you.
      </p>

      <h2>2. Misreading Nominal vs. Actual Dimensions</h2>
      <p>
        Lumber is often sold using nominal dimensions (e.g., 2x4, 1x6), which differ from the actual size after milling.
      </p>

      <p>
        A 2x4 is actually 1.5" × 3.5", not 2" × 4". Using nominal dimensions in your board foot formula will overestimate your lumber volume.
      </p>

      <p className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
        <strong>Tip:</strong> Always measure the actual dimensions or look them up before calculating.
      </p>

      <p>
        <strong>Here's a quick example:</strong><br />
        Nominal 2x4x8 =<br />
        (1.5 × 3.5 × 8) ÷ 12 = 3.5 board feet
      </p>

      <h2>3. Not Accounting for Waste or Extra Cuts</h2>
      <p>
        Even with perfect math, you might still come up short if you don't plan for waste, knots, or offcuts.
      </p>

      <p>
        Most projects involve trimming, fitting, or accidental cuts — all of which consume extra wood.
      </p>

      <p className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
        <strong>Tip:</strong> Always add 10–15% extra to your total board footage for waste.
      </p>

      <p>
        If your project needs 100 board feet, buy around 110–115 board feet to be safe.
      </p>

      <h2>4. Using the Wrong Formula for Multiple Pieces</h2>
      <p>
        The formula for board feet is:<br />
        (Thickness × Width × Length in feet) ÷ 12
      </p>

      <p>
        It works for one piece. But if you're buying multiple boards, you must multiply the result by the number of pieces.
      </p>

      <p>
        <strong>Example:</strong><br />
        Five boards, each 1" × 8" × 10' =<br />
        (1 × 8 × 10 ÷ 12) = 6.67 board feet<br />
        × 5 boards = 33.33 board feet total
      </p>

      <p className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
        <strong>Tip:</strong> Use our <Link to="/board-footage-calculator" className="text-primary hover:underline">Board Foot Calculator</Link> to input number of pieces and get the total instantly.
      </p>

      <h2>5. Ignoring MBF When Buying in Bulk</h2>
      <p>
        When buying large quantities of lumber, suppliers often use MBF pricing (1 MBF = 1,000 board feet). It's easy to confuse board feet with MBF and get price estimates wrong.
      </p>

      <p className="bg-amber-50 p-4 border-l-4 border-amber-500 rounded">
        <strong>Tip:</strong> Use our <Link to="/mbf-lumber-calculator" className="text-primary hover:underline">MBF Lumber Calculator</Link> to convert board feet into MBF and understand bulk pricing easily.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl my-8">
        <h3 className="text-xl font-semibold flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-primary" />
          Board Foot Formula (Quick Reminder)
        </h3>
        <p className="font-medium my-3">
          Formula:<br />
          (Thickness in inches × Width in inches × Length in feet) ÷ 12 = Board Feet
        </p>
        <p>
          Need help? Try our calculator: <Link to="/board-footage-calculator" className="text-primary hover:underline font-medium">Board Foot Calculator</Link>
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">FAQ: Lumber Volume & Board Foot Tips</h3>
      
      <div className="space-y-4">
        <div>
          <p className="font-medium">What is a board foot?</p>
          <p>A board foot is a volume measurement equal to a 1" thick × 12" wide × 12" long piece of wood.</p>
        </div>
        
        <div>
          <p className="font-medium">How do I calculate cost per board foot?</p>
          <p>
            Take the total cost and divide by board feet:<br />
            Total Cost ÷ Total Board Feet = Cost per Board Foot<br />
            Use our <Link to="/cost-per-board-foot-calculator" className="text-primary hover:underline">Cost Per Board Foot Calculator</Link> to make it easy.
          </p>
        </div>
        
        <div>
          <p className="font-medium">How many board feet are in a 2x4x8?</p>
          <p>
            A nominal 2x4x8 (actual size: 1.5" × 3.5" × 8') =<br />
            (1.5 × 3.5 × 8) ÷ 12 = 3.5 board feet
          </p>
        </div>
        
        <div>
          <p className="font-medium">Is board foot the same as cubic foot?</p>
          <p>No. A board foot measures surface volume for lumber, not 3D volume like a cubic foot.</p>
        </div>
      </div>

      <div className="bg-primary-light/20 p-6 rounded-xl my-8 border border-primary/20">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Tip</h3>
        <p>
          Double-check your units, allow for waste, and use the right formulas. Or skip the math and use our free tools at BoardCalculate.com — 
          designed for woodworkers who want fast, accurate results.
        </p>
        <div className="mt-4">
          <Link 
            to="/board-footage-calculator" 
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            Try Our Board Foot Calculator
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </BlogPost>
  );
};

export default WoodworkerMistakes;
