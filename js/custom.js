

$( document ).ready(function() {

  populateSideNav()

  $(".mobileNavToggle").focus(function() {
    toggleMainMenu()
  });

});

$( window ).resize(function() {
  if ($(".mobileMenu").is(":visible")) {console.log("now")}
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
  closeSideNav()
}
else {
  openSideNav()
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

  function toggleMainMenu() {

    if (!$(".mobileMenu").is(":visible")) {


      // close top menu if side activated

      closeSideNav()

      // clear mobile menu

      $(".mobileMenu").html("<ul></ul>")

      // add utility nav

      $( ".utility  li a" ).each(function( index ) {
        $(".mobileMenu ul").append("<li class='mobileUtilityNav'><a href='"+$(this).attr('href')+"'  >" + $( this ).text() + "</a></li>");
      });

      // add main nav

      $( ".mainNav  li a" ).each(function( index ) {
        $(".mobileMenu ul").append("<li class='mobileMainNav'><a href='"+$(this).attr('href')+"'  >" + $( this ).text() + "</a></li>");
      });

      //$(".mobileMenu").append("<div class='mobileSearch'>" + $(".searchTool").html() + "</div>")
      $(".mobileMenu").fadeIn( function() { $(".mobileNav a").attr("onclick","javascript:toggleMainMenu()");})

      // close main menu if tabbed out

      $(".mobileMenu a:last").blur(function() {
        toggleMainMenu()
      });

    } else {

      $(".mobileNav a").attr("onclick","javascript:toggleMainMenu()");

      $(".mobileMenu").fadeOut()

    }

  }