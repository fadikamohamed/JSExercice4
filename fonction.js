function identity() {

  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var regex = /^[a-zA-Z àáâãäåçèéêëìíîïðòóôõöùúûüýÿ\-']+$/;

  if ((regex.test(lastname) == true) && (regex.test(lastname) == true) && (regex.test(lastname) == true)) {
    alert('Nom : ' + lastname + '\nPrénom : ' + firstname + '\nVille : ' + city);
  }else {
    alert('Mauvaise saisie !');
  }
}
