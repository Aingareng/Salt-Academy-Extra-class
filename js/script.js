fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    json.forEach(element => {
      const { userId, id, title } = element
      console.log(title)
    });
  }) 
