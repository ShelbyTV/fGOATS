require 'test_helper'

class TerminalCommandsControllerTest < ActionController::TestCase
  setup do
    @terminal_command = terminal_commands(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:terminal_commands)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create terminal_command" do
    assert_difference('TerminalCommand.count') do
      post :create, terminal_command: @terminal_command.attributes
    end

    assert_redirected_to terminal_command_path(assigns(:terminal_command))
  end

  test "should show terminal_command" do
    get :show, id: @terminal_command.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @terminal_command.to_param
    assert_response :success
  end

  test "should update terminal_command" do
    put :update, id: @terminal_command.to_param, terminal_command: @terminal_command.attributes
    assert_redirected_to terminal_command_path(assigns(:terminal_command))
  end

  test "should destroy terminal_command" do
    assert_difference('TerminalCommand.count', -1) do
      delete :destroy, id: @terminal_command.to_param
    end

    assert_redirected_to terminal_commands_path
  end
end
