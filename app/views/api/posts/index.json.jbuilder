json.array! @posts do |post|
    json.extract! post, :id, :caption, :user_id
    if post.image_url.attached? 
        json.image_url url_for(post.image_url)
    end
end