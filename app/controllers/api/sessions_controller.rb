class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
        if @user 
            login!(@user)
            render "api/users/show"
        else
            render json: ["Can't help you. Try again, maybe?"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: ["Logout Successful"]
        else
            render json: ["Umm, you aren't even logged in..."], status: 404
        end
    end
end