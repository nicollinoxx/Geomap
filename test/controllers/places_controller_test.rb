require "test_helper"

class PlacesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get places_show_url
    assert_response :success
  end
end
