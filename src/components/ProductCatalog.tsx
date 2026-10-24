import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { 
  Sun, 
  ArrowUpRight, 
  Search, 
  Check, 
  FileText, 
  X, 
  MessageCircle,
  Maximize2,
  Camera
} from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

interface ProductCatalogProps {
  onSelectProductForRFQ: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [modalImageTab, setModalImageTab] = useState<'model' | 'real'>('model');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'street-light', label: 'Solar Street Lights' },
    { id: 'floodlight', label: 'Solar Floodlights' },
    { id: 'high-bay', label: 'Industrial High Bays' },
    { id: 'hybrid', label: 'Solar Systems' },
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.productNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.powerRange.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getProductWhatsAppUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hello aMaoso Lighting Team, I am requesting quotation for:\n` +
      `Product: ${product.name} (${product.productNo})\n` +
      `Power: ${product.powerRange}\n` +
      `Please provide current price and stock status in Lagos/Warri.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappDirect}?text=${text}`;
  };

  return (
    <section id="products" className="py-24 relative bg-[#090c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#363b94]/20 border border-[#363b94]/50 text-[#e03a45] text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 text-[#363b94]" />
            <span>Official Product Line • NDDC Approved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
            Our Products
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            NDDC approved high-efficiency solar streetlights, floodlights, and industrial luminaires with Class A LiFePO4 batteries, proven in community installations across Akwa Ibom, Rivers, and Delta State.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel p-4 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#363b94]/40">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#363b94] text-white shadow-md shadow-[#363b94]/40 border border-white/20'
                    : 'bg-[#111524] text-slate-300 hover:bg-[#1a2035] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product name or No..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#111524] border border-[#363b94]/40 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c9313b] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel rounded-2xl overflow-hidden border border-[#363b94]/30 hover:border-[#c9313b]/70 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-[#363b94]/20"
            >
              {/* Product Photo Box with Real Photo from old site */}
              <div className="relative h-56 bg-[#111526] overflow-hidden flex items-center justify-center p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded bg-[#090c15]/90 text-[#e03a45] text-[10px] font-bold border border-[#363b94]/40">
                    {product.productNo}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded bg-[#090c15]/90 text-slate-300 text-[10px] font-mono border border-[#363b94]/40">
                    {product.ipRating}
                  </span>
                </div>

                {/* Real photo thumbnail hint */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-[#090c15]/90 text-[10px] text-slate-300 flex items-center space-x-1 border border-slate-800">
                  <Camera className="w-3 h-3 text-[#363b94]" />
                  <span>Real Photo</span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#e03a45] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    Power: <strong className="text-white">{product.powerRange}</strong>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Chips: <span className="text-slate-300">{product.chips}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Lumen: <span className="text-[#e03a45] font-semibold">{product.lumens}</span>
                  </p>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setModalImageTab('model');
                      setActiveModalProduct(product);
                    }}
                    className="flex-1 py-2 px-3 rounded-xl bg-[#111524] hover:bg-[#1a2035] text-slate-200 hover:text-white border border-[#363b94]/40 text-xs font-semibold flex items-center justify-center space-x-1 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#363b94]" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => onSelectProductForRFQ(product.name)}
                    className="py-2 px-3.5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1 transition-all shadow-md shadow-[#c9313b]/30 cursor-pointer"
                    title="Get Quote"
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-[#363b94]/60 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-[#363b94]/30 flex justify-between items-start bg-[#111524]">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#363b94]/20 text-[#e03a45] border border-[#363b94]/40">
                    Model: {activeModalProduct.productNo}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-bold">
                    {activeModalProduct.ipRating}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Space_Grotesk']">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Product Visual Tabs */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setModalImageTab('model')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      modalImageTab === 'model'
                        ? 'bg-[#363b94] text-white'
                        : 'bg-[#111524] text-slate-400 hover:text-white'
                    }`}
                  >
                    Studio Spec Visual
                  </button>
                  <button
                    onClick={() => setModalImageTab('real')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center space-x-1 transition-colors ${
                      modalImageTab === 'real'
                        ? 'bg-[#c9313b] text-white'
                        : 'bg-[#111524] text-slate-400 hover:text-white'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Real Factory Product Photo</span>
                  </button>
                </div>

                <div className="rounded-xl overflow-hidden h-64 bg-[#111526] border border-[#363b94]/40 flex items-center justify-center p-4">
                  <img
                    src={modalImageTab === 'model' ? activeModalProduct.image : activeModalProduct.realImage}
                    alt={activeModalProduct.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Exact Specs Table from old website */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#e03a45] uppercase tracking-wider flex items-center space-x-1.5">
                  <FileText className="w-4 h-4 text-[#363b94]" />
                  <span>Key Specifications (amaoso.com Data)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">Product No.:</span>
                    <span className="font-semibold text-white">{activeModalProduct.productNo}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">Power Options:</span>
                    <span className="font-semibold text-white">{activeModalProduct.powerRange}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">System Voltage:</span>
                    <span className="font-semibold text-white">{activeModalProduct.voltage}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">LED Chips:</span>
                    <span className="font-semibold text-white">{activeModalProduct.chips}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">Luminous Output:</span>
                    <span className="font-semibold text-[#e03a45]">{activeModalProduct.lumens}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between">
                    <span className="text-slate-400">Battery Type:</span>
                    <span className="font-semibold text-white truncate max-w-[180px]">{activeModalProduct.battery}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111524] border border-[#363b94]/30 flex justify-between sm:col-span-2">
                    <span className="text-slate-400">Solar Panel:</span>
                    <span className="font-semibold text-white">{activeModalProduct.solarPanel}</span>
                  </div>
                </div>
              </div>

              {/* Exact Features from old website */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#e03a45] uppercase tracking-wider">
                  Key Features
                </h4>
                <div className="space-y-1.5 text-xs">
                  {activeModalProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-[#363b94]/30 bg-[#111524] flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={getProductWhatsAppUrl(activeModalProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = activeModalProduct.name;
                    setActiveModalProduct(null);
                    onSelectProductForRFQ(name);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#c9313b] hover:bg-[#a8252e] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Request Price Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
