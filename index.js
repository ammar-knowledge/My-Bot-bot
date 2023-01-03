// Ours
const commitlint = require("./lib/lint");
const EventSource = require('eventsource');

// install with: npm install @octokit/webhooks
const { Webhooks, createNodeMiddleware } = require("@octokit/webhooks");
const webhooks = new Webhooks({
  secret: "mysecret",
});

webhooks.onAny(({ id, name, payload }) => {
  console.log(name, "event received");
});

require("http").createServer(createNodeMiddleware(webhooks)).listen(3000);
// can now receive webhook events at /api/github/webhooks

module.exports = robot => {
  // For more information on building apps:
  // https://probot.github.io/docs/
  robot.on("pull_request.opened", commitlint);
  robot.on("pull_request.synchronize", commitlint);
};