function redirect(link) {
    location.replace(link);
}

let currentUrl = window.location.href;
let redirectTarget = currentUrl.replace('www','old');
redirect(redirectTarget);
