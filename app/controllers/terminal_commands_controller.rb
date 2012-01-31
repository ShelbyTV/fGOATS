class TerminalCommandsController < ApplicationController

  # POST /terminal_commands.json
  def create
    @terminal_command = TerminalCommand.new(params[:terminal_command])

    respond_to do |format|
      if @terminal_command.save
        format.json { render json: @terminal_command, status: :created, location: @terminal_command }
      else
        format.json { render json: @terminal_command.errors, status: :unprocessable_entity }
      end
    end
  end


end
