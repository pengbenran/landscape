/**
 * Created by Administrator on 2017/10/20.
 */
+function(){
   $("#banner-1").addClass('f');
   $('#banner-2').addClass('n');
   var toggle = 0;
   var timer = 0;
   //随机产生下一个数
   function next() {
      var num = parseInt(Math.random() * 7 + 1);
      if (toggle != num) {
         toggle = num
      }
      else {
         next();
      }
   }

   function changebanner() {
      timer = setInterval(()=> {
         next();
         var $last = $("#banner-1").attr("class");
         var aniN = `billboardItem_${toggle}_on`;
         var aniF = `billboardItem_${toggle}_off`;
         if ($last[$last.length - 1] == "n") {
            $("#banner-1").removeAttr("class").addClass("animated").addClass(aniF);
            $("#banner-2").removeAttr("class").addClass("animated").addClass(aniN);
         }
         else {
            $("#banner-1").removeAttr("class").addClass("animated").addClass(aniN);
            $("#banner-2").removeAttr("class").addClass("animated").addClass(aniF);
         }
      }, 5000)
   }

   changebanner();
   $("#container").hover(()=> {
      clearInterval(timer);
      timer = null;
   },()=> {
      changebanner();
   })
}();