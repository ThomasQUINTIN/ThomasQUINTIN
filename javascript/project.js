var git = require('git-last-commit');

git.getLastCommit(function(err, commit) {
  // read commit object properties
  console.log(commit);
});