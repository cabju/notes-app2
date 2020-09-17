function showlist() {
  let note = new NoteListView();
  note.notelist.addNewNote("Hello world")
  assert.isTrue(note.showlist()[0]=== "<ul><li><div>Hello world</div></li></ul>")
}

showlist()
