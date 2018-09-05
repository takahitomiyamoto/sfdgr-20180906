({
  updateMessage: function(component, event) {
    var action = component.get("c.getMessageBoard");
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (component.isValid() && state === "SUCCESS") {
        component.set("v.messageBoard", response.getReturnValue());
      } else {
        console.log("簡易エラーログ: " + state);
      }
    });
    $A.enqueueAction(action);
  }
})