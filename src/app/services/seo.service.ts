import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SEOConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultConfig: SEOConfig = {
    title: 'Sajeer Babu - Software Engineer & Architect',
    description: 'Building scalable solutions and exploring cutting-edge technologies. Software Engineer & Architect with 8+ years of experience in Microservices, Serverless, Web Apps, and AI Integrations. Organiser at GDG Kozhikode.',
    image: 'https://sajeerzeji-98ac5.web.app/assets/images/personal/my-image.png',
    url: 'https://sajeerzeji-98ac5.web.app',
    type: 'website',
    author: 'Sajeer Babu',
    keywords: [
      'Software Engineer',
      'Software Architect',
      'Microservices',
      'Serverless',
      'Angular',
      'Spring Boot',
      'Web Development',
      'AI Integration',
      'GDG Kozhikode',
      'Full Stack Developer',
      'Cloud Architecture',
      'RFID Technology',
      'OAuth2',
      'Technical Leadership'
    ]
  };

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateMetaTags(config: SEOConfig = {}): void {
    const seoConfig = { ...this.defaultConfig, ...config };

    // Update title
    if (seoConfig.title) {
      this.title.setTitle(seoConfig.title);
    }

    // Basic meta tags
    this.updateTag('description', seoConfig.description);
    this.updateTag('keywords', seoConfig.keywords?.join(', '));
    this.updateTag('author', seoConfig.author);

    // Open Graph meta tags
    this.updateTag('og:title', seoConfig.title, 'property');
    this.updateTag('og:description', seoConfig.description, 'property');
    this.updateTag('og:image', seoConfig.image, 'property');
    this.updateTag('og:url', seoConfig.url, 'property');
    this.updateTag('og:type', seoConfig.type, 'property');
    this.updateTag('og:site_name', 'Sajeer Babu Portfolio', 'property');

    // Twitter Card meta tags
    this.updateTag('twitter:card', 'summary_large_image');
    this.updateTag('twitter:site', '@sajeer_zeji');
    this.updateTag('twitter:creator', '@sajeer_zeji');
    this.updateTag('twitter:title', seoConfig.title);
    this.updateTag('twitter:description', seoConfig.description);
    this.updateTag('twitter:image', seoConfig.image);

    // Additional meta tags
    this.updateTag('robots', 'index, follow');
    this.updateTag('googlebot', 'index, follow');
    this.updateTag('viewport', 'width=device-width, initial-scale=1');
    this.updateTag('theme-color', '#1E40AF');

    // Article specific tags (if applicable)
    if (seoConfig.publishedTime) {
      this.updateTag('article:published_time', seoConfig.publishedTime, 'property');
    }
    if (seoConfig.modifiedTime) {
      this.updateTag('article:modified_time', seoConfig.modifiedTime, 'property');
    }
  }

  private updateTag(name: string, content: string | undefined, attribute: string = 'name'): void {
    if (content) {
      if (this.meta.getTag(`${attribute}="${name}"`)) {
        this.meta.updateTag({ [attribute]: name, content });
      } else {
        this.meta.addTag({ [attribute]: name, content });
      }
    }
  }

  createStructuredData(type: 'Person' | 'WebSite' | 'Article' = 'Person'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    let structuredData: any;

    switch (type) {
      case 'Person':
        structuredData = this.getPersonStructuredData();
        break;
      case 'WebSite':
        structuredData = this.getWebSiteStructuredData();
        break;
      default:
        structuredData = this.getPersonStructuredData();
    }

    this.insertStructuredData(structuredData);
  }

  private getPersonStructuredData(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sajeer Babu',
      alternateName: 'Sajeer Zeji',
      url: 'https://sajeerzeji-98ac5.web.app',
      image: 'https://sajeerzeji-98ac5.web.app/assets/images/personal/my-image.png',
      jobTitle: 'Software Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'IBM'
      },
      alumniOf: {
        '@type': 'Organization',
        name: 'RetailCloud'
      },
      sameAs: [
        'https://www.linkedin.com/in/sajeerzeji/',
        'https://twitter.com/sajeer_zeji',
        'https://github.com/sajeerzeji',
        'https://sajeerzeji44.medium.com/',
        'https://www.instagram.com/sajeerzeji',
        'https://gdg.community.dev/gdg-kozhikode/'
      ],
      knowsAbout: [
        'Software Engineering',
        'Microservices Architecture',
        'Serverless Computing',
        'Web Development',
        'Angular',
        'Spring Boot',
        'Cloud Computing',
        'AI Integration',
        'RFID Technology',
        'OAuth2'
      ],
      description: 'Software Engineer & Architect with 8+ years of experience in building scalable solutions. Specializes in Microservices, Serverless, Web Apps, and AI Integrations. Organiser at GDG Kozhikode.'
    };
  }

  private getWebSiteStructuredData(): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Sajeer Babu - Portfolio',
      url: 'https://sajeerzeji-98ac5.web.app',
      description: 'Personal portfolio and professional timeline of Sajeer Babu, Software Engineer & Architect',
      author: {
        '@type': 'Person',
        name: 'Sajeer Babu'
      },
      inLanguage: 'en-US'
    };
  }

  private insertStructuredData(data: any): void {
    // Remove existing structured data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Insert new structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // Method to create combined structured data (Person + WebSite)
  createCombinedStructuredData(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const combinedData = {
      '@context': 'https://schema.org',
      '@graph': [
        this.getPersonStructuredData(),
        this.getWebSiteStructuredData()
      ]
    };

    this.insertStructuredData(combinedData);
  }
}
