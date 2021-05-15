const DeviceData = require('./data.js');

Page({
  data: {
    deviceData:DeviceData,
    index: '',
    inputValue: '',
    renderData:null,
  },
  inputHandle(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindDeviceChange(e) {
    this.setData({
      index: e.detail.value,
      renderData:[DeviceData[e.detail.value]]
    })
  },
  
  clearInput() {
    this.setData({
      inputValue: ''
    })
  },
  searchHandle() {
    const {inputValue} = this.data;
    let renderData = [];
    if(inputValue.trim()) {
      DeviceData.forEach((device) => {
        if(device.name.indexOf(inputValue.trim()) > -1) {
          renderData.push(device);
        }
      });
      this.setData({
        renderData
      });
    }
  },

  onLoad() {
    const {deviceData,index} = this.data;
    this.setData({
      renderData: deviceData[index] && [deviceData[index]]
    })
  }
})