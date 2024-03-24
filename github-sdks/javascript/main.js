// Octokit.js
const { Octokit, App } = require("octokit");

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })
  
  octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'ChrisDR2024',
    repo: 'Git-Examples',
    ref: 'refs/heads/sdksjs',
    sha: '31f0366486261e85937c7438c9110984d587105b',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })