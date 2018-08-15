// Initialize Firebase
  let config = {
    apiKey: "AIzaSyB-RzhYGNQ-4BEhljU6IrW-2j93O5mpZYs",
    authDomain: "cas-rps.firebaseapp.com",
    databaseURL: "https://cas-rps.firebaseio.com",
    projectId: "cas-rps",
    storageBucket: "",
    messagingSenderId: "265721348997"
  };

  firebase.initializeApp(config);

  function configureFirebaseLoginWidget() {
    var uiConfig = {
      'signInSuccessUrl': '/',
      'signInOptions': [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url
      'tosUrl': '<your-tos-url>',
    };
  
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
