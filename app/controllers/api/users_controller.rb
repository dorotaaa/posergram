class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/default_profile_pic.jpg"), filename: "default_profile_pic.jpg")
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end 
    end


    def update
         @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        elsif !@user
            render json: ['You are not this user'], status: 400
        else
            render json: @user.errors.full_messages, status: 422
        end
    end
    
    def index
        @users = User.all.with_attached_photo
    end

    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :fullname, :email, :bio, :photo)
    end
end












  

