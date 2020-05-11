import auth from "../../../components/firebase/firebase-config";


export const setCurrentRegister = event => {
  return {
    type: "SET_CURRENT_REGISTER",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const setCurrentLogin = event => {
  return {
    type: "SET_CURRENT_LOGIN",
    payload: {
      name: event.target.name,
      value: event.target.value
    }
  };
};

export const register = () => {
  return (dispatch, getState) => {
    let { email, password } = getState().user.currentRegister;
    auth.createUserWithEmailAndPassword(email, password)
    .then(response => {
      auth.onAuthStateChanged(function(user) {
        console.log(user);
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };
};

export const login = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      let { email, password } = getState().user.currentLogin;
      auth.signInWithEmailAndPassword(email, password)
        .then(response => {
          auth.onAuthStateChanged(function(user) {
            resolve(response);
            // user.sendEmailVerification();
          });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      auth
        .signOut()
        .then(function() {
          resolve();
        })
        .catch(function(error) {
          reject();
        });
    });
  };
};

