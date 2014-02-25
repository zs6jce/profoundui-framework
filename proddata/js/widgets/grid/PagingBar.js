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

pui["next link text"] = "Next";
pui["previous link text"] = "Previous";
pui["csv export text"] = "Export to Excel";
>>>>>>> Initial import into GIT



/**
 * Paging Bar Class
 * @constructor
 */

pui.PagingBar = function() {

  this.x = 100;
  this.y = 100;
  this.width = 500;
  this.csvExport = false;
  this.showPagingControls = false;
  this.showPageNumber = false;
  this.showBar = false;
  this.pageUpCondition = null;
  this.pageDownCondition = null;
  this.pageUpResponseDefined = false;
  this.pageDownResponseDefined = false;
  this.pageNumber = 1;
  this.container = null;
  this.grid = null;

  this.prevImg = null;
  this.prevLink = null;
  this.nextImg = null;
  this.nextLink = null;
  
<<<<<<< HEAD
=======
  var prevArrowSrc = pui.normalizeURL("/profoundui/proddata/images/grids/prev.gif");
  var prevArrowDisabledSrc = pui.normalizeURL("/profoundui/proddata/images/grids/prev-disabled.gif");
  var nextArrowSrc = pui.normalizeURL("/profoundui/proddata/images/grids/next.gif");
  var nextArrowDisabledSrc = pui.normalizeURL("/profoundui/proddata/images/grids/next-disabled.gif");
  var exportImgSrc = pui.normalizeURL("/profoundui/proddata/images/grids/excel.gif");
  
>>>>>>> Initial import into GIT
  var div;
  var exportImg;
  var exportLink;
  var spacesSpan1;
  var spacesSpan2;
  var pageSpan;
  
  var me = this;
  
  function autoPageUp() {
    if (me.prevLink.disabled) return;
<<<<<<< HEAD
    if (context != "genie") {
      if (me.pageUpResponseDefined) return;
      if (me.grid.designMode) return;
      if (me.grid.atTop()) return;
    }
=======
    if (me.pageUpResponseDefined) return;
    if (me.grid.designMode) return;
    if (me.grid.atTop()) return;
>>>>>>> Initial import into GIT
    me.grid.pageUp();  
  }
  
  function autoPageDown() {
    if (me.nextLink.disabled) return;
<<<<<<< HEAD
    if (context != "genie") {
      if (me.pageDownResponseDefined) return;
      if (me.grid.designMode) return;
      if (me.grid.atBottom()) return;
    }
=======
    if (me.pageDownResponseDefined) return;
    if (me.grid.designMode) return;
    if (me.grid.atBottom()) return;
>>>>>>> Initial import into GIT
    me.grid.pageDown();
  }
  
  this.init = function() {
    div = document.createElement("div");
    div.style.position = "absolute";
<<<<<<< HEAD
    div.style.backgroundRepeat = "repeat-x";
    div.style.textAlign = "center";
    div.style.paddingTop = "5px";
=======
    //div.style.backgroundImage = divBackgroundSrc;
    div.style.backgroundRepeat = "repeat-x";
    div.style.textAlign = "center";
    div.style.paddingTop = "5px";
    div.style.border = "1px solid #CCCCFF";
>>>>>>> Initial import into GIT
    div.style.overflow = "hidden";
    div.onselectstart = function(e) { return false };
    if (typeof div.style.MozUserSelect!="undefined") div.style.MozUserSelect = "none";

    me.container.appendChild(div);

<<<<<<< HEAD
    exportImg = document.createElement("div");
=======
    exportImg = document.createElement("img");
    exportImg.src = exportImgSrc;
>>>>>>> Initial import into GIT
    exportImg.style.cursor = "pointer";
    exportImg.style.position = "absolute";
    exportImg.style.top = "4px";
    exportImg.style.left = "4px";
<<<<<<< HEAD
    exportImg.style.height = "14px";
    exportImg.style.padding = "1px";
    exportImg.style.width = "14px";
=======
>>>>>>> Initial import into GIT
    exportImg.onclick = function() {
      if (me.grid.designMode) return;
      me.grid.exportCSV();
    }
<<<<<<< HEAD
    pui.addCssClass(exportImg,"export-image-icon");
    div.appendChild(exportImg);

    exportLink = document.createElement("span");
    exportLink.innerHTML = pui.getLanguageText("runtimeText", "csv export text");
    exportLink.style.position = "absolute";
    exportLink.style.top = "5px";
    exportLink.style.left = "24px";
=======
    div.appendChild(exportImg);

    exportLink = document.createElement("span");
    exportLink.innerHTML = pui["csv export text"];
    exportLink.style.position = "absolute";
    exportLink.style.top = "5px";
    exportLink.style.left = "24px";
    exportLink.style.color = "#2C71EE";
>>>>>>> Initial import into GIT
    exportLink.style.textDecoration = "underline";
    exportLink.style.cursor = "pointer";
    exportLink.onclick = function() {
      if (me.grid.designMode) return;
      me.grid.exportCSV();
    }
    exportLink.className = "paging-link";
    div.appendChild(exportLink);

<<<<<<< HEAD
    me.prevImg = document.createElement("div");
    me.prevImg.className = "prev-image-icon";
    me.prevImg.style.verticalAlign = "top";
    me.prevImg.style.display = "inline-block";
    me.prevImg.style.height = "16px";
    me.prevImg.style.width = "16px";
=======
    me.prevImg = document.createElement("img");
    me.prevImg.src = prevArrowSrc;
>>>>>>> Initial import into GIT
    me.prevImg.shortcutKey = "PageUp";
    me.prevImg.responseValue = "0";
    me.prevImg.parentPagingBar = me;
    me.prevImg.prevPage = true;
    me.prevImg.onmouseover = function() {
      if (me.prevImg.disabled) return;
<<<<<<< HEAD
      pui.addCssClass(me.prevLink, "paging-link-hover");
    }
    me.prevImg.onmouseout = function() {
      if (me.prevImg.disabled) return;
      pui.removeCssClass(me.prevLink, "paging-link-hover");
=======
      me.prevLink.style.color = "#0C51CE";
    }
    me.prevImg.onmouseout = function() {
      if (me.prevImg.disabled) return;
      me.prevLink.style.color = "#2C71EE";
>>>>>>> Initial import into GIT
    }
    me.prevImg.onclick = function() {
      autoPageUp();
    }
    div.appendChild(me.prevImg);
      
    me.prevLink = document.createElement("span");
<<<<<<< HEAD
    me.prevLink.innerHTML = pui.getLanguageText("runtimeText", "previous link text");
=======
    me.prevLink.innerHTML = pui["previous link text"];
>>>>>>> Initial import into GIT
    me.prevLink.href = "javascript:void(0)";
    me.prevLink.style.verticalAlign = "top";
    me.prevLink.shortcutKey = "PageUp";
    me.prevLink.responseValue = "0";
    me.prevLink.parentPagingBar = me;
    me.prevLink.prevPage = true;
    me.prevLink.onmouseover = function() {
<<<<<<< HEAD
      if(me.prevLink.disabled)
        return;
      pui.addCssClass(me.prevLink, "paging-link-hover");
    }
    me.prevLink.onmouseout = function() {
      if(me.prevLink.disabled)
        return;
      pui.removeCssClass(me.prevLink, "paging-link-hover");
=======
      if (me.prevLink.disabled) return;
      me.prevLink.style.color = "#0C51CE";
    }
    me.prevLink.onmouseout = function() {
      if (me.prevLink.disabled) return;
      me.prevLink.style.color = "#2C71EE";
>>>>>>> Initial import into GIT
    }
    me.prevLink.onclick = function() {
      autoPageUp();
    }
    me.prevLink.className = "paging-link";
    div.appendChild(me.prevLink);

    spacesSpan1 = document.createElement("span");
    spacesSpan1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    div.appendChild(spacesSpan1);

    pageSpan = document.createElement("span");    
    pageSpan.style.fontFamily = "Arial";
    pageSpan.style.fontSize = "11px";
    pageSpan.style.fontWeight = "bold";
    pageSpan.style.verticalAlign = "top";
    div.appendChild(pageSpan);
        
    spacesSpan2 = document.createElement("span");
    spacesSpan2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    div.appendChild(spacesSpan2);

    me.nextLink = document.createElement("span");
<<<<<<< HEAD
    me.nextLink.innerHTML = pui.getLanguageText("runtimeText", "next link text");
=======
    me.nextLink.innerHTML = pui["next link text"];
>>>>>>> Initial import into GIT
    me.nextLink.href = "javascript:void(0)";
    me.nextLink.style.verticalAlign = "top";
    me.nextLink.shortcutKey = "PageDown";
    me.nextLink.responseValue = "0";
    me.nextLink.parentPagingBar = me;
    me.nextLink.nextPage = true;
    me.nextLink.onmouseover = function() {
      if (me.nextLink.disabled) return;
<<<<<<< HEAD
      pui.addCssClass(me.nextLink, "paging-link-hover");
    }
    me.nextLink.onmouseout = function() {
      if (me.nextLink.disabled) return;
      pui.removeCssClass(me.nextLink, "paging-link-hover");
=======
      me.nextLink.style.color = "#0C51CE";
    }
    me.nextLink.onmouseout = function() {
      if (me.nextLink.disabled) return;
      me.nextLink.style.color = "#2C71EE";
>>>>>>> Initial import into GIT
    }
    me.nextLink.onclick = function() {
      autoPageDown();
    }
    me.nextLink.className = "paging-link";
    div.appendChild(me.nextLink);
  
<<<<<<< HEAD
    me.nextImg = document.createElement("div");
    me.nextImg.className = "next-image-icon"; 
    me.nextImg.style.verticalAlign = "top";
    me.nextImg.style.display = "inline-block";
    me.nextImg.style.height = "16px";
    me.nextImg.style.width = "16px"; 
=======
    me.nextImg = document.createElement("img");
    me.nextImg.src = nextArrowSrc;    
>>>>>>> Initial import into GIT
    me.nextImg.shortcutKey = "PageDown";
    me.nextImg.responseValue = "0";
    me.nextImg.parentPagingBar = me;
    me.nextImg.nextPage = true;
    me.nextImg.onmouseover = function() {
      if (me.nextImg.disabled) return;
<<<<<<< HEAD
      pui.addCssClass(me.nextLink, "paging-link-hover");
    }
    me.nextImg.onmouseout = function() {
      if (me.nextImg.disabled) return;
      pui.removeCssClass(me.nextLink, "paging-link-hover");
=======
      me.nextLink.style.color = "#0C51CE";
    }
    me.nextImg.onmouseout = function() {
      if (me.nextImg.disabled) return;
      me.nextLink.style.color = "#2C71EE";
>>>>>>> Initial import into GIT
    }
    me.nextImg.onclick = function() {
      autoPageDown();
    }
    div.appendChild(me.nextImg);

<<<<<<< HEAD
    if (!me.pageDownResponseDefined || !me.pageUpResponseDefined) {
     
      pui.autoPageGrid = true;

    }

=======
>>>>>>> Initial import into GIT
    if (!me.grid.designMode && pui.runtimeContainer != null && div != null && div.parentNode != null) {
      function handleKeyDown(e) {
        if (div == null || div.parentNode == null) {
          removeEvent(pui.runtimeContainer, "keydown", handleKeyDown);
          return;
        }
      	if (!e) e = window.event;
        var key = e.keyCode;
        if (key == 33) autoPageUp();
        if (key == 34) autoPageDown();
      }
      addEvent(pui.runtimeContainer, "keydown", handleKeyDown);
    }

    function mousedown(event) {
      if (!me.grid.designMode) return;
      me.grid.tableDiv.designItem.designer.hideDialogs();
      me.grid.selectMe();
    
      if (pui.isRightClick(event)) {
        if (me.grid.tableDiv.designItem) {
          me.grid.tableDiv.designItem.designer.globalRightClickMenu.hide();
          me.grid.tableDiv.designItem.designer.showContextMenu(event);
        }
        designUtils.preventEvent(event);
        if (event.stopPropagation) event.stopPropagation();      
        return false;
      }
      if (me.grid.tableDiv.designItem != null && me.grid.tableDiv.designItem.designer.rightClickMenu != null) {
        me.grid.tableDiv.designItem.designer.rightClickMenu.hide();
      }
    
      if (me.lockedInPlace) {
        designUtils.preventEvent(event);
        return;
      }
      
      var cursorStartX = getMouseX(event);
      var cursorStartY = getMouseY(event);
      var startGridX = parseInt(me.grid.tableDiv.style.left);
      var startGridY = parseInt(me.grid.tableDiv.style.top);
      me.grid.doThisToTableDivs(function(domObj) {
        domObj.startLeft = parseInt(domObj.style.left);
        domObj.startTop = parseInt(domObj.style.top);
      });
      function mousemove(event) {
        var y = getMouseY(event) - cursorStartY;
        var x = getMouseX(event) - cursorStartX;
        var designItem = me.grid.tableDiv.designItem;
        if (designItem != null) {
          var selection = designItem.designer.selection;
          if (selection.snapToGrid) {
            x += me.grid.tableDiv.startLeft;
            y += me.grid.tableDiv.startTop;
            x = selection.snap(x, pui.multX);
            y = selection.snap(y, pui.multY, (context == "genie" ? 3 : 0));
            x -= me.grid.tableDiv.startLeft;
            y -= me.grid.tableDiv.startTop;
          }
        }
        me.grid.doThisToTableDivs(function(domObj) {
          domObj.style.top = (domObj.startTop + y) + "px";
          domObj.style.left = (domObj.startLeft + x) + "px";
        });
        if (designItem != null) designItem.moved = true;
        me.grid.setScrollBar();
        var psBar = pui.designer.psBar;
        if (psBar.container == null) {
          psBar.container = document.body;
          psBar.init();
        }
        psBar.set(me.grid.tableDiv.designItem);
        psBar.show();      
      }
      function mouseup() {
        if (me.grid.tableDiv.designItem != null) {
          if (me.grid.tableDiv.designItem.moved) {
            me.grid.tableDiv.designItem.designer.addSelectionToTabs();
            if (context == "dspf") pui.ide.refreshRibbon();
          }
          else {
            me.grid.tableDiv.designItem.designer.undo.removeLastGroup();
          }
        }
        me.grid.sendToDesigner();
        var psBar = pui.designer.psBar;
        if (psBar != null && psBar.container != null) psBar.hide();
        removeEvent(document, "mousemove", mousemove);
        removeEvent(document, "mouseup", mouseup);
      }
      addEvent(document, "mousemove", mousemove);
      addEvent(document, "mouseup",   mouseup);
      preventEvent(event);
      if (me.grid.designMode && me.grid.tableDiv.designItem != null) {
        me.grid.tableDiv.designItem.moved = false;
        var designer = me.grid.tableDiv.designItem.designer;
        var selection = designer.selection;
        var undoText = "Move Selection";
        if (selection.resizers.length == 1) undoText = "Move Grid";
        designer.undo.start(undoText);
        designer.undo.noRefresh = true;
        selection.addToUndo(["left", "top", "parent tab panel", "parent tab panel"]);
        designer.undo.noRefresh = false;
      }      
    }
    addEvent(div, "mousedown", mousedown);    
  }
  
  this.position = function() {  
    if ((me.csvExport || me.showPagingControls || me.showPageNumber || me.showBar) && 
        me.grid.tableDiv.style.display != "none" && me.grid.tableDiv.style.visibility != "hidden") {  
      div.style.left = me.x + "px";
      div.style.top = me.y + "px";
      div.style.width = me.width + "px";
      div.style.display = "";
      div.style.zIndex = me.grid.tableDiv.style.zIndex;
    }
    else {
      div.style.display = "none";
    }
  }
  
  this.hide = function() {
    div.style.display = "none";
  }
  
  this.destroy = function() {
    div.innerHTML = "";
<<<<<<< HEAD
    if (div.parentNode != null) div.parentNode.removeChild(div);
=======
    div.parentNode.removeChild(div);
>>>>>>> Initial import into GIT
    me.prevImg = null;
    me.prevLink = null;
    me.nextImg = null;
    me.nextLink = null;
    
    div = null;
    exportImg = null;
    exportLink = null;
    spacesSpan1 = null;
    spacesSpan2 = null;
    pageSpan = null;
    
    me = null;  
  }
  
  this.setClassName = function(cssClass) {
    // two classes are actually assigned here (grid specific and generic)
    // for example, the className may look like this: "crystal-grid-paging-bar paging-bar"
    if (div == null) return;
    if (cssClass == null) cssClass = "";
    cssClass = trim(cssClass);
    if (cssClass != "") cssClass += "-paging-bar";
    cssClass += " paging-bar";
    cssClass = trim(cssClass);
    if (div.className != cssClass) div.className = cssClass;
  }
  
  this.draw = function() {

    me.setClassName(me.grid.tableDiv.className);

    if ((me.csvExport || me.showPagingControls || me.showPageNumber || me.showBar) && 
        me.grid.tableDiv.style.display != "none" && me.grid.tableDiv.style.visibility != "hidden") {  
      me.position();

      if (me.csvExport) {
        exportImg.style.display = "";
        exportLink.style.display = "";
      }
      else {
        exportImg.style.display = "none";
        exportLink.style.display = "none";
      }
      
      if (me.showPagingControls) {
<<<<<<< HEAD
        me.prevImg.style.display = "inline-block";
        me.prevLink.style.display = "";
        me.nextImg.style.display = "inline-block";
        me.nextLink.style.display = "";
=======
        me.prevImg.style.display = "";
        me.prevLink.style.display = "";
        me.nextImg.style.display = "";
        me.nextLink.style.display = "";
        me.nextLink.style.color = "#2C71EE";
        me.nextLink.style.textDecoration = "underline";
        me.nextLink.style.cursor = "pointer";
        me.prevLink.style.color = "#2C71EE";
        me.prevLink.style.textDecoration = "underline";
        me.prevLink.style.cursor = "pointer";
        me.nextImg.style.cursor = "pointer";
        me.prevImg.style.cursor = "pointer";
>>>>>>> Initial import into GIT
        me.prevImg.disabled = false;
        me.prevLink.disabled = false;
        me.nextImg.disabled = false;
        me.nextLink.disabled = false;
<<<<<<< HEAD
        
        if (context != "genie") {
          if (!me.grid.designMode && me.grid.atTop() && (me.pageUpCondition == "false" || !me.pageUpResponseDefined)) {
            me.prevImg.disabled = true;
            me.prevLink.disabled = true;
            pui.addCssClass(me.prevLink, "paging-link-disabled");
            pui.addCssClass(me.prevImg, "prev-image-icon-disabled");        
          }
          else {
            pui.removeCssClass(me.prevLink, "paging-link-disabled");
            pui.removeCssClass(me.prevImg, "prev-image-icon-disabled");
          }
          
          if ( !me.grid.designMode && me.grid.atBottom() && 
               ((me.grid.subfileEnd && pui["page down on subfile end"] != true) || me.pageDownCondition == "false" || !me.pageDownResponseDefined) ) {
            me.nextImg.disabled = true;
            me.nextLink.disabled = true;
            pui.addCssClass(me.nextLink, "paging-link-disabled");
            pui.addCssClass(me.nextImg, "next-image-icon-disabled"); 
          }
          else {
            pui.removeCssClass(me.nextLink, "paging-link-disabled");
            pui.removeCssClass(me.nextImg, "next-image-icon-disabled");
          }
=======
        if (!me.grid.designMode && me.grid.atTop() && (me.pageUpCondition == "false" || !me.pageUpResponseDefined)) {
          me.prevImg.src = prevArrowDisabledSrc;
          me.prevImg.style.cursor = "default";
          me.prevImg.disabled = true;
          me.prevLink.style.cursor = "default";
          me.prevLink.style.textDecoration = "none";
          me.prevLink.style.color = "#666666";
          me.prevLink.disabled = true;
        }
        else {
          me.prevImg.src = prevArrowSrc;
        }
        if ( !me.grid.designMode && me.grid.atBottom() && 
             ((me.grid.subfileEnd && pui["page down on subfile end"] != true) || me.pageDownCondition == "false" || !me.pageDownResponseDefined) ) {
          me.nextImg.src = nextArrowDisabledSrc;
          me.nextImg.style.cursor = "default";
          me.nextImg.disabled = true;
          me.nextLink.style.cursor = "default";
          me.nextLink.style.textDecoration = "none";
          me.nextLink.style.color = "#666666";
          me.nextLink.disabled = true;
        }
        else {
          me.nextImg.src = nextArrowSrc;
>>>>>>> Initial import into GIT
        }
      }
      else {
        me.prevImg.style.display = "none";
        me.prevLink.style.display = "none";
        me.nextImg.style.display = "none";
        me.nextLink.style.display = "none";
      }
      
      if (me.showPageNumber) {
        pageSpan.style.display = "";
<<<<<<< HEAD
        pageSpan.innerHTML = pui.getLanguageText("runtimeText", "page") + " " + me.pageNumber;
=======
        pageSpan.innerHTML = "Page " + me.pageNumber;
>>>>>>> Initial import into GIT
      }
      else {
        pageSpan.style.display = "none";
      }
      
    }
    
    else {
    
      div.style.display = "none";
      return;
      
    }
    
  }
  
  this.changeContainer = function(newContainer) {
    me.container = newContainer;
    div.parentNode.removeChild(div);
    me.container.appendChild(div); 
  }
<<<<<<< HEAD
  
  this.getHeight = function() {
  
    return div.offsetHeight;
  
  }
=======
>>>>>>> Initial import into GIT

}

