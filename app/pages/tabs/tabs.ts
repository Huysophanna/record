import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TimerPage } from '../timer/timer';
import { RecordingPage } from '../recording/recording';
import { TopuserPage } from '../topuser/topuser';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})

export class TabsPage {
  private alarmTab: any;
  private timerTab: any;
  private recordingTab: any;
  private topTab: any;

  constructor(private nav: NavController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.alarmTab = HomePage;
    this.timerTab = TimerPage;
    this.recordingTab = RecordingPage;
    this.topTab = TopuserPage;
    
  }

}
