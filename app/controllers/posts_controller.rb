class PostsController < ApplicationController
  allow_unauthanticated_access only: %i[index show]
  def index
    @posts = set_page_and_extract_portion_from Article.all, per_page: [ 10 ]
  end

  private
  def post_params
    params.expect(post: [ :content ])
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
