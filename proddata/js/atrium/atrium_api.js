if (!window["Atrium"]) window["Atrium"] = new Object();

Atrium["launchURL"] = function(url, title, closable) {

	if (!parent["Atrium"]) return;
	return parent["Atrium"]["api"]["launchURL"](url, title, closable); 
	
}

Atrium["closeTab"] = function(tab) {
	
	var par = parent.parent || parent;
	if (!par || !par["Atrium"]) return;

	par["Atrium"]["api"]["closeTab"](window, tab);

	
}

Atrium["launchItem"] = function(itemId, closable, callback) {

	if (!parent["Atrium"]) return;	
	return parent["Atrium"]["api"]["launchItem"](itemId, closable, callback);
	
}

Atrium["activateTab"] = function(tab) {

	if (!parent["Atrium"]) return;
	parent["Atrium"]["api"]["activateTab"](tab);
	
}

Atrium["closeAllTabs"] = function(keepHomePage) {
	
	if (!parent["Atrium"]) return;	
	parent["Atrium"]["api"]["closeAllTabs"](window, keepHomePage);
	
}

Atrium["getCurrentTab"] = function() {
	
	if (!parent["Atrium"]) return;
	return parent["Atrium"]["api"]["getCurrentTab"](window);
	
}

Atrium["getToken"] = function() {

	var par = parent.parent || parent;
	if (!par || !par["Atrium"]) return;	
	
	return par["Atrium"]["api"]["getToken"]();

}