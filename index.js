import { FIFO } from './lib/sklib';

const fifo = new FIFO([], 1024);

// This should break.
for (let i = 0; i < 1200; i++) {
  fifo.put(i);
  console.log(fifo.size());
}
