// Block specific elements that are typically used by Google ads

const blockGoogleAds = () => {
  const adSelectors = [
    "iframe[src*='google.com/ads']",
    "div[id*='google_ads']",
    "div[class*='adsbygoogle']",
    "ins[class*='adsbygoogle']",
    "div[class*='google-ad']",
    "div[class*='ad-slot']",
    "div[class*='ad-container']",
    "div[class*='ad-banner']"
  ];

  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => {
      ad.style.display = 'none';
    });
  });
};

// Run the function to block ads
blockGoogleAds();

// Optional: Run the function periodically to remove ads that load dynamically
setInterval(blockGoogleAds, 3000);
