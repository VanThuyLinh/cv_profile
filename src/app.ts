import express from 'express';
import path from 'path';
import indexRouter from './routes';
import { connect } from './config/connect_db';

// Init
const app = express();
const port = 3000;

// Connect mongodb
connect();

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// Routes
app.use('/', indexRouter);

// Port
app.listen(port, () => console.log(`Sever listen: http://localhost:${port}/`));
