const postsContainer =
document.getElementById("postsContainer");

async function createPost(){

    const caption =
    document.getElementById("caption").value;

    const image =
    document.getElementById("image").value;

    await fetch(
        "http://localhost:5000/api/posts",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                caption,
                image
            })
        }
    );

    getPosts();
}

async function likePost(id){

    await fetch(
        `http://localhost:5000/api/posts/like/${id}`,
        {
            method:"PUT"
        }
    );

    getPosts();
}

async function addComment(id){

    const text =
    document.getElementById(`comment-${id}`).value;

    await fetch(
        `http://localhost:5000/api/comments/${id}`,
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                text
            })
        }
    );

    getPosts();
}

async function getPosts(){

    const response = await fetch(
        "http://localhost:5000/api/posts"
    );

    const posts = await response.json();

    postsContainer.innerHTML = "";

    for(const post of posts){

        const commentResponse =
        await fetch(
        `http://localhost:5000/api/comments/${post._id}`
        );

        const comments =
        await commentResponse.json();

        postsContainer.innerHTML += `

        <div class="post-card">

            <img src="${post.image}">

            <div class="post-content">

                <h3>${post.caption}</h3>

                <button onclick="likePost('${post._id}')">
                    ❤️ Like
                </button>

                <p>
                    ${post.likes.length} Likes
                </p>

                <div class="comment-box">

                    <input
                        type="text"
                        id="comment-${post._id}"
                        placeholder="Write comment..."
                    >

                    <button onclick="addComment('${post._id}')">
                        Comment
                    </button>

                </div>

                <div class="comments">

                ${comments.map(comment => `

                <p class="comment">
                    💬 ${comment.text}
                </p>

                `).join("")}

                </div>

            </div>

        </div>

        `;
    }
}

getPosts();