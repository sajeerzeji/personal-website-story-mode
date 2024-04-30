import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgOptimizedImage, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-website-story-mode';

  name = 'Sajeer';
  profileDescription = 'I\'m an Associate Technical Architect, A full-time Researcher and more.';

  experiences = [
    {
      years: {
        from: '2021',
        to: 'Present'
      },
      description: [
        {
          type: 'html',
          content: `Promoted as an Associate Technical Architect at <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a>.`
        },
        {
          type: 'html',
          content: `As an associated technical architect, my role is to architect new products from scratch and maintain architectural policies across all the projects.`
        },
        {
          type: 'html',
          content: `Built some projects from scratch at retailcloud, some of them are like Vendor Portal which have the ability to send RFID tag printing request to vendors and vendor will print RFID tags and stick on the products before sending to the stores and RFID Based Inventory Management App which will be used to scan all items in inventory in few seconds using RFID functionality thus hours of struggles and human errors will be eliminated. These projects are attracted hundreds of more customers into retailcloud ecosystem of retail products.`
        }
      ]
    },
    {
      years: {
        from: '2020',
        to: '2021'
      },
      description: [
        {
          type: 'html',
          content: `Role changed to Lead Software Engineer at <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a>.`
        },
        {
          type: 'html',
          content: `The team under me got expanded to 6 to 10 people, so my primary goals have changed a little to 50% of managing team, planning and executing sprints, etc and the next 50% into do the tasks that need more experience and concentration.`
        },
        {
          type: 'html',
          content: `During this period, retailcloud have implemented a new restaurant management app called <a href="https://retailcloud.com/partners/tikt.html" target="_blank" class="text-blue-600 underline">Tikt</a>. So I have implemented a new console portal project called Restaurant Console from scratch to handle all the restaurant based processes.`
        }
      ]
    },
    {
      years: {
        from: '2019',
        to: '2020'
      },
      description: [
        {
          type: 'html',
          content: `Became Senior Software Engineer at <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a>.`
        },
        {
          type: 'html',
          content: `This was a phase of enhanced skill development in Spring Boot based microservices development. We had an OAuth2 based authorization service project, I have created many other microservices in spring boot from scratch and integrated with the OAuth2 project.`
        },
        {
          type: 'html',
          content: `I have created an internal SDK from scratch and integrated with all the microservices, so to reduce boiler plate codes and to reuse most of the authorization configured codes.`
        },
        {
          type: 'html',
          content: `I have integrated gRPC in the internal SDK so that the microservices can talk to each other seamlessly.`
        }
      ]
    },
    {
      years: {
        from: '2018',
        to: '2019'
      },
      description: [
        {
          type: 'html',
          content: `Joined at <a href="https://retailcloud.com/" target="_blank" class="text-blue-600 underline">retailcloud</a> as a Software Engineer.`
        },
        {
          type: 'html',
          content: `Handled enhancements, bug fixing and support for almost all the legacy projects at retailcloud except mobile projects. I had to enhance a lot of old codes and project to latest one.`
        },
        {
          type: 'html',
          content: `I had to work at devops part for almost all the projects at this time as we didn't had a devops staff. I had to handle almost all deployments, log extractions, etc. Finally I had to setup a devops pipeline for deployment automation as well.`
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
          content: `Joined as a Junior Software Engineer at <a href="https://www.m2hinfotech.com/" target="_blank" class="text-blue-600 underline">M2H Infotech LLP</a>.`
        },
        {
          type: 'html',
          content: `This was a phase of struggles and learning. The platform was UAE based banking projects called WPS and FTS. I had to work on bot for almost 4 of the banking customers. Had a hand on in fast development, deployment, bug fixing, customer support, etc.`
        },
        {
          type: 'html',
          content: `The best part of this phase was, I got a chance to visit onsite for the major banking client at UAE for three months, this visit was to do enhancements and deployments as banking projects are mostly deployed offline.`
        }
      ]
    }
  ];

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: {
        default: './assets/images/icons/social/icon-linkedin.svg'
      },
      link: 'https://www.linkedin.com/in/sajeerzeji/'
    },
    {
      name: 'X',
      icon: {
        default: './assets/images/icons/social/icon-x.svg'
      },
      link: 'https://twitter.com/sajeer_zeji'
    },
    {
      name: 'Github',
      icon: {
        default: './assets/images/icons/social/icon-github.svg'
      },
      link: 'https://github.com/sajeerzeji'
    },
    {
      name: 'Medium',
      icon: {
        default: './assets/images/icons/social/icon-medium.svg'
      },
      link: 'https://sajeerzeji44.medium.com/'
    },
    {
      name: 'Buy me A Coffee',
      icon: {
        default: './assets/images/icons/social/icon-buymeacoffee.svg'
      },
      link: 'https://buymeacoffee.com/sajeerzeji'
    },
    {
      name: 'Instagram',
      icon: {
        default: './assets/images/icons/social/icon-instagram.svg'
      },
      link: 'https://www.instagram.com/sajeerzeji'
    }
  ];

  featuredBlogs = [
    {
      type: `LinkedIn Newsletter`,
      title: `An Innovation Digest`,
      link: 'https://www.linkedin.com/newsletters/7038592163324039168/',
      items: [
        {
          title: `Level Up Your No-Code Game: Introducing The No-Code Leaderboard!`,
          shortDescription: `No-Code Developers, Assemble!...`,
          footer: `Author: Sajeer Babu`,
          link: 'https://www.linkedin.com/pulse/level-up-your-no-code-game-introducing-leaderboard-sajeer-babu-hvpic/?trackingId=z8C2xWKqQHmOkuEWJ6dNKQ%3D%3D'
        },
        {
          title: `Stimch: Affordable and Effective Marketing Automation`,
          shortDescription: `Stimch is a game-changing marketi...`,
          footer: `Author: Sajeer Babu`,
          link: 'https://www.linkedin.com/pulse/stimch-affordable-effective-marketing-automation-sajeer-babu-ooioc/?trackingId=Za6fj3t2QMW2kKNlNXWCVA%3D%3D'
        },
        {
          title: `Optimize Your Workflow with Ayraa: A Practical Knowledge Assistant`,
          shortDescription: `Optimize your work routine with Ay...`,
          footer: `Author: Sajeer Babu`,
          link: 'https://www.linkedin.com/pulse/stimch-affordable-effective-marketing-automation-sajeer-babu-ooioc/?trackingId=Za6fj3t2QMW2kKNlNXWCVA%3D%3D'
        }
      ]
    }
  ];

  featuredProducts = [
    {
      title: 'Startie',
      description: `Startie will alert you when any of your shopify apps competitor gets a review.`,
      link: 'https://startie-dca92.web.app/',
      releasedOn: 'Apr 2024'
    },
    {
      title: 'Helloii',
      description: `AI Sales Person for shopify stores. This will let the store customers talk with an AI about the products.`,
      link: 'https://helloii.com/',
      releasedOn: 'October 2024'
    }
  ];

  petProjectsSets: any = [
    {
      year: '2024',
      items: [
        {
          title: `Shopify Apps Scraper`,
          description: `This is a python script to scrape and fetch all the shopify apps. I could scrape 9000+ apps.`
        },
        {
          title: `Startie`,
          description: `Startie will alert you when any of your shopify apps competitor gets a review.`,
          link: 'https://startie-dca92.web.app/',
          releasedOn: 'Apr 2024'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: `Helloii`,
          description: `AI Sales Person for shopify stores. This will let the store customers talk with an AI about the products.`,
          link: 'https://helloii.com/',
          releasedOn: 'Oct 2024'
        },
        {
          title: `Yourslash`,
          description: `Initiated a new project just like oSlash but more features.`,
          link: 'https://yourslash.com/'
        },
        {
          title: `Nysaclan`,
          description: `Formed a team of people to experiment and implement new things.`,
          link: 'https://nysaclan.com/'
        },
        {
          title: `ThinkrGPT`,
          description: `A ChatGPT like web app, which will learn about the user at first and respond to every queries with personalized response. Sunsetted due to high infra structure costs.`,
        },
        {
          title: `OnPageGPT Chrome Extension`,
          description: `An interactive AI tool on every web page, where we can query anything about the visited website. Sunsetted due to high infra structure costs.`,
        },
        {
          title: `Multi Tenant API Platform`,
          description: `A multi tenant API platform in Python Django, which integrated with almost all openai APIs also with token based authentication. Development discontinued due to lack of time to spend.`,
        },
        {
          title: `Enablement OS`,
          description: `Frnd.ai project have been changed to Enablement OS, with a slight deviation, eventually we sunsetted the project due to some unintentional issues came in.`,
          link: 'https://frnd.ai/manifesto'
        },
        {
          title: `Soul Chrome Extension`,
          description: `A chrome extension that will let us take synced notes on every tabs we open.`,
          link: 'https://soul.frnd.ai/'
        },
        {
          title: `Helloii Chrome Extension`,
          description: `A chrome extension that will let us query chatgpt prompt on every tab we open.`,
          link: 'https://chrome.helloii.com/'
        },
      ]
    },
    {
      year: '2022',
      items: [
        {
          title: `Frnd.ai`,
          description: `A tool to sales people for Sales Enablement by Content Organization and Sharing with Analytics with a help of an AI model. Eventually changed the idea to Enablement OS and sunsetted.`,
          link: 'https://frnd.ai'
        },
        {
          title: `Frnd.ai Chrome Extension`,
          description: `A chrome extension which will be used to share contents and take analytics, this was working with Gmail, Outlook, Hubspot, Salesforce and LinkedIn, but eventually we sunsetted the project.`,
          link: 'https://frnd.ai'
        },
      ]
    },
    {
      year: '2021',
      items: [
        {
          title: `CSRF Validator`,
          description: `A library which can be used in Node.Js or NestJs projects to protect API requests with CSRF token.`,
          link: 'https://www.npmjs.com/package/csrf-validator'
        },
        {
          title: `Multi Tenant Microservices`,
          description: `This is a multi tenant microservices API platform built in Spring Boot along with postgresql and flywaydb.`
        }
      ]
    }
  ];

  highlightProjects: any = [
    {
      title: `Enablement OS`,
      description: `Frnd.ai project have been changed to Enablement OS, with a slight deviation, eventually we sunsetted the project due to some unintentional issues came in.`,
      link: 'https://frnd.ai/manifesto'
    },
    {
      title: `Frnd.ai`,
      description: `A tool to sales people for Sales Enablement by Content Organization and Sharing with Analytics with a help of an AI model. Eventually changed the idea to Enablement OS and sunsetted.`,
      link: 'https://frnd.ai'
    },
    {
      title: `Frnd.ai Chrome Extension`,
      description: `A chrome extension which will be used to share contents and take analytics, this was working with Gmail, Outlook, Hubspot, Salesforce and LinkedIn, but eventually we sunsetted the project.`,
      link: 'https://frnd.ai'
    },
    {
      title: `Helloii`,
      description: `AI Sales Person for shopify stores. This will let the store customers talk with an AI about the products.`,
      link: 'https://helloii.com/',
      releasedOn: 'Oct 2024'
    }
  ]
}
