import { Helmet } from 'react-helmet-async';
import { CONTACT, SITE, SOCIAL } from '../config/constants';

const ContactSchema = ({
  telephone = CONTACT.PHONES.AMIT,
  email = CONTACT.EMAIL
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: SITE.NAME,
    description: 'Commercial digital & creative agency. Video editing, reels, ads, and high-performance web dev.',
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: CONTACT.ADDRESS.CITY,
      addressRegion: CONTACT.ADDRESS.REGION,
      addressCountry: CONTACT.ADDRESS.COUNTRY
    },
    url: SITE.URL,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
      ],
      opens: '09:00',
      closes: '19:00'
    },
    sameAs: [
      SOCIAL.INSTAGRAM,
      SOCIAL.WHATSAPP
    ],
    priceRange: '$$',
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Rajasthan, India'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ContactSchema;
