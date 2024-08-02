// Defined only currently necessary types, should use Zod for schema validation
export type Route = {
  route_id: number;
  start: RoutePoint;
  end: RoutePoint;
};

export type RoutePoint = {
  time: string;
  lat: number;
  lng: number;
};
