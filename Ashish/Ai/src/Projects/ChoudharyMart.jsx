import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  Star,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  Search,
  SlidersHorizontal,
  X,
  CreditCard,
  Truck,
  ShieldCheck,
  RotateCcw,
  Tag,
  Plus,
  Minus,
  Trash2,
  Eye,
  ExternalLink,
  Layers,
  Code2,
  Cpu,
} from "lucide-react";

// Product Catalog for Choudhary E-Commerce
export const choudharyProducts = [
  {
    id: 1,
    name: 'Choudhary Pro CyberBook 16"',
    category: "Laptops",
    price: 1299,
    originalPrice: 1499,
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    imageEmoji: "💻",
    bgGradient: "from-blue-600/30 via-cyan-500/20 to-indigo-900/40",
    description:
      "Ultra-slim M3 Max powered workstation with 120Hz Liquid Retina XDR display and 32GB unified RAM.",
    tags: ["M3 Pro Chip", "32GB RAM", "1TB SSD", "18h Battery"],
  },
  {
    id: 2,
    name: "AeroSound Pro Wireless ANC Headphones",
    category: "Audio",
    price: 249,
    originalPrice: 299,
    rating: 4.8,
    reviews: 94,
    badge: "Popular",
    imageEmoji: "🎧",
    bgGradient: "from-purple-600/30 via-pink-500/20 to-slate-900/40",
    description:
      "Spatial audio with dynamic head tracking, 40dB active noise cancellation, and 45-hour ultra playback.",
    tags: ["Spatial Audio", "40dB ANC", "Type-C Fast Charge", "Hi-Res Audio"],
  },
  {
    id: 3,
    name: "NovaPulse Ultra Smartwatch Titanium",
    category: "Wearables",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviews: 76,
    badge: "Hot Deal",
    imageEmoji: "⌚",
    bgGradient: "from-emerald-600/30 via-teal-500/20 to-cyan-900/40",
    description:
      "Sapphire glass AMOLED display, continuous ECG & SpO2 tracking, dual-frequency GPS, and 100m water resistance.",
    tags: ["ECG Monitor", 'AMOLED 1.5"', "Dual GPS", "14-Day Battery"],
  },
  {
    id: 4,
    name: "Lumix RGB Mechanical Gaming Keyboard",
    category: "Accessories",
    price: 119,
    originalPrice: 159,
    rating: 4.9,
    reviews: 210,
    badge: "Top Rated",
    imageEmoji: "⌨️",
    bgGradient: "from-amber-600/30 via-orange-500/20 to-red-900/40",
    description:
      "Hot-swappable custom linear switches, PBT double-shot keycaps, south-facing RGB, and CNC aluminum frame.",
    tags: ["Hot-Swap", "CNC Aluminum", "Wireless 2.4G", "Sound Dampened"],
  },
  {
    id: 5,
    name: "VisionX 4K OLED Curved Gaming Display",
    category: "Displays",
    price: 699,
    originalPrice: 849,
    rating: 4.9,
    reviews: 63,
    badge: "Flagship",
    imageEmoji: "🖥️",
    bgGradient: "from-cyan-600/30 via-blue-500/20 to-violet-900/40",
    description:
      "34-inch 1800R curved quantum OLED panel, 240Hz refresh rate, 0.03ms response time, and HDR1000 TrueBlack.",
    tags: ["OLED 4K", "240Hz", "0.03ms", "HDR 1000"],
  },
  {
    id: 6,
    name: "MagCharge 3-in-1 Fast Wireless Dock",
    category: "Accessories",
    price: 79,
    originalPrice: 99,
    rating: 4.6,
    reviews: 88,
    badge: "Trending",
    imageEmoji: "⚡",
    bgGradient: "from-fuchsia-600/30 via-purple-500/20 to-indigo-900/40",
    description:
      "Foldable MagSafe certified charging stand capable of simultaneously fueling your phone, watch, and earbuds.",
    tags: ["15W MagSafe", "Foldable", "LED Indicator", "Overheat Protection"],
  },
];

