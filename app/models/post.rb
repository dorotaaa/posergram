# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  image_url  :string
#  caption    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :user

    has_many :comments

    has_many :likes

    has_many :likers,
    through: :likes,
    source: :user




end
