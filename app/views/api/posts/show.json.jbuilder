json.posts do
    json.set! @post.id do
    json.extract! @post, :id, :caption, :user_id, :created_at, :comment_ids
    end
end

json.comments do
    @post.comments.each do |comment|
        json.set! comment.id do 
        json.extract! comment, :id, :body, :post_id, :user_id
        end
    end
end
