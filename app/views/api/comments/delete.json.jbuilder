json.commentId @comment.id
json.post do 
    json.set! @comment.post.id do
    json.extract! @comment.post, :id, :caption, :user_id, :created_at, :comment_ids
    end
end