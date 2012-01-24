require 'test_helper'

class ApplicantsControllerTest < ActionController::TestCase
  setup do
    @applicant = applicants(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:applicants)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create applicant" do
    assert_difference('Applicant.count') do
      post :create, applicant: @applicant.attributes
    end

    assert_redirected_to applicant_path(assigns(:applicant))
  end

  test "should show applicant" do
    get :show, id: @applicant.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @applicant.to_param
    assert_response :success
  end

  test "should update applicant" do
    put :update, id: @applicant.to_param, applicant: @applicant.attributes
    assert_redirected_to applicant_path(assigns(:applicant))
  end

  test "should destroy applicant" do
    assert_difference('Applicant.count', -1) do
      delete :destroy, id: @applicant.to_param
    end

    assert_redirected_to applicants_path
  end
end
