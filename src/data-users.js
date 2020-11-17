import { writable } from 'svelte/store';

export let users = writable({
  ID111: {
    id: 111,
    name: 'Lulu',
  },
  ID222: {
    id: 222,
    name: 'Max',
  },
  ID333: {
    id: 333,
    name: 'Porridge',
  },
});
