import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Amplify Resourcing Limited';
const SITE_URL = 'https://amplifyresourcinglimited.vercel.app';
const DEFAULT_DESCRIPTION =
  'Amplify Resourcing Limited provides HR advisory, talent acquisition, compliance, training, and technology solutions for growth-focused businesses.';
const DEFAULT_IMAGE = `${SITE_URL}/amplify-logo-bg.jpg`;

const routeSeo = {
  '/': {
    title: `${SITE_NAME} | HR And Business Growth Solutions`,
    description:
      'Human-centric HR solutions for growth-focused businesses. We help organizations with recruitment, compliance, culture, and operational excellence.',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Learn about Amplify Resourcing Limited, our mission, values, and people-first approach to helping businesses scale sustainably.',
  },
  '/services': {
    title: `Services | ${SITE_NAME}`,
    description:
      'Explore our services: HR advisory, talent acquisition, compliance and policy, training and development, culture and retention, and technology solutions.',
  },
  '/insights': {
    title: `Insights | ${SITE_NAME}`,
    description:
      'Read practical HR and business growth insights, trends, and resources from Amplify Resourcing Limited.',
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Get in touch with Amplify Resourcing Limited to discuss your HR and business support needs.',
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const pageSeo = routeSeo[currentPath] || {
      title: `${SITE_NAME} | Page`,
      description: DEFAULT_DESCRIPTION,
    };

    const canonicalUrl = `${SITE_URL}${currentPath === '/' ? '' : currentPath}`;

    document.title = pageSeo.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: pageSeo.description,
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: pageSeo.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageSeo.description,
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_IMAGE,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: pageSeo.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageSeo.description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_IMAGE,
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });
  }, [location.pathname]);

  return null;
}
