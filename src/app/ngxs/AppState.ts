import {Action, Selector, State, StateContext} from "@ngxs/store";
import {SetUserName} from "./Actions";
import {Service} from "./Service";
import {Injectable} from "@angular/core";

interface UserStateModel{
  name: string;
  response: any;
}


// Initial State
@State<UserStateModel>({
  name: 'userState',
  defaults: {
    name: 'John',
    response: {}
    }
})
@Injectable({
  providedIn: 'root'
})
export class UserState {

  constructor(private service: Service) {
  }

  // Ngrx Reducer equivalent
  @Action(SetUserName)
  updateUserName(context: StateContext<UserStateModel>,action: SetUserName){
    const current = context.getState();
    // context.setState({}) // To set the entire state
    context.patchState({
      ...current,
      name: action.name
    });
  }

  // Ngrx Effects equivalent
  @Action(SetUserName)
  getDomainForUserName(context: StateContext<UserStateModel>){
    this.service.getDomain().subscribe((response: any) => {
      context.patchState(
        {
          ...context.getState(),
          response
        }
      )
    })
  }

  // Selectors
  // Q: How to achieve nesting of selectors/ reusing selectors?
  @Selector()
  static selectName(state: UserStateModel) {
    return state.name;
  }

  @Selector()
  static selectResponse(state: UserStateModel) {
    return state.response;
  }
}
