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
  
  window.alert("LOGIN FAILED: Incorrect Username or Password");
  
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
    window.alert("Username is already taken!")
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

function loginStatus() {
  if (localStorage.getItem('currUser')!==null) {
    return true;
  }
  else {
    return false;
  }
}

function loginDisplay(elementID, desiredStatus) {
  if (loginStatus() === desiredStatus) {
    document.getElementById(elementID).style.display = 'inline-block';
  }
  else {
    document.getElementById(elementID).style.display = 'none';
  }
}