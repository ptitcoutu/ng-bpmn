(function()  {
  var ng-bpmn = angular.module('ng-bpmn', []);
  ng-bpmn.constant('LOG_LEVEL',0);
   var BPMNDefinitions = function() {
  	this.content = "";
	this.isValidDefinition = false;
	this.errors = null;
	this.warnings = null;
	this.advices = null;
    this.content = null;
    this.xmlContent = null;
  }
  BPMNDefinitions.prototype = {
    setContent:function (newContent) {
         content = newContent;
    }
      loadContent:function (url) {
        var bpmnDefinitions = new Object();
        bpmnDefinitions.content = "";
      },
      check:function () {
		isValidDefinition = true;
		errors = null;
		warnings = null;
		advices = null;
        return isValidDefinition;
      }
      getContent:function (bpmnDefinition) {
         return content;
      }
      getXmlContent:function (bpmnDefinition) {
         return xmlContent;
      }
      saveContent:function (url) {
      
      }
  };
  ng-bpmn.factory('bpmnDefinitionsService', function (processService, collaborationService, choreographyService, LOG_LEVEL) {    
    return {
      loadDefinitions : function(url, callback) {
        return new BPMNDefinitions();
      };
      getDefinitions : function(content, callback) {
        return null;
      } 
    };
  })
  ng-bpmn.factory('processService', function (LOG_LEVEL) {
     return {
     };
   }
  ); 
  ng-bpmn.factory('collaborationService', function (LOG_LEVEL) {
     return {
     };
   }
  );
  ng-bpmn.factory('choreographyService', function (LOG_LEVEL) {
     return {
     };
   }
  );
} ();