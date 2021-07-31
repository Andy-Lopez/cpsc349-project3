import * as mockroblog from './mockroblog.js'

const postForm = document.getElementById('postTweet')
const tweetButton = document.getElementById('postTweetButton')

tweetButton.addEventListener('click', (e) => {
  e.preventDefault()
alert("Tweet posted: " + postForm.tweet.value)
  const userId = 4
  let text = postForm.tweet.value
  text = mockroblog.postMessage(userId, text)
  if (text != null && typeof text !== 'undefined')  {
    window.location.replace('/usertimeline.html?username=self')
    localStorage.setItem('user_name', username)
  } else {
    alert('Please write something!')
    location.reload()
  }
})