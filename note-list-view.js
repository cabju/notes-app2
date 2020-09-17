class NoteListView {
  constructor() {
    this.notelist = new Notelist()
    this.notearray = this.notelist.arr
  }
  showlist(){
    var list = this.notearray.map(note => "<ul><li><div>" + note + "</div></li></ul>")
    return list
  }
}
