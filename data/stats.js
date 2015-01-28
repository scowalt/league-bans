function computeBanScores(champions, callback){
	champions.forEach(function(champion, index){
		var winRate = champion.winRate;
		var popularity = champion.popularity;
		var banRate = champion.banRate;

		// percentage of games where champion isn't banned
		var notBanRate = 100 - banRate;

		// estimated popularity if bans weren't allowed
		var truePopularity = popularity + banRate * (popularity / notBanRate);

		console.log(truePopularity);

		var strength = truePopularity * winRate;

		champions[index].strength = strength;
	});

	callback(null, champions);
}

module.exports = {
	computeBanScores: computeBanScores
};
