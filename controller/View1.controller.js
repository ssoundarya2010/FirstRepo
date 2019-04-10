sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("zcustomControl_1.controller.View1", {
		onRatingChanged: function(oEvent) {
			var value = oEvent.getParameter("value");
			MessageToast.show("Your new Rating is " + value);
		},
		onInit: function(){
			
		}
	});
});