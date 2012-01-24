class ApplicantsController < ApplicationController
  # GET /applicants
  # GET /applicants.json
  def index
    @applicants = Applicant.all

    respond_to do |format|
      format.json { render json: @applicants }
    end
  end

  # POST /applicants
  # POST /applicants.json
  def create
    @applicant = Applicant.new(params[:applicant])

    respond_to do |format|
      if @applicant.save
        format.json { render json: @applicant, status: :created, location: @applicant }
      else
        format.json { render json: @applicant.errors, status: :unprocessable_entity }
      end
    end
  end

end
