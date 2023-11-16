export interface OpenStatus {
    restaurant_id: string;
    is_open: boolean;
  }

  export function createOpenStatus(restaurant_id: string, is_open: boolean): OpenStatus {
    return {
      restaurant_id,
      is_open,
    }
  }
  