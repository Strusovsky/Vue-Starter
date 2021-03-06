import { SITE_URL } from '../env';

global.SITE_URL = SITE_URL;

const [width, height] = [1280, 800];

global.viewport = { width, height };

global.launch = {
  headless: false,
  slowMo: 80,
  args: [`--window-size=${width},${height}`, '--no-sandbox'],
};

jest.setTimeout(10 * 1000);
