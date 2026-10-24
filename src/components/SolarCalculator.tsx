import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, CheckCircle, Shield, Sparkles, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface SolarCalculatorProps {
  onQuoteWithSpecs: (specsText: string) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onQuoteWithSpecs }) => {
  const [projectType, setProjectType] = useState<'highway' | 'estate' | 'compound' | 'industrial'>('estate');
  const [roadLength, setRoadLength] = useState<number>(1000); // meters
  const [poleHeight, setPoleHeight] = useState<number>(8); // meters
  const [autonomyDays, setAutonomyDays] = useState<number>(3); // days

  // Dynamic calculations
  const calculateRecommendation = () => {
    let poleSpacing = 30; // meters
    let recommendedWattage = '100W - 150W';
    let modelName = 'Amaoso WA Series 120W All-In-One';
    let targetLux = '15 - 25 Lux (Class M4/M5)';
    let batteryCapacity = 'LiFePO4 12.8V 42Ah';
    let solarPanelWatt = '140W Monocrystalline';

    if (projectType === 'highway') {
      poleSpacing = 35;
      recommendedWattage = '150W - 250W';
      modelName = 'Amaoso WG Series 200W Split Highway Luminaire';
      targetLux = '25 - 40 Lux (Class M2/M3 Expressways)';
      batteryCapacity = 'LiFePO4 12.8V 80Ah Deep-Cycle';
      solarPanelWatt = '260W Monocrystalline';
    } else if (projectType === 'estate') {
      poleSpacing = 28;
      recommendedWattage = '80W - 120W';
      modelName = 'Amaoso WA / WK Series 100W Integrated Solar';
      targetLux = '12 - 20 Lux (Class P2/P3 Residential)';
      batteryCapacity = 'LiFePO4 3.2V 60Ah';
      solarPanelWatt = '100W Monocrystalline';
    } else if (projectType === 'compound') {
      poleSpacing = 25;
      recommendedWattage = '150W - 300W';
      modelName = 'Amaoso J-Series 300W Heavy-Duty Solar Floodlight';
      targetLux = '30 - 50 Lux (Perimeter Security)';
      batteryCapacity = 'LiFePO4 3.2V 90Ah';
      solarPanelWatt = '180W Monocrystalline';
    } else if (projectType === 'industrial') {
      poleSpacing = 12;
      recommendedWattage = '150W - 240W';
      modelName = 'Amaoso UFO LED 200W High Bay Luminaire';
      targetLux = '300 - 500 Lux (Industrial Workshop standard)';
      batteryCapacity = 'AC Industrial Isolated MeanWell Driver';
      solarPanelWatt = 'Hybrid Solar / AC Inverter Compatible';
    }

    const estimatedPoles = Math.max(2, Math.ceil(roadLength / poleSpacing));
    const kwhSavedPerYear = estimatedPoles * 150 * 12 * 365 / 1000; // estimated annual kWh
    const dieselLitersSaved = Math.round(kwhSavedPerYear * 0.3); // diesel liters saved vs generator

    return {
      poleSpacing,
      recommendedWattage,
      modelName,
      targetLux,
      batteryCapacity,
      solarPanelWatt,
      estimatedPoles,
      kwhSavedPerYear: Math.round(kwhSavedPerYear),
      dieselLitersSaved
    };
  };

  const rec = calculateRecommendation();

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello aMaoso Engineering Desk, I used your website Solar Sizing Calculator with the following parameters:\n` +
      `- Project Type: ${projectType.toUpperCase()}\n` +
      `- Length/Distance: ${roadLength}m\n` +
      `- Target Pole Height: ${poleHeight}m\n` +
      `- Recommended Luminaire: ${rec.modelName}\n` +
      `- Estimated Units Required: ${rec.estimatedPoles} units\n` +
      `Please provide formal commercial pricing and availability from your Lagos or Warri warehouse.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappDirect}?text=${text}`, '_blank');
  };

  const handleForwardToRFQ = () => {
    const specsSummary = `Project Type: ${projectType.toUpperCase()} | Corridor Distance: ${roadLength}m | Recommended Model: ${rec.modelName} | Estimated Units: ${rec.estimatedPoles} poles | Autonomy: ${autonomyDays} days`;
    onQuoteWithSpecs(specsSummary);
  };

  return (
    <section id="calculator" className="py-24 relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/50 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Engineering Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Solar Lighting Sizing & Wattage Estimator
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Quickly estimate recommended pole spacing, required wattage, battery autonomy, and luminaire models for NDDC community tenders and Nigerian infrastructure projects.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left 6 cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-[#e03a45]" />
              <span>Project Parameters</span>
            </h3>

            {/* Application Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                1. Project Application Type
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setProjectType('highway')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    projectType === 'highway'
                      ? 'bg-[#363b94]/30 border-[#363b94] text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <p className="font-bold text-white">Highway & Expressway</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Wide lanes, high speeds (10-12m)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('estate')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    projectType === 'estate'
                      ? 'bg-[#363b94]/30 border-[#363b94] text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <p className="font-bold text-white">Residential Estate</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Gated roads & avenues (6-8m)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('compound')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    projectType === 'compound'
                      ? 'bg-[#363b94]/30 border-[#363b94] text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <p className="font-bold text-white">Commercial Perimeter</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Warehouses, yards, security (8-10m)</p>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectType('industrial')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    projectType === 'industrial'
                      ? 'bg-[#363b94]/30 border-[#363b94] text-white shadow-md'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <p className="font-bold text-white">Industrial Workshop</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">High bay indoor fixtures (8-15m)</p>
                </button>
              </div>
            </div>

            {/* Road / Facility Corridor Length Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-300 uppercase tracking-wider">
                  2. Corridor Distance / Road Length
                </label>
                <span className="text-[#e03a45] font-bold font-mono text-sm bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {roadLength >= 1000 ? `${(roadLength / 1000).toFixed(1)} km (${roadLength}m)` : `${roadLength} meters`}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={roadLength}
                onChange={(e) => setRoadLength(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#c9313b]"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>100m (Single compound)</span>
                <span>2.5 km</span>
                <span>5.0 km</span>
                <span>10 km (Interstate)</span>
              </div>
            </div>

            {/* Target Pole Height */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-300 uppercase tracking-wider">
                  3. Target Pole Mounting Height
                </label>
                <span className="text-[#e03a45] font-bold font-mono text-sm bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {poleHeight} Meters
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {[6, 8, 10, 12].map((height) => (
                  <button
                    key={height}
                    type="button"
                    onClick={() => setPoleHeight(height)}
                    className={`py-2 rounded-lg border font-bold transition-all ${
                      poleHeight === height
                        ? 'bg-[#363b94] text-white border-[#363b94] shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {height}m
                  </button>
                ))}
              </div>
            </div>

            {/* Rainy Day Autonomy */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-300 uppercase tracking-wider">
                  4. Rainy Season Battery Reserve Autonomy
                </label>
                <span className="text-[#e03a45] font-bold font-mono text-xs bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {autonomyDays} Continuous Overcast Days
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[2, 3, 5].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => setAutonomyDays(days)}
                    className={`py-2 rounded-lg border font-bold transition-all ${
                      autonomyDays === days
                        ? 'bg-[#363b94] text-white border-[#363b94] shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {days} Days Reserve
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Real-Time Engineering Recommendation (Right 6 cols) */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-[#363b94]/60 relative overflow-hidden shadow-2xl space-y-6">
            
            {/* Top ambient highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#363b94]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold text-[#e03a45] uppercase tracking-wider">
                  Engineering Sizing Output
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">
                  Recommended Configuration
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#363b94]/30 text-white flex items-center justify-center border border-[#363b94]/50">
                <Zap className="w-5 h-5 text-[#e03a45]" />
              </div>
            </div>

            {/* Recommended Model Highlight Card */}
            <div className="p-4 rounded-xl bg-[#0f1322] border border-[#363b94]/50 space-y-2">
              <p className="text-xs text-slate-400 uppercase font-semibold">Recommended Luminaire System</p>
              <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
                {rec.modelName}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs pt-1">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Target: {rec.targetLux}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#363b94]/40 text-slate-200 border border-[#363b94]/50 font-medium">
                  Rating: {rec.recommendedWattage}
                </span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Total Lighting Units</p>
                <p className="text-2xl font-black text-white font-['Space_Grotesk'] mt-0.5">
                  {rec.estimatedPoles}{' '}
                  <span className="text-xs text-slate-400 font-normal">units</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Based on {rec.poleSpacing}m pole spacing</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Energy Independence</p>
                <p className="text-2xl font-black text-emerald-400 font-['Space_Grotesk'] mt-0.5">
                  100%{' '}
                  <span className="text-xs text-slate-400 font-normal">Off-Grid</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Zero monthly NEPA/EKEDC billing</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Storage Architecture</p>
                <p className="text-sm font-bold text-slate-200 mt-1 truncate">
                  {rec.batteryCapacity}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">LiFePO4 2000+ cycle life</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[11px] text-slate-400 uppercase font-semibold">Solar Generation</p>
                <p className="text-sm font-bold text-slate-200 mt-1 truncate">
                  {rec.solarPanelWatt}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">22.5% Monocrystalline conversion</p>
              </div>
            </div>

            {/* Environmental & Financial Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs space-y-1.5">
              <div className="flex items-center text-emerald-400 font-bold space-x-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>Estimated Annual Operational Savings</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Replaces approx. <strong>{rec.kwhSavedPerYear.toLocaleString()} kWh/year</strong> of grid electricity or <strong>{rec.dieselLitersSaved.toLocaleString()} Liters of diesel generator fuel</strong> per year for continuous night security.
              </p>
            </div>

            {/* Actions: Send to WhatsApp or Formal RFQ */}
            <div className="pt-2 space-y-2.5">
              <button
                type="button"
                onClick={handleForwardToRFQ}
                className="w-full py-3.5 px-4 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-xl shadow-[#c9313b]/30 cursor-pointer"
              >
                <span>Request Formal Quotation with this Calculation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Send Sizing Results Directly to Lagos/Warri Engineer (WhatsApp)</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
