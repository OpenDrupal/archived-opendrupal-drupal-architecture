# OpenDrupal slide foundation
A Reveal.js based package for slides with OpenDrupal style. It includes the reveal.js package to allow on-line presentation of slides and immediate usage after downloading on any computer.

## Development
Development works require Node and npm. See https://docs.npmjs.com/getting-started/installing-node

Gulp is used for theme development. To install Gulp globally: `npm install --global gulp-cli`

### Common tasks
- Update Node packages: `npm update`
- Prepare for styling work: `npm install`
- Watch for sass changes: `gulp`

Note: Only the reveal.js package is committed to the repo, all other Node packages are ignored in .gitignore.