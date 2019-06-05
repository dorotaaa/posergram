@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :fullname
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
    end
end