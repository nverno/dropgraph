export const colorPallete = [
  '#817',
  '#a35',
  '#c66',
  '#e94',
  '#ed0',
  '#9d5',
  '#4d8',
  '#2cb',
  '#0bc',
  '#09c',
  '#36b',
  '#639',
];

export const randomColor = () => {
  return colorPallete[Math.floor(Math.random() * colorPallete.length)];
};

export const randomColor256 = () => {
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
