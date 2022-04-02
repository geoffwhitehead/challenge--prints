import "./pre-start"; // Must be the first import
import logger from "jet-logger";
import server from "./server";

// Constants
const serverStartMsg = "Express server started on port: ",
  port = process.env.PORT || 8000;

// Start server
server.listen(port, () => {
  console.log("process.env", process.env);
  logger.info(serverStartMsg + port);
});
