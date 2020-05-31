$(function() {

  // 以下で、hideメソッドを用いて<h1>要素を隠してください
  $('h1').hide();

  // 以下で、fadeOutメソッドを用いて<img>要素を隠してください
  $('img').fadeOut();

  // 以下で、slideUpメソッドを用いて<p>要素を隠してください
  $('p').slideUp();

  // slideUpメソッドを用いて、「#title」の要素を隠してください
  $('#title').slideUp();

  // fadeOutメソッドを用いて、「.lesson-item」の要素を隠してください
  $('.lesson-item').fadeOut();

  // showメソッドを用いて、「#title」要素を表示してください
  $('#title2').show();

  // fadeInメソッドを用いて、「#image」要素を表示してください
  $('#image').fadeIn();

  // 「#hide-text」要素に対するclickイベントを作成してください
  $('#hide-text').click(function(){
    $('#text').slideUp();
  });

  // 「#change-css」要素に対するclickイベントを作成してください
  $('#change-css').click(function(){
    $('#text2').css('color', 'red');
    $('#text2').css('font-size', '50px');
  });

  // 「#change-text」要素に対するclickイベントを作成してください
  $('#change-text').click(function(){
    $('#text3').text('ようこそ、Progateへ');
  });
  // 「#change-html」要素に対するclickイベントを作成してください
  $('#change-html').click(function(){
    $('#text3').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>')
  });

  // 「.list-item」要素に対するclickイベントを作成してください
  $('.list-item').click(function(){
    $(this).css('color', 'red');
  });

  $('.btn').click(function() {
    // $('#title')を変数$titleに代入してください
    var $title = $('#title3');
    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('こんばんは、にんじゃわんこさん');
    $title.fadeOut(1000);
    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $('#text4').css('color', 'blue')
      .html('<h3>jQueryをマスターしましょう！</h3>')
      .fadeOut(1000);
  });

  $('#find-method').click(function() {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定してください
    $('#wrapper').find('a').css('color', 'red');
  });
  $('#children-method').click(function() {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠してください
    $('#wrapper').children('a').fadeOut();
  });

  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(function(){
    $('.language-text').fadeIn();
	  },function(){
        $('.language-text').fadeOut();
    });
});
