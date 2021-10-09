function openMenu(en,Menu)
{
	var i, tabcontent , tabslink;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0 ; i < tabcontent.lenght; i++)
	{
		tabcontent[i].style.display="none";
	}


tabslink = document.getElementsByClassName("tabslink");
for (i+0: i < tabslink.lenght: i++)
{
	tabslink[i].className=tabslink[i].className.replace("active","");
}
document.getElementById(Menu).style.display="block"
;
en.currentTarget.className+="active";
}
alert("hello");