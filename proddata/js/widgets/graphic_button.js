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

function buildGraphicButton(parms) {
  var dom = parms.dom;
  var value = parms.evalProperty("value");
  var imageSource = parms.evalProperty("image source");
  if (parms.properties["value"] == "script: value") {
    if (value == "") value = parms.dom.innerHTML;
    if (value.substr(0,5).toLowerCase() == "<img ") {
      var pos = value.indexOf(">");
      if (pos >= 0) {
        value = value.substr(pos + 1);
      }
      else {
        value = "";
      }
    }
  }
  var graphic = "";
  if (imageSource != null && imageSource != "") {
<<<<<<< HEAD
    graphic = '<img src="' + pui.normalizeURL(imageSource) + '" style="vertical-align:middle;padding-bottom:2px;" /> ';
=======
    graphic = '<img src="' + imageSource + '" style="vertical-align:middle;padding-bottom:2px;" /> ';
>>>>>>> Initial import into GIT
  }
  dom.setAttribute("type", "button");
  dom.innerHTML = graphic + value;
}


pui.widgets.add({
  name: "graphic button",
  tag: "button",
  inputType: "button",
  newValue: "Accept",
  inlineEdit: true,
  defaults: {
<<<<<<< HEAD
    "width": !pui["is_quirksmode"] ? "100px" : null,
=======
    "width": !quirksMode ? "100px" : null,
>>>>>>> Initial import into GIT
    "image source": "/profoundui/proddata/images/accept.png",
    color: "#009933",
    "font weight": "bold"
  },

  propertySetters: {
  
    "field type": function(parms) {
      buildGraphicButton(parms);
    },
    
    "value": function(parms) {
      parms.properties["value"] = parms.value;
      buildGraphicButton(parms);
    },
    
    "image source": function(parms) {
      parms.properties["image source"] = parms.value;
      buildGraphicButton(parms);
    }
    
  }
  
});



