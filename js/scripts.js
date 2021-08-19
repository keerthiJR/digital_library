
$(document).ready(function() {
    $('.default').show();
    $('.Aayudhangal').hide();
    $('.Amman').hide();
    $('.BudhamJainam').hide();
    $('.GramaDevadhai').hide();
    $('.Navagragangal').hide();
    $('.Saivam').hide();
    $('.SidhargalMunivargal').hide();
    $('.Vaahanangal').hide();
    $('.Vainavam').hide();
    $('.Othercategories').hide();
});

$(function () {
    $("#image-dropdown").change(function () {
        if ($(this).val() == "1") {
          $('.default').hide();
          $('.Aayudhangal').show();
          $('.Amman').hide();
          $('.BudhamJainam').hide();
          $('.GramaDevadhai').hide();
          $('.Navagragangal').hide();
          $('.Saivam').hide();
          $('.SidhargalMunivargal').hide();
          $('.Vaahanangal').hide();
          $('.Vainavam').hide();
          $('.Othercategories').hide();
            
        } else if($(this).val() == "2"){
          $('.default').hide();
          $('.Aayudhangal').hide();
          $('.Amman').show();
          $('.BudhamJainam').hide();
          $('.GramaDevadhai').hide();
          $('.Navagragangal').hide();
          $('.Saivam').hide();
          $('.SidhargalMunivargal').hide();
          $('.Vaahanangal').hide();
          $('.Vainavam').hide();
          $('.Othercategories').hide();

        }
        else if($(this).val() == "3"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').show();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "4"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').show();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "5"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').show();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "6"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').show();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "7"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').show();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "8"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').show();
            $('.Vainavam').hide();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "9"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').show();
            $('.Othercategories').hide();
  
          }
          else if($(this).val() == "10"){
            $('.default').hide();
            $('.Aayudhangal').hide();
            $('.Amman').hide();
            $('.BudhamJainam').hide();
            $('.GramaDevadhai').hide();
            $('.Navagragangal').hide();
            $('.Saivam').hide();
            $('.SidhargalMunivargal').hide();
            $('.Vaahanangal').hide();
            $('.Vainavam').hide();
            $('.Othercategories').show();
  
          }
         

    });
});