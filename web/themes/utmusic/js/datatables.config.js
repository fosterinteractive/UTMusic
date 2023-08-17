(function ($, Drupal) {
  Drupal.behaviors.datatablesConfig = {
    attach: (context, settings) => {
      
      const $tableContainer = $(context).find('body').once('a-table-wrapper ');
      const $dataTable = $('table', $tableContainer);

      var $dataTableVar;

      $dataTableVar = $dataTable.DataTable({
        pageLength: 'All',
        paging: false,
        "searching": false,
        "ordering": false,
        "paging": false,
        "info": false,
        responsive: true
      });
    }
  };
})(jQuery, Drupal);
