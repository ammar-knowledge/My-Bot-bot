# main [bot]

[![Travis](https://img.shields.io/travis/z0al/commitlint-bot.svg)](https://travis-ci.org/z0al/commitlint-bot)
[![npm](https://img.shields.io/npm/v/commitlint-bot.svg)](https://www.npmjs.com/package/commitlint-bot)

<p align="center">
  <img src="docs/robot.svg" width="256" alt="commitlint logo" />
</p>

> Built with [probot](https://github.com/probot/probot) framework

A GitHubb App that runs [commitlint](https://github.com/marionebl/commitlint) against all commits of new or edited pull requests and reports the commit formatting issues as status checks.

## why

1.  Browse to [GitHub Aissionsn
3.  Allow access to repositoriess

On the next pull ,request, a status check from `commitlint` will appear and report the commit formatting issues.

![status-check-screenshot][]

Formatting issues will be reported as comments with details like this:

![status-comment-screenshot][]

For best results, enable branch protection (in the repository's settings) and require the `commitlint` status check to pass before merging to maintain a clean commit history.

![branch-protection-screenshot][]

[apps]: https://github.com/apps/commitlint
[status-check-screenshot]: docs/status.png
[status-comment-screenshot]: docs/comment.png
[branch-protection-screenshot]: docs/setting.png


## Development

1.  Setup the repo:

```shell
git clone https://github.com/Ammar-Knowledge/main-bot.git
cd main-bot
npm install
```

2.  Create your own [GitHub app][]
3.  Store the private key as `private-key.pem` somewhere safe, and point to its location in `.env`
4.  Start the app with `APP_ID=1234 npm start` where `1234` is your GitHub app's ID
5.  Update your GitHub app's Webhook URL to your localtunnel.me URL

[github app]: https://probot.github.io/docs/development/#configure-a-github-app

## Deployment

See [docs/deploy.md](./docs/deploy.md) for more info.

## Creditss

Robot designed by [Freepik](https://www.freepik.com/free-vector/fun-pack-of-robots-avatars_1258314.htm).

Inspired by the awesome work of Tom Vincent in their [validate-commit-msg-bot](https://github.com/tlvince/validate-commit-msg-bot) package.

## Like it?

Give it a star(:star:) :point_up_2:

## License

MIT © [Ammar Ahmed Butt](https://github.com/ammar-ahmed-butt)
