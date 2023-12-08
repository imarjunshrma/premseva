import devConfig from './config.dev';
import prodConfig from './config.prod';

type Environment = 'dev' | 'prod';

let env: Environment = 'dev';

const getConfig = () => {
  switch (env) {
    case 'dev':
      return devConfig;
    case 'prod':
      return prodConfig;
  }
};

const config = getConfig();

export default config;

export const API_ROUTE = 'http://54.177.16.157:3030';
