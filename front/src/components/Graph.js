/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import cytoscape from 'cytoscape';
import graphService from '../services/graphService';
import './Graph.css';

const Graph = ({ subjects, relations }) => {
  let cy;

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

    cy.on('tap', 'node', function (evt) {
      const node = evt.target;
      cy.elements().removeClass('highlighted');
      cy.elements().removeClass('highlighted-node');
      node.predecessors().addClass('highlighted');
      if (!node.isParent()) {
        node.addClass('highlighted-node');
      }
    });

    cy.on('tap', 'edge', function (evt) {
      const edge = evt.target;
      const approve = window.confirm('Are you sure you want to remove this relation?');
      if (approve) {
        edge.remove();
      }
    });

    cy.on('drag', 'node', function (evt) {
      const node = evt.target;

      if (node.isParent()) {
        const children = node.children();
        children.forEach(child => {
          const childPosition = child.position();
          const childData = child.data();
          const { uuid } = childData;
          graphService.updatePosition(uuid, childPosition);
        });
      } else {
        const nodePosition = node.position();
        const nodeUuid = node.data('uuid');
        graphService.updatePosition(nodeUuid, nodePosition);
      }
    });

    window.addEventListener('resize', resizeGraph);

    return () => {
      cy.destroy();
      window.removeEventListener('resize', resizeGraph);
    };
  }, [subjects, relations]);

  function resizeGraph() {
    document.getElementById('cy-container').style.height = `${window.innerHeight - 130}px`;
    cy.resize();
  }

  return <div id="cy-container" style={{ width: '100%', height: '800px' }}><div id="cy"></div></div>;
};

export default Graph;
