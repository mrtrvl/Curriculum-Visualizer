let searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
  let searchString = this.value;
  console.log(searchString);

/*   cy.nodes().style({
    'background-color': '#11479e' // Default color, replace with your default color
  }); */

  if (searchString.length > 0) {
    let matchingNodes = cy.nodes().filter((node) => {
      return node.data('id').includes(searchString);
    });

    console.log(matchingNodes);

    matchingNodes.style({
      'background-color': 'pink'
    });
  }
});