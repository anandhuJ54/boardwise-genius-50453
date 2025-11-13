
import React from 'react';
import { Layout } from '@/components/Layout';
import CostCalculator from '@/components/CostCalculator';
import SeoHead from '@/components/SeoHead';
import { H1, Section } from '@/components/ui/typography';

const CostPerBoardFootCalculator = () => {
  return (
    <Layout>
      <SeoHead
        title="Cost Per Board Foot Calculator"
        description="Calculate lumber costs accurately with our cost per board foot calculator. Price your woodworking projects and estimate material expenses with precision."
        canonicalUrl="https://boardcalculate.com/cost-per-board-foot-calculator"
        includeBdft={true}
      />
      
      <Section className="max-w-5xl mx-auto pt-20 md:pt-24 lg:pt-32">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center mb-10 text-center">
            <H1 className="mb-4">Cost Per Board Foot Calculator</H1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Calculate precise lumber costs for your woodworking projects. Estimate expenses, compare pricing, and manage your budget effectively.
            </p>
          </div>
          
          <div className="mb-16">
            <CostCalculator />
          </div>
          
          <div className="prose max-w-3xl mx-auto">
            <h2 id="about-lumber-cost-calculator">About the Lumber Cost Calculator</h2>
            <p>
              The cost per board foot calculator helps woodworkers, contractors, and DIY enthusiasts estimate lumber expenses accurately.
              By calculating the price per board foot, you can better manage your project budget and make informed purchasing decisions.
            </p>
            
            <h2 id="how-to-calculate-board-foot-cost">How to Calculate Lumber Costs</h2>
            <p>
              To calculate lumber costs, you need to know:
            </p>
            <ol>
              <li><strong>Board footage:</strong> The volume of usable wood, measured in board feet (BF)</li>
              <li><strong>Price per unit:</strong> The cost per board foot, which varies by wood species, grade, and supplier</li>
            </ol>
            <p>
              The formula for calculating lumber cost is simple:
            </p>
            <pre><code>Total Cost = Board Feet × Price Per Board Foot</code></pre>
            
            <h2 id="lumber-cost-factors">Factors Affecting Lumber Costs</h2>
            <p>
              Several factors influence the cost of lumber:
            </p>
            <ul>
              <li><strong>Wood species:</strong> Exotic or rare woods typically cost more than common domestic species</li>
              <li><strong>Grade:</strong> Higher grades (clearer, fewer defects) command premium prices</li>
              <li><strong>Surfacing:</strong> S4S (surfaced four sides) lumber costs more than rough lumber</li>
              <li><strong>Thickness:</strong> Thicker boards may cost more per board foot than thinner ones</li>
              <li><strong>Market conditions:</strong> Seasonal fluctuations and supply/demand affect pricing</li>
              <li><strong>Location:</strong> Regional availability and transportation costs impact final pricing</li>
            </ul>
            
            <h2 id="lumber-cost-faqs">Frequently Asked Questions</h2>
            
            <h3>What is a reasonable price per board foot?</h3>
            <p>
              Prices vary widely depending on species and grade. Common domestic hardwoods like oak or maple might range from $3-$8 per board foot, 
              while exotic species can cost $10-$30+ per board foot. Pine and other softwoods are typically less expensive, often $1-$4 per board foot.
            </p>
            
            <h3>How do I convert price per linear foot to price per board foot?</h3>
            <p>
              To convert price per linear foot to price per board foot:
            </p>
            <pre><code>Price per BF = (Price per LF) ÷ [(Width in inches × Thickness in inches) ÷ 12]</code></pre>
            
            <h3>How can I save money on lumber costs?</h3>
            <p>
              Consider these strategies:
            </p>
            <ul>
              <li>Buy rough lumber and mill it yourself</li>
              <li>Source lumber directly from small mills</li>
              <li>Purchase in bulk when possible</li>
              <li>Consider alternative or reclaimed wood species</li>
              <li>Optimize your cutting layouts to minimize waste</li>
              <li>Time purchases during seasonal price dips, when possible</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default CostPerBoardFootCalculator;
