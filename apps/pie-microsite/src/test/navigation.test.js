import { snapshotNavigationRoutes } from '../../test/helpers/routes';
import expectedRoutes from '../../test/snapshots/expected-routes.json';
describe('foo', () =>{
    
    it('foo', () => {
        const routes = snapshotNavigationRoutes();

        console.log('routes', routes);

        expect(routes).toEqual(expectedRoutes);
    })
})