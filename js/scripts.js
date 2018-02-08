
// HIDE/SHOW  BIO

// $(document).ready(function(){
//     $('#hideBiobutton').click(function(){
//         $('.bio').hide(1000);
//     });
//     $('#showBiobutton').click(function(){
//         $('.bio').show(1000);
//     });
// });

// HIDE/SHOW CV

//$(document).ready(function(){
//  $('#showcv').click(function(){
//      $('#educ').show(1000);
//      $('#ps').show(1000);
//      $('#skills')show(1000);
//  });
//});

$('#showcv').click(function(){
  $('.cv').css('visibility','visible');
};

// HIDE/SHOW

$(document).ready(function(){
  $('#educ').click(function(){
    $('#showhideeducation').show(1000);
    $('#showhideps').hide(1000);
    $('#showhideskills').hide(1000);
  });
});

$(document).ready(function(){
  $('#ps').click(function(){
    $('#showhideeducation').hide(1000);
    $('#showhideps').show(1000);
    $('#showhideskills').hide(1000);
  });
});

$(document).ready(function(){
  $('#skills').click(function(){
    $('#showhideeducation').hide(1000);
    $('#showhideps').hide(1000);
    $('#showhideskills').show(1000);
  });
});



// TEXTURE COLOR BUTTON
$('#backroundtexturechangebutton').click(changetexture)
 var textures = new Array ( 'https://www.transparenttextures.com/patterns/swirl.png', 'https://www.transparenttextures.com/patterns/notebook-dark.png' , 'https://www.transparenttextures.com/patterns/ps-neutral.png' , 'https://www.transparenttextures.com/patterns/cubes.png' , 'https://www.transparenttextures.com/patterns/foggy-birds.png' , 'https://www.transparenttextures.com/patterns/green-gobbler.png' , 'https://www.transparenttextures.com/patterns/subtle-white-feathers.png' , 'https://www.transparenttextures.com/patterns/transparent-square-tiles.png' ,'https://www.transparenttextures.com/patterns/batthern.png', 'https://www.transparenttextures.com/patterns/diagmonds-light.png', ) ;
  var i = 0;
  function changetexture() {
    $('body').css('background-image','url(' + textures[i] + ')');
      if (i <= 9) {
         i += 1; }
      else {
         i = 0;}
    }

// CHANGE COLOR BUTTON
// borrowed from class

$('#backroundcolorchangebutton').click(function() {
  $('body').css('background-color', RandomColor())
})

// helper function for generating 6-character hex string
// I stole this from: https://stackoverflow.com/questions/1484506/random-color-generator
function RandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// CHANGE PICTURE BUTTON

$('#profilepicchangebutton').click(changeprofilepic)
	var profiles = new Array( 'https://i.imgur.com/2AyewE5.jpg', 'https://i.imgur.com/EKQymge.jpg'	, 'https://i.imgur.com/lBLz1UF.jpg?1'	, 'https://i.imgur.com/xPqrmoW.jpg', 'https://i.imgur.com/AZNZ0eD.jpg?1'	, 	 'https://i.imgur.com/P95OL7B.jpg?1', 'https://i.imgur.com/3wYJDvR.png',  'https://i.imgur.com/ua5ieCo.png');
    var i = 0;
    function changeprofilepic() {
        $('#me').attr('src',profiles[i]);
       if (i <= 7) {
         i += 1;
        } else {
            i = 0;
       }
    }

// SIZE PROFILE PICTURE BUTTONS
$('#UpMEbutton').click(function() {
  $('#me').width('200px')
  $('#me').height('200px') ;
  $('#me').attr('border-radius','50%')
})

$('#ResetMeButton').click(function() {
  $('#me').width('150px')
  $('#me').height('150px')
})

$('#DownMebutton').click(function() {
  $('#me').width('100px')
  $('#me').height('100px')
})

// FONT STYLE BUTTON
$('#fontchangebutton').click(changefont)
  var changefonts = new Array('Cutive Mono','Space Mono','Anonymous Pro', 'Concert One', 'Nixie One');
  var i = 0;
  function changefont() {
      $('body').css('font-family',changefonts[i]);
     if (i <= 5) {
       i += 1;
      } else {
       i = 0;
     }
  }

// FONT SIZE buttons
// When + or - buttons are clicked the font size of the body is increased/decreased by 2
// The max is set to 50px, the min is set by min font in the user's style sheet

function getSizeText() {
  sizeText = $('body').css('font-size');
  sizeText = parseInt(sizeText, 10);
  $( '#font-size' ).text( sizeText );
}

//get inital font size
getSizeText();

$('#UpTextbutton').click(function() {
  if ((sizeText + 2) <= 50) {
    $('body').css('font-size','+=2');
    $( '#font-size' ).text(  sizeText += 2 );
  }
});

$('#DownTextbutton').click(function() {
  if ((sizeText - 2) >= 9) {
    $('body').css('font-size','-=2' );
    $( '#font-size' ).text(  sizeText -= 2  );
  }
});

$('#ResetTextButton').click(function() {
    $('body').css('font-size',12);
    $('body').css('font-family','Montserrat')
  });
