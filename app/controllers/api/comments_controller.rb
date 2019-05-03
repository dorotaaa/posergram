class Api::CommentsController < ApplicationController
    before_action :ensure_login

  def index
    
    @comments = Comment.find_by(params[:post_id][:post_id])
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save 
      @post = @comment.post
        render 'api/posts/show'
    else 
        render json: @comment.errors.full_messages, status: 422
    end  
end  

  def destroy
    @comment = Comment.find(params[:id])
    @comment.user_id = current_user.id
    @comment.destroy
    @comment = @comment.post
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end
