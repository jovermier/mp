// app
import {RouteComponent} from '../../frameworks/core/index';
import {Accordion, AccordionTab, PanelMenu, MenuItem} from 'primeng/primeng';
import {OnInit} from '@angular/core';

@RouteComponent({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [Accordion, AccordionTab, PanelMenu]
})
export class NavbarComponent implements OnInit {

  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Browse',
        icon: 'fa-home'
      },
      {
        label: 'Sell Your Stuff',
        icon: 'fa-camera'
      },
      {
        label: 'Chat',
        icon: 'fa-weixin'
      },
      {
        label: 'Categories',
        icon: 'fa-th-large',
        items: [
          {label: 'Electronics', icon: 'fa-mobile', routerLink: ['/']},
          {label: 'Cars and Motors', icon: 'fa-car', routerLink: ['/about']},
          {label: 'Sports, Leisure and Games', icon: 'fa-bicycle', routerLink: ['/about']},
          {label: 'Home and Garden', icon: 'fa-leaf', routerLink: ['/about']},
          {label: 'Movies, Books and Music', icon: 'fa-book', routerLink: ['/about']},
          {label: 'Fashion and Accessories', icon: 'fa-umbrella', routerLink: ['/about']},
          {label: 'Baby and Child', icon: 'fa-child', routerLink: ['/about']},
          {label: 'Other', icon: 'fa-gift', routerLink: ['/about']}
        ]
      },
      {
        label: 'My Profile',
        icon: 'fa-user',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Invite Facebook Friends',
        icon: 'fa-user-plus'
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      }
    ];
  }
}
