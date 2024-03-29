# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fullname        :string
#  email           :string
#  bio             :text
#

class User < ApplicationRecord
    validates :username, :session_token, :password_digest, presence: true
    validates :username, :session_token, uniqueness: true
    validates :password, length: {minimum:8}, allow_nil: true
    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :photo

    has_many :posts

    has_many :likes

    has_many :comments

    has_many :liked_posts,
    through: :likes,
    source: :post

    has_many :following_relationships,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

    has_many :follower_relationships,
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy

    has_many :followings,
    through: :following_relationships,
    source: :following

    has_many :followers,
    through: :follower_relationships,
    source: :follower


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_pw = BCrypt::Password.new(self.password_digest)
        bcrypt_pw.is_password?(password)
    end


    def reset_session_token!
        self.update!(session_token: User.generate_session_token)
        self.session_token
    end


    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end
