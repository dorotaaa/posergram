json.users do 
    json.set! @user.id do 
        json.partial! 'api/users/user', user: @user
    end
end

json.posts do 
    @user.posts.each do |post| 
        json.set! post.id do
            json.extract! post, :id, :caption, :user_id, :created_at, :comment_ids
            json.photo url_for(post.photo)
        end
    end
end

json.comments do 
    @user.posts.each do |post| 
        post.comments.each do |comment|
            json.set! comment.id do 
                json.extract! comment, :id, :body, :post_id, :user_id
            end
        end
    end
end

