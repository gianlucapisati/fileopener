var fileOpener = {
	open: function(url){
		cordova.exec(null, null, "FileOpener", "openFile", [url]);
	},
}

module.exports = fileOpener;