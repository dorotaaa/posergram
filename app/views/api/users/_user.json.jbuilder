json.extract! user, :id, :username, :fullname, :email, :bio, :post_ids, :comment_ids
        if user.photo.attached? 
                json.photo url_for(user.photo)
        end
