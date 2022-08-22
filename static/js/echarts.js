
function democlick(){
  var myChart = echarts.init(document.getElementById('main'));
  var option;
  let xData = [];
  let yData = [];
  let data = [];
  var p2 = parseInt(thumb2.getBoundingClientRect().left - slider.getBoundingClientRect().left);
  var p3 = parseInt(thumb3.getBoundingClientRect().left - slider2.getBoundingClientRect().left) / 100
  var p4 = parseInt(thumb4.getBoundingClientRect().left - slider3.getBoundingClientRect().left) / 2 + 380;
  var dslit = p3 * 0.01;
  var dscreen = (900 -p2) * 1e-2;
  var wavelength = p4 * 1e-9;
  var r1, r2, phi, temp;
  var ym = (5.0 * wavelength * dscreen) / dslit;
  var distance = ym / 500;
  var slj = 1;
  while ((slj / 10) > distance){
    slj /= 10;
  }
  distance = slj;
  for (let i = 0; i <= 1001; i++) {
    for (let j = 0; j <= 100; j++) {
      // let x = (max - min) * i / 200 + min;
      // let y = (max - min) * j / 100 + min;
      r1 = Math.sqrt((-ym + i * distance - dslit / 2) ** 2 + dscreen ** 2);
      r2 = Math.sqrt((-ym + i * distance + dslit / 2) ** 2 + dscreen ** 2);
      phi = (2.0 * Math.PI * (r2 - r1)) / wavelength;
      temp = Math.cos(phi / 2) ** 2;
      data.push([i, j, temp]);
      // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
    }
    xData.push(-500 * distance + i * distance);
  }
  for (let j = 0; j < 100; j++) {
    yData.push(j - 50);
  }

  option = {
    tooltip: {},
    xAxis: {
      show: false,
      type: 'category',
      data: xData
    },
    yAxis: {
      show: false,
      type: 'category',
      data: yData
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      realtime: false,
      inRange: {
        color: ['#000000', '#ffffff']
      }
    },
    series: [
      {
        name: 'Gaussian',
        type: 'heatmap',
        data: data,
        emphasis: {
          itemStyle: {
            borderColor: '#333',
            borderWidth: 1
          }
        },
        progressive: 1000,
        animation: false
      }
    ]
  };

  myChart.setOption(option);
}