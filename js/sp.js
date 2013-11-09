var spRedirect = function (appname) {
    var hostname = window.location.hostname;
    var pathname = window.location.pathname;

    var reg = new RegExp ('/' + appname);
    var path = pathname.replace (reg, '/' + appname + '/sp');

    var locateurl = 'http://' + hostname + path;
    if (navigator.userAgent.indexOf('iPhone') > 0 &&
        navigator.userAgent.indexOf('iPad') == -1 ||
        navigator.userAgent.indexOf('iPod') > 0 ||
        navigator.userAgent.indexOf('Android') > 0)
    {
        location.href = locateurl;
    }
};
