export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  lang: string;
  hreflang: string;
}

export const seoData: Record<string, SEOData> = {
  en: {
    title: "TaxNBooks - Professional Accounting Services | GST, TDS, Payroll",
    description: "TaxNBooks provides comprehensive accounting, GST filing, TDS returns, and payroll processing services for businesses in Tier 2 and Tier 3 cities across India. Transparent pricing, local language support.",
    keywords: "accounting services, GST filing, TDS returns, payroll processing, bookkeeping, tax consultant, chartered accountant, India, MSME, small business",
    lang: "en",
    hreflang: "en-IN"
  },
  hi: {
    title: "TaxNBooks - व्यावसायिक लेखांकन सेवाएं | GST, TDS, पेरोल",
    description: "TaxNBooks भारत के टियर 2 और टियर 3 शहरों में व्यवसायों के लिए व्यापक लेखांकन, GST फाइलिंग, TDS रिटर्न और पेरोल प्रोसेसिंग सेवाएं प्रदान करता है। पारदर्शी मूल्य निर्धारण, स्थानीय भाषा समर्थन।",
    keywords: "लेखांकन सेवाएं, GST फाइलिंग, TDS रिटर्न, पेरोल प्रोसेसिंग, बुककीपिंग, कर सलाहकार, चार्टर्ड एकाउंटेंट, भारत, MSME, छोटा व्यवसाय",
    lang: "hi",
    hreflang: "hi-IN"
  },
  kn: {
    title: "TaxNBooks - ವೃತ್ತಿಪರ ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು | GST, TDS, ಪೇರೋಲ್",
    description: "TaxNBooks ಭಾರತದ ಟಿಯರ್ 2 ಮತ್ತು ಟಿಯರ್ 3 ನಗರಗಳಲ್ಲಿನ ವ್ಯವಸಾಯಗಳಿಗೆ ಸಮಗ್ರ ಲೆಕ್ಕಪತ್ರ, GST ಫೈಲಿಂಗ್, TDS ರಿಟರ್ನ್ಸ್ ಮತ್ತು ಪೇರೋಲ್ ಪ್ರೊಸೆಸಿಂಗ್ ಸೇವೆಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ।",
    keywords: "ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು, GST ಫೈಲಿಂಗ್, TDS ರಿಟರ್ನ್ಸ್, ಪೇರೋಲ್ ಪ್ರೊಸೆಸಿಂಗ್, ಬುಕ್‌ಕೀಪಿಂಗ್, ತೆರಿಗೆ ಸಲಹೆಗಾರ, ಭಾರತ, MSME",
    lang: "kn",
    hreflang: "kn-IN"
  },
  mr: {
    title: "TaxNBooks - व्यावसायिक लेखांकन सेवा | GST, TDS, पेरोल",
    description: "TaxNBooks भारतातील टियर 2 आणि टियर 3 शहरांमधील व्यवसायांसाठी सर्वसमावेशक लेखांकन, GST फाइलिंग, TDS रिटर्न आणि पेरोल प्रोसेसिंग सेवा प्रदान करते।",
    keywords: "लेखांकन सेवा, GST फाइलिंग, TDS रिटर्न, पेरोल प्रोसेसिंग, बुककीपिंग, कर सल्लागार, भारत, MSME, छोटा व्यवसाय",
    lang: "mr",
    hreflang: "mr-IN"
  },
  te: {
    title: "TaxNBooks - వృత్తిపరమైన అకౌంటింగ్ సేవలు | GST, TDS, పేరోల్",
    description: "TaxNBooks భారతదేశంలోని టైర్ 2 మరియు టైర్ 3 నగరాలలోని వ్యాపారాలకు సమగ్ర అకౌంటింగ్, GST ఫైలింగ్, TDS రిటర్న్స్ మరియు పేరోల్ ప్రాసెసింగ్ సేవలను అందిస్తుంది।",
    keywords: "అకౌంటింగ్ సేవలు, GST ఫైలింగ్, TDS రిటర్న్స్, పేరోల్ ప్రాసెసింగ్, బుక్‌కీపింగ్, పన్ను సలహాదారు, భారత్, MSME",
    lang: "te",
    hreflang: "te-IN"
  }
};

export function updateSEOTags(language: string = 'en'): void {
  const seo = seoData[language] || seoData.en;
  
  // Update title
  document.title = seo.title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }
  metaDescription.content = seo.description;
  
  // Update or create meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.content = seo.keywords;
  
  // Update html lang attribute
  document.documentElement.lang = seo.lang;
  
  // Update or create Open Graph tags
  updateOpenGraphTags(seo);
  
  // Update or create hreflang tags
  updateHreflangTags();
}

function updateOpenGraphTags(seo: SEOData): void {
  const ogTags = [
    { property: 'og:title', content: seo.title },
    { property: 'og:description', content: seo.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'TaxNBooks' },
    { property: 'og:locale', content: seo.hreflang.replace('-', '_') }
  ];
  
  ogTags.forEach(({ property, content }) => {
    let ogTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!ogTag) {
      ogTag = document.createElement('meta');
      ogTag.setAttribute('property', property);
      document.head.appendChild(ogTag);
    }
    ogTag.content = content;
  });
}

function updateHreflangTags(): void {
  // Remove existing hreflang tags
  const existingHreflangs = document.querySelectorAll('link[rel="alternate"]');
  existingHreflangs.forEach(tag => tag.remove());
  
  // Add hreflang tags for all supported languages
  Object.values(seoData).forEach(seo => {
    const hreflangLink = document.createElement('link');
    hreflangLink.rel = 'alternate';
    hreflangLink.hreflang = seo.hreflang;
    hreflangLink.href = `${window.location.origin}?lang=${seo.lang}`;
    document.head.appendChild(hreflangLink);
  });
  
  // Add x-default hreflang
  const defaultHreflang = document.createElement('link');
  defaultHreflang.rel = 'alternate';
  defaultHreflang.hreflang = 'x-default';
  defaultHreflang.href = window.location.origin;
  document.head.appendChild(defaultHreflang);
}

export function getLanguageFromURL(): string {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  return lang && seoData[lang] ? lang : 'en';
}

export function generateStructuredData(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TaxNBooks",
    "description": "Professional accounting services for businesses in Tier 2 and Tier 3 cities across India",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "telephone": "+91-98765-43210",
    "email": "info@taxnbooks.com",
    "url": "https://taxnbooks.com",
    "priceRange": "₹700-₹3000",
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "services": [
      "GST Registration and Filing",
      "TDS Returns",
      "Payroll Processing",
      "Full Accounting and Bookkeeping",
      "Tax Consultation"
    ],
    "languages": ["English", "Hindi", "Kannada", "Marathi", "Telugu"],
    "currenciesAccepted": "INR",
    "paymentAccepted": ["Cash", "Bank Transfer", "UPI"]
  });
}