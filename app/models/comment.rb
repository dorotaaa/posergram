class Comment < ApplicationRecord
    belongs_to :post
    
    belongs_to :user

    has_one :receiver,
    through: :post,
    source: :user
end