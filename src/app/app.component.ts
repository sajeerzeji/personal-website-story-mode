import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgOptimizedImage, NgIf, NgClass, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sajeer Babu';

  name = 'Sajeer';
  profileDescription = 'Solving things with code and conquering the unknown as a tech explorer.';
  profileImage = './assets/images/personal/my-image.png'

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
          content: `I was responsible for both designing new products from scratch and ensuring that all projects adhered to established architectural policies.`
        },
        {
          type: 'html',
          content: `One such project was the <span class="font-bold">Vendor Portal</span>, which streamlined the process of sending RFID tag printing requests to vendors. This system eliminated the need for manual tag printing, ensuring that products arrived at stores with pre-applied RFID tags. Another project I spearheaded was the <span class="font-bold">RFID-Based Inventory Management App</span>. This innovative app utilizes <span class="font-bold">RFID technology</span> to scan entire inventories in seconds, drastically reducing the time and manpower required for traditional inventory checks. These projects not only improved operational efficiency but also attracted a significant number of new customers to the retailcloud ecosystem.`
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
          content: `As my team grew from 6 to 10 people, my role evolved to encompass both leadership and technical expertise. My focus shifted to a 50/50 split, dedicating half my time to managing the team, planning and executing sprints, and ensuring smooth project delivery. The other half involved tackling complex tasks requiring experience and focused attention.`
        },
        {
          type: 'html',
          content: `During this time, our company, RetailCloud, implemented a new restaurant management application called <a href="https://retailcloud.com/partners/tikt.html" target="_blank" class="text-blue-600 underline">Tikt</a>. To complement Tikt, I spearheaded the development of a brand new console portal project named <span class="font-bold">Restaurant Console</span>. Built from the ground up, Restaurant Console acts as a centralized hub for managing all <span class="font-bold">restaurant-related processes</span> within the Tikt ecosystem.`
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
          content: `My focus here was on developing microservices using <span class="font-bold">Spring Boot</span>. I played a key role in building an <span class="font-bold">OAuth2</span> authorization service and several other microservices from scratch. These microservices seamlessly integrated with the authorization service.`
        },
        {
          type: 'html',
          content: `To streamline development and reduce code duplication, I created an internal <span class="font-bold">SDK</span>. This SDK encapsulated common functionalities, including pre-configured authorization logic, eliminating the need to rewrite boilerplate code across all microservices.`
        },
        {
          type: 'html',
          content: `Furthermore, I implemented <span class="font-bold">gRPC</span> within the SDK to enable efficient communication between the microservices, ensuring a smooth and cohesive system.`
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
          content: `At this phase, my primary focus was in maintaining and enhancing their <span class="font-bold">legacy projects</span>, excluding mobile projects. This involved significant <span class="font-bold">code upgrades</span>, ensuring compatibility with the latest technologies.`
        },
        {
          type: 'html',
          content: `In the absence of a dedicated <span class="font-bold">DevOps</span> team, I took on these responsibilities as well. I handled <span class="font-bold">deployments</span>, <span class="font-bold">log extractions</span>, and other tasks. To streamline these processes, I even went on to set up a <span class="font-bold">DevOps pipeline for automated deployments</span>.`
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
          content: `This period was a challenging but rewarding learning experience. I honed my skills working on bot development projects for several banking clients in the UAE, specifically focusing on <span class="font-bold">WPS and FTS</span> platforms. My responsibilities included rapid development, deployment, bug fixing, and customer support..`
        },
        {
          type: 'html',
          content: `A highlight of this phase was a three-month on-site visit at a major UAE banking client.  Since banking projects are often deployed offline, this visit was crucial for implementing enhancements and ensuring a smooth rollout for the <span class="font-bold">banking projects</span>.`
        }
      ]
    }
  ];

  socialLinks = [
    {
      name: 'Email',
      icon: {
        default: './assets/images/icons/social/icon-email.svg'
      },
      link: 'mailto:sajeerzeji44@gmail.com'
    },
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

  featuredBlogs: any = [
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

  featuredProducts: any = [
    {
      title: 'Post In Light',
      description: `Post-In-Light generates <span class="font-bold">social media contents</span> for you with the help of <span class="font-bold">AI</span> and the information and referral URLs you give.`,
      link: 'https://post-in-light.web.app/',
      releasedOn: 'May 2024'
    },
    {
      title: 'Startie',
      description: `Startie will <span class="font-bold">alert</span> you when any of your shopify apps <span class="font-bold">competitor</span> gets a <span class="font-bold">review</span>.`,
      link: 'https://startie-dca92.web.app/',
      releasedOn: 'Apr 2024'
    },
    {
      title: 'Helloii',
      description: `<span class="font-bold">AI Sales Person</span> for shopify stores. This will let the store customers <span class="font-bold">talk with an AI</span> about the products.`,
      link: 'https://helloii.com/',
      releasedOn: 'October 2024'
    }
  ];

  petProjectsSets: any = [
    {
      year: '2024',
      items: [
        {
          title: 'Post In Light',
          description: `Post-In-Light generates <span class="font-bold">social media contents</span> for you with the help of <span class="font-bold">AI</span> and the information and referral URLs you give.`,
          link: 'https://post-in-light.web.app/'
        },
        {
          title: `Shopify Apps Scraper`,
          description: `This is a <span class="font-bold">python script</span> to <span class="font-bold">scrape</span> and fetch all the shopify apps. I could scrape 9000+ apps.`
        },
        {
          title: `Startie`,
          description: `Startie will <span class="font-bold">alert</span> you when any of your shopify apps <span class="font-bold">competitor</span> gets a <span class="font-bold">review</span>.`,
          link: 'https://startie-dca92.web.app/'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: `Helloii`,
          description: `<span class="font-bold">AI Sales Person</span> for shopify stores. This will let the store customers <span class="font-bold">talk with an AI</span> about the products.`,
          link: 'https://helloii.com/',
          releasedOn: 'Oct 2024'
        },
        {
          title: `Yourslash`,
          description: `Initiated a new project just like <span class="font-bold">oSlash</span> but with more features.`,
          link: 'https://yourslash.com/'
        },
        {
          title: `Nysaclan`,
          description: `Formed a team of people to experiment and implement new things.`,
          link: 'https://nysaclan.com/'
        },
        {
          title: `ThinkrGPT`,
          description: `A <span class="font-bold">ChatGPT-Like</span> web app, which will learn about the user at first and respond to every queries with <span class="font-bold">personalized response</span>. <span class="font-bold">Sunsetted</span> due to high infra structure costs.`,
        },
        {
          title: `OnPageGPT Chrome Extension`,
          description: `An <span class="font-bold">interactive AI tool</span> on every web page, where we can query anything about the visited website. <span class="font-bold">Sunsetted</span> due to high infra structure costs.`,
        },
        {
          title: `Multi Tenant API Platform`,
          description: `A <span class="font-bold">multi tenant</span> API platform in <span class="font-bold">Python Django</span>, which integrated with almost all openai APIs also with token based authentication. Development <span class="font-bold">discontinued</span> due to lack of time to spend.`,
        },
        {
          title: `Enablement OS`,
          description: `<span class="font-bold">Frnd.ai</span> project have been changed to <span class="font-bold">Enablement OS</span>, with a slight deviation, eventually we <span class="font-bold">sunsetted</span> the project due to some unintentional issues came in.`,
          link: 'https://frnd.ai/manifesto'
        },
        {
          title: `Soul Chrome Extension`,
          description: `A <span class="font-bold">chrome extension</span> that will let us take synced notes on every tabs we open.`,
          link: 'https://soul.frnd.ai/'
        },
        {
          title: `Helloii Chrome Extension`,
          description: `A <span class="font-bold">chrome extension</span> that will let us query chatgpt prompt on every tab we open.`,
          link: 'https://chrome.helloii.com/'
        },
      ]
    },
    {
      year: '2022',
      items: [
        {
          title: `Frnd.ai`,
          description: `A tool to sales people for <span class="font-bold">Sales Enablement</span> by Content Organization and Sharing with Analytics with a help of an <span class="font-bold">AI model</span>. Eventually changed the idea to Enablement OS and <span class="font-bold">sunsetted</span>.`,
          link: 'https://frnd.ai'
        },
        {
          title: `Frnd.ai Chrome Extension`,
          description: `A <span class="font-bold">chrome extension</span> which will be used to share contents and take analytics, this was working with <span class="font-bold">Gmail, Outlook, Hubspot, Salesforce and LinkedIn</span>, but eventually we <span class="font-bold">sunsetted</span> the project.`,
          link: 'https://frnd.ai'
        },
      ]
    },
    {
      year: '2021',
      items: [
        {
          title: `CSRF Validator`,
          description: `An npm <span class="font-bold">library</span> which can be used in <span class="font-bold">Node.Js</span> or <span class="font-bold">NestJs</span> projects to protect API requests with <span class="font-bold">CSRF token</span>.`,
          link: 'https://www.npmjs.com/package/csrf-validator'
        },
        {
          title: `Multi Tenant Microservices`,
          description: `This is a <span class="font-bold">multi tenant microservices</span> API platform built in <span class="font-bold">Spring Boot</span> along with <span class="font-bold">postgresql</span> and <span class="font-bold">flywaydb</span>.`
        }
      ]
    }
  ];

  highlightProjects: any = [
    {
      title: `Enablement OS`,
      description: `<span class="font-bold">Frnd.ai</span> project have been changed to <span class="font-bold">Enablement OS</span>, with a slight deviation, eventually we <span class="font-bold">sunsetted</span> the project due to some unintentional issues came in.`,
      link: 'https://frnd.ai/manifesto'
    },
    {
      title: `Frnd.ai`,
      description: `A tool to sales people for <span class="font-bold">Sales Enablement</span> by Content Organization and Sharing with Analytics with a help of an <span class="font-bold">AI model</span>. Eventually changed the idea to Enablement OS and <span class="font-bold">sunsetted</span>.`,
      link: 'https://frnd.ai'
    },
    {
      title: `Frnd.ai Chrome Extension`,
      description: `A <span class="font-bold">chrome extension</span> which will be used to share contents and take analytics, this was working with Gmail, Outlook, Hubspot, Salesforce and LinkedIn, but eventually we <span class="font-bold">sunsetted</span> the project.`,
      link: 'https://frnd.ai'
    },
    {
      title: `Helloii`,
      description: `<span class="font-bold">AI Sales Person</span> for shopify stores. This will let the store customers <span class="font-bold">talk with an AI</span> about the products.`,
      link: 'https://helloii.com/',
      releasedOn: 'Oct 2024'
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

  downArrowAnimationOptions: AnimationOptions = {
    path: '/assets/lottie/down-arrow.json',
  };

  scrollTo(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
