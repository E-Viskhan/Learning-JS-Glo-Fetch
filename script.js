const getData = ({ url, method = 'GET' }) => fetch(url, { method });

const sendData = ({ url, method = 'POST', data = {} }) => fetch(url, { method, body: data });

getData({ url: 'db.json' })
  .then(data => data.json())
  .then(json => {
    console.log(json);
    sendData({ url: 'https://jsonplaceholder.typicode.com/posts', data: json })
      .then(() => {
        console.log('Успешная отправка данных');
      })
      .catch(() => console.error(new Error('Что-то пошло не так при отправке данных')));
  })
  .catch(() => {
    console.error(new Error(`Ошибка при получении файла. Возможна ошибка в названии файла`));
  });