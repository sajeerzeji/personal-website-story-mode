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
          content: `I have worked on some products like below`
        }
      ]
    }
  ];
}
