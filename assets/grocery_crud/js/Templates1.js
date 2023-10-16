$(document).ready (function(){

     // WARRANTY ////////////////////////////////////////////////////////

$('#SWarranty').hide();
$('#SW').on('click', function() {
    $('#Schat_comm').hide();
    $('#SSP_comm').hide();
    $('#SPRO_comm').hide();
    $('#SB2B_comm').hide();
    $('#SPayIssues').hide();
    $('#SShipment').hide();
    $('#SRreturn').hide();


    //$('#SWarranty').show(100);
    console.log("insideSW")
    var x = document.getElementById("SWarranty");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/

    //ADD Button
    var addbnt=document.getElementById("Wadd_content");
    addbnt.onclick = addW;
    function addW(){
        //template title 
        var name_content= document.getElementById("Wcontent_name").value;
        console.log("name_content.length");
        console.log(name_content);
        var check= document.getElementById("Wadd_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){
            var submitOK= document.getElementById("Wadd_content");
            alert("Missing: file or Template name");
            submitOK= false;
        }else {
            var container =  document.getElementById("Wall_files_name");
            var elementi=container.children.length;
            console.log("elementi");
            console.log(elementi);
            var newDiv = document.createElement("li");
            newDiv.classList.add('boxM');
            
            newDiv.id =elementi+"TW";
            
            
            newDiv.setAttribute ('role','button');
            
        
            newDiv_text= document.createTextNode(name_content);
            newDiv.appendChild(newDiv_text);
            container.appendChild(newDiv);

            
            var content_file_container= document.getElementById("Wall_files_content");
            var content_file= document.createElement("li");
            var file_id_name= newDiv.id+"Container";
     
           
            
            content_file.id = file_id_name;
            content_file.classList.add('boxMT');

            var btn_cancel = document.createElement("button");
            btn_cancel.id="x"+file_id_name;
            btn_cancel.style.width = "10px";
            btn_cancel.style.height = "10px";
            btn_cancel_text=document.createTextNode("cancel");
            
            content_file.appendChild(btn_cancel);
            
            content_file_container.appendChild(content_file);
    
           var namefile= document.getElementById("Wadd_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
           
           //namefile="../"+namefile;
           console.log(namefile);
    
            var file_upload="";
            var file_upload= document.getElementById(file_id_name);
            //var name_content= document.getElementById("Wcontent_name").value;
           /* var input_check=namefile.length;
            console.log("input_check.length");
            console.log(input_check.length);

            if (input_check==0){
                alert("Missing: file or Template name");
                return false;
            } */
             
                file_upload=document.createElement("object");
                file_upload.id=file_id_name+"_File";
                file_upload.style.width = "100%";
                file_upload.style.height = "100%";
                file_upload.setAttribute ('data',namefile);
                content_file.appendChild(file_upload);
                
                alert("New Template:  "+name_content);
                console.log(file_upload);
                $(content_file).hide();
            //$(content_file).hide();

            
           
            
        }
        
        
    }
    
    var Welement = document.getElementById("Wall_files_name");
    
    function WmyFunction(index,tot){

        console.log("index");
        console.log(index);
        console.log("tot");
        console.log(tot);
        
        var selected_T=index+"TW";
        var filess=index+"TWContainer";

        console.log("selected_T");
        console.log(selected_T);

        console.log("Filess");
        console.log(filess);
        console.log("Contentss hide")

    
        for (var i = 0; i < tot; i++) {

            
            var filess_hide=i+"TWContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
            
            console.log("filess_hide");
            console.log(filess_hide);
            console.log("content_hide");
            console.log(content_hide);

            
          }

        
        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        
        console.log("textIndex");
        console.log(textIndex);

        console.log("textShow");
        console.log(textShow);

        $(textIndex).on('click', function(){
            console.log("IN CLICK");
            console.log(textShow);
            $(textShow).show(100);
            //$(textShow).slideToggle(700);
       });

    }
    
    function Wopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#Wall_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            console.log("Link");
            console.log(link);
            link.onclick= WmyFunction(i,tot); 

             
          }

    }

    Welement.onclick = Wopen_content;

/*////////////////////////////////////////////////////////////
///           CANCEL CONTENT ON BUTTON CLICK /////////////
///////////////////////////////////////////////////////////


var W_cancel_element = document.getElementById("Wall_files_content");


function Wcancel_content(cancel_element_T_id)
{
    var titel_id=cancel_element_T_id;
    var content_id=titel_id+"Container";

   // titel_id=titel_id.slice(1,4);

    
    var cancel_div_title=document.getElementById(titel_id);
    cancel_div_title.parentNode.removeChild(cancel_div_title);
    var cancel_content= document.getElementById(content_id);
    cancel_content.parentNode.removeChild(cancel_content);




}

    

    function Wselect_cancel_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#Wall_files_content').getElementsByTagName('li');
        var linksT = $('#Wall_files_name').getElementsByTagName('li');
        var tot=links.length;

        for (var i = 0; i <tot ; i++) {
            
            console.log("Content cancel Link")
            console.log(links[i]);
            
            var cancel_element_T_id=linksT[i].id;
            console.log("cancel_element_T_id");
            console.log(cancel_element_T_id);


            var cancel_element_id = "x"+cancel_element_T_id;
            
            

            cancel_element_T_id=cancel_element_T_id.slice(0,3);


            var cancel_element= document.getElementById(cancel_element_id );
            var cancel_element_titel= document.getElementById(cancel_element_T_id );

            console.log("2cancel_element_id");
            console.log(cancel_element_id);

            
            cancel_element.onclick = Wcancel_content(cancel_element_T_id); 

           /* $(cancel_element).on('click', function(cancel_element_T_id){
                
                var titel_id=cancel_element_T_id;
                var content_id=titel_id+"Container";
        
               // titel_id=titel_id.slice(1,4);
        
                
                var cancel_div_title=document.getElementById(titel_id);
                cancel_div_title.parentNode.removeChild(cancel_div_title);
                var cancel_content= document.getElementById(content_id);
                cancel_content.parentNode.removeChild(cancel_content);
           });////////8
           
            
             
          }

    }

    W_cancel_element.onclick = Wselect_cancel_content;*/
    
});

// RETURNS ////////////////////////////////////////////////////////

$('#SRreturn').hide();
$('#SR').on('click', function() {
    $('#Schat_comm').hide();
    $('#SSP_comm').hide();
    $('#SPRO_comm').hide();
    $('#SShipment').hide();
    $('#SB2B_comm').hide();
    $('#SPayIssues').hide();
    $('#SWarranty').hide();

    console.log("insideSW")
    var x = document.getElementById("SRreturn");
    if (x.style.display == "none") {
    x.style.display = "block";
    } /*else {
    x.style.display = "none";
    }*/
    
    var addbnt=document.getElementById("SRadd_content");
    addbnt.onclick = addR; //button add
    function addR(){
        //template title 
        var name_content= document.getElementById("SRcontent_name").value; // template name 

        //if no name is added print error
        
        var check= document.getElementById("SRadd_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
            var submitOK= document.getElementById("SRadd_content");
            alert("Missing: file or Template name");
            submitOK= false;
        } else{
            var container =  document.getElementById("SRall_files_name"); // get all name titles 

            var elementi=container.children.length; //elmenti nuber of titels 
    
            var newDiv = document.createElement("li");
            newDiv.classList.add('boxM');
            
            newDiv.id =elementi+"RT";
            
            newDiv.setAttribute ('role','button');
            
            newDiv_text= document.createTextNode(name_content);
            newDiv.appendChild(newDiv_text);
            container.appendChild(newDiv);
    
            var content_file_container= document.getElementById("SRall_files_content"); //  get all files text
            var content_file= document.createElement("li");
            var file_id_name= newDiv.id+"Container";
            content_file.id = file_id_name;
            content_file.classList.add('boxMT');
    
            var btn_cancel = document.createElement("button");
            btn_cancel.id="x"+file_id_name;
            btn_cancel.style.width = "10px";
            btn_cancel.style.height = "10px";
            btn_cancel_text=document.createTextNode("cancel");
            
            content_file.appendChild(btn_cancel);
            
            content_file_container.appendChild(content_file);
    
            //getting the file name from choose from button
            var namefile= document.getElementById("SRadd_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
    
            var file_upload="";
            var file_upload= document.getElementById(file_id_name);
    
            file_upload=document.createElement("object");
            file_upload.id=file_id_name+"_File";
            file_upload.style.width = "100%";
            file_upload.style.height = "100%";
            file_upload.setAttribute ('data',namefile);
            content_file.appendChild(file_upload);
            alert("New Template:  "+name_content);
            $(content_file).hide();
        }

        
            
    }
    
    var RTelement = document.getElementById("SRall_files_name");
    
    function RTmyFunction(index,tot){
        
        var selected_T=index+"RT";
        var filess=index+"RTContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"RTContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function RTopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SRall_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= RTmyFunction(i,tot);              
          }

    }

    RTelement.onclick = RTopen_content;
    
});

// Shipments ////////////////////////////////////////////////////////

$('#SShipment').hide();
$('#SS').on('click', function() {
    $('#Schat_comm').hide();
    $('#SSP_comm').hide();
    $('#SPRO_comm').hide();
    $('#SRreturn').hide();
    $('#SB2B_comm').hide();
    $('#SWarranty').hide();
    $('#SPayIssues').hide();

    var x = document.getElementById("SShipment");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/
    var addbntS=document.getElementById("SShip_add_content");

    addbntS.onclick = addS;//button add
    function addS() 
    {       
        //template title 
        var name_content= document.getElementById("SShip_content_name").value; // template name 
        //if no name is added print error 
        var check= document.getElementById("SShip_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
            var submitOK= document.getElementById("SShip_add_content");
            alert("Missing: file or Template name");
            submitOK= false;
        }else{
            var container =  document.getElementById("SShip_all_files_name"); // get all name titles 

            var elementi=container.children.length; //elmenti nuber of titels 
    
            var newDiv = document.createElement("li");
            newDiv.classList.add('boxM');
            
            newDiv.id =elementi+"SH";
            
            newDiv.setAttribute ('role','button');
            
            newDiv_text= document.createTextNode(name_content);
            newDiv.appendChild(newDiv_text);
            container.appendChild(newDiv);
    
            var content_file_container= document.getElementById("SShip_all_files_content"); //  get all files text
            var content_file= document.createElement("li");
            var file_id_name= newDiv.id+"Container";
            content_file.id = file_id_name;
            content_file.classList.add('boxMT');
    
            var btn_cancel = document.createElement("button");
            btn_cancel.id="x"+file_id_name;
            btn_cancel.style.width = "10px";
            btn_cancel.style.height = "10px";
            btn_cancel_text=document.createTextNode("cancel");
            
            content_file.appendChild(btn_cancel);
            
            content_file_container.appendChild(content_file);
    
            //getting the file name from choose from button
            var namefile= document.getElementById("SShip_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
    
            var file_upload="";
            var file_upload= document.getElementById(file_id_name);
    
            file_upload=document.createElement("object");
            file_upload.id=file_id_name+"_File";
            file_upload.style.width = "100%";
            file_upload.style.height = "100%";
            file_upload.setAttribute ('data',namefile);
            content_file.appendChild(file_upload);
            alert("New Template:  "+name_content);
            $(content_file).hide();
        } 

        
            
    }
    
    var SHelement = document.getElementById("SShip_all_files_name");
    
    function SHmyFunction(index,tot){
        
        var selected_T=index+"SH";
        var filess=index+"SHContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"SHContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function SHopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SShip_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= SHmyFunction(i,tot);              
          }

    }

    SHelement.onclick = SHopen_content;
    
});

//PAYMETNS ISSUES/////////////////////

$('#SPayIssues').hide();
$('#SPY').on('click', function() {
    $('#Schat_comm').hide();
    $('#SSP_comm').hide();
    $('#SPRO_comm').hide();
    $('#SRreturn').hide();
    $('#SB2B_comm').hide();
    $('#SShipment').hide();
    $('#SWarranty').hide();

    var x = document.getElementById("SPayIssues");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/


    //button add
    var addbntP=document.getElementById("SPayIss_add_content");

    addbntP.onclick = addP;//button add
    function addP()
    {
        //template title 
        var name_content= document.getElementById("SPayIss_content_name").value; // template name 

        //if no name is added print error 
        var check= document.getElementById("SPayIss_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);

        if(name_content==""||check==0){  
            var submitOK= document.getElementById("SPayIss_add_content");
            alert("Missing: file or Template name");
            submitOK= false;
        } else{
            var container =  document.getElementById("SPayIss_all_files_name"); // get all name titles 

            var elementi=container.children.length; //elmenti nuber of titels 
    
            var newDiv = document.createElement("li");
            newDiv.classList.add('boxM');
            
            newDiv.id =elementi+"PY";
            
            newDiv.setAttribute ('role','button');
            
            newDiv_text= document.createTextNode(name_content);
            newDiv.appendChild(newDiv_text);
            container.appendChild(newDiv);
    
            var content_file_container= document.getElementById("SPayIss_all_files_name"); //  get all files text
            var content_file= document.createElement("li");
            var file_id_name= newDiv.id+"Container";
            content_file.id = file_id_name;
            content_file.classList.add('boxMT');
    
            var btn_cancel = document.createElement("button");
            btn_cancel.id="x"+file_id_name;
            btn_cancel.style.width = "10px";
            btn_cancel.style.height = "10px";
            btn_cancel_text=document.createTextNode("cancel");
            
            content_file.appendChild(btn_cancel);
            
            content_file_container.appendChild(content_file);
    
            //getting the file name from choose from button
            var namefile= document.getElementById("SPayIss_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
    
            var file_upload="";
            var file_upload= document.getElementById(file_id_name);
    
            file_upload=document.createElement("object");
            file_upload.id=file_id_name+"_File";
            file_upload.style.width = "100%";
            file_upload.style.height = "100%";
            file_upload.setAttribute ('data',namefile);
            content_file.appendChild(file_upload);
            alert("New Template:  "+name_content);
            $(content_file).hide();
        }
        
            
    }
    var PYelement = document.getElementById("SPayIss_all_files_name");

    function PYmyFunction(index,tot){
        
        var selected_T=index+"PY";
        var filess=index+"PYContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"PYContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function PYopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SPayIss_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= PYmyFunction(i,tot);              
          }

    }

    PYelement.onclick = PYopen_content;
    
});

//SPONSOR AND B2B //////////////////////

$('#SB2B_comm').hide();
$('#SB2B').on('click', function() {
    $('#Schat_comm').hide();
    $('#SSP_comm').hide();
    $('#SRreturn').hide();
    $('#SShipment').hide();
    $('#SPayIssues').hide();
    $('#SWarranty').hide();
    $('#SPRO_comm').hide();

    var x = document.getElementById("SB2B_comm");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/


     //button add
    var addbntB=document.getElementById("SB2B_comm_add_content");

    addbntB.onclick = addB;//button add 
    function addB(){
        //template title 
        var name_content= document.getElementById("SB2B_comm_content_name").value; // template name 

        //if no name is added print error 
        var check= document.getElementById("SB2B_comm_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
            var submitOK= document.getElementById("SB2B_comm_add_content");
            alert("Missing: file or Template name");
            submitOK= false;
        } else{
            var container =  document.getElementById("SB2B_comm_all_files_name"); // get all name titles 

            var elementi=container.children.length; //elmenti nuber of titels 
    
            var newDiv = document.createElement("li");
            newDiv.classList.add('boxM');
            
            newDiv.id =elementi+"BB";
            
            newDiv.setAttribute ('role','button');
            
            newDiv_text= document.createTextNode(name_content);
            newDiv.appendChild(newDiv_text);
            container.appendChild(newDiv);
    
            var content_file_container= document.getElementById("SB2B_comm_all_files_content"); //  get all files text
            var content_file= document.createElement("li");
            var file_id_name= newDiv.id+"Container";
            content_file.id = file_id_name;
            content_file.classList.add('boxMT');
    
            var btn_cancel = document.createElement("button");
            btn_cancel.id="x"+file_id_name;
            btn_cancel.style.width = "10px";
            btn_cancel.style.height = "10px";
            btn_cancel_text=document.createTextNode("cancel");
            
            content_file.appendChild(btn_cancel);
            
            content_file_container.appendChild(content_file);
    
            //getting the file name from choose from button
            var namefile= document.getElementById("SB2B_comm_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
    
            var file_upload="";
            var file_upload= document.getElementById(file_id_name);
    
            file_upload=document.createElement("object");
            file_upload.id=file_id_name+"_File";
            file_upload.style.width = "100%";
            file_upload.style.height = "100%";
            file_upload.setAttribute ('data',namefile);
            content_file.appendChild(file_upload);
            alert("New Template:  "+name_content);
            $(content_file).hide();
        }

            
    }
    
    var BBelement = document.getElementById("SB2B_comm_all_files_name");
    
    function BBmyFunction(index,tot){
        
        var selected_T=index+"BB";
        var filess=index+"BBContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"BBContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function BBopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SB2B_comm_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= BBmyFunction(i,tot);              
          }

    }
    BBelement.onclick = BBopen_content;
    
});

///// SPARE PART DUDE//////////////////

$('#SSP_comm').hide();
$('#SSP').on('click', function() {
    $('#Schat_comm').hide();
    $('#SRreturn').hide();
    $('#SShipment').hide();
    $('#SB2B_comm').hide();
    $('#SPayIssues').hide();
    $('#SWarranty').hide();
    $('#SPRO_comm').hide();

    var x = document.getElementById("SSP_comm");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/

    //button add
    var addbntSP=document.getElementById("SSP_comm_add_content");

    addbntSP.onclick = addSP;//button add 
    function addSP(){
    
        //template title 
        var name_content= document.getElementById("SSP_comm_content_name").value; // template name 
        //if no name is added print error 
        var check= document.getElementById("SSP_comm_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
        var submitOK= document.getElementById("SSP_comm_add_content");
        alert("Missing: file or Template name");
        submitOK= false;
        }  else{
        var container =  document.getElementById("SSP_comm_all_files_name"); // get all name titles 

        var elementi=container.children.length; //elmenti nuber of titels 

        var newDiv = document.createElement("li");
        newDiv.classList.add('boxM');
        
        newDiv.id =elementi+"SPE";
        
        newDiv.setAttribute ('role','button');
        
        newDiv_text= document.createTextNode(name_content);
        newDiv.appendChild(newDiv_text);
        container.appendChild(newDiv);

        var content_file_container= document.getElementById("SSP_comm_all_files_content"); //  get all files text
        var content_file= document.createElement("li");
        var file_id_name= newDiv.id+"Container";
        content_file.id = file_id_name;
        content_file.classList.add('boxMT');

        var btn_cancel = document.createElement("button");
        btn_cancel.id="x"+file_id_name;
        btn_cancel.style.width = "10px";
        btn_cancel.style.height = "10px";
        btn_cancel_text=document.createTextNode("cancel");
        
        content_file.appendChild(btn_cancel);
        
        content_file_container.appendChild(content_file);

        //getting the file name from choose from button
        var namefile= document.getElementById("SSP_comm_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt

        var file_upload="";
        var file_upload= document.getElementById(file_id_name);

        file_upload=document.createElement("object");
        file_upload.id=file_id_name+"_File";
        file_upload.style.width = "100%";
        file_upload.style.height = "100%";
        file_upload.setAttribute ('data',namefile);
        content_file.appendChild(file_upload);
        alert("New Template:  "+name_content);
        $(content_file).hide();
        }
        
    }
    var SPelement = document.getElementById("SSP_comm_all_files_name");

    function SPmyFunction(index,tot){
        
        var selected_T=index+"SPE";
        var filess=index+"SPEContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"SPEContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function SPopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SSP_comm_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= SPmyFunction(i,tot);              
          }

    }

    SPelement.onclick = SPopen_content;        
});

///////product info ////////////////////

$('#SPRO_comm').hide();
$('#SPI').on('click', function() {
    $('#Schat_comm').hide();
    $('#SRreturn').hide();
    $('#SShipment').hide();
    $('#SPayIssues').hide();
    $('#SWarranty').hide();
    $('#SSP_comm').hide();
    $('#SB2B_comm').hide();

    var x = document.getElementById("SPRO_comm");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/


    //button add
    var addbntPI=document.getElementById("SPRO_comm_add_content");

    addbntPI.onclick = addPI;//button add 
    function addPI(){
         //template title 
         var name_content= document.getElementById("SPRO_comm_content_name").value; // template name 

         //if no name is added print error 
         var check= document.getElementById("SPRO_comm_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
             var submitOK= document.getElementById("SPRO_comm_add_content");
             alert("No value Inserted");
             submitOK= false;
         }  else{
             var container =  document.getElementById("SPRO_comm_all_files_name"); // get all name titles 
 
             var elementi=container.children.length; //elmenti nuber of titels 
     
             var newDiv = document.createElement("li");
             newDiv.classList.add('boxM');
             
             newDiv.id =elementi+"PR";
             
             newDiv.setAttribute ('role','button');
             
             newDiv_text= document.createTextNode(name_content);
             newDiv.appendChild(newDiv_text);
             container.appendChild(newDiv);
     
             var content_file_container= document.getElementById("SPRO_comm_all_files_content"); //  get all files text
             var content_file= document.createElement("li");
             var file_id_name= newDiv.id+"Container";
             content_file.id = file_id_name;
             content_file.classList.add('boxMT');
     
             var btn_cancel = document.createElement("button");
             btn_cancel.id="x"+file_id_name;
             btn_cancel.style.width = "10px";
             btn_cancel.style.height = "10px";
             btn_cancel_text=document.createTextNode("cancel");
             
             content_file.appendChild(btn_cancel);
             
             content_file_container.appendChild(content_file);
     
             //getting the file name from choose from button
             var namefile= document.getElementById("SPRO_comm_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
     
             var file_upload="";
             var file_upload= document.getElementById(file_id_name);
     
             file_upload=document.createElement("object");
             file_upload.id=file_id_name+"_File";
             file_upload.style.width = "100%";
             file_upload.style.height = "100%";
             file_upload.setAttribute ('data',namefile);
             content_file.appendChild(file_upload);
             alert("New Template:  "+name_content);
             $(content_file).hide();
         }
    }

    var PRelement = document.getElementById("SPRO_comm_all_files_name");
    function PRmyFunction(index,tot){
    
        var selected_T=index+"PR";
        var filess=index+"PRContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"PRContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function PRopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
          };
        
        var links = $('#SPRO_comm_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {

            var link = links[i];  
            link.onclick= PRmyFunction(i,tot);              
          }

    }

    PRelement.onclick = PRopen_content;
    
});

/////////////////chat /////////////

$('#Schat_comm').hide();
$('#SCT').on('click', function() {
    $('#SRreturn').hide();
    $('#SShipment').hide();
    $('#SPayIssues').hide();
    $('#SWarranty').hide();
    $('#SSP_comm').hide();
    $('#SPRO_comm').hide();
    $('#SB2B_comm').hide();

    var x = document.getElementById("Schat_comm");
    if (x.style.display == "none") {
    x.style.display = "block";
     } /*else {
    x.style.display = "none";
    }*/


     //button add
    var addbntC=document.getElementById("Schat_comm_add_content");

    addbntC.onclick = addC;//button add 
    function addC(){
         //template title 
         var name_content= document.getElementById("Schat_comm_content_name").value; // template name 

         //if no name is added print error 
         var check= document.getElementById("Schat_comm_add_file").value;
        check=check.length;
        console.log("check");
        console.log(check);
        if(name_content==""||check==0){  
             var submitOK= document.getElementById("Schat_comm_add_content");
             alert("Missing: file or Template name");
             submitOK= false;
         }  else{
             var container =  document.getElementById("Schat_comm_all_files_name"); // get all name titles 
 
             var elementi=container.children.length; //elmenti nuber of titels 
     
             var newDiv = document.createElement("li");
             newDiv.classList.add('boxM');
             
             newDiv.id =elementi+"CH";
             
             newDiv.setAttribute ('role','button');
             
             newDiv_text= document.createTextNode(name_content);
             newDiv.appendChild(newDiv_text);
             container.appendChild(newDiv);
     
             var content_file_container= document.getElementById("Schat_comm_all_files_content"); //  get all files text
             var content_file= document.createElement("li");
             var file_id_name= newDiv.id+"Container";
             content_file.id = file_id_name;
             content_file.classList.add('boxMT');
     
             var btn_cancel = document.createElement("button");
             btn_cancel.id="x"+file_id_name;
             btn_cancel.style.width = "10px";
             btn_cancel.style.height = "10px";
             btn_cancel_text=document.createTextNode("cancel");
             
             content_file.appendChild(btn_cancel);
             
             content_file_container.appendChild(content_file);
     
             //getting the file name from choose from button
             var namefile= document.getElementById("Schat_comm_add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
     
             var file_upload="";
             var file_upload= document.getElementById(file_id_name);
     
             file_upload=document.createElement("object");
             file_upload.id=file_id_name+"_File";
             file_upload.style.width = "100%";
             file_upload.style.height = "100%";
             file_upload.setAttribute ('data',namefile);
             content_file.appendChild(file_upload);
             alert("New Template:  "+name_content);
             $(content_file).hide();
         }
    }
    var CHelement = document.getElementById("Schat_comm_all_files_name");

    function CHmyFunction(index,tot){
        
        var selected_T=index+"CH";
        var filess=index+"CHContainer";
    
        for (var i = 0; i < tot; i++) {

            var filess_hide=i+"CHContainer";
            var content_hide= document.getElementById(filess_hide);
            $(content_hide).hide();
        }

        var textIndex=document.getElementById(selected_T);
        var textShow=document.getElementById(filess);
        

        $(textIndex).on('click', function(){
            $(textShow).show(100);

       });

    }
    
    function CHopen_content(){

        var $ = function (selector) {
            return document.querySelector(selector);
        };
        
        var links = $('#Schat_comm_all_files_name').getElementsByTagName('li');

        var tot=links.length;
        for (var i = 0; i <tot ; i++) {
            var link = links[i];  
            link.onclick= CHmyFunction(i,tot);              
        }

    }

    CHelement.onclick = CHopen_content;
    
});



});

    



//element.children.length
 // <object id="B2C" data="warranty/B2C.txt" width="100%" height="100%"></object>
   // <div class="boxMT" id="SWarranty00"></div>

/*
var name_content= document.getElementById("content_name").value;
        var container =  document.getElementById("all_files_content");
        var newDiv = document.createElement("div");
        newDiv.classList.add('boxM');
        newDiv.id = name_content;
        newDiv.setAttribute ('role','button');
        newDiv_text= document.createTextNode(name_content);
        newDiv.appendChild(newDiv_text);
        container.appendChild(newDiv)
        
        var content_file_container= document.getElementById("add");
        var content_file= document.createElement("div");
        var file_id_name= name_content+"Container";

        
        content_file.id = file_id_name;
        content_file.classList.add('boxMT');
        content_file_container.appendChild(content_file);

       var namefile= document.getElementById("add_file").value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // REGEX =â€œwhitespace characterâ€.  allows to get only the file name and delete the fake path [1] is the first element of the array which is the file name.txt
       console.log(namefile);

       
        var file_upload= document.getElementById("file_id_name");
        file_upload=document.createElement("object");
        file_upload.id=file_id_name+"Odynammic website bject";
        file_upload.setAttribute ('data',namefile);
        content_file.appendChild(file_upload);
        
        $(content_file).hide();

        $(newDiv).on('click', function(){
            $(content_file).slideToggle(700);
        });


function addElement () { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }
  
  
  const name = event.target.files[0].name;
       const lastDot = name.lastIndexOf('.');
       const fileName = name.substring(0, lastDot);
       const ext = name.substring(lastDot + 1);
       */