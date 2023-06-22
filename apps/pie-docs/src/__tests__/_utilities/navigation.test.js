import { getNavigationRoutes } from '../../../test/helpers/routes-helper';
import expectedRoutes from '../../../test/snapshots/expected-routes.snapshot.json';

describe('PIE Docs - Navigation', () => {
    it('should compare the actual navigation routes to the JSON snapshot.', () => {
        const routes = getNavigationRoutes();

        expect(
            routes,
            'If you believe this route is expected, please run yarn test:generate-routes to regenerate the expected routes snapshot.',
        ).toEqual(expectedRoutes);
    });
});
