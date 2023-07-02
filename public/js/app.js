const cy = cytoscape({
  container: document.getElementById('cy'),
  elements: {
    nodes: [
      {
        data: {
          id: 'Programmeerimise alused',
          volume: 6,
          mandatory: 'true',
          semester: 1,
        }
      },
      {
        data: {
          id: 'Multimeedium',
          volume: 4,
          mandatory: 'true',
          semester: 1,
        }
      },
      {
        data: {
          id: 'Andmebaasid',
          volume: 3,
          mandatory: 'true',
          semester: 2,
        }
      },
      {
        data: {
          id: 'Veebirakendused ja nende loomine',
          volume: 3,
          mandatory: 'true',
          semester: 2,
        }
      },
      {
        data: {
          id: 'Sissejuhatus tarkvaraarendusse',
          volume: 4,
          mandatory: 'true',
          semester: 2,
        }
      },
      {
        data: {
          id: 'Veebiraamistikud',
          volume: 4,
          mandatory: 'true',
          semester: 3,
        }
      },
      {
        data: {
          id: 'Veebiprogrammeerimine',
          volume: 5,
          mandatory: 'true',
          semester: 1,
        }
      },
      {
        data: {
          id: 'Andmebaasid II',
          volume: 3,
          mandatory: 'false',
          semester: 3,
        }
      },
      {
        data: {
          id: 'Programmeerimine I',
          volume: 5,
          mandatory: 'false',
          semester: 2,
        }
      },
      {
        data: {
          id: 'Programmeerimine II',
          volume: 5,
          mandatory: 'false',
          semester: 3,
        }
      },
      {
        data: {
          id: 'Programmeerimine III',
          volume: 5,
          mandatory: 'false',
          semester: 4,
        }
      },
    ],
    edges: [
      {
        data: {
          id: 1,
          source: 'Programmeerimise alused',
          target: 'Andmebaasid'
        }
      },
      {
        data: {
          id: 2,
          source: 'Programmeerimise alused',
          target: 'Programmeerimine I'
        }
      },
      {
        data: {
          id: 3,
          source: 'Programmeerimise alused',
          target: 'Veebirakendused ja nende loomine'
        }
      },
      {
        data: {
          id: 4,
          source: 'Andmebaasid',
          target: 'Andmebaasid II'
        }
      },
      {
        data: {
          id: 5,
          source: 'Veebiprogrammeerimine',
          target: 'Veebiraamistikud'
        }
      },
      {
        data: {
          id: 6,
          source: 'Programmeerimine I',
          target: 'Programmeerimine II'
        }
      },
      {
        data: {
          id: 7,
          source: 'Veebirakendused ja nende loomine',
          target: 'Veebiraamistikud'
        }
      },
      {
        data: {
          id: 8,
          source: 'Programmeerimise alused',
          target: 'Veebiraamistikud'
        }
      },
      {
        data: {
          id: 9,
          source: 'Andmebaasid',
          target: 'Programmeerimine II'
        }
      },
      {
        data: {
          id: 10,
          source: 'Programmeerimine I',
          target: 'Programmeerimine III'
        }
      },
      {
        data: {
          id: 11,
          source: 'Programmeerimine II',
          target: 'Andmebaasid II',
          cooperation: 'true',
        }
      },
      {
        data: {
          id: 12,
          source: 'Programmeerimine II',
          target: 'Veebiraamistikud',
          cooperation: 'true',
        }
      },
    ],
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
