import { OpenStatus, createOpenStatus } from '../models/openStatus';

export const mockOpenStatusData: OpenStatus[] = [
  createOpenStatus('1', true),
  createOpenStatus('2', false),
];