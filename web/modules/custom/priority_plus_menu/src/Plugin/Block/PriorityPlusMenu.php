<?php

namespace Drupal\priority_plus_menu\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\Cache;
use Drupal\Core\Menu\MenuLinkManagerInterface;
use Drupal\Core\Menu\MenuLinkTreeInterface;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides priority_plus_menu block.
 *
 * @Block(
 *   id = "priority_plus_menu",
 *   admin_label = @Translation("Priority Plus Custom Menu Block"),
 *   category = @Translation("Blocks")
 * )
 */
class PriorityPlusMenu extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * The menu link plugin manager.
   *
   * @var \Drupal\Core\Menu\MenuLinkManagerInterface
   */
  protected $menuLinkManager;

  /**
   * Menu tree.
   *
   * @var \Drupal\Core\Menu\MenuLinkTreeInterface
   */
  protected $menuTree;

  /**
   * The route match interface.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   *   The route match.
   */
  protected $routeMatch;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MenuLinkManagerInterface $menu_link_manager, MenuLinkTreeInterface $menu_tree, RouteMatchInterface $route_match) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);

    $this->menuLinkManager = $menu_link_manager;
    $this->menuTree = $menu_tree;
    $this->routeMatch = $route_match;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('plugin.manager.menu.link'),
      $container->get('menu.link_tree'),
      $container->get('current_route_match'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    $menu_name = 'main';

    if (!$this->routeMatch->getParameter('node')) {
      return [];
    }

    $route_params = ['node' => $this->routeMatch->getParameter('node')->Id()];
    $menu_links = $this->menuLinkManager->loadLinksByRoute('entity.node.canonical', $route_params, $menu_name);

    if (!empty($menu_links)) {
      // The current menu item of the page.
      $current_menu_item = reset($menu_links);

      $parents_ids = $this->menuLinkManager->getParentIds($current_menu_item->getParent());
      $depth = !empty($parents_ids) ? count($parents_ids) + 1 : 1;

      if ($depth != 3 and $depth != 4) {
        return [];
      }

      // Create a new menu tree.
      $menu_parameters = new MenuTreeParameters();
      // Create a current menu item array to set the active trail.
      $current_id = [
        $current_menu_item->getPluginId(),
        $current_menu_item->getPluginId(),
      ];

      // $menu_parameters->setMaxDepth(2);
      // $menu_parameters->setMinDepth(1);
      $menu_parameters->setActiveTrail($current_id);
      if ($depth == 3) {
        $menu_parameters->setRoot($current_menu_item->getPluginId());
      }
      else {
        $menu_parameters->setRoot($current_menu_item->getParent());
      }
      // $menu_parameters->excludeRoot();
      $tree = $this->menuTree->load($menu_name, $menu_parameters);

      $parent = reset($tree);
      if ($parent->hasChildren == FALSE) {
        return [];
      }

      // Apply some manipulators (checking the access, sorting).
      $manipulators = [
        ['callable' => 'menu.default_tree_manipulators:checkNodeAccess'],
        ['callable' => 'menu.default_tree_manipulators:checkAccess'],
        ['callable' => 'menu.default_tree_manipulators:generateIndexAndSort'],
      ];
      $tree = $this->menuTree->transform($tree, $manipulators);
      // And the last step is to actually build the tree.
      $build['parent'] = $this->menuTree->build($tree);

      $build['parent']['#theme'] = 'menu__priority_plus';
      return $build;
    }

    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    // Even when the menu block renders to the empty string for a user, we want
    // the cache tag for this menu to be set: whenever the menu is changed, this
    // menu block must also be re-rendered for that user, because maybe a menu
    // link that is accessible for that user has been added.
    $cache_tags = parent::getCacheTags();
    $cache_tags[] = 'config:system.menu.' . $this->getDerivativeId();
    return $cache_tags;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    // ::build() uses MenuLinkTreeInterface::getCurrentRouteMenuTreeParameters()
    // to generate menu tree parameters, and those take the active menu trail
    // into account. Therefore, we must vary the rendered menu by the active
    // trail of the rendered menu.
    // Additional cache contexts, e.g. those that determine link text or
    // accessibility of a menu, will be bubbled automatically.
    $menu_name = 'main';
    return Cache::mergeContexts(parent::getCacheContexts(), ['route.menu_active_trails:' . $menu_name]);
  }

}
