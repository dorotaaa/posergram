class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save 
        render :show
    else 
        render json: @comment.errors.full_messages, status: 422
    end  
end  

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    @comment = @comment.post
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :user_id, :body)
  end
end
