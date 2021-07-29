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


// export function publicTimeline(){
//     var timeline = mockroblog.getPublicTimeline();
//     container = document.getElementById('timeline-json');
    
//     for (let i = 0; i < timeline.length; i++) {
//         var username = getUserbyID(timeline[i].user_id)
//         container.innerHTML+="<ul>"
//         container.innerHTML+= "<li>"+timeline[i].timestamp+"</li>"
//         container.innerHTML+= "<li>"+username.username+"</li>"
//         container.innerHTML+= "<li>"+timeline[i].text+"</li>"
//         container.innerHTML+="</ul>"
// }



// }



var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
// window.onload = alert(localStorage.getItem("user_name"));


// if(sPage === "publishTimeline.html"){
//     window.mockroblog = mockroblog
//     var result = publicTimeline()
//     const display = document.querySelector('#timeline-json')
//     const timeline = mockroblog.getPublicTimeline()
//      display.textContent= result
//     // display.textContent = JSON.stringify(timeline, null, 2)
//  }
if(sPage === "publishtimeline.html"){
    var timeline = mockroblog.getPublicTimeline();
    var container
    container = document.getElementById('timeline-json');
    
    for (let i = 0; i < timeline.length; i++) {
        var username = getUserbyID(timeline[i].user_id)
        container.innerHTML+="<ul class='timeline_list'>"
        container.innerHTML+= "<li>"+timeline[i].timestamp+"</li>"
        container.innerHTML+= "<li>"+username.username+"</li>"
        container.innerHTML+= "<li>"+timeline[i].text+"</li>"
        container.innerHTML+="</ul>"
        container.innerHTML+="<br>"
        container.innerHTML+="<br>"
}
 }
 else if (sPage === "usertimeline.html"){
    var logged_in_user = localStorage.getItem("user_name")
    var timeline = mockroblog.getUserTimeline(logged_in_user);
    var container
    container = document.getElementById('timeline-json');
    
    for (let i = 0; i < timeline.length; i++) {
        var username = getUserbyID(timeline[i].user_id)
        container.innerHTML+="<ul class='timeline_list'>"
        container.innerHTML+= "<li>"+timeline[i].timestamp+"</li>"
        container.innerHTML+= "<li>"+username.username+"</li>"
        container.innerHTML+= "<li>"+timeline[i].text+"</li>"
        container.innerHTML+="</ul>"
        container.innerHTML+="<br>"
        container.innerHTML+="<br>"
        
}
 }
 else if (sPage === "hometimeline.html"){
    var logged_in_user = localStorage.getItem("user_name")
    var timeline = mockroblog.getHomeTimeline(logged_in_user);
    var container
    container = document.getElementById('timeline-json');
    
    for (let i = 0; i < timeline.length; i++) {
        var username = getUserbyID(timeline[i].user_id)
        container.innerHTML+="<ul class='timeline_list'>"
        container.innerHTML+= "<li>"+timeline[i].timestamp+"</li>"
        container.innerHTML+= "<li>"+username.username+"</li>"
        container.innerHTML+= "<li>"+timeline[i].text+"</li>"
        container.innerHTML+="</ul>"
        container.innerHTML+="<br>"
        container.innerHTML+="<br>"
}
 }
