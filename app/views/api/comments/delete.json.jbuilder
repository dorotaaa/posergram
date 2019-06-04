json.commentId @comment.id
json.post do 
   
    json.extract! @comment.post, :id, :caption, :user_id, :created_at, :comment_ids, :liker_ids
    if @comment.post.photo.attached? 
                json.photo url_for(@comment.post.photo)
        end
end