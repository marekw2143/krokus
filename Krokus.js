include("scripts/EAction.js");
include("scripts/File/File.js");
include("scripts/Tools/arguments.js");
include("scripts/sprintf.js");
include("scripts/simple.js");
include("scripts/WidgetFactory.js");
include("scripts/File/File.js");
function DO_LOG(text){
  qDebug( text );
  EAction.handleUserMessage( text );
};

function CLOG(prefix){
  return function(text){
    DO_LOG("Krokus::" + prefix + ": " + text);
  };
}

Krokus.prototype = new EAction();
Krokus.includeBasePath = includeBasePath;

function Krokus(guiAction) {
  EAction.call(this, guiAction);
  this.setUiOptions("Krokus.ui");
  this.filesNumber = undefined;
};

Krokus.prototype.slotLiczbaPlikowChanged = function( v )
{
  CLOG("eventWrapper")("called with " + v);

  this.filesNumber = new Number(v);

  this.writeFiles( filesNumber );
};

Krokus.prototype.slotWykonajAkcje = function(v)
{
  var logger = CLOG("WykonajAkcje");

  logger("start");

  var di = EAction.getDocumentInterface();
  var name = "fajnyPlik1";
  var version = "";
  var fileName = di.getCorrectedFileName(name, version);
  di.exportFile(name, version);
};


Krokus.prototype.writeFiles(filesNumber) = function(filesNumber) {

}
Krokus.prototype.beginEvent = function() {
  var dbg = CLOG("beginEvent");
  dbg("start");

  // EAction.prototype.beginEvent.call(this);

  // debugger;
  // this.getProperties();
  


	// var doc = EAction.getDocument();

	// startTransaction(doc);

  // for(var i = 0; i < 100; i += 12){
  //   var x = 100 + i;
  //   var y = 100 - i;
	//   addLine(0,0, x, y);
  // }
	// endTransaction();
};

