import { Request, Response } from 'express';

import Portfolio from'../models/portfolio';

class portfolioController {
  async index(req: Request, res: Response) {
  const portfolios = await Portfolio.find({});

  res.render('components/portfolio', {
    title: 'Super Folio | Portfolio',
    page: req.url,
    portfolios,
  });
}
}
export default new portfolioController();
