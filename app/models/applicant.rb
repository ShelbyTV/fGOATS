class Applicant
  include MongoMapper::Document

  key :first_name,    String
  key :last_name,     String
  key :company,       String
  key :job_title,     String
  key :email,         String

  def self.puts_comma_list
    puts "first_name, last_name, company, job_title, email"
    Applicant.all.each { |a| puts "#{a.first_name}, #{a.last_name}, #{a.company}, #{a.job_title}, #{a.email}" }
  end
    

end
