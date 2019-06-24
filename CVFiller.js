window.onload
{
    let url = new URLSearchParams(window.location.search);
    if(url.has("firstname"))
        document.getElementById("firstname").innerHTML = url.get("firstname");
    if(url.has("secondname"))
        document.getElementById("secondname").innerHTML = url.get("secondname");
    if(url.has("birth"))
        document.getElementById("birth").innerHTML = url.get("birth");
    if(url.has("age"))
        document.getElementById("age").innerHTML = url.get("age");
    if(url.has("photo"))
        document.getElementById("myPhoto").innerHTML = url.get("photo");
    if(url.has("phonenumber"))
        document.getElementById("phone").innerHTML = "📱Phone number:" + url.get("phonenumber");
    if(url.has("email"))
        document.getElementById("email").innerHTML = "📧email:" + url.get("email");
    if(url.has("twitter"))
    {
        let twitlink = url.get("twitter");
        let twitname = "";
        let i = twitlink.length - 1;
        while(twitlink[i] != '/')
        {
            twitname = twitlink[i] + twitname;
            i--;
        }
        document.getElementById("twitter").innerHTML = "Twitter:" + "<a target='_blank' href="+twitlink+ "> @" + twitname + "</a>";
    }
        let i = 0;
    while(url.has("hobby" + i))
    {
        let listitem = document.createElement("li");
        listitem.innerHTML = url.get("hobby" + i);
        document.getElementById("hobbylist").appendChild(listitem);
        i++;
    }
    i=0;
    while(url.has("skill" + i))
    {
        let listitem = document.createElement("li");
        listitem.innerHTML = url.get("skill" + i);
        document.getElementById("skillist").appendChild(listitem);
        i++;
    }
}