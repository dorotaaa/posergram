@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :user_id, :post_id
    end
end
