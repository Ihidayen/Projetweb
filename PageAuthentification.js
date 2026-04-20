
/*
function toggle(){
    let body = document.body; // élément HTML
    let inscription = document.getElementsByClassName("inscription");

    if( body.style.backgroundColor === "black"){
        body.style.backgroundColor = "lightgray";
        inscription[0].style.backgroundColor = "#5a5a94";
    }
    else{
        body.style.backgroundColor = "black";
        inscription[0].style.backgroundColor = "lightgray";
    }
}
*/


function togglemotdepasse() {
let password=document.getElementById("motdepasse");
let togglepassword=document.getElementById("togglepassword");
if(password.type === "password"){
    password.type = "text";
    togglepassword.textContent = "🙈";
}
else{
    password.type = "password";
    togglepassword.textContent = "👀";}

}
function inscrire(){
const firstname=document.getElementById("firstname").value;
const lastname=document.getElementById("lastname").value;
const pays=document.getElementById("pays").value;
const e_mail=document.getElementById("email").value;
const password=document.getElementById("motdepasse").value;
const text=document.getElementById("erreur");
if(!firstname||!lastname||!e_mail||!password){
    alert("veuillez remplir tous les champs");

}
else{
    localStorage.setItem("firstname",firstname);
localStorage.setItem("lastname",lastname);
localStorage.setItem("pays",pays);
localStorage.setItem("email",e_mail);
localStorage.setItem("motdepasse",password);


window.location.href=("accueil.html");
}
 
}
/*
function connecter(){
const fisrtname=document.getElementById('');
const lastname=document.getElementById('');
const pays=document.getElementById('');
const email=document.getElementById('');
const password=document.getElementById('');
const text=document.getElementById('erreur');
                                  apres ca on recupere les donnees qu'on a stocker dans le local storage
const firstnamesauvegarde=localStorage.getItem("firstname");
const lastnamesauvegarde=localStorage.getItem("lastname");
const payssauvegarde=localStorage.getItem("pays");
const emailsauvegarde=localStorage.getItem("email");
const passwordsauvegarde=localStorage.getItem("password");


if(emailsauvegarde==email && passwordsauvegarde==password){
window.location.href=('accueil.html');

}
else{
    text.style.display=block;
    text.style.color=red;
}
}


*/