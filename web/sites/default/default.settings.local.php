<?php

/**
 * @file
 * Drupal site-specific local configuration file.
 */

/**
 * Enable local development services.
 */
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

/**
 * Show all error messages, with backtrace information.
 */
$config['system.logging']['error_level'] = 'verbose';

/**
 * Disable CSS and JS aggregation.
 */
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

/**
 * Disable the render cache.
 *
 * This setting disables the render cache by using the Null cache back-end
 * defined by the development.services.yml file above.
 *
 * Do not use this setting until after the site is installed.
 */
$settings['cache']['bins']['render'] = 'cache.backend.null';

/**
 * Disable Dynamic Page Cache.
 *
 * Note: you should test with Dynamic Page Cache enabled, to ensure the correct
 * cacheability metadata is present (and hence the expected behavior). However,
 * in the early stages of development, you may want to disable it.
 */
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

/**
 * Disable the page cache.
 *
 * This setting disables the render cache by using the Null cache back-end
 * defined by the development.services.yml file above.
 *
 * Added in Drupal 8.4.x
 */
$settings['cache']['bins']['page'] = 'cache.backend.null';

/**
 * Allow test modules and themes to be installed.
 *
 * Drupal ignores test modules and themes by default for performance reasons.
 * During development it can be useful to install test extensions for debugging
 * purposes.
 */
$settings['extension_discovery_scan_tests'] = TRUE;

/**
 * Enable access to rebuild.php.
 *
 * This setting can be enabled to allow Drupal's php and database cached
 * storage to be cleared via the rebuild.php page. Access to this page can also
 * be gained by generating a query string from rebuild_token_calculator.sh and
 * using these parameters in a request to rebuild.php.
 */
$settings['rebuild_access'] = TRUE;

// Temp file path.
$settings['file_temp_path'] = '/tmp';
$settings['file_public_path']  = 'sites/default/files/assets';

// Database.
$databases['default']['default'] = [
  'database' => '',
  'username' => '',
  'password' => '',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];

// Services yaml file.
$settings['container_yamls'][] = __DIR__ . '/services.local.yml';

// Insert a random generated hash salt key.
$settings['hash_salt'] = '';

// Enable local config split.
$config['config_split.config_split.local']['status'] = TRUE;

// Image magic binary location.
// If installed by home brew this will be '/usr/local/bin/'
// MAMP will be '/Applications/MAMP/Library/bin/'.
$config['imagemagick.settings']['path_to_binaries'] = '/usr/local/bin/';

// Kint settings.
require_once DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php';
Kint::$maxLevels = 3;
