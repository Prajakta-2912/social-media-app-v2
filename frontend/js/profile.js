const followBtn = document.getElementById("followBtn");

const followersCount = document.getElementById("followersCount");

const followingCount = document.getElementById("followingCount");

let isFollowing = false;

let followers = 0;

let following = 0;

followBtn.addEventListener("click",()=>{

    if(!isFollowing){

        isFollowing = true;

        followers++;

        followBtn.innerText = "Unfollow";

        followBtn.style.background = "#f43f5e";

    }else{

        isFollowing = false;

        followers--;

        followBtn.innerText = "Follow";

        followBtn.style.background = "#38bdf8";
    }

    followersCount.innerText = followers;

    followingCount.innerText = following;
});