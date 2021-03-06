require 'rails_helper'

RSpec.describe HomeController, type: :controller do
  describe "GET index" do
    subject { get :index }

    let!(:recent_match) { FactoryGirl.create :complete_match }
    let!(:ongoing_match) { FactoryGirl.create :match }
    let!(:gray) { FactoryGirl.create :player, name: "Gray", elo: 1000 }
    let(:match_history) { FactoryGirl.create_list :complete_match, 20, home_player: gray }

    specify { expect(subject.status).to eq 200 }
    it { is_expected.to render_template :index }

    it "assigns the recent matches as @recent_matches" do
      subject
      expect(assigns(:recent_matches)).to match_array [recent_match]
    end

    it "assigns eligible players as @ranked_players" do
      match_history
      subject
      expect(assigns(:ranked_players)).to match_array [gray]
    end
  end
end
