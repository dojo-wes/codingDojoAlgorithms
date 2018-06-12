$(document).ready(function() {
  let dictionary = new TrieSet();
  $('#str').on('change paste keyup', function() {
    const str = $('#str').val();
    let foundWords = dictionary.autoComplete(str);
    if(!foundWords) {
      const htmlStr = `<button id="add">Add Word!</button>`;
      $('#stuff').html(htmlStr);
    } else {
      let htmlStr = `<ul>`;
      for(let word of foundWords) {
        htmlStr += `<li>${word}</li>`;
      }
      htmlStr += `</ul>`;
      $('#stuff').html(htmlStr);
    }
  });
  $('body').on('click', 'button', function() {
    const str = $('#str').val();
    dictionary.insert(str);
    $('#str').val('');
    $('#stuff').html('');
  });
});