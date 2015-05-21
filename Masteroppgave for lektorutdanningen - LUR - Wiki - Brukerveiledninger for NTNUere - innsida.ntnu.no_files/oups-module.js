AUI().add("ntnu-oups-module",function(a){a.namespace("NTNU");a.NTNU.OupsWidget=function(d){a.NTNU.OupsWidget.superclass.constructor.apply(this,arguments)};var b=a.NTNU.OupsWidget,c=a.Widget;b.TEMPLATES={wrapper:'<div class="oupsBox" role="alertdialog" aria-hidden="true"></div>',content:'<div class="content"><div class="headingWrap"></div><h2 class="heading"></h2><p role="alert" class="adviceMessage"></p><p role="alert" class="actionMessage"></p></div>',buttonRow:'<div class="buttonRow"><a role="button" href="javascript:void(0);" class="close btn btn-a">close</a><div class="clear"></div></div>'};b.DEFAULT_ACTIONBTN='<a href="javascript:void(0);" class="sendError" title="Send error" role="button">'+'\u0053\u0065\u006e\u0064\u0020\u006d\u0065\u006c\u0064\u0069\u006e\u0067\u0020\u0074\u0069\u006c\u0020\u006f\u0072\u0061\u006b\u0065\u006c'+"</a>";b.DEFAULT_ACTION='\u0064\u0065\u0072\u0073\u006f\u006d\u0020\u0064\u0075\u0020\u0066\u00e5\u0072\u0020\u0066\u0065\u0069\u006c\u0065\u006e\u0020\u0066\u006c\u0065\u0072\u0065\u0020\u0067\u0061\u006e\u0067\u0065\u0072\u0020\u0070\u00e5\u0020\u0072\u0061\u0064\u002e';b.NAME="OupsWidget";b.ATTRS={alertObject:{value:""},mailtoUrl:{value:""}};a.extend(b,c,{renderUI:function(){var d=a.Node.create(b.TEMPLATES.wrapper);d.append(a.Node.create(b.TEMPLATES.content));d.append(a.Node.create(b.TEMPLATES.buttonRow));this.get("contentBox").append(d);a.one("body").append('<div class="oupsAlertModal"></div>')},bindUI:function(){try{this.get("contentBox").delegate("click",this.closeAlert,".close",this);a.one("body").on("key",this.closeAlert,"down:27",this);a.on("ntnu-alert",this.alert,this);this.get("contentBox").delegate("click",this.sendErrorToServer,".sendError",this)}catch(d){a.log(d)}},syncUI:function(){},reloadPage:function(){window.location.reload()},displayAlertOups:function(){this.get("contentBox").one(".oupsBox").addClass("alert");this.get("contentBox").one(".oupsBox").setAttribute("aria-hidden","false");var i=this.get("contentBox").get("viewportRegion");var j=i.width/2;var h=i.height/3;var e=this.get("contentBox").one(".oupsBox").get("region");var g=e.width/2;var f=e.height/2;var d=j-g;var k=h-f;if(h<e.height){k=0}this.get("contentBox").one(".oupsBox").setStyles({top:k+"px",left:d+"px"});a.one("body").one(".oupsAlertModal").addClass("showModal")},closeAlert:function(d){d.stopPropagation();this.get("contentBox").one(".oupsBox").removeClass("alert");this.get("contentBox").one(".oupsBox").setAttribute("aria-hidden","true");this.get("contentBox").one(".oupsBox").setStyle("left","-3000%");a.one("body").one(".oupsAlertModal").removeClass("showModal");this.get("contentBox").one(".heading").text("");this.get("contentBox").one(".actionMessage").text("");this.get("contentBox").one(".adviceMessage").text("")},alert:function(f){this.set("alertObject",f);var g=f.alertLevel?f.alertLevel:"error";var h=f.heading?f.heading:"Heading empty";var e=f.adviceMessage?f.adviceMessage:"Message empty";var d=f.actionMessage?f.actionMessage:b.DEFAULT_ACTIONBTN+" "+b.DEFAULT_ACTION;this.get("contentBox").one(".oupsBox").addClass(g);if(f.actionMessage){this.get("contentBox").one(".actionMessage").text(d)}else{this.get("contentBox").one(".actionMessage").append(a.Node.create("<span>"+d+"</span>"))}this.get("contentBox").one(".heading").text(h);this.get("contentBox").one(".adviceMessage").html(e);this.displayAlertOups()},sendErrorToServer:function(){var d={UA:a.UA,fullname:Liferay.ThemeDisplay.getUserName(),adviceMessage:this.get("alertObject").adviceMessage?this.get("alertObject").adviceMessage:"Message empty",heading:this.get("alertObject").heading?this.get("alertObject").heading:"Heading empty",alertLevel:this.get("alertObject").alertLevel?this.get("alertObject").alertLevel:"error",errorUrl:window.location.href};a.log(JSON.stringify(d));var e=this.get("contentBox");a.io.request(this.get("mailtoUrl"),{cache:false,data:d,method:"POST",dataType:"json",on:{success:function(f){if(this.get("responseData").status==="ok"){e.one(".actionMessage").text('\u004d\u0065\u006c\u0069\u0064\u006e\u0067\u0065\u006e\u0020\u0065\u0072\u0020\u0073\u0065\u006e\u0064\u0074\u002e\u0020\u0054\u0061\u006b\u006b\u0020\u0066\u006f\u0072\u0020\u0074\u0069\u006c\u0062\u0061\u006b\u0065\u006d\u0065\u006c\u0064\u0069\u006e\u0067\u0065\u006e');e.one(".adviceMessage").text("")}},failure:function(){e.one(".actionMessage").text("Har du sett! Melding om feil feilet. Pinlig!")}}})}})},"1.0.0",{requires:["aui-node","widget","aui-io"]});AUI().on("domready",function(a){AUI().use("ntnu-oups-module",function(c){if(c.one("[data-mailto-service]")&&c.one("[data-mailto-service]").getAttribute("data-mailto-service")){var b=new c.NTNU.OupsWidget({mailtoUrl:c.one("[data-mailto-service]").getAttribute("data-mailto-service")});b.render()}})});