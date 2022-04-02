import "./pre-start"; // Must be the first import
import logger from "jet-logger";
import server from "./server";

const serverStartMsg = "Express server started on port: ";
const port = process.env.PORT || 8000;

server.listen(port, () => {
  logger.info(serverStartMsg + port);
});
