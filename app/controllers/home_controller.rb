class HomeController < ApplicationController
  before_action :random_users, only: %i[index]
  def index
    posts = Post.order(created_at: :desc)
    # posts = Current.user.following.posts.order(created_at: :desc)
    set_page_and_extract_portion_from posts, per_page: 5
  end

  private
  def random_users
    following_ids = Current.user.following.pluck(:id)
    following_ids << Current.user.id

    @rand_users = User.where.not(id: following_ids)
      .order("RANDOM()").limit(3)
  end
end
