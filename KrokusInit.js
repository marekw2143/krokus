function init(basePath) {
    var action = new RGuiAction(qsTr("&Nowa fajna akcja"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile( basePath + "/Krokus.js");
    action.setGroupSortOrder(100000);
    action.setSortOrder(0);
//    action.setNoState();
    action.setWidgetNames(["FileMenu", "!FileToolBar", "FileToolsPanel", "FileMatrixPanel"]);
    qDebug("Krokus init called");
};
