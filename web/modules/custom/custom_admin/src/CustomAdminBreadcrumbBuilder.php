<?php

namespace Drupal\custom_admin;

use Drupal\Component\Utility\SortArray;
use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Link;
use Drupal\Core\Menu\MenuLinkManagerInterface;
use Drupal\Core\Routing\RouteMatch;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Routing\RouteProviderInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * {@inheritdoc}
 */
class CustomAdminBreadcrumbBuilder implements BreadcrumbBuilderInterface {

  use StringTranslationTrait;

  /**
   * The configuration object generator.
   *
   * @var \Drupal\Core\Config\ConfigFactory
   */
  protected $configFactory;

  /**
   * The menu link manager interface.
   *
   * @var \Drupal\Core\Menu\MenuLinkManagerInterface
   */
  protected $menuLinkManager;

  /**
   * The menu breadcrumb.
   *
   * @var \Drupal\menu_breadcrumb\MenuBasedBreadcrumbBuilder
   */
  protected $menuBreadcrumb;

  /**
   * The route provider to load routes by name.
   *
   * @var \Drupal\Core\Routing\RouteProviderInterface
   */
  protected $routeProvider;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * {@inheritdoc}
   */
  public function __construct(
    ConfigFactoryInterface $config_factory,
    MenuLinkManagerInterface $menu_link_manager,
    BreadcrumbBuilderInterface $menu_breadcrumb,
    RouteProviderInterface $route_provider,
    EntityTypeManagerInterface $entity_type_manager,
  ) {
    $this->configFactory = $config_factory;
    $this->menuLinkManager = $menu_link_manager;
    $this->menuBreadcrumb = $menu_breadcrumb;
    $this->routeProvider = $route_provider;
    $this->entityTypeManager = $entity_type_manager;
    $this->config = $this->configFactory->get('menu_breadcrumb.settings');
  }

  /**
   * {@inheritdoc}
   */
  public function applies(RouteMatchInterface $route_match) {

    // No route name means no active trail:
    $route_name = $route_match->getRouteName();
    if (!$route_name) {
      return FALSE;
    }

    // Only apply to node edit forms of pages.
    if ($route_name == 'entity.node.edit_form') {
      $node = $route_match->getParameters()->get('node');
      if ($node->getType() == 'page') {
        return TRUE;
      }
    }

    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function build(RouteMatchInterface $route_match) {
    // Flag to indicate if this is a menu breadcrumb.
    $is_menu_breadcrumb = FALSE;
    $node = $route_match->getParameters()->get('node');
    // Get the menu item for the current node.
    $result = $this->menuLinkManager->loadLinksByRoute('entity.node.canonical', ['node' => $node->id()]);
    // If there is a menu item then get the menu trail.
    if (!empty($result)) {
      $menu_link = reset($result);

      $route = $this->routeProvider->getRouteByName('entity.node.canonical');
      // Create a new route match object for the node view.
      $node_route_match = new RouteMatch(
          'entity.node.canonical',
          $route,
          ['node' => $node->id()]
      );

      // Setup the menu breadcrumb.
      $this->menuBreadcrumb->applies($node_route_match);
      // Get the menus configured for menu breadcrumbs.
      $menus = $this->config->get('menu_breadcrumb_menus');
      uasort($menus, function ($a, $b) {
        return SortArray::sortByWeightElement($a, $b);
      });

      // Loop through the menus that are enabled to get the parent menu items
      // and add them as breadcrumbs.
      foreach ($menus as $menu_name => $params) {

        // Look for current path on any enabled menu.
        if (!empty($params['enabled'])) {
          $trail_ids = $this->menuLinkManager->getParentIds($menu_link->getPluginId());

          if (!empty($trail_ids)) {
            $is_menu_breadcrumb = TRUE;
            $this->menuBreadcrumb->setMenuName($menu_name);
            $this->menuBreadcrumb->setMenuTrail($trail_ids);
          }
        }
      }
    }

    // If this is a menu then use the menu breadcrumb service to build it.
    if ($is_menu_breadcrumb) {
      $breadcrumb = $this->menuBreadcrumb->build($route_match);
    }
    // If this does not have a menu breadcrumb then build a custom breadcrumb.
    else {
      $links[] = Link::createFromRoute($this->t('Home'), '<front>');
      $links[] = Link::createFromRoute($node->label(), '<none>');

      $breadcrumb = new Breadcrumb();
      $breadcrumb->addCacheableDependency($node);
      $breadcrumb->addCacheContexts(['url.path']);
      $breadcrumb->setLinks($links);
    }

    return $breadcrumb;
  }

}
