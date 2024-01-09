import {Action, Selector, State, StateContext} from "@ngxs/store";
import {SetUserName} from "./Actions";

interface UserStateModel{
  name: string;
  age: number;
}

@State<UserStateModel>({
  name: 'userState',
  defaults: {
    name: 'John',
    age: 20
  }
})
export class UserState {
  @Action(SetUserName)
  updateUserName(context: StateContext<UserStateModel>,action: SetUserName){
    const current = context.getState();
    context.patchState({
      ...current,
      name: action.name
    });
  }

  @Selector()
  static selectName(state: UserStateModel) {
    return state.name;
  }
}
