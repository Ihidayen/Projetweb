function togglemotdepasse() {
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

function connecter() {
    const e_mail = document.getElementById("email").value;
    const password = document.getElementById("motdepasse").value;
    const erreur = document.getElementById("erreur");

    if (!e_mail || !password) {
        alert("Veuillez remplir tous les champs");
        return;
    }

    const emailSauvegarde = localStorage.getItem("email");
    const passwordSauvegarde = localStorage.getItem("motdepasse");

    if (e_mail === emailSauvegarde && password === passwordSauvegarde) {
        erreur.style.display = "none";
        window.location.href = "accueil.html";
    } else {
        erreur.style.display = "block";
    }
}
