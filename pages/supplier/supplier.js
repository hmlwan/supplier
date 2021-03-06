const SupplierData = require('./data');

Page({
  data:{
    inputValue: '',
    renderData: null
  },

  inputHandle(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  clearInput() {
    this.setData({
      inputValue: ''
    })
  },

  searchHandle(e) {
    const {inputValue} = this.data;
    const type = e.target.dataset.id;
    let renderData = [];
    if(inputValue.trim()) {
      if(type == 'company') {
        SupplierData.forEach((supplier) => {
          if(supplier.company.indexOf(inputValue.trim()) > -1) {
            renderData.push(supplier);
          }
        })
      } else if (type == 'people') {
        SupplierData.forEach((supplier) => {
          supplier.people.forEach((peo) => {
            if(peo.name.indexOf(inputValue.trim()) > -1) {
              renderData.push(peo);
            }
           })
        });
      } else if (type == 'species') {
        SupplierData.forEach((supplier) => {
          if(supplier.species.indexOf(inputValue.trim()) > -1) {
            renderData.push(supplier);
          }
        });
      }
    }else {
      wx.showToast({
        title: '请输入查询条件',
        icon: 'none'
      });
    }
    this.setData({
      renderData,
    })
  }
})