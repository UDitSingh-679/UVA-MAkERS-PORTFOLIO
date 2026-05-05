import { Helmet } from 'react-helmet-async';
import { SITE } from '../config/constants';

const SEOHelmet = () => {
  const siteUrl = SITE.URL;
  const ogImageUrl = `${siteUrl}/banner.png`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>UVA Makers | Video Editing & Digital Marketing Sikar</title>
      <meta name="title" content="UVA Makers | Video Editing & Digital Marketing Sikar" />
      <meta name="description" content="UVA Makers - Commercial Digital & Creative Agency based in Sikar, Rajasthan. Professional video editing, Instagram reels, YouTube shorts & web development services." />
      <meta name="keywords" content="video editing, digital marketing, web development, reels, shorts, YouTube, Instagram, Sikar, Rajasthan, UVA Makers" />
      <meta name="author" content="UVA Makers" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content="UVA Makers | Video Editing & Digital Marketing Sikar" />
      <meta property="og:description" content="UVA Makers - Commercial Digital & Creative Agency based in Sikar, Rajasthan. Professional video editing, Instagram reels, YouTube shorts & web development services." />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="UVA Makers" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content="UVA Makers | Video Editing & Digital Marketing Sikar" />
      <meta name="twitter:description" content="UVA Makers - Commercial Digital & Creative Agency based in Sikar, Rajasthan. Professional video editing, Instagram reels, YouTube shorts & web development services." />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEOHelmet;
