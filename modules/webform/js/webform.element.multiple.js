/**
 * @file
 * Javascript behaviors for message element integration.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Move show weight to after the table.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.webformMultiple = {
    attach: function (context, settings) {
      for (var base in settings.tableDrag) {
        var $tableDrag = $(context).find('#' + base);
        var $toggleWeight = $tableDrag.parent().find('.tabledrag-toggle-weight');
        $toggleWeight.addClass('webform-multiple-tabledrag-toggle-weight');
        $tableDrag.after($toggleWeight);
      }
    }
  };

})(jQuery, Drupal);
