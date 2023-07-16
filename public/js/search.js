let searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
  let searchString = this.value;
  console.log(searchString);

  if (searchString.length > 0) {
    searchAndHighlight(searchString);
  }
});