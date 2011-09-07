addKiller("WindowsMedia", {

"canKill": function(data) {
	return data.plugin === "Windows Media" && canPlayWM;
},

"process": function(data, callback) {
	var ext = extInfo(data.src);
	if(!ext) return;
	var sources = [{"url": data.src, "isNative": false, "mediaType": ext.mediaType}];
	
	callback({
		"playlist": [{"sources": sources}],
		"isAudio": ext.mediaType === "audio"
	});
}

});
