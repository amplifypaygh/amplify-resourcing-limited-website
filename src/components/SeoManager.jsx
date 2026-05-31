import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { newServiceContent as services } from '@/lib/content';

const SITE_NAME = 'Amplify Resourcing Limited';
const SITE_URL = 'https://amplifyresourcinglimited.vercel.app';
const DEFAULT_DESCRIPTION =
  'Thought leadership, HR advisory, management consulting and practical technology solutions that help organisations scale, improve performance, and build people-centred cultures.';
const DEFAULT_IMAGE = `${SITE_URL}/amplify-logo-bg.jpg`;

const routeSeo = {
  '/': {
    title: `${SITE_NAME} | Thought Leadership, HR & Technology Solutions`,
    description:
      'We partner with leaders to build authority, strengthen people systems, improve operating models, and deploy practical technology that drives measurable business growth.',
  },
  '/about': {
    title: `About Us | ${SITE_NAME}`,
    description:
      'Discover our mission, values and people-first approach to helping organisations scale through strategic HR advisory, consulting and technology enablement.',
  },
  '/services': {
    title: `Services | ${SITE_NAME}`,
    description:
      'Explore our services: Thought Leadership, HR Advisory, Management Consulting, and Technology Solutions—designed to clarify strategy, improve performance, and strengthen culture.',
  },
  '/insights': {
    title: `Insights | ${SITE_NAME}`,
    description:
      'Read practical HR, leadership and business insights on talent, culture, compliance and the future of work from our team of practitioners.',
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME}`,
    description:
      'Get in touch to discuss tailored HR, consulting or technology solutions that meet your organisation’s needs and growth ambitions.',
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
    const serviceSlugMatch = currentPath.match(/^\/services\/([^/]+)$/);
    const serviceSeo = serviceSlugMatch ? services.find((service) => service.slug === serviceSlugMatch[1]) : null;

    const pageSeo = serviceSeo
      ? {
          title: `${serviceSeo.title} | ${SITE_NAME}`,
          description: serviceSeo.description,
        }
      : routeSeo[currentPath] || {
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
