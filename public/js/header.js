// logout function
function logoutfunc() {
    sessionStorage.removeItem("token");
    localStorage.removeItem("userid");
    window.location.href = '/report'

}
//disable back button
history.pushState(null, null, location.href);
window.onpopstate = function () {
    if (window.location.href == "http://localhost:8086/filter") { return }
    else if (window.location.href == "http://localhost:8086/about") { return }
    else { history.go(1); }

};