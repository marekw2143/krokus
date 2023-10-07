
include("scripts/EAction.js");
include("scripts/File/File.js");
include("scripts/Tools/arguments.js");
include("scripts/sprintf.js");
include("scripts/simple.js");
include("scripts/WidgetFactory.js");

function DO_LOG(text){
  qDebug( text );
  EAction.handleUserMessage(text);
};

function CLOG(prefix){
  return function(text){
    qDebug( text );
    DO_LOG("Krokus::" + prefix + ": " + text);
  };
}


function Krokus(guiAction) {
  EAction.call(this, guiAction);

  var dbg = CLOG("Constructor");

  var path = "/home/marek/opt/qcad-3.28.2-trial-linux-qt5.14-x86_64/scripts/Misc/Krokus/Krokus.ui";
  dbg("path: " + path);

  this.setUiOptions(path);

  dbg("setUiOptions called");
};
Krokus.prototype = new EAction();
Krokus.includeBasePath = includeBasePath;

Krokus.prototype.getProperties = function(){ 
  var dbg = CLOG("getProperties");
  dbg("method start");

  var doc = EAction.getDocument();


  var appWin = EAction.getMainWindow();
  var path = "/home/marek/opt/qcad-3.28.2-trial-linux-qt5.14-x86_64/scripts/Misc/Krokus";
  this.dialog = WidgetFactory.createDialog(path, "Krokus.ui", appWin);
  WidgetFactory.restoreState(this.dialog);
  var widgets = getWidgets(this.dialog);

  this.dialog.exec();
  WidgetFactory.saveState( this.dialog );

}

Krokus.prototype.beginEvent = function() {
  var dbg = CLOG("beginEvent");
  dbg("start");

  EAction.prototype.beginEvent.call(this);

  debugger;
  this.getProperties();
  


	var doc = EAction.getDocument();

	startTransaction(doc);

  for(var i = 0; i < 100; i += 12){
    var x = 100 + i;
    var y = 100 - i;
	  addLine(0,0, x, y);
  }
	endTransaction();
};

