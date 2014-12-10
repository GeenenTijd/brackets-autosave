/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';

	var DocumentManager = brackets.getModule('document/DocumentManager');
	var Commands = brackets.getModule('command/Commands');
	var CommandManager = brackets.getModule('command/CommandManager');
	var AppInit = brackets.getModule("utils/AppInit");

	function checkForChanges() {
		var currentDocument = DocumentManager.getCurrentDocument();
		if (currentDocument && currentDocument.isDirty) {
			CommandManager.execute(Commands.FILE_SAVE, {
				doc: currentDocument
			});
		}
	}

	AppInit.appReady(function () {
		window.setInterval(checkForChanges, 3000);
	});
});