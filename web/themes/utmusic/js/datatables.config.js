(function ($, Drupal) {
  Drupal.behaviors.datatablesConfig = {
    attach: (context, settings) => {
      // Suppress DataTables warning alerts
      $.fn.dataTable.ext.errMode = 'none';
      
      const $tableContainers = $(context).find('.a-table--dataTable');

      $tableContainers.each(function() {
        const $dataTable = $('table', $(this));

        // Listen to error.dt event for this table to handle any errors
        $dataTable.on('error.dt', function(e, settings, techNote, message) {
          console.log('An error has been reported by DataTables: ', message);
        });

        try {
          $dataTable.DataTable({
            pageLength: 'All',
            paging: false,
            searching: false,
            ordering: false,
            info: false,
            responsive: true
          });
        } catch (error) {
          console.error('Failed to initialize DataTable for a table. Moving on...', error);
        }
      });
    }
  };
})(jQuery, Drupal);
