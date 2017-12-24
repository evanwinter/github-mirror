# GitHub Repo Mirror

Fetch and display a user's public GitHub repositories as they would appear on a profile's Pinned Repositories.

Create a GitHub app and get your `client_id` and `client_secret` (otherwise you're limited to 60 API calls).

Then, create a file called `config.js` and in it, store those credentials along with the username of the user whose repositories you want to see, like so: 

```
// config.js

config {
	client_id: 'XXX',
	client_secret: 'XXX',
	github_user: 'evanwinter'
}

```

Then open up `index.html` and check it out.