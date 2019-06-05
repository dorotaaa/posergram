@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :fullname
        json.photoUrl url_for(user.photo)
        json.follower_ids user.followers.pluck(:id)
        json.following_ids user.followings.pluck(:id)
    end
end