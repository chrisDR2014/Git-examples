// Octokit.js
import { Octokit, App } from "octokit";

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'process.env.GITHUB_TOKEN'
  })
  
  await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'ChrisDR2024',
    repo: 'Git-Examples',
    ref: 'refs/heads/sdksjs',
    sha: 'e9ea29406884888dbe5822874f4c0f8c947ffcbc',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })