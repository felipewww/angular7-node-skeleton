import * as app from '../app';

import FamilyController from '../controllers/FamilyController';
import UserController from '../controllers/UserController';
import Cryptor from "../core/Cryptor";

export default class Routes {
    constructor()
    {
        // this.Router = app.default.apiRouter;
        // app.default.router.use('/api/', this.Router);
        this.setRoutes();
    }

    setRoutes()
    {
        let authRouter = app.default.authRouter;
        app.default.router.use('/api/auth/', authRouter);

        // authRouter.use('/login', function(req, res, next){
            // req.body.token = req.headers.authorization;
            // console.log(req.body);
            // res.statusCode = 200;
            // next('LOGGEDin!');
        // });

        // authRouter.use('/', function(req, res, next){
        //     req.body.token = req.headers.authorization;
        //     next();
        // });

        authRouter.route('/')
            .post((req, res, next) => {

                let decoded = Cryptor.validateToken(req.headers.authorization);

                res.statusCode = ( decoded.status ) ? 200 : 403;

                next({
                    status: decoded.status
                });
            });

        authRouter.route('/login')
            .post((req, res, next) => {

                let username = req.body.username;
                let password = req.body.password;

                let user = {
                    id: 1,
                    type: 'admin',
                    username: username,
                    name: 'Felipe',
                    lastname: 'B.',
                    role: 'admin',
                    rules: {
                        0: true,
                        1: false,
                        2: true,
                        3: true,
                        4: true,
                        5: false,
                    }
                };

                let token = Cryptor.generateADMToken(user);

                res.statusCode = 200;
                next({
                    status: true,
                    token: token,
                    _session: {
                        user: user
                    }
                });
            })
    }
}