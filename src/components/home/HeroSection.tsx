import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Calculator } from "lucide-react";
import BoardFootCalculator from "@/components/BoardFootCalculator";
import { cn } from "@/lib/utils";
import { Button } from "antd";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 relative bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[70%] rounded-full bg-primary/10 filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/60 filter blur-3xl opacity-60 animate-float"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[40%] rounded-full bg-blue-100/40 filter blur-3xl opacity-50"></div>
        <div className="absolute top-[5%] right-[15%] w-[25%] h-[25%] rounded-full bg-primary/5 filter blur-2xl opacity-60"></div>
        <div
          className="absolute top-[40%] left-[15%] w-[35%] h-[35%] rounded-full bg-amber/10 filter blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-[5%] right-[10%] w-[20%] h-[30%] rounded-full bg-amber-light/20 filter blur-2xl opacity-50 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={cn(
              "inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium",
              "transform transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <Calculator className="h-4 w-4 inline-block mr-2" />
            {/* Free BDFT Calculator Tool */}
            <Button type={"primary"}>Click me</Button>
          </div>

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6",
              "transform transition-all duration-1000 delay-100",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            Board Foot Calculator <span className="text-primary">(BDFT)</span>
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10",
              "transform transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            Calculate board feet (bdft) quickly and accurately with our free
            Board Foot Calculator. Measure lumber volume precisely for any
            woodworking or construction project.
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",
              "transform transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <Link
              to="/board-footage-calculator"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2"
            >
              Use BDFT Calculator
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#how-it-works"
              className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg shadow-sm hover:shadow hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 border border-gray-200"
            >
              Learn More
              <Info className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className={cn(
            "max-w-4xl mx-auto mt-10",
            "transform transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <BoardFootCalculator />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
