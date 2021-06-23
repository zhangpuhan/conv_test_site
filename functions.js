function is_chrome() {
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== 'undefined';
  var isIEedge = winNav.userAgent.indexOf('Edge') > -1;
  var isIOSChrome = winNav.userAgent.match('CriOS');
  if (isIOSChrome) {
    return true;
  } else if(
  isChromium !== null &&
  typeof isChromium !== 'undefined' &&
  vendorName === 'Google Inc.' &&
  isOpera === false &&
  isIEedge === false) {
    return true;
  } else { 
    return false;
  }
}

function chrome_measurement_api() {
  var chrome_browser = is_chrome();
  console.log(chrome_browser)
  if (chrome_browser) {
    FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      var access_token = response.authResponse.accessToken;
      FB.api(
        '/aem_conversion_bit_mapping',
        'GET',
        {'current_domain':'puhanzhang.com','pixel_id':'512586253523202','event_name':'Purchase', 'access_token': accessToken},
        function(res) {
          console.log(res);
        }
      );} 
    console.log(response);});
  }
}
