class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy

  validates :email_address, presence: true, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 8 }, if: -> { new_record? || password.present? }


  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
