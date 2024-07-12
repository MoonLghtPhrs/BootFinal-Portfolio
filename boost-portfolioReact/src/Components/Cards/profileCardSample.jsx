
const CardSample = () =>
{
    return (
  /*       <!-- 
 
 "Prismatic" by nice♡ (toyhou.se/nice)
 
୨୧.....................୨୧
 
    ➳ NOTES:
        ♡ You can use find and replace/CTRL + F to change the colors.
        ♡ The HTML credit is located in the top right corner of the character bio section. You can move it to somewhere else visible but please do not remove it entirely.
        ♡ Be sure not to remove the parentheses when you're replacing URLS for images to make sure that they work.
        ♡ The only use of RGBA colors instead of hex colors is for the translucent background of the name box on the left. The others can be replaced using the list underneath this section.
        ♡ Any of the icons can be replaced, including the icons on the edges of the character image, but make sure to keep the styling! The styling itself can be changed/adjusted, though.
        ♡ The cloud with rain icon also acts as a credit if you hover over it. The credit text can be changed with the "title=" attribute.
        ♡ If you remove text-transform: uppercase where it is used for places like the title, it will get rid of that styling if you prefer something else. 
        ♡ The side palette matches with the corresponding character trait, but you can feel free to edit them separately
        ♡ Feel free to ask any questions in my thread! The rules can also be found there or on my page.
 
୨୧.....................୨୧
 
    ➳ COLORS:
        ♡ Content Boxes: #FFF9F4
        ♡ Text: #43566D
        ♡ Secondary Color & Dividers (ex: Horizontal and vertical dotted lines, drops between traits, drop shadow on title):  #A7BDC7
        ♡ Name Box: rgba(255, 249, 244, 0.8)
        ♡ First Palette Color/Trait: #F5918D
        ♡ Second Palette Color/Trait: #EBBAAE
        ♡ Third Palette Color/Trait: #9DC7B6
        ♡ Fourth Palette Color/Trait: #84A9AD
        ♡ Fifth Palette Color/Trait: #8496AD
        ♡ Credit: #FFD6CB
 
--> */
 
// <!-- ♡ initial container ♡ -->
<div class="container-fluid p-0" style="margin: auto; max-width: 950px;">
  <div class="row no-gutters">
    {/* <!-- ♡ character image - do not remove parenthesis, place image url within them ♡ --> */}
    <div class="col-lg-5 p-1">
 
      <div class="h-100" style="background-image: url('INSERT URL HERE'); background-repeat: no-repeat; background-position: center; min-height: 350px; border-radius: 50em 50em 20px 20px; border: 6px solid #FFF9F4; position: relative;">
 
        {/* <!-- ♡ name section ♡ --> */}
        <div style="position: absolute; bottom: 0; background-color: rgba(255, 249, 244, 0.8); width: 100%;">
          <div class="col-12 row no-gutters px-3 py-1" style="align-items: center;">
            <div class="col-auto">
              {/* <!-- ♡ name text ♡ --> */}
              <p style="color: #43566D; font-size: 25px; text-transform: uppercase; letter-spacing: .2em; font-weight: 500;">Name</p>
            </div>
            <div class="mx-3 col">
              <hr style="border-top: 1px dotted #A7BDC7;"/>
            </div>
            <div class="col-auto" style="color: #43566D; font-size: 25px;">
              {/* <!-- ♡ icon with credit feature - replace with Font Awesome, but keep tooltipster and title ♡ --> */}
              <i class="fa-duotone fa-cloud-rain tooltipster" title="ART CREDIT"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <div class="h-100 col-lg-7 p-1">
      {/* <!-- ♡ title section ♡ --> */}
      <div class="col-12 row no-gutters py-1" style="align-items: center;">
        {/* <!-- ♡ icon - replace with Font Awesome ♡ --> */}
        <div class="col-auto" style="color: #43566D; font-size: 25px;">
          <i class="fa-duotone fa-raindrops"></i>
        </div>
        <div class="mx-3 col">
          <hr style="border-top: 1px dotted #A7BDC7;"/>
        </div>
        <div class="col-auto">
          {/* <!-- ♡ title text ♡ --> */}
          <p style="color: #43566D; font-size:35px; text-transform:uppercase; letter-spacing: .2em; font-weight: 500; text-shadow: 2px 2px 0px #A7BDC7;">Prismatic</p>
        </div>
      </div>
 
      {/* <!-- ♡ info box section ♡ --> */}
      <div class="col-12 no-gutters" style="background-color: #FFF9F4; border-radius: 10px;">
        <div class="col-12 row no-gutters py-2" style="font-size: 15px;">
          <div class="col-6 px-2" style="color: #43566D; border-left: 1px dotted #A7BDC7;">
            {/* <!-- ♡ name ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight:bold; letter-spacing: .05em;">Name</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ alias/nickname ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Alias</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ age ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Age</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ birthday ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Birthday</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
          </div>
 
          <div class="col-6 px-2" style="color: #43566D; border-left: 1px dotted #A7BDC7;">
            {/* <!-- ♡ gende/r ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Gender</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ pronouns ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Pronouns</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ height ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Height</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
 
            {/* <!-- ♡ orientation ♡ --> */}
            <div class="row no-gutters">
              <div class="col-auto" style="font-weight: bold; letter-spacing: .05em;">Orientation</div>
              <div class="col"></div>
              <div class="col-auto">content</div>
            </div>
          </div>
 
        </div>
      </div>
 
      {/* <!-- ♡ character bio section ♡ --> */}
      <div class="col-12 no-gutters mt-2 p-0" style="background-color: #FFF9F4; border-radius: 10px;">
        {/* <!-- ♡ side palette ♡ --> */}
        <div class="row no-gutters">
          <div class="col-1 no-gutters" style="display: flex; flex-direction: column;">
            {/* <!-- ♡ first color ♡ --> */}
            <div style="background-color: #F5918D; flex-grow:1; border-radius: 10px 0px 0px 0px;"></div>
            {/* <!-- ♡ second color ♡ --> */}
            <div style="background-color: #EBBAAE; flex-grow:1;"></div>
            {/* <!-- ♡ third color ♡ --> */}
            <div style="background-color: #9DC7B6; flex-grow:1;"></div>
            {/* <!-- ♡ fourth color ♡ --> */}
            <div style="background-color: #84A9AD; flex-grow:1;"></div>
            {/* <!-- ♡ fifth color ♡ --> */}
            <div style="background-color: #8496AD; flex-grow:1; border-radius: 0px 0px 0px 10px"></div>
          </div>
 
          <div class="col-11 no-gutters">
            <div class="p-2 no-gutters">
              {/* <!-- ♡ personality traits - you can also change the Font Awesome icon that is in between each trait ♡ --> */}
              <div class="row no-gutters mx-2 my-2" style="font-size: 15px; font-weight: 500; justify-content: center; align-items: baseline; flex-wrap: wrap; color: #FFF9F4; letter-spacing: .1em;">
                {/* <!-- ♡ trait one - background color matches to palette. add color: with a hex code of your choice after style=" if the text does not have enough contrast ♡ --> */}
                <p class="mb-1" style="background-color: #F5918D; padding: 2px; padding-left: 10px; padding-right: 10px; border-radius: 10px;">description</p>
 
                <i class="fa-solid fa-droplet px-2" style="font-size:.8em; color:#A7BDC7;"></i>
 
                {/* <!-- ♡ trait two ♡ --> */}
                <p class="mb-1" style="background-color: #EBBAAE; padding: 2px; padding-left: 10px; padding-right: 10px; border-radius: 10px;">description</p>
 
                <i class="fa-solid fa-droplet px-2" style="font-size:.8em; color:#A7BDC7;"></i>
 
                {/* <!-- ♡ trait three ♡ --> */}
                <p class="mb-1" style="background-color: #9DC7B6; padding: 2px; padding-left: 10px; padding-right: 10px; border-radius: 10px;">description</p>
 
                <i class="fa-solid fa-droplet px-2" style="font-size:.8em; color:#A7BDC7;"></i>
 
                {/* <!-- ♡ trait four ♡ --> */}
                <p class="mb-1" style="background-color: #84A9AD; padding: 2px; padding-left: 10px; padding-right: 10px; border-radius: 10px;">description</p>
 
                <i class="fa-solid fa-droplet px-2" style="font-size:.8em; color:#A7BDC7;"></i>
 
                {/* <!-- ♡ trait five ♡ --> */}
                <p class="mb-1" style="background-color: #8496AD; padding: 2px; padding-left: 10px; padding-right: 10px; border-radius: 10px;">description</p>
              </div>
 
              {/* <!-- ♡ written description ♡ --> */}
              <div style="color: #43566D;">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus suscipit diam non pellentesque. Sed elementum justo a neque dictum, et accumsan ante lacinia. Nunc vel nulla lobortis, vestibulum enim ac, auctor tortor. Nulla vestibulum aliquet accumsan. Vivamus quam massa, pharetra at metus sed, aliquam ultricies dolor. Morbi dictum elit eget bibendum rhoncus. In quis dapibus tortor. Maecenas ullamcorper, erat id malesuada consectetur, felis quam posuere augue, id ultricies dui dui id libero. Sed venenatis ultricies enim sit amet sollicitudin. Ut convallis tellus id libero fermentum, nec commodo velit finibus. Sed vel pellentesque lectus. Praesent viverra pellentesque lectus, at aliquet massa. Mauris efficitur purus vitae consectetur congue. Proin eu consequat sapien, eget convallis ante.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ♡ credit - do not remove completely ♡ --> */}
        <div style="position: absolute; top:2px; right:5px;">
          <a href="https://toyhou.se/nice" class="tooltipster" style="color: #FFD6CB;" title="HTML by nice"><i class="fa-regular fa-heart"></i></a>
        </div>
      </div>
 
    </div>
  </div>
</div>
    );
}
;
export default CardSample;