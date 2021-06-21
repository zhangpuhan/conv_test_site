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

function generate_chrome_api_post(data, pixel_id, access_token) {
  var settings = {};
  settings.method='POST';
  settings.url='https://graph.facebook.com/trigger-attribution/' + pixel_id + '/events?access_token=' + access_token;
  settings.data=data;
  return settings
}
