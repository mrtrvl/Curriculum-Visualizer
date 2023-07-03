const apiUrl = 'http://localhost:4000/api/v1';
let subjects = [];
let relations = [];
let cy;

function showData(node) {
  const data = node.data();
  const { id, volume, category, description, mandatory, parent, uuid } = data;
  console.log(data);
  if (volume) {
    document.getElementById('name').value = id;
    document.getElementById('volume').value = volume;
    document.getElementById('category').value = category;
    document.getElementById('description').value = description;
    document.getElementById('mandatory').checked = mandatory;
    document.getElementById('parent').value = parent;
    document.getElementById('uuid').innerText = uuid;
  }
}

async function fetchDataAndRenderGraph() {
  try {
    const response = await fetch(`${apiUrl}/curriculums?version=RIF23`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    subjects = data.subjects;
    relations = data.relations;
    cy = cytoscape({
      container: document.getElementById('cy'),
      elements: {
        nodes: subjects,
        edges: relations,
      },
      style: [
        {
          selector: 'node',
          style: {
            'label': 'data(id)',
          }
        },
        {
          selector: 'node[mandatory = "true"]',
          style: {
            'background-color': '#f00',
            'width': 'mapData(volume, 0, 10, 20, 60)',
            'height': 'mapData(volume, 0, 10, 20, 60)'
          }
        },
        {
          selector: 'node[mandatory = "false"]',
          style: {
            'background-color': '#666',
            'width': 'mapData(volume, 0, 10, 20, 60)',
            'height': 'mapData(volume, 0, 10, 20, 60)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
          }
        },
        {
          selector: 'edge[cooperation = "true"]',
          style: {
            'line-color': '#0f0',
            'target-arrow-color': '#0f0',
            'line-style': 'dashed'
          }
        },
        {
          selector: 'edge[cooperation != "true"]',
          style: {
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#0f0',
            'line-color': '#0f0',
            'target-arrow-color': '#0f0'
          }
        }
      ],

      layout: {
        name: 'preset',
      },
    });

    cy.on('tap', 'node', function (evt) {
      if (!addRelation) {
        const node = evt.target;
        cy.elements().removeClass('highlighted');
        node.predecessors().addClass('highlighted');
        node.parent().removeClass('highlighted');
        showData(node);
      } else {
        const node = evt.target;
        const subjectId = node.id();
        addNewRelation(subjectId);
      }
    });

/*     cy.on('mouseover', 'node', function (evt) {
      const node = evt.target;
      const volume = node.data('volume');
      const category = node.data('category');
      const position = node.position();
    }); */

    cy.on('tap', 'edge', function (evt) {
      const edge = evt.target;
      if (removeRelation) {
        const approve = confirm('Are you sure you want to remove this relation?');
        if (approve) {
          const edgeToRemove = cy.getElementById(edge.id());
          edgeToRemove.remove();
        }
        removeRelation = false;
      }
    });

    cy.on('dragfreeon', 'node', function (evt) {
      const node = evt.target;
      updatePosition(node.data('id'), node.position());
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAndRenderGraph();
