import React, { useState } from 'react';
import { Upload, ShoppingBag, Star, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useUploadImage } from '../hooks/useUploadImage';
import { cloudinaryService } from '../services/cloudinary.service';
import { productService } from '../services/product.service';

const COLORS = [
  { name: 'White', hex: '#FFFFFF', border: 'border-slate-200' },
  { name: 'Black', hex: '#1e293b', border: 'border-slate-800' },
  { name: 'Navy', hex: '#1d4ed8', border: 'border-blue-800' },
  { name: 'Red', hex: '#dc2626', border: 'border-red-800' },
  { name: 'Emerald', hex: '#059669', border: 'border-emerald-800' },
];

const SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL'];

export const CustomizerSection = () => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { uploadAndSaveProduct, isUploading, error: uploadError, success: uploadSuccess, setSuccess: setUploadSuccess } = useUploadImage();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const thumbnails = [
    'https://picsum.photos/seed/tshirt1/600/600',
    'https://picsum.photos/seed/tshirt2/600/600',
    'https://picsum.photos/seed/tshirt3/600/600',
    'https://picsum.photos/seed/tshirt4/600/600',
  ];

  const price = (29.99 * quantity).toFixed(2);

  const handlePlaceOrder = async () => {
    setIsOrdering(true);
    setOrderStatus('idle');
    try {
      await productService.createProduct({
        name: `Custom T-shirt - ${selectedColor.name} - ${selectedSize}`,
        imageUrl: previewUrl || thumbnails[activeThumb],
      });
      setOrderStatus('success');
      setTimeout(() => setOrderStatus('idle'), 3000);
    } catch (error) {
      console.error('Error placing order:', error);
      setOrderStatus('error');
    } finally {
      setIsOrdering(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Call the combined upload and save logic
    await uploadAndSaveProduct(file, `Design Upload - ${selectedColor.name} - ${selectedSize}`);
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="customize" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Image Preview */}
          <div className="space-y-6">
            <motion.div 
              layoutId="main-image"
              className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex items-center justify-center p-12 relative"
            >
              <img 
                src={previewUrl || thumbnails[activeThumb]} 
                alt="Custom T-shirt preview" 
                className={cn(
                  "w-full h-full object-contain",
                  !previewUrl && "mix-blend-multiply"
                )}
              />
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm text-xs font-bold text-blue-600 uppercase tracking-widest">
                Preview Mode
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={cn(
                    "aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105",
                    activeThumb === i ? "border-blue-600 shadow-lg shadow-blue-100" : "border-transparent grayscale hover:grayscale-0"
                  )}
                >
                  <img src={thumb} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Customization Form */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">
                <Star className="w-4 h-4 fill-current" />
                Best Seller
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">Custom Men's Premium T-Shirt</h2>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-slate-500 text-sm font-medium">4.9 (2,500+ reviews)</span>
              </div>
              <ul className="space-y-3">
                {['Premium quality 100% organic cotton', 'Multiple sizes available (S - 3XL)', 'Front and back high-definition print', 'Perfect for teams, events, and branding'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {/* Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">T-Shirt Type</label>
                  <select className="w-full bg-slate-50 border-slate-100 rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-blue-600 transition-all">
                    <option>Classic Crewneck</option>
                    <option>Modern V-neck</option>
                    <option>Slim Fit</option>
                    <option>Oversized Heavyweight</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Print Type</label>
                  <select className="w-full bg-slate-50 border-slate-100 rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-blue-600 transition-all">
                    <option>Digital Print (DTG)</option>
                    <option>Screen Printing</option>
                    <option>Premium Embroidery</option>
                  </select>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Fabric Color: <span className="text-slate-900">{selectedColor.name}</span></label>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 transition-all duration-300 relative",
                        color.border,
                        selectedColor.name === color.name ? "ring-4 ring-blue-100 scale-110" : "hover:scale-105"
                      )}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor.name === color.name && (
                        <Check className={cn("w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", color.name === 'White' ? "text-slate-900" : "text-white")} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Size</label>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "w-12 h-12 rounded-xl border-2 font-bold text-sm transition-all duration-300",
                          selectedSize === size ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-100" : "border-slate-100 text-slate-600 hover:border-blue-200"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Quantity</label>
                  <div className="flex items-center bg-slate-50 rounded-xl p-1 border border-slate-100 w-fit">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded-lg transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center font-bold text-slate-600 hover:bg-white rounded-lg transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-8 border-t border-slate-100 mt-auto">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Price</p>
                    <p className="text-4xl font-black text-slate-900">${price}</p>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Includes free shipping on orders over $50</p>
                </div>
                {/* Status Messages */}
                {(uploadError || uploadSuccess) && (
                  <div className={cn(
                    "p-4 rounded-xl mb-6 text-sm font-bold",
                    uploadError ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"
                  )}>
                    {uploadError || "Design uploaded and saved successfully!"}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <button 
                    onClick={triggerUpload}
                    disabled={isUploading}
                    className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 font-bold py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 disabled:opacity-50"
                  >
                    <Upload className="w-5 h-5" />
                    {isUploading ? 'Uploading...' : 'Upload Design'}
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isOrdering}
                    className={cn(
                      "flex items-center justify-center gap-2 font-bold py-4 rounded-2xl shadow-xl transition-all duration-300",
                      isOrdering ? "bg-slate-300 cursor-not-allowed" : 
                      orderStatus === 'success' ? "bg-emerald-500 text-white shadow-emerald-200" :
                      orderStatus === 'error' ? "bg-rose-500 text-white shadow-rose-200" :
                      "bg-blue-600 text-white shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1"
                    )}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {isOrdering ? 'Placing Order...' : 
                     orderStatus === 'success' ? 'Order Placed!' : 
                     orderStatus === 'error' ? 'Order Failed' : 
                     'Place Order'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
