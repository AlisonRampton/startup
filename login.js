function login(form) { 
  const userEl = form.username.value;
  const passEl = form.password.value;

  let users = [];
  const usersText = localStorage.getItem('users');
  if (usersText) {
    users = JSON.parse(usersText);
  }

  for (const [i, oldUser] of users.entries()) {
    if (userEl === oldUser.username && passEl === oldUser.password) {
      localStorage.setItem("currUser", oldUser.name);
      window.location.href = getOrigin();
      localStorage.removeItem("originPage");
      return;
    }
  }
  
  // print that username or password is incorrect
  
}

function logout() {
  localStorage.removeItem("currUser");
}

function newAccount(form) {
  const nameEl = form.name.value;
  const userEl = form.username.value;
  const passEl = form.password.value;
  const newUser = {name: nameEl, username: userEl, password: passEl};

  let users = [];
  const usersText = localStorage.getItem('users');
  if (usersText) {
    users = JSON.parse(usersText);
  }

  let found = false;
  for (const [i, oldUser] of users.entries()) {
    if (userEl === oldUser.username) {
      found = true;
      break;
    }
  }
  if (found) {
    //print out that username is taken
  }
  else {
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "login.html";
  }
}

function setOrigin(currPage) {
  localStorage.setItem("originPage", currPage);
}

function getOrigin() {
  return localStorage.getItem("originPage") ?? "index.html";
}