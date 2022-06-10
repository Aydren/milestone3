import NavBar from "./navBar";

function Edit() {
    fetch('finTrack/statements/:id/edit')
  return (
    <div className="App">
      <NavBar />
      <p>you are in edit.js</p>
    </div>
  );
}

export default Edit;
