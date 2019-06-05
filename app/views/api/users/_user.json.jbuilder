json.extract! user, :id, :username, :fullname, :email, :bio, :post_ids, :comment_ids
json.photoUrl url_for(user.photo)

if user.followers
  json.followerIds user.followers.pluck(:id)
else
  json.followerIds []
end

if user.followings
  json.followingIds user.followings.pluck(:id)
else
  json.followingIds []
end
