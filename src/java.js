
let form = document.querySelector('form[name="MonFormulaire"]');
form.email.addEventListener('change',function(){
    validEmail(this);
});

const validEmail = function(inputEmail){
    let emailRegExp = new RegExp(
        '^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$',
        'g'
    );
    let testemail = emailRegExp.test(inputemail.value);
    let small=inputEmail.nextElementSibling;

    if (testemail){
        small.innerHTML = "Adresse Valide";
        return true;

    } 
    else{
        small.innerHTML = "Adresse non Valide";
        return false;
    }

};

form.name.addEventListener('input',function(){
    validNom(this);
});

const validNom = function(inputNom){
    let nomRegExp = /^[A-Z]+$/; 
    let testNom = nomRegExp.test(inputNom.value);
    let small=inputNom.nextElementSibling;

    if (testNom){
        small.innerHTML = "champ correct";
        return true;

    } 
    else{
        small.innerHTML = "saisir le nom en majuscule";
        return false;
    }

};

form.prenom.addEventListener('input',function(){
    validPrénom(this);
});


const validPrénom = function(inputPrénom){
    let prenomRegExp = /^[A-Z]{1}[a-zA-Z]+$/; 
    let testPrénom= prenomRegExp.test(inputPrénom.value);
    let small=inputPrénom.nextElementSibling;

    if (testPrénom){
        small.innerHTML = "champ correct";
        return true;

    } 
    else{
        small.innerHTML = "la première lettre doit etre en majuscule";
        return false ;
    }

};


form.adresse.addEventListener('input', function () {
    validAdresse(this);
});

const validAdresse = function (inputAdresse) {
    let adresseValue = inputAdresse.value;
    let small = inputAdresse.nextElementSibling;

    if (adresseValue.length > 100 || /[^a-zA-Z0-9\s]/.test(adresseValue)) {
        small.innerHTML = "L'adresse ne doit pas contenir de caractères spéciaux et ne doit pas dépasser 100 caractères.";
        return false;
    } else {
        small.innerHTML = "Champ correct";
        return true;
    }
};
form.ObjectifProfessionnel.addEventListener('input', function () {
    validObjectifProfessionnel(this);
});

const validObjectifProfessionnel = function (inputObjectifProfessionnel) {
    let ObjectifProfessionnelValue = inputObjectifProfessionnel.value;
    let small = inputObjectifProfessionnel.nextElementSibling;

    if ( /[^a-zA-Z0-9\s]/.test(ObjectifProfessionnelValue)) {
        small.innerHTML = "L'objectif professionnel ne doit pas contenir de caractères spéciaux .";
        return false;
    } else {
        small.innerHTML = "Champ correct";
        return true;
    }
};
form.Telephone.addEventListener('input', function () {
    validTelephone(this);

});
const validTelephone = function (inputTelephone) {
    let telephoneValue = inputTelephone.value;
    let small = inputTelephone.nextElementSibling;

    if (!/^\d*$/.test(telephoneValue)) {
        small.innerHTML = "Le numéro de téléphone ne doit contenir que des chiffres.";
        return false;
    } else {
        small.innerHTML = "Champ correct";
        return true;
    }
};


form.Age.addEventListener('input', function () {
    validAge(this);
});

const validAge = function (inputAge) {
    let AgeValue = parseInt(inputAge.value);
    let small = inputAge.nextElementSibling;

    if (AgeValue <= 18) {
        small.innerHTML = "L'âge doit être supérieur à 18 ans.";
        return false;
    } else {
        small.innerHTML = "Champ correct";
        return true;
    }
};




form.addEventListener('submit', function (event) {
    
    const isEmailValid = validEmail(form.email);
    const isNomValid = validNom(form.nom);
    const isPrenomValid = validPrénom(form.prenom);
    const isAdresseValid = validAdresse(form.adresse);
    const isAgeValid = validAge(form.Age);
    const isObjectifProfessionnelValid = validObjectifProfessionnel(form.ObjectifProfessionnel);
    const isTelephoneValid = validTelephone(form.Telephone);
    


    if (!isEmailValid || !isNomValid || !isPrenomValid || !isAdresseValid || !isAgeValid || !isObjectifProfessionnelValid || !isTelephoneValid ) {
        event.preventDefault();
    }
});