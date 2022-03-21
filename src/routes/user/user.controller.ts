import { Request, Response, NextFunction } from "express";

export const users = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    users: []
  })
};
