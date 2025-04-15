class CommentsController < ApplicationController
  before_action :find_post, only: [ :new, :create ]
  def new
    @comment = @post.comments.build
  end

  def create
    @comment = @post.comments.build(comment_params)
    @comment.user = Current.user
    respond_to do |format|
      if @comment.save
        format.turbo_stream
        format.html { redirect_to post_path(@post) }
      else
        format.turbo_stream { turbo_stream.replace "hello" }
        format.html { redirect_to post_path(@post), alert: "Yorum eklenemedi" }
      end
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
