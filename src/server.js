import app from "./app.js";
import sequelize from "./config/database.js";
import env from "./config/env.js";
import { logger } from "./config/logger.js";

async function startServer() {

   try {

      await sequelize.authenticate();

      logger.info("Database Connected");

      app.listen(env.PORT, () => {

         logger.info(
            `Server running on port ${env.PORT}`
         );

      });

   } catch (error) {

      logger.error(error.message);

      process.exit(1);

   }

}

startServer();