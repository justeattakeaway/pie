import { readFile } from 'fs/promises';
import { test, expect } from '@sand4rt/experimental-ct-web';
import { PieLottiePlayer, type LottiePlayerProps } from '../../src/index.ts';

const animationData = JSON.parse(await readFile(new URL('../courier.json', import.meta.url), { encoding: 'utf-8' }));

const componentSelector = 'pie-lottie-player';

test.describe('PieLottiePlayer - Component tests', () => {
    test('should render successfully', async ({ mount, page }) => {
        // Arrange
        const props = {
            animationData,
        } as LottiePlayerProps;
        await mount(PieLottiePlayer, {
            props,
        });

        // Act
        const lottiePlayer = page.locator(componentSelector);

        // Assert
        expect(lottiePlayer).toBeVisible();
    });

    test.describe('when props are not provided"', () => {
        test('should render the expected default props', async ({ mount, page }) => {
            // Arrange
            const props = {
                animationData,
            } as LottiePlayerProps;
            await mount(PieLottiePlayer, {
                props,
            });

            // Act
            const component = page.locator(componentSelector);

            // Assert
            await expect(component).toHaveAttribute('speed', '1');
            await expect(component).toHaveAttribute('direction', 'forward');
        });
        test('should not render more props than expected', async ({ mount, page }) => {
            // Arrange
            const props = {
                animationData,
            } as LottiePlayerProps;
            await mount(PieLottiePlayer, {
                props,
            });

            // Act
            const component = page.locator(componentSelector);
            const autoPlayDisabled = await component.evaluate((el:PieLottiePlayer) => el.autoPlayDisabled);
            const loopDisabled = await component.evaluate((el:PieLottiePlayer) => el.loopDisabled);

            // Assert
            expect(autoPlayDisabled).toBe(false);
            expect(loopDisabled).toBe(false);
        });
    });

    test.describe('when extra props are provided"', () => {
        test('should render the extra default props', async ({ mount, page }) => {
            // Arrange
            const props = {
                animationData,
                autoPlayDisabled: true,
                loopDisabled: true,
            } as LottiePlayerProps;
            await mount(PieLottiePlayer, {
                props,
            });

            // Act
            const component = page.locator(componentSelector);
            const autoPlayDisabled = await component.evaluate((el:PieLottiePlayer) => el.autoPlayDisabled);
            const loopDisabled = await component.evaluate((el:PieLottiePlayer) => el.loopDisabled);

            // Assert
            expect(autoPlayDisabled).toBe(true);
            expect(loopDisabled).toBe(true);
        });
    });
});
