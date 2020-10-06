'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const FONT_GAP = 16;
const TITLE_GAP_X = 20;
const TITLE_GAP_Y = 20;
const TITLE_GAP_BETWEEN = 5;
const NAME_GAP_X = 40;
const NAME_GAP_Y = 240;
const CHART_GAP_Y = 230;
const CHART_WIDTH = 40;
const CHART_MAX_HEIGHT = 150;
const CHART_GAP_BETWEEN = 50;

const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
    ctx,
    CLOUD_X + CLOUD_GAP,
    CLOUD_Y + CLOUD_GAP,
    'rgba(0, 0, 0, 0.7)'
  );

  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff'
  );

  ctx.fillStyle = '#000';
  ctx.font = "bold 16px 'PT Mono'";   //кавычки?!
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP_X, CLOUD_Y + TITLE_GAP_Y);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP_X, CLOUD_Y + TITLE_GAP_Y + FONT_GAP + TITLE_GAP_BETWEEN);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    const chartHeight = (CHART_MAX_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';

    ctx.fillText(
      names[i],
      CLOUD_X + NAME_GAP_X + (CHART_WIDTH + CHART_GAP_BETWEEN) * i,
      CLOUD_Y + NAME_GAP_Y
    );

    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + NAME_GAP_X + (CHART_WIDTH + CHART_GAP_BETWEEN) * i,
      CLOUD_Y + CHART_GAP_Y - chartHeight - FONT_GAP
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + Math.floor(Math.random()*100) + '% ,50%)';
    }

    ctx.fillRect(
      CLOUD_X + NAME_GAP_X + (CHART_WIDTH + CHART_GAP_BETWEEN) * i,
      CLOUD_Y + CHART_GAP_Y,
      CHART_WIDTH,
      -chartHeight
    );
  }
};
