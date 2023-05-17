<?php

namespace Drupal\test_form\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class doc comment here.
 */
class TestFormElements extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'test_form_elements';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form['radios_1'] = [
      '#type' => 'radios',
      '#title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit [Radios 1]',
      '#options' => [
        0 => 'Yes',
        1 => 'No',
      ],
    ];

    $form['radios_2'] = [
      '#type' => 'radios',
      '#title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit [Radios 2]',
      '#options' => [
        0 => ' Mauris sit amet leo quis tellus pellentesque volutpat vitae non urna. Nulla elit erat, congue quis est eget, lacinia maximus eros.',
        1 => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        2 => 'Sed sed elit ac mauris mattis fermentum. Maecenas dignissim metus et erat bibendum, ut volutpat sapien sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla et sem et tellus eleifend varius non in dolor. Donec non tempor nulla. Nunc quis mauris nec orci ultrices euismod. Vivamus vestibulum nisl vitae ante mattis volutpat ac at elit.',
        3 => 'Nullam consectetur, ligula vel luctus commodo, sem felis volutpat felis, non euismod tellus ipsum a velit.',
      ],
      '#description' => 'This is the description of the raio element. Etiam ac molestie tellus. Donec at pharetra eros. Curabitur eu elit vel massa mollis lacinia.',
    ];

    $form['checkbox_1'] = [
      '#type' => 'checkbox',
      '#title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget auctor erat. Integer id faucibus mauris. Fusce cursus velit et neque faucibus rutrum. Aliquam lacinia convallis felis vel volutpat.',
    ];

    $form['checkboxes_1'] = [
      '#type' => 'checkboxes',
      '#options' => ['SAT' => 'SAT', 'ACT' => 'ACT'],
      '#title' => 'Aliquam sollicitudin velit a urna blandit, quis vehicula ipsum sodales. Sed congue justo lectus, at ornare mi aliquet a.',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

  }

}
