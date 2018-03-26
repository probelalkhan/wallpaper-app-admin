  var config = {
    apiKey: "AIzaSyCFMWH7d0R0R4UALFbTWEt-BxHVuHUcScA",
    authDomain: "mywallpaperapp-4d06e.firebaseapp.com",
    databaseURL: "https://mywallpaperapp-4d06e.firebaseio.com",
    projectId: "mywallpaperapp-4d06e",
    storageBucket: "",
    messagingSenderId: "1093675965929"
  };
  firebase.initializeApp(config);

    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });