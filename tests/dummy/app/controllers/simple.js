import Ember from 'ember';
import Column from 'ember-cli-ember-table/column-definition';

export default Ember.ArrayController.extend({
  columns: Ember.computed(function(){
    return [
      Column.create({
        headerCellName: 'Open',
        contentPath: 'open'
      }),
      Column.create({
        headerCellName: 'Close',
        contentPath: 'close'
      }),
      Column.create({
        headerCellName: 'Total',
        contentPath: 'total'
      })
    ];
  }),

  sortProperties: ['open'],
  sortAscending: true,

  actions: {
    sortByColumn: function(sortColumn) {
      var columnName = sortColumn.toLowerCase();
      if (columnName === this.get('sortProperties')[0]) {
        this.set('sortAscending', !this.get('sortAscending'));
      } else {
        this.set('sortProperties', [columnName]);
        this.set('sortAscending', true);
      }
    }

  }
});
