/*global jQuery, document, window*/
/* ==========================================================================
Document Ready Function
========================================================================== */
jQuery(document).ready(function () {

    'use strict';

    var getid, canvas, ctx, offsetX, offsetY, horizLineLength, vertLineLength, cornerRadius, cornerLength, totalLength, startT, startTR, startR, startBR, startB, startBL, startL, startTL, percent, accumLength, d, x1, y1, x2, y2, x, y, start, end, skillvalue, arraylength, arrayOfIds, idcount;

    // draw the radius rectangle
    function drawPercentRect(percent) {

        // percent expressed as a length-traveled-along-rect
        accumLength = percent / 100 * totalLength;

        // clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        function drawCorner(x, y, start, end) {
            ctx.beginPath();
            ctx.arc(x, y, cornerRadius, start, end, false);
            ctx.stroke();
        }

        // top line
        d = accumLength - startT;
        d = Math.min(d, horizLineLength);
        if (d > 0) {
            x1 = offsetX + cornerRadius;
            y1 = offsetY;
            x2 = offsetX + cornerRadius + d;
            y2 = offsetY;
            drawLine(x1, y1, x2, y2);
        }

        // top-right corner
        d = accumLength - startTR;
        d = Math.min(d, cornerLength);
        if (d > 0) {
            x = offsetX + cornerRadius + horizLineLength;
            y = offsetY + cornerRadius;
            start = -Math.PI / 2;
            end = -Math.PI / 2 + (d / cornerLength * Math.PI / 2);
            drawCorner(x, y, start, end);
        }

        // right line
        d = accumLength - startR;
        d = Math.min(d, vertLineLength);
        if (d > 0) {
            x1 = offsetX + cornerRadius + horizLineLength + cornerRadius;
            y1 = offsetY + cornerRadius;
            x2 = offsetX + cornerRadius + horizLineLength + cornerRadius;
            y2 = offsetY + cornerRadius + d;
            drawLine(x1, y1, x2, y2);
        }

        // bottom-right corner
        d = accumLength - startBR;
        d = Math.min(d, cornerLength);
        if (d > 0) {
            x = offsetX + cornerRadius + horizLineLength;
            y = offsetY + cornerRadius + vertLineLength;
            start = 0;
            end = (d / cornerLength) * Math.PI / 2;
            drawCorner(x, y, start, end);
        }

        // bottom line
        d = accumLength - startB;
        d = Math.min(d, horizLineLength);
        if (d > 0) {
            x1 = offsetX + cornerRadius + horizLineLength;
            y1 = offsetY + cornerRadius + vertLineLength + cornerRadius;
            x2 = offsetX + cornerRadius + horizLineLength - d;
            y2 = offsetY + cornerRadius + vertLineLength + cornerRadius;
            drawLine(x1, y1, x2, y2);
        }

        // bottom-left corner
        d = accumLength - startBL;
        d = Math.min(d, cornerLength);
        if (d > 0) {
            x = offsetX + cornerRadius;
            y = offsetY + cornerRadius + vertLineLength;
            start = Math.PI / 2;
            end = Math.PI / 2 + (d / cornerLength) * Math.PI / 2;
            drawCorner(x, y, start, end);
        }

        // left line
        d = accumLength - startL;
        d = Math.min(d, vertLineLength);
        if (d > 0) {
            x1 = offsetX;
            y1 = offsetY + cornerRadius + vertLineLength;
            x2 = offsetX;
            y2 = offsetY + cornerRadius + vertLineLength - d;
            drawLine(x1, y1, x2, y2);
        }

        // top-left corner
        d = accumLength - startTL;
        d = Math.min(d, cornerLength);
        if (d > 0) {
            x = offsetX + cornerRadius;
            y = offsetY + cornerRadius;
            start = Math.PI;
            end = Math.PI + (d / cornerLength) * Math.PI / 2;
            drawCorner(x, y, start, end);
        }

    }

    function getSteps() {
        var ids = [];
        jQuery(".skill").each(function () {
            ids.push(this.id);
        });
        return ids;
    }

    arrayOfIds = getSteps();
        /*alert(arrayOfIds[0]);*/

    arraylength = arrayOfIds.length;


    idcount = 0;

    while (arraylength > 0) {

        canvas = document.getElementById(arrayOfIds[idcount]);
        skillvalue = jQuery('#' + arrayOfIds[idcount]).attr('data-rel');
        ctx = canvas.getContext("2d");

        // styling
        ctx.lineWidth = 18;
        ctx.strokeStyle = "#e1e1e1";

        // define the rectangle
        offsetX = 0;
        offsetY = 0;
        horizLineLength = 130;
        vertLineLength = 130;
        cornerRadius = 0;

        // calc some lengths for use in percent complete
        cornerLength = 2 * cornerRadius * Math.PI;
        totalLength = cornerLength * 4 + horizLineLength * 2 + vertLineLength * 2;


        // calc at what accumulated length each part of the rect starts
        startT = 0;
        startTR = horizLineLength;
        startR = startTR + cornerLength;
        startBR = startR + vertLineLength;
        startB = startBR + cornerLength;
        startBL = startB + horizLineLength;
        startL = startBL + cornerLength;
        startTL = startL + vertLineLength;

        // percent complete
        percent = 100;

        drawPercentRect(skillvalue);

        arraylength = arraylength - 1;
        idcount = idcount + 1;

    }

});