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
 * Sliding Scrollbar Class
 * @constructor
 */


pui.SlidingScrollBar = function() {

  this.x = 0;
  this.y = 0;
  this.height = 300;
  this.zIndex = 100;
  this.designMode = false;
  this.container = null;
  this.rowsPerPage = 10;
  this.totalRows = 100;  
  this.rowHeight = 20;  
  this.borderWidth = 1;
  this.onchange = null;
  this.onSetRow = null;
  this.showRowNum = true;
  this.showRowRange = false;
  this.interval = 250;
<<<<<<< HEAD
  this.type = "sliding";
  this.ready = false;
  this.gridDom = null;
  var currentRequestNum = 0;
  var rowNumHideRequest = 0;
  var firstRequest = true;
  var mouseWheelEnabled = false;
=======
  this.rowLabel = "row";
  this.type = "sliding";
  this.ready = false;
  var currentRequestNum = 0;
  var rowNumHideRequest = 0;
  var firstRequest = true;
  var mouseWheelEnabled = false;  
>>>>>>> Initial import into GIT

  var me = this;

  var outerDiv;
  var innerDiv;
  var innerDiv2;
  var touchBar;
  var touchHandle;
  var rowNumDiv;
  var multiplier = 25;
  var prevStartRow = -1;
<<<<<<< HEAD
  var fadeOutOpacity = 0;
=======
>>>>>>> Initial import into GIT
  
  var upImg;
  var downImg;
  
  this.init = function(gridDom) {
<<<<<<< HEAD
    me.gridDom = gridDom;
=======
>>>>>>> Initial import into GIT
    outerDiv = document.createElement("div");
    outerDiv.style.position = "absolute";
    outerDiv.style.width = "23px";
    outerDiv.style.overflowY = "scroll";
    outerDiv.style.overflowX = "hidden";
    outerDiv.style.padding = "0px";
    outerDiv.className = "pui-scrollbar";
    innerDiv = document.createElement("div");
    innerDiv.style.position = "absolute";
    innerDiv.style.left = "0px";
    innerDiv.style.top = "0px";     
    innerDiv.innerHTML = "&nbsp;";
    innerDiv.fontSize = "0px";
    rowNumDiv = document.createElement("div");
    rowNumDiv.style.position = "absolute";
    rowNumDiv.style.border = "1px solid #999999";
    rowNumDiv.style.backgroundColor = "#ffffff";
    rowNumDiv.style.fontFamily = "Arial";
    rowNumDiv.style.fontSize = "10px";
    rowNumDiv.style.fontWeight = "bold";
    rowNumDiv.style.padding = "1px";
    rowNumDiv.style.zIndex = 1000;
    rowNumDiv.style.filter = "alpha(opacity=75)";
    rowNumDiv.style.opacity = 0.75;
    rowNumDiv.style.display = "none";
    
    if ((context == "dspf" && pui.touchDevice) || pui.iPadEmulation) {
      touchBar = document.createElement("div");
      touchBar.style.position = "absolute";
      //touchBar.style.width = "25px";
<<<<<<< HEAD
      touchBar.style.width = "3px";
      //touchBar.style.backgroundColor = "#DDDDEE";
      touchBar.style.backgroundColor = "transparent";
      touchHandle = document.createElement("div");
      touchHandle.style.position = "absolute";
      //touchHandle.style.width = "25px";
      touchHandle.style.width = "3px";
=======
      touchBar.style.width = "2px";
      touchBar.style.backgroundColor = "#DDDDEE";
      touchHandle = document.createElement("div");
      touchHandle.style.position = "absolute";
      //touchHandle.style.width = "25px";
      touchHandle.style.width = "2px";
>>>>>>> Initial import into GIT
      touchHandle.style.height = "25px";
      touchHandle.style.top = "0px";
      //touchHandle.style.backgroundColor = "#BBBBDD";
      touchHandle.style.backgroundColor = "#999999";
<<<<<<< HEAD
      if (!pui["is_android"]) {  // border radius on a moving element seems to render really slow on android for some reason
        touchHandle.style.borderRadius = "2px";
      }
      outerDiv.style.visibility = "hidden";
      outerDiv.style.display = "none";
      
      touchHandle.style.opacity = fadeOutOpacity;

=======
      if (!is_android) {  // border radius on a moving element seems to render really slow on android for some reason
        touchHandle.style.borderRadius = "2px";
      }
      outerDiv.style.visibility = "hidden";
      
>>>>>>> Initial import into GIT
      if (pui.iPadEmulation) {
        function mousedown(e) {
          var target = getTarget(e);
          if (target != null && target.row === 0 || 
              target != null && target.parentNode != null && target.parentNode.row === 0 ||
              target != null && target.parentNode != null && target.parentNode.parentNode != null && target.parentNode.parentNode.row === 0 ) {
            if (gridDom.grid.hasHeader) {
              return;
            }
          }
<<<<<<< HEAD
          if (target != null && target.tagName == "INPUT" || target.tagName == "SELECT" || target.tagName == "TEXTAREA") {
            return;
          }
          //touchHandle.style.opacity = 1;
=======
>>>>>>> Initial import into GIT
          touchHandle.touch = {};
          touchHandle.touch.reverse = (target != touchHandle);
          touchHandle.touch.startY = getMouseY(e);
          touchHandle.touch.lastY = touchHandle.touch.startY;
          touchHandle.touch.startTime = new Date().getTime();
          touchHandle.touch.lastTime = new Date().getTime();
          touchHandle.touch.distance = null;
          touchHandle.touch.duration = null;
          if (touchHandle.lastTop != null) touchHandle.touch.startTop = touchHandle.lastTop;
          else touchHandle.touch.startTop = parseInt(touchHandle.style.top);
          function mousemove(e) {
<<<<<<< HEAD
            touchHandle.style.opacity = 1;
=======
>>>>>>> Initial import into GIT
            var y = getMouseY(e);
            var now = new Date().getTime();
            touchHandle.touch.duration = now - touchHandle.touch.lastTime;
            touchHandle.touch.lastTime = now;
            var deltaAdjustment = (me.totalRows / me.rowsPerPage) / 6;
            if (deltaAdjustment < 1) deltaAdjustment = 1;
            if (deltaAdjustment > 40) deltaAdjustment = 40;
            touchHandle.touch.distance = (y - touchHandle.touch.lastY) / deltaAdjustment;
            touchHandle.touch.lastY = y;
            var top = touchHandle.touch.startTop;
            var delta = y - touchHandle.touch.startY;
            if (touchHandle.touch.reverse) delta = -delta;
            delta /= deltaAdjustment;
            top += delta;
            var minTop = parseInt(touchBar.style.top);
            var maxTop = minTop + parseInt(touchBar.style.height) - parseInt(touchHandle.style.height);
            if (maxTop < minTop) maxTop = minTop;
            if (top < minTop) top = minTop;
            if (top > maxTop) top = maxTop;        
            touchHandle.lastTop = top;
            touchHandle.style.top = parseInt(top) + "px";
            var pct = (top - minTop) / (maxTop - minTop);
            if (isNaN(pct)) pct = 0;
            var row = (me.totalRows - me.rowsPerPage) * pct;
            row = Math.round(row) + 1;
<<<<<<< HEAD
            me.doScroll(row);
=======
            outerDiv.onscroll(row);
>>>>>>> Initial import into GIT
          }
          function mouseup(e) {
            removeEvent(document, "mousemove", mousemove);
            removeEvent(document, "mouseup", mouseup);
            slide(touchHandle.touch);
          }
          addEvent(document, "mousemove", mousemove);
          addEvent(document, "mouseup",   mouseup);
          preventEvent(e);
        }
        addEvent(touchHandle, "mousedown", mousedown);
        addEvent(gridDom, "mousedown", mousedown);
      }

      if (!pui.iPadEmulation) {
        function touchstart(e) {
          if (e.touches.length != 1) return;  // Only deal with one finger
          var target = e.target;
          if (target != null && target.row === 0 || 
              target != null && target.parentNode != null && target.parentNode.row === 0 ||
              target != null && target.parentNode != null && target.parentNode.parentNode != null && target.parentNode.parentNode.row === 0 ) {
            if (gridDom.grid.hasHeader) {
              return;
            }
          }
<<<<<<< HEAD
          if (target != null && target.tagName == "INPUT" || target.tagName == "SELECT" || target.tagName == "TEXTAREA") {
            return;
          }
          //touchHandle.style.opacity = 1;
=======
>>>>>>> Initial import into GIT
          var touch = e.touches[0]
          touchHandle.touch = {};
          touchHandle.touch.reverse = (target != touchHandle);
          me.touchTarget = target;
          touchHandle.touch.startY = touch.pageY;
          touchHandle.touch.lastY = touchHandle.touch.startY;
          touchHandle.touch.startTime = new Date().getTime()
          touchHandle.touch.lastTime = new Date().getTime();
          touchHandle.touch.distance = null;
          touchHandle.touch.duration = null;
          if (touchHandle.lastTop != null) touchHandle.touch.startTop = touchHandle.lastTop;
          else touchHandle.touch.startTop = parseInt(touchHandle.style.top);
          //e.preventDefault();
        }
        addEvent(touchHandle, "touchstart", touchstart);
        addEvent(gridDom, "touchstart", touchstart);
        function touchmove(e) {
          if (e.touches.length != 1) return;  // Only deal with one finger
          if (touchHandle.touch == null) return;
<<<<<<< HEAD
          touchHandle.style.opacity = 1;          
=======
>>>>>>> Initial import into GIT
          var touch = e.touches[0];
          var y = touch.pageY;
          var now = new Date().getTime();
          touchHandle.touch.duration = now - touchHandle.touch.lastTime;
          touchHandle.touch.lastTime = now;
          var deltaAdjustment = (me.totalRows / me.rowsPerPage) / 6;
          if (deltaAdjustment < 1) deltaAdjustment = 1;
          if (deltaAdjustment > 40) deltaAdjustment = 40;
          touchHandle.touch.distance = (y - touchHandle.touch.lastY) / deltaAdjustment;
          touchHandle.touch.lastY = y;
          var top = touchHandle.touch.startTop;
          var delta = y - touchHandle.touch.startY;
          if (touchHandle.touch.reverse) delta = -delta;
          delta /= deltaAdjustment;
          top += delta;
          var minTop = parseInt(touchBar.style.top);
          var maxTop = minTop + parseInt(touchBar.style.height) - parseInt(touchHandle.style.height);
          if (maxTop < minTop) maxTop = minTop;
          if (top < minTop) top = minTop;
          if (top > maxTop) top = maxTop;        
          touchHandle.lastTop = top;
          touchHandle.style.top = parseInt(top) + "px";
          var pct = (top - minTop) / (maxTop - minTop);
          if (isNaN(pct)) pct = 0;
          var row = (me.totalRows - me.rowsPerPage) * pct;
          row = Math.round(row) + 1;
<<<<<<< HEAD
          me.doScroll(row);
=======
          outerDiv.onscroll(row);
>>>>>>> Initial import into GIT
          e.preventDefault();
        }
        addEvent(touchHandle, "touchmove", touchmove);
        addEvent(gridDom, "touchmove", touchmove);
        addEvent(gridDom, "touchend", function(e) {
          me.touchTarget = null;
          slide(touchHandle.touch);
        });
      }
      
    }
<<<<<<< HEAD
    
    if (context == "genie") {  // for "dspf" context, the onscroll event is now attached in the rendering code
      outerDiv.onscroll = me.doScroll;
=======
        
    outerDiv.onscroll = function(startRowParm) {
      if (!me.ready) return;
      var startRow = Math.floor(outerDiv.scrollTop / multiplier) + 1;
      if (upImg != null && downImg != null && startRowParm == null && prevStartRow > 0) startRowParm = prevStartRow;
      if (startRowParm != null && typeof startRowParm == "number") startRow = startRowParm;
      if (startRow == prevStartRow) return;  // starting row has not changed
      var endRow = startRow + me.rowsPerPage - 1;
      if (me.showRowRange) rowNumDiv.innerHTML = me.rowLabel + "s " + startRow + " - " + endRow;
      if (me.showRowNum) rowNumDiv.innerHTML = me.rowLabel + " " + startRow;
      positionRowNum();
      if (me.onchange != null) me.onchange(startRow);      
      if (me.onSetRow != null) {
        currentRequestNum += 1;
        if (currentRequestNum > 10000) currentRequestNum = 10;
        sendRow(currentRequestNum, startRow);
      }
      prevStartRow = startRow;

      if (me.showRowNum || me.showRowRange) {
        rowNumDiv.style.display = "";
        rowNumHideRequest += 1;
        if (rowNumHideRequest > 10000) rowNumHideRequest = 0;
        positionRowNum();
        hideRowNum(rowNumHideRequest);
      }
      else {
        rowNumDiv.style.display = "none";
      }     
>>>>>>> Initial import into GIT
    }
    
    outerDiv.onmousedown = function(event) {
      if (me.showRowNum || me.showRowRange) {
        if (rowNumDiv.innerHTML != "") rowNumDiv.style.display = "";
        positionRowNum();
      }
      if (me.designMode) designUtils.preventEvent(event);
    }

    outerDiv.onmouseup = function() {
      hideRowNum(rowNumHideRequest);
    }
    
    outerDiv.appendChild(innerDiv);
    me.container.appendChild(outerDiv); 
    if (touchBar != null) me.container.appendChild(touchBar); 
    if (touchHandle != null) me.container.appendChild(touchHandle); 
    me.container.appendChild(rowNumDiv);    
  }  
  
<<<<<<< HEAD
  this.attachOnScroll = function() {
    //outerDiv.onscroll = me.doScroll;
    addEvent(outerDiv, "scroll", me.doScroll);
  }

  this.doScroll = function(startRowParm) {
    if (!me.ready) return;
    var startRow = Math.floor(outerDiv.scrollTop / multiplier) + 1;
    if (upImg != null && downImg != null && startRowParm == null && prevStartRow > 0) startRowParm = prevStartRow;
    if (startRowParm != null && typeof startRowParm == "number") startRow = startRowParm;
    if (startRow == prevStartRow) return;  // starting row has not changed
    var endRow = startRow + me.rowsPerPage - 1;
    if (me.showRowRange) rowNumDiv.innerHTML = pui.getLanguageText("runtimeText", "rows") + " " + startRow + " - " + endRow;
    if (me.showRowNum) rowNumDiv.innerHTML = pui.getLanguageText("runtimeText", "row") + " " + startRow;
    positionRowNum();
    if (me.onchange != null) me.onchange(startRow);      
    if (me.onSetRow != null) {
      currentRequestNum += 1;
      if (currentRequestNum > 10000) currentRequestNum = 10;
      sendRow(currentRequestNum, startRow);
    }
    prevStartRow = startRow;

    var gridDom = me.gridDom;
    if (gridDom != null) {
      var onscrollEventCode = gridDom.grid.events["onscroll"];
      if (onscrollEventCode != null && onscrollEventCode != "" && !me.designMode) {
        try {
          eval("row = " + startRow);
          eval(onscrollEventCode);
        }
        catch(err) {
          pui.alert(eventName.substr(0, 1).toUpperCase() + eventName.substr(1) + " Error:\n" + err.message);
          return false;
        }
      }
    }

    if (me.showRowNum || me.showRowRange) {
      rowNumDiv.style.display = "";
      rowNumHideRequest += 1;
      if (rowNumHideRequest > 10000) rowNumHideRequest = 0;
      positionRowNum();
      hideRowNum(rowNumHideRequest);
    }
    else {
      rowNumDiv.style.display = "none";
    }     
  }
  
  this.setScrollTopToRow = function(rowNum, setPrevStartRow) {
=======
  this.setScrollTopToRow = function(rowNum) {
>>>>>>> Initial import into GIT
    if (touchHandle != null) {
      var minTop = parseInt(touchBar.style.top);
      var maxTop = minTop + parseInt(touchBar.style.height) - parseInt(touchHandle.style.height);
      if (maxTop < minTop) maxTop = minTop;
      var pct = (rowNum - 1) / (me.totalRows - me.rowsPerPage);
      var top = parseInt((maxTop - minTop) * pct) + minTop;
      touchHandle.style.top = top + "px";
      prevStartRow = rowNum;
    }
    else {
<<<<<<< HEAD
      if (setPrevStartRow) {
        // this prevents onscroll event from processing
        prevStartRow = rowNum;
      }
=======
>>>>>>> Initial import into GIT
      outerDiv.scrollTop = (rowNum - 1) * multiplier;
    }
  }
  
  function sendRow(requestNum, rowNum) {
    if (firstRequest) {
      firstRequest = false;
      me.onSetRow(rowNum);
    }
    else {
      setTimeout(function() {
        if (requestNum != currentRequestNum) return;
        me.onSetRow(rowNum);
      }, me.interval);
    }
  }

  function positionRowNum() {
    var adjust = 22;
    if (pui.touchDevice || pui.iPadEmulation) adjust = 0;
    rowNumDiv.style.left = (me.x - rowNumDiv.offsetWidth + adjust) + "px";
    rowNumDiv.style.top = (me.y - rowNumDiv.offsetHeight - 2) + "px";
  }
  
  function hideRowNum(request) {    
    setTimeout(function() {
      if (request != rowNumHideRequest) return;
      rowNumDiv.style.display = "none";
    }, 800);
  }

  function slide(touchInfo) {
<<<<<<< HEAD
    if (touchInfo == null) {
      touchHandle.style.opacity = fadeOutOpacity;
      return;
    }
=======
    if (touchInfo == null) return;
>>>>>>> Initial import into GIT
    var duration = touchInfo.duration;
    var distance = touchInfo.distance;
    var startTop = touchHandle.lastTop;
    var startTime = touchInfo.lastTime;
<<<<<<< HEAD
    if (distance == null || duration == null) {
      touchHandle.style.opacity = fadeOutOpacity;
      return;
    }
    if (duration > 500) {  // duration too big, finger must have stopped
      //touchHandle.style.opacity = fadeOutOpacity;
      return;
    }
=======
    if (distance == null) return;
    if (duration == null) return;
    if (duration > 500) return;  // duration too big, finger must have stopped
>>>>>>> Initial import into GIT
    var speed = distance / duration;
    var animationStartTime = new Date().getTime();

    function animate() {

<<<<<<< HEAD
      if (touchHandle.touch == null) {
        touchHandle.style.opacity = fadeOutOpacity;
        return;
      }

      if (touchHandle.touch.startTime > animationStartTime) {
        //touchHandle.style.opacity = fadeOutOpacity;
        return;
      }
=======
      if (touchHandle.touch == null) return;

      if (touchHandle.touch.startTime > animationStartTime) return;
>>>>>>> Initial import into GIT
            
      var done = false;
      var now = new Date().getTime();
      var top = startTop + (startTime - now) * speed;
      
      startTop = top;
      startTime = now;
      
      // decelarate (friction)
      speed *= .98;
      if (speed > 0) {
        speed -= 0.001;
        if (speed <= 0) {
          done = true;
          speed = 0;
        }
      }
      else {
        speed += 0.001;
        if (speed >= 0) {
          done = true;
          speed = 0;
        }
      }

      var minTop = parseInt(touchBar.style.top);
      var maxTop = minTop + parseInt(touchBar.style.height) - parseInt(touchHandle.style.height);
      if (maxTop < minTop) maxTop = minTop;
      if (top < minTop) {
        top = minTop;
        done = true;
      }
      if (top > maxTop) {
        top = maxTop;        
        done = true;
      }
      touchHandle.lastTop = top;
      touchHandle.style.top = parseInt(top) + "px";
      var pct = (top - minTop) / (maxTop - minTop);
      if (isNaN(pct)) pct = 0;
      var row = (me.totalRows - me.rowsPerPage) * pct;
      row = Math.round(row) + 1;
<<<<<<< HEAD
      me.doScroll(row);
      
      if (done) {
        touchHandle.touch = null;
        pui["animate"]({ "element": touchHandle, "property": "opacity", "from": 1, "to": fadeOutOpacity, "duration": "1s" });
=======
      outerDiv.onscroll(row);
      
      if (done) {
        touchHandle.touch = null;
>>>>>>> Initial import into GIT
      }
      else {
        setTimeout(animate, 1000/60);  // 60 frames per second
      }
    }
    
    animate();
  }

  this.draw = function() {
<<<<<<< HEAD
    if (pui["is_old_ie"]) {
=======
    if (is_ie) {
>>>>>>> Initial import into GIT
      multiplier = 25;
      if (me.totalRows > 1000) multiplier = 50;      
    }
    else {
      multiplier = 19;
    }
    
    if (touchHandle != null && touchBar != null) {
<<<<<<< HEAD
      touchBar.style.left = (me.x - 5) + "px";
      touchBar.style.top = (me.y) + "px";
      touchBar.style.zIndex = me.zIndex;
      touchHandle.style.left = (me.x - 5) + "px";
=======
      touchBar.style.left = (me.x - 4) + "px";
      touchBar.style.top = (me.y) + "px";
      touchBar.style.zIndex = me.zIndex;
      touchHandle.style.left = (me.x - 4) + "px";
>>>>>>> Initial import into GIT
      if (prevStartRow == -1) {
        touchHandle.style.top = (me.y) + "px";
      }
      touchHandle.style.zIndex = me.zIndex;
      outerDiv.style.visibility = "hidden";
<<<<<<< HEAD
      outerDiv.style.display = "none";
=======
>>>>>>> Initial import into GIT
      touchBar.style.display = "";
      touchHandle.style.display = "";
    }
    else {
      outerDiv.style.zIndex = me.zIndex;
      outerDiv.style.visibility = "";
<<<<<<< HEAD
      outerDiv.style.display = "";
=======
>>>>>>> Initial import into GIT
      outerDiv.style.left = (me.x) + "px";
      outerDiv.style.top = (me.y) + "px";
    }

    var height = me.rowsPerPage * me.rowHeight - me.borderWidth;
    if (touchBar != null) {
      touchBar.style.height = (height - 2) + "px";
      var pct;
      if (me.totalRows <= 0) pct = 1;
      else pct = (me.rowsPerPage / me.totalRows);
      var handleHeight = (height - 2) * pct;
      handleHeight = parseInt(handleHeight);
      if (handleHeight < 25 && height > 27) handleHeight = 25;
      if (handleHeight > height - 2) handleHeight = height - 2;
      touchHandle.style.height = handleHeight + "px";
    }
    else {
      outerDiv.style.height = height + "px";
      var innerHeight = (me.totalRows - me.rowsPerPage) * multiplier + height;

      // Firefox div height limitation is 9,999,990 pixels
      // IE div height limitation of 1,342,177 pixels
      var limit = 9999990;
<<<<<<< HEAD
      if (pui["is_old_ie"]) limit = 1342177;
=======
      if (is_ie) limit = 1342177;
>>>>>>> Initial import into GIT
      while (innerHeight > limit && multiplier > 1) {
        multiplier -= 1;
        innerHeight = (me.totalRows - me.rowsPerPage) * multiplier + height;
      }

      if (innerHeight < 0) innerHeight = 0;
      if (innerHeight > 5 && innerHeight == height) innerHeight = innerHeight - 5;  // this ensures that the scrollbar is disabled
      innerDiv.style.height = innerHeight + "px";
    }
    
    positionRowNum();
    
<<<<<<< HEAD
    if (touchBar == null) me.doScroll();
=======
    if (touchBar == null) outerDiv.onscroll();
>>>>>>> Initial import into GIT
    
    // show up/down arrows instead of scrollbar if there is only 1 row
    if (!me.designMode && me.ready && me.rowsPerPage == 1) {
      innerDiv.style.height = "0px";
      outerDiv.style.overflow = "hidden";
      outerDiv.style.overflowX = "hidden";
      outerDiv.style.overflowY = "hidden";
      if (upImg == null && downImg == null && me.totalRows > 1) {
        upImg = document.createElement("img");
        upImg.style.position = "absolute";
        upImg.style.top = "0px";
        upImg.style.right = "0px";
        upImg.style.cursor = "pointer";
        upImg.src = pui.normalizeURL("/profoundui/proddata/images/up.gif");        
        upImg.onclick = function() {
          if (pui.messageSubfileHelpWindowDiv != null) pui.messageSubfileHelpWindowDiv.style.display = "none";
          var startRow = prevStartRow - 1;
          if (startRow < 1) startRow = 1;
          if (startRow > me.totalRows) startRow = me.totalRows;
<<<<<<< HEAD
          me.doScroll(startRow);
=======
          outerDiv.onscroll(startRow);
>>>>>>> Initial import into GIT
        }
        downImg = document.createElement("img");
        downImg.style.position = "absolute";
        downImg.style.bottom = "0px";
        downImg.style.right = "0px";
        downImg.style.cursor = "pointer";
        downImg.src = pui.normalizeURL("/profoundui/proddata/images/down.gif");
        downImg.onclick = function() {
          if (pui.messageSubfileHelpWindowDiv != null) pui.messageSubfileHelpWindowDiv.style.display = "none";
          if (prevStartRow == -1) prevStartRow = 1;
          var startRow = prevStartRow + 1;
          if (startRow < 1) startRow = 1;
          if (startRow > me.totalRows) startRow = me.totalRows;
<<<<<<< HEAD
          me.doScroll(startRow);
=======
          outerDiv.onscroll(startRow);
>>>>>>> Initial import into GIT
        }
        outerDiv.appendChild(upImg);
        outerDiv.appendChild(downImg);
      }
    }
    
  }
  
  this.increaseHeight = function(y) {
    if (touchBar != null) touchBar.style.height = (parseInt(outerDiv.style.height) + y - 2) + "px";
    else outerDiv.style.height = (parseInt(outerDiv.style.height) + y) + "px";
  }
    
  this.hide = function() {
    outerDiv.style.visibility = "hidden";
<<<<<<< HEAD
    outerDiv.style.display = "none";
=======
>>>>>>> Initial import into GIT
    rowNumDiv.style.display = "none";
    rowNumDiv.style.visibility = "hidden";
    if (touchHandle != null && touchBar != null) {
      touchBar.style.display = "none";    
      touchHandle.style.display = "none";    
    }
  }
  
  this.destroy = function() {
<<<<<<< HEAD
    if (outerDiv.parentNode != null) outerDiv.parentNode.removeChild(outerDiv);
    if (innerDiv.parentNode != null) innerDiv.parentNode.removeChild(innerDiv);
    if (rowNumDiv.parentNode != null) rowNumDiv.parentNode.removeChild(rowNumDiv);
=======
    outerDiv.parentNode.removeChild(outerDiv);
    innerDiv.parentNode.removeChild(innerDiv);
    rowNumDiv.parentNode.removeChild(rowNumDiv);
>>>>>>> Initial import into GIT
  }
  
  this.enableMouseWheel = function(gridDom) {

    if (mouseWheelEnabled) return;
    mouseWheelEnabled = true;
    
    function handle(delta) {
      if (touchHandle != null) return;
      outerDiv.scrollTop -= delta * 23;
    }
    
    /** Event handler for mouse wheel event.
     */
    function wheel(event){
      var delta = 0;
      if (!event) event = window.event;  // For IE.
      if (event.wheelDelta) { // IE/Opera.
        delta = event.wheelDelta/120;
        /** In Opera 9, delta differs in sign as compared to IE.
         */
        if (window.opera)
                delta = -delta;
      } else if (event.detail) { /** Mozilla case. */
              /** In Mozilla, sign of delta is different than in IE.
               * Also, delta is multiple of 3.
               */
              delta = -event.detail/3;
      }
      /** If delta is nonzero, handle it.
       * Basically, delta is now positive if wheel was scrolled up,
       * and negative, if wheel was scrolled down.
       */
      if (delta)
              handle(delta);
      /** Prevent default actions caused by mouse wheel.
       * That might be ugly, but we handle scrolls somehow
       * anyway, so don't bother here..
       */
      if (event.preventDefault)
              event.preventDefault();
      event.returnValue = false;
    }
    
    /** Initialization code. 
     * If you use your own event management code, change it as required.
     */
    if (gridDom.addEventListener)
            /** DOMMouseScroll is for mozilla. */
            gridDom.addEventListener('DOMMouseScroll', wheel, false);
    /** IE/Opera. */
    gridDom.onmousewheel = wheel;    
  }

  this.changeContainer = function(newContainer) {
    me.container = newContainer;
    outerDiv.parentNode.removeChild(outerDiv);
    me.container.appendChild(outerDiv); 
  }

}
