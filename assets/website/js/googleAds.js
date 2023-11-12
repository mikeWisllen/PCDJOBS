window.dataLayer = window.dataLayer || [];
window.googletag = window.googletag || {cmd: []};
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-21000108-1');

var adContainer = document.getElementById("google-ad-container");
var bannerDiv = document.createElement('div');
adContainer.appendChild(bannerDiv);
if (window.innerWidth < 992) {
  bannerDiv.id = 'div-gpt-ad-1596724622281-0';
  googletag.cmd.push(function() {
    googletag.defineSlot('/1053214/Banner_top_home_mobile', [[300, 250], [250, 250], [336, 280]], 'div-gpt-ad-1596724622281-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
    googletag.display('div-gpt-ad-1596724622281-0');
  });
} else {
  bannerDiv.id = 'div-gpt-ad-1596722395989-0';
  googletag.cmd.push(function() {
    googletag.defineSlot('/1053214/Banner_top_home_pcd', [[728, 90], [970, 250], [970, 90], [960, 90]], 'div-gpt-ad-1596722395989-0').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
    googletag.display('div-gpt-ad-1596722395989-0');
  });
}