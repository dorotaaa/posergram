class Api::PostsController < ApplicationController
    before_action :ensure_login

    def index
        @posts = Post.all    
        render :index
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save 
            render :show
        else 
            render json: @post.errors.full_messages, status: 422
        end  
    end  

    def show 
        @post = Post.find(params[:id])
        render :show
    end 

    def destroy
        @post = Post.find(params[:id])
        if @post
            @post.delete! 
        render :show    
    end

    private
    def post_params
        params.require(:post).permit(:caption, :image_url)
    end
end