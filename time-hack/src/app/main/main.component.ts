import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { 
    Parse.initialize("eBjOVy5nwQ3y4aGnPF99iADKX1AdKMVhZZsbMAFu","A2FxZ68uyVQNwmkIEVuw4tNqXBBXW6HE9CLDuBkz"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'
  }

  day=["monday","tuesday","wednesday","thursday","friday"];
  time=["11:10","12:50","1:40","2:30","3:20","4:10","5:00","5:50","6:40"];
  monday={"11:10":"P1-DC  C302 | T2-Csk ","12:50":"T1-JP  A308 |T2-SE C303","1:40":"BREAK","2:30":"DC B102  C302","3:20":"Csk B102","4:10":"SE B102","5:00":"P1-ADA A102 | P2-SE A104 | P3-DC C302","5:50":"P1-ADA A102 | P2-SE A104 | P3-DC C302"};
  tuesday={"11:10":"P2-ADA  A103 | P3-JP A107 ","12:50":"BREAK","1:40":"JP  B203","2:30":"IM  B202","3:20":"DC  B202","4:10":"ADA  C301","5:00":"NO CLASS","5:50":"NO CLASS"};
  wednesday={"11:10":"P1-JP  A107 ","12:00":"T2-ADA  A102","12:50":"IM  B302","1:40":"BREAK","2:30":"ADA  B202","3:20":"SE  B202","4:10":"P2-JP  A107 | P3-SE A104","5:00":"P2-JP  A107 | P3-SE A104","5:50":"NO CLASS"};
  thursday={"11:10":"P1-SE  A104 | P2-DC C302  ","12:50":"JP  B302","1:40":"BREAK","2:30":"ADA  B102","3:20":"T1-DC  B304 |T2-JP B102","4:10":"Csk  B102","5:00":"DC  B102","5:50":"T1-SE  B102"};
  friday={"11:10":"T1-Csk  C103 | P3-ADA A102","12:50":"JP  B102","1:40":"BREAK","2:30":"IM  B102","3:20":"T1-ADA  B104 | T2-DC B102","4:10":"SE  B102","5:00":"NO CLASS","5:50":"NO CLASS"};
  ngOnInit() {
//     const MyFirstClass = Parse.Object.extend("MyFirstClass");
// const myFirstClass = new MyFirstClass();

// myFirstClass.set("name", "I'm able to save objects!");
// myFirstClass.save()
// .then((object) => {
//   // Success
//   alert('New object created with objectId: ' + object.id);
// }, (error) => {
//   // Save fails
//   alert('Failed to create new object, with error code: ' + error.message);
// });
// const SoccerPlayers = Parse.Object.extend("SoccerPlayers");
// const soccerPlayers = new SoccerPlayers();

// soccerPlayers.set("playerName", "A. Wed");
// soccerPlayers.set("yearOfBirth", 1997);
// soccerPlayers.set("emailContact", "a.wed@email.io");
// soccerPlayers.set("attributes", ["fast","good conditioning"])

// soccerPlayers.save()
// .then((player) => {
//   // Success
//   alert('New object created with objectId: ' + player.id);
// }, (error) => {
//   // Save fails
//   alert('Failed to create new object, with error code: ' + error.message);
// });
// const SoccerPlayers = Parse.Object.extend("SoccerPlayers");
// const soccerPlayers = new SoccerPlayers();

// Retrieve the object by id
// soccerPlayers.get("WrK1ynmrOZ")
// .then((player) => {
//   // The object was retrieved successfully and it is ready to update.
//   player.set("yearOfBirth", 1998);
//   player.set("emailContact", "a.wed@domain.io");
//   player.save();

// }, (error) => {
//   // The object was not retrieved successfully.
// });     



  this.classes();
  }

 today = new Date();
 hours= this.today.getHours();
ctime = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
  cday= this.today.getDay();
  str="";
  // cday=1;
  // ctime="12:50";
classes(){
    if (this.hours>12){
      this.hours-12;
     this.ctime=this.hours + ":" + this.today.getMinutes()
     this.str=(String)(this.ctime);
    }
    if(this.selectedDay=="monday"|| this.cday==1){
        for(var i in this.monday){
          
            if(this.selectedTime==i){
              console.log(this.selectedTime);
                var res = this.monday[i];
                document.getElementById("res").innerHTML=res;
            }
            if(this.str==i){
              var res = this.monday[i];
                document.getElementById("res").innerHTML=res;
            }
          }
        }

        if(this.selectedDay=="tuesday" ||this.cday==2){
          for(var i in this.tuesday){
            
              if(this.selectedTime==i){
                console.log(this.selectedTime);
                  var res = this.tuesday[i];
                  document.getElementById("res").innerHTML=res;
              }
              if(this.str==i){
                var res = this.tuesday[i];
                  document.getElementById("res").innerHTML=res;
              }
            }
          }
      
          if(this.selectedDay=="wednesday" || this.cday==3){
            for(var i in this.wednesday){
              
                if(this.selectedTime==i){
                  console.log(this.selectedTime);
                    var res = this.wednesday[i];
                    document.getElementById("res").innerHTML=res;
                }
                if(this.str==i){
                  var res = this.wednesday[i];
                    document.getElementById("res").innerHTML=res;
                }
              }
            }
      
            if(this.selectedDay=="thursday"  || this.cday==4){
              for(var i in this.thursday){
                
                  if(this.selectedTime==i){
                    console.log(this.selectedTime);
                      var res = this.thursday[i];
                      document.getElementById("res").innerHTML=res;
                  }
                  if(this.str==i){
                    var res = this.thursday[i];
                      document.getElementById("res").innerHTML=res;
                  }
                }
              }
      
              if(this.selectedDay=="friday"  || this.cday==5){
                for(var i in this.friday){
                  
                    if(this.selectedTime==i){
                      console.log(this.selectedTime);
                        var res = this.friday[i];
                        document.getElementById("res").innerHTML=res;
                    }
                    if(this.str==i){
                      var res = this.friday[i];
                        document.getElementById("res").innerHTML=res;
                    }
                  }
                }
              
      
}

  selectedDay: string = '';
  selectedTime: string = '';

  //event handler for the select element's change event
  selectChangetime (event: any) {
    //update the ui
    this.selectedTime = event.target.value;
    console.log(this.selectedTime);
  }
  selectChangeday (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(this.selectedDay);
  }

}