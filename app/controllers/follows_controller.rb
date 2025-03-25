class FollowsController < ApplicationController
  before_action :find_user, only: %i[ create destroy ]

  def create
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
    puts "#" * 1000
    puts params
    puts "#" * 1000
    @user = User.find_by(handle: params[:user_id])
  end
end
