import { EPSILON } from '../constants';

export const compareDouble = (firstValue, secondValue) => Math.abs(firstValue - secondValue) < EPSILON;
