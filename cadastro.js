$(document).ready(function(){

    $("#cadastro1").submit(function(e){
        e.preventDefault();
        

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
    
    let newUserEmail = $("#email").val();
    let newUserPassword = $("#senha").val();
    
    let auth = firebase.auth()
    
    auth.createUserWithEmailAndPassword(newUserEmail,newUserPassword).then(user=>{
        console.log(user);
        alert("Cadastro realizado com sucesso");
        location.href = "#";
        //location.assign("https:///CursoPROGRAMADORBR/easy/areacadastro.js");
    }).catch(error=>{
        console.log(error);
        alert("Erro ao realizar cadastro");
    })

        
    })
    });  
