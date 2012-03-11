class EmailSubmission
  include MongoMapper::Document

  key :email_address, String

end
