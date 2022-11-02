$(document).ready(function(){

    $("#form").submit(function(e){
        e.preventDefault();

        var contador = 0;
        const resultado1 = {
            selecionado: $("input:checked")[0],
            certo: $("[data-resultado='true']")[0],
        }
        const resultado2 = {
            selecionado: $("input:checked")[1],
            certo: $("[data-resultado='true']")[1],
        }
        const resultado3 = {
            selecionado: $("input:checked")[2],
            certo: $("[data-resultado='true']")[2],
        }
        const resultado4 = {
            selecionado: $("input:checked")[3],
            certo: $("[data-resultado='true']")[3],
        }
        const resultado5 = {
            selecionado: $("input:checked")[4],
            certo: $("[data-resultado='true']")[4],
        }
        const resultado6 = {
            selecionado: $("input:checked")[5],
            certo: $("[data-resultado='true']")[5],
        }
        const resultado7 = {
            selecionado: $("input:checked")[6],
            certo: $("[data-resultado='true']")[6],
        }
        const resultado8 = {
            selecionado: $("input:checked")[7],
            certo: $("[data-resultado='true']")[7],
        }
        const resultado9 = {
            selecionado: $("input:checked")[8],
            certo: $("[data-resultado='true']")[8],
        }
        const resultado10 = {
            selecionado: $("input:checked")[9],
            certo: $("[data-resultado='true']")[9],
        }

       
//SE ESTIVER CERTA
        if(resultado1.selecionado == resultado1.certo){
           //alert("Você acertou a questão!")
           contador++;
           console.log(contador);
           $("#quest1").addClass("certa");
          // $("#quest1").css("background-color", "green");
        }
        if(resultado2.selecionado == resultado2.certo){
            contador++;
            $("#quest2").addClass("certa");
            console.log(contador);
        }
        if(resultado3.selecionado == resultado3.certo){
            contador++;
            $("#quest3").addClass("certa");
            console.log(contador);
        }
        if(resultado4.selecionado == resultado4.certo){
            contador++;
            $("#quest4").addClass("certa");
            console.log(contador);
        }
        if(resultado5.selecionado == resultado5.certo){
            contador++;
            $("#quest5").addClass("certa");
            console.log(contador);
        }
        if(resultado6.selecionado == resultado6.certo){
            contador++;
            $("#quest6").addClass("certa");
            console.log(contador);
        }
        if(resultado7.selecionado == resultado7.certo){
            contador++;
            $("#quest7").addClass("certa");
            console.log(contador);
        }
        if(resultado8.selecionado == resultado8.certo){
            contador++;
            $("#quest8").addClass("certa");
            console.log(contador);
        }
        if(resultado9.selecionado == resultado9.certo){
            contador++;
            $("#quest9").addClass("certa");
            console.log(contador);
        }
        if(resultado10.selecionado == resultado10.certo){
            contador++;
            $("#quest10").addClass("certa");
            console.log(contador);
        }

        
//SE ESTIVER ERRADA

if(resultado1.selecionado !== resultado1.certo){
    //alert("Você acertou a questão!")

    
    $("#quest1").addClass("errada");
   // $("#quest1").css("background-color", "green");
 }
 if(resultado2.selecionado !== resultado2.certo){
     
     $("#quest2").addClass("errada");
     
 }
 if(resultado3.selecionado !== resultado3.certo){
     
     $("#quest3").addClass("errada");
     
 }
 if(resultado4.selecionado !== resultado4.certo){
     
     $("#quest4").addClass("errada");
     
 }
 if(resultado5.selecionado !== resultado5.certo){
     
     $("#quest5").addClass("errada");
     
 }
 if(resultado6.selecionado !== resultado6.certo){
     
     $("#quest6").addClass("errada");
     
 }
 if(resultado7.selecionado !== resultado7.certo){
     
     $("#quest7").addClass("errada");
     
 }
 if(resultado8.selecionado !== resultado8.certo){
     
     $("#quest8").addClass("errada");
     
 }
 if(resultado9.selecionado !== resultado9.certo){
     
     $("#quest9").addClass("errada");
     
 }
 if(resultado10.selecionado !== resultado10.certo){
     
     $("#quest10").addClass("errada");
     
 }

        alert("Você acertou: "+ contador + " questões");
       /* else if (resultado.selecionado != resultado.certo) {
            //alert("Você errou a questão!");
            console.log(contador);
        } 
        */
    })
    
   
    

});

//let opcao = $('#itens :selected').val();
