@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :caption, :user_id, :created_at
        if post.photo.attached? 
                json.photo url_for(post.photo)
        end
    end

    json.comments do
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :user_id, :post_id
            end
        end
    end
end