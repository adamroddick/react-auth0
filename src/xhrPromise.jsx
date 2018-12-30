var makeRequest = function(method, url) {
  var xhr2 = new XMLHttpRequest();

  return new Promise(function(resolve, reject) {
    xhr2.onreadystatechange = function() {
      if (xhr2.readyState !== 4) return;

      if (xhr2.status >= 200 && xhr2.status < 300) {
        // console.log("makeRequest success");
        resolve(xhr2);
      } else {
        // console.log("makeRequest failed");
        reject({
          status: xhr2.status,
          statusText: xhr2.statusText
        });
      }
    };
    xhr2.open(method, url);
    xhr2.send();
  });
};

export default makeRequest