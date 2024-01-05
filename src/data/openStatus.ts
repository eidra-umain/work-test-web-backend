import { OpenStatus, createOpenStatus } from "../models/openStatus";

export const mockOpenStatusData: OpenStatus[] = [
  createOpenStatus({ restaurant_id: "1", is_open: true }),
  createOpenStatus({ restaurant_id: "2", is_open: false }),
];
