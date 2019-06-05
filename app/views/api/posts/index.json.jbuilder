json.posts do
    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :caption, :user_id, :created_at, :comment_ids
            if post.photo.attached? 
                    json.photo url_for(post.photo)
            end
        json.username post.user.username
        json.liker_ids post.likers.pluck(:id)
        end
    end
end
json.comments do 
        @posts.each do |post| 
            post.comments.each do |comment|
                json.set! comment.id do 
                json.extract! comment, :id, :body, :post_id, :user_id
            end
        end
    end
end