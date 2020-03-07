import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cdkMenuList: Array<MenuRouter> = [
    {
      routerLink: ["/cdk/coercion"],
      routerName: 'cdk-coercion'
    },
    {
      routerLink: ["/cdk/layout"],
      routerName: 'cdk-layout'
    },
    {
      routerLink: ["/cdk/keycodes"],
      routerName: 'cdk-keycodes'
    },
    {
      routerLink: ["/cdk/accessibility"],
      routerName: 'cdk-accessibility'
    },
    {
      routerLink: ["/cdk/bidi"],
      routerName: 'cdk-bidi'
    },
    {
      routerLink: ["/cdk/scrolling"],
      routerName: 'cdk-scrolling'
    },
    {
      routerLink: ["/cdk/portal"],
      routerName: 'cdk-portal'
    },
    {
      routerLink: ["/cdk/overlay"],
      routerName: 'cdk-overlay'
    },
    {
      routerLink: ["/cdk/platform"],
      routerName: 'cdk-platform'
    },
    {
      routerLink: ["/cdk/observers"],
      routerName: 'cdk-observers'
    },
    {
      routerLink: ["/cdk/dragDrop"],
      routerName: 'cdk-dragDrop'
    },
    {
      routerLink: ["/cdk/textField"],
      routerName: 'cdk-textField'
    },
    {
      routerLink: ["/cdk/stepper"],
      routerName: 'cdk-stepper'
    },
    {
      routerLink: ["/cdk/table"],
      routerName: 'cdk-table'
    },
    {
      routerLink: ["/cdk/tip"],
      routerName: 'cdk-tip'
    },

  ]
  isCollapsed
}
interface MenuRouter {
  routerLink: Array<string>;
  routerName: string;
}

