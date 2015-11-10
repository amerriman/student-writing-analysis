// add scripts

// $(document).on('ready', function() {
//   console.log('sanity check!');


// });

// function encode(text){
//   var encoded = text.replace(/ /g, "%20");
//   return encoded;
// }

$('#paragraph-submit').on('click', function(){
  var text = $('#paragraph').val();
  // console.log(text, "TEXTs");
  //making a get request to server, and passing it the paragraph text - the data is the res.json(result) from the server side.
  $.get('/analyze/'+ text, function(data){
    // console.log(data[0]);
    //make functions and call them in here with data as the parameters
    sortSentiment(data);
  });
  postParagraph(text)
});


function sortSentiment(data){
  var textS = $('#paragraph').val();
  var positiveWords = [];
  var negativeWords = [];
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].sentiment.type, "data sentiment type");
    if(data[i].sentiment.type === "positive"){
      positiveWords.push(data[i].text)
    } else if (data[i].sentiment.type === "negative"){
      negativeWords.push(data[i].text);
    }
  }
  console.log(positiveWords, "POSITIVE WORDS");
  console.log(negativeWords, "NEGATIVE WORDS");
  console.log(textS, "textS");
  //make a function to color the words, and call it here?
  return positiveWords, negativeWords;
}


function postParagraph(text){
    $('#result-paragraph').append(text);
}


// x[0].sentiment.type

