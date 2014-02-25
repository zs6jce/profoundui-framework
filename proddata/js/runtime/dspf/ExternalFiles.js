<<<<<<< HEAD
//  Profound UI Runtime  -- A Javascript Framework for Rich Displays
//  Copyright (c) 2014 Profound Logic Software, Inc.
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


=======
>>>>>>> Initial import into GIT

/**
 * External Files Class
 * @constructor
 */

pui.ExternalFiles = function() {
  var cssLinks = {};
  var jsScripts = {};
  var me = this;
  var head;
  
  this.init = function() {
    if (head == null) head = document.getElementsByTagName("head")[0];
  }

  this.addCSSFile = function(path) {
    if (typeof path != "string") return;
    path = trim(path);
    if (path == "") return;
    if (cssLinks[path] != null) return;  // already there
    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("media", "screen");
<<<<<<< HEAD
    css.setAttribute("href", pui.normalizeURL(path));
=======
    css.setAttribute("href", path);
>>>>>>> Initial import into GIT
    cssLinks[path] = css;
    head.appendChild(css);
  }

<<<<<<< HEAD
  this.addJSFile = function(path, callback, checkIfLoadedOnly) {
    if (typeof path != "string") return false;
    path = trim(path);
    if (path == "") return false;
    if (jsScripts[path] != null) return false;  // already there
    if (checkIfLoadedOnly == true) return true;

    var done = false;
    var script = document.createElement("script");
    script.type= "text/javascript";
    script.onreadystatechange= function () {
      if (script.readyState == "complete" || script.readyState == "loaded") {
        if (!done && callback != null) callback();
        done = true;
      }
    }
    script.onload = function() {
      if (!done && callback != null) callback();
      done = true;
    };
    jsScripts[path] = script;
    script.src = pui.normalizeURL(path);
    head.appendChild(script);

    return true;
  }
  
  this.load = function(parms) {
=======
  this.addJSFile = function(path) {
    if (typeof path != "string") return;
    path = trim(path);
    if (path == "") return;
    if (jsScripts[path] != null) return;  // already there
    var js = document.createElement("script");
    js.setAttribute("type","text/javascript");
    js.setAttribute("src", path);
    jsScripts[path] = js;
    head.appendChild(js);
  }
  
  this.load = function(format) {
>>>>>>> Initial import into GIT
    me.init();
    
    var props = null;
    var isDesignMode;
<<<<<<< HEAD
    if (parms != null) {
      isDesignMode = false;
      props = parms.metaData.screen;      
=======
    if (format != null) {
      isDesignMode = false;
      props = format.metaData.screen;      
>>>>>>> Initial import into GIT
    }
    else {
      isDesignMode = true;
      props = toolbar.designer.screenProperties[toolbar.designer.currentScreen.screenId];      
    }
    
    var cssPaths = {};
    
    // get new css paths
    var idx = 1;
    var path = props["external css"];
<<<<<<< HEAD
    if (!isDesignMode) path = pui.evalBoundProperty(path, parms.data, parms.ref);
=======
    if (!isDesignMode) path = pui.evalBoundProperty(path, format.data, format.ref);
>>>>>>> Initial import into GIT
    while (path != null) {
      cssPaths[path] = true;
      idx++;
      path = props["external css " + idx];
<<<<<<< HEAD
      if (!isDesignMode) path = pui.evalBoundProperty(path, parms.data, parms.ref);
=======
      if (!isDesignMode) path = pui.evalBoundProperty(path, format.data, format.ref);
>>>>>>> Initial import into GIT
    }
    
    // unload old css paths if they aren't in the list of new paths
    var toUnload = [];
    for (var path in cssLinks) {
      if (cssPaths[path] != true) toUnload.push(path);
    }
    for (var i = 0; i < toUnload.length; i++) {
      var path = toUnload[i];
      var css = cssLinks[path];
      head.removeChild(css);
      delete cssLinks[path];
    }
    
    // load new css paths
    for (var path in cssPaths) {
      me.addCSSFile(path);
    }
    
    // load javascript files (there is never any unloading of javascript files and they are never loaded in design mode)
<<<<<<< HEAD
    var jsLoadCount = 0;
    if (isDesignMode != true) {
      // first pass (get jsLoadCount)
      idx = 1;
      path = pui.evalBoundProperty(props["external javascript"], parms.data, parms.ref);
      while (path != null) {
        var notYetLoaded = me.addJSFile(path, function() {}, true);  // check if alrady loaded, does not actually load the file
        if (notYetLoaded) {
          parms.runOnload = false;  // don't run onload from render.js ... it will run here as a callback instead once all scripts are loaded
          jsLoadCount++;
        }
        idx++;
        path = pui.evalBoundProperty(props["external javascript " + idx], parms.data, parms.ref);
      }

      // second pass (load files and run onload event when last file is loaded)
      if (jsLoadCount > 0) {
        idx = 1;
        path = pui.evalBoundProperty(props["external javascript"], parms.data, parms.ref);
        while (path != null) {
          me.addJSFile(path, function() {
            jsLoadCount -= 1;
            if (jsLoadCount != 0) return;
  
            // execute global onload event
            if (pui["onload"] != null && typeof pui["onload"] == "function") {
              pui["onload"](parms);
            }
          
            // execute format's onload event
          	var onloadProp = props["onload"];
          	if (onloadProp != null && onloadProp != "") {
          	  try {
          	    eval('var format = "' + props["record format name"] + '";');
          	    eval('var file = "' + parms.file + '";');
          	    eval(onloadProp);
          	  }
          	  catch(err) {
          	    pui.alert("Onload Error:\n" + err.message);
          	  }
          	}
  
          });
          idx++;
          path = pui.evalBoundProperty(props["external javascript " + idx], parms.data, parms.ref);
        }
=======
    if (isDesignMode != true) {
      idx = 1;
      path = pui.evalBoundProperty(props["external javascript"], format.data, format.ref);
      while (path != null) {
        me.addJSFile(path);
        idx++;
        path = pui.evalBoundProperty(props["external javascript " + idx], format.data, format.ref);
>>>>>>> Initial import into GIT
      }
    }
  }
  
}


pui.externalFiles = new pui.ExternalFiles();


