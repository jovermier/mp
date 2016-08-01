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
        label: 'My Profile',
        icon: 'fa-file-o',
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
        label: 'Categories',
        icon: 'fa-edit',
        items: [
          {label: 'HOME', icon: 'fa-mail-forward', routerLink: ['/']},
          {label: 'ABOUT', icon: 'fa-mail-reply', routerLink: ['/about']}
        ]
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
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              {label: 'Save', icon: 'fa-save'},
              {label: 'Update', icon: 'fa-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              {label: 'Delete', icon: 'fa-minus'}
            ]
          }
        ]
      }
    ];
  }
}
