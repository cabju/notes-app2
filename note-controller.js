//document.getElementById("app").innerHTML = "whats up?"
class NoteController {
  constructor() {
  this.notelistview = new NoteListView()
  this.notelistview.notelist.addNewNote("Favourite drink: seltzer")
  }
  shownote(){
    document.getElementById("app").innerHTML = this.notelistview.showlist()
  }
}
var notes=new NoteController();
notes.shownote()
