import { Router } from 'express';
const router = Router();

import homeController from'../controllers/home_controller';
import profileController from'../controllers/profile_controller';
import skillController from'../controllers/skill_controller';
import portfolioController from'../controllers/portfolio_controller';
import testimonialController from'../controllers/testimonial_controller';
import serviceController from'../controllers/service_controller';
import experienceController from'../controllers/experience_controller';

/* GET home page. */
router.get('/', homeController.index);
router.get('/skills', skillController.index);
router.get('/about', profileController.index);
router.get('/portfolio', portfolioController.index);
router.get('/testimonial', testimonialController.index);
router.get('/contact', profileController.contact);
router.get('/services', serviceController.index);
router.get('/experiences', experienceController.index);

export default router;
