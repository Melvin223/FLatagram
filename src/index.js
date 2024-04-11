fetch('http://localhost:3000/images/1')
  .then(response => response.json())
  .then(data => {
    document.getElementById('card-title').textContent = data.title;
    document.getElementById('card-image').src = data.image;
  })
  .catch(error => console.error('Error fetching image:', error));


  document.getElementById('like-button').addEventListener('click', function() {
    let currentLikes = parseInt(document.getElementById('like-count').textContent);
    currentLikes++;
    document.getElementById('like-count').textContent = currentLikes;
  });

  
  fetch('http://localhost:3000/images/1')
  .then(response => response.json())
  .then(data => {
    data.comments.forEach(comment => {
      let listItem = document.createElement('li');
      listItem.textContent = comment.content;
      document.getElementById('comments-list').appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching comments:', error));


  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    let commentContent = document.getElementById('comment-input').value;
  
    
    let newComment = {
      imageId: 1, 
      content: commentContent
    };
  
    
    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
    .then(response => response.json())
    .then(data => {
      
      let listItem = document.createElement('li');
      listItem.textContent = data.content;
      
      document.getElementById('comments-list').appendChild(listItem);
    })
    .catch(error => console.error('Error adding comment:', error));
  
    
    document.getElementById('comment-input').value = '';
  });
  
  
