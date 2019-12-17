/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'sap/ui/Device',
	'sap/ui/base/Object',
	'sap/ui/core/ValueStateSupport',
	'sap/ui/core/Popup',
	'sap/ui/core/library',
	"sap/ui/thirdparty/jquery",
	"sap/ui/dom/jquery/Aria" // jQuery Plugin "addAriaDescribedBy", "removeAriaDescribedBy"
],
	function(
		Device,
		BaseObject,
		ValueStateSupport,
		Popup,
		coreLibrary,
		jQuery
	) {
		"use strict";

		// shortcut for sap.ui.core.ValueState
		var ValueState = coreLibrary.ValueState;

		/**
		 * Creates a <code>sap.m.delegate.ValueState</code> delegate that can be attached to controls that require
		 * a value state message popup.
		 *
		 * @example <caption>Example of usage:</caption>
		 *
		 * <pre>
		 *	MyControl.prototype.init = function() {
		 *		this._oValueStateMessage = new ValueStateMessage(this);
		 *	};
		 *
		 *  MyControl.prototype.onfocusin = function(oEvent) {
		 *  	this._oValueStateMessage.open();
		 *  };
		 *
		 *  MyControl.prototype.onfocusout = function(oEvent) {
		 *  	this._oValueStateMessage.close();
		 *  };
		 *
		 *	MyControl.prototype.exit = function() {
		 *
		 *		if (this._oValueStateMessage) {
		 *			this._oValueStateMessage.destroy();
		 *		}
		 *
		 *		this._oValueStateMessage = null;
		 *	};
		 * </pre>
		 *
		 * <b>Preconditions:</b>
		 * The given control must implement the following interface:
		 *
		 * <code>
		 * .getValueState()
		 * .getValueStateText()
		 * .getFocusDomRef()
		 * .getDomRefForValueStateMessage()
		 * </code>
		 *
		 * @extends sap.ui.base.Object
		 * @param {sap.ui.core.Control} oControl The control for which this value state message is the delegate
		 * @constructor
		 * @private
		 * @alias sap.m.delegate.ValueState
		 * @version 1.42
		 * @author SAP SE
		 */
		var ValueStateMessage = BaseObject.extend("sap.m.delegate.ValueState", /** @lends sap.m.delegate.ValueState.prototype */ {
			constructor: function(oControl) {
				BaseObject.apply(this, arguments);
				this._oControl = oControl;
				this._oPopup = null;
			}
		});

		/**
		 * Opens value state message popup.
		 *
		 * @protected
		 */
		ValueStateMessage.prototype.open = function() {
			var oControl = this._oControl,
				oPopup = this.getPopup(),
				oMessageDomRef = this.createDom(),
				mDock = Popup.Dock,
				$Control = jQuery(oControl.getDomRefForValueStateMessage());

			if (!oControl || !oPopup || !oMessageDomRef) {
				return;
			}

			oPopup.setContent(oMessageDomRef);
			oPopup.close(0);
			if (oPopup.getContent()) {
				oPopup.getContent().style.maxWidth = oControl.getDomRef().offsetWidth + "px";
			} else {
				oPopup.getContent().style.maxWidth = "";
			}
			oPopup.open(
				this.getOpenDuration(),
				mDock.BeginTop,
				mDock.BeginBottom,
				oControl.getDomRefForValueStateMessage(),
				null,
				null,
				Device.system.phone ? true : Popup.CLOSE_ON_SCROLL
			);

			var $DomRef = jQuery(oMessageDomRef);

			// check whether popup is below or above the input
			if ($Control.offset().top < $DomRef.offset().top) {
				$DomRef.addClass("sapMValueStateMessageBottom");
			} else {
				$DomRef.addClass("sapMValueStateMessageTop");
			}

			jQuery(oControl.getFocusDomRef()).addAriaDescribedBy(this.getId());
		};

		/**
		 * Closes value state message popup.
		 *
		 * @protected
		 */
		ValueStateMessage.prototype.close = function() {
			var oControl = this._oControl,
				oPopup = this._oPopup;

			if (oPopup) {
				oPopup.close(0);
			}

			if (oControl) {
				jQuery(oControl.getFocusDomRef()).removeAriaDescribedBy(this.getId());
			}
		};

		ValueStateMessage.prototype.getId = function() {
			var oControl = this._oControl;

			if (!oControl) {
				return "";
			}

			return (typeof oControl.getValueStateMessageId === "function") ? oControl.getValueStateMessageId() : oControl.getId() + "-message";
		};

		ValueStateMessage.prototype.getOpenDuration = function() {
			var oControl = this._oControl;

			if (!oControl) {
				return 0;
			}

			return (oControl.iOpenMessagePopupDuration === undefined) ? 0 : oControl.iOpenMessagePopupDuration;
		};

		/**
		 * Creates the value state message popup.
		 *
		 * @param {string} [sID] ID for the new message popup; generated automatically if no ID is given
		 * @returns {sap.ui.core.Popup} The popup instance object
		 */
		ValueStateMessage.prototype.createPopup = function(sID) {
			sID = sID || this.getId();

			if (this._oPopup) {
				return this._oPopup;
			}

			this._oPopup = new Popup(document.createElement("span"), false, false, false);
			this._oPopup.attachClosed(function() {
				jQuery(document.getElementById(sID)).remove();
			});
			this._oPopup.attachOpened(function() {
				var content = this._oPopup.getContent();
				if (content && this._oControl) {
					content.style.zIndex = this._getCorrectZIndex();
				}
			}.bind(this));

			return this._oPopup;
		};

		/**
		 * Gets the value state message popup, creating it if necessary by calling
		 * the <code>createPopup()</code> method.
		 *
		 * @returns {sap.ui.core.Popup} The popup instance object
		 */
		ValueStateMessage.prototype.getPopup = function() {

			if (!this._oControl) {
				return null;
			}

			return this.createPopup();
		};

		/**
		 * Creates the value state message HTML elements.
		 *
		 * @returns {object} The value state message root HTML element
		 */
		ValueStateMessage.prototype.createDom = function() {
			var oControl = this._oControl;

			if (!oControl) {
				return null;
			}

			var sState = oControl.getValueState(),
				sText = oControl.getValueStateText() || ValueStateSupport.getAdditionalText(oControl),
				sClass = "sapMValueStateMessage sapMValueStateMessage" + sState,
				oRB = sap.ui.getCore().getLibraryResourceBundle("sap.m");

			if (sState === ValueState.Success || sState === ValueState.None) {
				sClass = "sapUiInvisibleText";
				sText = "";
			}

			var sID = this.getId();
			var oMessageDomRef = document.createElement("div");
			oMessageDomRef.id = sID;
			oMessageDomRef.className = sClass;
			oMessageDomRef.setAttribute("role", "tooltip");
			oMessageDomRef.setAttribute("aria-live", "assertive");

			var oAccDomRef = document.createElement("span");
			oAccDomRef.id = sID + "hidden";

			var bIsIE = Device.browser.msie;

			if (bIsIE) {
				oAccDomRef.className = "sapUiHidden";
				oAccDomRef.setAttribute("aria-hidden", "true");
			} else {
				oAccDomRef.className = "sapUiPseudoInvisibleText";
			}

			if (sState !== ValueState.None) {
				oAccDomRef.appendChild(document.createTextNode(oRB.getText("INPUTBASE_VALUE_STATE_" + sState.toUpperCase())));
			}

			var oTextDomRef = document.createElement("span");
			oTextDomRef.id = sID + "-text";

			if (!oControl.isA('sap.m.Select') && bIsIE) {
				oTextDomRef.setAttribute("aria-hidden", "true");
			}

			oTextDomRef.appendChild(document.createTextNode(sText));

			oMessageDomRef.appendChild(oAccDomRef);
			oMessageDomRef.appendChild(oTextDomRef);
			return oMessageDomRef;
		};

		ValueStateMessage.prototype.destroy = function() {

			if (this._oPopup) {
				this._oPopup.destroy();
				this._oPopup = null;
			}

			this._oControl = null;
		};

		/**
		 * Gets the z-index of the popup, so it won't be shown above some other popups.
		 * @return {int} The correct z-index
		 * @private
		 */
		ValueStateMessage.prototype._getCorrectZIndex = function() {

			var aParents = this._oControl.$().parents().filter(function() {
				var sZIndex = jQuery(this).css('z-index');
				return sZIndex && sZIndex !== 'auto' && sZIndex !== '0';
			});

			if (!aParents.length) {
				return 1;
			}

			var iHighestZIndex = 0;

			aParents.each(function () {
				var iZIndex = parseInt(jQuery(this).css('z-index'));

				if (iZIndex > iHighestZIndex) {
					iHighestZIndex = iZIndex;
				}
			});

			return iHighestZIndex + 1;
		};

		return ValueStateMessage;
	});