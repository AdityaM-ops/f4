program4/
 └─ src/
     ├─ App.js
     ├─ Student.js
     └─ index.js   

$npx create-react-app program4

app.js
import StudentList from "./Student";
export default () => <StudentList />;


STudent.js
import React, { useState } from "react";

const init = [
  { slno: 1, name: "stud1", usn: "rvce1", tmarks: 150 },
  { slno: 2, name: "stud2", usn: "rvce2", tmarks: 145 }
];

const Row = ({ s }) => (
  <tr><td>{s.slno}</td><td>{s.name}</td><td>{s.usn}</td><td>{s.tmarks}</td></tr>
);

const Table = ({ list }) => (
  <table border="1">
    <tr><th>Sl</th><th>Name</th><th>USN</th><th>Marks</th></tr>
    <tbody>{list.map(s => <Row key={s.slno} s={s} />)}</tbody>
  </table>
);

export default function StudentList() {
  const [list, setList] = useState(init);
  const [f, setF] = useState({ name: "", usn: "", tmarks: "" });

  return (
    <>
      <Table list={list} />
      <input placeholder="Name" value={f.name}
        onChange={e => setF({ ...f, name: e.target.value })} />
      <input placeholder="USN" value={f.usn}
        onChange={e => setF({ ...f, usn: e.target.value })} />
      <input placeholder="Marks" value={f.tmarks}
        onChange={e => setF({ ...f, tmarks: e.target.value })} />
      <button onClick={() => {
        setList([...list, { slno: list.length + 1, ...f }]);
        setF({ name: "", usn: "", tmarks: "" });
      }}>Add</button>
    </>
  );
}

npm start



