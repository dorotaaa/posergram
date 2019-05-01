@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :caption, :user_id, :created_at
        if post.photo.attached? 
                json.photo url_for(post.photo)
        end
    json.username post.user.username

        # json.comments do
        #     json.array!(post.comments) do |comment|
        #     json.id comment.id
        #         json.username comment.user.username
        #         json.body comment.body
        #         json.post_id comment.post_id
        #         json.user_id comment.user_id
        #     end
        # end
    end
end
