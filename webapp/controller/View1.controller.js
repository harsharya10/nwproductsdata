sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("nwproductsdatav.controller.View1", {
        onInit: function () {
            // MessageToast.show("Hello World")
            //Below code will call the Northwind Odata service
            var oModel = this.getOwnerComponent().getModel();
            debugger;
            oModel.read('/Products', {
                success: (odata) => {
                    debugger;
                    var json1 = new JSONModel();
                    json1.setData(odata.results);
                    this.getView().setModel(json1,'prod');
                },
                error: (err) => {
                    debugger;
                }
            })

        },

        // onAfterRendering: function () {

        // },

        // onBeforeRenderning: function () {

        // },

        // onExit: function () {

        // },

        _greetMe: function (oEvent) {
            MessageToast.show("Hello SAP UI5 Learner")
        }
    });
});