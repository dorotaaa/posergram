@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :fullname
        json.photoUrl url_for(user.photo)
    end
end