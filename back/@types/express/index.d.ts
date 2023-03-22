declare global {
  namespace Express {
    interface Request {
      client: {
        id: string;
        username: string;
      };
    }
  }
}
export {};
