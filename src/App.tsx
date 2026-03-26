import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbox } from './components/Chatbox';
import { CustomizerSection } from './components/CustomizerSection';
import { FAQItem } from './components/FAQItem';
import { FEATURES, STEPS, REVIEWS, FAQS } from './constants';

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Chatbox />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-30 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                Premium Custom Apparel
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                Create Your Perfect <span className="text-blue-600">Custom</span> Men's T-Shirt
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Personalized printing for events, teams, gifts, branding, and personal use. Experience the highest quality fabric and vibrant prints.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                  Customize Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  View Designs
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
                <div>
                  <p className="text-2xl font-black text-slate-900">10k+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Clients</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-2xl font-black text-slate-900">4.9/5</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rating</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-2xl font-black text-slate-900">24h</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Design Support</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-slate-50">
                <img
                  src="https://picsum.photos/seed/tshirt-hero/800/1000"
                  alt="Premium T-shirt Mockup"
                  className="w-full h-auto rounded-[2rem] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl -z-10 rotate-12 opacity-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600 rounded-full -z-10 opacity-5 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customizer Section */}
      <CustomizerSection />

      {/* Why Choose Us Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-slate-600 font-medium">We combine premium materials with cutting-edge technology to deliver the best custom apparel experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600 font-medium">Four simple steps to get your custom masterpiece delivered to your door.</p>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {STEPS.map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:border-blue-600 group-hover:scale-110 transition-all duration-500 relative z-10">
                    <step.icon className="w-8 h-8 text-blue-600" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white text-xs font-black rounded-full flex items-center justify-center border-4 border-white">
                      0{i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-slate-600 font-medium">Join thousands of satisfied customers who trust us with their custom apparel needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-4 ring-blue-50" />
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-medium">Everything you need to know about our custom t-shirts.</p>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">Get In Touch</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Have a special request or a bulk order? Our team is here to help you with every detail of your custom project.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 transition-all resize-none" />
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] p-10 sm:p-12 text-white space-y-10">
              <h3 className="text-2xl font-bold">Business Details</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-bold">support@custommens.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg font-bold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1">Visit Shop</p>
                    <p className="text-lg font-bold">123 Main St, City, Country</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-lg font-bold">Mon–Fri: 9am–6pm</p>
                    <p className="text-blue-100/70 text-sm">Sat: 10am–4pm | Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
