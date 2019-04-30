json.users do 
    json.set! @user.id do 
        json.partial! 'api/users/user', user: @user
    end
end

json.posts do 
    @user.posts.each do |post| 
        json.set! post.id do
            json.extract! post, :id, :caption, :user_id
            json.photo url_for(post.photo)
        end
    end
end

