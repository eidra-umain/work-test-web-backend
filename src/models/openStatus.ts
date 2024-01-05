export interface OpenStatus {
  restaurant_id: string;
  is_open: boolean;
}

export function createOpenStatus(openStatus: OpenStatus): OpenStatus {
  const { restaurant_id, is_open } = openStatus;

  return {
    restaurant_id,
    is_open,
  };
}
