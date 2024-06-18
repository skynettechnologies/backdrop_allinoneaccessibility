/**
 * @file
 * Custom javascript for the AllinOneAccessibility module.
 */

(function ($) {
  Backdrop.behaviors.allinOneAccessibility = {
    attach: function (context, settings) {

      // Check if the current URL contains "admin/modules" or "admin"
      if (window.location.href.includes("admin/") || window.location.href.includes("admin")) {

      } else {

        let scriptEle = document.createElement("script");

        scriptEle.setAttribute("src", "https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?aioa_reg_req=true&colorcode=&token=&position=bottom_right");
        scriptEle.setAttribute("type", "text/javascript");
        scriptEle.setAttribute("async", "");
        scriptEle.setAttribute("id", "aioa-adawidget");
        document.head.appendChild(scriptEle);
      }

    }
  };
})(jQuery);
function load_aioa_script() {
  var current_domain = window.location.host;

  const myHeaders = new Headers();
  myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IlNkQWxSVTJ0V1RyRlBUVTVnV21JNlE9PSIsInZhbHVlIjoib0o1clU2MGpMVkpIMkNiLzBNeWJkSXhrUjFpMm1HTWp4R2lld1pYa2pWMGk3emFzck5XR1ZqUFRtdmt2QTVzdzAvK1dsNGl2ckJVYWkvUHE0S2svUExLWTlNS05nNmVYZVV1MUpnVEg1UHdscSttOFJpaGJkc3YwR0VuUmRlT00iLCJtYWMiOiIzYTNiZmI3ZmY3YjkyMDQ5M2UwN2NhNmQzNmE5NTNhYTM2YThkZjdiNWU0NjcwMzJkZjU4MTIzN2ZiN2NlMTFlIiwidGFnIjoiIn0%3D; all_in_one_accessibility_session=eyJpdiI6IjU1eWJpSm1nSFk5WlRubFhuNVRRa0E9PSIsInZhbHVlIjoiZDY1eStYLzhpK3BXLzduRFA3RGUvYVdCa0ZGSnJ1dVVCOHAzNkU0TmZJb2NJWDVHa0sxQ3RXdjdkZEVlTjc4bFF5d1VPY3RVWVRuSG5VekFrOC9PbWJ5NTVtWE5SOGJpVWNURXZIeHJNTE1uT0ZPZ1JDbXpYS3NHNU0zYkRsNFkiLCJtYWMiOiIzMzFhOTIwMGQwN2JiODBlMDkzYzlhOTRhNDg0NWRhYzMzYmMyOGI1N2JhMDAyYTRlZGMxOTYyNDZiYWI4NjlmIiwidGFnIjoiIn0%3D");

  const formdata = new FormData();
  formdata.append("domain", current_domain);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow"
  };
  fetch("https://ada.skynettechnologies.us/check-website", requestOptions)
    .then((response) => response.json())
    .then(function (response) {
      var get_settinglink = response.settinglink;
      var manage_domain = response.manage_domain;
      console.log(response.status, "check status");
      if (response.status == 3) {
        var show_button = document.getElementById("manage_subscription");
        console.log(show_button);
        document.getElementById("aioa-iframe").style.display = 'none';
        document.getElementById("domain_button").style.display = 'block';
        document.getElementById("setting-div").style.display = 'none';
        show_button.href = get_settinglink;
      }
      else if (response.status > 0 && response.status < 3) {
        var show_button_manage = document.getElementById("aioa_subscriptionsd");
        var iframe = document.getElementById("setting-iframe");
        document.getElementById("aioa-iframe").style.display = 'none';
        document.getElementById("domain_button").style.display = 'none';
        document.getElementById("setting-div").style.display = 'block';
        document.getElementById("setting-iframe").style.display = 'block';
        iframe.src = get_settinglink;
        show_button_manage.href = manage_domain;
      } else {
        var iframe_id = document.getElementById("aioa-iframe");
        document.getElementById("aioa-iframe").style.display = 'block';
        document.getElementById("domain_button").style.display = 'none';
        document.getElementById("setting-div").style.display = 'none';
        iframe_id.src = "https://ada.skynettechnologies.us/trial-subscription?isframe=true&website=" + current_domain;
      }
    })
    .catch((error) => console.error(error));



};
load_aioa_script();
