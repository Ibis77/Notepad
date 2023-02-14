import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function Note({text, deleteNote, id}) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{justifyContent:
      "flex-end"}}>
        <DeleteForeverIcon
          className='note__delete'
          onClick={()=>deleteNote(id)}
        ></DeleteForeverIcon>
      </div>
    </div>
  );
}

export default Note;
