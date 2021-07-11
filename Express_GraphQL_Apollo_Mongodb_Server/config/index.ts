/**
 * Config file
 * @author Sebastian Chapman <sebastia.g.chapman@gmail.com>
 */

import dotenv from 'dotenv';
dotenv.config();
export default {
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT,
    allowedOrigins: ['http://localhost:3000', 'http://yourapp.com', 'http://localhost:4020']
};
