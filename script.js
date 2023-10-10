 // send email from the form
 function sendMail() {
    var name=document.querySelector("#fname").value;

    var params = {
    fname: document.querySelector('#fname').value,
    email: document.querySelector("#mail").value,
    subject: document.querySelector('.text-box').value,
    message: document.querySelector("#message").value
    };


     //Validation form
     var name=document.querySelector("#fname").value;
     var mail=document.querySelector("#mail").value;
     const subjectSelect = document.querySelector('.text-box');
     var messbox = document.querySelector("#message").value;
     const supriseElement = document.querySelector('.suprise-hidden');
 
     let isValidForm = true; // move the variable initialization here
 
     if (!name || !mail){
         // validation checks for name and mail
         isValidForm = false;
         document.querySelector("#warnings").innerHTML = "//Fields are empty";
         document.querySelector("#fname").style.border = "2px solid red";
         document.querySelector("#mail").style.border = "2px solid red";
         return;
     } 
     else if (!messbox){
         // validation check for message box
         isValidForm = false;
         document.querySelector("#warning3").innerHTML= "//You need to enter a message <br>";
         document.querySelector("#message").style.border= "2px solid red";
         return;
     }
     // validation checks for name and mail format
     var regName=/^([a-zA-Z\-äöåÄÖÅ]{2,20})$/gm
     if(!regName.test(name))
     {
         isValidForm = false;
         document.querySelector("#warning1").innerHTML = "//not a valid name";
         return;
     }
 
     var regMail=/^([\w\-.]{3,50})@([\w][^-_?!.="]{3,30}).([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/gm
      if (!regMail.test(mail))
     {
         isValidForm = false;
         document.querySelector("#warnings2").innerHTML = "//not a valid email";
         return;
     }
 
     else if (subjectSelect.value === '') {
        // validation check for subject selection
        isValidForm = false;
        document.querySelector("#warning5").innerHTML = "//You need to select a subject";
        return;    
     }
 
     if (isValidForm) {
          supriseElement.style.display = 'block';
     
   

   

    emailjs.send( "service_p22liss", "template_o0bded8", params).then(function (res){
    //alert("Thanks, " + name + " for yor email!"   + " I will answear as soon as I can. :)");
    });
   };

 };