    var config = {
    apiKey: "AIzaSyCAounFTTC4skwmRrnO5kkxIVYKqoT0j14",
    authDomain: "wallpaper-fad42.firebaseapp.com",
    databaseURL: "https://wallpaper-fad42.firebaseio.com",
    projectId: "wallpaper-fad42",
    storageBucket: "wallpaper-fad42.appspot.com",
    messagingSenderId: "20810722042"
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

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }