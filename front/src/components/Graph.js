/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import cytoscape from 'cytoscape';
import graphService from '../services/graphService';
import './Graph.css';

const Graph = ({ subjects, relations, onSubjectSelect }) => {
  let cy;
  const [addRelationMode, setAddRelationMode] = useState(false);
  const [removeRelationMode, setRemoveRelationMode] = useState(false);
  let relation = [];

  useEffect(() => {
    const cyContainer = document.getElementById('cy');

    cy = cytoscape({
      container: cyContainer,
      elements: {
        nodes: subjects.map(subject => ({
          data: subject.data,
          position: subject.position || { x: 100, y: 100 },
        })),
        edges: relations.map(relation => ({
          data: relation.data
        })),
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
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'arrow-scale': 2,
            'curve-style': 'bezier',
          }
        },
        {
          selector: 'edge[recommended = "true"]',
          style: {
            'line-color': '#0f0',
            'target-arrow-color': '#0f0',
            'line-style': 'dashed',
          }
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#0f0',
            'line-color': '#0f0',
            'target-arrow-color': '#0f0',
          }
        },
        {
          selector: '.highlighted-node',
          style: {
            'background-color': 'darkgreen',
            'line-color': '#0f0',
          }
        },
      ],
      layout: {
        name: 'preset',
      },
    });

    // Event: When a node is clicked
    cy.on('tap', 'node', function (evt) {
      const node = evt.target;
      onSubjectSelect(node.data());
      cy.elements().removeClass('highlighted');
      cy.elements().removeClass('highlighted-node');
      node.predecessors().addClass('highlighted');
      if (!node.isParent()) {
        node.addClass('highlighted-node');
      }
      if (addRelationMode) {
        addNewRelation(node.data('id'));
      }
    });

    // Event: When an edge is clicked
    cy.on('tap', 'edge', function (evt) {
      const edge = evt.target;
      if (removeRelationMode) {
        const approve = window.confirm('Are you sure you want to remove this relation?');
        if (approve) {
          graphService.deleteRelation(edge.data('id')).then(() => {
            edge.remove();
            setRemoveRelationMode(false);
          });
        }
      }
    });

    cy.on('free', 'node', function (evt) {
      const node = evt.target;
      if (node.isParent()) {
        const children = node.children();
        children.forEach(child => {
          const childPosition = child.position();
          const childData = child.data();
          graphService.updatePosition(childData.uuid, childPosition);
        });
      } else {
        const nodePosition = node.position();
        const nodeUuid = node.data('uuid');
        graphService.updatePosition(nodeUuid, nodePosition);
      }
    });

    cy.elements('node:parent').forEach(function (ele) {
      let volumeSumMandatory = 0;
      let volumeSumOptional = 0;
      let children = ele.children();
      children.each(function (child) {
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

    window.addEventListener('resize', resizeGraph);

    return () => {
      cy.destroy();
      window.removeEventListener('resize', resizeGraph);
    };
  }, [subjects, relations]);

  const addNewRelation = async (id) => {
    relation.push(id);
    if (relation.length === 2) {
      const recommended = document.getElementById('recommended').checked.toString();
      await graphService.addRelation(relation, recommended);
      relation = [];
      setAddRelationMode(false);
      cy.elements().removeClass('highlighted');
    }
  };

  function resizeGraph() {
    document.getElementById('cy-container').style.height = `${window.innerHeight - 130}px`;
    cy.resize();
  }

  return (
    <>
      <div id="cy-container" style={{ width: '100%', height: '800px' }}>
        <div id="cy"></div>
      </div>
      <div className="relation-buttons">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="recommended" />
          <label className="form-check-label" htmlFor="recommended">Recommended Relation</label>
        </div>
        <button className="btn btn-primary" onClick={() => setAddRelationMode(true)}>
          Add Relation
        </button>
        <button className="btn btn-danger" onClick={() => setRemoveRelationMode(true)}>
          Remove Relation
        </button>
      </div>
    </>
  );
};

export default Graph;
