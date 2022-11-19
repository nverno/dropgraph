// Reproducible randoms
// const SEED = 1647142082296;
// const useSeededRNG = true;
// const seedDate = new Date(SEED);
// const randomTimestampSeed = seedDate.toISOString();

// let rng = seedrandom();
// if (useSeededRNG) {
//   rng = seedrandom(randomTimestampSeed);
//   // setRandom(rng);
//   faker.seed(seedDate.getTime());
// }

export const randomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};
