// index.js
const ManualData = require('./data.js');
Page({
  data: {
    manualData:ManualData,
    titleIndex:-1,
    subtitIndex:-1,
    manualText:'',
    titleImg: '',
  },
  // 事件处理函数
  bindManualChange(e) {
    const {manualData,titleIndex,subtitIndex} = this.data;

    if(e.target.dataset.id == 'tit'){
      if(e.detail.value == titleIndex) {
        return;
      }
      this.setData({
        titleIndex: e.detail.value,
        subtitIndex: -1,
        manualText: '',
        titleImg: manualData[e.detail.value].img
      })
    } else if (e.detail.value != subtitIndex) {
      this.setData({
        subtitIndex: e.detail.value,
        manualText: manualData[titleIndex].content[e.detail.value].content
      })
    }
  },
  copyText(e) {
    const system = wx.getSystemInfoSync();
    if(system.platform != 'ios') {
      return;
    }
    const texts = this.data.manualText.replace(/<[^>]+>/g, "");

    wx.setClipboardData({
      data: texts,
      success() {
        wx.showToast({
          title: '复制成功',
        })
      }
    })
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
