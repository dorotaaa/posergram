@users.each do |user|
    json.set! user.username do
        json.id user.id
        json.username user.username
    end
end