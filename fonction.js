//Déclaration de la fonction.
function identity() {
 //Déclaration des variables.
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  //Déclaration du gérex et intégation dans une variable.
  var regex = /^[a-zA-Z àáâãäåçèéêëìíîïðòóôõöùúûüýÿ\-']+$/;
  //Déclaration de la condition.
  if ((regex.test(lastname) == true) && (regex.test(lastname) == true) && (regex.test(lastname) == true)) {
    //Boite de dialogue avec appel des variables.
    alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
  }else {
    //Boite de dialogue avec message d'érrur.
    alert('Mauvaise saisie !');
  }
}
