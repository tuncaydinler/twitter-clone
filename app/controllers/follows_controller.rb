class FollowsController < ApplicationController
  before_action :find_user, only: %i[ create destroy ]

  def create
    puts "#" * 100
    puts "hello wormer"
    puts "#" * 100
    Current.user.follow(@user)

    respond_to do |format|
      format.turbo_stream
    end
  end

  def destroy
    Current.user.unfollow(@user)

    respond_to do |format|
      format.turbo_stream
    end
  end
  private
  def find_user
    @user = User.find(params[:user_id])
  end
end
