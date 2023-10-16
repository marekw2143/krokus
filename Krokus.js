include("scripts/EAction.js");
include("scripts/File/File.js");
include("scripts/Tools/arguments.js");
include("scripts/sprintf.js");
include("scripts/simple.js");
include("scripts/WidgetFactory.js");
include("scripts/File/File.js");



function CLOG(prefix)
{
    function DO_LOG(text)
    {
        qDebug( text );
        EAction.handleUserMessage( text );
    };
  
    return function(text)
    {
        DO_LOG("Krokus::" + prefix + ": " + text);
    };
}

Krokus.prototype = new EAction();
Krokus.includeBasePath = includeBasePath;

function Krokus(guiAction) 
{
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
    var version = "2010";
    var di = EAction.getDocumentInterface();

    for(var currentFileNumber = 1; currentFileNumber <= this.filesNumber; currentFileNumber++)
    {
        var name = this.fileNamePattern + "_" + currentFileNumber + "." + extension;

        var fileName = di.getCorrectedFileName(name, version);

        var doc = createOffScreenDocument();
    
        this.draw(doc, currentFileNumber);

        // export the document to a DXF file:
        var newFileDi = new RDocumentInterface(doc);

        logger("saving file: " + fileName);
        newFileDi.exportFile(fileName);
    }
};

Krokus.prototype.draw = function(doc, fileNumber)
{
    var logger = CLOG("Draw");

    logger("start, file number: " + fileNumber);

    startTransaction(doc);

    this.doDraw( fileNumber );

    endTransaction();
};

Krokus.prototype.doDraw = function( drawingNumber )
{
    var x = 100 + drawingNumber;
    var y = 100 - drawingNumber;

    addLine(drawingNumber,drawingNumber, x, y);
}

Krokus.prototype.beginEvent = function() 
{
    var logger = CLOG("beginEvent");

    logger("wywołano");
};

