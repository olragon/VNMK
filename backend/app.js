var express = require('express');
var db = require('riak-js').getClient();

/**
 * Settings for express framework
 */
var app = express.createServer(
  express.logger(), // Log
  express.bodyParser() // Parse http content body
);

/**
 * Định nghĩa các thuộc tính để tìm kiếm bài hát.
 *   - Chú trọng vào các thuộc tính của <b>file nhạc</b>,
 *   các thông tin như lời bài hát,
 *   thông tin ca sĩ, năm phát hành albums, 
 *   ngôn ngữ ... có thể bổ sung sau.
 */
var searchKeywords = new Array(
  'singers', // Tên ca sĩ. Ví dụ: Quang Dũng, Bằng Kiều
  'albums', // Tên album. Ví dụ: The Best Of Quang Dung 1, The Best Of Quang Dung 2
  'songs', // Tên bài hát. Ví dụ: Bâng Khuâng Chiều Nội Trú, Anh Xin Làm
  'genes', // Thể loại nhạc. Ví dụ: Pop, Rock, ...
  'sources', // Nguồn của file nhạc,thường là tên domain. Ví dụ: mp3.zing.vn
  'quanlities', // Chất lượng file nhạc. Ví dụ: 32, 64, >=128 
  'formats', // Định dạng của file nhạc. Ví dụ: mp3, wav, ogg
  'sorts', // Tiêu chí sắp xếp. Ví dụ: 
  'limits' // Giới hạn số lượng kết quả. Ví dụ: 1..15
);

/**
 * Build search query base on searchKeywords array.
 * 
 * @param searchKeywords
 *   - Array contain search supported keywords
 * @return query
 *   - Query url
 */
function buildSearchQuery(searchKeywords){
  query = new String;
  
  for (var i=0; i < searchKeywords.length; i++) {
    // Example: keywords=:keywords?
    query += searchKeywords[i] + '=:' + searchKeywords[i] + '?';
    
    if(i != searchKeywords.length - 1) {
      query += '&';
    }
  };

  return query;
}

/**
 * Define menu route
 */
app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/vnmk', function(req, res){
  res.send('Viet Nam music killer server');
});

app.get('/vnmk', function(req, res){
  res.send('Intro');
});

app.get('/vnmk/api/?', function(req, res){
  res.send('API document');
});

app.get('/vnmk/api/singer/:singers', function(req, res){
  res.send('singers: ' + req.params.singers);
});

app.get('/vnmk/api/song/:songs', function(req, res){
  res.send('songs: ' + req.params.songs);
});

app.get('/vnmk/api/writer/:writers', function(req, res){
  res.send('writers: ' + req.params.writers);
});

app.get('/vnmk/api/album/:albums', function(req, res){
  res.send('albums: ' + req.params.albums);
});

/**
 * Menu router for full search operation
 * 
 *   - Link có dạng: /vnmk/api/search/singers=&albums=&songs=&genes=&sources=&quanlities=&formats=&sorts=&limits=
 *   - Cho phép nhập theo điều kiện AND (sử dụng dấu ,), OR (sử dụng dấu |)
 *   - Ví dụ: 
 *     - singers= Hồ Quỳnh Hương | Hồ Ngọc Hà , Quang Dũng
 *     - 
 *   - 
 */
app.get('/vnmk/api/search/' + buildSearchQuery(searchKeywords), function(req, res){
  console.log(req.params)
  res.send(
    'right place'
  );
});

/**
 * Menu router for full search operation
 */
app.post('/vnmk/api/search/' + buildSearchQuery(searchKeywords), function(req, res){
  console.log(req.body.user);
});

/**
 * Test
 */
app.get('/vnmk/api/search/singers=:singers?&albums=:albums?',
  function(req, res){
    res.send(
      'right place'
    );
  }
);

/**
 * Debug
 */
app.get('/vnmk/api/debug', function(req, res){
  var searchQuery = buildSearchQuery(searchKeywords);
  res.send('/vnmk/api/search/' + searchQuery);
});

app.listen(3000);