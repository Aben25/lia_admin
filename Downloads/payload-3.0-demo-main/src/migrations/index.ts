import * as migration_20240929_170646_initial from './20240929_170646_initial';

export const migrations = [
  {
    up: migration_20240929_170646_initial.up,
    down: migration_20240929_170646_initial.down,
    name: '20240929_170646_initial'
  },
];
