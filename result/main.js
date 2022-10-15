function paintChartLineBar(value) {
  const chartDom = document.querySelector(".chart-line-bar");
  let myChart = echarts.init(chartDom);
  let option;
 

  option = {
    title: {
      text: "綜合評估",
      backgroundColor: "#ECECEC",
      textStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
      },
      right: "5%",
      top: "15%",
    },
    grid: {
      top: "25%",
      right: "10%",
      bottom: "10%",
      left: "15%",
    },
    xAxis: {
      type: "category",
      data: value.xAxis,
      axisLabel: { interval: 0, fontSize: 10 },
      axisTick: { show: false },
      axisLine: {
        show: true,
        symbol: ["none", "triangle"],
        symbolOffset: [0, 5],
        symbolSize: 10,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      interval: 20,
      axisLine: {
        show: true,
        symbol: ["none", "triangle"],
        symbolOffset: [0, 5],
        symbolSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 0.5,
          color: "#a0a0a0",
          type: "dashed",
        },
      },
    },
    series: [
      {
        data: value.data,
        type: "bar",
        itemStyle: { color: "#e0e0e0", opacity: 0.7 },
        barWidth: "90%",
      },
      {
        data: value.line1,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[0] },
      },
      {
        data: value.line2,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[1] },
      },
      {
        data: value.line3,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[2] },
      },
      {
        data: value.line4,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[3] },
      },
      {
        data: value.line5,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[4] },
      },
    ],
  };

  myChart.setOption(option);
  setTimeout(() => {
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }, 200);
}

function paintChartLineBarNormal(value) {
  const chartDom = document.querySelector(".chart-line-bar");
  let myChart = echarts.init(chartDom);
  let option;
 

  option = {
    title: {
      text: "綜合評估",
      backgroundColor: "#ECECEC",
      textStyle: {
        color: "black",
        fontSize: 16,
        fontWeight: "normal",
      },
      right: "5%",
      top: "15%",
    },
    grid: {
      top: "25%",
      right: "10%",
      bottom: "10%",
      left: "15%",
    },
    xAxis: {
      type: "category",
      data: value.xAxis,
      axisLabel: { interval: 0, fontSize: 10 },
      axisTick: { show: false },
      axisLine: {
        show: true,
        symbol: ["none", "triangle"],
        symbolOffset: [0, 5],
        symbolSize: 10,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      interval: 20,
      axisLine: {
        show: true,
        symbol: ["none", "triangle"],
        symbolOffset: [0, 5],
        symbolSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 0.5,
          color: "#a0a0a0",
          type: "dashed",
        },
      },
    },
    series: [
      {
        data: value.data,
        type: "bar",
        itemStyle: { color: "#e0e0e0", opacity: 0.7 },
        barWidth: "90%",
      },
      {
        data: value.line1,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[0] },
      },
      {
        data: value.line2,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[1] },
      },
      {
        data: value.line3,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[2] },
      },
      {
        data: value.line5,
        type: "line",
        symbol: "circle",
        symbolSize: 4.5,
        itemStyle: { color: value.color[4] },
      },
    ],
  };

  myChart.setOption(option);
  setTimeout(() => {
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }, 200);
}

