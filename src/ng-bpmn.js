(function()  {
  var ngBpmn = angular.module('ng-bpmn', ['xml']);
  ngBpmn.constant('LOG_LEVEL',0);
  ngBpmn.config(function ($httpProvider) {
	    $httpProvider.interceptors.push('xmlHttpInterceptor');
	  });
  var BPMNDefinitions = function() {
	this.isValidDefinition = false;
	this.errors = null;
	this.warnings = null;
	this.advices = null;
    this.content = null;
    this.version = "1.0";
    this.xmlContent = null;
  }
  BPMNDefinitions.prototype = {
	  setContent:function (newContent) {
	         content = newContent;
	  },
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
      },
      getContent:function (bpmnDefinition) {
         return content;
      },
      getXmlContent:function (bpmnDefinition) {
         return xmlContent;
      },
      saveContent:function (url) {
      
      },
  };

  ngBpmn.factory('bpmnDefinitionsService', function (processService, collaborationService, choreographyService, LOG_LEVEL, $http, $log) {    
    return {
      loadDefinitions : function(url, callback) {
    	var bpmnDefinitions = new BPMNDefinitions();
    	$http.get(url).success(function(data, status, headers, config) {
    		bpmnDefinitions.content = data;
    		$log.debug("url loaded successfully : "+url);
    		$log.debug(data);
    	    if (callback) callback(true, bpmnDefinitions);
    	  }).
    	  error(function(data, status, headers, config) {
    		if (callback) callback(false, null);
    	  });
        return bpmnDefinitions;
      },
      getDefinitions : function(content, callback) {
        return null;
      } 
    };
  });
  ngBpmn.factory('processService', function (LOG_LEVEL) {
     return {
     };
   }
  ); 
  ngBpmn.factory('collaborationService', function (LOG_LEVEL) {
     return {
     };
   }
  );
  ngBpmn.factory('choreographyService', function (LOG_LEVEL) {
     return {
     };
   }
  );
})();