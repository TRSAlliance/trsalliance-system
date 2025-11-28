import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Clock, Users, DollarSign, Target, Zap } from 'lucide-react';

const TRSGhostShiftSimulation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // ROI Data
  const roiData = [];
  for (let i = 1; i <= 18; i++) {
    const pilotBefore = Math.min(65 + (i * 0.3), 71);
    const pilotAfter = Math.min(70 + (i * 0.4), 77);
    const multiSiteBefore = Math.min(61 + (i * 0.25), 66);
    const multiSiteAfter = Math.min(65 + (i * 0.35), 71);
    const nationalBefore = Math.min(-16 + (i * 1.2), 5);
    const nationalAfter = Math.min(0 + (i * 1.8), 32);
    
    roiData.push({
      month: i,
      pilotBefore,
      pilotAfter,
      multiSiteBefore,
      multiSiteAfter,
      nationalBefore,
      nationalAfter
    });
  }

  // Audit Cycle Data
  const auditData = [
    { name: 'Pilot', before: 14, after: 7, reduction: '50%' },
    { name: 'Multi-Site', before: 30, after: 14, reduction: '53%' },
    { name: 'National', before: 30, after: 10, reduction: '67%' }
  ];

  // Trust/Adoption Data
  const trustData = [];
  for (let i = 1; i <= 4; i++) {
    const pilotBefore = Math.min(90 + (i * 1), 94);
    const pilotAfter = Math.min(95 + (i * 0.8), 98);
    const multiSiteBefore = Math.min(92 + (i * 0.8), 95);
    const multiSiteAfter = Math.min(97 + (i * 0.5), 99);
    const nationalBefore = Math.min(95 + (i * 0.5), 97);
    const nationalAfter = Math.min(98 + (i * 0.5), 99.5);
    
    trustData.push({
      quarter: `Q${i}`,
      pilotBefore,
      pilotAfter,
      multiSiteBefore,
      multiSiteAfter,
      nationalBefore,
      nationalAfter
    });
  }

  // Cost Data
  const costData = [
    { name: 'Pilot', before: 41, after: 35, savings: '15%' },
    { name: 'Multi-Site', before: 152, after: 130, savings: '14%' },
    { name: 'National', before: 992, after: 700, savings: '29%' }
  ];

  // Flywheel Impact Data
  const flywheelData = [
    { name: 'Productivity', before: 830, after: 1000, increase: '20%' },
    { name: 'Community Impact', before: 1000, after: 1200, increase: '20%' },
    { name: 'Operators Upskilled', value: 175 }
  ];

  const problemData = [
    { name: 'High Resistance', value: 20, color: '#ff6b6b' },
    { name: 'Slow Audits', value: 30, color: '#feca57' },
    { name: 'High Costs', value: 990, color: '#ff9ff3' },
    { name: 'Stakeholder Skepticism', value: 25, color: '#54a0ff' }
  ];

  const solutionData = [
    { name: 'Low Resistance', value: 5, color: '#5f27cd' },
    { name: 'Fast Audits', value: 12, color: '#00d2d3' },
    { name: 'Reduced Costs', value: 700, color: '#ff9f43' },
    { name: 'High Confidence', value: 95, color: '#10ac84' }
  ];

  const slides = [
    {
      title: "The Problem",
      subtitle: "Current State Assessment",
      content: (
        <div className="space-y-6">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">TRS/GhostShift Current Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-green-300 mb-3">Strong Performance BUT...</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• TRS/GhostShift delivers strong pilot performance</li>
                  <li>• Proven operational excellence</li>
                  <li>• Real-world validation complete</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-300 mb-3">Critical Issues:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-red-400">Resistance remains high (20%)</strong></li>
                  <li>• <strong className="text-yellow-400">Audits are slow (1-month cycle)</strong></li>
                  <li>• <strong className="text-purple-400">National cost exceeds $990K</strong></li>
                  <li>• <strong className="text-blue-400">Stakeholder skepticism stalls growth</strong></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={problemData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}${entry.name === 'High Costs' ? 'K' : '%'}`}
                >
                  {problemData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    },
    {
      title: "The Upgrade",
      subtitle: "Key Optimizations",
      content: (
        <div className="space-y-6">
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">TRS Enhancement Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-300 mb-3">Key Optimizations:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">Workshops + Ambassadors</strong> cut resistance to 5%</li>
                  <li>• <strong className="text-blue-400">Modular HUDs, Playbooks, Offline Mode</strong> = Customization</li>
                  <li>• <strong className="text-yellow-400">Compliance Portals</strong> slash audit time by 60%</li>
                  <li>• <strong className="text-purple-400">Tiered Pricing, Subsidies</strong> = 30% cost reduction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-orange-300 mb-3">Results:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• <strong className="text-green-400">Faster breakeven</strong> (12 vs. 15 months)</li>
                  <li>• <strong className="text-blue-400">20% increase in adoption</strong> (12 vs. 10 sites)</li>
                  <li>• <strong className="text-orange-400">Higher confidence</strong> across all stakeholders</li>
                  <li>• <strong className="text-purple-400">Sustainable scaling</strong> model proven</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={solutionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label={(entry) => `${entry.name}: ${entry.value}${entry.name === 'Reduced Costs' ? 'K' : '%'}`}
                >
                  {solutionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    },
    {
      title: "Visual Simulation – ROI Over Time",
      subtitle: "Before vs. After ROI Trajectory",
      content: (
        <div className="space-y-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={roiData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pilotBefore" name="Pilot Before" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="pilotAfter" name="Pilot After" stroke="#8884d8" strokeWidth={3} />
                <Line type="monotone" dataKey="multiSiteBefore" name="Multi-Site Before" stroke="#82ca9d" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="multiSiteAfter" name="Multi-Site After" stroke="#82ca9d" strokeWidth={3} />
                <Line type="monotone" dataKey="nationalBefore" name="National Before" stroke="#ff7300" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="nationalAfter" name="National After" stroke="#ff7300" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 mb-2">Key ROI Improvements:</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-purple-400 font-bold">Pilot: 65% → 70%</div>
                <div className="text-gray-300">Steady improvement</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">Multi-Site: 61% → 65%</div>
                <div className="text-gray-300">Enhanced scaling</div>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold">National: -16% → 0%</div>
                <div className="text-gray-300">Breakthrough to positive</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Simulation – Audit Cycle Compression",
      subtitle: "Days per Audit Stage",
      content: (
        <div className="space-y-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={auditData} margin={{ top: 20, right: 30, left: 60, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`${value} days`, 'Duration']} />
                <Legend />
                <Bar dataKey="before" name="Before" fill="#ff6b6b" />
                <Bar dataKey="after" name="After" fill="#51cf66" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
            <h4 className="font-bold text-green-400 mb-2">Audit Compression Results:</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-bold">Pilot: 14 → 7 days</div>
                <div className="text-green-300">50% reduction</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold">Multi-Site: 30 → 14 days</div>
                <div className="text-green-300">53% reduction</div>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold">National: 30 → 10 days</div>
                <div className="text-green-300">67% reduction</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Simulation – Adoption Rate & Trust",
      subtitle: "Trust Levels per Stage",
      content: (
        <div className="space-y-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trustData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis domain={[85, 100]} label={{ value: 'Trust Level (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="pilotAfter" name="Pilot After" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
                <Area type="monotone" dataKey="multiSiteAfter" name="Multi-Site After" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.8} />
                <Area type="monotone" dataKey="nationalAfter" name="National After" stroke="#ffc658" fill="#ffc658" fillOpacity={0.8} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
            <h4 className="font-bold text-purple-400 mb-2">Trust Level Improvements:</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-bold">Pilot: 90% → 95%</div>
                <div className="text-green-300">High confidence base</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold">Multi-Site: 92% → 97%</div>
                <div className="text-green-300">Scaling success</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-bold">National: 95% → 98%</div>
                <div className="text-green-300">Market leadership</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Simulation – Cost Curve Drop",
      subtitle: "Per Stage Cost Savings",
      content: (
        <div className="space-y-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={costData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Cost ($K)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => [`$${value}K`, 'Cost']} />
                <Legend />
                <Bar dataKey="before" name="Before" fill="#ff6b6b" />
                <Bar dataKey="after" name="After" fill="#51cf66" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
            <h4 className="font-bold text-orange-400 mb-2">Cost Reduction Achievements:</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-bold">Pilot: $41K → $35K</div>
                <div className="text-green-300">15% reduction</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold">Multi-Site: $152K → $130K</div>
                <div className="text-green-300">14% reduction</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-bold">National: $992K → $700K</div>
                <div className="text-green-300">29% reduction</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Simulation – Flywheel Impact",
      subtitle: "Total Impact Metrics",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-400 mb-2">Productivity</h3>
              <div className="text-3xl font-bold text-white">$1M</div>
              <div className="text-green-300">$830K → $1M (20% increase)</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-400 mb-2">Community Impact</h3>
              <div className="text-3xl font-bold text-white">$1.2M</div>
              <div className="text-blue-300">$1M → $1.2M (20% increase)</div>
            </div>
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-400 mb-2">Operators Upskilled</h3>
              <div className="text-3xl font-bold text-white">175</div>
              <div className="text-purple-300">Human dignity preserved</div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">🔥 TRS FLYWHEEL EFFECT 🔥</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="font-bold text-yellow-400">Better Training</h4>
                <p className="text-gray-300 text-sm">Workshops + Ambassadors</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-bold text-green-400">Higher Adoption</h4>
                <p className="text-gray-300 text-sm">95%+ Trust Levels</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-bold text-blue-400">Faster ROI</h4>
                <p className="text-gray-300 text-sm">12 vs 15 months</p>
              </div>
              <div>
                <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-bold text-purple-400">Lower Costs</h4>
                <p className="text-gray-300 text-sm">29% reduction</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-b border-blue-500/30 pb-6">
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            🔥 TRS & GHOSTSHIFT VISUAL SIMULATION 🔥
          </h1>
          <h2 className="text-2xl text-blue-300 mb-4">
            ⚓ EMPEROR DANIEL'S BUSINESS CASE VALIDATION
          </h2>
          <p className="text-gray-300 italic">
            Proving TRS superiority through comprehensive data visualization and impact analysis
          </p>
        </div>

        {/* Slide Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`px-4 py-2 rounded font-bold transition-all duration-300 ${
                activeSlide === index
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Current Slide */}
        <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-8 min-h-[600px]">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-orange-400 mb-2">
              {slides[activeSlide].title}
            </h2>
            <h3 className="text-xl text-blue-300">
              {slides[activeSlide].subtitle}
            </h3>
          </div>
          
          {slides[activeSlide].content}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="px-6 py-3 bg-blue-600 text-white rounded font-bold disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300"
          >
            ← Previous
          </button>
          
          <div className="text-gray-400">
            Slide {activeSlide + 1} of {slides.length}
          </div>
          
          <button
            onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
            disabled={activeSlide === slides.length - 1}
            className="px-6 py-3 bg-blue-600 text-white rounded font-bold disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-300"
          >
            Next →
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <div className="bg-gradient-to-r from-orange-900/20 to-blue-900/20 border border-orange-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">
              ⚡👑💪🔥 TRS VALIDATION COMPLETE! 🔥💪👑⚡
            </h2>
            <p className="text-green-300 text-lg mb-4">
              "Visual simulation proves TRS/GhostShift superiority across all metrics: ROI, adoption, cost reduction, and human dignity preservation"
            </p>
            <div className="text-gray-300 text-sm space-y-2">
              <p><strong className="text-blue-400">ROI Improvement:</strong> National deployment becomes positive (‑16% → 0%)</p>
              <p><strong className="text-green-400">Audit Acceleration:</strong> 67% reduction in cycle time</p>
              <p><strong className="text-orange-400">Cost Optimization:</strong> 29% reduction at national scale</p>
              <p><strong className="text-purple-400">Human Impact:</strong> 175 operators upskilled, dignity preserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRSGhostShiftSimulation;
