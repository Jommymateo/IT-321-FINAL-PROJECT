// Clark Angelo Lim and Allan Adajar //

function myFunction(x) {
    var element = document.body;
    element.classList.toggle("dark-mode");
    x.classList.toggle("fa-toggle-on");
}
$("#load").hide();
$("button").click(function(e){
    
    $("#load").show();
    var ul = document.getElementById("list");
    var lis = ul.getElementsByTagName("li");
    while(lis.length > 0) {
        ul.removeChild(lis[0]);
    }
   
    
    var URL ="https://newsapi.org/v2/top-headlines?apiKey=fde7cdbf595e49e1a186d097fa687fee";
    var option1=document.getElementsByClassName("select1");
    var option2=document.getElementsByClassName("select2");
    var option3=document.getElementById("KeyWords");
    if(option1[0].value!="")
    {
        URL+="&country="+option1[0].value;
    }
    
    if(option2[0].value!="")
    {
        URL+="&category="+option2[0].value;
    }
    if(option3.value!="")
    {
        URL+="&q="+option3.value;
    }
    console.log(URL);
fetch(URL)
 .then(data => data.json())
 .then(async function(response) {
     console.log(response);
    var item=await response.articles;
    if(item.length>0)
    {
        for(x=0;x<item.length;x++)
        {
            var ul=document.getElementById("list");
            var li=document.createElement('li');
            var img=document.createElement('img');
            img.src=item[x].urlToImage;
            var h3=document.createElement("h3");
            h3.textContent=item[x].title;
            var h5=document.createElement("h5");
            h5.textContent=item[x].author;
            var h6=document.createElement("h6");
            h6.textContent="Published:"+item[x].publishedAt;
            var p=document.createElement("p");
            p.textContent=item[x].description;
            var button=document.createElement("button");
            var a=document.createElement("a");
            a.href=item[x].url;
            a.textContent="Go to page";
            button.append(a);
    
            li.append(img);
            li.append(h3);
            li.append(h5);
            li.append(h6);
            li.append(p);
            li.append(button);
            
            ul.append(li);
        }
    }
    else
    {
        $("#error").html("<div id='prob'>No Results.</div>");   
    }
    
 $("#load").hide();
 })
 .catch(error => {
    $("#load").hide();
    $("#error").html("<div id='prob'>There's a having problem, Kindly refresh the app. </div>");
 })
 
});
