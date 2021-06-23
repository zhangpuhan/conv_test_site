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

function chrome_measurement_api(event_name, current_domain, pixel_id) {
  var chrome_browser = is_chrome();
  console.log(chrome_browser)
  if (chrome_browser) {
    FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      var access_token = response.authResponse.accessToken;
      FB.api(
        '/aem_conversion_bit_mapping',
        'GET',
        {'current_domain':'puhanzhang.com','pixel_id': pixel_id,'event_name': event_name, 'access_token': access_token},
        function(res) {
          console.log(res);
          let response_map = new Map(res);
          if (response_map.has('conversion_bits') && response_map.has('priority')) {
            console.log(response_map['conversion_bits']);
            console.log(response_map['priority']);
          }
        }
      );} 
    console.log(response);});
  }
}
