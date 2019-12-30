export const pie = {
	backgroundColor: "#ffffff",
	    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
	    series: [{
	      label: {
	        normal: {
	          fontSize: 14
	        }
	      },
	      type: 'pie',
	      center: ['50%', '50%'],
	      radius: [0, '60%'],
	      data: [{
	        value: 55,
	        name: '北京'
	      }, {
	        value: 20,
	        name: '武汉'
	      }, {
	        value: 10,
	        name: '杭州'
	      }, {
	        value: 20,
	        name: '广州'
	      }, {
	        value: 38,
	        name: '上海'
	      },
	      ],
	      itemStyle: {
	        emphasis: {
	          shadowBlur: 10,
	          shadowOffsetX: 0,
	          shadowColor: 'rgba(0, 2, 2, 0.3)'
	        }
	      }
	    }]
}

export const bar = {
	color: ['#37a2da', '#32c5e9', '#67e0e3'],
	    tooltip: {
	      trigger: 'axis',
	      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
	        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	      },
	      confine: true
	    },
	    legend: {
	      data: ['热度', '正面', '负面']
	    },
	    grid: {
	      left: 20,
	      right: 20,
	      bottom: 15,
	      top: 40,
	      containLabel: true
	    },
	    xAxis: [
	      {
	        type: 'value',
	        axisLine: {
	          lineStyle: {
	            color: '#999'
	          }
	        },
	        axisLabel: {
	          color: '#666'
	        }
	      }
	    ],
	    yAxis: [
	      {
	        type: 'category',
	        axisTick: { show: false },
	        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
	        axisLine: {
	          lineStyle: {
	            color: '#999'
	          }
	        },
	        axisLabel: {
	          color: '#666'
	        }
	      }
	    ],
	    series: [
	      {
	        name: '热度',
	        type: 'bar',
	        label: {
	          normal: {
	            show: true,
	            position: 'inside'
	          }
	        },
	        data: [300, 270, 340, 344, 300, 320, 310],
	        itemStyle: {
	          // emphasis: {
	          //   color: '#37a2da'
	          // }
	        }
	      },
	      {
	        name: '正面',
	        type: 'bar',
	        stack: '总量',
	        label: {
	          normal: {
	            show: true
	          }
	        },
	        data: [120, 102, 141, 174, 190, 250, 220],
	        itemStyle: {
	          // emphasis: {
	          //   color: '#32c5e9'
	          // }
	        }
	      },
	      {
	        name: '负面',
	        type: 'bar',
	        stack: '总量',
	        label: {
	          normal: {
	            show: true,
	            position: 'left'
	          }
	        },
	        data: [-20, -32, -21, -34, -90, -130, -110],
	        itemStyle: {
	          // emphasis: {
	          //   color: '#67e0e3'
	          // }
	        }
	      }
	    ]
}

export const line = {
	title: {
	      text: '测试下面legend的红色区域不应被裁剪',
	      left: 'center'
	    },
	    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
	    legend: {
	      data: ['A', 'B', 'C'],
	      top: 50,
	      left: 'center',
	      backgroundColor: 'red',
	      z: 100
	    },
	    grid: {
	      containLabel: true
	    },
	    tooltip: {
	      show: true,
	      trigger: 'axis'
	    },
	    xAxis: {
	      type: 'category',
	      boundaryGap: false,
	      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	      // show: false
	    },
	    yAxis: {
	      x: 'center',
	      type: 'value',
	      splitLine: {
	        lineStyle: {
	          type: 'dashed'
	        }
	      }
	      // show: false
	    },
	    series: [{
	      name: 'A',
	      type: 'line',
	      smooth: true,
	      data: [18, 36, 65, 30, 78, 40, 33]
	    }, {
	      name: 'B',
	      type: 'line',
	      smooth: true,
	      data: [12, 50, 51, 35, 70, 30, 20]
	    }, {
	      name: 'C',
	      type: 'line',
	      smooth: true,
	      data: [10, 30, 31, 50, 40, 20, 10]
	}]
}