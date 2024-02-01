import { getNavigationRoutes } from '../../../test/helpers/routes-helper';
import expectedRoutes from '../../../test/snapshots/expected-routes.snapshot.json';

describe('PIE Docs - Navigation', () => {
    it('should compare the actual navigation routes to the JSON snapshot.', () => {
        const routes = getNavigationRoutes();

        expect(routes).toEqual(expectedRoutes);
    });
});
