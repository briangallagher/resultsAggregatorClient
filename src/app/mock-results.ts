"use strict";

exports.RESULTS = {
  "cpuResults": {
    "inputs": [{
      "name": "Test Description",
      "value": "Cpu Load"
    }, {
      "name": "Test Duration (seconds)",
      "value": "300"
    },{
      "name": "Number of Test Runs",
      "value": "300"
    }],
    "outputs": {
      "charts": [ {
        id: '1',
        chartData: [
          ['Scale Policy', 'Based on 100 Test Runs per policy',],
          ['Kubernetes AutoScale', 2],
          ['Policy Based Scale', 6.55]
        ],
        chartOptions: {
          title: 'Mean Number of Pods Used. Based on all CPU Load Test Runs',
          hAxis: {
            title: 'Number of Pods (Resource Cost)',
            minValue: 0
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      },{
        id: '2',
        chartData: [
          ['Scale Policy', 'Total Requests Sent', 'Successful Requests', 'Failed Requests'],
          ['Kubernetes AutoScale', 1000, 400, 200],
          ['Policy Based Scale', 1170, 460, 250],
        ],
        chartOptions: {
          title: 'Mean Requests. Based on all CPU Load Test Runs',
          hAxis: {
            title: 'Number of Requests',
            minValue: 0
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      },{
        id: '3',
        chartData: [
          ['Scale Policy', 'Based on 100 Test Runs per policy',],
          ['Kubernetes AutoScale', 80],
          ['Policy Based Scale', 95]
        ],
        chartOptions: {
          title: 'Mean Percentage Uptime. Based on all CPU Load Test Runs',
          hAxis: {
            title: 'Percentage Uptime',
            minValue: 0,
            maxValue: 100,
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      }]
    }
  },
  "memoryResults": {
    "inputs": [{
      "name": "Test Description",
      "value": "Memory Load"
    }, {
      "name": "Test Duration (seconds)",
      "value": "300"
    },{
      "name": "Number of Test Runs",
      "value": "300"
    }],
    "outputs": {
      "charts": [ {
        id: '1',
        chartData: [
          ['Scale Policy', 'Based on 100 Test Runs per policy',],
          ['Kubernetes AutoScale', 3000],
          ['Policy Based Scale', 12000]
        ],
        chartOptions: {
          title: 'Mean Latency in milliseconds. Based on all Memory Load Test Runs',
          hAxis: {
            title: 'Request latency in milliseconds',
            minValue: 0
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      }]
    }
  },
  "ioResults": {
    "inputs": [{
      "name": "Test Description",
      "value": "Memory Load"
    }, {
      "name": "Test Duration (seconds)",
      "value": "300"
    },{
      "name": "Number of Test Runs",
      "value": "300"
    }],
    "outputs": {
      "charts": [ {
        id: '1',
        chartData: [
          ['Scale Policy', 'Based on 100 Test Runs per policy',],
          ['Kubernetes AutoScale', 200],
          ['Policy Based Scale', 400]
        ],
        chartOptions: {
          title: 'Mean Throughput in Bytes/Sec. Based on all IO Load Test Runs',
          hAxis: {
            title: 'Throughput in Bytes/Sec',
            minValue: 0
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      },{
        id: '2',
        chartData: [
          ['Scale Policy', 'Based on 100 Test Runs per policy',],
          ['Kubernetes AutoScale', 3],
          ['Policy Based Scale', 8]
        ],
        chartOptions: {
          title: 'Mean Requests/Second. Based on all IO Load Test Runs',
          hAxis: {
            title: 'Requests/Second',
            minValue: 0
          },
          vAxis: {
            title: 'Scale Policy'
          },
          width: 900,
          height: 500
        },
        chartType: 'BarChart'
      }]
    }
  }
};



