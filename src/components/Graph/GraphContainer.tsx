import React, { FC } from 'react';
import Graph from 'react-graph-vis';
import { exampleGraph, randomColor } from '../../util';

export interface GraphContainerProps {}

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
};

export const GraphContainer: FC<GraphContainerProps> = () => {
  const [state, setState] = React.useState({
    counter: 20,
    graph: exampleGraph(20),
    events: {
      select: ({ nodes, edges }) => {
        console.log('Selected nodes:');
        console.log(nodes);
        console.log('Selected edges:');
        console.log(edges);
        /* alert('Selected node: ' + nodes); */
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      },
    },
  });

  const createNode = (x: number, y: number) => {
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
