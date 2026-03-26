import { 
  Shirt, 
  Truck, 
  Printer, 
  Tag, 
  Headset, 
  MousePointerClick,
  CheckCircle2,
  Upload,
  ShoppingBag
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Customize', href: '#customize' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES = [
  {
    icon: Shirt,
    title: 'Premium Fabric',
    description: '100% combed organic cotton that is soft on skin and stays durable wash after wash.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express 3-5 day shipping options available for all your urgent custom orders.',
  },
  {
    icon: Printer,
    title: 'Custom Printing',
    description: 'State-of-the-art DTG and Screen Printing for colors that pop and never fade.',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    description: 'Competitive bulk pricing and affordable single units for everyone.',
  },
  {
    icon: Headset,
    title: 'Quality Support',
    description: 'Dedicated design team to help you bring your vision to life with expert advice.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy Ordering',
    description: 'Simple three-step checkout process with multiple secure payment methods.',
  },
];

export const STEPS = [
  {
    icon: Shirt,
    title: 'Choose T-shirt',
    description: 'Select your preferred style, color, and size from our premium collection.',
  },
  {
    icon: Upload,
    title: 'Upload Design',
    description: 'Upload your logo, artwork, or photo in high resolution for the best result.',
  },
  {
    icon: MousePointerClick,
    title: 'Customize Details',
    description: 'Adjust print location, size, and printing method to match your vision.',
  },
  {
    icon: CheckCircle2,
    title: 'Confirm Order',
    description: 'Review your design preview and place your order with a single click.',
  },
];

export const REVIEWS = [
  {
    name: 'David Miller',
    role: 'Verified Buyer',
    rating: 5,
    text: "The quality of the print is insane. I've washed it 10 times and it still looks brand new. Best custom shop online!",
    avatar: 'https://picsum.photos/seed/david/100/100',
  },
  {
    name: 'James Thompson',
    role: 'Verified Buyer',
    rating: 5,
    text: "Fantastic customer service. They helped me clean up my logo before printing. Highly recommend their design support!",
    avatar: 'https://picsum.photos/seed/james/100/100',
  },
  {
    name: 'Mike Harrison',
    role: 'Verified Buyer',
    rating: 5,
    text: "Quick delivery and easy interface. I designed a shirt for my bachelor party in minutes. The guys absolutely loved them!",
    avatar: 'https://picsum.photos/seed/mike/100/100',
  },
];

export const FAQS = [
  {
    question: 'What sizes are available?',
    answer: 'We offer a full range of sizes from Small (S) to 3XL. Check our size guide for detailed measurements.',
  },
  {
    question: 'How is the print quality?',
    answer: 'We use professional-grade DTG (Direct to Garment) and screen printing technology to ensure vibrant, long-lasting colors.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard shipping takes 5-7 business days. Express options are available for 2-3 day delivery.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! We offer significant discounts for orders of 10 or more items. Contact our sales team for a custom quote.',
  },
  {
    question: 'Can I upload my own design?',
    answer: 'Absolutely. You can upload PNG, JPG, or SVG files directly through our customization tool.',
  },
];
