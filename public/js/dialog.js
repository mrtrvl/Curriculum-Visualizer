let dialog = document.getElementById('myDialog');
let closeButton = document.getElementById('closeButton');
let dialogContent = document.getElementById('dialogContent');

closeButton.addEventListener('click', function() {
  dialog.close();
});
