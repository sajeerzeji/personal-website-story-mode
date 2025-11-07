import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import {NgClass, NgForOf, NgIf, isPlatformBrowser} from '@angular/common';
import {AnimationOptions} from 'ngx-lottie';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Sajeer Babu';
  isBrowser: boolean;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  name = 'Sajeer';
  profileDescription = 'Building the future, one line of code at a time.\n\nSoftware Engineer & Architect at IBM with 8+ years crafting scalable solutions.\n\nFrom microservices to AI-powered apps, I turn complex problems into elegant systems.\n\nOrganizer at GDG Kozhikode | Open Source Enthusiast | AI Integration Specialist';
  profileImage = './assets/images/personal/my-image.png'

  experiences = [
    {
      years: {
        from: '2025',
        to: 'Present'
      },
      description: [
        {
          type: 'html',
          content: `Joined <a href="https://www.ibm.com/" target="_blank" class="text-blue-600 underline">IBM</a> as a Software Engineer.`
        },
        {
          type: 'html',
          content: `Working on IBM Runtimes projects, focusing on Developer Experience and tooling.`
        },
        {
          type: 'html',
          content: `Contributing to open source projects including <a href="https://github.com/OpenLiberty/liberty-language-server" target="_blank" class="text-blue-600 underline">Open Liberty Config Language Service</a>, <a href="https://github.com/OpenLiberty/ci.maven" target="_blank" class="text-blue-600 underline">Liberty Maven Plugin</a>, <a href="https://github.com/OpenLiberty/ci.gradle" target="_blank" class="text-blue-600 underline">Liberty Gradle Plugin</a>, and YAML Language Service for enhanced developer productivity.`
        }
      ]
    },
    {
      years: {
        from: '2018',
        to: '2025'
      },
      description: [
        {
          type: 'html',
          content: `Joined <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a> as a Software Engineer and progressed to <span class="font-bold">Associate Technical Architect</span> through consistent delivery and technical leadership.`
        },
        {
          type: 'html',
          content: `<span class="font-bold">Career Progression:</span> Software Engineer → Senior Software Engineer → Lead Software Engineer → Associate Technical Architect`
        },
        {
          type: 'html',
          content: `<span class="font-bold">Key Projects:</span> Built <span class="font-bold">API Platform</span> with multiple microservices, <span class="font-bold">New API Platform</span> from scratch for RFID solutions, <span class="font-bold">Console Portal</span> (now the company's core back office), <span class="font-bold">RFID Inventory Management App</span>, <span class="font-bold">Vendor Portal</span>, <span class="font-bold">Restaurant Console</span> for <a href="https://retailcloud.com/partners/tikt.html" target="_blank" class="text-blue-600 underline">Tikt</a>, <span class="font-bold">OAuth2 Authorization Service</span>, and internal <span class="font-bold">SDK with gRPC</span>.`
        },
        {
          type: 'html',
          content: `<span class="font-bold">Leadership:</span> Led team of 10 engineers, architected and built multiple platforms from scratch, ensured architectural compliance across all projects, and established DevOps practices.`
        },
        {
          type: 'html',
          content: `<span class="font-bold">Technologies:</span> Java, Spring Boot, Angular, TypeScript, NestJS, Node.js, JavaScript, Python, Microservices, Serverless, OAuth2, gRPC, DevOps, CI/CD, RFID`
        }
      ]
    },
    {
      years: {
        from: '2016',
        to: '2018'
      },
      description: [
        {
          type: 'html',
          content: `Started career as Junior Software Engineer at <a href="https://www.m2hinfotech.com/" target="_blank" class="text-blue-600 underline">M2H Infotech LLP</a>.`
        },
        {
          type: 'html',
          content: `Developed bot automation for UAE banking clients on <span class="font-bold">WPS and FTS</span> platforms, handling full development lifecycle.`
        },
        {
          type: 'html',
          content: `Completed 3-month on-site deployment at major UAE bank for offline <span class="font-bold">banking system</span> implementation.`
        }
      ]
    }
  ];

  socialLinks = [
    {
      name: 'Email',
      icon: {
        default: './assets/images/icons/social/icon-email.svg',
        dark: './assets/images/icons/social/icon-email.svg',
      },
      link: 'mailto:sajeerzeji44@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: {
        default: './assets/images/icons/social/icon-linkedin.svg',
        dark: './assets/images/icons/social/icon-linkedin.svg',
      },
      link: 'https://www.linkedin.com/in/sajeerzeji/'
    },
    {
      name: 'X',
      icon: {
        default: './assets/images/icons/social/icon-x.svg',
        dark: './assets/images/icons/social/icon-x-light.svg',
      },
      link: 'https://twitter.com/sajeer_zeji'
    },
    {
      name: 'Github',
      icon: {
        default: './assets/images/icons/social/icon-github.svg',
        dark: './assets/images/icons/social/icon-github-light.svg',
      },
      link: 'https://github.com/sajeerzeji'
    },
    {
      name: 'Medium',
      icon: {
        default: './assets/images/icons/social/icon-medium.svg',
        dark: './assets/images/icons/social/icon-medium-light.svg',
      },
      link: 'https://sajeerzeji44.medium.com/'
    },
    {
      name: 'Buy me A Coffee',
      icon: {
        default: './assets/images/icons/social/icon-buymeacoffee.svg',
        dark: './assets/images/icons/social/icon-buymeacoffee.svg',
      },
      link: 'https://buymeacoffee.com/sajeerzeji'
    },
    {
      name: 'Instagram',
      icon: {
        default: './assets/images/icons/social/icon-instagram.svg',
        dark: './assets/images/icons/social/icon-instagram.svg',
      },
      link: 'https://www.instagram.com/sajeerzeji'
    },
    {
      name: 'GDG',
      icon: {
        default: './assets/images/icons/social/icon-gdg.svg',
        dark: './assets/images/icons/social/icon-gdg.svg',
      },
      link: 'https://gdg.community.dev/gdg-kozhikode/'
    }
  ];

  // Removed - replaced with simple link in newsLetters section
  // featuredProducts removed - was redundant with highlightProjects and petProjectsSets

  petProjectsSets: any = [
    {
      year: '2025',
      items: [
        {
          title: 'Lyticspend',
          description: `Free and open source expense tracker. Track expenses and incomes in a simple, secure way with no cloud dependency.`,
          link: 'https://lyticspend.online/'
        }
      ]
    },
    {
      year: '2024',
      items: [
        {
          title: 'Shopify Apps Scraper',
          description: `Python script to scrape and analyze 9000+ Shopify apps for market research and competitive analysis.`
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: 'Yourslash',
          description: `Productivity tool inspired by oSlash - create custom shortcuts for frequently used links and resources.`,
          link: 'https://yourslash.com/'
        },
        {
          title: 'Nysaclan',
          description: `Innovation team focused on experimenting with emerging technologies and building proof-of-concepts.`,
          link: 'https://nysaclan.com/'
        },
        {
          title: 'Soul Chrome Extension',
          description: `Chrome extension for synced note-taking across all browser tabs, enabling seamless research workflows.`,
          link: 'https://soul.frnd.ai/'
        }
      ]
    },
    {
      year: '2022',
      items: [
        {
          title: 'Frnd.ai',
          description: `Sales Enablement platform with AI-powered content organization, sharing, and analytics for sales teams.`,
          link: 'https://frnd.ai'
        },
        {
          title: 'Frnd.ai Chrome Extension',
          description: `Chrome extension for content sharing and analytics across Gmail, Outlook, Hubspot, Salesforce, and LinkedIn.`,
          link: 'https://frnd.ai'
        }
      ]
    },
    {
      year: '2021',
      items: [
        {
          title: 'CSRF Validator',
          description: `NPM library for Node.js and NestJS to protect API requests with CSRF token validation.`,
          link: 'https://www.npmjs.com/package/csrf-validator'
        },
        {
          title: 'Multi Tenant Microservices',
          description: `Multi-tenant microservices API platform built with Spring Boot, PostgreSQL, and FlywayDB for database versioning.`
        }
      ]
    }
  ];

  highlightProjects: any = [
    {
      title: `Lyticspend`,
      description: `<span class="font-bold">Open source expense tracker</span> - Privacy-first financial management with no cloud dependency.`,
      link: 'https://lyticspend.online/'
    },
    {
      title: `Yourslash`,
      description: `<span class="font-bold">Productivity shortcuts</span> - Custom aliases for frequently accessed links and resources.`,
      link: 'https://yourslash.com/'
    },
    {
      title: `CSRF Validator`,
      description: `<span class="font-bold">Security library</span> - NPM package for CSRF protection in Node.js and NestJS applications.`,
      link: 'https://www.npmjs.com/package/csrf-validator'
    }
  ];

  newsLetters: any = [
    {
      title: 'LinkedIn: An innovation digest',
      link: 'https://www.linkedin.com/newsletters/7038592163324039168/'
    },
    {
      title: 'Substack: An innovation digest',
      link: 'https://innovationdigest.substack.com/'
    }
  ];

  blogs: any = [
    {
      title: 'The Whole Universe is a Second',
      link: 'https://medium.com/@sajeerzeji44/the-whole-universe-is-a-second-c8e8f228c054',
      publishedOn: 'May 2021'
    },
    {
      title: 'Spring Boot Flyway DB Version Control Integration',
      link: 'https://medium.com/@sajeerzeji44/spring-boot-flyway-db-version-control-integration-1df2e90474e6',
      publishedOn: 'Apr 2020'
    },
    {
      title: 'OAuth2 with Django',
      link: 'https://medium.com/@sajeerzeji44/oauth2-with-django-790e0a85f678',
      publishedOn: 'Feb 2020'
    },
    {
      title: 'RSocket for Spring Boot Microservices',
      link: 'https://medium.com/@sajeerzeji44/rsocket-for-spring-boot-microservices-d2f68f69a615',
      publishedOn: 'Sep 2019'
    },
    {
      title: 'GRPC for Spring Boot Microservices',
      link: 'https://medium.com/@sajeerzeji44/grpc-for-spring-boot-microservices-bd9b79569772',
      publishedOn: 'Sep 2019'
    },
    {
      title: 'Hosting your React Web App to Firebase',
      link: 'https://medium.com/@sajeerzeji44/hosting-your-react-web-app-to-firebase-98265f45831',
      publishedOn: 'May 2019'
    },
    {
      title: 'Create React Web Application',
      link: 'https://medium.com/@sajeerzeji44/create-react-js-application-43ff4a0fb31',
      publishedOn: 'May 2019'
    }
  ];

  talks: any = [
    {
      year: '2025',
      talks: [
        {
          title: 'Building Together - How AI Become your Perfect Coding Team mate',
          description: 'A session for Edapt Team'
        },
        {
          title: 'Code for Future - From Planing to Scaling - A complete overview',
          description: 'A session for Aifer Education Team'
        }
      ]
    },
    {
      year: '2024',
      talks: [
        {
          title: 'Coding up a business - Transforming business ideas into tech solutions - A practical insight',
          description: 'A session for Edapt Technology team'
        }
      ]
    }
  ];

  downArrowAnimationOptions: AnimationOptions = {
    path: '/assets/lottie/down-arrow.json',
  };

  ngOnInit() {
    this.setTheme();
    this.initializeSEO();
  }

  initializeSEO() {
    // Update meta tags
    this.seoService.updateMetaTags({
      title: 'Sajeer Babu - Software Engineer & Architect | Portfolio',
      description: 'Building scalable solutions and exploring cutting-edge technologies. Software Engineer & Architect with 8+ years of experience in Microservices, Serverless, Web Apps, and AI Integrations. Organiser at GDG Kozhikode.',
      url: 'https://sajeerzeji-98ac5.web.app',
      image: 'https://sajeerzeji-98ac5.web.app/assets/images/personal/my-image.png',
      type: 'website',
      keywords: [
        'Sajeer Babu',
        'Software Engineer',
        'Software Architect',
        'IBM',
        'RetailCloud',
        'Microservices',
        'Serverless',
        'Angular Developer',
        'Spring Boot',
        'Web Development',
        'AI Integration',
        'GDG Kozhikode',
        'Full Stack Developer',
        'Cloud Architecture',
        'RFID Technology',
        'OAuth2',
        'Technical Leadership',
        'Lyticspend',
        'Helloii',
        'Portfolio'
      ]
    });

    // Add structured data for better search engine understanding
    this.seoService.createCombinedStructuredData();
  }

  setTheme() {
    if (this.isBrowser) {
      document.documentElement.classList
        .toggle("dark", localStorage.getItem('currentTheme') === "dark");
    }
  }

  toggleDarkMode(isDark: boolean) {
    if (this.isBrowser) {
      localStorage.setItem('currentTheme', isDark ? 'dark' : 'light');
      this.setTheme();
    }
  }

  getCurrentTheme(): string {
    return this.isBrowser ? (localStorage.getItem('currentTheme') || 'light') : 'light';
  }

  scrollTo(targetId: string) {
    if (this.isBrowser) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
