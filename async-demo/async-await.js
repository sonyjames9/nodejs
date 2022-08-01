console.log("Before");
// get_user(1)

// function get_repositories(user) {
//   get_repositories(user.gitHubUsername, get_commits);
// }

// function get_commits(repos) {
//   get_commits(repos, display_commits);
// }

// function display_commits(commits) {
//   console.log(commits);
// }

console.log('Promise User is chained to call repos promise which calls commits');
// get_user(1)
//   .then(user => get_repositories(user.gitHubUsername))
//   .then(repos => get_commits(repos[0]))
//   .then(commits => console.log('Commits : ', commits))
//   .catch(err => console.log('Error : ', err))
//   ;

async function display_commits() {
  try {
    const user = await get_user(1);
    const repos = await get_repositories(user.gitHubUsername);
    const commits = await get_commits(repos[0]);
    console.log(commits)
  }
  catch (err) {
    console.log('Error : ', err.message)
  }
}

display_commits();


function get_user(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from db");
      resolve({ id: id, gitHubUsername: "ammu" });
    }, 2000);
  });
}

function get_repositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Repo list from Github : ");
      // console.log(["repo1", "repo2", "repo3"]);
      resolve({ repos: ["repo1", "repo2", "repo3"] });
    });
  });
}

function get_commits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Find all commits");
      // resolve(["commit1", "commit2", "commit3"]);
      reject(new Error("Couldn't find commits"));
    });
  });
}

console.log("After");