import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

// const config = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };

class Firebase {
  constructor(config) {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.storage = firebase.storage();
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(resp => {
        this.doSendEmailVerification();
        return resp;
      })
      .catch(err => {
        throw err;
      });
  };

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        return resp;
      })
      .catch(err => {
        throw err;
      });
  };

  doSignInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(resp => {
        return resp;
      })
      .catch(err => {
        throw err;
      });
  };

  doSigninWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(resp => {
        return resp;
      })
      .catch(err => {
        throw err;
      });
  };

  doSignOut = () => {
    return this.auth
      .signOut()
      .then(resp => {
        return resp;
      })
      .catch(err => {
        throw err;
      });
  };

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  doSendEmailVerification = () => this.auth.currentUser.sendEmailVerification();

  getFileRef = url => this.storage.ref(url);
}

export default Firebase;
