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
};

Krokus.prototype.slotFileNamePatternChanged = function( v )
{
  CLOG("fileNameChanged")("set to: " + v);

  this.fileNamePattern = v;
}

Krokus.prototype.slotWykonajAkcje = function(v)
{
  var logger = CLOG("WykonajAkcje");

  logger("start");
  // debugger;
  var extension = "dxf";
  var version = "";
  var di = EAction.getDocumentInterface();

  for(var i=0; i < this.filesNumber; i++)
  {
    var name = this.fileNamePattern + i + "." + extension;

    var x = 100 + i;
    var y = 100 - i;
    addLine(0,0, x, y);

    var fileName = di.getCorrectedFileName(name, version);

    logger("File name: " + fileName);

    di.exportFile(fileName, version);
  }
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

