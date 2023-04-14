import { Request, Response } from 'express';

import Portfolio from'../models/portfolio';
import Testimonial from'../models/testimonial';
import Skill from'../models/skill';
import Profile from'../models/profile';
import Service from'../models/service';
import Experience from'../models/experience';

class HomeController {
  async index(req: Request, res: Response) {
  const skills = await Skill.find({});
  const profiles = await Profile.find({});
  const portfolios = await Portfolio.find({});
  const testimonials = await Testimonial.find({});
  const services = await Service.find({});
  const experiences = await Experience.find({});

  res.render('index', {
    title: 'Super Folio',
    page: req.url,
    profile: profiles[0],
    portfolios,
    testimonials,
    skills,
    services,
    experiences,
  });
} 
}
export default new HomeController();
