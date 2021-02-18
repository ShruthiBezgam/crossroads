import { Component } from '@angular/core';
import { BackendService } from './backend-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crossroads';
  httpResponse: any;
  display: any;
  resultArray: any;
  dataArray: any;
  errorResp: any;

  constructor(
    public service: BackendService){}
  
    ngOnInit(): void {
     this.gitHistoryServiceCall();
    }

  gitHistoryServiceCall(){
    this.service.gitCommitHistoryService().subscribe(Resp => {
      this.httpResponse = Resp;
      this.display = JSON.stringify(this.httpResponse);
      console.log(" git response : ", Resp)
      if (this.httpResponse.errorCode == 0) {
        console.log("this.httpResponse.msg   -->", this.httpResponse.msg)
        
        this.resultArray = this.httpResponse.result;
        
        for (var i = 0; i < this.resultArray; i++) {

          var data = {
            CommitID: this.resultArray[i].sha,
            Author: this.resultArray[i].name,
            Time: this.resultArray[i].date,
            CommitMessage: this.resultArray[i].message
          }
          this.dataArray.push(data);
        }

      } else {
        this.errorResp = this.httpResponse.msg
      }
    })
}

  // rows = [
  //   {
  //     "CommitID" : "1",
  //     "Author" : "Rahul",
  //     "Time" : "3:00 AM",
  //     "CommitMessage" : "Commit 1"
  //   },
  //   {
  //     "CommitID" : "2",
  //     "Author" : "Ritu",
  //     "Time" : "2:45 PM",
  //     "CommitMessage" : "Commit 2"
  //   },
  //   {
  //     "CommitID" : "3",
  //     "Author" : "Raghu",
  //     "Time" : "12:25 PM",
  //     "CommitMessage" : "Commit 3"
  //   }]
}
