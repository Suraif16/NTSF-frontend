function redirect(url) {
  window.location.href = url;
}

export function redirectToLogin() {
  redirect("/user-side/user/login/index.html");
}

export function redirectToViewFines() {
  window.location.href = "/user-side/user/fines/index.html";
}
