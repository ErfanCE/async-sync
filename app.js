const userVideos = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) return reject('invalid username');

    setTimeout(() => {
      const videos = [
        'video-1.pdf',
        'video-2.mp4',
        'video-3.mp4',
        'video-4.mp4'
      ];

      resolve(videos);
    }, 1000);
  });
};

const userArticles = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) return reject('invalid username');

    setTimeout(() => {
      const articles = [
        'article-1.pdf',
        'article-2.pdf',
        'article-3.pdf',
        'article-4.pdf'
      ];

      resolve(articles);
    }, 1000);
  });
};

// !!Promise.all
// const main = async () => {
//   const [videos, articles] = await Promise.all([
//     userVideos('erfan'),
//     userArticles('erfan')
//   ]);

//   console.log(articles);
//   console.log(videos);
// };
// main();

const serverA = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) return reject('invalid');

    setTimeout(() => {
      const user = { email: username };

      resolve(user);
    }, 12000);
  });
};

const serverB = (username) => {
  return new Promise((resolve, reject) => {
    if (!username) return reject('invalid');

    setTimeout(() => {
      const user = { email: username };

      resolve(user);
    }, 1000);
  });
};

// !!Promise.race
Promise.race([serverA('user@jmail.com'), serverB('user@jmail.com')])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
