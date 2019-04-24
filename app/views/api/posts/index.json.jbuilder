@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :caption, :user_id, :comment_ids, :created_at
        if post.photo.attached? 
                json.photo url_for(post.photo)
        end
    end
end
