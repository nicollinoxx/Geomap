class PlacesController < ApplicationController
  before_action :set_place, only: %i[ show edit update destroy ]

  # GET /places
  def index
    @places = Place.all
  end

  # GET /places/1
  def show
  end

  # GET /places/new
  def new
    @place = Place.new
  end

  # GET /places/1/edit
  def edit
  end

  # POST /places
  def create
    @place = Place.new(place_params)

    if @place.save
      redirect_to @place, notice: "Place was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /places/1
  def update
    if @place.update(place_params)
      redirect_to @place, notice: "Place was successfully updated.", status: :see_other
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /places/1
  def destroy
    @place.destroy!
    redirect_to places_path, notice: "Place was successfully destroyed.", status: :see_other
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def place_params
      params.expect(place: [ :name, :latitude, :longitude ])
    end
end
