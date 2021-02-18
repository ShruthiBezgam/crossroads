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
  dataArray = [];
  errorResp: any;

  constructor(
    public service: BackendService) { }

  ngOnInit(): void {
    this.gitHistoryServiceCall();
  }

  gitHistoryServiceCall() {
    this.service.gitCommitHistoryService().subscribe(Resp => {
      this.httpResponse = Resp;
      
      console.log(" git response : ", Resp)
      var data = {}
      this.resultArray = this.httpResponse;
      console.log("resultArray[0]", this.resultArray[0].sha)
      for (var i = 0; i < this.resultArray.length; i++) {
        data = {
          "CommitID": this.resultArray[i].sha,
          "Author": this.resultArray[i].commit.author.name,
          "Time": this.resultArray[i].commit.author.date,
          "CommitMessage": this.resultArray[i].commit.message
        }
        this.dataArray.push(data);
      }

    })
  } 
}
