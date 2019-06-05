class Api::FollowsController < ApplicationController
    before_action :ensure_login
    
    def create
        @follow = Follow.new(follow_params)
        @follow.follower_id = current_user.id
        @follow.save
        render :show
    end

    def destroy
        @follow = Follow.where(follower_id: current_user.id).where(user_id: params[:id]).first
        @follow.destroy
        render :show
    end

    def follow_params
        params.require(:follow).permit(:follower_id, :user_id)
    end 

end