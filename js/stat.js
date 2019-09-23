'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW = 10;
var COLUMN_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var COLUMN_LEFT_GAP = 30;
var TITLE_TOP_GAP = 30;
var TITLE_TOP_GAP_2 = 50;
var TEXT_INDENT_TOP = 20;
var TEXT_INDENT_LEFT = 20;
var COLUMN_X = CLOUD_X + 60;
var COLUMN_Y = CLOUD_Y + 80;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!',CLOUD_X + TITLE_TOP_GAP, CLOUD_Y + TITLE_TOP_GAP);
  ctx.fillText('Список результатов:',CLOUD_X + TITLE_TOP_GAP, CLOUD_Y + TITLE_TOP_GAP_2);
};

var getMaxElement = function(times) {
  var maxElement = 0;
    for (var i = 0; i < times.length; i++) {
      if (Math.floor(times[i]) > maxElement) {
        maxElement = Math.floor(times[i]);
        }
      }
    return maxElement;
};

var printTimes = function (ctx, times, i, columnHeight) {
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText(Math.floor(times[i]), COLUMN_X + (COLUMN_WIDTH * i) + (COLUMN_GAP * i) + TEXT_INDENT_LEFT, COLUMN_Y + (COLUMN_HEIGHT - columnHeight) - TEXT_INDENT_BOTTOM);
};

var printStatistics = function (ctx, columnMaxHeight, times, names, i) {
  var columnHeight = Math.floor((COLUMN_HEIGHT * Math.floor(times[i])) / columnMaxHeight);
  if (names[i] !== 'Вы') {
  ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
    }
  else {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
  ctx.fillRect(COLUMN_X + (COLUMN_WIDTH * i) + (COLUMN_GAP * i), COLUMN_Y + (COLUMN_HEIGHT - columnHeight), COLUMN_WIDTH, columnHeight);
  return columnHeight;
};

var printNames = function (ctx, names, i) {
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.fillText(names[i], COLUMN_X + (COLUMN_WIDTH * i) + (COLUMN_GAP * i) + TEXT_INDENT_LEFT, COLUMN_Y + COLUMN_HEIGHT + TEXT_INDENT_TOP);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW, CLOUD_Y + CLOUD_SHADOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var columnMaxHeight = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
  printTimes(ctx, times, i, printStatistics(ctx, columnMaxHeight, times, names, i));
  printStatistics(ctx, columnMaxHeight, times, names, i);
  printNames(ctx, names, i);
  }
};
