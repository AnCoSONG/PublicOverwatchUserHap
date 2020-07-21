// blue tooth support
// import bluetooth from '@system.bluetooth'

// camera device set
var specific_device_set = new Set()

// main
async function bt(bluetooth, find_camera_callback) {

  // open bluetooth
  bluetooth.openAdapter({
    operateAdapter: true,
    success: function (data) {
      console.log("Success")
      bluetooth.getAdapterState({
        success: function (data) {
          console.log(
            `handling adapter state, available = ${data.available}, discovering = ${
            data.discovering
            }`
          )
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code} data = ${data}`)
        },
        complete: function () {
          console.log('complete')
        }
      });
    },
    fail: function (data, code) {
      console.log(`bt open fail, code = ${code}, data=${data}`)
    },
    complete: function (data) {
      console.log("completed!")
    }
  })



  // 在扫描之前先注册设备发现回调
  bluetooth.ondevicefound = function (data) {
    console.log("Data", JSON.stringify( data))
    bluetooth.getDevices({
      success: function (data) {
        console.log("Get Devices")
        console.log(JSON.stringify(data))
        data.devices.forEach(device => {

          let device_name = device.name

          if (device_name.substring(0, 3) == "OW-") {
            // 发现了camera才停止扫描，保证每次都会向调用者返回有效数据
            bluetooth.stopDevicesDiscovery();
            bluetooth.closeAdapter({
              operateAdapter: false,
              fail: function (data, code) {
                console.log(`bt open fail, code = ${code}, data=${data}`)
              }
            })
            let camera_id = device_name.substring(3)
            specific_device_set.add({ camera_id: Number(camera_id), RSSI: device.RSSI })
            find_camera_callback([...specific_device_set])
          }

        })

        // 上层回调
        /**
         * 回调使用方法：
         * 
         *  function(all_camera_list) {
         * 
         *    // all_camera_list是list
         *    all_camera_list.forEach(device_item => {
         *        let camera_id = device_item.camera_id; // Number类型
         *        let strong    = device_item.RSSI;      // Number类型   
         *    });
         * 
         * }
         * 
         */

      }
    })
  };

  //开始扫描
  bluetooth.startDevicesDiscovery({
    success: function () {
      console.log('start discovery success')
    },
    fail:function(data, code){
      console.log(`bt start discovery fail, code = ${code}, data=${data}`)
    }
  });

}

module.exports = bt;
