class Github {
  constructor() {
    this.client_id = "5577409f925e96389bf0";
    this.client_secret = "51373254790c2e126395ba3eff8d9fa54825f603";
    this.repos_count = 5;
    this.repos_sort = "created : asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?
      client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?
      per_page=${this.repos_count}&sort=${this.repos_sort}&
      client_id=${this.client_id} &client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
