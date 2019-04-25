json.extract! @post, :id, :caption, :user_id, :created_at
json.photo url_for(@post.photo)