import firebase from "../../api/firebase";

const INITIAL_STATE = {
  user: null
};

export default function authReduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.user
      };
    case "LOGOUT":
      firebase.logout();
      return null;
    default:
      return state;
  }
}
