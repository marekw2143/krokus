
include("scripts/EAction.js");
include("scripts/File/File.js");
include("scripts/EAction.js");
include("scripts/Tools/arguments.js");
include("scripts/sprintf.js");
include("scripts/simple.js");
include("scripts/WidgetFactory.js");

function dbg(text){
  var toLog = "Krokus::" + text;
  qDebug( toLog );
};

function CLOG(prefix){
  return function(text){
    dbg(prefix + " " + text);
  }
}


function Krokus(guiAction) {
  EAction.call(this, guiAction);

  dbg("init called");
var path = "/home/marek/opt/qcad-3.28.2-trial-linux-qt5.14-x86_64/scripts/Misc/Krokus/Krokus.ui";
  this.setUiOptions(path);
  dbg("init setUiOptions called");
};
Krokus.prototype = new EAction();
Krokus.includeBasePath = includeBasePath;

Krokus.prototype = new EAction();
Krokus.prototype.getProperties = function(){ 
    var dbg = CLOG("getProperties");
    dbg("getProperties called");

    var doc = EAction.getDocument();
    var layerNames = doc.getLayerNames();

    var appWin = EAction.getMainWindow();

dbg("aa");
//    this.dialog = WidgetFactory.createDialog( Krokus.includeBasePath, "Krokus.ui", appWin);
dbg("bb");

 //   WidgetFactory.restoreState(this.dialog);
  //  var widgets = getWidgets(this.dialog);
   // this.dialog.exec();
//WidgetFactory.saveState( this.dialog);
}

Krokus.prototype.beginEvent = function() {
  qDebug("Krokus - entering beginEvent");

  EAction.prototype.beginEvent.call(this);
  this.getProperties();
  
  EAction.handleUserMessage("rysowanie linii!");


	// create a document:
	var doc = EAction.getDocument();

	// add something to the document:
	startTransaction(doc);

  for(var i = 0; i < 100; i += 12){
    var x = 100 + i;
    var y = 100 - i;
	  addLine(0,0, x, y);
  }
	endTransaction();
};

