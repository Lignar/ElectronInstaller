export interface Path {
  path: string;
}

export class PathFromBackend implements Path {
  constructor(pathfrombackend: string) {
    this.path = pathfrombackend;
  }

  path: string;
}
