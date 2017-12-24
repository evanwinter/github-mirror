# GitHub Components

Fetch and display a user's public GitHub repositories as they would appear on a profile's Pinned Repositories.

## Usage

Create a new [OAuth Application](https://github.com/settings/applications/new) on GitHub and get your `client_id` and `client_secret` (otherwise you're limited to 60 API calls).

Create a new file in the project root called `config.js` and, in it, store your `client_id` and `client_secret` along with the username of the user whose repositories you want to see, like so: 

```
// config.js

config {
	client_id: 'XXX',
	client_secret: 'XXX',
	github_user: 'evanwinter'
}

```

Then open up `index.html` and check it out.