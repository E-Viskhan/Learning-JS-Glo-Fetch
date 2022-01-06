const getData = ({ url, method = 'GET' }) => {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send();

  return xhr;
};

const sendData = ({ url, method = 'POST', data = {} }) => {
  let xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.send(data);

  return xhr;
};

let response = getData({ url: 'db.json' });
let data;

response.onload = () => {
  if (response.status != 200) {
    console.error(new Error(`Ошибка ${response.status}: ${response.statusText}`));
    return;
  }

  data = JSON.parse(response.response);
  console.log('Полученные данные из db.json:');
  console.log(data);

  let sendResponse = sendData({
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify(data)
  });

  sendResponse.onload = () => {
    if (sendResponse.status != 201) {
      console.error(new Error(`Ошибка ${response.status}: ${response.statusText}`));
      return;
    }

    let answer = JSON.parse(sendResponse.response);
    console.log('Полученные ответ из jsonplaceholder:');
    console.log(answer);
  };

};