({
  doInit : function(component, event, helper) {
    var actions = [
      { label: 'Show details', name: 'show_details' },
      { label: 'Delete', name: 'delete' }
    ];

    component.set('v.columns', [
      { label: '商談名', fieldName: 'Name', type: 'text' },
      { label: 'フェーズ', fieldName: 'StageName', type: 'text' },
      { label: '金額', fieldName: 'Amount', type: 'number' },
      { type: 'action', typeAttributes: { rowActions: actions } }
    ]);

    helper.getOpportunities(component, event);
  },

  handleRowAction: function(component, event, helper) {
    var action = event.getParam('action');
    var row = event.getParam('row');

    switch (action.name) {
      case 'show_details':
        alert('Showing Details: ' + JSON.stringify(row));
        break;
      case 'delete':
        helper.removeBook(component, row)
        break;
    }
  }
})