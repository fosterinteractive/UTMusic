<?php

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Include the Pantheon-specific settings file.
 *
 * n.b. The settings.pantheon.php file makes some changes
 *      that affect all environments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to ensure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";


$settings['config_sync_directory'] = dirname(DRUPAL_ROOT) . '/config/sync';


$config['environment_indicator.indicator']['bg_color'] = '#cce8bc';
$config['environment_indicator.indicator']['fg_color'] = '#000000';
$config['environment_indicator.indicator']['name'] = 'Local';

if (isset($_ENV['PANTHEON_ENVIRONMENT']) && php_sapi_name() != 'cli') {

  // LIVE environment.
  if ($_ENV['PANTHEON_ENVIRONMENT'] == 'live') {

  }
  // TEST environment.
  elseif ($_ENV['PANTHEON_ENVIRONMENT'] == 'test') {
    // Set environment indicator.
    $config['environment_indicator.indicator']['bg_color'] = '#fbc673';
    $config['environment_indicator.indicator']['fg_color'] = '#000000';
    $config['environment_indicator.indicator']['name'] = 'Test Environment';
  }
  // QA environment.
  elseif ($_ENV['PANTHEON_ENVIRONMENT'] == 'qa') {
    // Set environment indicator.
    $config['environment_indicator.indicator']['bg_color'] = '#efe594';
    $config['environment_indicator.indicator']['fg_color'] = '#000000';
    $config['environment_indicator.indicator']['name'] = 'QA Environment';
  }
  else {
    // Set environment indicator.
    $config['environment_indicator.indicator']['bg_color'] = '#7F0F05';
    $config['environment_indicator.indicator']['fg_color'] = '#FFFFFF';
    $config['environment_indicator.indicator']['name'] = 'Feature Environment';
  }
}

/**
 * Skipping permissions hardening will make scaffolding
 * work better, but will also raise a warning when you
 * install Drupal.
 *
 * https://www.drupal.org/project/drupal/issues/3091285
 */
// $settings['skip_permissions_hardening'] = TRUE;

/**
 * If there is a local settings file, then include it
 */
$local_settings = __DIR__ . "/settings.local.php";
if (file_exists($local_settings)) {
  include $local_settings;
}
