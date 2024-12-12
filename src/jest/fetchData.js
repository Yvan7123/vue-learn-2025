async function fecthData(status, msg) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      console.log(status, msg);
      if(status) {
        return resovle(msg);
      } 
      return reject(msg);
    }, 2000)
  })
} 

module.exports = fecthData;