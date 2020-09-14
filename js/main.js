var fantasy = fantasy || {};

(function($) {

	var url = "https://api.espn.com/v1/sports/golf/pga/events/" + fantasy.config.tournamentId + "?apikey=" + fantasy.config.apiKey,
		_positions = {},
		headerTpl = Handlebars.compile($("#header-template").html()),
		golferTpl = Handlebars.compile($("#golfers-template").html()),
		teamTpl = Handlebars.compile($("#team-template").html()),
		_timeoutHook,
		_timeoutInterval = 20000,
		_refresher = $(".refresher"),
		_lastUpdated = $(".last-updated"),
		_competitors = [],
		_leaderboards = $(".leaderboard");

	function compare(a, b) {
		if(a["totalScore"] < b["totalScore"]) {
			return 1;
		}
		if(a["totalScore"] > b["totalScore"]) {
			return -1;
		}
		
		return 0;
	}

	function compareScore(a, b) {
		if(a["score"] < b["score"]) {
			return 1;
		}
		if(a["score"] > b["score"]) {
			return -1;
		}
		
		return 0;
	}

	function _getGolfers(callback) {
		$.ajax({
			url:url,
			type:"GET",
			dataType:"jsonp",
			success:function(data) {
				callback(data);
			},
			error:function() {
				console.log("!!!ERROR");
			}
		});
	}

	function _getIndividualScore(golferId) {
		var total = 0;
		var golfer = _positions[golferId];
		if(golfer && golfer.place <= 25) {
			total = _scoreForPlace(golfer.place);
		}

		return total;
	}

	function _getTotalScore(team) {
		var total = 0;

		var golfer;
		team.forEach(function(golferId) {
			golfer = _positions[golferId];
			if(golfer) {
				if(golfer.place <= 25) {
					total += _scoreForPlace(golfer.place);
				}
			}
		});

		return total;
	}

	function _getIndividualDisplay(golferId) {
		var golfer = _positions[golferId];
		var obj = {};
		if(golfer) {
			obj.name = golfer.name;
			obj.score = _getIndividualScore(golferId);
			obj.id = golferId;
			obj.madeCut = golfer.madeCut;
		}

		return obj;
	}

	function _scoreForPlace(place) {
		var score = 0;

		if(place === 1) {
			score = fantasy.config.firstPlaceValue;
		} else if(place <= 25) {
			score = 26 - place;
		}

		return score;
	}

	function _displayGolfers(data) {
		_getPositions(data);

		_displayTeams();

		var html = golferTpl({competitors:_competitors});
		$("#leaderboard").html(html);
	}

	function _displayTeams() {

		// order teams 
		var teams = [];

		fantasy.config.teams.forEach(function(team) {

			// get the total score
			var golferIds = team.golfers;

			var individuals = [];

			golferIds.forEach(function(id) {
				individuals.push(_getIndividualDisplay(id));
			});

			var totalScore = _getTotalScore(team.golfers);

			individuals.sort(compareScore);

			teams.push({
				name:team.name,
				individuals:individuals,
				totalScore:totalScore
			});
		});

		// order these by totalScore
		teams.sort(compare);

		_fantasyTeams = teams;

		// before resetting the html, grab any rows that are currently displaying the details.. so they can be
		// reshown afterwards
		var ids = _getExpandedTeams();

		var html = teamTpl({teams:teams});
		$("#fantasy-leaderboard").html(html);

		ids.forEach(function(id) {
			$("#" + id).find(".breakdown").addClass("showing");
		});
	}

	function _getExpandedTeams() {
		var $showing = $(".breakdown.showing");
		var ids = [];
		$showing.each(function() {
			ids.push($(this).closest(".team").attr("id"));
		});
		return ids;
	}

	function _getPositions(data) {
		if(data && data.sports) {
			var sport = data.sports[0];

			if(sport && sport.leagues) {
				var league = sport.leagues[0];

				if(league && league.events) {
					var event = league.events[0];

					if(event && event.competitions) {
						var tournament = event.competitions[0];

						if(tournament && tournament.competitors) {
							var golfers = tournament.competitors;

							_competitors = tournament.competitors;

							var athlete;

							golfers.forEach(function(golfer) {

								athlete = golfer.athlete;

								var _uniqueGolfers = _getUniqueGolfers();

								if(_uniqueGolfers.indexOf(athlete.id) > -1) {
									var madeCut = !fantasy.config.showCut || athlete.stats.madeCut;
									_positions[athlete.id] = {
										id:athlete.id,
										name:athlete.displayName,
										place:golfer.place,
										score:golfer.score,
										madeCut:madeCut
									};
								}
							});
						}
					}
				}
			}
		}
	}

	function updateTimeStamp() {
		var d = new Date();

		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var half = "AM";

		if(minutes < 10) {
			minutes = "0" + minutes;
		}

		if(seconds < 10) {
			seconds = "0" + seconds;
		}

		if(hours >= 12) {
			half = "PM";
		}

		if(hours > 12) {
			hours = hours - 12;
		}

		if(hours === 0) {
			hours = 12;
		}

		_lastUpdated.html("Last Update: " + hours + ":" + minutes + ":" + seconds + " " + half);
	}

	function _refreshLeaderboards() {
		_refresher.show();
		_lastUpdated.hide();
		_getGolfers(function(data) {
			// map espn response to something more usable for us
			_displayGolfers(data);
			_refresher.hide();
			updateTimeStamp();
			_lastUpdated.show();
			_leaderboards.show();
			
			_timeoutHook = setTimeout(function() {
				_refreshLeaderboards();
			}, _timeoutInterval);
			
		});
	}

	function _getUniqueGolfers() {
		if(this.memo) {
			return this.memo;
		}

		var all = [];
		fantasy.config.teams.forEach(function(team) {
			team.golfers.forEach(function(id) {
				all.push(id);
			});
		});

		// get unique
		var u = {}, a = [];
		for(var i = 0, l = all.length; i < l; ++i){
			if(u.hasOwnProperty(all[i])) {
		 		continue;
			}
			a.push(all[i]);
			u[all[i]] = 1;
		}


		this.memo = a;
		return a;
	}

	function _init() {
		var html = headerTpl(fantasy.config);
		$("#header").html(html);
		updateTimeStamp();
		_refreshLeaderboards();

		$(document).on("click", ".details", function(e) {
			e.preventDefault();
			var $breakdown = $(this).closest(".team").find(".breakdown");
			$breakdown.toggleClass("showing");
		});
	}

	Handlebars.registerHelper("getPosition", function(competitor) {
		var pos = "--";
		if(competitor && competitor.athlete && competitor.athlete.stats) {
			pos = competitor.athlete.stats.currentPosition;

			if(competitor.athlete.stats.wasTied === true) {
				pos = "T" + pos;
			}
		}

		return pos;
	});

	Handlebars.registerHelper("getTodaysScore", function(competitor) {
		var score = "--";

		if(competitor && competitor.status) {
			score = competitor.status.detail;
		}

		return score;
	});

	Handlebars.registerHelper("getTotalPlayerScore", function(competitor) {
		var score = "--";

		if(competitor) {
			score = competitor.score;

			if(competitor.score > 0) {
				score = competitor.score;
			} else if(competitor.score === 0) {
				score = "E";
			}

			if(competitor.status.state === "pre") {
				score += " " + competitor.status.shortDetail;
			} else if(competitor.athlete && competitor.athlete.stats) {
				if(competitor.athlete.stats.madeCut === false) {
					score += " (CUT)";
				}
			}
		}

		return score;
	});

	Handlebars.registerHelper("getPlayerClass", function(competitor) {
		if(competitor && competitor.athlete) {
			var id = competitor.athlete.id;
			if(_positions[id]) {
				return "highlight";
			}
		}
	});

	Handlebars.registerHelper("getPoints", function(player) {
		return player.score === 1 ? "pt" : "pts";
	});

	Handlebars.logger.log = function(context) {
		return console.log(context);
	};

	Handlebars.registerHelper("debug", function(optionalValue) {
	  console.log("Current Context");
	  console.log("====================");
	  console.log(this);
	 
	  if (optionalValue) {
	    console.log("Value");
	    console.log("====================");
	    console.log(optionalValue);
	  }
	});

	$(document).ready(function() {
		_init();
	});
}(jQuery));