AUI().add("ntnu_uploadForm_widget",function(a){a.namespace("NTNU");var b=a.Widget;a.NTNU.HtmlUploadFormWidget=function(c){a.NTNU.HtmlUploadFormWidget.superclass.constructor.apply(this,arguments)};a.NTNU.HtmlUploadFormWidget.NAME="HtmlUploadFormWidget";a.NTNU.HtmlUploadFormWidget.ATTRS={strings:{value:{LEGEND_TXT:'\u004c\u0061\u0073\u0074\u0020\u006f\u0070\u0070\u0020\u0066\u0069\u006c',LABEL_TXT:'\u0056\u0065\u006c\u0067\u0020\u0066\u0069\u006c\u003a',BUTTON_TXT:'\u004c\u0061\u0073\u0074\u0020\u006f\u0070\u0070\u0020\u0066\u0069\u006c'}},form:"",input:"",button:"",cssClass:"",formId:"",uploadHandler:function(){a.log("UploadHandler not set")}};a.extend(a.NTNU.HtmlUploadFormWidget,b,{str:a.NTNU.HtmlUploadFormWidget.ATTRS.strings.value,renderUI:function(){a.log("renderUI:");var f=this.get("contentBox");var d=this.get("boundingBox");if(this.get("cssClass").length===0){d.setStyles({position:"fixed",top:"0px",left:"0px",backgroundColor:"white",border:"1px solid #000000",zIndex:"1000",padding:"5px",margin:"5px",borderRadius:"4px"})}else{f.addClass(this.get("cssClass"))}var c=this.nodeFactory("<form></form>",{id:this.get("formId"),action:"#",method:"post",enctype:"multipart/form-data"});c.addClass(this.getClassName("form"));this.setAttrs({form:c});var j=this.nodeFactory("<legend></legend>");j.text(this.str.LEGEND_TXT);var k=this.nodeFactory("<fieldset></fieldset>");k.setStyles({marginBottom:"2px"});var h=this.nodeFactory("<label></label>");h.text(this.str.LABEL_TXT);var i=this.nodeFactory('<input type="file" name="channelIconFile" size="40"/>',{});i.addClass(this.getClassName("input"));var e=a.Node.create("<button></button>");e.addClass(this.getClassName("button"));e.text(this.str.BUTTON_TXT);e.on("submit",function(l){l.preventDefault();l.halt()});var g=this.get("uploadHandler");e.on("click",function(l){l.preventDefault();l.halt();g()});i.on("change",function(){g()});k.appendChild(j);k.appendChild(h);k.appendChild(i);c.appendChild(k);f.appendChild(c);f.appendChild(e)},bindUI:function(){var c=this.getAttrs(["strings","form"]);a.log(c)},syncUI:function(){},nodeFactory:function(c,f){var e=a.Node.create(c);var d=(f?f:{});e.setAttrs(d);return e}})},"3.1.1",{requires:["aui-node","widget"]});