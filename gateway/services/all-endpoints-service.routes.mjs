import Manager from './Manager'

export default class AllEndpointsService extends Manager
{
    constructor(Router)
    {
        super('http://endpoints-main');

        Router.route('/products').all(async (req, res, next) => {
            await this.execute(req)
                .then(result => {
                    res.statusCode = 200;
                    next(result);
                })
                .catch(error => {
                    res.statusCode = error.statusCode;
                    next(error);
                });

            /**
             * Hardcode funciona!
             */
            // res.statusCode = 200;
            // next({result: 'certo'});
        });

        // Router.route('/products/*').all(async (req, res, next) => {
        //     await this.execute(req)
        //         .then(result => {
        //             res.statusCode = 200;
        //             next(result);
        //         })
        //         .catch(error => {
        //             res.statusCode = error.statusCode;
        //             next(error);
        //         })
        // });
    }
}