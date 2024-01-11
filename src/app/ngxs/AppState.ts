import {Action, Selector, State, StateContext} from "@ngxs/store";
import {SetUserName} from "./Actions";
import {Service} from "./Service";
import {Injectable} from "@angular/core";

interface UserStateModel{
  name: string;
  response: any;
}

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
  @Action(SetUserName)
  updateUserName(context: StateContext<UserStateModel>,action: SetUserName){
    const current = context.getState();
    context.patchState({
      ...current,
      name: action.name
    });
  }

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

  @Selector()
  static selectName(state: UserStateModel) {
    return state.name;
  }

  @Selector()
  static selectResponse(state: UserStateModel) {
    return state.response;
  }
}
