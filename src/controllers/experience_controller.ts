import { Request, Response } from 'express';

import Experience from'../models/experience';

class experienceController {
  async index(req: Request, res: Response) {
  const experiences = await Experience.find({});

  res.render('components/experience', {
    title: 'Super Folio | Experiences',
    page: req.url,
    experiences,
  });
}
}
export default new experienceController();


