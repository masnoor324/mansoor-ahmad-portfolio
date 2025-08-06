/**
 * SEO Enhancement Script for Mansoor Ahmad's Portfolio
 * This helps search engines understand website structure and content
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Generate Semantic HTML Structure for Bots
    enhanceSemanticStructure();
    
    // 2. Add Hidden SEO Content for Bots (without affecting UX)
    addBotOnlyContent();
    
    // 3. Implement Lazy Loading with SEO fallback
    optimizeMediaLoading();
    
    // 4. Generate Sitemap on the Fly
    generateDynamicSitemap();
    
    // 5. Add Content Indexing Signals
    sendIndexingSignals();
});

// ==================== Core Functions ====================

function enhanceSemanticStructure() {
    // Add ARIA roles and microdata
    document.querySelector('main').setAttribute('role', 'main');
    document.querySelector('nav').setAttribute('itemscope', '');
    document.querySelector('nav').setAttribute('itemtype', 'https://schema.org/SiteNavigationElement');
    
    // Enhance portfolio items with rich data
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.setAttribute('itemscope', '');
        item.setAttribute('itemtype', 'https://schema.org/CreativeWork');
        item.setAttribute('aria-label', 'Portfolio project: ' + item.querySelector('h3').textContent);
    });
}

function addBotOnlyContent() {
    // Create hidden div with keywords and synonyms
    const botContent = document.createElement('div');
    botContent.className = 'bot-only-content';
    botContent.style.cssText = 'position:absolute;left:-9999px;top:-9999px;height:1px;width:1px;overflow:hidden;';
    
    botContent.innerHTML = `
        <h2>Mansoor Ahmad SEO Services</h2>
        <p>Professional SEO services including:</p>
        <ul>
            <li>Keyword research for "${document.title}"</li>
            <li>On-page optimization techniques</li>
            <li>Technical SEO audits</li>
            <li>Off-page link building strategies</li>
            <li>Local SEO for Pakistani businesses</li>
        </ul>
        <p>Contact Mansoor Ahmad for top-ranking SEO solutions in Pakistan.</p>
    `;
    
    document.body.appendChild(botContent);
}

function optimizeMediaLoading() {
    // Convert images to lazy load with noscript fallback
    document.querySelectorAll('img').forEach(img => {
        if(!img.loading) {
            const originalSrc = img.src;
            img.setAttribute('data-src', originalSrc);
            img.removeAttribute('src');
            img.classList.add('lazyload');
            
            // Add noscript fallback for bots
            const noscript = document.createElement('noscript');
            const fallbackImg = document.createElement('img');
            fallbackImg.src = originalSrc;
            fallbackImg.alt = img.alt || 'Portfolio image';
            noscript.appendChild(fallbackImg);
            img.parentNode.insertBefore(noscript, img);
        }
    });
}

function generateDynamicSitemap() {
    // Create in-page sitemap for bots
    const links = Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
    const uniqueLinks = [...new Set(links)];
    
    const sitemap = document.createElement('div');
    sitemap.className = 'hidden-sitemap';
    sitemap.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
    sitemap.innerHTML = `
        <h2>Website Structure</h2>
        <ul>
            ${uniqueLinks.map(link => `<li><a href="${link}">${new URL(link).pathname}</a></li>`).join('')}
        </ul>
    `;
    
    document.body.appendChild(sitemap);
}

function sendIndexingSignals() {
    // Ping search engines (simplified version)
    if(navigator.sendBeacon) {
        const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(window.location.origin + '/sitemap.xml')}`;
        navigator.sendBeacon(pingUrl);
    }
    
    // Add more indexing signals
    document.documentElement.setAttribute('data-seo-enhanced', 'true');
}

// ==================== Advanced SEO Features ====================

// Content Priority Manager
class ContentPrioritizer {
    constructor() {
        this.importantSections = [
            '#about', 
            '#portfolio', 
            '#services',
            '#testimonials'
        ];
        this.addPriorityTags();
    }
    
    addPriorityTags() {
        this.importantSections.forEach(selector => {
            const section = document.querySelector(selector);
            if(section) {
                section.setAttribute('data-seo-priority', 'high');
                section.setAttribute('aria-live', 'polite');
            }
        });
    }
}

// Keyword Density Analyzer (for self-check)
function analyzeKeywordDensity() {
    const content = document.body.textContent.toLowerCase();
    const keywords = [
        'mansoor ahmad', 
        'seo specialist',
        'portfolio',
        'keyword research',
        'technical seo',
        'pakistan seo expert'
    ];
    
    const densityReport = {};
    keywords.forEach(keyword => {
        const regex = new RegExp(keyword, 'gi');
        const matches = content.match(regex);
        densityReport[keyword] = matches ? matches.length : 0;
    });
    
    return densityReport;
}

// Initialize advanced features
new ContentPrioritizer();
const keywordReport = analyzeKeywordDensity();
console.log('Keyword Density Report:', keywordReport);
// Add this before </body> or in a <script> tag
function generatePersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mansoor Ahmad",
    "image": "https://yourportfolio.com/images/photo.jpg",
    "jobTitle": "SEO Specialist",
    "description": "I help businesses rank higher on Google with proven SEO strategies.",
    "url": "https://yourportfolio.com",
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://github.com/yourusername"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "Pakistan"
    }
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

// Call the function
generatePersonSchema();
function generateBreadcrumbSchema() {
  const breadcrumbs = [
    { name: "Home", url: "https://yourportfolio.com/" },
    { name: "Portfolio", url: "https://yourportfolio.com/portfolio" },
    { name: "SEO Services", url: "https://yourportfolio.com/seo" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

generateBreadcrumbSchema();

function generateFAQSchema() {
  const faqs = [
    {
      question: "What SEO services do you offer?",
      answer: "I provide keyword research, on-page SEO, technical SEO, and link building."
    },
    {
      question: "How long does SEO take to show results?",
      answer: "Typically 3-6 months for noticeable improvements."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

generateFAQSchema();