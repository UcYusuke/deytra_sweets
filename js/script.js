
// ドロワーメニュー
jQuery("#js-drawer-button").on("click", function () {
    // このボタンをクリックしたとき、次の要素の表示を切り替える
    jQuery(this).next().slideToggle();
});

// トップへ戻るボタン
// https://otamunote.com/pagetop-installation/

jQuery(function(){
// ボタン要素の取得
  var pagetop = jQuery('#js-button-to-top');

//デフォルトでボタン非表示
  pagetop.hide();

  jQuery(window).scroll(function () {
      // トップから80pxスクロールしたら
     if (jQuery(this).scrollTop() > 80) {
        // 300秒かけてフェードイン
          pagetop.fadeIn(300);
     } else {
        // ページトップにいるときは非表示
          pagetop.fadeOut(300);
     }
  });
  pagetop.on("click", function () {
    // ボタンを押したら500ms（0.5秒）かけてページトップへ戻る
    jQuery('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


//画像を拡大させるモーダルウインドウ
//https://webcat.work/modal/

// 「menu-img」クラスの画像をクリックしたとき
jQuery('.menu-img').click(function() {
    
    // クリックした画像のsrc属性を取得し、変数imgSrcに格納
    var imgSrc = jQuery(this).attr('src');
    
    //「bigimg」クラスのsrc属性を、imgSrcに書き換える
    jQuery('.bigimg').children().attr('src', imgSrc);
    
    // モーダルウィンドウを表示
    jQuery('.modal').fadeIn();

    // モーダル表示中は、縦スクロールを無効
    jQuery('body,html').css('overflow-y', 'hidden');

    // aタグの遷移を無効化
    return false
  });

// 画面のどこかをクリックしたとき
jQuery('bod, html').click(function() {

    // モーダルを非表示
    jQuery('.modal').fadeOut();

    // 縦スクロールを復活
    jQuery('body,html').css('overflow-y', 'visible');

     // aタグの遷移を無効化
    return false
  });