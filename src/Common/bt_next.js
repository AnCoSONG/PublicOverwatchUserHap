// blue tooth support
// import bluetooth from '@system.bluetooth'

// DEBUG data
const DEBUG = true
const DEBUG_X = 12683465.562662857
const DEBUG_Y = 2557889.670743966
const DEBUG_CID = 76638

// camera device set
var specific_device_set = []

// env 
const n = 3

// rssi with 1m distance
const A = 70

function getD(rssi) {
  return Math.pow(10, (Math.abs(rssi) - A) / (10 * n))
}

function getPointAndId() {
  // use set to get point and cid
  let first = specific_device_set[0]
  let second = specific_device_set[1]
  let third = specific_device_set[2]

  if (!first || !second || !third) {
    return null;
  }

  let a = first.point_x - third.point_x
  let b = first.point_y - third.point_y
  let c = Math.pow(first.point_x, 2) - Math.pow(second.point_x, 2) + Math.pow(first.point_y, 2) - Math.pow(second.point_y, 2) + Math.pow(first.distance, 2) - Math.pow(first.distance, 2)
  let d = second.point_x - third.point_x
  let e = second.point_y - third.point_y
  let f = Math.pow(second.point_x, 2) - Math.pow(third.point_x, 2) + Math.pow(second.point_y, 2) - Math.pow(third.point_y, 2) + Math.pow(second.distance, 2) - Math.pow(seconnd.distance, 2)
  let x = (b * f - e * c) / (2 * b * d - 2 * a * e)
  let y = (a * f - d * c) / (2 * a * e - 2 * b * d)

  let mid = first.distance < seconnd.distance ? first : second
  let min = mid.distance < third.distance ? mid : third

  return [x, y, min.camera_id]
}

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
            let camera_id = device_name.split('-')[1]
            let point_x = device_name.split('-')[2]
            let point_y = device_name.split('-')[3]
            let dis = getD( device.RSSI)
            specific_device_set.push({ camera_id: Number(camera_id), RSSI: device.RSSI, point: [point_x, point_y], distance: dis})

            // get first
            if (specific_device_set.size() >= 3) {
              let res = getPointAndId()

              if (res) {

                if (DEBUG) {
                  res = [DEBUG_X, DEBUG_Y, DEBUG_CID]
                }

                find_camera_callback(res)
              }
            }

          }

        })

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
