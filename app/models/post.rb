class Post < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :content, presence: { message: "kısmı boş olamaz!" },
    uniqueness: { message: "ile aynı içerik zaten var!" },
    length: { maximum: 2000, too_long: "kısmı en fazla %{count} karakter olabilir!" }

  validates :like_count, numericality:
    { only_integer: true, greater_than_or_equal_to: 0, message: "sadece sayısal değerler girilebilir!" }

  def like(user:)
    unless user.id.in?(self.likes.pluck(:user_id))
      likes.build(user: user).save
      increment!(:like_count)
    else
      likes.where(user_id: user.id)
    end
  end

  def unlike(user:)
    if user.id.in?(self.likes.pluck(:user_id))
      likes.where(user_id: user.id).destroy_all
      decrement!(:like_count)
    end
  end
end
