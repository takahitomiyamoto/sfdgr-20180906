({
  getOpportunities : function(component, event) {
    var action = component.get("c.getOpportunities");
    action.setParams({
      "accountId" : component.get("v.recordId")
    });

    action.setCallback(this, function(response) {
      var result = response.getReturnValue();
      component.set("v.opportunityList", result);
    });
    $A.enqueueAction(action);
  },

  removeBook: function(component, row) {
    var rows = component.get('v.opportunityList');
    var rowIndex = rows.indexOf(row);

    rows.splice(rowIndex, 1);
    component.set('v.opportunityList', rows);
  }
})