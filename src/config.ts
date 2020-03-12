import { config } from 'dotenv';

config();

interface IConfig {
  serverPort: number;
}

export default {
  serverPort: parseInt(process.env['SERVER_PORT'] || ''),
} as IConfig;
