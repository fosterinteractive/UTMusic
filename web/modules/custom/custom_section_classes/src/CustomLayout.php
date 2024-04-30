<?php

namespace Drupal\custom_section_classes;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Render\Element;
use Drupal\layout_section_classes\ClassyLayout;

/**
 * A layout plugin class for layouts with selectable classes.
 */
class CustomLayout extends ClassyLayout {

  // /**
  //  * {@inheritdoc}
  //  */
  // public function build(array $regions) {
  //   $build = parent::build($regions);

  //   return $build;
  // }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);

    foreach (Element::children($form['classes']) as $key) {
      $form['classes'][$key]['#validated'] = TRUE;
    }

    // Set the default value for the width class when switching between layouts
    // back to the default layout if the default value is not in the options.
    // This happens when e.g Switching from a 4 column layout to a 1 column
    // layout the default value is set to `--[zone--3|zone--3|zone--3|zone--3]`
    // which is not in the otions for the 1 column layout. So it breaks and sets
    // the default layout to the extra narrow column.
    //
    // This logic will set the default value back to the default of the column
    // layout set in the yaml file.
    if (isset($form['classes']['width'])) {
      $options = $form['classes']['width']['#options'];
      $default_value = $form['classes']['width']['#default_value'];
      if (!isset($options[$default_value])) {
        $width_definition = $this->getPluginDefinition()->get('classes')['width'];
        $default_value = $width_definition['default'];
        $form['classes']['width']['#default_value'] = $default_value;
        $form['classes']['width']['#value'] = $default_value;
      }
    }

    return $form;
  }

}
