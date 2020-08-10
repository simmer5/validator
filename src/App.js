import React, { useState, useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Input from "./components/Input";

function App() {
  const [number, setNumber] = useState("");
  const [errAlert, setErrAlert] = useState(false);
  const [msgCode, setMsgCode] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const inputValidator = (number) => {
    const onlyNum = /^[0-9]+$/;

    const fullNr = number.split("");
    // fnrForK1 - fødselsnummer without 2 last numbers for calculation k1-kontrolsiffer
    const fnrForK1 = fullNr.slice(0, 9);
    // kntrSiffer - kontrollsifferet two last numbers of fødselsnummer
    const kntrSiffer = parseInt(fullNr.slice(9, 12).join(""));
    //k1_k2 - container for caltulated kontrollsiffer
    const k1_k2 = [];
    //special numbers for multiplication
    const k1_sjekNum = [3, 7, 6, 1, 8, 9, 4, 5, 2];
    const k2_sjekNum = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    //k1 - the first kontrollsifferet
    const k1 =
      11 -
      (fnrForK1
        .reduce((acc, val, idx) => {
          acc[idx] = val * k1_sjekNum[idx];
          return acc;
        }, k1_sjekNum)
        .reduce((acc, value) => acc + value) %
        11);
    // kontrolsiffer can't be 11
    k1 !== 11 ? k1_k2.push(k1) : k1_k2.push(0);
    // fnrForK2 - fødselsnummer without 2 last numbers plus k1 for calculation k2-kontrolsiffer
    const fnrForK2 = [...fnrForK1, k1.toString()];
    //k1 - the first kontrollsifferet
    const k2 =
      11 -
      (fnrForK2
        .reduce((acc, val, idx) => {
          acc[idx] = val * k2_sjekNum[idx];
          return acc;
        }, k1_sjekNum)
        .reduce((acc, value) => acc + value) %
        11);
    // kontrolsiffer can't be 11
    k2 !== 11 ? k1_k2.push(k2) : k1_k2.push(0);

    const k1k2 = parseInt(k1_k2.join(""));

    return number.length !== 11
      ? setErrAlert(true) || setMsgCode(1)
      : !number.match(onlyNum)
      ? setErrAlert(true) || setMsgCode(2)
      : k1k2 !== kntrSiffer
      ? setErrAlert(true) || setMsgCode(2)
      : setMsgCode(0) ||
        setNumber("") ||
        setErrAlert(false) ||
        clearInput() ||
        setTimeout(() => {
          setMsgCode(null);
        }, 3000);
  };

  const onInputChange = (e) => {
    setNumber(e.target.value);

    return e.target.value.length === 0
      ? setErrAlert(false) || setMsgCode(null)
      : null;
  };
  const clearInput = () => {
    inputRef.current.value = "";
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    inputValidator(number);
  };

  return (
    <Box component="div">
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Paper
            variant="outlined"
            style={{ width: "100%", margin: 10, padding: 10 }}
          >
            <Grid item xs={12} sm={12} md={12}>
              <form onSubmit={handelFormSubmit}>
                <Input
                  inputRef={inputRef}
                  label="FØDSELSNUMMER"
                  handelChange={onInputChange}
                  errAlert={errAlert}
                  msgCode={msgCode}
                />
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
