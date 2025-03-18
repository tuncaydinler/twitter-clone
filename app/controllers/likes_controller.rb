class LikesController < ApplicationController
  before_action :find_post, only: [ :create, :destroy ]

  def create
    @like = @post.like(user: Current.user)

    respond_to do |format|
      format.turbo_stream
    end
  end

  def destroy
    @like = @post.unlike(user: Current.user)

    respond_to do |format|
      format.turbo_stream
    end
  end

  private
  def find_post
    @post = Post.find(params[:post_id])
  end
end
