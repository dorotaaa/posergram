json.extract! user, :id, :username, :fullname, :email, :bio, :post_ids, :comment_ids
json.photoUrl url_for(user.photo)
