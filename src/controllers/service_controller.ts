import { Request, Response } from 'express';

import Service from'../models/service';

class serviceController {
  async index(req: Request, res: Response) {
  const services = await Service.find({});

  res.render('components/service', {
    title: 'Super Folio | Service',
    page: req.url,
    services,
  });
}
}
export default new serviceController();

