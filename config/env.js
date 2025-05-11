import { config } from 'dotenv';

// Dynamically construct the path string
const env = process.env.NODE_ENV || 'development';
config({ path: `.env.${env}.local` });

// Export environment variables
export const { port  ,DB_URI
    ,NODE_ENV,
    JWT_SECRET,
    JWT_EXPIRE_IN

} = process.env;
