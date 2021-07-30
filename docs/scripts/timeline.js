import * as mockroblog from './mockroblog.js'

export function getUserbyID (id) {
  if (id === 1) {
    return {
      id: 1,
      username: 'ProfAvery',
      email: 'kavery@fullerton.edu',
      password: 'password'
    }
  } else if (id === 2) {
    return {
      id: 2,
      username: 'KevinAWortman',
      email: 'kwortman@fullerton.edu',
      password: 'qwerty'
    }
  } else if (id === 3) {
    return {
      id: 3,
      username: 'Beth_CSUF',
      email: 'beth.harnick.shapiro@fullerton.edu',
      password: 'secret'
    }
  }

  return null
}



const sPath = window.location.pathname
const sPage = sPath.substring(sPath.lastIndexOf('/') + 1)

if (sPage === 'usertimeline.html'){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let current_page_user = urlParams.get('username')
  let logged_in_user = localStorage.getItem('user_name')

  if (current_page_user === logged_in_user || current_page_user === "self"){
    document.getElementById("follow_unfollow_button").innerHTML="ME"
    
  }
  else if(mockroblog.isfollowing(current_page_user,logged_in_user) === true){
    document.getElementById("follow_unfollow_button").innerHTML="UNFOLLOW"
  }
  else {
    document.getElementById("follow_unfollow_button").innerHTML="FOLLOW"
  }



  follow_unfollow_button.addEventListener("click", (e) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let current_page_user = urlParams.get('username')
    let logged_in_user = localStorage.getItem('user_name')
  
    if (current_page_user === logged_in_user || current_page_user === "self"){
      alert("You Can't Follow/Unfollow yourself")
      
    }
    else if(mockroblog.isfollowing(current_page_user,logged_in_user) === true){
      alert("You have Unfollowed  "+current_page_user)
      let loggedinuserID = mockroblog.getUserbyID(logged_in_user).id
      let usertofollowID = mockroblog.getUserbyID(current_page_user).id
      mockroblog.removeFollower(loggedinuserID, usertofollowID)
      document.getElementById("follow_unfollow_button").innerHTML="FOLLOW"
    }
    else {
      alert("You are now following "+current_page_user)
      let loggedinuserID = mockroblog.getUserbyID(logged_in_user).id
      let usertofollowID = mockroblog.getUserbyID(current_page_user).id
      mockroblog.addFollower(loggedinuserID, usertofollowID)
      document.getElementById("follow_unfollow_button").innerHTML="UNFOLLOW"
    }
  
  
  })

}
// window.onload = alert(localStorage.getItem("user_name"));

// if(sPage === "publishTimeline.html"){
//     window.mockroblog = mockroblog
//     var result = publicTimeline()
//     const display = document.querySelector('#timeline-json')
//     const timeline = mockroblog.getPublicTimeline()
//      display.textContent= result
//     // display.textContent = JSON.stringify(timeline, null, 2)
//  }
if (sPage === 'publishtimeline.html') {
  var timeline = mockroblog.getPublicTimeline()
  var container
  container = document.getElementById('timeline-json')

  for (let i = 0; i < timeline.length; i++) {
    var username = getUserbyID(timeline[i].user_id)
    container.innerHTML += "<li class='divD' >" +
          "<div class=''>" + "<img src='https://i.pravatar.cc/50' width='40' height='40' class='rounded-full'>" +
              "<div class='div_timeline'>" + "<a href='usertimeline.html?username=" + username.username + "'class='a_timeline'>" + username.username + "</a> <span class='span_timeline2'>" +
              timeline[i].text + '</span> </div>' +
          '</div>' +
          '<div >' + timeline[i].timestamp + '</div>' +
          '</li>'
    container.innerHTML += '<br>'
  }
} else if (sPage === 'usertimeline.html') {
  // var logged_in_user = localStorage.getItem('user_name')
  const queryString = window.location.search;
  
  const urlParams = new URLSearchParams(queryString);
  let logged_in_user = urlParams.get('username')
  if (logged_in_user === "self"){
    logged_in_user = localStorage.getItem('user_name')
    console.log(logged_in_user)
  }
  console.log(logged_in_user)
  var timeline = mockroblog.getUserTimeline(logged_in_user)
  var container
  container = document.getElementById('timeline-json')

  for (let i = 0; i < timeline.length; i++) {
    var username = getUserbyID(timeline[i].user_id)
    container.innerHTML += "<ul class='timeline_list'>"
    container.innerHTML += '<li>' + timeline[i].timestamp + '</li>'
    container.innerHTML += '<li>' + username.username + '</li>'
    container.innerHTML += '<li>' + timeline[i].text + '</li>'
    container.innerHTML += '</ul>'
    container.innerHTML += '<br>'
    container.innerHTML += '<br>'
  }
} else if (sPage === 'hometimeline.html') {
  var logged_in_user = localStorage.getItem('user_name')
  var timeline = mockroblog.getHomeTimeline(logged_in_user)
  var container
  container = document.getElementById('timeline-json')

  for (let i = 0; i < timeline.length; i++) {
    var username = getUserbyID(timeline[i].user_id)
    container.innerHTML += "<ul class='timeline_list'>"
    container.innerHTML += '<li>' + timeline[i].timestamp + '</li>'
    container.innerHTML += '<li>' + username.username + '</li>'
    container.innerHTML += '<li>' + timeline[i].text + '</li>'
    container.innerHTML += '</ul>'
    container.innerHTML += '<br>'
    container.innerHTML += '<br>'
  }
}
