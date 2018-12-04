import firebaseAuth from "../utils/firebaseUtils";

export default class FirebaseService {
  static createUser = (email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  };

  static login = (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  };

  static currentUser = () => {
    return firebaseAuth.currentUser;
  };

  static logout = () => {
    return firebaseAuth.signOut();
  };

  static onAuthChange = (callbackLogin, callbackLogout) => {
    firebaseAuth.onAuthStateChanged(authUser => {
      if (!authUser) {
        callbackLogout(authUser);
      } else {
        callbackLogin(authUser);
      }
    });
  };
}
