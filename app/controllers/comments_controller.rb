class CommentsController < ApplicationController
  before_action :find_post, only: [ :new, :create ]
  def new
    @comment = @post.comments.build
  end

  def create
    @comment = @post.comments.build(comment_params)
    @comment.user = Current.user
    if @comment.save
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to root_path }
      end
    else
    redirect_to user_follow_path User.first
    end
  end

  private
  def comment_params
    params.expect(comment: [ :content ])
  end

  def find_post
    @post = Post.find(params[:post_id])
  end

  def find_comment
    @comment = @post.comments.find(params[:id])
  end
end
