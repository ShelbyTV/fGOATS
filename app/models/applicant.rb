class Applicant
  include MongoMapper::Document

  key :first_name,    String
  key :last_name,     String
  key :company,       String
  key :job_title,     String
  key :email,         String

end
