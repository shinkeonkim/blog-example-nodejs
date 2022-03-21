import { Request, Response, NextFunction } from "express";

export const articles = (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    articles: []
  })
};
