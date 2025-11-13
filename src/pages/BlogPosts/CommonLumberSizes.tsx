
import React from 'react';
import BlogPost from '../../components/BlogPost';
import { Table } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';

const CommonLumberSizes = () => {
  return (
    <BlogPost
      title="How Many Board Feet in Common Lumber Sizes (2x4, 2x6, and More)"
      description="Find out exactly how many board feet are in standard lumber dimensions with our comprehensive reference guide."
      date="March 25, 2025"
      readTime="5 min read"
      category="Lumber Reference"
      slug="common-lumber-sizes"
    >
      <p>
        One of the most common questions in woodworking is determining how many board feet are in standard lumber sizes. 
        Whether you're buying construction lumber like 2x4s or hardwood for fine furniture, understanding board feet calculations 
        for common dimensions saves time and reduces waste.
      </p>

      <h2>What is a Board Foot?</h2>
      <p>
        A board foot is a volume measurement equal to a piece of wood measuring 1 foot × 1 foot × 1 inch (or 144 cubic inches). 
        It's the standard unit for purchasing lumber in North America.
      </p>

      <h2>Standard Lumber Sizes vs. Actual Dimensions</h2>
      <p>
        Before calculating board feet, it's important to understand that lumber's nominal size (the size in its name) 
        differs from its actual dimensions after processing.
      </p>
      
      <Card className="my-6">
        <CardContent className="pt-6">
          <p className="font-semibold text-center mb-4">Nominal vs. Actual Dimensions for Common Lumber</p>
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <th>Nominal Size</th>
                  <th>Actual Dimensions (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1×4</td>
                  <td>¾″ × 3½″</td>
                </tr>
                <tr>
                  <td>2×4</td>
                  <td>1½″ × 3½″</td>
                </tr>
                <tr>
                  <td>2×6</td>
                  <td>1½″ × 5½″</td>
                </tr>
                <tr>
                  <td>2×8</td>
                  <td>1½″ × 7¼″</td>
                </tr>
                <tr>
                  <td>2×10</td>
                  <td>1½″ × 9¼″</td>
                </tr>
                <tr>
                  <td>2×12</td>
                  <td>1½″ × 11¼″</td>
                </tr>
                <tr>
                  <td>4×4</td>
                  <td>3½″ × 3½″</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <h2>Board Feet in Common Lumber Sizes (8 ft Length)</h2>
      <p>
        Let's calculate board feet for standard 8-foot lengths of common lumber sizes:
      </p>
      
      <Card className="my-6">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <th>Lumber Size</th>
                  <th>Board Feet in 8' Length</th>
                  <th>Calculation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2×4×8'</td>
                  <td>5.33 bd. ft.</td>
                  <td>(1.5″ × 3.5″ × 96″) ÷ 144 = 5.33</td>
                </tr>
                <tr>
                  <td>2×6×8'</td>
                  <td>8 bd. ft.</td>
                  <td>(1.5″ × 5.5″ × 96″) ÷ 144 = 8</td>
                </tr>
                <tr>
                  <td>2×8×8'</td>
                  <td>10.67 bd. ft.</td>
                  <td>(1.5″ × 7.25″ × 96″) ÷ 144 = 10.67</td>
                </tr>
                <tr>
                  <td>2×10×8'</td>
                  <td>13.67 bd. ft.</td>
                  <td>(1.5″ × 9.25″ × 96″) ÷ 144 = 13.67</td>
                </tr>
                <tr>
                  <td>2×12×8'</td>
                  <td>16.67 bd. ft.</td>
                  <td>(1.5″ × 11.25″ × 96″) ÷ 144 = 16.67</td>
                </tr>
                <tr>
                  <td>4×4×8'</td>
                  <td>9.33 bd. ft.</td>
                  <td>(3.5″ × 3.5″ × 96″) ÷ 144 = 9.33</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <h2>Board Feet in Common Lumber Sizes (10 ft Length)</h2>
      
      <Card className="my-6">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <th>Lumber Size</th>
                  <th>Board Feet in 10' Length</th>
                  <th>Calculation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2×4×10'</td>
                  <td>6.67 bd. ft.</td>
                  <td>(1.5″ × 3.5″ × 120″) ÷ 144 = 6.67</td>
                </tr>
                <tr>
                  <td>2×6×10'</td>
                  <td>10 bd. ft.</td>
                  <td>(1.5″ × 5.5″ × 120″) ÷ 144 = 10</td>
                </tr>
                <tr>
                  <td>2×8×10'</td>
                  <td>13.33 bd. ft.</td>
                  <td>(1.5″ × 7.25″ × 120″) ÷ 144 = 13.33</td>
                </tr>
                <tr>
                  <td>2×10×10'</td>
                  <td>17.08 bd. ft.</td>
                  <td>(1.5″ × 9.25″ × 120″) ÷ 144 = 17.08</td>
                </tr>
                <tr>
                  <td>2×12×10'</td>
                  <td>20.83 bd. ft.</td>
                  <td>(1.5″ × 11.25″ × 120″) ÷ 144 = 20.83</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <h2>Board Feet in Common Lumber Sizes (12 ft Length)</h2>
      
      <Card className="my-6">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <Table>
              <thead>
                <tr>
                  <th>Lumber Size</th>
                  <th>Board Feet in 12' Length</th>
                  <th>Calculation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2×4×12'</td>
                  <td>8 bd. ft.</td>
                  <td>(1.5″ × 3.5″ × 144″) ÷ 144 = 8</td>
                </tr>
                <tr>
                  <td>2×6×12'</td>
                  <td>12 bd. ft.</td>
                  <td>(1.5″ × 5.5″ × 144″) ÷ 144 = 12</td>
                </tr>
                <tr>
                  <td>2×8×12'</td>
                  <td>16 bd. ft.</td>
                  <td>(1.5″ × 7.25″ × 144″) ÷ 144 = 16</td>
                </tr>
                <tr>
                  <td>2×10×12'</td>
                  <td>20.5 bd. ft.</td>
                  <td>(1.5″ × 9.25″ × 144″) ÷ 144 = 20.5</td>
                </tr>
                <tr>
                  <td>2×12×12'</td>
                  <td>25 bd. ft.</td>
                  <td>(1.5″ × 11.25″ × 144″) ÷ 144 = 25</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <h2>Quick Formula for Common Sizes</h2>
      <p>
        For standard construction lumber, here's a quick way to calculate board feet:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md my-4">
        Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12
      </pre>
      <p>
        Example: For a 2×6×12' piece, using actual dimensions:
        <br />
        Board Feet = (1.5″ × 5.5″ × 12′) ÷ 12 = 12 board feet
      </p>
      
      <h2>Hardwoods and S4S Lumber</h2>
      <p>
        For hardwoods and S4S (surfaced four sides) lumber, the calculation is the same, but the dimensions will be more 
        precise to the nominal size. For example, 4/4 (one inch) hardwood is typically 13/16″ (0.8125″) after milling.
      </p>

      <h3>Typical Hardwood Thicknesses</h3>
      <ul>
        <li>4/4 (1″ nominal) = 13/16″ actual thickness</li>
        <li>5/4 (1.25″ nominal) = 1-1/16″ actual thickness</li>
        <li>6/4 (1.5″ nominal) = 1-5/16″ actual thickness</li>
        <li>8/4 (2″ nominal) = 1-3/4″ actual thickness</li>
      </ul>
      
      <h2>Using Our Board Footage Calculator</h2>
      <p>
        For precise calculations with any lumber dimensions, use our 
        <a href="/board-footage-calculator" className="text-primary hover:underline"> Board Footage Calculator</a>. 
        It handles both standard and custom sizes to give you exact board foot measurements for any project.
      </p>
      
      <h2>Conclusion</h2>
      <p>
        Understanding board feet in common lumber sizes helps you estimate materials more accurately, reduce waste, 
        and better plan your woodworking projects. Whether you're building furniture, a deck, or a small craft, 
        these reference values provide a quick way to determine how much lumber you need.
      </p>
      
      <div className="mt-8 border-t pt-6">
        <h3>Related Resources:</h3>
        <ul className="space-y-2 mt-2">
          <li>
            <a href="/board-footage-calculator" className="text-primary hover:underline">
              Board Footage Calculator - Calculate board feet for any dimensions
            </a>
          </li>
          <li>
            <a href="/blog/board-foot-formula" className="text-primary hover:underline">
              Board Foot Formula - Master the standard calculation method
            </a>
          </li>
          <li>
            <a href="/blog/board-feet-to-square-feet" className="text-primary hover:underline">
              Converting Board Feet to Square Feet - Understanding different measurement systems
            </a>
          </li>
        </ul>
      </div>
    </BlogPost>
  );
};

export default CommonLumberSizes;
