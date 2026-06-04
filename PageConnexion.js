import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBDJ0YCGOgDkaXa9IkbVb5Z8CRq5KYN0bk",
    authDomain: "ascendia-e0dcb.firebaseapp.com",
    projectId: "ascendia-e0dcb",
    storageBucket: "ascendia-e0dcb.firebasestorage.app",
    messagingSenderId: "780247264588",
    appId: "1:780247264588:web:79fac9b47e86a645ff73e9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.togglemotdepasse = function() {
    let password = document.getElementById("motdepasse");
    let togglepassword = document.getElementById("togglepassword");
    if (password.type === "password") {
        password.type = "text";
        togglepassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglepassword.textContent = "👀";
    }
}

window.connecter = function() {
    const e_mail = document.getElementById("email").value;
    const password = document.getElementById("motdepasse").value;
    const erreur = document.getElementById("erreur");

    if (!e_mail || !password) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    const emailSauvegarde = localStorage.getItem("email");
    const passwordSauvegarde = localStorage.getItem("motdepasse");
    const methode = localStorage.getItem("methode");

    if (methode === "google" && e_mail === emailSauvegarde) {
        alert("Ce compte utilise Google. Clique sur 'Continue with Google'.");
        return;
    }

    if (e_mail === emailSauvegarde && password === passwordSauvegarde) {
        erreur.style.display = "none";
        window.location.href = "index.html";
    } else {
        erreur.style.display = "block";
    }
}

window.connecterGoogle = function() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const nomComplet = user.displayName || "";
            const prenom = nomComplet.split(" ")[0];
            const nom = nomComplet.split(" ").slice(1).join(" ");
            localStorage.setItem("firstname", prenom);
            localStorage.setItem("lastname", nom);
            localStorage.setItem("email", user.email);
            localStorage.setItem("methode", "google");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert("Erreur Google : " + error.message);
        });
}
