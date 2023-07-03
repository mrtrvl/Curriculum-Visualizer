let dialog = document.getElementById('myDialog');
let closeButton = document.getElementById('closeButton');
let dialogContent = document.getElementById('dialogContent');

closeButton.addEventListener('click', function() {
  dialog.close();
});

function showData(node) {
  const data = node.data();
  const { id, volume, category, description, parent, uuid } = data;
  let { mandatory } = data;
  console.log(data);
  mandatory = mandatory === 'true' ? true : false;
  if (volume) {
    document.getElementById('name').value = id;
    document.getElementById('volume').value = volume;
    document.getElementById('category').value = category;
    document.getElementById('description').value = description;
    document.getElementById('mandatory').checked = mandatory;
    document.getElementById('parent').value = parent;
    document.getElementById('uuid').innerText = uuid;
  }
  let dataString = 'ID: ' + data.id +
                   '\nEAP: ' + data.volume +
                   '\nKohustuslik: ' + data.mandatory +
                   '\nSemester: ' + data.parent +
                   '\nKategooria: ' + data.category +
                   '\nKirjeldus: ' + data.description;

  dialogContent.textContent = dataString;
  // dialog.showModal();
}