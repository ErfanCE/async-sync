// callback => async
/*
const loginUser = (username, password, cb) => {
  if (!username || !password) {
    return console.error('invalid username or password');
  }

  setTimeout(() => {
    console.log('you are logged in successfully.');

    cb({ email: username });
  }, 1500);
};

const userPosts = (email, cb) => {
  if (!email) return console.error('invalid user email');

  setTimeout(() => {
    console.log('your posts: ');
    const posts = ['post-1', 'post-2', 'post-3', 'post-4'];

    cb(posts);
  }, 2000);
};

const postDetail = (post, cb) => {
  if (!post) return console.error('invalid post');

  setTimeout(() => {
    cb('post detail ...');
  }, 1000);
};

loginUser('erfan@Jmail.com', 'user1234', (userInfo) => {
  userPosts(userInfo.email, (posts) => {
    posts.forEach((post) => {
      postDetail(post, (result) => {
        console.log(`${post}: ${result}`);
      });
    });
  });
});
*/

// Promise
const loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      return reject('invalid username or password');
    }

    setTimeout(() => {
      console.log('you are logged in successfully.');
      resolve({ email: username });
    }, 1500);
  });
};

const userPosts = (email) => {
  return new Promise((resolve, reject) => {
    if (!email) return reject('invalid user email');

    setTimeout(() => {
      console.log('your posts: ');
      const posts = ['post-1', 'post-2', 'post-3', 'post-4'];

      resolve(posts);
    }, 2000);
  });
};

const postDetail = (post) => {
  return new Promise((resolve, reject) => {
    if (!post) return reject('invalid post');

    setTimeout(() => {
      resolve('post detail ...');
    }, 1000);
  });
};

// Promise
/*
loginUser('erfan@Jmail.com', 'user1234')
  .then((userInfo) => {
    return userPosts(userInfo.email);
  })
  .then((posts) => {
    posts.forEach((post) => {
      postDetail(null)
        .then((detail) => {
          console.log(`${post}: ${detail}`);
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((err) => console.error(err));
  */

// async-await
const test = async () => {
  try {
    const userInfo = await loginUser(null, 'user1234');
    const posts = await userPosts(userInfo.email);

    for (const post of posts) {
      const detail = await postDetail(post);

      console.log(`${post}: ${detail}`);
    }
  } catch (err) {
    console.error(err);
  }
};
test();
