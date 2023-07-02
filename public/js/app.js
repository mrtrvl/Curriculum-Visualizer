const apiUrl = 'http://localhost:4000/api/v1';
let subjects = [];
let relations = [];
let cy;

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
          selector: 'node[mandatory = "true"]',
          style: {
            'background-color': '#f00',
            'label': 'data(id)',
            'width': 'mapData(volume, 0, 10, 20, 60)',
            'height': 'mapData(volume, 0, 10, 20, 60)'
          }
        },
        {
          selector: 'node[mandatory = "false"]',
          style: {
            'background-color': '#666',
            'label': 'data(id)',
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
        }
      ],
    
      layout: {
        name: 'dagre',
        rankDir: 'TD',
        nodeSep: 300
      },
    });
    
    cy.on('tap', 'node', function(evt){
      const node = evt.target;
    
      cy.elements().style({'background-color': '#666', 'line-color': '#ccc', 'target-arrow-color': '#ccc'});
    
      node.style('background-color', '#f00');
      node.predecessors().style({'background-color': '#0f0', 'line-color': '#0f0', 'target-arrow-color': '#0f0'});
    
      const description = node.data('description');
      const learningOutcomes = node.data('learningOutcomes');
      alert('Description: ' + description + '\nLearning outcomes: ' + learningOutcomes.join(', '));
    });
    
    cy.on('mouseover', 'node', function(evt){
      const node = evt.target;
    
      const volume = node.data('volume');
      const category = node.data('category');
      console.log(volume, category);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAndRenderGraph();

/* window.onload = function() {
  const categories = subjects.map(subject => subject.data.category);
  const uniqueCategories = [...new Set(categories)];
  const categoriesSelect = document.getElementById('categories');
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.text = category;
    categoriesSelect.appendChild(option);
  });
}; */

