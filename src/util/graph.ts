import { colorPallete, randomInt } from '.';

export const exampleGraph = (n: number, e = 2 * n) => ({
  nodes: Array.from({ length: n }, (_x, i) => i + 1).map((i) => ({
    id: i,
    label: `Node ${i}`,
    color: colorPallete[i % colorPallete.length],
  })),
  edges: Array.from({ length: e }).map(() => ({
    from: randomInt(1, n),
    to: randomInt(1, n),
  })),
});
