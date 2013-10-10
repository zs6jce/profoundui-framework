//  Profound UI Runtime  -- A Javascript Framework for Rich Displays
//  Copyright (c) 2013 Profound Logic Software, Inc.
//
//  This file is part of the Profound UI Runtime
//
//  The Profound UI Runtime is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Lesser General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  The Profound UI Runtime is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public License
//  In the COPYING and COPYING.LESSER files included with the Profound UI Runtime.
//  If not, see <http://www.gnu.org/licenses/>.


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

Atrium["getUser"] = function() {

	var par = parent.parent || parent;
	if (!par || !par["Atrium"]) return;	
	
	return par["Atrium"]["api"]["getUser"]();  

}

Atrium["runPCCommand"] = function(command) {
  
  var par = parent.parent || parent;
  if (!par || !par["Atrium"]) return;
  
  par["Atrium"]["api"]["runPCCommand"](command);
  
}
