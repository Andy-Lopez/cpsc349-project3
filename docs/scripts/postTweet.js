import * as mockroblog from './mockroblog.js'

const postForm = document.getElementById('postTweet')
const tweetButton = document.getElementById('postTweetButton')

tweetButton.addEventListener('click', (e) => {
  e.preventDefault()
alert(postForm.fname.value)
  const userId = 4
  let text = postForm.fname.value
  text = mockroblog.postMessage(userId, text)
  if (text != null) {
    window.location.replace('/usertimeline.html')
    localStorage.setItem('user_name', username)
  } else {
    alert('Tweet posted')
    location.reload()
  }
})