class Notelist {
constructor() {
this.arr = []
}
addNewNote(text) {
return this.arr.push(new Note(text).text)
}
}
