class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    
        if @user 
            login!(@user)
            render "api/users/show"
        else
            render json: ["Nope. Try again."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: ["Logout Successful"]
        else
            render json: ["You are not logged in"], status: 404
        end
    end
end