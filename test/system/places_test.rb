require "application_system_test_case"

class PlacesTest < ApplicationSystemTestCase
  setup do
    @place = places(:one)
  end

  test "visiting the index" do
    visit places_url
    assert_selector "h1", text: "Places"
  end

  test "should create place" do
    visit places_url
    click_on "New place"

    fill_in "Latitude", with: @place.latitude
    fill_in "Longitude", with: @place.longitude
    fill_in "Name", with: @place.name
    click_on "Save"

    assert_text "Place was successfully created"
    click_on "Back to places"
  end

  test "should update Place" do
    visit place_url(@place)
    click_on "Edit this place", match: :first

    fill_in "Latitude", with: @place.latitude
    fill_in "Longitude", with: @place.longitude
    fill_in "Name", with: @place.name
    click_on "Save"

    assert_text "Place was successfully updated"
    click_on "Back to places"
  end

  test "should destroy Place" do
    visit place_url(@place)
    click_on "Destroy this place", match: :first

    assert_text "Place was successfully destroyed"
  end
end
