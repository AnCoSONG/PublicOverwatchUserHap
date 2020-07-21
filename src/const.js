export const baseUrl = 'http://182.92.208.47:8899'
export const webUrl = 'http://182.92.208.47:8086/Indoor/' //线上环境
// export const webUrl = 'http://192.168.1.103:8080/map/Indoor/' //测试环境

export const ucUrl = 'http://192.168.1.103:8080/fluent/'
// export const ucUrl = 'http://182.92.208.47:8087/'

export const isJSON = function(data){
    try{
        let res = JSON.parse(data)
        return res;
    }
    catch(err){
        return false;
    }
}

export const mapObject = {
    minX: 12683407.7862835,
    maxX: 12683523.7078037,
    minY: 2557838.358881,
    maxY: 2557927.7459812,
    center: {
        x: 12683465.7470436,
        y: 2557883.0524311
    }
}

// 经纬度转换成三角函数中度分表形式。
function rad(d) {
    return d * Math.PI / 180.0; 
}


// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
export function getDistanceByLL(_lat1, _lng1, _lat2, _lng2) {
    let lat1 = Number(_lat1);
    let lat2 = Number(_lat2);
    let lng2 = Number(_lng2);
    let lng1 = Number(_lng2);
    console.log(`开始计算 ${lat1} ${lat2} ${lng1} ${lng2}`)
    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里

    var distance = s;
    var distance_str = "";
    console.log("得出的距离", s)

    if (parseInt(distance) >= 1) {
        distance_str = distance.toFixed(1) + "km";
    } else {
        distance_str = (distance * 1000).toFixed(1) + "m";
    }

    //s=s.toFixed(4);
    console.info('lyj 距离是', s);
    console.info('lyj 距离是', distance_str);
    return distance_str;
}

export function Mercator2lonLat(mercatorX, mercatorY) {
    var xy = [];
    var x = mercatorX / 20037508.34 * 180;
    var y = mercatorY / 20037508.34 * 180;
    y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
    xy.push(x);
    xy.push(y);
    return xy;
}