var express = require('express');
var router = express.Router();

var lolking = require(__dirname + '/../data/lolking');
var stats = require(__dirname + '/../data/stats');

router.get('/', function (req, res){
	lolking.getChampionStatistics(onChampionStatistics);

	function onChampionStatistics(error, data){
		if (error) {
			console.error(error);
			return onError();
		}
		stats.computeBanScores(data, onBanScores);
	}

	function onBanScores(error, data){
		if (error){
			console.error(error);
			return onError();
		}
		data.sort(compareChampions);

		res.status(200).render('index', {
			data: data
		});
	}

	function compareChampions(a,b){
		if (a.banScore > b.banScore){
			return -1;
		} else if (a.banScore < b.banScore){
			return 1;
		} else {
			return 0;
		}
	}

	function onError(){
		res.status(500).send();
	}
});

module.exports = router;
