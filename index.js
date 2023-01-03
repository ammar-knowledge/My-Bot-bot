// Ours
const commitlint = require("./lib/lint");
const EventSource = require('eventsource');

module.exports = robot => {
  // For more information on building apps:
  // https://probot.github.io/docs/
  robot.on("pull_request.opened", commitlint);
  robot.on("pull_request.synchronize", commitlint);
};