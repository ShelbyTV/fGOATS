require 'test_helper'

class EmailSubmissionsControllerTest < ActionController::TestCase
  setup do
    @email_submission = email_submissions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:email_submissions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create email_submission" do
    assert_difference('EmailSubmission.count') do
      post :create, email_submission: @email_submission.attributes
    end

    assert_redirected_to email_submission_path(assigns(:email_submission))
  end

  test "should show email_submission" do
    get :show, id: @email_submission.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @email_submission.to_param
    assert_response :success
  end

  test "should update email_submission" do
    put :update, id: @email_submission.to_param, email_submission: @email_submission.attributes
    assert_redirected_to email_submission_path(assigns(:email_submission))
  end

  test "should destroy email_submission" do
    assert_difference('EmailSubmission.count', -1) do
      delete :destroy, id: @email_submission.to_param
    end

    assert_redirected_to email_submissions_path
  end
end
