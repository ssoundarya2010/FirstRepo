sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Button"
], function(Control, RatingIndicator, Button) {
	"use strict";

	return Control.extend("zcustomControl_1.control.Rating", {
		metadata: {
			properties: { //properties of the custom control
				value: {
					type: "float",
					defaultValue: 0
				}
			},
			aggregations: { //controls that we would be using
				_rating: {
					type: "sap.m.RatingIndicator",
					multiple: false,
					visibility: "hidden"
				},
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},
			events: { //events for the cusom comtrol
				valueSubmit: {
					parameters: {
						value: {
							type: "float"
						}
					}
				}
			}
		},
		init: function() {
			// instantiate aggregated controls mentioned in metadata
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				maxValue: 5,
				liveChange: this._onRate.bind(this)
			}).addStyleClass("sapUiTinyMarginEnd"));

			this.setAggregation("_button", new Button({
				text: "Submit",
				press: this._onSubmit.bind(this),
				enabled: false
			}));
		},
		_onSubmit: function() {
			this.fireEvent("valueSubmit", {
				value: this.getValue()
			});
			this.getAggregation("_button").setEnabled(false);
		},
		_onRate: function(oEvent) {
			this.setValue(oEvent.getParameter("value"));
			this.getAggregation("_button").setEnabled(true);
		},
		renderer: function(oRm, oControl) {
			//oRm=>Renderer manager to render dom content, 

			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.addClass("sapUiSmallMarginBeginEnd"); //adds margin to left & right of the control
			oRm.writeClasses();
			oRm.write(">");
			//after the frame is created we are adding the aggregation controls
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_button"));

			oRm.write("</div>");

		}
	});
});