const api = `https://api.github.com/users/${config.github_user}/repos?client_id=${config.client_id}&client_secret=${config.client_secret}&per_page=100`
const projects = document.getElementById('projects');

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
  	let repositories = data;
  	return repositories.map((repository) => {
      let project = createNode('li'),
		      url = createNode('a'),
		      description = createNode('span'),
      		language = createNode('span'),
      		stars = createNode('a')
  		
      project.className = 'project';

  		url.href = repository.svn_url;
  		url.target = '_blank';
  		url.innerHTML = repository.name + '<br>';
  		url.className = 'url';
      
      description.innerHTML = (repository.description || "") + '<br>';
      description.className = 'description';
      
      language.innerHTML = `<span class="icons language-icon ${repository.language}"></span>` + repository.language;
      language.className = 'language';

      if (repository.stargazers_count > 0) {
        stars.href = repository.svn_url + '/stargazers';
        stars.target = '_blank'
        stars.innerHTML = `<i class="fas fa-star"></i>${repository.stargazers_count}`;
      } else {
        stars.innerHTML = "";
      }
      stars.className = 'stars';
      
      append(project, url);
      append(project, description);
      append(project, language);
      append(project, stars);
      append(projects, project);
    })
  })