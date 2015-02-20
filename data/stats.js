function computeBanScores(champions, callback){
	champions.forEach(function(champion, index){
		var winRate = champion.winRate;
		var popularity = champion.popularity;
		var banRate = champion.banRate;

		// percentage of games where champion isn't banned
		var notBanRate = 100 - banRate;

		// estimated popularity if bans weren't allowed
		var truePopularity = popularity + banRate * (popularity / notBanRate);

		var banScore = truePopularity * (winRate - 50.0);

		champions[index].banScore = banScore;
	});

	champions.sort(compareChampions);

	champions.forEach(function(champion, index){
		champion.banRank = index + 1;
	});

	callback(null, champions);
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

module.exports = {
	computeBanScores: computeBanScores
};
