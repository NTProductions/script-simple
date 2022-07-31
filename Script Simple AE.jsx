var window = new Window("palette", "Script Simple", undefined);
window.orientation = "column";

var texte = window.add("statictext", undefined, "Texte dans mon script");

var dropdown = window.add("dropdownlist", undefined, trouverTrucs());
dropdown.size = [120, 25];
dropdown.selection = 0;

var bouton = window.add("button", undefined, "Vas-y");

window.center();
window.show();

bouton.onClick = function() {
    creerComposition(dropdown.selection.toString());
    }

function trouverTrucs() {
        var noms = [];
        
        for(var i = 1; i <= app.project.numItems; i++) {
            noms.push(app.project.item(i).name);
            }
        
        return noms;
    }

function creerComposition(nom) {
    var item;
    for(var i = 1; i <= app.project.numItems; i++) {
        if(app.project.item(i).name == nom) {
            item = app.project.item(i);
            }
            }
    
    var comp = app.project.items.addComp(item.name, item.width, item.height, item.pixelAspect, item.duration, item.frameRate);
    var calque = comp.layers.add(item);
    comp.openInViewer();
    }