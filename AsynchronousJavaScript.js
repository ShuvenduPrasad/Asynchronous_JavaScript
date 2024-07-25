// Simulating a delay for fetching data
const simulateFetch = (data, delay) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(data);
      }, delay);
  });
};

// Function to fetch user data
const fetchUserData = () => {
  // Simulating a network request to fetch user data
  return simulateFetch({ id: 1, name: 'John Doe' }, 2000);
};

// Function to fetch user posts based on user ID
const fetchUserPosts = (userId) => {
  // Simulating a network request to fetch user posts
  return simulateFetch([
      { id: 1, content: 'Hello world!' },
      { id: 2, content: 'Learning JavaScript.' }
  ], 1000);
};

// Using Promises
fetchUserData()
  .then(user => {
      console.log('User data:', user);
      return fetchUserPosts(user.id);
  })
  .then(posts => {
      console.log('User posts:', posts);
  })
  .catch(error => {
      console.error('Error:', error);
  });

// Using async/await
const displayUserData = async () => {
  try {
      const user = await fetchUserData();
      console.log('User data:', user);
      const posts = await fetchUserPosts(user.id);
      console.log('User posts:', posts);
  } catch (error) {
      console.error('Error:', error);
  }
};

displayUserData();