export default function Projects() {
  // State management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([
    { ...choudharyProducts[0], qty: 1 },
    { ...choudharyProducts[1], qty: 1 },
  ]);
  const [wishlist, setWishlist] = useState([2, 4]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);

  const categories = [
    "All",
    "Laptops",
    "Audio",
    "Wearables",
    "Accessories",
    "Displays",
  ];

  // Filter products
  const filteredProducts = choudharyProducts.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart operations
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const shipping = subtotal > 500 || cart.length === 0 ? 0 : 25;
  const total = subtotal - discountAmount + shipping;
  const totalCartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (
      couponCode.trim().toUpperCase() === "CHOUDHARY15" ||
      couponCode.trim().toUpperCase() === "ASHISH"
    ) {
      setDiscountApplied(true);
    } else {
      alert("Use code: CHOUDHARY15 or ASHISH to get 15% discount! 🎉");
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setOrderSuccessModal(true);
  };

  return (
    <section id="projects" className="py-24 relative max-w-7xl mx-auto px-6">
      {/* SECTION HEADER */}
      <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
          <Sparkles
            className="w-3.5 h-3.5 animate-spin"
            style={{ animationDuration: "6s" }}
          />
          <span>Flagship Production Project</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
          Choudhary{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
            - Mart{" "}
          </span>
        </h2>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          A high-performance, full-featured modern e-commerce platform built
          with React 19, Tailwind CSS, real-time reactive cart engine, instant
          search, and sleek micro-interactions.
        </p>

        {/* Project Key Highlights Badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" /> React 19 Powered
          </span>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-indigo-500/30 text-indigo-300 text-xs font-mono flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" /> Dynamic Cart
            Engine
          </span>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Secure
            Checkout Flow
          </span>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Glassmorphic UI
          </span>
        </div>
      </div>

      {/* INTERACTIVE E-COMMERCE SHOWCASE CONTAINER */}
      <div className="relative rounded-3xl bg-[#070b18]/90 border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-2xl">
        {/* Top App Header & Controls Bar */}
        <div className="p-6 border-b border-white/10 bg-slate-950/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo Brand Inside E-Commerce */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/30 flex items-center justify-center">
              <div className="w-full h-full bg-[#070d1e] rounded-[14px] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white tracking-wide">
                  Choudhary Mart
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Live Store
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Next-Gen Tech & Lifestyle Hub
              </p>
            </div>
          </div>

          {/* Search and Cart Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Cart Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/25 cursor-pointer shrink-0"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              <span className="px-2 py-0.5 rounded-full bg-black/40 text-cyan-300 font-mono text-[11px] font-extrabold border border-white/20">
                {totalCartCount}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="px-6 py-4 border-b border-white/10 bg-white/[0.01] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs text-slate-400 font-mono mr-2 flex items-center gap-1 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                  : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="p-6 sm:p-8">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="text-4xl">🔍</div>
              <h4 className="text-lg font-bold text-white">
                No products found
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No items match "{searchQuery}". Try searching for laptops,
                headphones, or reset filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);
                const isInCart = cart.some((c) => c.id === product.id);

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group relative rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                  >
                    {/* Top Badges & Wishlist */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold">
                          {product.badge}
                        </span>

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`p-2 rounded-xl border transition-all cursor-pointer ${
                            isWishlisted
                              ? "bg-rose-500/20 border-rose-500/40 text-rose-400"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                          }`}
                          title="Save to Wishlist"
                        >
                          <Heart
                            className={`w-4 h-4 ${isWishlisted ? "fill-current text-rose-400" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Visual Item Box */}
                      <div
                        className={`h-40 rounded-2xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 border border-white/10`}
                      >
                        <span className="text-6xl drop-shadow-2xl select-none group-hover:scale-110 transition-transform duration-300">
                          {product.imageEmoji}
                        </span>

                        <button
                          onClick={() => setQuickViewProduct(product)}
                          className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-bold text-xs transition-opacity duration-200 cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-cyan-400" />
                          <span>Quick View</span>
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span className="font-mono text-cyan-400/80">
                            {product.category}
                          </span>
                          <span className="flex items-center gap-1 text-amber-400 font-semibold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {product.name}
                        </h4>

                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {product.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pricing & Add to Cart Action */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-slate-400 line-through font-mono">
                          ${product.originalPrice}
                        </div>
                        <div className="text-xl font-black text-cyan-300 font-mono">
                          ${product.price}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => addToCart(product)}
                        className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                          isInCart
                            ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300"
                            : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>
                              Added (
                              {cart.find((c) => c.id === product.id)?.qty})
                            </span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* E-Commerce Guarantee Banner Footer */}
        <div className="p-6 border-t border-white/10 bg-slate-950/80 grid sm:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Express Delivery</h5>
              <p className="text-[11px] text-slate-400">
                Free 2-day delivery on orders over $500
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">2 Year Warranty</h5>
              <p className="text-[11px] text-slate-400">
                100% Genuine brand authentic guarantee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">30 Days Return</h5>
              <p className="text-[11px] text-slate-400">
                Instant full refund without hassle
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Encrypted Pay</h5>
              <p className="text-[11px] text-slate-400">
                256-bit SSL encrypted payment gate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SLIDE-OVER INTERACTIVE SHOPPING CART DRAWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-[#090e1f] border-l border-cyan-500/30 h-full flex flex-col justify-between shadow-2xl z-10"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/70">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      Choudhary Cart
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {totalCartCount} items selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cart Item List */}
              <div className="p-6 flex-1 overflow-y-auto space-y-4">
                {cart.length === 0 ? (
                  <div className="py-20 text-center space-y-3">
                    <div className="text-5xl">🛒</div>
                    <h4 className="text-base font-bold text-white">
                      Your cart is empty
                    </h4>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      Explore Choudhary E-commerce catalog and add premium
                      gadgets to your cart!
                    </p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3.5"
                    >
                      <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-2xl shrink-0 border border-white/10">
                        {item.imageEmoji}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-white truncate">
                          {item.name}
                        </h5>
                        <div className="text-xs font-mono text-cyan-300 mt-0.5">
                          ${item.price} each
                        </div>

                        {/* Qty Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-white w-5 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right flex flex-col justify-between items-end h-14">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-500 hover:text-rose-400 p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-black text-white font-mono">
                          ${item.price * item.qty}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Cart Summary & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-slate-950/90 space-y-4">
                  {/* Promo Code Input */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cyan-400" />
                      <input
                        type="text"
                        placeholder="Coupon: CHOUDHARY15"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none uppercase font-mono"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 font-bold text-xs cursor-pointer"
                    >
                      {discountApplied ? "Applied ✓" : "Apply"}
                    </button>
                  </form>

                  {/* Calculations breakdown */}
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-white font-mono">${subtotal}</span>
                    </div>
                    {discountApplied && (
                      <div className="flex justify-between text-emerald-400 font-medium">
                        <span>Discount (15% Off)</span>
                        <span className="font-mono">-${discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Express Shipping</span>
                      <span className="text-white font-mono">
                        {shipping === 0 ? (
                          <span className="text-emerald-400">FREE</span>
                        ) : (
                          `$${shipping}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                      <span>Total Amount</span>
                      <span className="text-cyan-300 font-mono text-lg">
                        ${total}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 cursor-pointer"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Proceed to Instant Checkout (${total})</span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* QUICK VIEW PRODUCT MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#090e1f] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-4xl shadow-lg">
                  {quickViewProduct.imageEmoji}
                </div>
                <div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {quickViewProduct.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {quickViewProduct.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-amber-400 mt-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {quickViewProduct.rating} Rating (
                      {quickViewProduct.reviews} verified buyer reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {quickViewProduct.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400">
                  Specifications & Highlights:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {quickViewProduct.tags.map((t, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/5 text-xs text-slate-200 border border-white/5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="text-[10px] text-slate-400 line-through font-mono">
                    ${quickViewProduct.originalPrice}
                  </div>
                  <div className="text-2xl font-black text-cyan-300 font-mono">
                    ${quickViewProduct.price}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct);
                      setQuickViewProduct(null);
                      setIsCartOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition cursor-pointer"
                  >
                    Add & View in Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* ORDER SUCCESS MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {orderSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOrderSuccessModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              className="relative w-full max-w-md bg-[#090f23] border border-cyan-400/50 rounded-3xl p-8 text-center space-y-6 shadow-[0_0_80px_rgba(6,182,212,0.3)] z-10"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl shadow-lg">
                🎉
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Thank you for shopping at{" "}
                  <span className="text-cyan-400 font-bold">
                    Choudhary E-Commerce
                  </span>
                  ! Your demo order has been confirmed.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Tracking Code:</span>
                  <span className="text-cyan-400 font-bold">
                    CH-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Total Amount Paid:</span>
                  <span className="text-emerald-400 font-bold">${total}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Status:</span>
                  <span className="text-cyan-300">Ready for Dispatch</span>
                </div>
              </div>

              <button
                onClick={() => setOrderSuccessModal(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition cursor-pointer"
              >
                Continue Browsing Store
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
