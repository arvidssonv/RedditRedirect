function redirect() {
    redditPage = window.location.href.replace('www','old')
    location.replace(redditPage);
}

redirect();