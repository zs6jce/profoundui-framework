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



pui.widgets.add({
  name: "password field",
  tag: "input",
  inputType: "password",
  newId: "Password",

  propertySetters: {
  
    "field type": function(parms) {
      parms.dom.value = parms.evalProperty("value");
      if (!parms.design && pui.iPadEmulation && !pui.iPhoneEmulation) {
        addEvent(parms.dom, "focus", function(event) {
          getObj("ipadKeyboard").style.display = "";
        });
        addEvent(parms.dom, "blur", function(event) {
          getObj("ipadKeyboard").style.display = "none";
        });
      }
    },
    
    "value": function(parms) {
      parms.dom.value = parms.value;
    }
  
  }
  
});

