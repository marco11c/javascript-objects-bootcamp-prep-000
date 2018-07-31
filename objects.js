var playlist={
  logic:'44 more',
  
}
function updatePlaylist(playList,artist,title){
  playList.artist=title;
  return playList;
  
}
function removeFromPlaylist(obj,artist){
  delete obj.artist;
  return obj;
  
}