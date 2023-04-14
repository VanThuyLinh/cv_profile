import { Request, Response } from 'express';

import Skill from'../models/skill';

class skillController {
  async index(req: Request, res: Response) {
  const skills = await Skill.find({});

  res.render('components/skill', {
    title: 'Super Folio | Skill',
    page: req.url,
    skills,
  });
}
}
export default new skillController();

