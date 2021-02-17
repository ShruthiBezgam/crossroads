import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crossroads';

  rows = [
    {
      "CommitID" : "1",
      "Author" : "Rahul",
      "Time" : "3:00 AM",
      "CommitMessage" : "Commit 1"
    },
    {
      "CommitID" : "2",
      "Author" : "Ritu",
      "Time" : "2:45 PM",
      "CommitMessage" : "Commit 2"
    },
    {
      "CommitID" : "3",
      "Author" : "Raghu",
      "Time" : "12:25 PM",
      "CommitMessage" : "Commit 3"
    }]
}
