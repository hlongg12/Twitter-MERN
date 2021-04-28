# Twitter-MERN
Project Summary
    Back-End Analysis
    1. Analyse resources, model
        - Tweet(posts)
            +) post-id
            +) content
            +) createAt (date)
            +) author
        - User
            +) user-id
            +) name
            +) email
            +) password
    2. Design RESTful API (Route)
        - post
            +) api/v1/posts/ - GET(get all posts) + POST (create a post)
            +) api/v1/posts/:postID - PUT / DELETE (update/delete a post)
        - user
            +) api/v1/auth/login: POST (login)
            +) api/v1/auth/register: POST (register)
    3. Design and identify Controller (functions) for each API
    4. Identify specific tasks that needs to be done (sprints)
    5. Implement the code