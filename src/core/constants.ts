export const properties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    price: {
      usd: 850000,
      eth: 425,
    },
    location: "Beverly Hills, CA",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    type: "villa",
    roi: "7.2%",
    metrics: {
      totalInvestors: 142,
      funded: "89%",
      minInvestment: "$10",
      monthlyIncome: "$520",
      appreciation: "4.5%",
    },
    status: "Active Investment",
    features: ["Pool", "Smart Home", "Solar Panels"],
    tokenDetails: {
      totalTokens: 85000,
      availableTokens: 9350,
      tokenPrice: "$10",
    },
  },
  {
    id: 2,
    title: "Luxury Penthouse",
    price: {
      usd: 1200000,
      eth: 600,
    },
    location: "Manhattan, NY",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    type: "apartment",
    roi: "6.8%",
    metrics: {
      totalInvestors: 203,
      funded: "95%",
      minInvestment: "$10",
      monthlyIncome: "$680",
      appreciation: "5.2%",
    },
    status: "Almost Funded",
    features: ["Doorman", "Gym", "Terrace"],
    tokenDetails: {
      totalTokens: 120000,
      availableTokens: 6000,
      tokenPrice: "$10",
    },
  },
  {
    id: 3,
    title: "Waterfront Estate",
    price: {
      usd: 2100000,
      eth: 1050,
    },
    location: "Miami Beach, FL",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    type: "house",
    roi: "7.5%",
    metrics: {
      totalInvestors: 89,
      funded: "45%",
      minInvestment: "$10",
      monthlyIncome: "$1200",
      appreciation: "6.1%",
    },
    status: "New Listing",
    features: ["Waterfront", "Dock", "Wine Cellar"],
    tokenDetails: {
      totalTokens: 210000,
      availableTokens: 115500,
      tokenPrice: "$10",
    },
  },
];

export const defaultFilters = {
  priceRange: "all",
  propertyType: "all",
  location: "",
  minROI: "",
  maxROI: "",
  fundingStatus: "all",
  sortBy: "newest",
};

export const property = {
  id: 1,
  title: "Modern Villa with Pool",
  price: {
    usd: 850000,
    eth: 425,
  },
  location: "Beverly Hills, CA",
  type: "villa",
  roi: "7.2%",
  metrics: {
    totalInvestors: 142,
    funded: "89%",
    minInvestment: "$10",
    monthlyIncome: "$520",
    appreciation: "4.5%",
    rentalYield: "5.8%",
    totalReturn: "10.3%",
  },
  status: "Active Investment",
  description:
    "This stunning modern villa offers luxurious living spaces with high-end finishes throughout. The property has been tokenized for fractional ownership, allowing investors to participate in this premium real estate opportunity with as little as $10.",
  features: [
    "Swimming Pool",
    "Smart Home System",
    "Gourmet Kitchen",
    "Home Theater",
    "Wine Cellar",
    "Outdoor Kitchen",
    "Fire Pit",
    "Three-Car Garage",
  ],
  tokenDetails: {
    totalTokens: 85000,
    availableTokens: 9350,
    tokenPrice: "$10",
    tokenSymbol: "VILLA425",
    contractAddress: "0x1234...5678",
    blockchain: "Ethereum",
  },
  financials: {
    grossRent: "$8,500/month",
    netRent: "$7,225/month",
    expenses: {
      management: "8%",
      maintenance: "5%",
      insurance: "2%",
      property_tax: "1.2%",
    },
    projectedAppreciation: "4.5% annually",
  },
  yearBuilt: 2020,
  parkingSpaces: 3,
  lotSize: "0.5 acres",
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  ],
  agent: {
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    email: "john@realestate.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
};
