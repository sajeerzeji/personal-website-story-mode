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
  profileDescription = 'Building the future, one line of code at a time.\n\nSoftware Engineer & Architect at IBM with years of experience crafting scalable solutions.\n\nFrom microservices to AI-powered apps, I turn complex problems into elegant systems.\n\nOrganizer at GDG Kozhikode | Open Source Enthusiast | AI Integration Specialist';
  profileImage = './assets/images/personal/my-image.png'

  get yearsOfExperience(): number {
    const startDate = new Date(2016, 8, 1); // September 2016 (month is 0-indexed)
    const currentDate = new Date();
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();
    
    // Adjust if current month is before September
    return monthsDiff < 0 ? yearsDiff - 1 : yearsDiff;
  }

  experiences = [
    {
      years: {
        from: '2025',
        to: 'Present'
      },
      description: [
        {
          type: 'html',
          content: `At <a href="https://www.ibm.com/" target="_blank" class="text-blue-600 underline">IBM</a> I work on runtime and developer tooling, with a focus on how systems behave under real workloads and how changes propagate through large codebases.`
        },
        {
          type: 'html',
          content: `Most of this work sits at the boundary between configuration, language tooling, and production operations, where small design decisions compound over time.`
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
          content: `Across seven years at <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a>, where I grew into a <span class="font-bold">Technical Architect</span>, I helped evolve core commerce and RFID systems from tightly coupled implementations toward clearer, service-oriented backends.`
        },
        {
          type: 'html',
          content: `The work focused on how data and responsibilities were split across services, how integration points failed in practice, and how to keep the platform operable as the business and engineering team grew.`
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
          content: `At <a href="https://www.m2hinfotech.com/" target="_blank" class="text-blue-600 underline">M2H Infotech LLP</a> I worked on banking automation, where regulatory constraints, offline operation, and failure recovery shaped every design choice.`
        },
        {
          type: 'html',
          content: `That period grounded how I think about reliability, operational discipline, and the gap between planned flows and what production systems actually do.`
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
      name: 'Github',
      icon: {
        default: './assets/images/icons/social/icon-github.svg',
        dark: './assets/images/icons/social/icon-github-light.svg',
      },
      link: 'https://github.com/sajeerzeji'
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

  // Removed highlightProjects and other unused sections

  talks: any = [
    {
      talks: [
        {
          title: 'Designing systems that survive early growth',
          description: 'Focuses on architectural decisions that hold up under rapid change — imperfect requirements, small teams, and the realities of scaling before systems are fully understood.'
        },
        {
          title: 'Architecture trade-offs in real production environments',
          description: 'Explores how real-world constraints shape system design, and why many “best practices” need to be re-evaluated once systems face production load and operational pressure.'
        },
        {
          title: 'How AI changes developer workflows in practice',
          description: 'Looks at where AI genuinely helps developers today, where it creates friction, and how teams adapt when AI becomes part of everyday engineering rather than a novelty.'
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
      description: `Building scalable solutions and exploring cutting-edge technologies. Software Engineer & Architect with ${this.yearsOfExperience}+ years of experience in Microservices, Serverless, Web Apps, and AI Integrations. Organiser at GDG Kozhikode.`,
      url: 'https://sajeerzeji.com',
      image: 'https://sajeerzeji.com/assets/images/personal/my-image.png',
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
