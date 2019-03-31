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
                    // type: 'admin',
                    username: username,
                    name: 'Felipe',
                    lastname: 'B.',
                    role: 'admin', //admin vê tudo, mas pode depender de rules, seller não verá
                    // rules: {
                    //     system: {
                    //         users: {
                    //             allowDeleteSystemUser: { id: 1, description: 'Permite deletar um usuário'},
                    //             allowDeactivateSystemUser: { id: 2, description: 'Permite inativar um usuário'},
                    //         }
                    //     },
                    //
                    //     store: {
                    //         sales: {
                    //             invoices: {
                    //                 allowView: { id: 5, description: 'Permite a visuaização de pedidos'},
                    //             },
                    //             quotes: {
                    //                 allowView: { id: 5, description: 'Permite a visuaização de orçamentos'},
                    //             }
                    //         },
                    //         reports: {
                    //             allowView: { id: 3, description: 'Permite a visuaização de relatórios'},
                    //             allowGenerateExcel: { id: 4, description: 'Permite gerar um excel dos relatórios'},
                    //         }
                    //     },
                    // },

                    // accessModules:
                    // [
                    //     {
                    //         moduleName: 'system',
                    //         name: 'Sistema',
                    //         href: '#',
                    //         children: [
                    //             {
                    //                 moduleName: 'users',
                    //                 name: 'Usuários',
                    //                 icon: 'fa fa-users',
                    //                 href: '#',
                    //                 children: [
                    //                     { moduleName: 'allUsers', name: 'Todos os usuários', href: '/app/users' },
                    //                     { moduleName: 'createUser', name: 'Criar', href: '/app/users/create', },
                    //                 ]
                    //             }
                    //         ]
                    //     },
                    // ]

                        //     {
                        //     users: {
                        //         icon: 'fa fa-users',
                        //         name: 'Usuários',
                        //         options: []
                        //     }
                        // }

                };
                console.log('token');

                let token;
                let status = true;
                res.statusCode = 200;

                try{
                    token = Cryptor.generateADMToken(user);
                } catch (e) {
                    res.statusCode = 500;
                    status = false;
                    console.log(e);
                }

                next({
                    status: status,
                    token: token,
                    user: user
                });
            })
    }
}