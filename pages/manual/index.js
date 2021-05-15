// index.js
const ManualData = require('./data.js');
Page({
  data: {
    manualData:ManualData,
    titleIndex:'',
    subtitIndex:'',
    manualText:'',
  },
  // 事件处理函数
  bindManualChange(e) {
    if(e.target.dataset.id == 'tit'){
      this.setData({
        titleIndex: e.detail.value,
        subtitIndex: ''
      })
    } else {
      const {manualData,titleIndex} = this.data;
      this.setData({
        subtitIndex: e.detail.value,
        manualText: manualData[titleIndex].content[e.detail.value].content
      })
    }
  },
  
  onLoad() {
     const {titleIndex,manualData,subtitIndex} = this.data;
    if(manualData[titleIndex]&&manualData[titleIndex].content[subtitIndex]) {
      this.setData({
        manualText: manualData[titleIndex].content[subtitIndex].content
      })
    }
    console.log(titleIndex)
  },
})
