<?php

/**
 * @file
 * Contains \ComposerAuth\ComposerScripts.
 *
 * Custom Composer scripts and implementations of Composer hooks.
 */

namespace ComposerAuth;

/**
 * Implementation for Composer scripts and Composer hooks.
 */
class ComposerScripts {

  /**
   * Prepare for Composer to update dependencies.
   *
   * Composer will attempt to guess the version to use when evaluating
   * dependencies for path repositories. This has the undesirable effect
   * of producing different results in the composer.lock file depending on
   * which branch was active when the update was executed. This can lead to
   * unnecessary changes, and potentially merge conflicts when working with
   * path repositories on Pantheon multidevs.
   *
   * To work around this problem, it is possible to define an environment
   * variable that contains the version to use whenever Composer would normally
   * "guess" the version from the git repository branch. We set this invariantly
   * to "dev-main" so that the composer.lock file will not change if the same
   * update is later ran on a different branch.
   *
   * @see https://github.com/composer/composer/blob/main/doc/articles/troubleshooting.md#dependencies-on-the-root-package
   */
  public static function addComposerAuth(Event $event) {
    $file = "/files/private/auth.json";
    if (file_exists($file)) {
      $composerJsonContents = file_get_contents($file);

      // We will only set the root version if it has not already been overriden
      if (!getenv('COMPOSER_AUTH')) {

        putenv("COMPOSER_AUTH=$composerJsonContents");

        $myfile = fopen("/files/private/newfile.txt", "w") or die("Unable to open file!");
        $txt = "John Doe\n";
        fwrite($myfile, $txt);
        fclose($myfile);
      }
    }
  }

}
