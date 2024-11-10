import { useState } from "react";
// import NfidLogin from "./components/NfidLogin";

export function ICForm({backendActor}) {
  // const [backendActor, setBackendActor] = useState();
  // const [userId, setUserId] = useState();
  // const [userName, setUserName] = useState();


  function handleAddUserResults(event) {
    event.preventDefault();
    const results = event.target.elements.results.value;
    backendActor.addUserResults(result).then((response) => {
      if (response.ok) {
        console.log(response.ok);
        // setUserId(response.ok.id.toString());
        // setUserName(response.ok.name);
      } else if (response.err) {
        // setUserId(response.err);
      } else {
        console.error(response);
        // setUserId("Unexpected error, check the console");
      }
    });
    return false;
  }

  return (
    <div>
      {/* <img src="/logo2.svg" alt="DFINITY logo" /> */}
      {/* <br />
      <br /> */}
      <h1>IC Actions </h1>
      {/* {!backendActor && (
        <section id="nfid-section">
          <NfidLogin setBackendActor={setBackendActor}></NfidLogin>
        </section>
      )} */}
      {backendActor && (
        <>
          <form action="#" onSubmit={handleAddUserResults}>
            <label htmlFor="result">Enter your results: &nbsp;</label>
            <input id="result" alt="Results" type="text" />
            <button type="submit">Save</button>
          </form>
          {/* {userId && <section className="response">{userId}</section>}
          {userName && <section className="response">{userName}</section>} */}
        </>
      )}
    </div>
  );
}

