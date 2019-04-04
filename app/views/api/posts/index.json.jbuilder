# json.array! @posts do |post|
#     json.set
#     json.extract! post, :id, :caption, :user_id
#     if post.photo.attached? 
#         json.photo url_for(post.photo)
#     end
# end


    @posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :caption, :user_id
            if post.photo.attached? 
                    json.photo url_for(post.photo)
            end
        end
    end
