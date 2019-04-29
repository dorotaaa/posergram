json.extract! @post, :id, :caption, :user_id, :created_at
json.photo url_for(@post.photo)

json.comments do 
    @post.comments.each do |post| 
        json.set! comment.id do
            json.extract! comment, :id, :body
        end
    end
end
