class PostsController < ApplicationController
  allow_unauthenticated_access only: %i[index show]
  def index
    @posts = set_page_and_extract_portion_from Article.all, per_page: [ 10 ]
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Current.user.posts.build(post_params)
    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: "Post was successfully created." }
        format.turbo_stream
      else
        format.html { render :new }
      end
    end
  end
  private
  def post_params
    params.expect(post: [ :content ])
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
