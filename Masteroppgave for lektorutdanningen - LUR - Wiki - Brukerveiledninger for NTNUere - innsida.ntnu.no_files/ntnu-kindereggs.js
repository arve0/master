AUI().add("ntnu-kindereggs",function(a){a.namespace("NTNU");a.NTNU.FortyTwo=function(d){a.NTNU.FortyTwo.superclass.constructor.apply(this,arguments)};var b=a.NTNU.FortyTwo,c=a.Widget;b.NAME="FortyTwo";b.ATTRS={inputListenElement:{value:"input.ntnu-autocomplete-query",setter:function(d){return a.one(d)}},currentEgg:{value:a.Node.create("<span></span>")}};b.JSON={eggs:[{key:"42",title:"DON'T PANIC",url:"http://en.m.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life.2C_the_Universe.2C_and_Everything_.2842.29",body:"You just figured out the answer to the Ultimate Question of Life, the Universe, and Everything",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Answer_to_Life.png/220px-Answer_to_Life.png",func:""},{key:"life the universe and everything",title:"DON'T PANIC",url:"http://en.m.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life.2C_the_Universe.2C_and_Everything_.2842.29",body:"You just asked Innsida the Ultimate Question of Life, the Universe, and Everything. The answer my friend, is 42.",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Answer_to_Life.png/220px-Answer_to_Life.png",func:""},{key:"73",title:"You just found the best number",url:"http://en.wikipedia.org/wiki/73_(number)",body:"73 is the 21st prime number. Its mirror, 37, is the 12th, and its mirror, 21, is the product of multiplying - hang on to your hats - seven and three. Heh? Heh? Did I lie?",image:"http://upload.wikimedia.org/wikipedia/en/2/2d/Sheldon_Cooper.jpg",func:""},{key:"flip",title:"",url:"",body:"",image:"",func:function(){a.one("body").setStyle("-webkit-transform","rotate(180deg)");function e(){a.one("body").setStyle("-webkit-transform","rotate(0deg)");clearInterval(d)}var d=setInterval(function(){e()},5000)}},{key:"kjernekar",title:"Du har funnet frem til NTNU's største kjernekar",url:"",body:'Dette er en tribute til Jostein Gunnes. Vår gode kollega og NTNU ansatt i 50år! Vi bøyer oss i støvet og saluterer hans innsats!<h2>kjernekar.equals("Jostein") == true</h2><p>Kjernen er NTNU`s integrasjonsmotor og datavarehus for sammenstilling av NTNU-data. Den består av flere logiske moduler som: Persondata, studiedata, organisasjonsdata og dataflyt.</p>',image:"https://sats.itea.ntnu.no/user-profile-service/rest/files/b6b85b9d-cd8f-36d6-a9d7-c798633669bf",func:""},{key:"Peter Principle",title:"Employees tend to rise to their level of incompetence.",url:"http://en.wikipedia.org/wiki/Peter_Principle",body:'The Peter Principle is a proposition that states that the members of an organization where promotion is based on achievement, success, and merit, will eventually be promoted beyond their level of ability. The principle is commonly phrased, "Employees tend to rise to their level of incompetence." In more formal parlance, the effect could be stated as: employees tend to be given more authority until they cannot continue to work competently. It was formulated by <a href="http://en.wikipedia.org/wiki/Laurence_J._Peter">Laurence J. Peter</a> and <a href="http://en.wikipedia.org/wiki/Raymond_Hull">Raymond Hull</a> in their 1969 book The Peter Principle, a humorous treatise, which also introduced the "salutary science of hierarchiology".',image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/peter-principle.jpg",func:""},{key:"mewmew",title:"",url:"",body:"",image:"",func:function(){a.one("#mainpagelink a").setStyle("background-image","url(/global-clientside-portlet/images/eastereggs/nyan.gif)")}},{key:"Evil overlord",title:'Mener du "rektoratets blogg" eller "IT-avdelingen"? ',url:"javascript:void(0);",body:'<ul><li><a href="http://www.ntnu.no/blogger/rektoratet">rektoratets blogg</a></li><li><a href="http://www.ntnu.no/adm/it">IT-avdelingen</a></li></ul><p>Overlord tips: Dress in bright and cheery colors, and so throw your enemies into confusion.</p>',image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/overlord.jpg",func:""},{key:"C8H10N4O2",title:"Kaffe! Finn den nærmeste kaffe og Cola.",url:"https://innsida.ntnu.no/kantine-og-butikk",body:'<a href="https://innsida.ntnu.no/kantine-og-butikk">Gå til Sit kantine og butikker</a>',image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/caffeine.png",func:""},{key:"Nødhjelp",title:"Viktige Telefonnummer",url:"https://innsida.ntnu.no/akutt-hjelp",body:"<h4>Brann = 110</h4><h4>Politi =  112</h4><h4>Sykehus = 113</h4>",image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/emergency-tel-nodhjelp.png",func:""},{key:"Emergency",title:"Viktige Telefonnummer",url:"https://innsida.ntnu.no/akutt-hjelp",body:"<h4>Fire = 110</h4><h4>Police =  112</h4><h4>Hospital = 113</h4>",image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/emergency-tel-nodhjelp.png",func:""},{key:"All your base",title:"All your base are belong to us",url:"http://en.wikipedia.org/wiki/All_your_base_are_belong_to_us",body:'<b>Mechanic</b>: Somebody set up us the bomb.<br/><b>Operator</b>: Main screen turn on.<br/><b>CATS</b>: All your base are belong to us.<br/><b>CATS</b>: You have no chance to survive make your time.<br/><b>Captain</b>: Move "ZIG".<br/><b>Captain</b>: For great justice.',image:"http://upload.wikimedia.org/wikipedia/en/0/03/Aybabtu.png",func:""},{key:"spoon",title:"Do not try and bend the spoon.",url:"http://en.wikipedia.org/wiki/The_Matrix",body:"That's impossible. Instead... only try to realize the truth.<p>There is no spoon.</p>",image:"http://"+window.location.host+"/global-clientside-portlet/images/eastereggs/spoon.jpg",func:""}]};b.TEMPLATES={searchItem:'<div class="resultItemsContainer"><div class="resultItem ntnu-search-result-easteregg"><h3 class="default-title"><a href="{url}">{title}</a></h3><p class="default-summary"><img alt="" width="100" style="float:right; margin-left:1em;" src="{image}"/>{body}</p><div class="clear"></div></div></div>'};a.extend(b,c,{bindUI:function(){this.get("inputListenElement").on("keyup",function(d){a.Array.each(b.JSON.eggs,function(e){if(e.key.toLowerCase()==a.Lang.trim(d.currentTarget.val()).toLowerCase()){if(e.title.length>0){this.set("currentEgg",a.Node.create(a.substitute(b.TEMPLATES.searchItem,e)))}this.set("currentFunc",e.func)}},this)},this);this.on("squeezeAnEgg",this.squeezeAnEgg,this)},squeezeAnEgg:function(){a.one(".resultItemsContainer").prepend(this.get("currentEgg"));if(typeof this.get("currentFunc")==="function"){this.get("currentFunc")()}this.set("currentEgg",a.Node.create("<span></span>"));this.set("currentFunc","")}})},"1.0",{requires:["aui-node"]});