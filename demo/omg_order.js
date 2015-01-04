(function() {
   var omgOrderApp = angular.module("omg_order",["ng-bpmn"]);
   omgOrderApp.controller("omgOrderController", function(bpmnDefinitionsService) {
     this.omgOrderDef = bpmnDefinitionsService.loadDefinitions("omg_order.bpmn");
   });
})();
