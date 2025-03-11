class Post < ApplicationRecord
  belongs_to :user

  validates :content, presence: { message: "kısmı boş olamaz!" },
    uniqueness: { message: "ile aynı içerik zaten var!" },
    length: { maximum: 2000, too_long: "kısmı en fazla %{count} karakter olabilir!" }

  validates :like_count, numericality:
    { only_integer: true, greater_than_or_equal_to: 0, message: "sadece sayısal değerler girilebilir!" }
end
