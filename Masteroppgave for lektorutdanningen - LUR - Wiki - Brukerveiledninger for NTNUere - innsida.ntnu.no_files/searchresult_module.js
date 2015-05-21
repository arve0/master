AUI().add("ntnu-search-result",function(a){a.namespace("NTNU");a.NTNU.SearchResult=function(h,c,e){var i=new a.NTNU.ObjectUtil(),g=a.one("."+c),f;var q={searchTypeListClass:"ul.searchTypes",searchLangListClass:"ul.searchLanguages"};var k=a.NTNU.SearchContextMenu(q,e);var n=new a.NTNU.SearchResultFormatter();(function p(){var r=a.one(".ntnu-search-result-area");if(r){r.append(a.Node.create('<div id="searchResultFormatter"></div>'));n.render("#searchResultFormatter");b()}})();function b(){var r=a.one(".ntnu-autocomplete-query");if(r){try{r.focus()}catch(s){a.log(s)}}}a.on("ntnu:search:fetchmore",o);function o(t){var u=parseInt(t.numberOfPages);var s=parseInt(t.pageNo);var r=s+parseInt(t.increment);if(r>u){r=u}else{if(r<1){r=1}}e.changePageNo(r);l(e.buildQueryData(),true)}function d(){l(e.buildQueryData(),true)}var j=a.one(".ntnu-search-results");if(j){j.delegate("click",function(s){var r=s.currentTarget;r.next(".search-result-body-text").toggle()},"a.search-result-body-heading");j.delegate("click",function(v){v.preventDefault();var u=v.currentTarget;var t=u.getAttribute("data-entry-id");var s=m(t);var r=new UrlNavigator({url:s});r.go()},"a[data-entry-id]");j.delegate("mouseover",function(v){var u=v.currentTarget;var t=u.getAttribute("data-entry-id");var s=m(t);var r=new UrlNavigator({url:s});u.setAttribute("href",r.buildUrl())},"a[data-entry-id]")}function m(r){var t=a.one(".activeRole[data-item-name]");var s="";if(t){var u="/hvaskjer?p_p_id=readadvancedportlet_WAR_messageserviceportlets&messageId=";s=t.getAttribute("href")}else{throw new Error("Could not find the active role for user")}return s+u+r}a.on("ntnu:search-context:searchtype:changed",d);a.on("ntnu:search-context:searchlanguage:changed",d);a.on("ntnu:search-context:searchconfig:loaded",d);if(Modernizr&&Modernizr.history){window.onpopstate=function(s){if(s.state&&s.state.pageNo){a.log("location: "+document.location+", state: "+JSON.stringify(s.state));var r=s.state;r.supressHistory=true;l(r)}}}function l(s,r){if(g){if("string"==typeof s){a.fire("ntnu:search-context:querybuild",s)}if(Modernizr&&Modernizr.history){if(!s.supressHistory&&s.pageNo&&s.pageNo!=undefined){history.pushState(s,"ntnu - searchpage "+s.pageNo,"?page"+s.pageNo)}}var t=g.getAttribute("data-resourcejsonurl");var u=a.io.request(t,{method:"POST",autoLoad:false,data:s,on:{success:function(){var v=a.JSON.parse(this.get("responseData"));n.addResultJson(v)},failure:function(){a.log("failure i nytt request")}}});u.start()}}a.on("ntnu:dosearch",l)};a.NTNU.SearchContextMenu=function(h,b){var e=new a.NTNU.ObjectUtil();var c=e.validateLiteral(h,["searchTypeListClass","searchLangListClass"]);var l=b;j("web");m(l.getSelectedSearchLanguages());function k(p){var o=p.currentTarget;var n=o.one("a").getAttribute("data-searchType");l.changePageNo(1);l.setSearchType(n);a.fire("ntnu:searchContextMenu:change")}function d(p){var o=p.currentTarget;var n=o.one("a").getAttribute("data-search-language");o.toggleClass("lang-off");l.changePageNo(1);l.changeSearchLanguage(n);a.fire("ntnu:searchContextMenu:change")}function m(p){var n=a.all(".searchLanguages li");n.addClass("lang-off");for(var o=0;o<p.length;o++){var q=p[o];var r=a.one("a[data-search-language="+p[o]+"]");if(r){r.ancestor("li").removeClass("lang-off")}}}function f(n){e.validateLiteral(n,["searchType","selectedLangs"]);j(n.searchType);m(n.selectedLangs)}function j(n){try{var q=a.one(c.searchTypeListClass);if(q){q.all("li").removeClass("type-on");var o=q.one("a[data-searchtype="+n+"]");if(o){o.ancestor("li").addClass("type-on")}}}catch(p){a.log(p);return}}a.on("ntnu:search-context:searchtype:changed",j);a.on("ntnu:search-context:searchconfig:loaded",f);var g=a.one(c.searchTypeListClass);var i=a.one(c.searchLangListClass);if(i&&g){g.delegate("click",k,"li");i.delegate("click",d,"li")}};a.NTNU.SearchContextIndicatorToolbar=function(i){var h=new a.NTNU.ObjectUtil();var d=h.validateLiteral(i,["homeNode"]);var b={web:'\u0049\u006e\u006e\u0068\u006f\u006c\u0064',all:'\u0049\u006e\u006e\u0073\u0069\u0064\u0061\u0020\u0028\u0061\u006c\u0074\u0029',person:'\u0050\u0065\u0072\u0073\u006f\u006e\u0065\u0072',message:'\u004d\u0065\u006c\u0064\u0069\u006e\u0067\u0065\u0072',course:'\u0045\u006d\u006e\u0065\u0072',studyprogramme:'\u0053\u0074\u0075\u0064\u0069\u0065\u0070\u0072\u006f\u0067\u0072\u0061\u006d',organization:'\u0045\u006e\u0068\u0065\u0074\u0065\u0072',pretext:'\u0053\u00f8\u006b\u0020\u0069\u003a'};var k=d.homeNode.length?a.one("#"+d.homeNode):d.homeNode;var f=d.hasOwnProperty("cssClass")?d.cssClass:"contextIndicator";var g=a.one(".ntnu-autocomplete-query");k.appendChild(a.Node.create('<div class="'+f+'"><span>'+b.pretext+'</span><span class="searchTypePart">'+b.web+"</span></div>"));a.on("ntnu:search-context:searchtype:changed",c);a.on("ntnu:search-context:searchconfig:loaded",e);function j(m,l){if(!l){l="part"}return a.Node.create('<span class="'+l+'"></span>').text(m)}function e(l){h.validateLiteral(l,["searchType"]);c(l.searchType)}function c(l){var p=a.Node.create('<div class="'+f+'"></div>');var n=j(b.pretext);var m=b[l].length?b[l]:b.web;var o=j(m,"searchTypePart");p.appendChild(n);p.appendChild(o);k.empty();k.appendChild(p)}}},"3.1.1",{requires:["aui-io","aui-node","ntnu-object-util","ntnu-searchResultFormatter"]});AUI().add("ntnu-searchResultFormatter",function(a){a.namespace("NTNU");a.NTNU.SearchResultFormatter=function(d){a.NTNU.SearchResultFormatter.superclass.constructor.apply(this,arguments)};var b=a.NTNU.SearchResultFormatter,c=a.Widget;b.NAME="SearchResultFormatter";b.ATTRS={jsonResult:{value:{}},locale:{value:"nb_NO"},pageInfo:{value:{pageNo:0,numberOfPages:0,increment:1}},defaultProfileImg:{value:"/image/user_male_portrait?img_id=0"},nodeManagerConfig:{value:{descendants:"h3 a",keys:{next:"down:40",previous:"down:38"},focusClass:{className:"seachHighlightResult",fn:function(f){try{f.on("key",function(g){a.fire(b.NAME+"searchfocus")},"down:27");var d=f.ancestor("h3");return d.ancestor("div.resultItem")}catch(e){a.log("Feil i focusconfig"+e)}}},circular:false}},searchInput:{value:a.one(".ntnu-autocomplete-query")},itemCount:{value:0,setter:function(d){return parseInt(d)}},focusManager:{value:""},kinderEgg:{value:""}};b.LANG={NORSK:'\u004e\u006f\u0072\u0073\u006b',ENGELSK:'\u0045\u006e\u0067\u0065\u006c\u0073\u006b',phone:'\u0054\u0065\u006c\u0065\u0066\u006f\u006e',moreText:'\u006d\u0065\u0072',language:'\u0055\u006e\u0064\u0065\u0072\u0076\u0069\u0073\u006e\u0069\u006e\u0067\u0073\u0073\u0070\u0072\u00e5\u006b\u003a',courseCredit:'\u0053\u0074\u0075\u0064\u0069\u0065\u0070\u006f\u0065\u006e\u0067\u003a',total:'\u0054\u006f\u0074\u0061\u006c\u0074',hits:'\u0074\u0072\u0065\u0066\u0066',teacher:'\u0046\u0061\u0067\u006c\u00e6\u0072\u0065\u0072\u0028\u0065\u0029',orgPhone:'\u0054\u0065\u006c',orgEmail:'\u0045\u002d\u0070\u006f\u0073\u0074',orgAddress:'\u0042\u0065\u0073\u00f8\u006b\u0073\u0061\u0064\u0072\u0065\u0073\u0073\u0065'};b.TEMPLATES={"default":'<div class="resultItem ntnu-search-result-content {type}"><h3 class="default-title"><a href="{url}">{title}</a></h3><p class="default-summary">{body}<span class="source-url"><a href="{url}" title="{url}">{url}</a></span></p>',course:'<div class="resultItem ntnu-search-result-course {type}"><h3 class="default-title"><a href="{url}">{courseCode} - {title}</a></h3><span class="study-credits-languages">{additionalCourseData}</span><span class="course-teachers">{persons}</span><span class="default-summary"><a class="orgUrlLink" href="{orgUrl}">{orgName}</a></span><span class="courseDescription">{teaser}</span>',studyprog:'<div class="resultItem ntnu-search-result-studyprogramme {type}"><h3 class="default-title"><a href="{url}">{title}<span class="studyLevel">({studyLevel})</span></a></h3><span class="study-code-orgname">{studyProgCode} - <a class="orgUrlLink" href="{orgUrl}">{orgName}</a></span></span><span class="studyprogrammeDescription">{teaser}</span>',employee:'<div class="resultItem ntnu-search-result-employee {type}" data-entry-id="{id}"><span class="profile-image"><img src="{pictureUrl}" alt="{title}" title="{title}"/></span><img class="big-profile-image aui-helper-hidden" src="{pictureUrl}" alt="{title}" title="{title}"/><h3 class="employee-name"><a href="{personUrl}">{lastName},&nbsp;{firstName}</a></h3><span class="roleTitle">{roleTitle}</span><span class="employee-details">{cellPhone}{phone}{email}<a class="search_org_name" href="{orgUrl}" title="org">{orgName}</a></span><span class="clear"></span></div>',message:'<div class="resultItem ntnu-search-result-message {type}"><h3 class="default-title"><a href="javascript:void(0);"  data-entry-url="{url}" data-entry-id="{id}" data-channelname="{channelName}">{title}</a></h3><p class="default-summary">{body}<span class="searchResultDetails">{publicationDate}, {channelName}, {author}</span></p></div>',organization:'<div class="resultItem ntnu-search-result-organization {type}">  <h3 class="default-title">{parsedOrgTitle}</h3>  <p class="default-summary">    {orgPhone}: {phone} {orgEmail}: {email} <br/>    {orgAddress}: {address}    {parsedOrgLink} </p></div>',orgTitle:'<a href="{url}">{name}</a>',orgLink:'<span class="source-url"><a href="{url}" title="{url}">{url}</a></span>',phone:'<span class="phone">{phone}</span>',roleTitle:'<span class="employee-position">{roleTitle}</span>',email:'<a class="searchEmail" href="mailto:{email}">{email}</a>',courseInfo:'<span class="courseLanguages">{courseLanguages}</span> <span class="courseCredit">{courseCredit}</span>',morebutton:'<a class="searchResultMoreBtn btn btn-a aui-helper-hidden" data-pageNo="0" data-numberOfPages="0" href="javascript:void(0);">{text}</a>'};a.extend(b,c,{renderUI:function(){var f=this.get("contentBox"),e=this.get("locale");f.append(a.Node.create('<div class="resultItemsContainer"></div>'));f.append(a.substitute(b.TEMPLATES.morebutton,{text:b.LANG.moreText}));this.set("moreButton",this.get("contentBox").one(".searchResultMoreBtn"));var d=this.get("nodeManagerConfig");var g=a.one(".ntnu-search-result-area");g.plug(a.Plugin.NodeFocusManager,d);this.set("focusManager",g.focusManager);this.set("kinderEgg",new a.NTNU.FortyTwo({}));this.get("kinderEgg").render()},bindUI:function(){this.on("jsonResultChange",function(e){var d=this.get("contentBox").one(".resultItemsContainer");a.Array.each(e.newVal,function(f){if(f.type=="PERSON"){d.append(a.Node.create(a.substitute(b.TEMPLATES.employee,f,a.bind(this.handlePerson,this))))}else{if(f.type=="MESSAGE"){d.append(a.Node.create(a.substitute(b.TEMPLATES.message,f)))}else{if(f.type=="COURSE"){d.append(a.Node.create(a.substitute(b.TEMPLATES.course,f,a.bind(this.handleCourse,this))))}else{if(f.type=="STUDYPROG"){d.append(a.Node.create(a.substitute(b.TEMPLATES.studyprog,f)))}else{if(f.type=="ORGANIZATION"){if(f.hasOwnProperty("url")&&f.url!=null&&f.url.length>0){f.parsedOrgTitle=a.substitute(b.TEMPLATES.orgTitle,f);f.parsedOrgLink=a.substitute(b.TEMPLATES.orgLink,f)}else{f.parsedOrgTitle=f.name;f.parsedOrgLink=""}if(f.address==null){f.address=""}if(f.phone==null){f.phone=""}var g=a.substitute(b.TEMPLATES.organization,f);g=a.substitute(g,b.LANG);d.append(a.Node.create(g))}else{d.append(a.Node.create(a.substitute(b.TEMPLATES["default"],f)))}}}}}},this);this.ellipseStrings();this.tidyUpIfNullValue(".search_org_name","href");this.addImageViewer();if(this.get("searchInput")!=null&&!this.get("searchInput").hasClass("focus")){a.log("FocusManager searchinput and has not focus");this.get("focusManager").refresh();this.get("focusManager").focus(this.get("itemCount"))}},this);this.on("pageInfoChange",this.updateMoreButton,this);a.on("ntnu:searchContextMenu:change",this.resetItemCount,this);this.get("contentBox").delegate("click",this.getMoreResults,".searchResultMoreBtn",this);this.on("itemCountChange",function(d){a.log("ItemCountChange: "+d.newVal)});a.on(b.NAME+"searchfocus",a.bind(this.focusOnSearchInput,this));a.on("ntnu:tabToSearch",function(){a.log("ntnu:tabToSearch");try{this.get("focusManager").refresh();this.get("focusManager").focus(0)}catch(d){a.log(d)}},this)},syncUI:function(){},destructor:function(){},resetItemCount:function(){this.set("itemCount",0)},handlePerson:function(e,f){var d=this.get("defaultProfileImg");if(e=="pictureUrl"&&f==null){return d}if((e=="phone"||e=="cellPhone")&&f!=null){return a.substitute(b.TEMPLATES.phone,{phone:b.LANG.phone+": "+f})}else{if((e=="phone"||e=="cellPhone")&&f==null){return""}}if(e=="roleTitle"&&f!=null){return a.substitute(b.TEMPLATES.roleTitle,{roleTitle:f})}else{if(e=="roleTitle"&&f==null){return""}}if(e=="email"&&f!=null){return a.substitute(b.TEMPLATES.email,{email:f})}else{if(e=="email"&&f==null){return""}}if(e=="title"&&f!=null){f=f.replace("<b>","");f=f.replace("</b>","")}return f},handleCourse:function(e,f){if(e==="additionalCourseData"){var d=b.LANG.courseCredit+f.courseCredit;var h="";if(f.courseLanguages.length>0){var g=[];a.Array.forEach(f.courseLanguages,function(i){g.push(b.LANG[i])});if(f.courseLanguages.length==1){h=b.LANG.language+" "+g.join(" ")+" "}else{h=b.LANG.language+" "+g.join(", ")+" "}return a.substitute(b.TEMPLATES.courseInfo,{courseLanguages:h,courseCredit:d})}else{return a.substitute(b.TEMPLATES.courseInfo,{courseLanguages:"",courseCredit:d})}}else{if(e==="persons"){if(f&&f!=null){return b.LANG.teacher+": "+f.join(", ")}else{return""}}}return f},addImageViewer:function(){var e=this;var d=function(g){var j=g.host;if(j.one(".profile-image img").getAttribute("src")!=e.get("defaultProfileImg")){var i=a.Node.create('<div class="toolTipImageFrame"></div>');var h=j.one("img.big-profile-image");if(h){h.show();i.appendChild(h);var f=new a.Tooltip({trigger:j.one(".profile-image img"),align:{points:["rc","lc"]},bodyContent:i});f.render()}}};d.NS="pictureView";this.get("contentBox").all(".ntnu-search-result-employee").plug(d)},ellipseStrings:function(){var d=this.get("contentBox").one(".ntnu-search-result-content");if(d){var e=d.getComputedStyle("width");this.get("contentBox").all(".source-url a").setStyles({whiteSpace:"nowrap",overflowX:"hidden",display:"block",width:e,textOverflow:"ellipsis"})}},tidyUpIfNullValue:function(d,e){this.get("contentBox").all(d).each(function(f){if(f.hasAttribute(e)&&f.getAttribute(e)=="null"&&a.Lang.trim(f.text())=="null"){f.remove()}else{if(f.hasAttribute(e)&&f.getAttribute(e)=="null"){f.replace(a.Node.create('<span class="search_org_name">'+a.Lang.trim(f.text())+"</span>"))}}})},updateMoreButton:function(d){this.get("moreButton").setAttribute("data-pageNo",d.newVal.pageNo);this.get("moreButton").setAttribute("data-numberOfPages",d.newVal.numberOfPages);if(d.newVal.pageNo<d.newVal.numberOfPages){this.get("moreButton").show()}else{this.get("moreButton").hide()}},hideMoreButton:function(d){if(d==0){this.get("moreButton").hide()}},getMoreResults:function(){var d=this.get("contentBox").all(".resultItem").size();this.set("itemCount",d);a.fire("ntnu:search:fetchmore",this.get("pageInfo"))},flushResultArea:function(d){if(d==1){this.get("contentBox").one(".resultItemsContainer").empty()}},addResultJson:function(d){this.flushResultArea(parseInt(d.objects.pageNo));this.get("kinderEgg").fire("squeezeAnEgg");this.hideMoreButton(d.objects.results.searchResults.length);if(d.objects.results.searchResults&&d.objects.results.searchResults.length>0){this.set("jsonResult",d.objects.results.searchResults);this.set("locale",(d.objects.results.searchResults[0].locale));var e={pageNo:d.objects.pageNo,numberOfPages:d.objects.numberOfPages,increment:1};this.set("pageInfo",e);this.updateResultMeta(d.objects.results.noHitsTotal)}else{this.updateResultMeta(0)}},updateResultMeta:function(d){if(!a.one(".totalSearchHits")){a.one(".contextIndicator").append(a.Node.create('<span class="totalSearchHits"></span>'))}a.one(".totalSearchHits").text(b.LANG.total+": "+d+" "+b.LANG.hits)},focusOnSearchInput:function(){var d=a.one(".ntnu-autocomplete-query");if(d){try{d.focus()}catch(e){a.log(e)}}}})},"3.1.1",{requires:["ntnu-object-util","aui-node","widget","substitute","aui-tooltip","node-focusmanager"]});