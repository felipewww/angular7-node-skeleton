import * as app from '../app';
import AllEndpointsService from '../services/all-endpoints-service.routes';

import Cryptor from '../core/Cryptor';

export default class Gateway {
    constructor()
    {
        this.Router = app.default.apiRouter;
        app.default.router.use('/api/', this.Router);

        //Validate token and authorize
        this.setMiddleware();
        this.setRoutes();
    }

    //Validate token and authorize
    setMiddleware()
    {
        this.Router.use( (req, res, next) => {
            // console.log("gateway middleware!");

            // let token = req.headers.authorization;
            //
            // if ( !token || token === '' ) {
            //     res.statusCode = 403;
            //
            //     res.end(
            //         JSON.stringify({ status: false, msg: 'Invalid token.'})
            //     );
            //
            //     return;
            // }
            //
            // let validation = Cryptor.apiTokenValidation(token);
            //
            // if (!validation.status) {
            //     res.statusCode = 403;
            //     res.end(JSON.stringify({msg: 'Unauthorized.', code: validation.error }));
            //     return;
            // }
            //
            // //Assign decoded IDS into service request data
            // req.body.userId = parseInt(validation.userId);
            // req.body.familyId = parseInt(validation.familyId);

            next();
        })
    }

    //Instance new Router managers to redirect to correct service
    setRoutes()
    {
        new AllEndpointsService(this.Router);
    }
}