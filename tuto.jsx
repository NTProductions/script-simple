var fenetre = new Window("palette", "Le Nom De Script", undefined);
fenetre.orientation = "column";

var t = fenetre.add("statictext", undefined, "Ca c'est mon text");

var dropdownlist = fenetre.add("dropdownlist", undefined, trouverTrucs());
dropdownlist.size = [120, 25];
dropdownlist.selection = 0;

var bouton = fenetre.add("button", undefined, "Vas-y");


fenetre.center();
fenetre.show();

bouton.onClick = function() {
    // trouver la video ce qu'on veut
    var trucAImporter;
    for(var i = 1; i <= app.project.numItems; i++) {
        if(app.project.item(i).name == dropdownlist.selection.toString()) {
            trucAImporter = app.project.item(i);
        }
    }

    // creer un composition avec le
    var composition = app.project.items.addComp(trucAImporter.name, trucAImporter.width, trucAImporter.height, trucAImporter.pixelAspect, trucAImporter.duration, trucAImporter.frameRate);

    composition.layers.add(trucAImporter);
    composition.openInViewer();
}

function trouverTrucs() {
    var proj = app.project;
    var a = [];

    for(var i = 1; i <= proj.numItems; i++) {
        a.push(proj.item(i).name);
    }

    return a;
}