$(document).ready(() => {
  let count = 0;
// contents data
  let data = [
    {
        "hero-bg": `url("/images/desktop-image-hero-1.jpg")`,
        h1: 'Discover innovative ways to decorate',
        p: `We provide unmatched quality, comfort, and style for property
owners across the country. Our combine form and
function in ixinging your vision to life. Create a room in your
own style with our collection and make your property a
reflection of you and what you love.`
    },
    {
      "hero-bg": `url("/images/desktop-image-hero-2.jpg")`,
      h1: "We are available all across the globe",
      p: `With stores all over the world, it's easy for you to find furniture
for your home or place of business. Locally, we're in most
major cities throughout the country. Find the branch nearest
you using our store locator. Any questions? Don't hesitate to
contact us today.`
    },

    {
        "hero-bg": `url("/images/desktop-image-hero-3.jpg")`,
        h1: "Manufactured with the best materials",
        p: `Our modern furniture store provide a high level of quality. Our
company has invested in advanced technology to ensure that
every product is made as perfect and as consistent as
possible. With three decades of experience in this industry
, we
understand what customers want for their home and office.`
    }
  ];

//default background for home-div
  $(".home-div").css("background-image", `${data[count]['hero-bg']}`);

//content update funcntion
  let updateContent = ()=> {
    count = (count + data.length) % data.length;
    console.log(count)
    $(".home-div").css("background-image", `${data[count]['hero-bg']}`);
    $('.hero-h1').text(`${data[count].h1}`);
    $('.hero-p').text(`${data[count].p}`);
  };

// next content
  $('.arrow-right').click(()=> {
    count++;
    updateContent();    
  });

//prev content
  $('.arrow-left').click(()=> {
    count--;
    console.log("clicked")
    updateContent();    
    
  });


  $('.show').click(()=> {
    $('.nav-mobile').css('top', '0');


  });  

  $('.close').click(()=>{
    $('.nav-mobile').css('top', '-100px');

  })

});
