import {Component} from '@angular/core';
import {NavController, Platform, Page, Events, MenuController} from 'ionic-angular';
import {MediaPlugin} from 'ionic-native';
declare var navigator: any;
declare var cordova: any;
declare var Media: any;

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    private _platform: Platform;
    private _fileRecord: MediaPlugin;
    
    private _pathFile: string;
    private _nameFile: string;
    private mediaRec;
    
    //create Media object here

  constructor(private navCtrl: NavController, private platform: Platform, private menu: MenuController) {
     this._platform = platform;
  }

    public startRecord(): void {
       if (this._platform.is('ios'))
           var src = 'testing.wav';
       else
           var src = 'testing.amr';
       this.mediaRec = new Media(src,
         // success callback
         function() {
             console.log("recordAudio():Audio Success");
         },

         // error callback
         function(err) {
             console.log("recordAudio():Audio Error: "+ err.code);
         }
       );

      // Record audio
      this.mediaRec.startRecord('recorded-audio-'+ 1);
    //   setTimeout(function() {
    //     // Stop recording
    //     this.mediaRec.stopRecord();
    //   }, 5000);
      
    }

    public stopRecord(): void {
       this.mediaRec.stopRecord();
       this.mediaRec.release();

    }

    private startPlay() {
      // Play the audio file at url
      if (this._platform.is('ios'))
           var url = "testing.wav";
       else
           var url = this.getPathFileRecordAudio() + "testing.amr";
      var my_media = new Media(url,
          // success callback
          function () {
              console.log("playAudio(): Success");
          },
          // error callback
          function (err) {
              console.log("playAudio(): Error: " + err);
          }
      );
      // Play audio
      console.log("Start Playing Audio ...");
      my_media.play();
    }

    private getPathFileRecordAudio(): string {
      if (this._platform.is('ios')) {
        let path: string = cordova.file.tempDirectory;;
        console.log("iOS Platform");
        return path;
      } else {
        let path: string = cordova.file.externalRootDirectory;
        console.log("Android Platform");
        return path;
      }
    }
    public openMenu() {
        this.menu.open();
    }
}