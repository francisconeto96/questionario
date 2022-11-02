$(document).ready(function(){

    $("#entrar1").submit(function(e){
        e.preventDefault();

        console.log("funcionando");
        

        const firebaseConfig = {
            apiKey: "AIzaSyBJgX1Rgm9LqVVAOoyjsniCA-G--JRozqg",
            authDomain: "cadastro-e151e.firebaseapp.com",
            projectId: "cadastro-e151e",
            storageBucket: "cadastro-e151e.appspot.com",
            messagingSenderId: "480379320401",
            appId: "1:480379320401:web:63372de1a43314ad21a070",
            measurementId: "G-2S62HYV0NS"
          };

        
          firebase.initializeApp(firebaseConfig)
    const db = firebase.firestore()
    let auth = firebase.auth()
    
    function login() {
        let userEmail = $("#email").val();
        let userPassword = $("#senha").val();

        auth.signInWithEmailAndPassword(userEmail,userPassword)
            .then(loggedser => {
            console.log(auth.currentUser);

            alert("Login realizado com sucesso!");
            location.href = "https://francisconeto96.github.io/questionario/perguntas.html";

        }).catch(error => {
            console.log(error)

            alert("Erro ao efetuar o login!");
        })
    }
    login();
    

        
    })
    
    });  
