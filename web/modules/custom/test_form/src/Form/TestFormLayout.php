<?php

namespace Drupal\test_form\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class doc comment here.
 */
class TestFormLayout extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'test_form_layout';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['flex_1'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['l-form__flex'],
      ],
      'flex_item_1' => [
        '#type' => 'container',
        '#attributes' => [
          'class' => ['l-form__flex-item flex-1'],
        ],
        'container' => [
          '#type' => 'container',
          '#attributes' => [
            'class' => ['l-form__flex-container'],
          ],
        ],
      ],
      'flex_item_2' => [
        '#type' => 'container',
        '#attributes' => [
          'class' => ['l-form__flex-item flex-1'],
        ],
        'container' => [
          '#type' => 'container',
          '#attributes' => [
            'class' => ['l-form__flex-container'],
          ],
        ],
      ],
    ];

    $form['flex_1']['flex_item_1']['container']['input_1'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 1'),
    ];

    $form['flex_1']['flex_item_2']['container']['input_2'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 2'),
    ];

    $form['flex_2'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['l-form__flex'],
      ],
    ];

    $form['flex_2']['input_3'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 3'),
      '#prefix' => '<div class="l-form__flex-item flex-1"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_2']['input_4'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 4'),
      '#prefix' => '<div class="l-form__flex-item flex-1"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_3'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['l-form__flex'],
      ],
    ];

    $form['flex_3']['input_5'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 5'),
      '#prefix' => '<div class="l-form__flex-item flex-3"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_3']['input_6'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 6'),
      '#prefix' => '<div class="l-form__flex-item flex-2"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_3']['input_7'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 7'),
      '#prefix' => '<div class="l-form__flex-item flex-1"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_4'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['l-form__flex flex-end'],
      ],
    ];

    $form['flex_4']['input_8'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Lorem ipsum 8'),
      '#prefix' => '<div class="l-form__flex-item flex-1"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['flex_4']['input_9'] = [
      '#type' => 'checkboxes',
      '#options' => array('SAT' => $this->t('SAT'), 'ACT' => $this->t('ACT'), 'MAT' => $this->t('MAT')),
      '#title' => $this->t('Lorem ipsum 9'),
      '#prefix' => '<div class="l-form__flex-item flex-1"><div class="l-form__flex-container">',
      '#suffix' => '</div></div>',
    ];

    $form['actions'] = [
      '#type' => 'actions',
      'submit' => [
        '#type' => 'submit',
        '#value' => $this->t('Submit'),
      ]
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

  }

}
