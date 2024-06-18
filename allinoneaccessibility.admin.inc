

<?php

/**
 * @file
 * Administrative page callbacks for the AllinOneAccessibility module.
 */

/**
 * AllinOneAccessibility configuration form.
 */
?>
<style>
  .get-strated-btn,
  .get-strated-btn:hover {
    background-color: #2855d3;
    color: white;
    padding: 5px 5px;
    text-decoration: none;
  }

  .aioa-cancel-button {
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    border: 2px solid #420083;
    border-radius: 4px 4px 4px 4px;
    background-color: #420083;
    box-shadow: 0px 0px 2px 0px #333333;
    color: #ffffff;
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
  }

  .aioa-cancel-button:hover {
    border-color: #420083;
    background-color: white;
    box-shadow: 0px 0px 2px 0px #333333;
    color: black;
    text-decoration: none;

  }

  .aioa-cancel-button:hover .mb-text {
    color: #420083;
  }

  .widget {

    float: left;
  }

  .subscription {
    float: right;
  }

  h5 {
    font-weight: 450;
    color: #000;
  }
</style>
<?php
function allinoneaccessibility_configuration_form($form, &$form_state) {
  // Form values will be saved to this config file. See system_settings_form().

  $form['#config'] = 'allinoneaccessibility.settings';
  // Use $config->get() for default values.
  $config = config('allinoneaccessibility.settings');
  $form['intro_text'] = array(
    '#markup' => '<h5>All in One Accessibility widget improves website ADA compliance and browser experience for ADA, WCAG 2.1 & 2.2, Section 508, California Unruh Act, Australian DDA, European EAA EN 301 549, UK Equality Act (EA),Israeli Standard 5568, Ontario AODA, Canada ACA, German BITV, France RGAA, Brazilian Inclusion Law (LBI 13.146/2015), Spain UNE 139803:2012, JIS X 8341 (Japan), Italian Stanca Act and Switzerland DDA Standards without changing your websites existing code.</h5>',
  );
  $form['domain_button'] = array(

    '#markup' => '<div id="domain_button" style="display: none">
                      <h5 style="color: #aa1111">It appears that you have already registered! Please click on the "Manage Subscription" button to renew your subscription.<br> Once your plan is renewed, please refresh the page.</h5>
                      <div style="text-align: left; width:100%; padding-bottom: 10px;"><a target="_blank" id="manage_subscription" class="aioa-cancel-button" href="">Manage Subscription</a></div>
                    </div>',
  );
  $form['setting_div'] = array(
    '#markup' => '<div id="setting-div" style="width:80%; margin-top: 50px; padding-bottom: 10px;justify-content:space-between; display: none">
                      <div style="padding-bottom: 8%;">
                       <div class="widget"> <h3 >Widget Preferences:</h3></div>
                      <div class="subscription"><a target="_blank" class="aioa-cancel-button" id="aioa_subscriptionsd" href="">Manage Subscription</a></div>
                    </div>
                      <iframe id="setting-iframe" src="" height="1100px;" width="100%" style="border: none;display: none"></iframe>
                    </div>',
  );

  // Include the iframe with id="aioa-iframe"
  $form['aioa_iframe'] = array(
    '#markup' => '<iframe id="aioa-iframe" src="" height="1100px;" width="100%" style="border: none;display: none"></iframe>',
  );

return $form;
}
