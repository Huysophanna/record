import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  templateUrl: 'build/app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor( private platform: Platform, private menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage},
      { title: 'Store', component: HomePage},
      { title: 'Setting', component: HomePage},
      { title: 'About', component: HomePage},
      { title: 'Contact Us', component: HomePage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    //close the menu when clicking a link from the menu
    this.menu.close();
    //navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}

ionicBootstrap(MyApp, [], {
  tabbarPlacement: "bottom"
});
