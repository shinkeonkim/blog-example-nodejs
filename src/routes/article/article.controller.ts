import { Request, Response, NextFunction } from "express";
import { Article } from '../../models/articles';

const articleModel = require('../../models/articles');

export const articleIndex = (req: Request, res: Response, next: NextFunction) => {
  articleModel
    .find()
    .then((articles: Article[]) => {
        res.status(200).json({
          message: 'success',
          data: {
            articles: articles
          }
        })
      }
    )
    .catch((err: Error) => {
      res.status(500).json({
        message: err
      })
    })
};

export const articleNew = (req: any, res: Response, next: NextFunction) => {
  const { title, content } = req.body;

  const article = new articleModel();

  Object.assign(article, { title, content });


  article
    .save()
    .then((newArticle: Article) => {
      console.log(`Saveed ${newArticle.title}`);

      res.status(200).json({
        message: 'success',
        data: {
          article: newArticle
        }
      })
    })
    .catch((err: Error) => {
      res.status(500).json({
        message: err
      })
    });
}
