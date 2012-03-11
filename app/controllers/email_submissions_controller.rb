class EmailSubmissionsController < ApplicationController
  layout 'email_submissions'

  # GET /email_submissions/1
  # GET /email_submissions/1.json
  def show
    @email_submission = EmailSubmission.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @email_submission }
    end
  end

  # GET /email_submissions/new
  # GET /email_submissions/new.json
  def new
    @email_submission = EmailSubmission.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @email_submission }
    end
  end

  # POST /email_submissions
  # POST /email_submissions.json
  def create
    @email_submission = EmailSubmission.new(params[:email_submission])

    respond_to do |format|
      if @email_submission.save
        format.html { redirect_to @email_submission, notice: 'Email submission was successfully created.' }
        format.json { render json: @email_submission, status: :created, location: @email_submission }
      else
        format.html { render action: "new" }
        format.json { render json: @email_submission.errors, status: :unprocessable_entity }
      end
    end
  end

end
