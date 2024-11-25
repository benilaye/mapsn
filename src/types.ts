export interface RegionData {
  name: string;
  pollution: number;
  religiousEvents: number;
  vehicles: number;
  coordinates: [number, number];
}

export interface RegionStats {
  pollution: number;
  religiousEvents: number;
  vehicles: number;
}