function getURLParameter(name, source) {
    return decodeURIComponent((new RegExp('[?|&|#]' + name + '=' +
        '([^&]+?)(&|#|;|$)').exec(source) || [,""])[1].replace(/\+/g,
        '%20')) || null
    ;
}

let accessToken = getURLParameter("access_token", location.hash);

if (typeof accessToken === 'string' && accessToken.match(/^Atza/)) {
    document.cookie = "amazon_Login_accessToken=" + accessToken;
}
