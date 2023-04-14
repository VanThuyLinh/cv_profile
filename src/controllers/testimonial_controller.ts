import { Request, Response } from 'express';

import Testimonial from'../models/testimonial';

class testimonialController {
  async index(req: Request, res: Response) {
  const testimonials = await Testimonial.find({});

  res.render('components/testimonial', {
    title: 'Super Folio | Testimonial',
    page: req.url,
    testimonials,
  });
}
}
export default new testimonialController();
