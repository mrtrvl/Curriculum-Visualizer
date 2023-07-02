const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: {
    nodes: subjects,
    edges: relations,
  },
  style: [ // the stylesheet for the graph
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
});
