json.extract! @post, :id, :caption, :user_id
json.photo url_for(@post.photo)

