class HomeController < ApplicationController
  after_action :print_message, only: %i[index]
  def index
    posts = Post.order(created_at: :desc)
    set_page_and_extract_portion_from posts, per_page: 5
  end

  private
  def print_message
    puts "#" * 100
    puts "sayfa: #{params[:page]}"
    puts "#" * 100
  end
end
