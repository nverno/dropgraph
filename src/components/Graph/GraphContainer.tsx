import React, { FC } from 'react';
import Graph from 'react-graph-vis';

export interface GraphContainerProps {}

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}`;
};

export const GraphContainer: FC<GraphContainerProps> = (props) => {
  const [state, setState] = React.useState({
    counter: 5,
    graph: {
      nodes: [
        { id: 1, label: 'Node 1', color: '#e04141' },
        { id: 2, label: 'Node 2', color: '#e09c41' },
        { id: 3, label: 'Node 3', color: '#e0df41' },
        { id: 4, label: 'Node 4', color: '#7be041' },
        { id: 5, label: 'Node 5', color: '#41e0c9' },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
      ],
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log('Selected nodes:');
        console.log(nodes);
        console.log('Selected edges:');
        console.log(edges);
        alert('Selected node: ' + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      },
    },
  });

  const createNode = (x, y) => {
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const color = randomColor();
      const id = counter + 1;
      const u = Math.floor(Math.random() * (counter - 1)) + 1;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x, y }],
          edges: [...edges, { from: u, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };

  const { graph, events } = state;

  return (
    <div>
      <h1>Graph</h1>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: '640px' }}
      />
    </div>
  );
};

export default GraphContainer;