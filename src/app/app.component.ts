import {Component, OnInit} from '@angular/core';
import {Action, Select, Store} from "@ngxs/store";
import {SetUserName} from "./ngxs/Actions";
import {Observable} from "rxjs";
import {UserState} from "./ngxs/AppState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngxs-example';
  sampleName: string = '';
  @Select(UserState.selectName) name$!: Observable<string>;
  @Select((state: { userState: { name: any; }}) => state.userState.name) name2$: any

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
   this.store.select(state => state.userState).subscribe(res => {
     console.log(res);
   });
  }

  @Action(SetUserName)
  updateName(){
    this.store.dispatch(new SetUserName(this.sampleName));
  }
}
