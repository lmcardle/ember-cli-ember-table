import Ember from 'ember';
import Column from 'ember-cli-ember-table/column-definition';

export default Ember.Controller.extend({
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
      console.log('sortByColumn', sortColumn);
      if (sortColumn !== this.get('sortProperties')[0]) {
        this.set('sortAscending', !this.get('sortAscending'));
      } else {
        this.set('sortProperties', [sortColumn]);
        this.set('sortAscending', true);
      }
    }
  }
});
