sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("zcustomControl_1.controller.View1", {
		
		onInit: function () {

			//var a = 10;
			this._fragments = [];

				MessageToast.show("test");

			var a =  20; 
		    var b=10;


		},
		onButtonPressed: function(oEvent){
				var value = oEvent.getParameter("value");
				MessageToast.show("Your new Rating : " + value);
		}
	});
});