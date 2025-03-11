module ApplicationHelper
  def short_time_ago(time)
    return "şimdi" if time > Time.current - 30.seconds

    time_str = String.new time_ago_in_words(time, locale: :tr)
    replacements = {
      " dakika" => "dk",
      " saniye" => "sn",
      " saat"   => "s",
      " gün"    => "g",
      " hafta"  => "h",
      " ay"     => "ay",
      " yıl"    => "y"
    }

    replacements.each { |full, short| time_str.gsub!(full, short) }

    time_str.gsub("yaklaşık ", "").gsub("önce", "").strip
  end
end
