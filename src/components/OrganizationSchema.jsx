import { Helmet } from 'react-helmet-async';
import { CONTACT, SOCIAL, SITE } from '../config/constants';

const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SITE.NAME,
    'description': 'Commercial digital & creative agency. Video editing, reels, ads, and high-performance web dev.',
    'url': SITE.URL,
    'logo': {
      '@type': 'ImageObject',
      'url': `${SITE.URL}/logo.png`,
      'contentUrl': `${SITE.URL}/logo.png`,
      'width': 250,
      'height': 250
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': CONTACT.PHONES.AMIT,
        'contactType': 'customer service',
        'email': CONTACT.EMAIL,
        'availableLanguage': ['English', 'Hindi']
      }
    ],
    'sameAs': [
      SOCIAL.INSTAGRAM,
      SOCIAL.WHATSAPP
    ],
    'founder': [
      {
        '@type': 'Person',
        'name': 'Amit',
        'jobTitle': 'Co-Founder',
        'telephone': CONTACT.PHONES.AMIT
      },
      {
        '@type': 'Person',
        'name': 'Sumit',
        'jobTitle': 'Co-Founder',
        'telephone': CONTACT.PHONES.SUMIT
      }
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': CONTACT.ADDRESS.CITY,
      'addressRegion': CONTACT.ADDRESS.REGION,
      'addressCountry': CONTACT.ADDRESS.COUNTRY
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Rajasthan, India'
    },
    'foundingDate': '2024'
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default OrganizationSchema;
