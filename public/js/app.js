const apiUrl = 'http://localhost:4000/api/v1';
let subjects = [];
let relations = [];
let cy;
let curriculumVersionUuid = localStorage.getItem('curriculumVersionUuid');

const curriculumHeading = document.getElementById('curriculum-version');
if(curriculumHeading) {
  const versionName = localStorage.getItem('curriculumVersion');
  curriculumHeading.innerText = `Õppekava versioon: ${versionName}`;
}

async function fetchCurriculumVersion() {
  const response = await axios.get(`${apiUrl}/curriculums/versions`);
  createCurriculumSelect(response.data);
}

if (document.getElementById('curriculum-select')) {
  fetchCurriculumVersion();
}

async function fetchDataAndRenderGraph(versionId) {
  try {
    const response = await axios.get(`${apiUrl}/curriculums?version=${versionId}`);
    if (!response.data) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    subjects = response.data.subjects;
    relations = response.data.relations;
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
            'font-size': '20px',
            'border-width': '2px',
            'border-color': '#000',
          }
        },
        {
          selector: 'node[volume]',
          style: {
            'width': 'mapData(volume, 0, 10, 20, 120)',
            'height': 'mapData(volume, 0, 10, 20, 120)',
          }
        },
        {
          selector: 'node[mandatory = "true"]',
          style: {
            'background-color': '#f00',
          }
        },
        {
          selector: 'node[mandatory = "false"]',
          style: {
            'background-color': '#666',
          }
        },
        {
          selector: 'node[category = "Praktika"]',
          style: {
            'background-color': 'orange',
          }
        },
        {
          selector: 'node[category = "Üleülikoolilised ained"]',
          style: {
            'background-color': 'lightblue',
          }
        },
        {
          selector: 'node[category = "Erialane inglise keel"]',
          style: {
            'background-color': 'darkblue',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'arrow-scale': '2',
            'curve-style': 'bezier',
          }
        },
        {
          selector: 'edge[recommended = "true"]',
          style: {
            'line-color': '#0f0',
            'target-arrow-color': '#0f0',
            'line-style': 'dashed'
          }
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#0f0',
            'line-color': '#0f0',
            'target-arrow-color': '#0f0'
          }
        },
        {
          selector: '.highlighted-node',
          style: {
            'background-color': 'darkgreen',
            'line-color': '#0f0',
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
        cy.elements().removeClass('highlighted-node');
        node.predecessors().addClass('highlighted');
        node.parent().removeClass('highlighted');
        if (!node.isParent()) {
          node.addClass('highlighted-node');
        }
        showSubject(node);
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
          deleteRelation(edge.id())
          const edgeToRemove = cy.getElementById(edge.id());
          edgeToRemove.remove();
        }
        removeRelation = false;
      }
    });

    cy.on('dragfreeon', 'node', function (evt) {
      const node = evt.target;
      if (node.isParent()) {
        const children = node.children();
        children.forEach(child => {
          const childPosition = child.position();
          const childData = child.data();
          const { uuid } = childData;
          updatePosition(uuid, childPosition);
        });
      } else {
        updatePosition(node.data('uuid'), node.position());
      }
    });

    cy.elements('node:parent').forEach(function(ele){
      let volumeSumMandatory = 0;
      let volumeSumOptional = 0;
      let children = ele.children();
      children.each(function(child){
        if (child.data('mandatory') === 'true') {
          volumeSumMandatory += child.data('volume');
        } else {
          volumeSumOptional += child.data('volume');
        }
      });
      ele.data('volumeSumMandatory', volumeSumMandatory);
      ele.data('volumeSumOptional', volumeSumOptional);
      ele.style('label', `${ele.data('id')} (${volumeSumMandatory}/${volumeSumOptional})`);
  });

  } catch (error) {
    console.error('Error:', error);
  }
}
