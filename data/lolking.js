// LIBRARIES
var cheerio = require('cheerio');
var request = require('request');

function getChampionStatistics(callback){
	request('http://www.lolking.net/champions/', onResponse);

	function onResponse(error, response, body){
		if (!error && response.statusCode == 200){
			parseBody(body);
		} else if (error) {
			callback(error);
		} else {
			callback(response);
		}
	}

	function parseBody(body){
		var $ = cheerio.load(body);
		var table = [];
		$('.champion-list > tbody > tr').each(function(index, row){
			var champion = row.children[1].attribs['data-sortval'];
			var popularity = row.children[7].attribs['data-sortval'];
			var winRate = row.children[9].attribs['data-sortval'];
			var banRate = row.children[11].attribs['data-sortval'];
			table.push({
				champion: champion,
				popularity: popularity,
				winRate: winRate,
				banRate: banRate
			});
		});
		callback(false, table);
	}
}

// EXPORTS
module.exports = {
	getChampionStatistics: getChampionStatistics
};