function paintChartRadar(value) {
  const chartDom = document.querySelector(".chart-radar");
  let myChart = echarts.init(chartDom);
  

  value.dataLast.forEach(function(value, index, array){
     if(value=="0.0"){
		array[index] = "10.0";
	 }
	 
  });
  value.dataThis.forEach(function(value, index, array){
     if(value=="0.0"){
		array[index] = "10.0";
	 }
	 
  });
  
  
  let option;
  option = {
    legend: {
      right: "left",
      orient: "vertical",
      top: 5,
      right: 10,
      itemHeight: 15,
      itemWidth: 15,
      textStyle: {
        padding: [0, 0, 0, -5],
      },
      data: value.legend,
    },
    radar: {
      center: value.center,
      radius: value.radius,
      indicator: value.indicator,
      splitArea: { show: false },
      splitLine: {
        lineStyle: {
          color: ["#000", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0"],
          width: 2,
        },
      },
      nameGap: value.nameGap,
      name: {
        formatter: function (value) {
          return "{" + value + "| }";
        },
        rich: {
          value: {
            color: "#000",
            lineHeight: 30,
            align: "center",
          },
          Perception: {
            height: 40,
            align: "center",
            backgroundColor: {
              image: "./images/icon_05.png",
            },
          },
          Notice: {
            height: 40,
            align: "center",
            backgroundColor: {
              image: "./images/icon_01.png",
            },
          },
          Memory: {
            height: 40,
            align: "center",
            backgroundColor: {
              image: "./images/icon_04.png",
            },
          },
          Action: {
            height: 40,
            align: "center",
            backgroundColor: {
              image: "./images/icon_02.png",
            },
          },
          Talk: {
            height: 40,
            align: "center",
            backgroundColor: {
              image: "./images/icon_03.png",
            },
          },
        },
      },
    },
    series: {
      type: "radar",
      symbolSize: 0,
      lineStyle: {
        width: 0,
      },
      data: [
        {
          value: value.dataLast,
          //name: "本次",
          areaStyle: {
            color: "#22acb2",
            opacity: 0.5,
          },
          z: 10,
        },
        /*{
          value: value.dataThis,
          name: "上次",
          areaStyle: {
            color: "#b6b7b7",
            opacity: 0.5,
          },
          z: 9,
        },*/
      ],
    },
  };
  
  

  
  //console.log(value.dataLast);
  //console.log(value.dataThis);

  myChart.setOption(option);
  setTimeout(() => {
    window.addEventListener("resize", () => {
      myChart.resize();
      console.log("gogoro");
    });
  }, 200);
}

// Value

const valueRadar4 = {
  center: ["50%", "50%"], // radar圖中心
  radius: "60%", // radar圖大小
  nameGap: 10, // icon與雷達圖距離
  legend: [
    { name: "上次", icon: "image://./images/icon_08.png" },
    { name: "本次", icon: "image://./images/icon_09.png" },
  ],
  indicator: [
    {
      name: "Perception",
      max: 100,
      axisLabel: { show: true, fontSize: 8, color: "#848384", margin: 3 },
    },
    { name: "Notice", max: 100 },
    { name: "Action", max: 100 },
    { name: "Memory", max: 100 },
  ],
  dataLast: [0, 0, 0, 0],
  dataThis: [0, 0, 0, 0],
};
const valueRadar5 = {
  center: ["50%", "60%"], // radar圖中心
  radius: "60%", // radar圖大小
  nameGap: 20, // icon與雷達圖距離
  legend: [
    { name: "上次", icon: "image://./images/icon_06.png" },
    { name: "本次", icon: "image://./images/icon_07.png" },
  ],
  indicator: [
    {
      name: "Perception",
      max: 100,
      axisLabel: { show: true, fontSize: 8, color: "#848384", margin: 3 },
    },
    { name: "Notice", max: 100 },
    { name: "Action", max: 100 },
    { name: "Talk", max: 100 },
    { name: "Memory", max: 100 },
  ],
  dataLast: [50, 50, 65, 50, 40],
  dataThis: [70, 60, 70, 50, 60],
};

// // render
// paintChartLineBar(valueLineChart);

const params = window.location.search.split("=")[1];
if (params === "5") paintChartRadar(valueRadar5); //原本4
else if (params === "5") paintChartRadar(valueRadar5); //原本5
// 螢幕測試用(可刪掉)
else if (params === "test") {
  const main = document.querySelector("#main");
  main.innerHTML = "";
  main.style.backgroundColor = "#faf";
  const clientWidth = document.body.clientWidth;
  const clientHeight = document.body.clientHeight;
  const offsetWidth = document.body.offsetWidth;
  const offsetHeight = document.body.offsetHeight;
  main.innerHTML = `
    <ol>
      <li>可視區域寬度：${clientWidth}</li>
      <li>可視區域高度：${clientHeight}</li>
      <li>可視區域寬度(含邊線、捲軸)：${offsetWidth}</li>
      <li>可視區域高度(含邊線、捲軸)：${offsetHeight}</li>
    </ol>
    `;
}

window.onload = function () { 
  return  // Wade 測試用，正式版刪除
  const defaultLiffId = "1657278028-DwV8BvyY"; // change the default LIFF value if you are not using a node server
  // DO NOT CHANGE THIS
  let myLiffId = "";
  // if node is used, fetch the environment variable and pass it to the LIFF method
  myLiffId = defaultLiffId;
  initializeLiffOrDie(myLiffId);
  //default chart
  const valueRadar5 = {
    center: ["50%", "60%"], // radar圖中心
    radius: "60%", // radar圖大小
    nameGap: 20, // icon與雷達圖距離
    legend: [
      { name: "上次", icon: "image://./images/icon_06.png" },
      { name: "本次", icon: "image://./images/icon_07.png" },
    ],
    indicator: [
      {
        name: "Perception",
        max: 100,
        axisLabel: { show: true, fontSize: 8, color: "#848384", margin: 3 },
      },
      { name: "Notice", max: 100 },
      { name: "Action", max: 100 },
      { name: "Talk", max: 100 },
      { name: "Memory", max: 100 },
    ],
    dataLast: [0, 0, 0, 0, 0],
    dataThis: [0, 0, 0, 0, 0],
  };
  paintChartRadar(valueRadar4);
  console.log(document.getElementById("photo").offsetWidth);
  console.log(document.getElementById("photo").offsetHeight);
  
};
/**
 * Check if myLiffId is null. If null do not initiate liff.
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiffOrDie(myLiffId) {
  if (!myLiffId) {
    document.getElementById("liffAppContent").classList.add("hidden");
    document.getElementById("liffIdErrorMessage").classList.remove("hidden");
  } else {
    initializeLiff(myLiffId);
  }
}
/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  // window.alert("vw: " + vw);
  // window.alert("vh: " + vh);

  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {
      // start to use LIFF's api
      // initializeApp();
      if (!liff.isLoggedIn()) {
        // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
        liff.login();
      } else {
        liff
          .getProfile()
          .then(function (profile) {
            $.ajax({
              type: "GET",
              url: "/api/userHistory/getScore?uid=" + profile.userId,
              cache: false,
              dataType: "json",
              // data: { user_id: profile.userId },
              //contentType: "application/json",
              success: function (res, status) {
                console.log(res);
                if (res[0].testType == 5) { //原本4
                  let valueRadar4 = {
                    center: ["50%", "50%"], // radar圖中心
                    radius: "60%", // radar圖大小
                    nameGap: 10, // icon與雷達圖距離
                    legend: [
                      {
                        name: "上次",
                        icon: "image://./images/icon_08.png",
                      },
                      {
                        name: "本次",
                        icon: "image://./images/icon_09.png",
                      },
                    ],
                    indicator: [
                      {
                        name: "Perception",
                        max: 100,
                        axisLabel: {
                          show: true,
                          fontSize: 8,
                          color: "#848384",
                          margin: 3,
                        },
                      },
                      { name: "Notice", max: 100 },
                      { name: "Action", max: 100 },
                      { name: "Memory", max: 100 },
                    ],
                    dataLast: [0, 0, 0, 0],
                    dataThis: [0, 0, 0, 0],
                  };
                  if (res[0]) {
                    valueRadar4.dataLast = [
                      res[0].getScoreRatioArray[0],
                      res[0].getScoreRatioArray[1],
                      res[0].getScoreRatioArray[2],
                      res[0].getScoreRatioArray[4],
                    ];
                  }
                  if (res[1]) {
                    valueRadar4.dataThis = [
                      res[1].getScoreRatioArray[0],
                      res[1].getScoreRatioArray[1],
                      res[1].getScoreRatioArray[2],
                      res[1].getScoreRatioArray[4],
                    ];
                  }

                  paintChartRadar(valueRadar4);
                } else if (res[0].testType == 6) { //原本5
                  let valueRadar5 = {
                    center: ["50%", "60%"], // radar圖中心
                    radius: "60%", // radar圖大小
                    nameGap: 20, // icon與雷達圖距離
                    legend: [
                      {
                        name: "上次",
                        icon: "image://./images/icon_06.png",
                      },
                      {
                        name: "本次",
                        icon: "image://./images/icon_07.png",
                      },
                    ],
                    indicator: [
                      {
                        name: "Perception",
                        max: 100,
                        axisLabel: {
                          show: true,
                          fontSize: 8,
                          color: "#848384",
                          margin: 3,
                        },
                      },
                      { name: "Notice", max: 100 },
                      { name: "Action", max: 100 },
                      { name: "Talk", max: 100 },
                      { name: "Memory", max: 100 },
                    ],
                    dataLast: [0, 0, 0, 0, 0],
                    dataThis: [0, 0, 0, 0, 0],
                  };
                  if (res[0]) {
                    valueRadar5.dataLast = res[0].getScoreRatioArray;
                  }
                  if (res[1]) {
                    valueRadar5.dataThis = res[1].getScoreRatioArray;
                  }
                  paintChartRadar(valueRadar5);
                } else {
                  let valueRadar5 = {
                    center: ["50%", "60%"], // radar圖中心
                    radius: "60%", // radar圖大小
                    nameGap: 20, // icon與雷達圖距離
                    legend: [
                      {
                        name: "上次",
                        icon: "image://./images/icon_06.png",
                      },
                      {
                        name: "本次",
                        icon: "image://./images/icon_07.png",
                      },
                    ],
                    indicator: [
                      {
                        name: "Perception",
                        max: 100,
                        axisLabel: {
                          show: true,
                          fontSize: 8,
                          color: "#848384",
                          margin: 3,
                        },
                      },
                      { name: "Notice", max: 100 },
                      { name: "Action", max: 100 },
                      { name: "Talk", max: 100 },
                      { name: "Memory", max: 100 },
                    ],
                    dataLast: [0, 0, 0, 0, 0],
                    dataThis: [0, 0, 0, 0, 0],
                  };
                  paintChartRadar(valueRadar5);
                }
                $.ajax({
                  type: "GET",
                  url: "/api/userHistory/getScoreMore?uid=" + profile.userId,
                  cache: false,
                  dataType: "json",
                  success: function (resMore, status) {
                    let chartDateArray = [];
                    resMore.dateArray.forEach((date) => {
                      chartDateArray.unshift(
                        moment(date.s).format("YYYY[\n]MM")
                      );
                    });
                    let chartTotalArray = [];
                    let lineTypeAArray = [];
                    let lineTypeBArray = [];
                    let lineTypeCArray = [];
                    let lineTypeDArray = [];
                    let lineTypeEArray = [];

                    resMore.everyMonth.forEach((monthData) => {
                      let tempA = 0;
                      let tempB = 0;
                      let tempC = 0;
                      let tempD = 0;
                      let tempE = 0;
                      let tempall = 0;
                      let countA = 0;
                      let countB = 0;
                      let countC = 0;
                      let countD = 0;
                      let countE = 0;

                      monthData.forEach((data) => {
                        try {
                          if (
                            data.getScoreRatioArray[0] &&
                            data.getScoreRatioArray[0] != "NaN"
                          ) {
                            tempA += Number(data.getScoreRatioArray[0]);
                            countA += 1;
                          }
                          if (
                            data.getScoreRatioArray[1] &&
                            data.getScoreRatioArray[1] != "NaN"
                          ) {
                            tempB += Number(data.getScoreRatioArray[1]);
                            countB += 1;
                          }
                          if (
                            data.getScoreRatioArray[2] &&
                            data.getScoreRatioArray[2] != "NaN"
                          ) {
                            tempC += Number(data.getScoreRatioArray[2]);
                            countC += 1;
                          }
                          if (
                            data.getScoreRatioArray[3] &&
                            data.getScoreRatioArray[3] != "NaN"
                          ) {
                            tempD += Number(data.getScoreRatioArray[3]);
                            countD += 1;
                          }
                          if (
                            data.getScoreRatioArray[4] &&
                            data.getScoreRatioArray[4] != "NaN"
                          ) {
                            tempE += Number(data.getScoreRatioArray[4]);
                            countE += 1;
                          }
                        } catch (err) {
                          console.log(err);
                        }
                      });
                      tempall = tempA + tempB + tempC + tempD + tempE;

                      if (tempA == 0) {
                        lineTypeAArray.unshift(0);
                      } else {
                        lineTypeAArray.unshift(tempA / countA);
                      }
                      if (tempB == 0) {
                        lineTypeBArray.unshift(0);
                      } else {
                        lineTypeBArray.unshift(tempB / countB);
                      }
                      if (tempC == 0) {
                        lineTypeCArray.unshift(0);
                      } else {
                        lineTypeCArray.unshift(tempC / countC);
                      }
                      if (tempD == 0) {
                        lineTypeDArray.unshift(0);
                      } else {
                        lineTypeDArray.unshift(tempD / countD);
                      }
                      if (tempE == 0) {
                        lineTypeEArray.unshift(0);
                      } else {
                        lineTypeEArray.unshift(tempE / countE);
                      }
                      if (tempall == 0) {
                        chartTotalArray.unshift(0);
                      } else {
                        chartTotalArray.unshift(
                          tempall / (countA + countB + countC + countD + countE)
                        );
                      }
                    });
                    const valueLineChart = {
                      color: [
                        "#22ACB2",
                        "#CD8188",
                        "#ECCB4D",
                        "#0A88C7",
                        "#504E50",
                      ],
                      xAxis: chartDateArray,
                      data: chartTotalArray,
                      line1: lineTypeAArray,
                      line2: lineTypeBArray,
                      line3: lineTypeCArray,
                      line4: lineTypeDArray,
                      line5: lineTypeEArray,
                    };
                    //if(res[0].testType == 4){
					if(true){
                        paintChartLineBarNormal(valueLineChart);
                        //document.getElementsByClassName('color-4')[0].remove();
                    }else{
                        paintChartLineBar(valueLineChart);
                    }
                  },
                  error: function (res) {
                    window.alert(
                      "Error getting score More Chart: " + res.status
                    );
                  },
                  complete: function (data) {},
                });
              },
              error: function (res) {
                window.alert("Error getting score summary: " + res.status);
              },
              complete: function (data) {},
            });
          })
          .catch(function (error) {
            window.alert("Error getting profile: " + error.message);
          });
      }
    })
    .catch((err) => {
      document.getElementById("liffAppContent").classList.add("hidden");
      document
        .getElementById("liffInitErrorMessage")
        .classList.remove("hidden");
    });
}
