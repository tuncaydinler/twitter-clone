class HomeController < ApplicationController
  allow_unauthenticated_access only: %i[index]
  def index
  @posts = Post.order(created_at: :desc).limit(10)
    # @posts = set_page_and_extract_portion_from Post.all, per_page: [ 10 ]
  end
end
