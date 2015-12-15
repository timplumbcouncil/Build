$( document ).ready(function() {

 
    var cb = function() {
    var l = document.createElement('link'); l.rel = 'stylesheet';
    l.href = 'css/custom.min.css';
    var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h); };
    var raf = requestAnimationFrame || mozRequestAnimationFrame ||
              webkitRequestAnimationFrame || msRequestAnimationFrame;
    if (raf) raf(cb);
    else window.addEventListener('load', cb);


	populateSideNav()

	$(".mobileNavToggle").focus(function() {
		openMainMenu()
	}); 

	$(".iconStack").hover(function() {
		$(this).css('cursor','pointer');
	}, function() {
		$(this).css('cursor','auto');
	});

	$(".dropDownMenu").html("<label for='iwouldliketoMobile'><span class='hiddenText'>I would like to</span></label>" + $(".jumpBox").html())

  $(".dropDownMenu #iwouldliketo").attr("id","iwouldliketoMobile");

  
  

});

$( window ).resize(function() {
  if ($(".mobileNavToggle").is(":visible")) {

  	//$(".logoRow").prepend($(".jumpBox").html())

  } else {
 

  }
     // console.log($( window ).width())
 });

function populateSideNav() {

	$( ".sideNavUL li" ).each(function( index ) {
	  if ($(this).attr("class")) 
	  {
	    $(".sideMobileNavIcons").append("<div class='"+$(this).attr("class")+" iconStack' onclick='javascript:toggleSideMenu()''><span class='hiddenText'>Expand mobile menu</span></div>")
	  }
	})

	$(".sideMobileNavList").html("<a class='closeMenu' href='javascript:toggleSideMenu()'><span class='hiddenText'>Close Menu</span></a><div class='sideNav'>" + $(".sideNav").html() + "</div>")



	$(".sideMobileNavIcons a:first").focus(function() {
	  toggleSideMenu()
	});

	$(".sideMobileNavList li a:last").blur(function() {
	  toggleSideMenu()
	});
}

function toggleSideMenu() {

	if ($(".sideMobileNavList").is(":visible")) {
  		closeSideNav();
	}
	else {
  		openSideNav();
	}
}

function closeSideNav() {

  $(".sideMobileNavList").fadeOut( function() {
    $('.sideMobileNavIcons .active').animate({"padding-bottom": 0 }, 500)  
  })

}

function openSideNav(){

  // count children
  var childElements = $('.active li').length
  var childPadding = childElements * 17

  if (childElements > 0) {

    // animte icons to match children
    $('.sideMobileNavIcons .active').animate({"padding-bottom": childPadding }, 500, function() { 
      $(".sideMobileNavList").fadeIn()
    })  

  } else {

      // if no children, open without expanding
      $(".sideMobileNavList").fadeIn()
    }
}

function closeMainMenu() {
	$(".mobileNavToggle").css('background-image', "url(images/main_nav_mobile.png)");  
    $(".mobileNav a").attr("onclick","javascript:openMainMenu()");
    $(".mobileMenu").fadeOut()
}

function openMainMenu(){

      // close top menu if side activated

      closeSideNav()

      // clear mobile menu
      $(".mobileMenu").html("<ul></ul>")

      // change graphic to close icon
      $(".mobileNavToggle").css('background-image', "url(images/main_nav_mobile_close.png)");  

      // add utility nav
      $( ".utility  li a" ).each(function( index ) {
        $(".mobileMenu ul").append("<li class='mobileUtilityNav'><a href='"+$(this).attr('href')+"'  >" + $( this ).text() + "</a></li>");
      });

      // add main nav
      $( ".mainNav  li a" ).each(function( index ) {
        $(".mobileMenu ul").append("<li class='mobileMainNav'><a href='"+$(this).attr('href')+"'  >" + $( this ).text() + "</a></li>");
      });

      //$(".mobileNav").append("<div class='mobileSearch'>" + $(".searchTool").html() + "</div>")
      $(".mobileMenu").fadeIn( function() { $(".mobileNav a").attr("onclick","javascript:closeMainMenu()");})

      // close main menu if tabbed out

      $(".mobileMenu a:last").blur(function() {
        closeMainMenu()
      });
}