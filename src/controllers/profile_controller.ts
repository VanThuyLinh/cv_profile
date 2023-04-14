import { Request, Response } from 'express';

import Profile from'../models/profile';

class HomeController {
  async index(req: Request, res: Response) {
  const profiles = await Profile.find({});

  res.render('components/about', {
    title: 'Super Folio | Profile',
    page: req.url,
    profile: profiles[0],
  });
}

async contact(req: Request, res: Response) {
  const profiles = await Profile.find({});

  res.render('components/contact', {
    title: 'Super Folio | Contact',
    page: req.url,
    profile: profiles[0],
  });
}
}
export default new HomeController();

